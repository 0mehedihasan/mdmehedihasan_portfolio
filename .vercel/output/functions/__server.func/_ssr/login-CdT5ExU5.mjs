import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as adminSession, n as adminLogin } from "./router-CTYgVa2H.mjs";
import { t as Section } from "./section-BeY932nC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CdT5ExU5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		adminSession().then((session) => {
			if (session.authenticated) window.location.assign("/admin");
		});
	}, []);
	async function onSubmit(e) {
		e.preventDefault();
		setBusy(true);
		setStatus(null);
		try {
			const result = await adminLogin({ data: {
				email,
				password,
				remember: true
			} });
			if (!result.ok) {
				setStatus(result.message);
				return;
			}
			window.location.assign("/admin");
		} catch (error) {
			setStatus("Sign in failed. Check your credentials and try again.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		eyebrow: "Administration",
		title: "Sign in",
		description: "Restricted area for content management.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "card-surface grid max-w-md gap-4 p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "email",
						className: "text-sm font-medium",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "email",
						type: "email",
						required: true,
						autoComplete: "username",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						className: "rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "password",
						className: "text-sm font-medium",
						children: "Password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "password",
						type: "password",
						required: true,
						autoComplete: "current-password",
						value: password,
						onChange: (e) => setPassword(e.target.value),
						className: "rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
					})]
				}),
				status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-destructive",
					children: status
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: busy,
					className: "rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60",
					children: busy ? "Signing in…" : "Sign in"
				})
			]
		})
	});
}
//#endregion
export { LoginPage as component };
