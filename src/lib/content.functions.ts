import { createServerFn } from "@tanstack/react-start";
import {
  getRequestHeader,
  setResponseHeader,
} from "@tanstack/react-start/server";

import type { ContentDoc } from "./content-schema";
import {
  commitSchema,
  loginSchema,
  pathSchema,
  revisionSchema,
  saveSchema,
} from "./content-validators";

export const adminLogin = createServerFn({ method: "POST" })
  .validator((d: unknown) => loginSchema.parse(d))
  .handler(async ({ data }) => {
    const auth = await import("./auth.server");
    if (!auth.isAuthConfigured()) {
      return {
        ok: false as const,
        message:
          "Admin sign-in is not configured yet. Add ADMIN_EMAIL and ADMIN_PASSWORD environment variables to your deployment.",
      };
    }
    if (!(await auth.verifyCredentials(data.email, data.password))) {
      return { ok: false as const, message: "Incorrect email or password." };
    }
    setResponseHeader(
      "Set-Cookie",
      await auth.createSessionCookie(Boolean(data.remember)),
    );
    return { ok: true as const, message: "Signed in." };
  });

export const adminLogout = createServerFn({ method: "POST" }).handler(
  async () => {
    const auth = await import("./auth.server");
    setResponseHeader("Set-Cookie", auth.clearSessionCookie());
    return { ok: true as const };
  },
);

export const adminSession = createServerFn({ method: "GET" }).handler(
  async () => {
    const auth = await import("./auth.server");
    const session = await auth.readSession(getRequestHeader("cookie"));
    return {
      authenticated: Boolean(session),
      email: session?.email ?? null,
      authConfigured: auth.isAuthConfigured(),
    };
  },
);

export const adminStatus = createServerFn({ method: "GET" }).handler(
  async () => {
    const store = await import("./content-store.server");
    const gh = await import("./github.server");
    await store.requireAdmin();
    const auth = await import("./auth.server");
    await store.requireAdmin();
    const settings = store.repoSettings();
    if (!gh.isGitHubConfigured()) {
      return {
        configured: false as const,
        email: auth.adminEmail(),
        ...settings,
        message:
          "GITHUB_TOKEN is not set on the server. Add it to your deployment environment variables to enable publishing.",
        repoUrl: null as string | null,
      };
    }
    try {
      const info = await gh.repoInfo(gh.getRepoConfig());
      return {
        configured: true as const,
        email: auth.adminEmail(),
        ...settings,
        message: `Connected to ${info.full_name} (${settings.branch}).`,
        repoUrl: info.html_url as string | null,
      };
    } catch (error) {
      return {
        configured: false as const,
        email: auth.adminEmail(),
        ...settings,
        message: store.toMessage(error),
        repoUrl: null as string | null,
      };
    }
  },
);

export const listContent = createServerFn({ method: "GET" }).handler(
  async () => {
    const store = await import("./content-store.server");
    const gh = await import("./github.server");
    try {
      await store.requireAdmin();
    } catch (error) {
      return {
        ok: false as const,
        items: [] as ContentDoc[],
        message: store.toMessage(error),
      };
    }
    if (!gh.isGitHubConfigured()) {
      return {
        ok: false as const,
        items: [] as ContentDoc[],
        message: "GitHub is not configured yet.",
      };
    }
    try {
      return { ok: true as const, items: await store.loadAll(), message: "" };
    } catch (error) {
      return {
        ok: false as const,
        items: [] as ContentDoc[],
        message: store.toMessage(error),
      };
    }
  },
);

export const getContent = createServerFn({ method: "POST" })
  .validator((d: unknown) => pathSchema.parse(d))
  .handler(async ({ data }) => {
    const store = await import("./content-store.server");
    try {
      await store.requireAdmin();
      const doc = await store.readDoc(data.path);
      if (!doc)
        return {
          ok: false as const,
          doc: null,
          message: "That file was not found on GitHub (404).",
        };
      return { ok: true as const, doc, message: "" };
    } catch (error) {
      return { ok: false as const, doc: null, message: store.toMessage(error) };
    }
  });

export const saveContent = createServerFn({ method: "POST" })
  .validator((d: unknown) => saveSchema.parse(d))
  .handler(async ({ data }) => {
    const store = await import("./content-store.server");
    try {
      await store.requireAdmin();
      const commit = await store.saveDoc(data);
      return {
        ok: true as const,
        message: `${commit.created ? "Created" : "Updated"} and committed to GitHub. Deployment status: Unknown.`,
        commit,
      };
    } catch (error) {
      return {
        ok: false as const,
        message: store.toMessage(error),
        commit: null,
      };
    }
  });

