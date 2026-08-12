export const profileImage: string = "https://i.ibb.co.com/qYXdNpjD/pp.png";
export const cvUrl: string =
  "https://drive.google.com/drive/folders/1ZL5LbfuOu2ltZIE8gW8Jyy0xCivFBMqp?usp=sharing";

export const person = {
  name: "Md. Mehedi Hasan",
  headline:
    "MSc/PhD Aspirant | Research Assistant, AMIRL | Data Analysis | Data Annotation | Machine Learning | Data Science",
  summary:
    "CSE graduate with Teaching Assistant and Research Assistant experience, with hands-on experience in data analysis, data annotation, Machine Learning, Deep Learning, and Explainable AI.",
  email: "mdmehedihasansr@gmail.com",
  phone: "(+880) 1537168991",
  location: "Nekrojbag, Kalindi, Keraniganj, Dhaka-1310, Bangladesh",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/0mehedihasan/" },
    { label: "GitHub", url: "https://github.com/0mehedihasan" },
    { label: "ORCID", url: "https://orcid.org/0009-0009-0025-0062" },
  ],
} as const;

export const aboutParagraphs = [
  "I am a Computer Science and Engineering graduate of Bangladesh University of Business and Technology (BUBT), currently a Research Assistant at the Advanced Machine Intelligence Research Lab (AMIRL) and a former Teaching Assistant in the Department of CSE at BUBT.",
  "My day-to-day work spans data analysis, data annotation, machine learning, deep learning, and explainable AI — from dataset preparation and annotation quality control through model development, optimisation, evaluation, and publication. My research exposure covers Healthcare AI, Biomedical AI, Medical Imaging, and graph-based learning.",
  "I am actively seeking roles as a Data Analyst, Data Annotation Analyst, Junior Machine Learning Engineer, Junior Data Scientist, or AI/ML Research Assistant, alongside MSc/PhD opportunities in Healthcare AI/ML, Machine Learning, Deep Learning, Computer Vision, Medical Imaging, Biomedical AI, Explainable AI, Robotics, Bioinformatics, and Data Science.",
];

export const roles = [
  "CSE Graduate",
  "Research Assistant, AMIRL",
  "Former Teaching Assistant, BUBT",
  "Data Analysis",
  "Data Annotation",
  "Machine Learning",
  "Deep Learning",
  "Explainable AI",
];

export const careerInterests = [
  "Data Analyst",
  "Data Annotation Analyst",
  "Junior Machine Learning Engineer",
  "Junior Data Scientist",
  "AI/ML Research Assistant",
];

export const graduateInterests = [
  "Healthcare AI/ML",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Medical Imaging",
  "Biomedical AI",
  "Explainable AI",
  "Robotics",
  "Bioinformatics",
  "Data Science",
];

