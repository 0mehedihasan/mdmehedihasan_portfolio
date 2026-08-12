import { i as getRequestHeader } from "./server-BCuMsvYu.mjs";
import { a as slugify, i as serializeDoc, n as parseDoc, o as typeById, r as pathForType, t as CONTENT_TYPES } from "./content-schema-C_mrsX9G.mjs";
import { readSession } from "./auth.server-DIMjewQe.mjs";
import { deleteFile, getRepoConfig, listDir, readFile, writeFile } from "./github.server-Clt8emgX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-store.server-D22kb1-v.js
/** Server-only content store operations backed by the GitHub Contents API. */
async function requireAdmin() {
	const session = await readSession(getRequestHeader("cookie"));
	if (!session) throw new Error("Your session has expired. Please sign in again.");
	return session;
}
function toMessage(error) {
	if (error instanceof Error) return error.message;
	return "Something went wrong. Please try again.";
}
async function loadAll() {
	const cfg = getRepoConfig();
	const docs = [];
	for (const type of CONTENT_TYPES) {
		if (type.kind === "file") {
			const found = await readFile(cfg, type.path);
			if (!found) continue;
			const doc = parseDoc(found.content, type.path, type.id);
			docs.push({
				...doc,
				type: type.id,
				sha: found.sha
			});
			continue;
		}
		const files = await listDir(cfg, type.path);
		for (const file of files) {
			const found = await readFile(cfg, file.path);
			if (!found) continue;
			const doc = parseDoc(found.content, file.path, type.id);
			docs.push({
				...doc,
				type: type.id,
				sha: found.sha
			});
		}
	}
	return docs.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}
async function readDoc(path) {
	const cfg = getRepoConfig();
	const found = await readFile(cfg, path);
	if (!found) return null;
	return {
		...parseDoc(found.content, path),
		sha: found.sha
	};
}
async function saveDoc(data) {
	const type = typeById(data.type);
	if (!type) throw new Error("Unknown content type.");
	if (!data.body.trim()) throw new Error("Markdown content cannot be empty.");
	const slug = type.kind === "file" ? slugify(data.slug?.trim() || type.id) : slugify(data.slug?.trim() || data.title);
	if (!slug) throw new Error("Could not generate a valid slug from that title.");
	const path = pathForType(type, slug);
	const markdown = serializeDoc({
		title: data.title,
		slug,
		type: type.id,
		date: data.date?.trim() || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
		tags: data.tags ?? [],
		summary: data.summary ?? "",
		abstract: data.type === "research" ? data.abstract ?? "" : "",
		image: data.image ?? "",
		draft: Boolean(data.draft),
		extra: data.extra ?? {}
	}, data.body);
	const cfg = getRepoConfig();
	const moving = Boolean(data.originalPath && data.originalPath !== path);
	const commit = await writeFile(cfg, path, markdown, `content(${type.id}): ${moving ? "move" : "publish"} ${slug}`);
	if (moving && data.originalPath) await deleteFile(cfg, data.originalPath, `content(${type.id}): remove ${data.originalPath}`);
	return commit;
}
async function deleteDoc(path) {
	const cfg = getRepoConfig();
	return deleteFile(cfg, path, `content: delete ${path}`);
}
function repoSettings() {
	return {
		owner: process.env["GITHUB_OWNER"] ?? "0mehedihasan",
		repo: process.env["GITHUB_REPO"] ?? "mdmehedihasan_portfolio",
		branch: process.env["GITHUB_BRANCH"] ?? "main"
	};
}
//#endregion
export { deleteDoc, loadAll, readDoc, repoSettings, requireAdmin, saveDoc, toMessage };
