import { createFileRoute, redirect } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Copy, FilePenLine, LogOut, Plus, Search, Trash2 } from "lucide-react";

import { Markdown } from "@/components/markdown";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "@/components/site/section";
import {
  adminLogout,
  adminSession,
  adminStatus,
  deleteContent,
  getContent,
  listContent,
  saveContent,
} from "@/lib/content.functions";
import {
  CONTENT_TYPES,
  pathForType,
  slugify,
  type ContentDoc,
  type ContentTypeId,
  type DetectedContentType,
  type Frontmatter,
  type FrontmatterValue,
  type SchemaField,
  typeById,
} from "@/lib/content-schema";
import { cn } from "@/lib/utils";

type EditorState = {
  type: DetectedContentType;
  slug: string;
  frontmatter: Frontmatter;
  body: string;
  originalPath: string | null;
};

function blankDoc(type: ContentTypeId): EditorState {
  const kind = typeById(type);
  const defaultSlug =
    kind?.kind === "file" ? type : slugify(kind?.label ?? type);
  return {
    type,
    slug: defaultSlug,
    frontmatter: { type, draft: true },
    body: "",
    originalPath: null,
  };
}

function mapDoc(doc: ContentDoc): EditorState {
  return {
    type: doc.type,
    slug: doc.slug,
    frontmatter: doc.frontmatter,
    body: doc.body,
    originalPath: doc.path,
  };
}

function textValue(value: FrontmatterValue | undefined): string {
  return Array.isArray(value)
    ? value.join(", ")
    : value == null
      ? ""
      : String(value);
}

function draftValue(frontmatter: Frontmatter): boolean {
  return frontmatter["draft"] === true || frontmatter["draft"] === "true";
}

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Md. Mehedi Hasan" },
      {
        name: "description",
        content:
          "Private CMS dashboard for managing Md. Mehedi Hasan's portfolio content on GitHub.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  beforeLoad: async () => {
    const session = await adminSession();
    if (!session.authenticated) {
      throw redirect({
        to: "/login",
        search: { redirect: "/admin" } as Record<string, string>,
      });
    }
    return session;
  },
  component: AdminPage,
});

