//#region node_modules/.nitro/vite/services/ssr/assets/github.server-Clt8emgX.js
/**
* Server-only GitHub Contents API client.
* The token never leaves the server; it is never returned, logged, or embedded
* in an error message.
*/
var API = "https://api.github.com";
var GitHubError = class extends Error {
	status;
	constructor(message, status = 500) {
		super(message);
		this.name = "GitHubError";
		this.status = status;
	}
};
function getRepoConfig() {
	const token = process.env["GITHUB_TOKEN"];
	const owner = process.env["GITHUB_OWNER"] ?? "0mehedihasan";
	const repo = process.env["GITHUB_REPO"] ?? "mdmehedihasan_portfolio";
	const branch = process.env["GITHUB_BRANCH"] ?? "main";
	if (!token) throw new GitHubError("GitHub is not configured on the server. Add a GITHUB_TOKEN environment variable to your deployment, then try again.", 503);
	return {
		token,
		owner,
		repo,
		branch
	};
}
function isGitHubConfigured() {
	return Boolean(process.env["GITHUB_TOKEN"]);
}
function describe(status, ghMessage) {
	switch (status) {
		case 401: return "GitHub rejected the credentials (401). The configured token is invalid or expired — replace it in your deployment environment variables.";
		case 403: return ghMessage.toLowerCase().includes("rate limit") ? "GitHub API rate limit reached (403). Please wait a few minutes and try again." : "GitHub denied the request (403). The token likely lacks 'contents: write' permission on this repository.";
		case 404: return "Not found on GitHub (404). The repository, branch, or file does not exist.";
		case 409: return "Conflict on GitHub (409). The file changed since it was loaded — reload the item and publish again.";
		case 422: return `GitHub could not process the request (422). ${ghMessage || "Check the file path and content."}`;
		default: return `GitHub request failed (${status}). ${ghMessage}`;
	}
}
async function gh(cfg, path, init = {}) {
	let res;
	try {
		res = await fetch(`${API}${path}`, {
			...init,
			headers: {
				Accept: "application/vnd.github+json",
				"X-GitHub-Api-Version": "2022-11-28",
				"User-Agent": "mdmehedihasan-portfolio",
				Authorization: `Bearer ${cfg.token}`,
				...init.body ? { "Content-Type": "application/json" } : {},
				...init.headers
			}
		});
	} catch {
		throw new GitHubError("Could not reach GitHub. Check the network connection and try again.", 502);
	}
	if (res.status === 404) throw new GitHubError(describe(404, ""), 404);
	if (!res.ok) {
		let message = "";
		try {
			message = (await res.json()).message ?? "";
		} catch {
			message = "";
		}
		throw new GitHubError(describe(res.status, message), res.status);
	}
	if (res.status === 204) return void 0;
	return await res.json();
}
function encodePath(p) {
	return p.split("/").map(encodeURIComponent).join("/");
}
function b64encode(text) {
	const bytes = new TextEncoder().encode(text);
	let binary = "";
	bytes.forEach((b) => {
		binary += String.fromCharCode(b);
	});
	return btoa(binary);
}
function b64decode(data) {
	const binary = atob(data.replace(/\n/g, ""));
	const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
	return new TextDecoder().decode(bytes);
}
async function listDir(cfg, dir) {
	try {
		const data = await gh(cfg, `/repos/${cfg.owner}/${cfg.repo}/contents/${encodePath(dir)}?ref=${encodeURIComponent(cfg.branch)}`);
		if (!Array.isArray(data)) return [];
		return data.filter((f) => f.type === "file" && f.name.endsWith(".md"));
	} catch (error) {
		if (error instanceof GitHubError && error.status === 404) return [];
		throw error;
	}
}
async function readFile(cfg, path) {
	try {
		const data = await gh(cfg, `/repos/${cfg.owner}/${cfg.repo}/contents/${encodePath(path)}?ref=${encodeURIComponent(cfg.branch)}`);
		return {
			content: b64decode(data.content ?? ""),
			sha: data.sha
		};
	} catch (error) {
		if (error instanceof GitHubError && error.status === 404) return null;
		throw error;
	}
}
async function writeFile(cfg, path, content, message) {
	const existing = await readFile(cfg, path);
	const data = await gh(cfg, `/repos/${cfg.owner}/${cfg.repo}/contents/${encodePath(path)}`, {
		method: "PUT",
		body: JSON.stringify({
			message,
			content: b64encode(content),
			branch: cfg.branch,
			...existing ? { sha: existing.sha } : {}
		})
	});
	return {
		sha: data.commit.sha,
		url: data.commit.html_url,
		path,
		created: !existing
	};
}
async function deleteFile(cfg, path, message) {
	const existing = await readFile(cfg, path);
	if (!existing) throw new GitHubError("That file no longer exists on GitHub (404).", 404);
	const data = await gh(cfg, `/repos/${cfg.owner}/${cfg.repo}/contents/${encodePath(path)}`, {
		method: "DELETE",
		body: JSON.stringify({
			message,
			sha: existing.sha,
			branch: cfg.branch
		})
	});
	return {
		sha: data.commit.sha,
		url: data.commit.html_url,
		path,
		created: false
	};
}
async function repoInfo(cfg) {
	return await gh(cfg, `/repos/${cfg.owner}/${cfg.repo}`);
}
//#endregion
export { deleteFile, getRepoConfig, isGitHubConfigured, listDir, readFile, repoInfo, writeFile };