export const researchInterests = [
  {
    title: "Machine Learning",
    detail:
      "Classical and modern ML pipelines, evaluation design, and leakage-free experimentation.",
  },
  {
    title: "Deep Learning",
    detail:
      "Transformer-based and graph-based architectures for scientific and clinical data.",
  },
  {
    title: "Explainable AI",
    detail:
      "SHAP and attention-based interpretability for transparent, clinically useful models.",
  },
  {
    title: "Healthcare AI",
    detail:
      "Applied AI for diagnosis support and clinical decision-making tasks.",
  },
  {
    title: "Medical Imaging",
    detail:
      "2D and 3D structural MRI analysis with multiple instance learning.",
  },
  {
    title: "Biomedical AI",
    detail:
      "Protein–protein interaction prediction and biological network modelling.",
  },
  {
    title: "Computer Vision",
    detail:
      "Detection, segmentation, tracking, and keypoint annotation workflows.",
  },
  {
    title: "Graph Neural Networks",
    detail:
      "Graph representation learning and ensemble graph–transformer models.",
  },
  {
    title: "Bioinformatics",
    detail:
      "Biological sequence and interaction datasets for predictive modelling.",
  },
  {
    title: "Robotics",
    detail:
      "Perception and intelligent systems as an emerging research direction.",
  },
  {
    title: "Data Science",
    detail:
      "End-to-end data analysis, statistics, visualisation, and reporting.",
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  meta?: string;
  url?: string;
  bullets: string[];
  kind: "research" | "teaching";
};

export const experience: ExperienceItem[] = [
  {
    role: "Research Assistant",
    org: "Advanced Machine Intelligence Research Lab (AMIRL)",
    period: "Jan 2026 – Present",
    meta: "Machine Learning, Deep Learning, Explainable AI, Data Analysis",
    url: "https://amirl.org/",
    kind: "research",
    bullets: [
      "Develop machine learning and deep learning models for healthcare, biomedical AI, and scientific applications, from data preparation to model evaluation.",
      "Design experimental pipelines for data analysis, optimization, explainability, and research publication while mentoring interns and supporting collaborative research activities.",
    ],
  },
  {
    role: "Research Intern",
    org: "Advanced Machine Intelligence Research Lab (AMIRL)",
    period: "Jan 2025 – Jan 2026",
    meta: "Machine Learning, Deep Learning, Explainable AI, Data Analysis",
    url: "https://amirl.org/",
    kind: "research",
    bullets: [
      "Conducted dataset analysis, model development, training, and evaluation across multiple research projects.",
      "Developed transformer-based and graph-based deep learning models and co-authored journal manuscripts and conference papers.",
    ],
  },
  {
    role: "Teaching Assistant",
    org: "Department of CSE, Bangladesh University of Business and Technology (BUBT)",
    period: "Jan 2025 – Dec 2025",
    meta: "Teaching area: Computer Science and Engineering",
    url: "https://cse.bubt.edu.bd/",
    kind: "teaching",
    bullets: [
      "Assisted undergraduate students through laboratory sessions, coursework support, grading, debugging, and academic mentoring.",
      "Contributed to teaching Introduction to Computer Science courses for Business Administration (BBA) students.",
    ],
  },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Bangladesh University of Business and Technology (BUBT)",
    period: "Jan 2022 – Dec 2025",
    result: "CGPA 3.82 / 4.00",
    notes: [],
    featured: true,
  },
  {
    degree: "Higher Secondary Certificate (H.S.C.)",
    institution: "Begum Sheikh Fazilatun Nessa Mujib Govt. College",
    period: "July 2018 – Mar 2020",
    result: "GPA 4.00 / 5.00",
    notes: ["Board: Dhaka", "Group: Science"],
    featured: false,
  },
  {
    degree: "Secondary School Certificate (S.S.C.)",
    institution: "Parzowar Kalindi High School",
    period: "Jan 2016 – Feb 2018",
    result: "GPA 4.11 / 5.00",
    notes: ["Board: Dhaka", "Group: Science"],
    featured: false,
  },
];

export const publications = [
  {
    status: "Published" as const,
    title:
      "X-GNN: An Explainable Ensemble Graph–Transformer Framework for Human Protein–Protein Interaction Prediction",
    authors: "Md. Mehedi Hasan, et al.",
    venue:
      "2026 5th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE), Rajshahi, Bangladesh, 29–31 January 2026. IEEE, 2026.",
    doi: "10.1109/ICECTE69292.2026.11429277",
    links: [
      {
        label: "IEEE Xplore",
        url: "https://ieeexplore.ieee.org/document/11429277",
      },
      {
        label: "DOI",
        url: "https://doi.org/10.1109/ICECTE69292.2026.11429277",
      },
    ],
  },
  {
    status: "Under Review" as const,
    title:
      "Attention-Based Multiple Instance Learning for 2D and 3D Structural MRI Classification of Vascular Brain Injury Etiologic Dementia",
    authors: "Md. Mehedi Hasan, et al.",
    venue: "Under Review, Neuroscience Informatics, Elsevier.",
    doi: null,
    links: [
      {
        label: "Journal: Neuroscience Informatics",
        url: "https://www.sciencedirect.com/journal/neuroscience-informatics",
      },
    ],
  },
];

