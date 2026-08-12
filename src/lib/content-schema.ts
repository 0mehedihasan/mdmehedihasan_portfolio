export type ContentTypeId =
  | "profile"
  | "about"
  | "research-interests"
  | "experience"
  | "education"
  | "skills"
  | "membership"
  | "cv"
  | "settings"
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

export type DetectedContentType = ContentTypeId | "unknown";
export type FieldKind =
  "text" | "textarea" | "date" | "tags" | "checkbox" | "url";
export type SchemaField = {
  key: string;
  label: string;
  kind: FieldKind;
  required?: boolean;
  media?: boolean;
};

export type ContentType = {
  id: ContentTypeId;
  label: string;
  path: string;
  kind: "file" | "collection";
  description: string;
  fields: SchemaField[];
  supportsMarkdown: boolean;
};

const text = (key: string, label: string, required = false): SchemaField => ({
  key,
  label,
  kind: "text",
  required,
});
const area = (key: string, label: string, required = false): SchemaField => ({
  key,
  label,
  kind: "textarea",
  required,
});
const date = (key: string, label: string): SchemaField => ({
  key,
  label,
  kind: "date",
});
const tags = (key = "tags", label = "Tags"): SchemaField => ({
  key,
  label,
  kind: "tags",
});
const url = (key: string, label: string, media = false): SchemaField => ({
  key,
  label,
  kind: "url",
  media,
});
const check = (key: string, label: string): SchemaField => ({
  key,
  label,
  kind: "checkbox",
});

