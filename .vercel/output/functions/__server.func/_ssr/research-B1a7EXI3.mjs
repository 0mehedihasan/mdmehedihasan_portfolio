import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { c as FileText, u as ExternalLink } from "../_libs/lucide-react.mjs";
import { S as publications, T as researchProjects, k as softwareProjects } from "./router-CTYgVa2H.mjs";
import { n as Tag, t as Section } from "./section-BeY932nC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/research-B1a7EXI3.js
var import_jsx_runtime = require_jsx_runtime();
function PublicationsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "publications",
		eyebrow: "Publications",
		title: "Scholarly publications",
		description: "A compact record of published and under-review research outputs.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "grid gap-4",
			children: publications.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "research-module border border-border bg-card p-5 sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
							tone: p.status === "Published" ? "accent" : "default",
							children: p.status
						}), p.doi ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs text-muted-foreground",
							children: ["DOI: ", p.doi]
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-mono text-[.65rem] tracking-[.12em] text-muted-foreground",
						children: p.status === "Published" ? "CONFERENCE PAPER" : "JOURNAL ARTICLE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 text-xl leading-snug",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: p.authors
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground italic",
						children: p.venue
					}),
					p.links.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-3",
						children: p.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: l.url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:bg-surface",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
								className: "h-3.5 w-3.5",
								"aria-hidden": "true"
							}), l.label]
						}, l.url))
					}) : null
				]
			}) }, p.title))
		})
	});
}
function ResearchProjectsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "projects",
		tone: "surface",
		eyebrow: "Research Projects",
		title: "Research case studies",
		description: "Problem-led work across biomedical AI, medical imaging, and responsible model evaluation.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 lg:grid-cols-3",
			children: researchProjects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "card-surface flex flex-col p-6 transition-colors hover:border-accent/60",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[.64rem] tracking-[.12em] text-accent",
						children: "RESEARCH PROJECT"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl leading-snug",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: p.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 border-t border-border pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[.62rem] tracking-[.12em] text-muted-foreground",
							children: "DOMAIN / METHOD"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: p.focus.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: f }, f))
						})]
					}),
					p.linkedPublication ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 rounded-md border-l-2 border-accent bg-highlight/40 px-3 py-2 text-xs leading-relaxed text-muted-foreground",
						children: ["Related publication: ", p.linkedPublication]
					}) : null,
					p.links.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-auto flex flex-wrap gap-3 pt-4",
						children: p.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: l.url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-1.5 text-sm text-accent link-underline",
							children: [
								l.label,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
									className: "h-3.5 w-3.5",
									"aria-hidden": "true"
								})
							]
						}, l.url))
					}) : null
				]
			}, p.title))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg",
					children: "Undergraduate software projects"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Earlier coursework and development work."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					children: softwareProjects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border border-border bg-background/60 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-sm font-medium",
								children: p.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: p.url,
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": `${p.title} on GitHub`,
								className: "text-muted-foreground hover:text-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs leading-relaxed text-muted-foreground",
							children: p.summary
						})]
					}, p.title))
				})
			]
		})]
	});
}
//#endregion
export { ResearchProjectsSection as n, PublicationsSection as t };