export const researchProjects = [
  {
    title: "X-GNN — Human Protein–Protein Interaction Prediction",
    summary:
      "An explainable ensemble graph–transformer framework for predicting human protein–protein interactions, published at IEEE ICECTE 2026.",
    focus: [
      "Graph Neural Networks",
      "Graph Learning",
      "Explainable AI",
      "Protein–Protein Interaction",
      "Biomedical AI",
    ],
    linkedPublication:
      "X-GNN: An Explainable Ensemble Graph–Transformer Framework for Human Protein–Protein Interaction Prediction (IEEE ICECTE 2026)",
    links: [
      {
        label: "IEEE Xplore",
        url: "https://ieeexplore.ieee.org/document/11429277",
      },
    ],
  },
  {
    title: "Vascular Brain Injury Etiologic Dementia",
    summary:
      "Attention-based multiple instance learning for 2D and 3D structural MRI classification of vascular brain injury etiologic dementia.",
    focus: [
      "Structural MRI",
      "Medical Imaging",
      "Multiple Instance Learning",
      "2D/3D MRI",
      "Healthcare AI",
      "Explainable AI",
    ],
    linkedPublication:
      "Attention-Based Multiple Instance Learning for 2D and 3D Structural MRI Classification of Vascular Brain Injury Etiologic Dementia — Under Review, Neuroscience Informatics, Elsevier",
    links: [],
  },
  {
    title:
      "Machine Learning Approaches for Early Detection of Parkinson’s Disease",
    summary:
      "End-to-end machine learning system in Python detecting Parkinson’s disease from voice features using the UCI dataset. Achieved 90% accuracy and 93.33% F1-score with XGBoost, applied patient-level data splitting to prevent leakage, handled class imbalance with SMOTE, and used SHAP for interpretability and clinical transparency.",
    focus: [
      "UCI dataset",
      "XGBoost",
      "90% accuracy",
      "93.33% F1-score",
      "Patient-level splitting",
      "SMOTE",
      "SHAP",
    ],
    linkedPublication: null,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/0mehedihasan/recycleapp-web.git",
      },
    ],
  },
];

export const softwareProjects = [
  {
    title: "RecycleAPP — Android Application",
    summary:
      "Android app built with Flutter for recycling awareness and management, with Firebase real-time database and authentication. Developed in Android Studio.",
    url: "https://github.com/0mehedihasan/SDP-2.git",
  },
  {
    title: "Blood Bank Management System",
    summary:
      "C# desktop application managing blood bank inventory and donor records, backed by MS SQL Server; built in Visual Studio and SQL Server Management Studio.",
    url: "https://github.com/0mehedihasan/Software-Development-3.git",
  },
  {
    title: "Deshi Gadgets — E-Commerce Website",
    summary:
      "Full-featured e-commerce platform in Java (JDK 21) with Servlets, JSP, and Bootstrap; MySQL backend using Eclipse EE, Maven, Tomcat, and Git.",
    url: "https://github.com/0mehedihasan/SDP-2.git",
  },
  {
    title: "School Attendance Management System",
    summary:
      "C# desktop application with MS SQL Server for records management, developed in Visual Studio.",
    url: "https://github.com/0mehedihasan/Machine-Learning-Course.git",
  },
];

export const skillGroups = [
  {
    name: "Programming",
    items: ["C", "C++", "C#", "Java", "PHP", "Python", "JavaScript"],
  },
  {
    name: "Machine Learning & Data Science",
    items: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "PyTorch",
    ],
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
      "Quality control",
    ],
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
      "Tomcat",
    ],
  },
  { name: "Databases", items: ["MySQL", "MS SQL Server", "Firebase"] },
  { name: "Platforms", items: ["Google Colab", "Kaggle", "Anaconda"] },
  {
    name: "Documentation & Design",
    items: ["LaTeX", "Canva", "draw.io", "MS Office"],
  },
];

export const certifications = [
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    issued: "25 March 2023",
    credential: "Credential ID: 08d501a29bb8",
    topics:
      "Scalar Types, Operators & Control Flow, Strings, Collections & Iteration, Modularity, OOP",
    url: "https://www.hackerrank.com/certificates/08d501a29bb8",
  },
  {
    title: "C# (Basic)",
    issuer: "HackerRank",
    issued: "04 December 2022",
    credential: "Credential ID: 1ceecfb5505c",
    topics:
      "Structure of C# programs, Types and Variables, Basic OOP, Properties and Indexers, Collections, Exception Handling",
    url: "https://www.hackerrank.com/certificates/1ceecfb5505c",
  },
  {
    title: "CSS (Basic)",
    issuer: "HackerRank",
    issued: "02 December 2022",
    credential: "Credential ID: b827d50ae006",
    topics:
      "Cascading and Inheritance, Text Styling Fundamentals, CSS Layouts, Box Model",
    url: "https://www.hackerrank.com/certificates/b827d50ae006",
  },
  {
    title: "Generative AI for Educators with Gemini",
    issuer: "Google for Education (Exceed LMS)",
    issued: "Oct 2025",
    credential: "Completion ID: 434840854",
    topics:
      "Generative AI, Prompt Engineering, Responsible AI Use in Education",
    url: null,
  },
  {
    title: "AI in the Classroom",
    issuer: "Canva Design School",
    issued: null,
    credential: null,
    topics: "AI-assisted teaching and classroom design workflows.",
    url: null,
  },
  {
    title: "CVAT / Data Annotation Training",
    issuer: "Self-directed training",
    issued: null,
    credential: "Training — not an official certification",
    topics:
      "Image annotation, object detection, segmentation, tracking, keypoints, annotation quality control.",
    url: null,
  },
];