export const CONTENT_TYPES: ContentType[] = [
  {
    id: "profile",
    label: "Profile",
    path: "content/profile.md",
    kind: "file",
    description: "Hero and profile details",
    supportsMarkdown: true,
    fields: [
      text("name", "Name"),
      text("headline", "Headline"),
      area("bio", "Bio"),
      url("email", "Email"),
      url("linkedin", "LinkedIn"),
      url("github", "GitHub"),
      url("orcid", "ORCID"),
      url("image", "Profile image", true),
      url("cv", "CV URL"),
    ],
  },
  {
    id: "about",
    label: "About",
    path: "content/about.md",
    kind: "file",
    description: "Professional summary",
    supportsMarkdown: true,
    fields: [
      text("title", "Title"),
      area("introduction", "Introduction"),
      area("research_philosophy", "Research philosophy"),
      area("current_focus", "Current focus"),
    ],
  },
  {
    id: "research-interests",
    label: "Research Interests",
    path: "content/research-interests.md",
    kind: "file",
    description: "Research focus and themes",
    supportsMarkdown: true,
    fields: [
      text("name", "Name"),
      area("description", "Description"),
      tags("keywords", "Keywords"),
      url("image", "Visual", true),
    ],
  },
  {
    id: "experience",
    label: "Experience",
    path: "content/experience.md",
    kind: "file",
    description: "Work history",
    supportsMarkdown: true,
    fields: [
      text("organization", "Organization"),
      text("position", "Position"),
      text("employment_type", "Employment type"),
      text("location", "Location"),
      date("start_date", "Start date"),
      date("end_date", "End date"),
      check("current", "Current role"),
      area("description", "Description"),
      area("responsibilities", "Responsibilities"),
      area("achievements", "Achievements"),
      tags("technologies", "Technologies"),
      url("logo", "Organization logo", true),
    ],
  },
  {
    id: "education",
    label: "Education",
    path: "content/education.md",
    kind: "file",
    description: "Academic history",
    supportsMarkdown: true,
    fields: [
      text("institution", "Institution"),
      text("degree", "Degree"),
      text("field", "Field of study"),
      date("start_date", "Start date"),
      date("end_date", "End date"),
      text("cgpa", "CGPA / grade"),
      text("location", "Location"),
      area("description", "Description"),
      url("logo", "Institution logo", true),
    ],
  },
  {
    id: "skills",
    label: "Technical Skills",
    path: "content/skills.md",
    kind: "file",
    description: "Skill inventory",
    supportsMarkdown: true,
    fields: [
      text("category", "Category"),
      tags("skills", "Skills"),
      text("proficiency", "Proficiency"),
      url("icon", "Icon", true),
    ],
  },
  {
    id: "membership",
    label: "Memberships",
    path: "content/memberships.md",
    kind: "file",
    description: "Professional memberships",
    supportsMarkdown: true,
    fields: [
      text("organization", "Organization"),
      text("membership_type", "Membership type"),
      text("role", "Role"),
      date("start_date", "Start date"),
      date("end_date", "End date"),
      text("status", "Status"),
      area("description", "Description"),
      url("credential_url", "Credential URL"),
    ],
  },
  {
    id: "cv",
    label: "CV",
    path: "content/cv.md",
    kind: "file",
    description: "Academic CV metadata",
    supportsMarkdown: true,
    fields: [text("title", "Title"), url("url", "CV URL")],
  },
  {
    id: "settings",
    label: "Settings",
    path: "content/settings.md",
    kind: "file",
    description: "Site settings",
    supportsMarkdown: true,
    fields: [
      text("title", "Site title"),
      area("description", "Site description"),
    ],
  },
  {
    id: "research",
    label: "Research",
    path: "content/research",
    kind: "collection",
    description: "Research notes and write-ups",
    supportsMarkdown: true,
    fields: [
      text("title", "Title", true),
      text("status", "Status"),
      date("date", "Date"),
      area("summary", "Summary"),
      area("abstract", "Abstract"),
      tags("keywords", "Keywords"),
      area("methods", "Methods"),
      text("dataset", "Dataset"),
      area("results", "Results"),
      url("code", "Code URL"),
      url("paper", "Paper URL"),
      url("image", "Image", true),
      check("draft", "GitHub draft"),
    ],
  },
  {
    id: "project",
    label: "Research Project",
    path: "content/projects",
    kind: "collection",
    description: "Project deep dives",
    supportsMarkdown: true,
    fields: [
      text("title", "Title", true),
      text("status", "Status"),
      text("role", "Role"),
      date("start_date", "Start date"),
      date("end_date", "End date"),
      area("description", "Description"),
      text("research_area", "Research area"),
      tags("technologies", "Technologies"),
      text("dataset", "Dataset"),
      area("results", "Results"),
      url("github", "GitHub URL"),
      url("paper", "Paper URL"),
      url("image", "Image", true),
      check("draft", "GitHub draft"),
    ],
  },
  {
    id: "publication",
    label: "Publication",
    path: "content/publications",
    kind: "collection",
    description: "Papers and manuscripts",
    supportsMarkdown: true,
    fields: [
      text("title", "Title", true),
      text("authors", "Authors"),
      text("journal", "Journal / conference"),
      text("year", "Year"),
      area("abstract", "Abstract"),
      text("doi", "DOI"),
      text("publisher", "Publisher"),
      text("volume", "Volume"),
      text("issue", "Issue"),
      text("pages", "Pages"),
      text("status", "Status"),
      tags("keywords", "Keywords"),
      url("pdf", "PDF URL"),
      url("url", "External URL"),
      area("citation", "Citation"),
      check("draft", "GitHub draft"),
    ],
  },
  {
    id: "article",
    label: "Article",
    path: "content/articles",
    kind: "collection",
    description: "Long-form articles",
    supportsMarkdown: true,
    fields: [
      text("title", "Title", true),
      text("slug", "Slug"),
      date("date", "Date"),
      text("author", "Author"),
      tags(),
      area("summary", "Summary"),
      url("image", "Cover image", true),
      check("draft", "GitHub draft"),
    ],
  },
  {
    id: "tutorial",
    label: "Tutorial",
    path: "content/tutorials",
    kind: "collection",
    description: "Technical tutorials",
    supportsMarkdown: true,
    fields: [
      text("title", "Title", true),
      text("slug", "Slug"),
      date("date", "Date"),
      text("author", "Author"),
      tags(),
      area("summary", "Summary"),
      url("image", "Cover image", true),
      check("draft", "GitHub draft"),
    ],
  },
  {
    id: "dataset",
    label: "Dataset",
    path: "content/datasets",
    kind: "collection",
    description: "Dataset documentation",
    supportsMarkdown: true,
    fields: [
      text("name", "Dataset name", true),
      area("description", "Description"),
      text("source", "Source"),
      text("size", "Size"),
      tags("modalities", "Modalities"),
      text("task", "Task"),
      text("license", "License"),
      area("citation", "Citation"),
      url("url", "URL"),
      url("documentation", "Documentation"),
      url("image", "Image", true),
      check("draft", "GitHub draft"),
    ],
  },
  {
    id: "conference",
    label: "Conference",
    path: "content/conferences",
    kind: "collection",
    description: "Conference activities",
    supportsMarkdown: true,
    fields: [
      text("name", "Conference name", true),
      text("role", "Role"),
      date("date", "Date"),
      text("location", "Location"),
      area("description", "Description"),
      url("url", "URL"),
      url("presentation", "Presentation / paper"),
      url("image", "Image", true),
      check("draft", "GitHub draft"),
    ],
  },
  {
    id: "certification",
    label: "Certification",
    path: "content/certifications",
    kind: "collection",
    description: "Training records",
    supportsMarkdown: true,
    fields: [
      text("name", "Name", true),
      text("issuer", "Issuing organization"),
      date("issue_date", "Issue date"),
      date("expiry_date", "Expiry date"),
      text("credential_id", "Credential ID"),
      url("credential_url", "Credential URL"),
      url("image", "Certificate image", true),
      check("draft", "GitHub draft"),
    ],
  },
  {
    id: "award",
    label: "Award",
    path: "content/awards",
    kind: "collection",
    description: "Honors and awards",
    supportsMarkdown: true,
    fields: [
      text("name", "Award name", true),
      text("issuer", "Issuing organization"),
      date("date", "Date"),
      area("description", "Description"),
      url("credential_url", "Credential URL"),
      url("image", "Image", true),
      check("draft", "GitHub draft"),
    ],
  },
  {
    id: "activity",
    label: "Professional Activity",
    path: "content/extracurricular",
    kind: "collection",
    description: "Volunteering and leadership",
    supportsMarkdown: true,
    fields: [
      text("activity", "Activity", true),
      text("organization", "Organization"),
      text("role", "Role"),
      date("date", "Date"),
      area("description", "Description"),
      url("url", "URL"),
      url("image", "Image", true),
      check("draft", "GitHub draft"),
    ],
  },
];