function AdminPage() {
  const [adminEmail, setAdminEmail] = useState<string>("Authenticated");
  const [repoStatus, setRepoStatus] = useState<string>(
    "Checking GitHub status…",
  );
  const [repoUrl, setRepoUrl] = useState<string | null>(null);
  const [content, setContent] = useState<ContentDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [filter, setFilter] = useState("");
  const [selectedType, setSelectedType] = useState<ContentTypeId>("profile");
  const [draft, setDraft] = useState<EditorState>(blankDoc("profile"));
  const [deleteTarget, setDeleteTarget] = useState<ContentDoc | null>(null);
  const [actionMessage, setActionMessage] = useState<string>("");

  const load = async () => {
    setLoading(true);
    try {
      const [status, items] = await Promise.all([adminStatus(), listContent()]);
      setRepoStatus(status.message);
      setRepoUrl(status.repoUrl);
      setContent(items.ok ? items.items : []);
      setActionMessage(items.ok ? "" : items.message);
      if (!draft.originalPath) {
        const first = items.ok
          ? items.items.find((item) => item.type === selectedType)
          : undefined;
        if (first) setDraft(mapDoc(first));
      }
    } catch (error) {
      setActionMessage(
        error instanceof Error
          ? error.message
          : "Could not load the dashboard.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void adminSession().then((session) => {
      if (session.authenticated && session.email) setAdminEmail(session.email);
    });
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    const term = filter.trim().toLowerCase();
    return content.filter((item) => {
      const matchesType = item.type === selectedType;
      const matchesSearch = !term
        ? true
        : `${item.title} ${item.slug} ${item.summary} ${item.body} ${item.path}`
            .toLowerCase()
            .includes(term);
      return matchesType && matchesSearch;
    });
  }, [content, filter, selectedType]);

  const counts = useMemo(
    () =>
      CONTENT_TYPES.reduce<Record<string, number>>((acc, type) => {
        acc[type.id] = content.filter((item) => item.type === type.id).length;
        return acc;
      }, {}),
    [content],
  );

  const unknownDocs = useMemo(() => {
    const term = filter.trim().toLowerCase();
    return content.filter((item) => {
      if (item.type !== "unknown") return false;
      return (
        !term ||
        `${item.title} ${item.path} ${item.body}`.toLowerCase().includes(term)
      );
    });
  }, [content, filter]);

  const currentType = typeById(draft.type);
  const currentPath =
    draft.originalPath ??
    (currentType
      ? pathForType(
          currentType,
          draft.slug ||
            slugify(
              textValue(
                draft.frontmatter["title"] ?? draft.frontmatter["name"],
              ) || currentType.label,
            ),
        )
      : "");

  async function onSave(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setActionMessage("");
    try {
      if (!currentType)
        throw new Error(
          "Unknown content types are read-only. Add explicit content_type metadata before editing.",
        );
      const result = await saveContent({
        data: {
          type: currentType.id,
          slug: draft.slug,
          frontmatter: draft.frontmatter,
          body: draft.body,
          originalPath: draft.originalPath,
        },
      });
      setActionMessage(
        result.ok
          ? result.message
          : result.message || "Could not save content.",
      );
      await load();
      if (result.ok && result.commit) {
        const refreshed = await getContent({
          data: { path: result.commit.path },
        });
        if (refreshed.ok && refreshed.doc) {
          setDraft(mapDoc(refreshed.doc));
        }
      }
    } catch (error) {
      setActionMessage(
        error instanceof Error ? error.message : "Could not save content.",
      );
    } finally {
      setSaving(false);
    }
  }

  async function onLogout() {
    await adminLogout();
    window.location.assign("/login");
  }

  async function selectDoc(doc: ContentDoc) {
    setLoading(true);
    setActionMessage("");
    if (doc.type !== "unknown") setSelectedType(doc.type);
    try {
      const result = await getContent({ data: { path: doc.path } });
      if (!result.ok || !result.doc) {
        setActionMessage(
          result.message || `Unable to load ${doc.path}. Please retry.`,
        );
        return;
      }
      setDraft(mapDoc(result.doc));
    } catch (error) {
      setActionMessage(
        error instanceof Error
          ? `Unable to load ${doc.path}: ${error.message}`
          : `Unable to load ${doc.path}. Please retry.`,
      );
    } finally {
      setLoading(false);
    }
  }

  function createNew(type: ContentTypeId = selectedType) {
    const fresh = blankDoc(type);
    setSelectedType(type);
    setDraft(fresh);
  }

  async function onDuplicate() {
    const title = textValue(
      draft.frontmatter["title"] ?? draft.frontmatter["name"] ?? draft.slug,
    );
    const copySlug = slugify(`${draft.slug || title}-copy`);
    setDraft((prev) => ({
      ...prev,
      frontmatter: {
        ...prev.frontmatter,
        ...("title" in prev.frontmatter
          ? { title: title.startsWith("Copy of ") ? title : `Copy of ${title}` }
          : {}),
        ...(prev.type !== "unknown" ? { slug: copySlug } : {}),
      },
      slug: copySlug,
      originalPath: null,
    }));
    setActionMessage("Draft duplicated. Review the slug before publishing.");
  }

  async function confirmDelete() {
    if (!deleteTarget) return;
    setSaving(true);
    try {
      const result = await deleteContent({ data: { path: deleteTarget.path } });
      setActionMessage(
        result.ok
          ? result.message
          : result.message || "Could not delete content.",
      );
      setDeleteTarget(null);
      await load();
      if (draft.originalPath === deleteTarget.path) {
        createNew(selectedType);
      }
    } finally {
      setSaving(false);
    }
  }

  function updateField(field: SchemaField, value: string | boolean) {
    setDraft((previous) => ({
      ...previous,
      frontmatter: {
        ...previous.frontmatter,
        [field.key]:
          field.kind === "tags"
            ? String(value)
                .split(",")
                .map((item) => item.trim())
                .filter(Boolean)
            : value,
      },
    }));
  }

  return (
    <Section
      eyebrow="Administration"
      title="GitHub content dashboard"
      description="Manage Markdown content, publish to GitHub, and preview changes before commit."
    >
      <div className="grid gap-6 xl:grid-cols-[18rem_minmax(0,1fr)]">
        <aside className="space-y-4">
          <div className="card-surface space-y-4 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="eyebrow">Signed in</p>
                <p className="mt-1 text-sm font-medium">{adminEmail}</p>
              </div>
              <Button variant="outline" size="sm" onClick={onLogout}>
                <LogOut className="h-4 w-4" /> Logout
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">{repoStatus}</p>
            {repoUrl ? (
              <a
                className="text-sm text-accent link-underline"
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open GitHub repository
              </a>
            ) : null}
          </div>

          <div className="card-surface space-y-3 p-4">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-base">Content</h2>
              <Button size="sm" onClick={() => createNew(selectedType)}>
                <Plus className="h-4 w-4" /> New
              </Button>
            </div>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Filter content"
                className="pl-9"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {CONTENT_TYPES.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => {
                    setSelectedType(type.id);
                    if (!draft.originalPath) createNew(type.id);
                  }}
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs transition-colors",
                    selectedType === type.id
                      ? "border-accent bg-highlight text-accent"
                      : "border-border bg-card",
                  )}
                >
                  {type.label} ({counts[type.id] ?? 0})
                </button>
              ))}
            </div>
          </div>

          <div className="max-h-144 space-y-2 overflow-auto pr-1">
            {loading ? (
              <p className="text-sm text-muted-foreground">Loading content…</p>
            ) : null}
            {filtered.map((doc) => (
              <button
                key={doc.path}
                type="button"
                onClick={() => void selectDoc(doc)}
                className={cn(
                  "card-surface block w-full rounded-lg px-4 py-3 text-left transition-colors hover:bg-surface",
                  draft.originalPath === doc.path
                    ? "border-accent/40 ring-1 ring-accent/20"
                    : "",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {doc.type}
                    </p>
                    <h3 className="mt-1 text-sm font-medium">{doc.title}</h3>
                  </div>
                  <span className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
                    {doc.draft ? "Draft" : "Published"}
                  </span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{doc.path}</p>
              </button>
            ))}
            {unknownDocs.length ? (
              <p className="pt-3 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Unclassified files
              </p>
            ) : null}
            {unknownDocs.map((doc) => (
              <button
                key={doc.path}
                type="button"
                onClick={() => void selectDoc(doc)}
                className={cn(
                  "card-surface block w-full rounded-lg px-4 py-3 text-left transition-colors hover:bg-surface",
                  draft.originalPath === doc.path
                    ? "border-accent/40 ring-1 ring-accent/20"
                    : "",
                )}
              >
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Unknown
                </p>
                <h3 className="mt-1 text-sm font-medium">{doc.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{doc.path}</p>
              </button>
            ))}
          </div>
        </aside>

        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-5">
            <div className="card-surface p-4">
              <p className="eyebrow">Selected path</p>
              <p className="mt-2 break-all text-sm">
                {currentPath || draft.originalPath || "New content"}
              </p>
            </div>
            <div className="card-surface p-4">
              <p className="eyebrow">Status</p>
              <p className="mt-2 text-sm">
                {draftValue(draft.frontmatter)
                  ? "GitHub draft"
                  : "GitHub published"}
              </p>
            </div>
            <div className="card-surface p-4">
              <p className="eyebrow">Last updated</p>
              <p className="mt-2 text-sm">
                {textValue(
                  draft.frontmatter["updated"] ?? draft.frontmatter["date"],
                ) || "Unknown"}
              </p>
            </div>
            <div className="card-surface p-4">
              <p className="eyebrow">Current type</p>
              <p className="mt-2 text-sm">{currentType?.label ?? "Unknown"}</p>
            </div>
            <div className="card-surface p-4">
              <p className="eyebrow">Deployment</p>
              <p className="mt-2 text-sm text-muted-foreground">Unknown</p>
            </div>
          </div>

          {actionMessage ? (
            <p className="rounded-md border border-border bg-surface px-4 py-3 text-sm">
              {actionMessage}
            </p>
          ) : null}

          <form
            onSubmit={onSave}
            className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
          >
            <div className="card-surface space-y-4 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="eyebrow">Editor</p>
                  <h2 className="mt-1 text-xl">Markdown content</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={onDuplicate}
                  >
                    <Copy className="h-4 w-4" /> Duplicate
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setDeleteTarget(
                        draft.originalPath
                          ? (content.find(
                              (item) => item.path === draft.originalPath,
                            ) ?? null)
                          : null,
                      )
                    }
                    disabled={!draft.originalPath}
                  >
                    <Trash2 className="h-4 w-4" /> Delete
                  </Button>
                </div>
              </div>

              {draft.originalPath ? (
                <p className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-muted-foreground">
                  Content type:{" "}
                  <strong>{currentType?.label ?? "Unknown"}</strong>. Existing
                  files keep their detected type and path.
                </p>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-sm">
                    <span>Content type</span>
                    <select
                      value={currentType?.id ?? ""}
                      onChange={(e) =>
                        createNew(e.target.value as ContentTypeId)
                      }
                      className="rounded-md border border-border bg-background px-3 py-2"
                    >
                      {CONTENT_TYPES.map((type) => (
                        <option key={type.id} value={type.id}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="grid gap-1.5 text-sm">
                    <span>Slug</span>
                    <Input
                      value={draft.slug}
                      onChange={(e) =>
                        setDraft((prev) => ({ ...prev, slug: e.target.value }))
                      }
                    />
                  </label>
                </div>
              )}

              {currentType?.fields.map((field) => (
                <label key={field.key} className="grid gap-1.5 text-sm">
                  <span>
                    {field.label}
                    {field.required ? " *" : ""}
                  </span>
                  {field.kind === "checkbox" ? (
                    <input
                      type="checkbox"
                      checked={
                        draft.frontmatter[field.key] === true ||
                        draft.frontmatter[field.key] === "true"
                      }
                      onChange={(e) => updateField(field, e.target.checked)}
                    />
                  ) : field.kind === "textarea" ? (
                    <Textarea
                      value={textValue(draft.frontmatter[field.key])}
                      onChange={(e) => updateField(field, e.target.value)}
                    />
                  ) : (
                    <Input
                      type={
                        field.kind === "date"
                          ? "date"
                          : field.kind === "url"
                            ? "url"
                            : "text"
                      }
                      value={textValue(draft.frontmatter[field.key])}
                      onChange={(e) => updateField(field, e.target.value)}
                      placeholder={
                        field.kind === "tags"
                          ? "Separate values with commas"
                          : undefined
                      }
                    />
                  )}
                </label>
              ))}

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={draftValue(draft.frontmatter)}
                  onChange={(e) =>
                    updateField(
                      { key: "draft", label: "GitHub draft", kind: "checkbox" },
                      e.target.checked,
                    )
                  }
                />
                Save as GitHub draft (not yet deployed)
              </label>

              <div className="hidden md:block">
                <label className="grid gap-1.5 text-sm">
                  <span>Markdown body</span>
                  <Textarea
                    value={draft.body}
                    onChange={(e) =>
                      setDraft((prev) => ({ ...prev, body: e.target.value }))
                    }
                    className="min-h-136 font-mono text-xs leading-6"
                  />
                </label>
              </div>

              <div className="md:hidden">
                <Tabs defaultValue="editor">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="editor">Editor</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                  </TabsList>
                  <TabsContent value="editor" className="mt-4">
                    <label className="grid gap-1.5 text-sm">
                      <span>Markdown body</span>
                      <Textarea
                        value={draft.body}
                        onChange={(e) =>
                          setDraft((prev) => ({
                            ...prev,
                            body: e.target.value,
                          }))
                        }
                        className="min-h-112 font-mono text-xs leading-6"
                      />
                    </label>
                  </TabsContent>
                  <TabsContent value="preview" className="mt-4">
                    <div className="card-surface p-4">
                      <Markdown>
                        {draft.body ||
                          "Start typing Markdown to see the rendered output."}
                      </Markdown>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button type="submit" disabled={saving}>
                  <FilePenLine className="h-4 w-4" />{" "}
                  {saving
                    ? "Publishing…"
                    : draft.originalPath
                      ? "Update and publish"
                      : "Publish"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => createNew(currentType?.id ?? selectedType)}
                >
                  <Plus className="h-4 w-4" /> New draft
                </Button>
              </div>
            </div>

            <div className="hidden md:block card-surface p-5">
              <p className="eyebrow">Live Preview · GitHub content</p>
              <h2 className="mt-1 text-xl">Rendered Markdown</h2>
              <div className="mt-4 rounded-lg border border-border bg-background p-5">
                <Markdown>
                  {draft.body ||
                    "Start typing Markdown to see the rendered output."}
                </Markdown>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Dialog
        open={Boolean(deleteTarget)}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete content?</DialogTitle>
            <DialogDescription>
              This will permanently delete the exact GitHub file{" "}
              <code className="break-all">{deleteTarget?.path ?? ""}</code> for{" "}
              {deleteTarget?.title ?? "the selected item"} from GitHub.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteTarget(null)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => void confirmDelete()}
              disabled={saving}
            >
              <Trash2 className="h-4 w-4" /> Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Section>
  );
}
