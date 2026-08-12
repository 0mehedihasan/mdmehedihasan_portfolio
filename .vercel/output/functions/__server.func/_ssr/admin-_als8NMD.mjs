import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, r as Slot, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { f as Copy, i as Plus, l as FilePenLine, n as Trash2, r as Search, s as LogOut, t as X } from "../_libs/lucide-react.mjs";
import { D as saveContent, a as adminStatus, d as deleteContent, h as getContent, i as adminSession, r as adminLogout, v as listContent } from "./router-CTYgVa2H.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { r as cn, t as Section } from "./section-BeY932nC.mjs";
import { a as slugify, o as typeById, r as pathForType, t as CONTENT_TYPES } from "./content-schema-C_mrsX9G.mjs";
import { t as Markdown$1 } from "../_libs/react-markdown+[...].mjs";
import { t as remarkGfm } from "../_libs/remark-gfm.mjs";
import { t as remarkMath } from "../_libs/remark-math.mjs";
import { t as rehypeKatex } from "../_libs/rehype-katex.mjs";
import { t as rehypeHighlight } from "../_libs/rehype-highlight.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-_als8NMD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Markdown({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "prose-doc",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown$1, {
			remarkPlugins: [remarkGfm, remarkMath],
			rehypePlugins: [rehypeKatex, [rehypeHighlight, {
				detect: true,
				ignoreMissing: true
			}]],
			children
		})
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function blankDoc(type) {
	const kind = typeById(type);
	const defaultSlug = kind?.kind === "file" ? type : slugify(kind?.label ?? type);
	return {
		type,
		title: kind?.label ?? "New content",
		slug: defaultSlug,
		date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
		tags: "",
		image: "",
		summary: "",
		abstract: "",
		extra: {},
		draft: true,
		body: "",
		originalPath: null
	};
}
function mapDoc(doc) {
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
		originalPath: doc.path
	};
}
function AdminPage() {
	const [adminEmail, setAdminEmail] = (0, import_react.useState)("Authenticated");
	const [repoStatus, setRepoStatus] = (0, import_react.useState)("Checking GitHub status…");
	const [repoUrl, setRepoUrl] = (0, import_react.useState)(null);
	const [content, setContent] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [filter, setFilter] = (0, import_react.useState)("");
	const [selectedType, setSelectedType] = (0, import_react.useState)("profile");
	const [draft, setDraft] = (0, import_react.useState)(blankDoc("profile"));
	const [deleteTarget, setDeleteTarget] = (0, import_react.useState)(null);
	const [actionMessage, setActionMessage] = (0, import_react.useState)("");
	const load = async () => {
		setLoading(true);
		try {
			const [status, items] = await Promise.all([adminStatus(), listContent()]);
			setRepoStatus(status.message);
			setRepoUrl(status.repoUrl);
			setContent(items.ok ? items.items : []);
			setActionMessage(items.ok ? "" : items.message);
			if (!draft.originalPath) {
				const first = items.ok ? items.items.find((item) => item.type === selectedType) : void 0;
				if (first) setDraft(mapDoc(first));
			}
		} catch (error) {
			setActionMessage(error instanceof Error ? error.message : "Could not load the dashboard.");
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		adminSession().then((session) => {
			if (session.authenticated && session.email) setAdminEmail(session.email);
		});
		load();
	}, []);
	const filtered = (0, import_react.useMemo)(() => {
		const term = filter.trim().toLowerCase();
		return content.filter((item) => {
			const matchesType = item.type === selectedType || selectedType === "profile" || selectedType === "about";
			const matchesSearch = !term ? true : `${item.title} ${item.slug} ${item.summary ?? ""} ${item.body} ${item.path}`.toLowerCase().includes(term);
			return matchesType && matchesSearch;
		});
	}, [
		content,
		filter,
		selectedType
	]);
	const counts = (0, import_react.useMemo)(() => CONTENT_TYPES.reduce((acc, type) => {
		acc[type.id] = content.filter((item) => item.type === type.id).length;
		return acc;
	}, {}), [content]);
	const currentType = typeById(draft.type) ?? CONTENT_TYPES[0];
	const currentPath = currentType ? pathForType(currentType, draft.slug || slugify(draft.title || currentType.label)) : "";
	async function onSave(e) {
		e.preventDefault();
		setSaving(true);
		setActionMessage("");
		try {
			const result = await saveContent({
				type: draft.type,
				title: draft.title,
				slug: draft.slug,
				date: draft.date,
				tags: draft.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
				image: draft.image.trim() || null,
				summary: draft.summary.trim() || null,
				abstract: draft.type === "research" ? draft.abstract.trim() || null : null,
				extra: draft.extra,
				draft: draft.draft,
				body: draft.body,
				originalPath: draft.originalPath
			});
			setActionMessage(result.ok ? result.message : result.message || "Could not save content.");
			await load();
			if (result.ok && result.commit) {
				const refreshed = await getContent({ data: { path: result.commit.path } });
				if (refreshed.ok && refreshed.doc) setDraft(mapDoc({
					...refreshed.doc,
					type: draft.type
				}));
			}
		} catch (error) {
			setActionMessage(error instanceof Error ? error.message : "Could not save content.");
		} finally {
			setSaving(false);
		}
	}
	async function onLogout() {
		await adminLogout();
		window.location.assign("/login");
	}
	async function selectDoc(doc) {
		setLoading(true);
		setActionMessage("");
		setSelectedType(doc.type);
		try {
			const result = await getContent({ data: { path: doc.path } });
			if (!result.ok || !result.doc) {
				setActionMessage(result.message || `Unable to load ${doc.path}. Please retry.`);
				return;
			}
			setDraft(mapDoc({
				...result.doc,
				type: doc.type
			}));
		} catch (error) {
			setActionMessage(error instanceof Error ? `Unable to load ${doc.path}: ${error.message}` : `Unable to load ${doc.path}. Please retry.`);
		} finally {
			setLoading(false);
		}
	}
	function createNew(type = selectedType) {
		const fresh = blankDoc(type);
		setSelectedType(type);
		setDraft(fresh);
	}
	async function onDuplicate() {
		const copyTitle = draft.title.startsWith("Copy of ") ? draft.title : `Copy of ${draft.title}`;
		const copySlug = slugify(`${draft.slug || draft.title}-copy`);
		setDraft((prev) => ({
			...prev,
			title: copyTitle,
			slug: copySlug,
			originalPath: null
		}));
		setActionMessage("Draft duplicated. Review the slug before publishing.");
	}
	async function confirmDelete() {
		if (!deleteTarget) return;
		setSaving(true);
		try {
			const result = await deleteContent({ path: deleteTarget.path });
			setActionMessage(result.ok ? result.message : result.message || "Could not delete content.");
			setDeleteTarget(null);
			await load();
			if (draft.originalPath === deleteTarget.path) createNew(selectedType);
		} finally {
			setSaving(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		eyebrow: "Administration",
		title: "GitHub content dashboard",
		description: "Manage Markdown content, publish to GitHub, and preview changes before commit.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 xl:grid-cols-[18rem_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-surface space-y-4 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Signed in"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-medium",
									children: adminEmail
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									onClick: onLogout,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Logout"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: repoStatus
							}),
							repoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-sm text-accent link-underline",
								href: repoUrl,
								target: "_blank",
								rel: "noreferrer",
								children: "Open GitHub repository"
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-surface space-y-3 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-base",
									children: "Content"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									onClick: () => createNew(selectedType),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " New"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: filter,
									onChange: (e) => setFilter(e.target.value),
									placeholder: "Filter content",
									className: "pl-9"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: CONTENT_TYPES.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setSelectedType(type.id);
										if (!draft.originalPath) createNew(type.id);
									},
									className: cn("rounded-full border px-3 py-1 text-xs transition-colors", selectedType === type.id ? "border-accent bg-highlight text-accent" : "border-border bg-card"),
									children: [
										type.label,
										" (",
										counts[type.id] ?? 0,
										")"
									]
								}, type.id))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-h-144 space-y-2 overflow-auto pr-1",
						children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Loading content…"
						}) : null, filtered.map((doc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => void selectDoc(doc),
							className: cn("card-surface block w-full rounded-lg px-4 py-3 text-left transition-colors hover:bg-surface", draft.originalPath === doc.path ? "border-accent/40 ring-1 ring-accent/20" : ""),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
									children: doc.type
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-sm font-medium",
									children: doc.title
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground",
									children: doc.draft ? "Draft" : "Published"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted-foreground",
								children: doc.path
							})]
						}, doc.path))]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-3 xl:grid-cols-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-surface p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Selected path"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 break-all text-sm",
									children: currentPath || draft.originalPath || "New content"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-surface p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm",
									children: draft.draft ? "GitHub draft" : "GitHub published"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-surface p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Last updated"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm",
									children: draft.date || "Today"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-surface p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Current type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm",
									children: currentType.label
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-surface p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Deployment"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Unknown"
								})]
							})
						]
					}),
					actionMessage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-md border border-border bg-surface px-4 py-3 text-sm",
						children: actionMessage
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: onSave,
						className: "grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-surface space-y-4 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "Editor"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-1 text-xl",
										children: "Markdown content"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "button",
											variant: "outline",
											size: "sm",
											onClick: onDuplicate,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" }), " Duplicate"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "button",
											variant: "outline",
											size: "sm",
											onClick: () => setDeleteTarget(draft.originalPath ? content.find((item) => item.path === draft.originalPath) ?? null : null),
											disabled: !draft.originalPath,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" }), " Delete"]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-1.5 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Content type" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: draft.type,
											onChange: (e) => setDraft((prev) => ({
												...prev,
												type: e.target.value
											})),
											className: "rounded-md border border-border bg-background px-3 py-2",
											children: CONTENT_TYPES.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: type.id,
												children: type.label
											}, type.id))
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-1.5 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Slug" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: draft.slug,
											onChange: (e) => setDraft((prev) => ({
												...prev,
												slug: e.target.value
											}))
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "grid gap-1.5 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: draft.title,
										onChange: (e) => setDraft((prev) => ({
											...prev,
											title: e.target.value
										}))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-1.5 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "date",
											value: draft.date,
											onChange: (e) => setDraft((prev) => ({
												...prev,
												date: e.target.value
											}))
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-1.5 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tags" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: draft.tags,
											onChange: (e) => setDraft((prev) => ({
												...prev,
												tags: e.target.value
											}))
										})]
									})]
								}),
								draft.type === "research" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "grid gap-1.5 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Abstract" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										value: draft.abstract,
										onChange: (e) => setDraft((prev) => ({
											...prev,
											abstract: e.target.value
										})),
										placeholder: "Optional research abstract"
									})]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-1.5 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Summary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											value: draft.summary,
											onChange: (e) => setDraft((prev) => ({
												...prev,
												summary: e.target.value
											}))
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-1.5 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Image URL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											value: draft.image,
											onChange: (e) => setDraft((prev) => ({
												...prev,
												image: e.target.value
											}))
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: draft.draft,
										onChange: (e) => setDraft((prev) => ({
											...prev,
											draft: e.target.checked
										}))
									}), "Save as GitHub draft (not yet deployed)"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden md:block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-1.5 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Markdown body" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											value: draft.body,
											onChange: (e) => setDraft((prev) => ({
												...prev,
												body: e.target.value
											})),
											className: "min-h-136 font-mono text-xs leading-6"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "md:hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
										defaultValue: "editor",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
												className: "grid w-full grid-cols-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
													value: "editor",
													children: "Editor"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
													value: "preview",
													children: "Preview"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
												value: "editor",
												className: "mt-4",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "grid gap-1.5 text-sm",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Markdown body" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
														value: draft.body,
														onChange: (e) => setDraft((prev) => ({
															...prev,
															body: e.target.value
														})),
														className: "min-h-112 font-mono text-xs leading-6"
													})]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
												value: "preview",
												className: "mt-4",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "card-surface p-4",
													children: [draft.type === "research" && draft.abstract ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mb-5 border-l-2 border-accent bg-surface p-4",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "eyebrow",
															children: "Abstract"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2 text-sm leading-relaxed text-muted-foreground",
															children: draft.abstract
														})]
													}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { children: draft.body || "Start typing Markdown to see the rendered output." })]
												})
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-3 pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "submit",
										disabled: saving,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePenLine, { className: "h-4 w-4" }),
											" ",
											saving ? "Publishing…" : draft.originalPath ? "Update and publish" : "Publish"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "button",
										variant: "outline",
										onClick: () => createNew(draft.type),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " New draft"]
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden md:block card-surface p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Live Preview · GitHub content"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-1 text-xl",
									children: "Rendered Markdown"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 rounded-lg border border-border bg-background p-5",
									children: [draft.type === "research" && draft.abstract ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-5 border-l-2 border-accent bg-surface p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "eyebrow",
											children: "Abstract"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-muted-foreground",
											children: draft.abstract
										})]
									}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { children: draft.body || "Start typing Markdown to see the rendered output." })]
								})
							]
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: Boolean(deleteTarget),
			onOpenChange: (open) => !open && setDeleteTarget(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Delete content?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
				"This will permanently delete",
				" ",
				deleteTarget?.title ?? "the selected item",
				" from GitHub."
			] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				onClick: () => setDeleteTarget(null),
				children: "Cancel"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "destructive",
				onClick: () => void confirmDelete(),
				disabled: saving,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" }), " Delete"]
			})] })] })
		})]
	});
}
//#endregion
export { AdminPage as component };