export const conferenceActivities = [
  {
    role: "Session Co-Chair",
    event:
      "Symposium on Photonics, Emerging Computational Technologies, Research & AI–Data Science (SPECTRA 2026)",
    period: "19–20 June 2026",
    detail:
      "Co-chaired technical sessions, supporting session coordination, speaker management, and smooth academic discussions throughout the international symposium.",
    url: "https://ieeepshstusbc.github.io/spectra-2026/",
    highlights: [],
  },
  {
    role: "Accommodation Chair & Session Moderator",
    event:
      "2nd IEEE International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN 2026)",
    period: "16–18 April 2026",
    detail:
      "Coordinated accommodation arrangements and logistics and moderated conference sessions, supporting smooth conference operations, academic discussions, and participant engagement.",
    url: "https://qpain.org/",
    highlights: [],
  },
  {
    role: "Volunteer",
    event:
      "International Conference on Computing, Applications, and Systems (COMPAS 2024, 2025 & 2026)",
    period: "2024 – 2026",
    detail:
      "Assisted with conference logistics, speaker coordination, and attendee support across multiple editions of this international conference.",
    url: null,
    highlights: [],
  },
  {
    role: "General Chair (2026) & Organizing Chair (2025)",
    event: "International Congress on Artificial Intelligence (ICAI)",
    period: "2025 – 2026",
    detail:
      "Progressed from Organizing Chair in 2025 to General Chair in 2026, coordinating an international virtual congress.",
    url: "https://icai.bubt.edu.bd/",
    highlights: [
      "700+ participants",
      "20+ international speakers",
      "200+ ambassadors",
      "30+ countries",
    ],
  },
  {
    role: "Local Arrangement Co-Chair",
    event:
      "2025 IEEE International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN 2025)",
    period: "Jan 2025 – Dec 2025",
    detail:
      "Co-led local arrangements and logistics, ensuring smooth on-site operations and coordination for this multidisciplinary international IEEE conference.",
    url: "https://qpain.org/",
    highlights: [],
  },
  {
    role: "Organizing Co-Chair",
    event:
      "International Congress on Recent Trends in Computer Science (ICRCS 2024 & 2025)",
    period: "Jan 2024 – Dec 2025",
    detail:
      "Co-managed the virtual congress focusing on emerging computer science topics, facilitating seamless online collaboration and presentations.",
    url: "https://icrcs.ieeecsbdc.org/",
    highlights: [],
  },
  {
    role: "Organizing Publicity Member",
    event: "IEEE CS BDC Symposium 2024",
    period: "Jan 2024 – Dec 2024",
    detail:
      "Managed publicity and outreach to maximize event visibility and engagement across digital platforms.",
    url: "https://symposium24.ieeecsbdc.org/committee",
    highlights: [],
  },
];

export const extracurricular = [
  {
    role: "Chief, IEEE Computer Society Bangladesh Chapter Team SPARK",
    period: "Feb 2026 – Present",
    detail:
      "Lead Team SPARK and coordinate its activities, volunteers, and initiatives under the IEEE Computer Society Bangladesh Chapter.",
    url: "https://ieeecsbdc.org/spark-25",
  },
  {
    role: "Marketing Co-Lead, IEEE DAY 2025 & 2026",
    period: "Jan 2025 – Present",
    detail:
      "Co-led marketing initiatives for IEEE DAY 2025 and 2026, managing campaigns to increase participation and awareness at local and regional levels.",
    url: "https://ieeeday.org/core-team-2025/",
  },
  {
    role: "Technical Team Lead, ICPC Asia Dhaka Regional Contest 2025, BUBT",
    period: "19–20 December 2025",
    detail:
      "Led a 61-member volunteer team and oversaw technical operations for 300+ teams during the two-day contest.",
    url: "https://icpc.bubt.edu.bd/",
  },
  {
    role: "Chairperson, IEEE Systems Council BUBT Student Branch Chapter",
    period: "Oct 2025 – Dec 2025",
    detail:
      "Led the student branch chapter, organizing workshops, webinars, and events focused on systems engineering and interdisciplinary technologies.",
    url: null,
  },
  {
    role: "Vice-Chairperson, IEEE Computer Society BUBT Student Branch Chapter",
    period: "Jan 2024 – Dec 2024",
    detail:
      "Supported the student branch chapter in organizing technical workshops, webinars, and professional development activities.",
    url: null,
  },
];

