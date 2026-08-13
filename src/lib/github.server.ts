/**
 * Server-only GitHub Contents API client.
 * The token never leaves the server; it is never returned, logged, or embedded
 * in an error message.
 */

const API = "https://api.github.com";

export type RepoConfig = {
  token: string;
  owner: string;
  repo: string;
  branch: string;
};

export class GitHubError extends Error {
  status: number;
  constructor(message: string, status = 500) {
    super(message);
    this.name = "GitHubError";
    this.status = status;
  }
}

export function getRepoConfig(): RepoConfig {
  const token = process.env["GITHUB_TOKEN"];
  const owner = process.env["GITHUB_OWNER"] ?? "0mehedihasan";
  const repo = process.env["GITHUB_REPO"] ?? "mdmehedihasan_portfolio";
  const branch = process.env["GITHUB_BRANCH"] ?? "main";
  if (!token) {
    throw new GitHubError(
      "GitHub is not configured on the server. Add a GITHUB_TOKEN environment variable to your deployment, then try again.",
      503,
    );
  }
  return { token, owner, repo, branch };
}

export function isGitHubConfigured(): boolean {
  return Boolean(process.env["GITHUB_TOKEN"]);
}

function describe(status: number, ghMessage: string): string {
  switch (status) {
    case 401:
      return "GitHub rejected the credentials (401). The configured token is invalid or expired — replace it in your deployment environment variables.";
    case 403:
      return ghMessage.toLowerCase().includes("rate limit")
        ? "GitHub API rate limit reached (403). Please wait a few minutes and try again."
        : "GitHub denied the request (403). The token likely lacks 'contents: write' permission on this repository.";
    case 404:
      return "Not found on GitHub (404). The repository, branch, or file does not exist.";
    case 409:
      return "Conflict on GitHub (409). The file changed since it was loaded — reload the item and publish again.";
    case 422:
      return `GitHub could not process the request (422). ${ghMessage || "Check the file path and content."}`;
    default:
      return `GitHub request failed (${status}). ${ghMessage}`;
  }
}

