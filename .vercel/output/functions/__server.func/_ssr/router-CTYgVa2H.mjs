import { i as __toESM, n as __exportAll } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, k as redirect, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getServerFnById, n as __exportAll$1, r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-BCuMsvYu.mjs";
import { n as pathSchema, r as saveSchema, t as loginSchema } from "./content-validators-BUVAifjn.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { a as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CTYgVa2H.js
var router_CTYgVa2H_exports = /* @__PURE__ */ __exportAll({
	C: () => profileImage,
	D: () => researchProjects,
	E: () => researchInterests,
	O: () => skillGroups,
	S: () => person,
	T: () => references,
	_: () => experience,
	a: () => adminStatus,
	b: () => languages,
	c: () => listContent,
	d: () => awards,
	f: () => careerInterests,
	g: () => education,
	getRouter: () => getRouter,
	h: () => cvUrl,
	i: () => adminSession,
	k: () => softwareProjects,
	l: () => saveContent,
	m: () => conferenceActivities,
	n: () => adminLogin,
	o: () => deleteContent,
	p: () => certifications,
	r: () => adminLogout,
	s: () => getContent,
	t: () => router_exports,
	u: () => aboutParagraphs,
	v: () => extracurricular,
	w: () => publications,
	x: () => memberships,
	y: () => graduateInterests
});
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DLslOp2Y.css";
function reportRuntimeError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__runtimeEvents?.captureException?.(error, { boundary: "client" }, context);
	if (window.__runtimeReportError) window.__runtimeReportError({
		error,
		context
	});
}
var profileImage = "https://i.ibb.co.com/qYXdNpjD/pp.png";
var cvUrl = "https://drive.google.com/drive/folders/1ZL5LbfuOu2ltZIE8gW8Jyy0xCivFBMqp?usp=sharing";
var person = {
	name: "Md. Mehedi Hasan",
	headline: "MSc/PhD Aspirant | Research Assistant, AMIRL | Data Analysis | Data Annotation | Machine Learning | Data Science",
	summary: "CSE graduate with Teaching Assistant and Research Assistant experience, with hands-on experience in data analysis, data annotation, Machine Learning, Deep Learning, and Explainable AI.",
	email: "mdmehedihasansr@gmail.com",
	phone: "(+880) 1537168991",
	location: "Nekrojbag, Kalindi, Keraniganj, Dhaka-1310, Bangladesh",
	links: [
		{
			label: "LinkedIn",
			url: "https://www.linkedin.com/in/0mehedihasan/"
		},
		{
			label: "GitHub",
			url: "https://github.com/0mehedihasan"
		},
		{
			label: "ORCID",
			url: "https://orcid.org/0009-0009-0025-0062"
		}
	]
};
var aboutParagraphs = [
	"I am a Computer Science and Engineering graduate of Bangladesh University of Business and Technology (BUBT), currently a Research Assistant at the Advanced Machine Intelligence Research Lab (AMIRL) and a former Teaching Assistant in the Department of CSE at BUBT.",
	"My day-to-day work spans data analysis, data annotation, machine learning, deep learning, and explainable AI — from dataset preparation and annotation quality control through model development, optimisation, evaluation, and publication. My research exposure covers Healthcare AI, Biomedical AI, Medical Imaging, and graph-based learning.",
	"I am actively seeking roles as a Data Analyst, Data Annotation Analyst, Junior Machine Learning Engineer, Junior Data Scientist, or AI/ML Research Assistant, alongside MSc/PhD opportunities in Healthcare AI/ML, Machine Learning, Deep Learning, Computer Vision, Medical Imaging, Biomedical AI, Explainable AI, Robotics, Bioinformatics, and Data Science."
];
var careerInterests = [
	"Data Analyst",
	"Data Annotation Analyst",
	"Junior Machine Learning Engineer",
	"Junior Data Scientist",
	"AI/ML Research Assistant"
];
var graduateInterests = [
	"Healthcare AI/ML",
	"Machine Learning",
	"Deep Learning",
	"Computer Vision",
	"Medical Imaging",
	"Biomedical AI",
	"Explainable AI",
	"Robotics",
	"Bioinformatics",
	"Data Science"
];
var researchInterests = [
	{
		title: "Machine Learning",
		detail: "Classical and modern ML pipelines, evaluation design, and leakage-free experimentation."
	},
	{
		title: "Deep Learning",
		detail: "Transformer-based and graph-based architectures for scientific and clinical data."
	},
	{
		title: "Explainable AI",
		detail: "SHAP and attention-based interpretability for transparent, clinically useful models."
	},
	{
		title: "Healthcare AI",
		detail: "Applied AI for diagnosis support and clinical decision-making tasks."
	},
	{
		title: "Medical Imaging",
		detail: "2D and 3D structural MRI analysis with multiple instance learning."
	},
	{
		title: "Biomedical AI",
		detail: "Protein–protein interaction prediction and biological network modelling."
	},
	{
		title: "Computer Vision",
		detail: "Detection, segmentation, tracking, and keypoint annotation workflows."
	},
	{
		title: "Graph Neural Networks",
		detail: "Graph representation learning and ensemble graph–transformer models."
	},
	{
		title: "Bioinformatics",
		detail: "Biological sequence and interaction datasets for predictive modelling."
	},
	{
		title: "Robotics",
		detail: "Perception and intelligent systems as an emerging research direction."
	},
	{
		title: "Data Science",
		detail: "End-to-end data analysis, statistics, visualisation, and reporting."
	}
];
var experience = [
	{
		role: "Research Assistant",
		org: "Advanced Machine Intelligence Research Lab (AMIRL)",
		period: "Jan 2026 – Present",
		meta: "Machine Learning, Deep Learning, Explainable AI, Data Analysis",
		url: "https://amirl.org/",
		kind: "research",
		bullets: ["Develop machine learning and deep learning models for healthcare, biomedical AI, and scientific applications, from data preparation to model evaluation.", "Design experimental pipelines for data analysis, optimization, explainability, and research publication while mentoring interns and supporting collaborative research activities."]
	},
	{
		role: "Research Intern",
		org: "Advanced Machine Intelligence Research Lab (AMIRL)",
		period: "Jan 2025 – Jan 2026",
		meta: "Machine Learning, Deep Learning, Explainable AI, Data Analysis",
		url: "https://amirl.org/",
		kind: "research",
		bullets: ["Conducted dataset analysis, model development, training, and evaluation across multiple research projects.", "Developed transformer-based and graph-based deep learning models and co-authored journal manuscripts and conference papers."]
	},
	{
		role: "Teaching Assistant",
		org: "Department of CSE, Bangladesh University of Business and Technology (BUBT)",
		period: "Jan 2025 – Dec 2025",
		meta: "Teaching area: Computer Science and Engineering",
		url: "https://cse.bubt.edu.bd/",
		kind: "teaching",
		bullets: ["Assisted undergraduate students through laboratory sessions, coursework support, grading, debugging, and academic mentoring.", "Contributed to teaching Introduction to Computer Science courses for Business Administration (BBA) students."]
	}
];
var education = [
	{
		degree: "B.Sc. in Computer Science and Engineering",
		institution: "Bangladesh University of Business and Technology (BUBT)",
		period: "Jan 2022 – Dec 2025",
		result: "CGPA 3.82 / 4.00",
		notes: [],
		featured: true
	},
	{
		degree: "Higher Secondary Certificate (H.S.C.)",
		institution: "Begum Sheikh Fazilatun Nessa Mujib Govt. College",
		period: "July 2018 – Mar 2020",
		result: "GPA 4.00 / 5.00",
		notes: ["Board: Dhaka", "Group: Science"],
		featured: false
	},
	{
		degree: "Secondary School Certificate (S.S.C.)",
		institution: "Parzowar Kalindi High School",
		period: "Jan 2016 – Feb 2018",
		result: "GPA 4.11 / 5.00",
		notes: ["Board: Dhaka", "Group: Science"],
		featured: false
	}
];
var publications = [{
	status: "Published",
	title: "X-GNN: An Explainable Ensemble Graph–Transformer Framework for Human Protein–Protein Interaction Prediction",
	authors: "Md. Mehedi Hasan, et al.",
	venue: "2026 5th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE), Rajshahi, Bangladesh, 29–31 January 2026. IEEE, 2026.",
	doi: "10.1109/ICECTE69292.2026.11429277",
	links: [{
		label: "IEEE Xplore",
		url: "https://ieeexplore.ieee.org/document/11429277"
	}, {
		label: "DOI",
		url: "https://doi.org/10.1109/ICECTE69292.2026.11429277"
	}]
}, {
	status: "Under Review",
	title: "Attention-Based Multiple Instance Learning for 2D and 3D Structural MRI Classification of Vascular Brain Injury Etiologic Dementia",
	authors: "Md. Mehedi Hasan, et al.",
	venue: "Under Review, Neuroscience Informatics, Elsevier.",
	doi: null,
	links: [{
		label: "Journal: Neuroscience Informatics",
		url: "https://www.sciencedirect.com/journal/neuroscience-informatics"
	}]
}];
var researchProjects = [
	{
		title: "X-GNN — Human Protein–Protein Interaction Prediction",
		summary: "An explainable ensemble graph–transformer framework for predicting human protein–protein interactions, published at IEEE ICECTE 2026.",
		focus: [
			"Graph Neural Networks",
			"Graph Learning",
			"Explainable AI",
			"Protein–Protein Interaction",
			"Biomedical AI"
		],
		linkedPublication: "X-GNN: An Explainable Ensemble Graph–Transformer Framework for Human Protein–Protein Interaction Prediction (IEEE ICECTE 2026)",
		links: [{
			label: "IEEE Xplore",
			url: "https://ieeexplore.ieee.org/document/11429277"
		}]
	},
	{
		title: "Vascular Brain Injury Etiologic Dementia",
		summary: "Attention-based multiple instance learning for 2D and 3D structural MRI classification of vascular brain injury etiologic dementia.",
		focus: [
			"Structural MRI",
			"Medical Imaging",
			"Multiple Instance Learning",
			"2D/3D MRI",
			"Healthcare AI",
			"Explainable AI"
		],
		linkedPublication: "Attention-Based Multiple Instance Learning for 2D and 3D Structural MRI Classification of Vascular Brain Injury Etiologic Dementia — Under Review, Neuroscience Informatics, Elsevier",
		links: []
	},
	{
		title: "Machine Learning Approaches for Early Detection of Parkinson’s Disease",
		summary: "End-to-end machine learning system in Python detecting Parkinson’s disease from voice features using the UCI dataset. Achieved 90% accuracy and 93.33% F1-score with XGBoost, applied patient-level data splitting to prevent leakage, handled class imbalance with SMOTE, and used SHAP for interpretability and clinical transparency.",
		focus: [
			"UCI dataset",
			"XGBoost",
			"90% accuracy",
			"93.33% F1-score",
			"Patient-level splitting",
			"SMOTE",
			"SHAP"
		],
		linkedPublication: null,
		links: [{
			label: "GitHub",
			url: "https://github.com/0mehedihasan/recycleapp-web.git"
		}]
	}
];
var softwareProjects = [
	{
		title: "RecycleAPP — Android Application",
		summary: "Android app built with Flutter for recycling awareness and management, with Firebase real-time database and authentication. Developed in Android Studio.",
		url: "https://github.com/0mehedihasan/SDP-2.git"
	},
	{
		title: "Blood Bank Management System",
		summary: "C# desktop application managing blood bank inventory and donor records, backed by MS SQL Server; built in Visual Studio and SQL Server Management Studio.",
		url: "https://github.com/0mehedihasan/Software-Development-3.git"
	},
	{
		title: "Deshi Gadgets — E-Commerce Website",
		summary: "Full-featured e-commerce platform in Java (JDK 21) with Servlets, JSP, and Bootstrap; MySQL backend using Eclipse EE, Maven, Tomcat, and Git.",
		url: "https://github.com/0mehedihasan/SDP-2.git"
	},
	{
		title: "School Attendance Management System",
		summary: "C# desktop application with MS SQL Server for records management, developed in Visual Studio.",
		url: "https://github.com/0mehedihasan/Machine-Learning-Course.git"
	}
];
var skillGroups = [
	{
		name: "Programming",
		items: [
			"C",
			"C++",
			"C#",
			"Java",
			"PHP",
			"Python",
			"JavaScript"
		]
	},
	{
		name: "Machine Learning & Data Science",
		items: [
			"NumPy",
			"Pandas",
			"Scikit-learn",
			"Matplotlib",
			"Seaborn",
			"PyTorch"
		]
	},
	{
		name: "Data Annotation & Computer Vision",
		items: [
			"CVAT",
			"Image annotation",
			"Object detection",
			"Segmentation",
			"Tracking",
			"Keypoints",
			"Quality control"
		]
	},
	{
		name: "Web & Tools",
		items: [
			"HTML",
			"CSS",
			"JSP",
			"Servlet",
			"JDBC",
			"Maven",
			"Git",
			"Visual Studio",
			"Eclipse",
			"Tomcat"
		]
	},
	{
		name: "Databases",
		items: [
			"MySQL",
			"MS SQL Server",
			"Firebase"
		]
	},
	{
		name: "Platforms",
		items: [
			"Google Colab",
			"Kaggle",
			"Anaconda"
		]
	},
	{
		name: "Documentation & Design",
		items: [
			"LaTeX",
			"Canva",
			"draw.io",
			"MS Office"
		]
	}
];
var certifications = [
	{
		title: "Python (Basic)",
		issuer: "HackerRank",
		issued: "25 March 2023",
		credential: "Credential ID: 08d501a29bb8",
		topics: "Scalar Types, Operators & Control Flow, Strings, Collections & Iteration, Modularity, OOP",
		url: "https://www.hackerrank.com/certificates/08d501a29bb8"
	},
	{
		title: "C# (Basic)",
		issuer: "HackerRank",
		issued: "04 December 2022",
		credential: "Credential ID: 1ceecfb5505c",
		topics: "Structure of C# programs, Types and Variables, Basic OOP, Properties and Indexers, Collections, Exception Handling",
		url: "https://www.hackerrank.com/certificates/1ceecfb5505c"
	},
	{
		title: "CSS (Basic)",
		issuer: "HackerRank",
		issued: "02 December 2022",
		credential: "Credential ID: b827d50ae006",
		topics: "Cascading and Inheritance, Text Styling Fundamentals, CSS Layouts, Box Model",
		url: "https://www.hackerrank.com/certificates/b827d50ae006"
	},
	{
		title: "Generative AI for Educators with Gemini",
		issuer: "Google for Education (Exceed LMS)",
		issued: "Oct 2025",
		credential: "Completion ID: 434840854",
		topics: "Generative AI, Prompt Engineering, Responsible AI Use in Education",
		url: null
	},
	{
		title: "AI in the Classroom",
		issuer: "Canva Design School",
		issued: null,
		credential: null,
		topics: "AI-assisted teaching and classroom design workflows.",
		url: null
	},
	{
		title: "CVAT / Data Annotation Training",
		issuer: "Self-directed training",
		issued: null,
		credential: "Training — not an official certification",
		topics: "Image annotation, object detection, segmentation, tracking, keypoints, annotation quality control.",
		url: null
	}
];
var conferenceActivities = [
	{
		role: "Session Co-Chair",
		event: "Symposium on Photonics, Emerging Computational Technologies, Research & AI–Data Science (SPECTRA 2026)",
		period: "19–20 June 2026",
		detail: "Co-chaired technical sessions, supporting session coordination, speaker management, and smooth academic discussions throughout the international symposium.",
		url: "https://ieeepshstusbc.github.io/spectra-2026/",
		highlights: []
	},
	{
		role: "Accommodation Chair & Session Moderator",
		event: "2nd IEEE International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN 2026)",
		period: "16–18 April 2026",
		detail: "Coordinated accommodation arrangements and logistics and moderated conference sessions, supporting smooth conference operations, academic discussions, and participant engagement.",
		url: "https://qpain.org/",
		highlights: []
	},
	{
		role: "Volunteer",
		event: "International Conference on Computing, Applications, and Systems (COMPAS 2024, 2025 & 2026)",
		period: "2024 – 2026",
		detail: "Assisted with conference logistics, speaker coordination, and attendee support across multiple editions of this international conference.",
		url: null,
		highlights: []
	},
	{
		role: "General Chair (2026) & Organizing Chair (2025)",
		event: "International Congress on Artificial Intelligence (ICAI)",
		period: "2025 – 2026",
		detail: "Progressed from Organizing Chair in 2025 to General Chair in 2026, coordinating an international virtual congress.",
		url: "https://icai.bubt.edu.bd/",
		highlights: [
			"700+ participants",
			"20+ international speakers",
			"200+ ambassadors",
			"30+ countries"
		]
	},
	{
		role: "Local Arrangement Co-Chair",
		event: "2025 IEEE International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN 2025)",
		period: "Jan 2025 – Dec 2025",
		detail: "Co-led local arrangements and logistics, ensuring smooth on-site operations and coordination for this multidisciplinary international IEEE conference.",
		url: "https://qpain.org/",
		highlights: []
	},
	{
		role: "Organizing Co-Chair",
		event: "International Congress on Recent Trends in Computer Science (ICRCS 2024 & 2025)",
		period: "Jan 2024 – Dec 2025",
		detail: "Co-managed the virtual congress focusing on emerging computer science topics, facilitating seamless online collaboration and presentations.",
		url: "https://icrcs.ieeecsbdc.org/",
		highlights: []
	},
	{
		role: "Organizing Publicity Member",
		event: "IEEE CS BDC Symposium 2024",
		period: "Jan 2024 – Dec 2024",
		detail: "Managed publicity and outreach to maximize event visibility and engagement across digital platforms.",
		url: "https://symposium24.ieeecsbdc.org/committee",
		highlights: []
	}
];
var extracurricular = [
	{
		role: "Chief, IEEE Computer Society Bangladesh Chapter Team SPARK",
		period: "Feb 2026 – Present",
		detail: "Lead Team SPARK and coordinate its activities, volunteers, and initiatives under the IEEE Computer Society Bangladesh Chapter.",
		url: "https://ieeecsbdc.org/spark-25"
	},
	{
		role: "Marketing Co-Lead, IEEE DAY 2025 & 2026",
		period: "Jan 2025 – Present",
		detail: "Co-led marketing initiatives for IEEE DAY 2025 and 2026, managing campaigns to increase participation and awareness at local and regional levels.",
		url: "https://ieeeday.org/core-team-2025/"
	},
	{
		role: "Technical Team Lead, ICPC Asia Dhaka Regional Contest 2025, BUBT",
		period: "19–20 December 2025",
		detail: "Led a 61-member volunteer team and oversaw technical operations for 300+ teams during the two-day contest.",
		url: "https://icpc.bubt.edu.bd/"
	},
	{
		role: "Chairperson, IEEE Systems Council BUBT Student Branch Chapter",
		period: "Oct 2025 – Dec 2025",
		detail: "Led the student branch chapter, organizing workshops, webinars, and events focused on systems engineering and interdisciplinary technologies.",
		url: null
	},
	{
		role: "Vice-Chairperson, IEEE Computer Society BUBT Student Branch Chapter",
		period: "Jan 2024 – Dec 2024",
		detail: "Supported the student branch chapter in organizing technical workshops, webinars, and professional development activities.",
		url: null
	}
];
var awards = [
	{
		title: "IEEE Computer Society Richard E. Merwin Student Scholarship 2025 — Spring Cycle",
		issuer: "IEEE Computer Society",
		issued: "02 October 2025",
		detail: "Awarded a US $1,000 scholarship as one of the top 20 recipients worldwide in the Spring Cycle, recognising excellent academic results, contributions to technology and STEM initiatives locally and globally, and volunteering in technology-for-humanity projects.",
		highlights: ["USD 1,000", "Top 20 recipients worldwide"],
		url: "https://www.computer.org/volunteering/awards/scholarships/merwin#spring-2025",
		featured: true
	},
	{
		title: "Best CS Student Volunteer Award 2025",
		issuer: "IEEE Computer Society Bangladesh Chapter",
		issued: "2 January 2026",
		detail: "Awarded for sustained excellence in volunteer leadership, significant local contributions to STEM education initiatives, and consistent promotion of IEEE activities within the community.",
		highlights: [],
		url: "https://ieeecsbdc.org/",
		featured: false
	},
	{
		title: "Best CS Student Volunteer Award 2024",
		issuer: "IEEE Computer Society Bangladesh Chapter",
		issued: "January 2025",
		detail: "Recognized for impactful volunteer service, active involvement in STEM outreach programs, and dedicated efforts in promoting IEEE initiatives and student engagement.",
		highlights: [],
		url: "https://ieeecsbdc.org/",
		featured: false
	},
	{
		title: "Champion, Effective Presentation Skills Competition 2024",
		issuer: "IEEE Computer Society Bangladesh Chapter",
		issued: "25 February 2024",
		detail: "Recognised for strong communication, public speaking, and presentation abilities through a compelling and impactful presentation.",
		highlights: [],
		url: "https://ieeecsbdc.org/",
		featured: false
	},
	{
		title: "Best Team SPARK Volunteer Award 2023",
		issuer: "IEEE Computer Society Bangladesh Chapter",
		issued: "25 February 2024",
		detail: "Awarded for outstanding contributions to local STEM initiatives and promoting IEEE activities, leading outreach efforts for IEEE CS BDC.",
		highlights: [],
		url: "https://ieeecsbdc.org/",
		featured: false
	}
];
var memberships = {
	items: [
		"The Institute of Electrical and Electronics Engineers (IEEE), NY, USA",
		"IEEE Computer Society",
		"IEEE Robotics and Automation Society",
		"IEEE Women in Engineering",
		"IEEE Power & Energy Society",
		"IEEE Systems Council"
	],
	membershipId: "98836293"
};
var languages = [{
	label: "Mother tongue",
	value: "Bengali"
}, {
	label: "Medium of instruction for education",
	value: "English"
}];
var references = [
	{
		name: "Dr. Md. Shafiqul Islam",
		title: "Assistant Professor",
		department: "Department of Computer Science & Engineering, University of Asia Pacific (UAP)",
		email: "msislam.iu@gmail.com",
		profile: null
	},
	{
		name: "Md. Ashiqur Rahman",
		title: "Assistant Professor",
		department: "Department of Computer Science & Engineering, Bangladesh University of Business and Technology (BUBT)",
		email: "ashiqashiqur@gmail.com",
		profile: "https://cse.bubt.edu.bd/facultydetails/36/"
	},
	{
		name: "Ms. Humayra Ahmed",
		title: "Assistant Professor",
		department: "Department of Computer Science & Engineering, Bangladesh University of Business and Technology (BUBT)",
		email: "humayraahmed833@gmail.com",
		profile: "https://cse.bubt.edu.bd/facultydetails/34/"
	}
];
var nav = [
	{
		label: "Research",
		to: "/research",
		hash: void 0
	},
	{
		label: "Projects",
		to: "/projects",
		hash: void 0
	},
	{
		label: "Publications",
		to: "/publications",
		hash: void 0
	},
	{
		label: "Experience",
		to: "/",
		hash: "experience"
	},
	{
		label: "Engineering",
		to: "/",
		hash: "engineering"
	},
	{
		label: "Writing",
		to: "/notes",
		hash: void 0
	},
	{
		label: "About",
		to: "/",
		hash: "about"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page flex h-[4.25rem] items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5",
					"aria-label": "Md. Mehedi Hasan — home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-sm font-semibold tracking-[.12em]",
						children: "MEHEDI HASAN"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden border-l border-border pl-2 font-mono text-[.6rem] tracking-[.1em] text-muted-foreground sm:block",
						children: "RESEARCHER / ML ENGINEER"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Primary",
					className: "hidden items-center gap-1 lg:flex",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						...item.hash ? { hash: item.hash } : {},
						className: "px-2 py-2 font-mono text-[.64rem] tracking-wide text-muted-foreground transition-colors hover:text-accent",
						activeProps: { className: "text-foreground" },
						children: item.label
					}, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden items-center gap-2 font-mono text-[.62rem] tracking-[.1em] text-[#73d4a5] xl:inline-flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[#73d4a5]" }), " RESEARCH / ENGINEERING"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: cvUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hidden border border-border px-3 py-2 font-mono text-[.65rem] tracking-wide transition-colors hover:border-accent hover:text-accent sm:inline-flex",
							children: "Download CV"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex h-9 w-9 items-center justify-center border border-border bg-card lg:hidden",
							"aria-expanded": open,
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
						})
					]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "Mobile",
			className: "border-t border-border bg-background lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-1 py-3",
				children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					...item.hash ? { hash: item.hash } : {},
					onClick: () => setOpen(false),
					className: "rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-surface hover:text-foreground",
					children: item.label
				}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: cvUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "mt-1 rounded-md bg-primary px-3 py-2.5 text-center text-sm font-medium text-primary-foreground",
					children: "Download Academic CV"
				})]
			})
		}) : null]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-surface py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-8 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-sm tracking-[.12em]",
					children: "MEHEDI HASAN"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-md text-sm text-muted-foreground",
					children: "Researcher and Machine Learning Engineer. AI, explainability, biomedical data, and technical systems."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "link-underline",
						href: `mailto:${person.email}`,
						children: person.email
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 text-sm sm:items-end",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-x-4 gap-y-2 sm:justify-end",
						children: person.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-muted-foreground link-underline hover:text-foreground",
							children: l.label
						}, l.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "text-muted-foreground hover:text-foreground",
						children: "Admin"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" ",
							person.name,
							". All rights reserved."
						]
					})
				]
			})]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportRuntimeError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Md. Mehedi Hasan Portfolio" },
			{
				name: "description",
				content: "Portfolio of Md. Mehedi Hasan, MSc/PhD aspirant, research assistant at AMIRL, and CSE graduate focused on data analysis, data annotation, machine learning, and data science."
			},
			{
				name: "author",
				content: "Md. Mehedi Hasan"
			},
			{
				property: "og:title",
				content: "Md. Mehedi Hasan Portfolio"
			},
			{
				property: "og:description",
				content: "Academic and research portfolio for Md. Mehedi Hasan, including publications, projects, experience, and CV."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@0mehedihasan"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.png",
			type: "image/png"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		})
	});
}
var $$splitComponentImporter$8 = () => import("./routes-2yqntUiX.mjs");
var Route$8 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Md. Mehedi Hasan — AI & Machine Learning Researcher" },
		{
			name: "description",
			content: "Portfolio of Md. Mehedi Hasan: research assistant at AMIRL working on machine learning, explainable AI and healthcare AI, with publications, projects and academic CV."
		},
		{
			property: "og:title",
			content: "Md. Mehedi Hasan — AI & Machine Learning Researcher"
		},
		{
			property: "og:description",
			content: "Research, publications, projects and academic CV of Md. Mehedi Hasan."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./activities-12D80Amv.mjs");
var Route$7 = createFileRoute("/activities")({
	head: () => ({ meta: [
		{ title: "Activities & Awards — Md. Mehedi Hasan" },
		{
			name: "description",
			content: "International conference roles, certifications, volunteering, honors, professional memberships and academic references for Md. Mehedi Hasan."
		},
		{
			property: "og:title",
			content: "Activities & Awards — Md. Mehedi Hasan"
		},
		{
			property: "og:description",
			content: "Conference service, certifications, honors, memberships and references."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var adminLogin = createServerFn({ method: "POST" }).validator((d) => loginSchema.parse(d)).handler(createSsrRpc("7c823e87c6d659d1e257a4a17b9c7c9425f4a7570f4abb614a3af2b0294d4494"));
var adminLogout = createServerFn({ method: "POST" }).handler(createSsrRpc("e39f9fb42738ca39b75f462344e2dd2dd0f9107feb30583b2ecc39c6c19c05d9"));
var adminSession = createServerFn({ method: "GET" }).handler(createSsrRpc("981811bbc9b9ea3d7b23075770cfff94fe3967edef468b7fd3df7b91f3e759fc"));
var adminStatus = createServerFn({ method: "GET" }).handler(createSsrRpc("d6dc3a652df75304ac88e8edac9d194a821a65b3f55f087c3e92031ab0bb06f4"));
var listContent = createServerFn({ method: "GET" }).handler(createSsrRpc("c80a79615b169512e28174dd0667e0ad3106c1fd06ad2fc021f163bce4bd6c8d"));
var getContent = createServerFn({ method: "POST" }).validator((d) => pathSchema.parse(d)).handler(createSsrRpc("725727a7efcf45ae5743f179b69d78a042a1b95af729644303e54c16fbc239b0"));
var saveContent = createServerFn({ method: "POST" }).validator((d) => saveSchema.parse(d)).handler(createSsrRpc("efcb0c7ccee8b4ddfdef7cd6aecbc989e0d961399bd07b64b65cae087ce5c022"));
var deleteContent = createServerFn({ method: "POST" }).validator((d) => pathSchema.parse(d)).handler(createSsrRpc("1f7600c940791bb6cf0376b5cd31730b8b041bfa857a6eec3e69c32dfb538d5f"));
createServerFn({ method: "GET" }).handler(createSsrRpc("653ed552b2428f46391c2b2bb7a3f65682823bfb7cb14b46acfc2b7bbbbcf18a"));
var $$splitComponentImporter$6 = () => import("./admin-_als8NMD.mjs");
var Route$6 = createFileRoute("/admin")({
	head: () => ({ meta: [
		{ title: "Admin Dashboard — Md. Mehedi Hasan" },
		{
			name: "description",
			content: "Private CMS dashboard for managing Md. Mehedi Hasan's portfolio content on GitHub."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	beforeLoad: async () => {
		const session = await adminSession();
		if (!session.authenticated) throw redirect({
			to: "/login",
			search: { redirect: "/admin" }
		});
		return session;
	},
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./login-CdT5ExU5.mjs");
var Route$5 = createFileRoute("/login")({
	head: () => ({ meta: [
		{ title: "Admin Sign In — Md. Mehedi Hasan" },
		{
			name: "description",
			content: "Private administration sign-in for the portfolio content manager."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./notes-CG8Afpdu.mjs");
var Route$4 = createFileRoute("/notes")({
	head: () => ({ meta: [
		{ title: "Notes — Md. Mehedi Hasan" },
		{
			name: "description",
			content: "Research notes and writing by Md. Mehedi Hasan on machine learning, explainable AI and healthcare data science."
		},
		{
			property: "og:title",
			content: "Notes — Md. Mehedi Hasan"
		},
		{
			property: "og:description",
			content: "Research notes on machine learning and explainable AI."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./projects-BULDMctN.mjs");
var Route$3 = createFileRoute("/projects")({
	head: () => ({ meta: [
		{ title: "Projects — Md. Mehedi Hasan" },
		{
			name: "description",
			content: "Machine learning research projects and undergraduate software projects built by Md. Mehedi Hasan, with tools and technologies used."
		},
		{
			property: "og:title",
			content: "Projects — Md. Mehedi Hasan"
		},
		{
			property: "og:description",
			content: "Research and software projects with the technologies behind them."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./publications-EEA73DuS.mjs");
var Route$2 = createFileRoute("/publications")({
	head: () => ({ meta: [
		{ title: "Publications — Md. Mehedi Hasan" },
		{
			name: "description",
			content: "Peer-reviewed conference and journal publications by Md. Mehedi Hasan in explainable AI and healthcare machine learning."
		},
		{
			property: "og:title",
			content: "Publications — Md. Mehedi Hasan"
		},
		{
			property: "og:description",
			content: "Peer-reviewed publications in explainable and healthcare AI."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./research-BjAB_fpi.mjs");
var Route$1 = createFileRoute("/research")({
	head: () => ({ meta: [
		{ title: "Research — Md. Mehedi Hasan" },
		{
			name: "description",
			content: "Research interests, assistantship work at AMIRL, and applied machine learning research projects by Md. Mehedi Hasan."
		},
		{
			property: "og:title",
			content: "Research — Md. Mehedi Hasan"
		},
		{
			property: "og:description",
			content: "Research interests, AMIRL work and applied ML research projects."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./search-ByyUe6gE.mjs");
var Route = createFileRoute("/search")({
	head: () => ({ meta: [
		{ title: "Search — Md. Mehedi Hasan" },
		{
			name: "description",
			content: "Search across publications, research projects, conference activities and awards of Md. Mehedi Hasan."
		},
		{
			property: "og:title",
			content: "Search — Md. Mehedi Hasan"
		},
		{
			property: "og:description",
			content: "Search publications, projects, activities and awards."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	ActivitiesRoute: Route$7.update({
		id: "/activities",
		path: "/activities",
		getParentRoute: () => Route$9
	}),
	AdminRoute: Route$6.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$9
	}),
	LoginRoute: Route$5.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$9
	}),
	NotesRoute: Route$4.update({
		id: "/notes",
		path: "/notes",
		getParentRoute: () => Route$9
	}),
	ProjectsRoute: Route$3.update({
		id: "/projects",
		path: "/projects",
		getParentRoute: () => Route$9
	}),
	PublicationsRoute: Route$2.update({
		id: "/publications",
		path: "/publications",
		getParentRoute: () => Route$9
	}),
	ResearchRoute: Route$1.update({
		id: "/research",
		path: "/research",
		getParentRoute: () => Route$9
	}),
	SearchRoute: Route.update({
		id: "/search",
		path: "/search",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll$1({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { references as C, saveContent as D, router_CTYgVa2H_exports as E, skillGroups as O, publications as S, researchProjects as T, languages as _, adminStatus as a, person as b, certifications as c, deleteContent as d, education as f, graduateInterests as g, getContent as h, adminSession as i, softwareProjects as k, conferenceActivities as l, extracurricular as m, adminLogin as n, awards as o, experience as p, adminLogout as r, careerInterests as s, aboutParagraphs as t, cvUrl as u, listContent as v, researchInterests as w, profileImage as x, memberships as y };