export const awards = [
  {
    title:
      "IEEE Computer Society Richard E. Merwin Student Scholarship 2025 — Spring Cycle",
    issuer: "IEEE Computer Society",
    issued: "02 October 2025",
    detail:
      "Awarded a US $1,000 scholarship as one of the top 20 recipients worldwide in the Spring Cycle, recognising excellent academic results, contributions to technology and STEM initiatives locally and globally, and volunteering in technology-for-humanity projects.",
    highlights: ["USD 1,000", "Top 20 recipients worldwide"],
    url: "https://www.computer.org/volunteering/awards/scholarships/merwin#spring-2025",
    featured: true,
  },
  {
    title: "Best CS Student Volunteer Award 2025",
    issuer: "IEEE Computer Society Bangladesh Chapter",
    issued: "2 January 2026",
    detail:
      "Awarded for sustained excellence in volunteer leadership, significant local contributions to STEM education initiatives, and consistent promotion of IEEE activities within the community.",
    highlights: [],
    url: "https://ieeecsbdc.org/",
    featured: false,
  },
  {
    title: "Best CS Student Volunteer Award 2024",
    issuer: "IEEE Computer Society Bangladesh Chapter",
    issued: "January 2025",
    detail:
      "Recognized for impactful volunteer service, active involvement in STEM outreach programs, and dedicated efforts in promoting IEEE initiatives and student engagement.",
    highlights: [],
    url: "https://ieeecsbdc.org/",
    featured: false,
  },
  {
    title: "Champion, Effective Presentation Skills Competition 2024",
    issuer: "IEEE Computer Society Bangladesh Chapter",
    issued: "25 February 2024",
    detail:
      "Recognised for strong communication, public speaking, and presentation abilities through a compelling and impactful presentation.",
    highlights: [],
    url: "https://ieeecsbdc.org/",
    featured: false,
  },
  {
    title: "Best Team SPARK Volunteer Award 2023",
    issuer: "IEEE Computer Society Bangladesh Chapter",
    issued: "25 February 2024",
    detail:
      "Awarded for outstanding contributions to local STEM initiatives and promoting IEEE activities, leading outreach efforts for IEEE CS BDC.",
    highlights: [],
    url: "https://ieeecsbdc.org/",
    featured: false,
  },
];

export const memberships = {
  items: [
    "The Institute of Electrical and Electronics Engineers (IEEE), NY, USA",
    "IEEE Computer Society",
    "IEEE Robotics and Automation Society",
    "IEEE Women in Engineering",
    "IEEE Power & Energy Society",
    "IEEE Systems Council",
  ],
  membershipId: "98836293",
};

export const languages = [
  { label: "Mother tongue", value: "Bengali" },
  { label: "Medium of instruction for education", value: "English" },
];

export const references = [
  {
    name: "Dr. Md. Shafiqul Islam",
    title: "Assistant Professor",
    department:
      "Department of Computer Science & Engineering, University of Asia Pacific (UAP)",
    email: "msislam.iu@gmail.com",
    profile: null,
  },
  {
    name: "Md. Ashiqur Rahman",
    title: "Assistant Professor",
    department:
      "Department of Computer Science & Engineering, Bangladesh University of Business and Technology (BUBT)",
    email: "ashiqashiqur@gmail.com",
    profile: "https://cse.bubt.edu.bd/facultydetails/36/",
  },
  {
    name: "Ms. Humayra Ahmed",
    title: "Assistant Professor",
    department:
      "Department of Computer Science & Engineering, Bangladesh University of Business and Technology (BUBT)",
    email: "humayraahmed833@gmail.com",
    profile: "https://cse.bubt.edu.bd/facultydetails/34/",
  },
];