export type FrontmatterValue = string | string[] | boolean;
export type Frontmatter = Record<string, FrontmatterValue>;
export type ContentDoc = {
  type: DetectedContentType;
  title: string;
  slug: string;
  draft: boolean;
  date: string;
  summary: string;
  tags: string[];
  body: string;
  path: string;
  sha?: string;
  frontmatter: Frontmatter;
  rawFrontmatter: string | null;
};

export function typeById(id: string): ContentType | undefined {
  return CONTENT_TYPES.find((type) => type.id === id);
}
export function pathForType(type: ContentType, slug: string): string {
  return type.kind === "file" ? type.path : `${type.path}/${slug}.md`;
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

const aliases: Record<string, ContentTypeId> = {
  "research-project": "project",
  "research-projects": "project",
  "technical-skills": "skills",
  "technical-skill": "skills",
  memberships: "membership",
  "professional-activity": "activity",
  "professional-activities": "activity",
  professionalactivity: "activity",
  activities: "activity",
  extracurricular: "activity",
  "extracurricular-activity": "activity",
  "extracurricular-activities": "activity",
  conferences: "conference",
  certifications: "certification",
  awards: "award",
  publications: "publication",
  datasets: "dataset",
};
function normalType(value: unknown): ContentTypeId | undefined {
  const id = String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[_\s]+/g, "-");
  return typeById(id) ? (id as ContentTypeId) : aliases[id];
}

export function inferTypeIdFromPath(path: string): ContentTypeId | undefined {
  const normal = path.replace(/^\/+/, "").replace(/\\/g, "/");
  const exact = CONTENT_TYPES.find(
    (type) => type.kind === "file" && type.path === normal,
  );
  if (exact) return exact.id;
  const collection = CONTENT_TYPES.find(
    (type) => type.kind === "collection" && normal.startsWith(`${type.path}/`),
  );
  if (collection) return collection.id;

  // Repositories that predate the CMS use a few established directory names.
  // This is path-based detection only; unknown files remain unknown.
  const directory = normal
    .split("/")[1]
    ?.toLowerCase()
    .replace(/[_\s]+/g, "-");
  if (directory && normalType(directory)) return normalType(directory);
  const filename = normal
    .split("/")
    .pop()
    ?.replace(/\.md$/i, "")
    .replace(/[_\s]+/g, "-");
  return filename ? normalType(filename) : undefined;
}