/** Explicit draft action; this never changes the public version. */
export const saveDraftContent = createServerFn({ method: "POST" })
  .validator((d: unknown) => saveSchema.parse(d))
  .handler(async ({ data }) => {
    const store = await import("./content-store.server");
    try {
      await store.requireAdmin();
      const commit = await store.saveDocWithStatus(data, false);
      return {
        ok: true as const,
        message: "Draft saved to GitHub. It is excluded from published content.",
        commit,
      };
    } catch (error) {
      return { ok: false as const, message: store.toMessage(error), commit: null };
    }
  });

/** Explicit publish action. The caller must choose it intentionally. */
export const publishContent = createServerFn({ method: "POST" })
  .validator((d: unknown) => saveSchema.parse(d))
  .handler(async ({ data }) => {
    const store = await import("./content-store.server");
    try {
      await store.requireAdmin();
      const commit = await store.saveDocWithStatus(data, true);
      const doc = await store.readDoc(commit.path);
      return {
        ok: true as const,
        message: `${commit.created ? "Created" : "Updated"} and published to GitHub.`,
        commit,
        deployment: await store.deploymentFor(commit.sha),
        publishedUrl: doc ? await store.publishedUrlFor(doc) : null,
      };
    } catch (error) {
      return {
        ok: false as const,
        message: store.toMessage(error),
        commit: null,
        deployment: null,
        publishedUrl: null,
      };
    }
  });

export const contentHistory = createServerFn({ method: "POST" })
  .validator((d: unknown) => pathSchema.parse(d))
  .handler(async ({ data }) => {
    const store = await import("./content-store.server");
    try {
      await store.requireAdmin();
      return { ok: true as const, entries: await store.historyFor(data.path), message: "" };
    } catch (error) {
      return { ok: false as const, entries: [], message: store.toMessage(error) };
    }
  });

export const contentRevision = createServerFn({ method: "POST" })
  .validator((d: unknown) => revisionSchema.parse(d))
  .handler(async ({ data }) => {
    const store = await import("./content-store.server");
    try {
      await store.requireAdmin();
      return { ok: true as const, doc: await store.revisionFor(data.path, data.ref), message: "" };
    } catch (error) {
      return { ok: false as const, doc: null, message: store.toMessage(error) };
    }
  });

export const publishedContent = createServerFn({ method: "POST" })
  .validator((d: unknown) => pathSchema.parse(d))
  .handler(async ({ data }) => {
    const store = await import("./content-store.server");
    try {
      await store.requireAdmin();
      const published = await store.latestPublishedFor(data.path);
      return {
        ok: true as const,
        published,
        publishedUrl: published ? await store.publishedUrlFor(published.doc) : null,
        message: "",
      };
    } catch (error) {
      return { ok: false as const, published: null, publishedUrl: null, message: store.toMessage(error) };
    }
  });

export const deploymentStatus = createServerFn({ method: "POST" })
  .validator((d: unknown) => commitSchema.parse(d))
  .handler(async ({ data }) => {
    const store = await import("./content-store.server");
    try {
      await store.requireAdmin();
      return { ok: true as const, deployment: await store.deploymentFor(data.sha), message: "" };
    } catch (error) {
      return { ok: false as const, deployment: null, message: store.toMessage(error) };
    }
  });

export const deleteContent = createServerFn({ method: "POST" })
  .validator((d: unknown) => pathSchema.parse(d))
  .handler(async ({ data }) => {
    const store = await import("./content-store.server");
    try {
      await store.requireAdmin();
      const commit = await store.deleteDoc(data.path);
      return {
        ok: true as const,
        message: "Deleted and committed to GitHub.",
        commit,
      };
    } catch (error) {
      return {
        ok: false as const,
        message: store.toMessage(error),
        commit: null,
      };
    }
  });

export const publicContent = createServerFn({ method: "GET" }).handler(
  async () => {
    const store = await import("./content-store.server");
    const gh = await import("./github.server");
    if (!gh.isGitHubConfigured())
      return { items: [] as ContentDoc[], available: false as const };
    try {
      const items = (await store.loadAll()).filter((d) => !d.draft);
      return { items, available: true as const };
    } catch {
      return { items: [] as ContentDoc[], available: false as const };
    }
  },
);
