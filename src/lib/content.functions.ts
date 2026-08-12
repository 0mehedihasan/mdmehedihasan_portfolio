import { createServerFn } from "@tanstack/react-start";
import {
  getRequestHeader,
  setResponseHeader,
} from "@tanstack/react-start/server";

import type { ContentDoc } from "./content-schema";
import { loginSchema, pathSchema, saveSchema } from "./content-validators";

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
        message: commit.created
          ? "Created and committed to GitHub."
          : "Updated and committed to GitHub.",
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
