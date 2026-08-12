import { i as getRequestHeader, r as createServerFn, s as setResponseHeader, t as TSS_SERVER_FUNCTION } from "./server-BCuMsvYu.mjs";
import { n as pathSchema, r as saveSchema, t as loginSchema } from "./content-validators-BUVAifjn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content.functions-BJpjygrt.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var adminLogin_createServerFn_handler = createServerRpc({
	id: "7c823e87c6d659d1e257a4a17b9c7c9425f4a7570f4abb614a3af2b0294d4494",
	name: "adminLogin",
	filename: "src/lib/content.functions.ts"
}, (opts) => adminLogin.__executeServer(opts));
var adminLogin = createServerFn({ method: "POST" }).validator((d) => loginSchema.parse(d)).handler(adminLogin_createServerFn_handler, async ({ data }) => {
	const auth = await import("./auth.server-DIMjewQe.mjs");
	if (!auth.isAuthConfigured()) return {
		ok: false,
		message: "Admin sign-in is not configured yet. Add ADMIN_EMAIL and ADMIN_PASSWORD environment variables to your deployment."
	};
	if (!await auth.verifyCredentials(data.email, data.password)) return {
		ok: false,
		message: "Incorrect email or password."
	};
	setResponseHeader("Set-Cookie", await auth.createSessionCookie(Boolean(data.remember)));
	return {
		ok: true,
		message: "Signed in."
	};
});
var adminLogout_createServerFn_handler = createServerRpc({
	id: "e39f9fb42738ca39b75f462344e2dd2dd0f9107feb30583b2ecc39c6c19c05d9",
	name: "adminLogout",
	filename: "src/lib/content.functions.ts"
}, (opts) => adminLogout.__executeServer(opts));
var adminLogout = createServerFn({ method: "POST" }).handler(adminLogout_createServerFn_handler, async () => {
	const auth = await import("./auth.server-DIMjewQe.mjs");
	setResponseHeader("Set-Cookie", auth.clearSessionCookie());
	return { ok: true };
});
var adminSession_createServerFn_handler = createServerRpc({
	id: "981811bbc9b9ea3d7b23075770cfff94fe3967edef468b7fd3df7b91f3e759fc",
	name: "adminSession",
	filename: "src/lib/content.functions.ts"
}, (opts) => adminSession.__executeServer(opts));
var adminSession = createServerFn({ method: "GET" }).handler(adminSession_createServerFn_handler, async () => {
	const auth = await import("./auth.server-DIMjewQe.mjs");
	const session = await auth.readSession(getRequestHeader("cookie"));
	return {
		authenticated: Boolean(session),
		email: session?.email ?? null,
		authConfigured: auth.isAuthConfigured()
	};
});
var adminStatus_createServerFn_handler = createServerRpc({
	id: "d6dc3a652df75304ac88e8edac9d194a821a65b3f55f087c3e92031ab0bb06f4",
	name: "adminStatus",
	filename: "src/lib/content.functions.ts"
}, (opts) => adminStatus.__executeServer(opts));
var adminStatus = createServerFn({ method: "GET" }).handler(adminStatus_createServerFn_handler, async () => {
	const store = await import("./content-store.server-D22kb1-v.mjs");
	const gh = await import("./github.server-Clt8emgX.mjs");
	await store.requireAdmin();
	const auth = await import("./auth.server-DIMjewQe.mjs");
	await store.requireAdmin();
	const settings = store.repoSettings();
	if (!gh.isGitHubConfigured()) return {
		configured: false,
		email: auth.adminEmail(),
		...settings,
		message: "GITHUB_TOKEN is not set on the server. Add it to your deployment environment variables to enable publishing.",
		repoUrl: null
	};
	try {
		const info = await gh.repoInfo(gh.getRepoConfig());
		return {
			configured: true,
			email: auth.adminEmail(),
			...settings,
			message: `Connected to ${info.full_name} (${settings.branch}).`,
			repoUrl: info.html_url
		};
	} catch (error) {
		return {
			configured: false,
			email: auth.adminEmail(),
			...settings,
			message: store.toMessage(error),
			repoUrl: null
		};
	}
});
var listContent_createServerFn_handler = createServerRpc({
	id: "c80a79615b169512e28174dd0667e0ad3106c1fd06ad2fc021f163bce4bd6c8d",
	name: "listContent",
	filename: "src/lib/content.functions.ts"
}, (opts) => listContent.__executeServer(opts));
var listContent = createServerFn({ method: "GET" }).handler(listContent_createServerFn_handler, async () => {
	const store = await import("./content-store.server-D22kb1-v.mjs");
	if (!(await import("./github.server-Clt8emgX.mjs")).isGitHubConfigured()) return {
		ok: false,
		items: [],
		message: "GitHub is not configured yet."
	};
	try {
		return {
			ok: true,
			items: await store.loadAll(),
			message: ""
		};
	} catch (error) {
		return {
			ok: false,
			items: [],
			message: store.toMessage(error)
		};
	}
});
var getContent_createServerFn_handler = createServerRpc({
	id: "725727a7efcf45ae5743f179b69d78a042a1b95af729644303e54c16fbc239b0",
	name: "getContent",
	filename: "src/lib/content.functions.ts"
}, (opts) => getContent.__executeServer(opts));
var getContent = createServerFn({ method: "POST" }).validator((d) => pathSchema.parse(d)).handler(getContent_createServerFn_handler, async ({ data }) => {
	const store = await import("./content-store.server-D22kb1-v.mjs");
	try {
		await store.requireAdmin();
		const doc = await store.readDoc(data.path);
		if (!doc) return {
			ok: false,
			doc: null,
			message: "That file was not found on GitHub (404)."
		};
		return {
			ok: true,
			doc,
			message: ""
		};
	} catch (error) {
		return {
			ok: false,
			doc: null,
			message: store.toMessage(error)
		};
	}
});
var saveContent_createServerFn_handler = createServerRpc({
	id: "efcb0c7ccee8b4ddfdef7cd6aecbc989e0d961399bd07b64b65cae087ce5c022",
	name: "saveContent",
	filename: "src/lib/content.functions.ts"
}, (opts) => saveContent.__executeServer(opts));
var saveContent = createServerFn({ method: "POST" }).validator((d) => saveSchema.parse(d)).handler(saveContent_createServerFn_handler, async ({ data }) => {
	const store = await import("./content-store.server-D22kb1-v.mjs");
	try {
		await store.requireAdmin();
		const commit = await store.saveDoc(data);
		return {
			ok: true,
			message: `${commit.created ? "Created" : "Updated"} and committed to GitHub. Deployment status: Unknown.`,
			commit
		};
	} catch (error) {
		return {
			ok: false,
			message: store.toMessage(error),
			commit: null
		};
	}
});
var deleteContent_createServerFn_handler = createServerRpc({
	id: "1f7600c940791bb6cf0376b5cd31730b8b041bfa857a6eec3e69c32dfb538d5f",
	name: "deleteContent",
	filename: "src/lib/content.functions.ts"
}, (opts) => deleteContent.__executeServer(opts));
var deleteContent = createServerFn({ method: "POST" }).validator((d) => pathSchema.parse(d)).handler(deleteContent_createServerFn_handler, async ({ data }) => {
	const store = await import("./content-store.server-D22kb1-v.mjs");
	try {
		await store.requireAdmin();
		return {
			ok: true,
			message: "Deleted and committed to GitHub.",
			commit: await store.deleteDoc(data.path)
		};
	} catch (error) {
		return {
			ok: false,
			message: store.toMessage(error),
			commit: null
		};
	}
});
var publicContent_createServerFn_handler = createServerRpc({
	id: "653ed552b2428f46391c2b2bb7a3f65682823bfb7cb14b46acfc2b7bbbbcf18a",
	name: "publicContent",
	filename: "src/lib/content.functions.ts"
}, (opts) => publicContent.__executeServer(opts));
var publicContent = createServerFn({ method: "GET" }).handler(publicContent_createServerFn_handler, async () => {
	const store = await import("./content-store.server-D22kb1-v.mjs");
	if (!(await import("./github.server-Clt8emgX.mjs")).isGitHubConfigured()) return {
		items: [],
		available: false
	};
	try {
		return {
			items: (await store.loadAll()).filter((d) => !d.draft),
			available: true
		};
	} catch {
		return {
			items: [],
			available: false
		};
	}
});
//#endregion
export { adminLogin_createServerFn_handler, adminLogout_createServerFn_handler, adminSession_createServerFn_handler, adminStatus_createServerFn_handler, deleteContent_createServerFn_handler, getContent_createServerFn_handler, listContent_createServerFn_handler, publicContent_createServerFn_handler, saveContent_createServerFn_handler };
