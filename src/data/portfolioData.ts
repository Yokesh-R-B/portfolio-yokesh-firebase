// Edit this single file to customize the entire portfolio.

import ragChatbotImage from "@/assets/project-rag-chatbot.png";
import portfolioImage from "@/assets/project-portfolio.jpg";
import crackDetectionImage from "@/assets/project-crack.jpeg";

export const portfolioData = {
  personal: {
    name: "Yokesh",
    firstName: "Yokesh",
    title: "Backend Developer | Java · Python",
    tagline: "Software developer crafting reliable backends and clean APIs with Java, Spring Boot & Python.",
    bio: "Backend-leaning full-stack engineer focused on Java/Spring Boot ecosystems and Python tooling. Master's in Digital Engineering with practical work in automotive, finance, and research.",
    location: "onlinedev / java · python",
    email: "yokesh@gmail.com",
    resumeUrl: "/resume.pdf",
    avatarUrl: "",
    roles: [
      "Backend Developer",
      "Java Developer",
      "Python Developer",
      "Spring Boot Developer",
      "AI & RAG Developer",
    ],
  },

  social: {
    github: "https://github.com/Yokesh-R-B",
    linkedin: "https://www.linkedin.com/in/yokeshrb/",
    twitter: "https://x.com/im_yoki_b",
    instagram: "https://www.instagram.com/im_yoki_b/",
    youtube: "",
  },

  codingProfiles: [
    { name: "GitHub", handle: "@Yokesh-R-B", url: "https://github.com/Yokesh-R-B", stat: "Backend projects" },
    { name: "LinkedIn", handle: "in/yokeshrb", url: "https://www.linkedin.com/in/yokeshrb/", stat: "Open to roles" },
    { name: "X", handle: "@im_yoki_b", url: "https://x.com/im_yoki_b", stat: "AI · Java" },
    { name: "Instagram", handle: "@im_yoki_b", url: "https://www.instagram.com/im_yoki_b/", stat: "Creative snapshots" },
  ],

  skills: {
    Languages: ["Java","Python", "JavaScript", "TypeScript"],
    Backend: [
      "Spring Boot",
      "FastAPI",
      "REST APIs",
      "Microservices",
      "Spring Security",
      "JPA/Hibernate",
    ],

    

    Frontend: ["React", "R3F", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],

    Database: ["PostgreSQL", "MySQL", "MongoDB", "SQL"],

    "Cloud & DevOps": ["Docker", "Azure", "Git", "GitHub"],

    AI: ["RAG Applications", "LLM Integrations", "Prompt Engineering", "LangChain", "ChromaDB", "OpenAI", "OpenCV", "PyTorch"],

    Tools: ["Postman", "Firebase", "VS Code", "IntelliJ IDEA"],
  } as Record<string, string[]>,

  skillDescriptions: {
    Java: "Building scalable backend applications and RESTful services.",
    "Spring Boot": "Developing production-ready APIs and microservices.",
    FastAPI: "Building high-performance REST APIs with async support and automatic API documentation.",
    "REST APIs": "Designing clean and maintainable API architectures.",
    Microservices: "Building modular and independently deployable services.",
    "Spring Security": "Authentication, authorization, and secure API development.",
    "JPA/Hibernate": "ORM-based database interaction and persistence.",

    Python: "Automation, scripting, AI integrations, and backend utilities.",
    JavaScript: "Modern web development and frontend interactions.",
    TypeScript: "Type-safe application development.",

    React: "Interactive and component-driven user interfaces.",
    R3F: "Building 3D experiences in React using Three.js.",
    HTML5: "Semantic and accessible web structures.",
    CSS3: "Responsive layouts and modern styling.",
    "Tailwind CSS": "Rapid UI development using utility-first styling.",
    "Framer Motion": "Creating polished and smooth user experiences.",

    PostgreSQL: "Relational database design and advanced SQL.",
    MySQL: "Database development and optimization.",
    MongoDB: "Document-oriented database management.",
    SQL: "Query writing, joins, indexing, and optimization.",

    Docker: "Containerized development and deployment.",
    Azure: "Cloud services and deployment fundamentals.",
    Git: "Version control and collaborative development.",
    GitHub: "Repository management and CI/CD workflows.",

    "RAG Applications": "Retrieval-Augmented Generation systems and AI workflows.",
    "LLM Integrations": "Integrating Large Language Models into applications.",
    "Prompt Engineering": "Designing prompts for reliable AI interactions.",
    LangChain: "Framework for building LLM-powered applications and RAG systems.",
    ChromaDB: "Vector database for semantic search and embeddings.",

    Postman: "API testing and debugging.",
    Firebase: "Authentication, hosting, and cloud services.",
    "VS Code": "Primary development environment.",
    "IntelliJ IDEA": "Java and Spring Boot development.",
  } as Record<string, string>,

  projects: [
    {
      id: "p1",
      title: "RAG Chatbot",
      description:
        "Retrieval-Augmented Generation chatbot with document ingestion, vector search, chat history, and LLM-powered question answering.",
      tech: ["FastAPI", "LangChain", "ChromaDB"],
      features: ["Document ingestion", "Vector search", "Chat history", "LLM-powered QA"],
      image: ragChatbotImage,
      github: "https://github.com/Yokesh-R-B/rag-chatbot-application",
      demo: "",
    },
    {
      id: "p2",
      title: "Crack Detection System",
      description:
        "Computer Vision pipeline for wall-crack detection, segmentation, and structural analysis using image processing and machine learning techniques.",
      tech: ["Python", "OpenCV", "Computer Vision"],
      features: ["Crack detection", "Segmentation", "Structural analysis"],
      image: crackDetectionImage,
      github: "https://github.com/Yokesh-R-B/Crack-Detection",
      demo: "",
    },
    {
      id: "p3",
      title: "Portfolio",
      description:
        "A polished personal site showcasing backend work, project case studies, and the engineering mindset behind Java, Spring Boot, and Python apps.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
      features: ["Responsive design", "Project showcase", "Modern animations"],
      image: portfolioImage,
      github: "https://github.com/Yokesh-R-B/portfolio-yokesh-firebase",
      demo: "",
    },
  ],

  timeline: [
    {
      type: "education",
      title: "M.Sc. Digital Engineering",
      org: "Bauhaus-Universität Weimar, Germany",
      date: "2023 — 2026",
detail:
"Focused on Machine Learning, Computer Vision, Simulation Methods, Optimization, Stochastic Systems, Software Engineering, and Data Structures & Algorithms. Graduating with distinction.",
},

{
type: "internship",
title: "Software Developer Intern / Master's Thesis",
org: "FORVIA Hella GmbH & Co. KGaA",
date: "Oct 2024 — Sep 2025",
detail:
"Designed and developed a distributed Python workflow engine for automotive simulation orchestration across HPC clusters. Built backend modules for scheduling, monitoring, API integration, and result aggregation while automating 90% of manual simulation workflows.",
},

{
type: "work",
title: "Student Assistant",
org: "Bauhaus-Universität Weimar",
date: "Apr 2024 — Sep 2024",
detail:
"Enhanced Retrieval-Augmented Generation (RAG) systems by integrating external knowledge sources and improving retrieval quality. Supported research, evaluation, and teaching activities in Stochastics and Optimization.",
},



{
type: "achievement",
title: "TREC 2024 RAG Track Participant",
org: "NIST (USA) & University of Waterloo",
date: "2024",
detail:
"Participated in the internationally recognized TREC 2024 Retrieval-Augmented Generation track, focusing on advanced information retrieval and LLM evaluation.",
},


{
type: "work",
title: "Assistant System Engineer",
org: "Tata Consultancy Services",
date: "Apr 2021 — Feb 2023",
detail:
"Developed Java Spring Boot microservices and backend APIs for a US-based financial services client. Built transaction reconciliation pipelines and large-scale batch processing systems supporting high-volume distributed financial workloads.",
},
{
type: "achievement",
title: "Research Publication",
org: "International Journal of Steel Structures",
date: "2024",
detail:
"Co-authored a peer-reviewed research publication published in the International Journal of Steel Structures (DOI: 10.1007/s13296-024-00816-9).",
},
{
type: "education",
title: "B.E. Civil Engineering",
org: "Anna University, Chennai, India",
date: "2017 — 2021",
detail:
"Built strong analytical and engineering foundations while developing an interest in software systems, automation, and technology-driven problem solving.",
},
]
,

  emailjs: {
    // Replace these with your EmailJS keys.
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY",
  },
};

export type Project = (typeof portfolioData.projects)[number];
