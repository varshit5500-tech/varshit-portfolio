export const personalInfo = {
  name: "Varshit Dholawala",
  title: "B.Tech ECE Student | AI & Technology Enthusiast",
  university: "JECRC University",
  degree: "B.Tech in Electronics & Communication Engineering (ECE)",
  currentYear: "Undergraduate Student",
  location: "Jaipur, Rajasthan, India",
  email: "varshit@gmail.com",
  // Clearly labeled placeholders ready to be updated
  linkedin: "https://linkedin.com/in/varshit-dholawala",
  github: "https://github.com/varshit-dholawala",
  bio: "I am an enthusiastic Electronics & Communication Engineering undergraduate at JECRC University with an avid passion for modern software engineering, artificial intelligence, and smart technology. Blending an engineering mindset with hands-on web and programming skills, I love crafting clean, intuitive digital experiences and exploring cutting-edge AI innovations.",
  stats: [
    { label: "Focus Field", value: "ECE & Software" },
    { label: "University", value: "JECRC, Jaipur" },
    { label: "Core Interests", value: "AI, Web, IoT" },
    { label: "Availability", value: "Open for Opportunities" },
  ]
};

export const educationData = {
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Electronics and Communication Engineering (ECE)",
  institution: "JECRC University",
  location: "Jaipur, Rajasthan, India",
  duration: "Pursuing B.Tech",
  description: "Pursuing rigorous engineering coursework covering both hardware architecture and computing fundamentals. Actively applying theoretical engineering concepts to modern software development and intelligent embedded solutions.",
  coursework: [
    "Digital Electronics & Logic Design",
    "Microcontrollers & Embedded Systems",
    "Signals & Systems",
    "Data Structures & Algorithms",
    "Python Programming",
    "Computer Organization & Architecture",
    "Analog & Digital Communication",
    "Foundations of Machine Learning",
  ]
};

// 8 Required Skill Categories
export const skillsData = [
  {
    id: "html",
    name: "HTML",
    category: "Frontend Core",
    icon: "Code2",
    level: "Proficient",
    description: "Semantic HTML5, accessible layouts (ARIA), valid document hierarchies, responsive media structures."
  },
  {
    id: "css",
    name: "CSS",
    category: "Styling & UI",
    icon: "Palette",
    level: "Proficient",
    description: "Modern CSS3, Tailwind CSS utility architecture, Flexbox, CSS Grid, custom animations, dark mode palettes."
  },
  {
    id: "js",
    name: "JavaScript",
    category: "Programming",
    icon: "FileCode2",
    level: "Intermediate",
    description: "ES6+ modern syntax, asynchronous programming, DOM APIs, event-driven development, modular code."
  },
  {
    id: "python",
    name: "Python",
    category: "Programming & Data",
    icon: "Terminal",
    level: "Proficient",
    description: "Scripting, algorithmic problem solving, data manipulation, automation, and backend/API integration."
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    category: "Emerging Tech",
    icon: "BrainCircuit",
    level: "Foundational",
    description: "Fundamental machine learning paradigms, model evaluation, supervised algorithms, and intelligent systems design."
  },
  {
    id: "genai",
    name: "Generative AI",
    category: "Modern AI Tools",
    icon: "Sparkles",
    level: "Active Enthusiast",
    description: "Prompt engineering techniques, multimodal reasoning workflows, LLM API integration, and AI-accelerated development."
  },
  {
    id: "webdev",
    name: "Web Development",
    category: "Full Development",
    icon: "Globe",
    level: "Intermediate",
    description: "Component-based architecture (React), modern build tooling (Vite), SPA routing, REST APIs, and Vercel deployments."
  },
  {
    id: "productivity",
    name: "Digital Productivity",
    category: "Tools & Workflow",
    icon: "Laptop",
    level: "Advanced",
    description: "Git & GitHub version control, VS Code power workflows, Linux/Terminal basics, Markdown documentation, and agile planning."
  }
];

// Projects - Real & Honest Student Placeholders
export const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio & Showcase",
    tagline: "High-performance modern web presence",
    description: "A fast, responsive single-page portfolio engineered with React, Vite, and Tailwind CSS. Features glassmorphism dark aesthetic, semantic accessibility, smooth scrolling, and zero-config Vercel deployment.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "Lucide Icons"],
    category: "Web Development",
    liveUrl: "#",
    githubUrl: "https://github.com/varshit-dholawala",
    isPlaceholder: false,
    badge: "Current Build"
  },
  {
    id: 2,
    title: "Smart IoT Environmental Monitor",
    tagline: "Embedded sensor telemetry dashboard",
    description: "[Student Project Placeholder] An IoT telemetry system concept utilizing microcontroller sensor inputs (temperature, humidity, air quality) mapped to a web-based monitoring dashboard.",
    tech: ["Python", "Microcontrollers (ESP32)", "IoT Protocols", "React Basics"],
    category: "ECE / IoT",
    liveUrl: "#",
    githubUrl: "https://github.com/varshit-dholawala",
    isPlaceholder: true,
    placeholderNotice: "Replace with your custom hardware/software project"
  },
  {
    id: 3,
    title: "AI Text Analyzer & Insight Extractor",
    tagline: "LLM-assisted content breakdown",
    description: "[Student Project Placeholder] A smart NLP prototype designed to summarize lengthy technical text, extract key keywords, and generate quick bulleted study summaries using AI APIs.",
    tech: ["Python", "REST API", "Generative AI", "Tailwind CSS"],
    category: "Artificial Intelligence",
    liveUrl: "#",
    githubUrl: "https://github.com/varshit-dholawala",
    isPlaceholder: true,
    placeholderNotice: "Replace with your AI/ML project"
  }
];

// Achievements & Certifications
export const achievementsData = [
  {
    id: 1,
    title: "Python for Data Science, AI & Development",
    issuer: "IBM / Coursera",
    year: "Certified",
    description: "Mastered Python fundamentals, data structures, logic, and working with data libraries for analytical computing.",
    type: "Certification",
    verified: true
  },
  {
    id: 2,
    title: "Introduction to Embedded Systems & IoT",
    issuer: "NPTEL / Academic Coursework",
    year: "Coursework",
    description: "Deepened practical understanding of sensor-actuator interfacing, microcontroller buses, and embedded firmware design.",
    type: "Coursework",
    verified: true
  },
  {
    id: 3,
    title: "Modern Responsive Web Design & React",
    issuer: "FreeCodeCamp & Practical Projects",
    year: "Specialization",
    description: "Completed comprehensive training on CSS Grid, Flexbox, responsive typography, and React component state management.",
    type: "Certification",
    verified: true
  },
  {
    id: 4,
    title: "Generative AI Foundations & Prompt Design",
    issuer: "Cloud & AI Learning Path",
    year: "Achievement",
    description: "Explored generative model capabilities, prompt structuring techniques, and ethical AI integration practices.",
    type: "Milestone",
    verified: true
  }
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];
