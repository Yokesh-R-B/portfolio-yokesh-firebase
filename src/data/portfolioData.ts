// Edit this single file to customize the entire portfolio.
export const portfolioData = {
  personal: {
    name: "Alex Carter",
    firstName: "Alex",
    title: "Software Developer",
    tagline: "Building scalable backends and delightful interfaces.",
    bio: "I'm a software developer focused on backend systems, distributed architecture, and clean APIs. I enjoy turning complex problems into reliable, well-tested products that people love to use.",
    location: "Bengaluru, India",
    email: "hello@alexcarter.dev",
    resumeUrl: "/resume.pdf",
    avatarUrl: "",
    roles: [
      "Software Developer",
      "Java Backend Developer",
      "Spring Boot Developer",
      "Python Developer",
    ],
  },

  social: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://x.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
  },

  codingProfiles: [
    { name: "GitHub",     handle: "@alexcarter",   url: "https://github.com/",        stat: "120+ repos" },
    { name: "LeetCode",   handle: "@alexcarter",   url: "https://leetcode.com/",      stat: "650+ solved" },
    { name: "HackerRank", handle: "@alexcarter",   url: "https://hackerrank.com/",    stat: "5★ Java" },
    { name: "SkillRack",  handle: "@alexcarter",   url: "https://skillrack.com/",     stat: "1200+ solved" },
    { name: "CodeChef",   handle: "@alexcarter",   url: "https://codechef.com/",      stat: "3★ Coder" },
    { name: "LinkedIn",   handle: "in/alexcarter", url: "https://linkedin.com/in/",   stat: "Open to roles" },
  ],

  skills: {
    Backend:     ["Java", "Spring Boot", "REST APIs", "Microservices"],
    Programming: ["Python", "Java", "JavaScript", "TypeScript"],
    Frontend:    ["React", "HTML", "CSS", "Tailwind CSS"],
    Database:    ["MySQL", "PostgreSQL", "MongoDB"],
    Tools:       ["Git", "GitHub", "Postman", "Docker"],
  } as Record<string, string[]>,

  skillDescriptions: {
    Java: "Primary language for backend services and enterprise APIs.",
    "Spring Boot": "Production REST services, security, JPA, and microservices.",
    "REST APIs": "Designing clean, versioned, well-documented HTTP APIs.",
    Microservices: "Service decomposition, messaging, and resilience patterns.",
    Python: "Automation, scripting, and data utilities.",
    JavaScript: "Modern ES2022+ across the stack.",
    TypeScript: "Type-safe frontends and shared contracts.",
    React: "Component-driven UIs with hooks and modern patterns.",
    HTML: "Semantic, accessible markup.",
    CSS: "Modern layouts with grid, flexbox, and design tokens.",
    "Tailwind CSS": "Utility-first design systems that scale.",
    MySQL: "Relational schemas, indexing, and query tuning.",
    PostgreSQL: "Advanced SQL, JSONB, and performance.",
    MongoDB: "Document modeling for flexible workloads.",
    Git: "Branching, code review, and team workflows.",
    GitHub: "CI/CD with Actions, issues, and PR workflows.",
    Postman: "API design, testing, and collection sharing.",
    Docker: "Containerized dev and reproducible deploys.",
  } as Record<string, string>,

  projects: [
    {
      id: "p1",
      title: "Atlas — Distributed Task Engine",
      description:
        "A horizontally scalable task scheduler built with Spring Boot and RabbitMQ, processing millions of jobs daily with at-least-once guarantees.",
      tech: ["Java", "Spring Boot", "RabbitMQ", "PostgreSQL", "Docker"],
      features: ["Auto-scaling workers", "Retry & dead-letter queues", "Admin dashboard"],
      category: "Backend",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop",
      github: "https://github.com/",
      demo: "https://example.com/",
    },
    {
      id: "p2",
      title: "Lumen — Realtime Notes",
      description:
        "Collaborative markdown notes with CRDT-based syncing, offline support, and live presence indicators.",
      tech: ["React", "TypeScript", "Tailwind CSS", "WebSocket"],
      features: ["Offline-first", "Multi-cursor editing", "Keyboard-driven UX"],
      category: "Fullstack",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80&auto=format&fit=crop",
      github: "https://github.com/",
      demo: "https://example.com/",
    },
    {
      id: "p3",
      title: "Pyflow — Data Pipeline",
      description:
        "Python DAG runner for ETL pipelines with declarative YAML configs and pluggable executors.",
      tech: ["Python", "FastAPI", "PostgreSQL"],
      features: ["YAML-driven DAGs", "Pluggable executors", "Observability hooks"],
      category: "Backend",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
      github: "https://github.com/",
      demo: "https://example.com/",
    },
    {
      id: "p4",
      title: "Nimbus — DevOps Dashboard",
      description:
        "Single-pane view of CI/CD, container health, and on-call rotations across multiple clusters.",
      tech: ["React", "TypeScript", "Docker", "REST APIs"],
      features: ["Live metrics", "Incident timeline", "Role-based access"],
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80&auto=format&fit=crop",
      github: "https://github.com/",
      demo: "https://example.com/",
    },
    {
      id: "p5",
      title: "Vault — Secure Vault API",
      description:
        "Zero-trust secrets API with envelope encryption, audit logging, and fine-grained access policies.",
      tech: ["Java", "Spring Boot", "PostgreSQL"],
      features: ["Envelope encryption", "Audit trails", "Policy DSL"],
      category: "Backend",
      image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1200&q=80&auto=format&fit=crop",
      github: "https://github.com/",
      demo: "https://example.com/",
    },
    {
      id: "p6",
      title: "Pulse — Habit Tracker",
      description:
        "Minimal habit tracker with streak analytics and beautiful animated charts.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      features: ["Streak analytics", "Animated charts", "Local-first storage"],
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80&auto=format&fit=crop",
      github: "https://github.com/",
      demo: "https://example.com/",
    },
  ],

  timeline: [
    {
      type: "education",
      title: "B.E. Computer Science",
      org: "ABC Institute of Technology",
      date: "2022 — 2026",
      detail: "CGPA 8.7. Coursework in DSA, OS, DBMS, distributed systems.",
    },
    {
      type: "internship",
      title: "Backend Developer Intern",
      org: "Acme Cloud",
      date: "Summer 2025",
      detail: "Built REST microservices in Spring Boot, shipped 4 production endpoints.",
    },
    {
      type: "certification",
      title: "Oracle Certified — Java SE 17",
      org: "Oracle",
      date: "2024",
      detail: "Professional-level Java certification.",
    },
    {
      type: "workshop",
      title: "Cloud Native Workshop",
      org: "KubeCon Student Track",
      date: "2024",
      detail: "Hands-on with containers, Kubernetes, and service meshes.",
    },
    {
      type: "achievement",
      title: "Smart India Hackathon — Finalist",
      org: "MoE, Govt. of India",
      date: "2023",
      detail: "Top 20 nationally for a logistics optimization project.",
    },
  ],

  emailjs: {
    // Replace these with your EmailJS keys.
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY",
  },
};

export type Project = (typeof portfolioData.projects)[number];
