import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { p as Award, u as ExternalLink } from "../_libs/lucide-react.mjs";
import { C as references, O as skillGroups, _ as languages, c as certifications, l as conferenceActivities, m as extracurricular, o as awards, y as memberships } from "./router-CTYgVa2H.mjs";
import { n as Tag, t as Section } from "./section-BeY932nC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/records-D7rEyHE4.js
var import_jsx_runtime = require_jsx_runtime();
function SkillsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "skills",
		eyebrow: "Technical Skills",
		title: "Tools and technologies",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: skillGroups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-base font-medium",
					children: g.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: g.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: i }, i))
				})]
			}, g.name))
		})
	});
}
function CertificationsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "certifications",
		tone: "surface",
		eyebrow: "Training & Certifications",
		title: "Verified learning",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: certifications.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "card-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-medium",
							children: c.title
						}), c.issued ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-muted-foreground",
							children: c.issued
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-accent",
						children: c.issuer
					}),
					c.topics ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: c.topics
					}) : null,
					c.credential ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-mono text-xs text-muted-foreground",
						children: c.credential
					}) : null,
					c.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: c.url,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-3 inline-flex items-center gap-1.5 text-sm text-accent link-underline",
						children: [
							"View certificate",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								className: "h-3.5 w-3.5",
								"aria-hidden": "true"
							})
						]
					}) : null
				]
			}, c.title))
		})
	});
}
function ConferenceActivitiesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "conferences",
		eyebrow: "International Conference, Congress & Symposium Activities",
		title: "Organising and chairing roles",
		description: "Reverse chronological record of international conference service.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "grid gap-4",
			children: conferenceActivities.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "card-surface p-5 sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg leading-snug",
							children: a.role
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-wide text-muted-foreground",
							children: a.period
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-medium",
						children: a.event
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: a.detail
					}),
					a.highlights.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: a.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
							tone: "accent",
							children: h
						}, h))
					}) : null,
					a.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: a.url,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-3 inline-flex items-center gap-1.5 text-sm text-accent link-underline",
						children: [
							"Event link",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								className: "h-3.5 w-3.5",
								"aria-hidden": "true"
							})
						]
					}) : null
				]
			}) }, `${a.role}-${a.event}`))
		})
	});
}
function ExtracurricularSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "extracurricular",
		tone: "surface",
		eyebrow: "Extracurricular Activities",
		title: "Leadership and volunteering",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "grid gap-4 sm:grid-cols-2",
			children: extracurricular.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "card-surface h-full p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base leading-snug font-medium",
							children: e.role
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-muted-foreground",
							children: e.period
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: e.detail
					}),
					e.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: e.url,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-3 inline-flex items-center gap-1.5 text-sm text-accent link-underline",
						children: [
							"Link",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								className: "h-3.5 w-3.5",
								"aria-hidden": "true"
							})
						]
					}) : null
				]
			}) }, e.role))
		})
	});
}
function AwardsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "awards",
		eyebrow: "Honors & Awards",
		title: "Recognition",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4",
			children: awards.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `card-surface p-5 sm:p-6 ${a.featured ? "border-accent/40 ring-1 ring-accent/20" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "flex items-center gap-2 text-lg leading-snug",
							children: [a.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {
								className: "h-4 w-4 text-accent",
								"aria-hidden": "true"
							}) : null, a.title]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-muted-foreground",
							children: a.issued
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-accent",
						children: a.issuer
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: a.detail
					}),
					a.highlights.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: a.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
							tone: "accent",
							children: h
						}, h))
					}) : null,
					a.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: a.url,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-3 inline-flex items-center gap-1.5 text-sm text-accent link-underline",
						children: [
							"Details",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								className: "h-3.5 w-3.5",
								"aria-hidden": "true"
							})
						]
					}) : null
				]
			}, a.title))
		})
	});
}
function MembershipsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "memberships",
		tone: "surface",
		eyebrow: "Professional Memberships & Languages",
		title: "Affiliations",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[1.6fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-medium",
						children: "Memberships"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid gap-2 sm:grid-cols-2",
						children: memberships.items.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
							}), m]
						}, m))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 font-mono text-xs text-muted-foreground",
						children: ["IEEE Membership ID: ", memberships.membershipId]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-base font-medium",
					children: "Language skills"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-3 space-y-3 text-sm",
					children: languages.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted-foreground",
						children: l.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "font-medium",
						children: l.value
					})] }, l.label))
				})]
			})]
		})
	});
}
function ReferencesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "references",
		eyebrow: "References",
		title: "Academic referees",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-3",
			children: references.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "card-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-medium",
						children: r.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-accent",
						children: r.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: r.department
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${r.email}`,
						className: "mt-3 block text-sm link-underline break-all",
						children: r.email
					}),
					r.profile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: r.profile,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-2 inline-flex items-center gap-1.5 text-sm text-accent link-underline",
						children: [
							"Faculty profile",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								className: "h-3.5 w-3.5",
								"aria-hidden": "true"
							})
						]
					}) : null
				]
			}, r.name))
		})
	});
}
//#endregion
export { MembershipsSection as a, ExtracurricularSection as i, CertificationsSection as n, ReferencesSection as o, ConferenceActivitiesSection as r, SkillsSection as s, AwardsSection as t };