function scalar(value: FrontmatterValue | undefined): string {
  return Array.isArray(value)
    ? value.join(", ")
    : typeof value === "boolean"
      ? String(value)
      : (value ?? "");
}
function unquote(value: string): string {
  const v = value.trim();
  return (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
    ? v.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
    : v;
}
function valueFromYaml(raw: string): FrontmatterValue {
  const value = raw.trim();
  if (value === "true") return true;
  if (value === "false") return false;
  if (value.startsWith("[") && value.endsWith("]"))
    return value
      .slice(1, -1)
      .split(",")
      .map((item) => unquote(item))
      .filter(Boolean);
  return unquote(value);
}
function yamlValue(value: FrontmatterValue): string {
  if (typeof value === "boolean") return String(value);
  if (Array.isArray(value))
    return `[${value.map((item) => JSON.stringify(item)).join(", ")}]`;
  return JSON.stringify(value);
}

export function parseDoc(raw: string, path = ""): ContentDoc {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  const rawFrontmatter = match?.[1] ?? null;
  const frontmatter: Frontmatter = {};
  if (rawFrontmatter) {
    let activeList: string | null = null;
    for (const line of rawFrontmatter.split(/\r?\n/)) {
      const item = /^\s+-\s+(.+)$/.exec(line);
      if (activeList && item) {
        const previous = frontmatter[activeList];
        frontmatter[activeList] = [
          ...(Array.isArray(previous) ? previous : []),
          unquote(item[1] ?? ""),
        ];
        continue;
      }
      const field = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line);
      if (!field) {
        activeList = null;
        continue;
      }
      const key = field[1] ?? "";
      const value = field[2] ?? "";
      frontmatter[key] = value ? valueFromYaml(value) : [];
      activeList = value ? null : key;
    }
  }
  const explicit = normalType(
    frontmatter["content_type"] ??
      frontmatter["contentType"] ??
      frontmatter["type"],
  );
  const type = explicit ?? inferTypeIdFromPath(path) ?? "unknown";
  const filename = path.split("/").pop()?.replace(/\.md$/i, "") ?? "Untitled";
  const title = scalar(
    frontmatter["title"] ??
      frontmatter["name"] ??
      frontmatter["organization"] ??
      filename,
  );
  const slug = scalar(frontmatter["slug"] ?? filename);
  const rawDraft = frontmatter["draft"];
  return {
    type,
    title,
    slug,
    draft: rawDraft === true || rawDraft === "true",
    date: scalar(
      frontmatter["date"] ?? frontmatter["updated"] ?? frontmatter["year"],
    ),
    summary: scalar(frontmatter["summary"] ?? frontmatter["description"]),
    tags: Array.isArray(frontmatter["tags"])
      ? frontmatter["tags"]
      : scalar(frontmatter["tags"])
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
    body: (match?.[2] ?? raw).replace(/^\n+/, ""),
    path,
    frontmatter,
    rawFrontmatter,
  };
}

/** Reuses untouched frontmatter lines verbatim and only changes supplied fields. */
export function serializeDoc(
  frontmatter: Frontmatter,
  body: string,
  rawFrontmatter: string | null,
): string {
  const values = new Map(Object.entries(frontmatter));
  const original = rawFrontmatter ? parseFrontmatter(rawFrontmatter) : {};
  const emitted = new Set<string>();
  const lines: string[] = [];
  if (rawFrontmatter) {
    const source = rawFrontmatter.split(/\r?\n/);
    for (let index = 0; index < source.length; index += 1) {
      const line = source[index] ?? "";
      const field = /^([A-Za-z0-9_-]+):/.exec(line);
      if (!field) {
        lines.push(line);
        continue;
      }
      const key = field[1] ?? "";
      const next = values.get(key);
      emitted.add(key);
      if (next === undefined) continue;
      if (sameValue(next, original[key])) {
        lines.push(line);
        continue;
      }
      lines.push(`${key}: ${yamlValue(next)}`);
      if (Array.isArray(next))
        while (/^\s+-\s+/.test(source[index + 1] ?? "")) index += 1;
    }
  }
  for (const [key, value] of values)
    if (
      !emitted.has(key) &&
      value !== "" &&
      !(Array.isArray(value) && value.length === 0)
    )
      lines.push(`${key}: ${yamlValue(value)}`);
  return ["---", ...lines, "---", "", body.replace(/\s+$/, ""), ""].join("\n");
}

function parseFrontmatter(rawFrontmatter: string): Frontmatter {
  return parseDoc(`---\n${rawFrontmatter}\n---\n`).frontmatter;
}

function sameValue(
  left: FrontmatterValue | undefined,
  right: FrontmatterValue | undefined,
): boolean {
  if (Array.isArray(left) || Array.isArray(right))
    return (
      Array.isArray(left) &&
      Array.isArray(right) &&
      left.length === right.length &&
      left.every((value, index) => value === right[index])
    );
  return left === right;
}
