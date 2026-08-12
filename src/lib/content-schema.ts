export type ContentTypeId =
  | "research"
  | "project"
  | "publication"
  | "article"
  | "tutorial"
  | "dataset"
  | "conference"
  | "certification"
  | "award"
  | "activity";

export type ContentType = {
  id: ContentTypeId;
  label: string;
  dir: string;
  description: string;
};

export const CONTENT_TYPES: ContentType[] = [
  { id: "research", label: "Research", dir: "content/research", description: "Research notes and write-ups" },
  { id: "project", label: "Research Project", dir: "content/projects", description: "Project deep dives" },
  { id: "publication", label: "Publication", dir: "content/publications", description: "Papers and manuscripts" },
  { id: "article", label: "Article", dir: "content/articles", description: "Long-form articles" },
  { id: "tutorial", label: "Tutorial", dir: "content/tutorials", description: "Technical tutorials" },
  { id: "dataset", label: "Dataset", dir: "content/datasets", description: "Dataset documentation" },
  { id: "conference", label: "Conference", dir: "content/conferences", description: "Conference activities" },
  { id: "certification", label: "Certification", dir: "content/certifications", description: "Training records" },
  { id: "award", label: "Award", dir: "content/awards", description: "Honors and awards" },
  { id: "activity", label: "Professional Activity", dir: "content/extracurricular", description: "Volunteering and leadership" },
];

export function typeById(id: string): ContentType | undefined {
  return CONTENT_TYPES.find((t) => t.id === id);
}

export function slugify(input: string): string {
  return input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['’"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export type Frontmatter = {
  title: string;
  slug: string;
  type: ContentTypeId;
  date: string;
  tags: string[];
  image?: string | null;
  summary?: string | null;
  draft?: boolean;
};

export type ContentDoc = Frontmatter & {
  body: string;
  path: string;
  sha?: string;
};

function escapeYaml(value: string): string {
  return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

export function serializeDoc(fm: Frontmatter, body: string): string {
  const lines = [
    "---",
    `title: ${escapeYaml(fm.title)}`,
    `slug: ${escapeYaml(fm.slug)}`,
    `type: ${escapeYaml(fm.type)}`,
    `date: ${escapeYaml(fm.date)}`,
    `tags: [${fm.tags.map((t) => escapeYaml(t)).join(", ")}]`,
    `summary: ${escapeYaml(fm.summary ?? "")}`,
    `image: ${escapeYaml(fm.image ?? "")}`,
    `draft: ${fm.draft ? "true" : "false"}`,
    "---",
    "",
    body.trimEnd(),
    "",
  ];
  return lines.join("\n");
}

function unquote(value: string): string {
  const v = value.trim();
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    return v.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
  }
  return v;
}

export function parseDoc(raw: string, path = ""): ContentDoc {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  const body = (match?.[2] ?? raw) || "";
  const fm: Record<string, string> = {};
  if (match) {
    for (const line of (match[1] ?? "").split(/\r?\n/)) {
      const idx = line.indexOf(":");
      if (idx === -1) continue;
      fm[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
    }
  }
  const tagsRaw = fm["tags"] ?? "";
  const tags = tagsRaw
    .replace(/^\[|\]$/g, "")
    .split(",")
    .map((t) => unquote(t))
    .filter(Boolean);
  const fallbackSlug = path.split("/").pop()?.replace(/\.md$/, "") ?? "";
  return {
    title: unquote(fm["title"] ?? fallbackSlug),
    slug: unquote(fm["slug"] ?? fallbackSlug),
    type: (unquote(fm["type"] ?? "article") as ContentTypeId) || "article",
    date: unquote(fm["date"] ?? ""),
    tags,
    summary: unquote(fm["summary"] ?? "") || null,
    image: unquote(fm["image"] ?? "") || null,
    draft: unquote(fm["draft"] ?? "false") === "true",
    body: body.replace(/^\n+/, ""),
    path,
  };
}
