import {
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  DatabaseZap,
  Layers3,
  Mail,
  Medal,
  NotebookText,
  Rocket,
  Sparkles,
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  // { label: "Certificates", href: "#certificates" },
  // { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const aboutHighlights = [
  {
    label: "AI Systems",
    value: "LLMs, automation, and applied machine learning workflows.",
    icon: BrainCircuit,
  },
  {
    label: "Product Engineering",
    value: "Fast, modern apps with thoughtful UX and reliable architecture.",
    icon: Layers3,
  },
  {
    label: "Data Thinking",
    value: "Turning messy signals into models, dashboards, and decisions.",
    icon: DatabaseZap,
  },
];

export const skills = [
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    picture: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1170&auto=format&fit=crop",
    items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "Prompt Engineering"],

  },
  {
    title: "Data Science",
    icon: DatabaseZap,
    picture: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop",
    items: ["Pandas", "NumPy", "SQL", "EDA", "Model Evaluation", "Feature Engineering"],
  },
  {
    title: "Application Engineering",
    icon: Code2,
    picture: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1170&auto=format&fit=crop",
    items: ["Next.js", "React", "TypeScript", "Flutter", "REST APIs", "Tailwind CSS"],
  },
];

export const projects = [
  {
    title: "Doctor-Sab",
    category: "LLM App",
    link: "https://github.com/bhattabhuwan/ds",
    picture: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1170&auto=format&fit=crop",
    description:"An LLM-powered telemedicine platform with enabled healthcare assistance, secure consultations.",
    tags: ["RAG", "Embeddings", "Next.js", "Vector DB"],
  },
  {
    title: "MINA",
    category: "ML Platform",
    link: "mina-healthcare.web.app/",
    picture: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1170&auto=format&fit=crop",
    description:
      "MINA: AI-powered nursing mobile app for intelligent healthcare assistance",
    tags: ["Forecasting", "Python", "Data Viz", "APIs"],
  },
  {
    title: "Auto Market",
    category: "Flutter App",
    link: "https://github.com/bhattabhuwan/automarket",
    picture: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop",
    description:
      "Flutter app automating marketplace data collection and analysis.",
    tags: ["Flutter", "Firebase", "AI UX", "Mobile"],
  },
];

export const experience = [
  {
    role: "AI Engineer",
    company: "Independent Projects",
    period: "2024 - Present",
    summary:
      "Building AI-powered products that combine machine learning, data workflows, and modern frontend interfaces.",
  },
  {
    role: "Machine Learning Engineer",
    company: "Applied ML Labs",
    period: "2023 - 2024",
    summary:
      "Designed model pipelines, evaluation flows, and user-facing tools for practical decision support.",
  },
  {
    role: "Flutter Developer",
    company: "Mobile Product Studio",
    period: "2022 - 2023",
    summary:
      "Created responsive cross-platform apps with clean state management and performance-focused UI.",
  },
];

export const certificates = [
  "Machine Learning Specialization",
  "Deep Learning Foundations",
  "Data Science with Python",
  "Cloud AI Fundamentals",
  "Flutter Application Development",
];

export const posts = [
  {
    title: "Designing AI Products People Can Trust",
    excerpt: "How interface clarity, evaluation, and feedback loops shape better AI experiences.",
    meta: "AI Product",
  },
  {
    title: "From Notebook to Production",
    excerpt: "A practical path for moving ML experiments into dependable application workflows.",
    meta: "MLOps",
  },
  {
    title: "Why Flutter Still Matters for AI Apps",
    excerpt: "Mobile-first AI experiences need speed, polish, and thoughtful interaction design.",
    meta: "Mobile AI",
  },
];

export const contactMethods = [
  {
    label: "Email",
    value: "bhuwavhatta@gmail.com",
    href: "mailto:bhuwavhatta@gmail.com",
    icon: Mail,
  },
  {
    label: "Projects",
    value: "Explore selected AI work",
    href: "#projects",
    icon: Rocket,
  },
  {
    label: "Certificates",
    value: "Validated learning path",
    href: "#certificates",
    icon: Medal,
  },
];

export const sectionIcons = {
  about: Sparkles,
  skills: BrainCircuit,
  projects: Rocket,
  experience: BriefcaseBusiness,
  certificates: Medal,
  blog: NotebookText,
  contact: Mail,
};