async function gh<T>(
  cfg: RepoConfig,
  path: string,
  init: RequestInit = {},
): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API}${path}`, {
      ...init,
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "mdmehedihasan-portfolio",
        Authorization: `Bearer ${cfg.token}`,
        ...(init.body ? { "Content-Type": "application/json" } : {}),
        ...(init.headers as Record<string, string> | undefined),
      },
    });
  } catch {
    throw new GitHubError(
      "Could not reach GitHub. Check the network connection and try again.",
      502,
    );
  }

  if (res.status === 404) throw new GitHubError(describe(404, ""), 404);
  if (!res.ok) {
    let message = "";
    try {
      const data = (await res.json()) as { message?: string };
      message = data.message ?? "";
    } catch {
      message = "";
    }
    throw new GitHubError(describe(res.status, message), res.status);
  }
  if (res.status === 204) return undefined as T;
  return (await res.json()) as T;
}

function encodePath(p: string) {
  return p.split("/").map(encodeURIComponent).join("/");
}

function b64encode(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary);
}

function b64decode(data: string): string {
  const binary = atob(data.replace(/\n/g, ""));
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

export type RepoFile = {
  name: string;
  path: string;
  sha: string;
  size: number;
};

export async function listDir(
  cfg: RepoConfig,
  dir: string,
): Promise<RepoFile[]> {
  try {
    const data = await gh<Array<RepoFile & { type: string }>>(
      cfg,
      `/repos/${cfg.owner}/${cfg.repo}/contents/${encodePath(dir)}?ref=${encodeURIComponent(cfg.branch)}`,
    );
    if (!Array.isArray(data)) return [];
    return data.filter((f) => f.type === "file" && f.name.endsWith(".md"));
  } catch (error) {
    if (error instanceof GitHubError && error.status === 404) return [];
    throw error;
  }
}

/** Lists every Markdown file below a directory using GitHub's recursive tree API. */
export async function listMarkdownFiles(
  cfg: RepoConfig,
  directory = "content",
): Promise<RepoFile[]> {
  try {
    const tree = await gh<{
      tree: Array<{ path: string; type: string; sha: string; size?: number }>;
    }>(
      cfg,
      `/repos/${cfg.owner}/${cfg.repo}/git/trees/${encodeURIComponent(cfg.branch)}?recursive=1`,
    );
    const prefix = `${directory.replace(/\/+$/, "")}/`;
    return tree.tree
      .filter(
        (entry) =>
          entry.type === "blob" &&
          entry.path.startsWith(prefix) &&
          entry.path.endsWith(".md"),
      )
      .map((entry) => ({
        name: entry.path.split("/").pop() ?? entry.path,
        path: entry.path,
        sha: entry.sha,
        size: entry.size ?? 0,
      }));
  } catch (error) {
    if (error instanceof GitHubError && error.status === 404) return [];
    throw error;
  }
}

export async function readFile(
  cfg: RepoConfig,
  path: string,
): Promise<{ content: string; sha: string } | null> {
  try {
    const data = await gh<{ content: string; sha: string; encoding: string }>(
      cfg,
      `/repos/${cfg.owner}/${cfg.repo}/contents/${encodePath(path)}?ref=${encodeURIComponent(cfg.branch)}`,
    );
    return { content: b64decode(data.content ?? ""), sha: data.sha };
  } catch (error) {
    if (error instanceof GitHubError && error.status === 404) return null;
    throw error;
  }
}

export type CommitResult = {
  sha: string;
  url: string;
  path: string;
  created: boolean;
};

export type CommitHistoryEntry = {
  sha: string;
  url: string;
  message: string;
  date: string;
};

export type DeploymentState =
  | "pending"
  | "building"
  | "ready"
  | "failed"
  | "unavailable";

export type DeploymentInfo = {
  state: DeploymentState;
  url: string | null;
  description: string;
};

export async function readFileAtRef(
  cfg: RepoConfig,
  path: string,
  ref: string,
): Promise<{ content: string; sha: string } | null> {
  try {
    const data = await gh<{ content: string; sha: string }>(
      cfg,
      `/repos/${cfg.owner}/${cfg.repo}/contents/${encodePath(path)}?ref=${encodeURIComponent(ref)}`,
    );
    return { content: b64decode(data.content ?? ""), sha: data.sha };
  } catch (error) {
    if (error instanceof GitHubError && error.status === 404) return null;
    throw error;
  }
}

export async function listFileCommits(
  cfg: RepoConfig,
  path: string,
): Promise<CommitHistoryEntry[]> {
  const data = await gh<
    Array<{
      sha: string;
      html_url: string;
      commit: { message: string; author: { date: string } | null };
    }>
  >(
    cfg,
    `/repos/${cfg.owner}/${cfg.repo}/commits?path=${encodeURIComponent(path)}&sha=${encodeURIComponent(cfg.branch)}&per_page=20`,
  );
  return data.map((entry) => ({
    sha: entry.sha,
    url: entry.html_url,
    message: entry.commit.message,
    date: entry.commit.author?.date ?? "",
  }));
}

export async function getDeploymentInfo(
  cfg: RepoConfig,
  sha: string,
): Promise<DeploymentInfo> {
  const data = await gh<{
    statuses: Array<{ context: string; state: string; target_url: string | null }>;
  }>(cfg, `/repos/${cfg.owner}/${cfg.repo}/commits/${encodeURIComponent(sha)}/status`);
  const deployment = data.statuses.find((status) =>
    /vercel|deploy/i.test(status.context),
  );
  if (!deployment)
    return {
      state: "unavailable",
      url: null,
      description: "No Vercel deployment status has been reported to GitHub yet.",
    };
  if (deployment.state === "success")
    return {
      state: "ready",
      url: deployment.target_url,
      description: "Production ready",
    };
  if (deployment.state === "failure" || deployment.state === "error")
    return {
      state: "failed",
      url: deployment.target_url,
      description: "Deployment failed",
    };
  return {
    state: /build/i.test(deployment.context) ? "building" : "pending",
    url: deployment.target_url,
    description: "Vercel is processing this commit.",
  };
}

export async function writeFile(
  cfg: RepoConfig,
  path: string,
  content: string,
  message: string,
): Promise<CommitResult> {
  const existing = await readFile(cfg, path);
  const data = await gh<{ commit: { sha: string; html_url: string } }>(
    cfg,
    `/repos/${cfg.owner}/${cfg.repo}/contents/${encodePath(path)}`,
    {
      method: "PUT",
      body: JSON.stringify({
        message,
        content: b64encode(content),
        branch: cfg.branch,
        ...(existing ? { sha: existing.sha } : {}),
      }),
    },
  );
  return {
    sha: data.commit.sha,
    url: data.commit.html_url,
    path,
    created: !existing,
  };
}

export async function deleteFile(
  cfg: RepoConfig,
  path: string,
  message: string,
): Promise<CommitResult> {
  const existing = await readFile(cfg, path);
  if (!existing)
    throw new GitHubError("That file no longer exists on GitHub (404).", 404);
  const data = await gh<{ commit: { sha: string; html_url: string } }>(
    cfg,
    `/repos/${cfg.owner}/${cfg.repo}/contents/${encodePath(path)}`,
    {
      method: "DELETE",
      body: JSON.stringify({ message, sha: existing.sha, branch: cfg.branch }),
    },
  );
  return {
    sha: data.commit.sha,
    url: data.commit.html_url,
    path,
    created: false,
  };
}

export async function repoInfo(cfg: RepoConfig) {
  const data = await gh<{
    full_name: string;
    html_url: string;
    homepage: string | null;
    private: boolean;
    default_branch: string;
  }>(cfg, `/repos/${cfg.owner}/${cfg.repo}`);
  return data;
}
