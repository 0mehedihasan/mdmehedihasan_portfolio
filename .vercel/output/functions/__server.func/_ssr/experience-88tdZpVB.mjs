import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { u as ExternalLink } from "../_libs/lucide-react.mjs";
import { f as education, g as graduateInterests, p as experience, s as careerInterests, t as aboutParagraphs, w as researchInterests } from "./router-CTYgVa2H.mjs";
import { n as Tag, t as Section } from "./section-BeY932nC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/experience-88tdZpVB.js
var import_jsx_runtime = require_jsx_runtime();
function AboutSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		eyebrow: "About",
		title: "A research and engineering trajectory",
		description: "Academic training, current research direction, and technical interests.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[1.4fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4 text-base leading-relaxed text-muted-foreground",
				children: aboutParagraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 24)))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg",
						children: "Career interests"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground",
						children: careerInterests.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
							}), c]
						}, c))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg",
						children: "MSc / PhD interests"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: graduateInterests.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: g }, g))
					})]
				})]
			})]
		})
	});
}
function ResearchInterestsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "research-interests",
		tone: "surface",
		eyebrow: "Research Interests",
		title: "Research domains",
		description: "Areas of active work and long-term research direction.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: researchInterests.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "research-module border border-border bg-card p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[.61rem] tracking-[.12em] text-accent",
						children: "DOMAIN"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 text-base font-medium",
						children: r.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: r.detail
					})
				]
			}, r.title))
		})
	});
}
function ExperienceSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "experience",
		eyebrow: "Experience",
		title: "Research and teaching timeline",
		description: "Roles connecting academic inquiry, experimental work, and computer science education.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "relative space-y-6 border-l border-border pl-6 sm:pl-8",
			children: experience.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "absolute top-6 -left-[1.72rem] h-2.5 w-2.5 rounded-full border-2 border-background bg-accent sm:-left-[2.22rem]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "research-module border border-border bg-card p-5 sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl",
								children: item.role
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs tracking-wide text-muted-foreground",
								children: item.period
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-medium",
							children: item.org
						}),
						item.meta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: item.meta
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground",
							children: item.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
								}), b]
							}, b.slice(0, 24)))
						}),
						item.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: item.url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-4 inline-flex items-center gap-1.5 text-sm text-accent link-underline",
							children: [item.url.replace(/^https?:\/\//, "").replace(/\/$/, ""), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								className: "h-3.5 w-3.5",
								"aria-hidden": "true"
							})]
						}) : null
					]
				})]
			}, `${item.role}-${item.period}`))
		})
	});
}
function EducationSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "education",
		tone: "surface",
		eyebrow: "Education",
		title: "Academic background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4",
			children: education.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `card-surface p-5 sm:p-6 ${e.featured ? "border-accent/40 ring-1 ring-accent/20" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: e.featured ? "text-xl" : "text-lg",
							children: e.degree
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-wide text-muted-foreground",
							children: e.period
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm",
						children: e.institution
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 inline-flex rounded-md bg-highlight px-2.5 py-1 font-mono text-xs text-highlight-foreground",
						children: e.result
					}),
					e.notes.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: e.notes.join(" · ")
					}) : null
				]
			}, e.degree))
		})
	});
}
//#endregion
export { ResearchInterestsSection as i, EducationSection as n, ExperienceSection as r, AboutSection as t };
