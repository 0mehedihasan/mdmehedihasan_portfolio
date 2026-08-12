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
  typeById,
} from "@/lib/content-schema";
import { cn } from "@/lib/utils";

type EditorState = {
  type: ContentTypeId;
  title: string;
  slug: string;
  date: string;
  tags: string;
  image: string;
  summary: string;
  abstract: string;
  extra: Record<string, string>;
  draft: boolean;
  body: string;
  originalPath: string | null;
};

function blankDoc(type: ContentTypeId): EditorState {
  const kind = typeById(type);
  const defaultSlug =
    kind?.kind === "file" ? type : slugify(kind?.label ?? type);
  return {
    type,
    title: kind?.label ?? "New content",
    slug: defaultSlug,
    date: new Date().toISOString().slice(0, 10),
    tags: "",
    image: "",
    summary: "",
    abstract: "",
    extra: {},
    draft: true,
    body: "",
    originalPath: null,
  };
}

function mapDoc(doc: ContentDoc): EditorState {
  return {
    type: doc.type,
    title: doc.title,
    slug: doc.slug,
    date: doc.date,
    tags: doc.tags.join(", "),
    image: doc.image ?? "",
    summary: doc.summary ?? "",
    abstract: doc.abstract ?? "",
    extra: doc.extra ?? {},
    draft: Boolean(doc.draft),
    body: doc.body,
    originalPath: doc.path,
  };
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
      const matchesType =
        item.type === selectedType ||
        selectedType === "profile" ||
        selectedType === "about";
      const matchesSearch = !term
        ? true
        : `${item.title} ${item.slug} ${item.summary ?? ""} ${item.body} ${item.path}`
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

  const currentType = typeById(draft.type) ?? CONTENT_TYPES[0];
  const currentPath = currentType
    ? pathForType(
        currentType,
        draft.slug || slugify(draft.title || currentType.label),
      )
    : "";

  async function onSave(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setActionMessage("");
    try {
      const result = await saveContent({
        type: draft.type,
        title: draft.title,
        slug: draft.slug,
        date: draft.date,
        tags: draft.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        image: draft.image.trim() || null,
        summary: draft.summary.trim() || null,
        abstract:
          draft.type === "research" ? draft.abstract.trim() || null : null,
        extra: draft.extra,
        draft: draft.draft,
        body: draft.body,
        originalPath: draft.originalPath,
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
          setDraft(mapDoc({ ...refreshed.doc, type: draft.type }));
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
    setSelectedType(doc.type);
    try {
      const result = await getContent({ data: { path: doc.path } });
      if (!result.ok || !result.doc) {
        setActionMessage(
          result.message || `Unable to load ${doc.path}. Please retry.`,
        );
        return;
      }
      setDraft(mapDoc({ ...result.doc, type: doc.type }));
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
    const copyTitle = draft.title.startsWith("Copy of ")
      ? draft.title
      : `Copy of ${draft.title}`;
    const copySlug = slugify(`${draft.slug || draft.title}-copy`);
    setDraft((prev) => ({
      ...prev,
      title: copyTitle,
      slug: copySlug,
      originalPath: null,
    }));
    setActionMessage("Draft duplicated. Review the slug before publishing.");
  }

  async function confirmDelete() {
    if (!deleteTarget) return;
    setSaving(true);
    try {
      const result = await deleteContent({ path: deleteTarget.path });
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
                {draft.draft ? "GitHub draft" : "GitHub published"}
              </p>
            </div>
            <div className="card-surface p-4">
              <p className="eyebrow">Last updated</p>
              <p className="mt-2 text-sm">{draft.date || "Today"}</p>
            </div>
            <div className="card-surface p-4">
              <p className="eyebrow">Current type</p>
              <p className="mt-2 text-sm">{currentType.label}</p>
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

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm">
                  <span>Content type</span>
                  <select
                    value={draft.type}
                    onChange={(e) =>
                      setDraft((prev) => ({
                        ...prev,
                        type: e.target.value as ContentTypeId,
                      }))
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

              <label className="grid gap-1.5 text-sm">
                <span>Title</span>
                <Input
                  value={draft.title}
                  onChange={(e) =>
                    setDraft((prev) => ({ ...prev, title: e.target.value }))
                  }
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm">
                  <span>Date</span>
                  <Input
                    type="date"
                    value={draft.date}
                    onChange={(e) =>
                      setDraft((prev) => ({ ...prev, date: e.target.value }))
                    }
                  />
                </label>
                <label className="grid gap-1.5 text-sm">
                  <span>Tags</span>
                  <Input
                    value={draft.tags}
                    onChange={(e) =>
                      setDraft((prev) => ({ ...prev, tags: e.target.value }))
                    }
                  />
                </label>
              </div>

              {draft.type === "research" ? (
                <label className="grid gap-1.5 text-sm">
                  <span>Abstract</span>
                  <Textarea
                    value={draft.abstract}
                    onChange={(e) =>
                      setDraft((prev) => ({
                        ...prev,
                        abstract: e.target.value,
                      }))
                    }
                    placeholder="Optional research abstract"
                  />
                </label>
              ) : null}

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm">
                  <span>Summary</span>
                  <Textarea
                    value={draft.summary}
                    onChange={(e) =>
                      setDraft((prev) => ({ ...prev, summary: e.target.value }))
                    }
                  />
                </label>
                <label className="grid gap-1.5 text-sm">
                  <span>Image URL</span>
                  <Textarea
                    value={draft.image}
                    onChange={(e) =>
                      setDraft((prev) => ({ ...prev, image: e.target.value }))
                    }
                  />
                </label>
              </div>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={draft.draft}
                  onChange={(e) =>
                    setDraft((prev) => ({ ...prev, draft: e.target.checked }))
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
                      {draft.type === "research" && draft.abstract ? (
                        <div className="mb-5 border-l-2 border-accent bg-surface p-4">
                          <p className="eyebrow">Abstract</p>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {draft.abstract}
                          </p>
                        </div>
                      ) : null}
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
                  onClick={() => createNew(draft.type)}
                >
                  <Plus className="h-4 w-4" /> New draft
                </Button>
              </div>
            </div>

            <div className="hidden md:block card-surface p-5">
              <p className="eyebrow">Live Preview · GitHub content</p>
              <h2 className="mt-1 text-xl">Rendered Markdown</h2>
              <div className="mt-4 rounded-lg border border-border bg-background p-5">
                {draft.type === "research" && draft.abstract ? (
                  <div className="mb-5 border-l-2 border-accent bg-surface p-4">
                    <p className="eyebrow">Abstract</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {draft.abstract}
                    </p>
                  </div>
                ) : null}
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
              This will permanently delete{" "}
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
