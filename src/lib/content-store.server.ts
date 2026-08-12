/** Server-only content store operations backed by the GitHub Contents API. */
import { getRequestHeader } from "@tanstack/react-start/server";

import { readSession } from "./auth.server";
import {
  pathForType,
  parseDoc,
  serializeDoc,
  slugify,
  typeById,
  type ContentDoc,
} from "./content-schema";
import type { SaveInput } from "./content-validators";
import * as gh from "./github.server";

export async function requireAdmin() {
  const session = await readSession(getRequestHeader("cookie"));
  if (!session)
    throw new Error("Your session has expired. Please sign in again.");
  return session;
}

export function toMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return "Something went wrong. Please try again.";
}

export async function loadAll(): Promise<ContentDoc[]> {
  const cfg = gh.getRepoConfig();
  const files = await gh.listMarkdownFiles(cfg);
  const results = await Promise.all(
    files.map(async (file) => {
      const found = await gh.readFile(cfg, file.path);
      return found
        ? { ...parseDoc(found.content, file.path), sha: found.sha }
        : null;
    }),
  );
  const docs: ContentDoc[] = results.filter((doc) => doc !== null);
  return docs.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export async function readDoc(path: string) {
  const cfg = gh.getRepoConfig();
  const found = await gh.readFile(cfg, path);
  if (!found) return null;
  return { ...parseDoc(found.content, path), sha: found.sha };
}

export async function saveDoc(data: SaveInput) {
  const type = typeById(data.type);
  if (!type) throw new Error("Unknown content type.");
  const slug =
    type.kind === "file"
      ? slugify(data.slug?.trim() || type.id)
      : slugify(
          data.slug?.trim() ||
            String(
              data.frontmatter["slug"] ??
                data.frontmatter["title"] ??
                data.frontmatter["name"] ??
                "",
            ),
        );
  if (!slug)
    throw new Error("Could not generate a valid slug from that title.");

  const path = pathForType(type, slug);
  const cfg = gh.getRepoConfig();
  const moving = Boolean(data.originalPath && data.originalPath !== path);
  const existing = data.originalPath
    ? await gh.readFile(cfg, data.originalPath)
    : null;
  if (data.originalPath && !existing)
    throw new Error(
      "The original GitHub file no longer exists. Reload content before saving so it is not recreated accidentally.",
    );
  const original = existing
    ? parseDoc(existing.content, data.originalPath ?? "")
    : null;
  const frontmatter = {
    ...(original?.frontmatter ?? {}),
    ...data.frontmatter,
    ...(original ? {} : { type: type.id }),
    ...(type.kind === "collection" ? { slug } : {}),
  };
  const markdown = serializeDoc(
    frontmatter,
    data.body,
    original?.rawFrontmatter ?? null,
  );
  const commit = await gh.writeFile(
    cfg,
    path,
    markdown,
    `content(${type.id}): ${moving ? "move" : "publish"} ${slug}`,
  );

  if (moving && data.originalPath) {
    await gh.deleteFile(
      cfg,
      data.originalPath,
      `content(${type.id}): remove ${data.originalPath}`,
    );
  }
  return commit;
}

export async function deleteDoc(path: string) {
  const cfg = gh.getRepoConfig();
  return gh.deleteFile(cfg, path, `content: delete ${path}`);
}

export function repoSettings() {
  return {
    owner: process.env["GITHUB_OWNER"] ?? "0mehedihasan",
    repo: process.env["GITHUB_REPO"] ?? "mdmehedihasan_portfolio",
    branch: process.env["GITHUB_BRANCH"] ?? "main",
  };
}
