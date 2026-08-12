import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as publications, T as researchProjects, k as softwareProjects, l as conferenceActivities, o as awards } from "./router-CTYgVa2H.mjs";
import { t as Section } from "./section-BeY932nC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-ByyUe6gE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var index = [
	...publications.map((p) => ({
		title: p.title,
		text: `${p.authors} ${p.venue}`,
		area: "Publication",
		to: "/publications"
	})),
	...researchProjects.map((p) => ({
		title: p.title,
		text: `${p.summary} ${p.focus.join(" ")}`,
		area: "Research project",
		to: "/projects"
	})),
	...softwareProjects.map((p) => ({
		title: p.title,
		text: p.summary,
		area: "Software project",
		to: "/projects"
	})),
	...conferenceActivities.map((a) => ({
		title: a.role,
		text: `${a.event} ${a.detail}`,
		area: "Activity",
		to: "/activities"
	})),
	...awards.map((a) => ({
		title: a.title,
		text: `${a.issuer} ${a.detail}`,
		area: "Award",
		to: "/activities"
	}))
];
function SearchPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const results = (0, import_react.useMemo)(() => {
		const term = q.trim().toLowerCase();
		if (!term) return index;
		return index.filter((i) => `${i.title} ${i.text} ${i.area}`.toLowerCase().includes(term));
	}, [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		eyebrow: "Search",
		title: "Find anything in this portfolio",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "q",
				className: "sr-only",
				children: "Search"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "q",
				type: "search",
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Search publications, projects, activities…",
				className: "w-full rounded-md border border-border bg-card px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: [results.length, " result(s)"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 grid gap-3",
				children: results.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: r.to,
					className: "card-surface block p-5 transition-colors hover:bg-surface",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: r.area
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 text-base font-medium",
							children: r.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 line-clamp-2 text-sm text-muted-foreground",
							children: r.text
						})
					]
				}) }, `${r.area}-${r.title}`))
			})
		]
	});
}
//#endregion
export { SearchPage as component };
