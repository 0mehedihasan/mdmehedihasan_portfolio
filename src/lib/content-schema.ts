export type ContentTypeId =
  | "profile"
  | "about"
  | "research-interests"
  | "experience"
  | "education"
  | "skills"
  | "research"
  | "project"
  | "publication"
  | "article"
  | "tutorial"
  | "dataset"
  | "conference"
  | "certification"
  | "award"
  | "activity"
  | "membership"
  | "cv"
  | "settings";

export type ContentType = {
  id: ContentTypeId;
  label: string;
  path: string;
  kind: "file" | "collection";
  description: string;
};

export const CONTENT_TYPES: ContentType[] = [
  {
    id: "profile",
    label: "Profile",
    path: "content/profile.md",
    kind: "file",
    description: "Hero and profile details",
  },
  {
    id: "about",
    label: "About",
    path: "content/about.md",
    kind: "file",
    description: "Professional summary",
  },
  {
    id: "research-interests",
    label: "Research Interests",
    path: "content/research-interests.md",
    kind: "file",
    description: "Research focus and themes",
  },
  {
    id: "experience",
    label: "Experience",
    path: "content/experience.md",
    kind: "file",
    description: "Work history",
  },
  {
    id: "education",
    label: "Education",
    path: "content/education.md",
    kind: "file",
    description: "Academic history",
  },
  {
    id: "skills",
    label: "Technical Skills",
    path: "content/skills.md",
    kind: "file",
    description: "Skill inventory",
  },
  {
    id: "membership",
    label: "Memberships",
    path: "content/memberships.md",
    kind: "file",
    description: "Professional memberships",
  },
  {
    id: "cv",
    label: "CV",
    path: "content/cv.md",
    kind: "file",
    description: "Academic CV metadata",
  },
  {
    id: "settings",
    label: "Settings",
    path: "content/settings.md",
    kind: "file",
    description: "Site and profile settings",
  },
  {
    id: "research",
    label: "Research",
    path: "content/research",
    kind: "collection",
    description: "Research notes and write-ups",
  },
  {
    id: "project",
    label: "Research Project",
    path: "content/projects",
    kind: "collection",
    description: "Project deep dives",
  },
  {
    id: "publication",
    label: "Publication",
    path: "content/publications",
    kind: "collection",
    description: "Papers and manuscripts",
  },
  {
    id: "article",
    label: "Article",
    path: "content/articles",
    kind: "collection",
    description: "Long-form articles",
  },
  {
    id: "tutorial",
    label: "Tutorial",
    path: "content/tutorials",
    kind: "collection",
    description: "Technical tutorials",
  },
  {
    id: "dataset",
    label: "Dataset",
    path: "content/datasets",
    kind: "collection",
    description: "Dataset documentation",
  },
  {
    id: "conference",
    label: "Conference",
    path: "content/conferences",
    kind: "collection",
    description: "Conference activities",
  },
  {
    id: "certification",
    label: "Certification",
    path: "content/certifications",
    kind: "collection",
    description: "Training records",
  },
  {
    id: "award",
    label: "Award",
    path: "content/awards",
    kind: "collection",
    description: "Honors and awards",
  },
  {
    id: "activity",
    label: "Professional Activity",
    path: "content/extracurricular",
    kind: "collection",
    description: "Volunteering and leadership",
  },
];

export function typeById(id: string): ContentType | undefined {
  return CONTENT_TYPES.find((t) => t.id === id);
}

export function pathForType(type: ContentType, slug: string): string {
  if (type.kind === "file") return type.path;
  return `${type.path}/${slug}.md`;
}

export function inferTypeIdFromPath(path: string): ContentTypeId | undefined {
  const exact = CONTENT_TYPES.find(
    (type) => type.kind === "file" && type.path === path,
  );
  if (exact) return exact.id;
  const collection = CONTENT_TYPES.find(
    (type) => type.kind === "collection" && path.startsWith(`${type.path}/`),
  );
  return collection?.id;
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
  abstract?: string | null;
  draft?: boolean;
  extra?: Record<string, string>;
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
    ...(fm.type === "research"
      ? [`abstract: ${escapeYaml(fm.abstract ?? "")}`]
      : []),
    `image: ${escapeYaml(fm.image ?? "")}`,
    `draft: ${fm.draft ? "true" : "false"}`,
    ...Object.entries(fm.extra ?? {}).map(([key, value]) => `${key}: ${value}`),
    "---",
    "",
    body.trimEnd(),
    "",
  ];
  return lines.join("\n");
}

function unquote(value: string): string {
  const v = value.trim();
  if (
    (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
  ) {
    return v.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
  }
  return v;
}

export function parseDoc(
  raw: string,
  path = "",
  typeId?: ContentTypeId,
): ContentDoc {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  const body = (match?.[2] ?? raw) || "";
  const fm: Record<string, string> = {};
  if (match) {
    let activeListKey: string | null = null;
    for (const line of (match[1] ?? "").split(/\r?\n/)) {
      const listItem = /^\s*-\s+(.+)$/.exec(line);
      if (activeListKey && listItem) {
        fm[activeListKey] = `${fm[activeListKey] ?? ""}${fm[activeListKey] ? "," : ""}${listItem[1]}`;
        continue;
      }
      const idx = line.indexOf(":");
      if (idx === -1) {
        activeListKey = null;
        continue;
      }
      const key = line.slice(0, idx).trim();
      const value = line.slice(idx + 1).trim();
      fm[key] = value;
      activeListKey = key === "tags" && !value ? key : null;
    }
  }
  const tagsRaw = fm["tags"] ?? "";
  const tags = tagsRaw
    .replace(/^\[|\]$/g, "")
    .split(",")
    .map((t) => unquote(t))
    .filter(Boolean);
  const fallbackSlug = path.split("/").pop()?.replace(/\.md$/, "") ?? "";
  const inferredType = typeId ?? inferTypeIdFromPath(path) ?? "article";
  const type =
    (unquote(fm["type"] ?? inferredType) as ContentTypeId) || inferredType;
  const known = new Set([
    "title",
    "slug",
    "type",
    "date",
    "tags",
    "summary",
    "abstract",
    "image",
    "draft",
  ]);
  const extra = Object.fromEntries(
    Object.entries(fm).filter(([key]) => !known.has(key)),
  );
  return {
    title: unquote(fm["title"] ?? fallbackSlug),
    slug: unquote(fm["slug"] ?? fallbackSlug),
    type,
    date: unquote(fm["date"] ?? ""),
    tags,
    summary: unquote(fm["summary"] ?? "") || null,
    abstract:
      type === "research" ? unquote(fm["abstract"] ?? "") || null : null,
    image: unquote(fm["image"] ?? "") || null,
    draft: unquote(fm["draft"] ?? "false") === "true",
    body: body.replace(/^\n+/, ""),
    path,
    extra,
  };
}
