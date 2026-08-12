import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Download, m as ArrowDownRight, o as Mail } from "../_libs/lucide-react.mjs";
import { O as skillGroups, b as person, u as cvUrl, x as profileImage } from "./router-CTYgVa2H.mjs";
import { n as Tag, t as Section } from "./section-BeY932nC.mjs";
import { s as SkillsSection, t as AwardsSection } from "./records-D7rEyHE4.mjs";
import { n as ResearchProjectsSection, t as PublicationsSection } from "./research-B1a7EXI3.mjs";
import { i as ResearchInterestsSection, n as EducationSection, r as ExperienceSection, t as AboutSection } from "./experience-88tdZpVB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-2yqntUiX.js
var import_jsx_runtime = require_jsx_runtime();
function ContactCv() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "scroll-mt-24 border-t border-border bg-surface py-16 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-surface flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Curriculum Vitae"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl sm:text-3xl",
						children: "Download the full academic CV"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm text-muted-foreground",
						children: "The complete record of education, research experience, publications, activities, and awards. Open to research assistantships, data roles, and MSc/PhD opportunities."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: cvUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), " Download Academic CV"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `mailto:${person.email}`,
						className: "inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-background",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), " Email me"]
					})]
				})]
			})
		})
	});
}
var domains = [
	"ML / DL",
	"XAI",
	"COMPUTER VISION",
	"GNN",
	"DATA",
	"SYSTEMS"
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.3fr_.7fr] lg:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Computer Science · AI Research · Machine Learning"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 max-w-4xl text-5xl leading-[.95] sm:text-6xl lg:text-7xl",
					children: person.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl font-serif text-2xl leading-snug text-primary sm:text-3xl",
					children: "Researcher and Machine Learning Engineer building intelligent systems across AI, data, and software engineering."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base",
					children: person.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/research",
							className: "inline-flex items-center gap-2 bg-primary px-4 py-2.5 font-mono text-xs font-semibold tracking-wide text-primary-foreground transition-opacity hover:opacity-85",
							children: ["VIEW RESEARCH ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { className: "h-4 w-4" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/projects",
							className: "inline-flex items-center gap-2 border border-border px-4 py-2.5 font-mono text-xs font-semibold tracking-wide hover:border-accent hover:text-accent",
							children: "VIEW PROJECTS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: cvUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-2 border border-border px-4 py-2.5 font-mono text-xs font-semibold tracking-wide hover:border-accent hover:text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), " CV"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex flex-wrap gap-x-4 gap-y-2 border-y border-border py-4",
					children: domains.map((domain) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[.67rem] tracking-[.08em] text-muted-foreground",
						children: domain
					}, domain))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-[.8fr_1.2fr] lg:grid-cols-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "terminal order-2 p-5 sm:order-1 lg:order-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[.65rem] tracking-[.16em] text-accent",
						children: "RESEARCH WORKSTATION / STATUS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-2 terminal-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "$" }), " whoami"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pl-4",
								children: "md.mehedi.hasan"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "$" }), " research --current"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pl-4",
								children: "AI / ML / Computer Vision / GNN"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "$" }), " status"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pl-4 text-[#73d4a5]",
								children: "Researching · Building · Publishing"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "relative order-1 overflow-hidden border border-border bg-muted sm:order-2 lg:order-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: profileImage,
						alt: "Portrait of Md. Mehedi Hasan",
						width: 1152,
						height: 1350,
						fetchPriority: "high",
						className: "aspect-[1.06] w-full object-cover object-top grayscale-[18%]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "absolute bottom-0 left-0 right-0 border-t border-border bg-background/90 px-4 py-3 font-mono text-[.65rem] tracking-[.12em] text-muted-foreground",
						children: "RESEARCH ASSISTANT / AMIRL"
					})]
				})]
			})]
		})
	});
}
var pipeline = [
	"DATASET",
	"PREPROCESS",
	"REPRESENT",
	"MODEL",
	"EXPERIMENT",
	"XAI",
	"VALIDATE",
	"PUBLISH"
];
function ResearchWorkbench() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		eyebrow: "Research pipeline",
		title: "From evidence to an engineered result",
		description: "A disciplined workflow for data-driven research and model development.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[1fr_1.6fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "research-module bg-surface p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-2xl leading-snug",
					children: "Scientific computing is a process: data, method, experiment, validation, and clear reporting."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-6 text-muted-foreground",
					children: "Each stage is designed to make model decisions and research claims more accountable."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4",
				children: pipeline.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pipeline-step",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block text-accent",
						children: ["0", index + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 block",
						children: step
					})]
				}, step))
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "engineering",
		tone: "surface",
		eyebrow: "Engineering",
		title: "Tools applied across research and delivery",
		description: "Technology clusters drawn from documented projects, data workflows, and development experience.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
			children: skillGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "bg-card p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[.65rem] tracking-[.14em] text-accent",
					children: group.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: item }, item))
				})]
			}, group.name))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid grid-cols-3 border border-border text-center font-mono text-[.65rem] tracking-[.1em] text-muted-foreground sm:grid-cols-7",
			children: [
				"CODE",
				"GIT",
				"BUILD",
				"TEST",
				"DEPLOY",
				"AUTOMATE",
				"ITERATE"
			].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "border-b border-r border-border px-2 py-3 last:border-r-0 sm:border-b-0",
				children: item
			}, item))
		})]
	})] });
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResearchInterestsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResearchWorkbench, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EducationSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicationsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResearchProjectsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AwardsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCv, {})
	] });
}
//#endregion
export { Index as component };
