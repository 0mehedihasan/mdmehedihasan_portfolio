/** Server-only content store operations backed by the GitHub Contents API. */
import { getRequestHeader } from "@tanstack/react-start/server";

import { readSession } from "./auth.server";
import {
  CONTENT_TYPES,
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
  const docs: ContentDoc[] = [];
  for (const type of CONTENT_TYPES) {
    if (type.kind === "file") {
      const found = await gh.readFile(cfg, type.path);
      if (!found) continue;
      const doc = parseDoc(found.content, type.path, type.id);
      docs.push({ ...doc, type: type.id, sha: found.sha });
      continue;
    }

    const files = await gh.listDir(cfg, type.path);
    for (const file of files) {
      const found = await gh.readFile(cfg, file.path);
      if (!found) continue;
      const doc = parseDoc(found.content, file.path, type.id);
      docs.push({ ...doc, type: type.id, sha: found.sha });
    }
  }
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
  if (!data.body.trim()) throw new Error("Markdown content cannot be empty.");

  const slug =
    type.kind === "file"
      ? slugify(data.slug?.trim() || type.id)
      : slugify(data.slug?.trim() || data.title);
  if (!slug)
    throw new Error("Could not generate a valid slug from that title.");

  const path = pathForType(type, slug);
  const markdown = serializeDoc(
    {
      title: data.title,
      slug,
      type: type.id,
      date: data.date?.trim() || new Date().toISOString().slice(0, 10),
      tags: data.tags ?? [],
      summary: data.summary ?? "",
      image: data.image ?? "",
      draft: Boolean(data.draft),
    },
    data.body,
  );

  const cfg = gh.getRepoConfig();
  const moving = Boolean(data.originalPath && data.originalPath !== path);
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
