// Edit this single file to customize the portfolio content.

import ragChatbotImage from "@/assets/project-rag-chatbot.png";
import portfolioImage from "@/assets/project-portfolio.jpg";
import crackDetectionImage from "@/assets/project-crack.jpeg";
import yokeshResume from "@/assets/Yokesh_Resume.pdf";
import yokeshLebenslauf from "@/assets/Yokesh_Lebenslauf.pdf";

const shared = {
  social: {
    github: "https://github.com/Yokesh-R-B",
    linkedin: "https://www.linkedin.com/in/yokeshrb/",
    twitter: "https://x.com/im_yoki_b",
    instagram: "https://www.instagram.com/im_yoki_b/",
    youtube: "",
  },
  emailjs: {
    serviceId: "***",
    templateId: "***",
    publicKey: "***",
  },
};

export const portfolioDataByLocale = {
  en: {
    personal: {
      name: "Yokesh",
      firstName: "Yokesh",
      title: "Developer | Java · Python",
      tagline:
        "Software developer crafting reliable backends and clean APIs with Java, Spring Boot & Python.",
      bio: "Backend-leaning full-stack engineer focused on Java/Spring Boot ecosystems and Python tooling. Master's in Digital Engineering with practical work in automotive, finance, and research.",
      location: "onlinedev / java · python",
      email: "yokeshrb@gmail.com",
      resumeUrl: yokeshResume,
      avatarUrl: "",
      roles: [
        "Backend Developer",
        "Java Developer",
        "Python Developer",
        "Spring Boot Developer",
        "AI & RAG Developer",
      ],
    },
    codingProfiles: [
      {
        name: "GitHub",
        handle: "@Yokesh-R-B",
        url: "https://github.com/Yokesh-R-B",
        stat: "Code & Projects",
      },
      {
        name: "LeetCode",
        handle: "yokeshrb",
        url: "https://github.com/Yokesh-R-B/leetcode-data-structures-algorithms",
        stat: "100+ Problems Solved",
      },
      {
        name: "LinkedIn",
        handle: "in/yokeshrb",
        url: "https://www.linkedin.com/in/yokeshrb/",
        stat: "Professional Network",
      },
      {
        name: "X",
        handle: "@im_yoki_b",
        url: "https://x.com/im_yoki_b",
        stat: "Developer Musings",
      },
      {
        name: "Instagram",
        handle: "@im_yoki_b",
        url: "https://www.instagram.com/im_yoki_b/",
        stat: "Life Beyond Code",
      },
    ],
    skills: {
      Languages: ["Java", "Python", "JavaScript", "TypeScript"],
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
      AI: [
        "RAG Applications",
        "LLM Integrations",
        "Prompt Engineering",
        "LangChain",
        "ChromaDB",
        "OpenAI",
        "OpenCV",
        "PyTorch",
      ],
      Tools: ["Postman", "Firebase", "VS Code", "IntelliJ IDEA"],
    },
    skillDescriptions: {
      Java: "Building scalable backend applications and RESTful services.",
      "Spring Boot": "Developing production-ready APIs and microservices.",
      FastAPI:
        "Building high-performance REST APIs with async support and automatic API documentation.",
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
      OpenAI: "LLM APIs, assistants, and model-powered application features.",
      OpenCV: "Image processing and computer vision workflows.",
      PyTorch: "Machine learning experimentation and model workflows.",
      Postman: "API testing and debugging.",
      Firebase: "Authentication, hosting, and cloud services.",
      "VS Code": "Primary development environment.",
      "IntelliJ IDEA": "Java and Spring Boot development.",
    },
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
    ],
    ...shared,
  },
  de: {
    personal: {
      name: "Yokesh",
      firstName: "Yokesh",
      title: "Backend-Entwickler | Java · Python",
      tagline:
        "Softwareentwickler für zuverlässige Backends und saubere APIs mit Java, Spring Boot und Python.",
      bio: "Backendorientierter Full-Stack-Engineer mit Fokus auf Java/Spring Boot und Python-Tooling. Master in Digital Engineering mit praktischer Erfahrung in Automotive, Finance und Forschung.",
      location: "onlinedev / java · python",
      email: "yokeshrb@gmail.com",
      resumeUrl: yokeshLebenslauf,
      avatarUrl: "",
      roles: [
        "Backend-Entwickler",
        "Java-Entwickler",
        "Python-Entwickler",
        "Spring-Boot-Entwickler",
        "KI- & RAG-Entwickler",
      ],
    },
    codingProfiles: [
      {
        name: "GitHub",
        handle: "@Yokesh-R-B",
        url: "https://github.com/Yokesh-R-B",
        stat: "Code & Projekte",
      },
      {
        name: "LeetCode",
        handle: "yokeshrb",
        url: "https://github.com/Yokesh-R-B/leetcode-data-structures-algorithms",
        stat: "100+ Aufgaben gelöst",
      },
      {
        name: "LinkedIn",
        handle: "in/yokeshrb",
        url: "https://www.linkedin.com/in/yokeshrb/",
        stat: "Berufliches Netzwerk",
      },
      {
        name: "X",
        handle: "@im_yoki_b",
        url: "https://x.com/im_yoki_b",
        stat: "Developer-Gedanken",
      },
      {
        name: "Instagram",
        handle: "@im_yoki_b",
        url: "https://www.instagram.com/im_yoki_b/",
        stat: "Leben neben dem Code",
      },
    ],
    skills: {
      Programmiersprachen: ["Java", "Python", "JavaScript", "TypeScript"],
      Backend: [
        "Spring Boot",
        "FastAPI",
        "REST APIs",
        "Microservices",
        "Spring Security",
        "JPA/Hibernate",
      ],
      Frontend: ["React", "R3F", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
      Datenbanken: ["PostgreSQL", "MySQL", "MongoDB", "SQL"],
      "Cloud & DevOps": ["Docker", "Azure", "Git", "GitHub"],
      KI: [
        "RAG Applications",
        "LLM Integrations",
        "Prompt Engineering",
        "LangChain",
        "ChromaDB",
        "OpenAI",
        "OpenCV",
        "PyTorch",
      ],
      Tools: ["Postman", "Firebase", "VS Code", "IntelliJ IDEA"],
    },
    skillDescriptions: {
      Java: "Entwicklung skalierbarer Backend-Anwendungen und REST-Services.",
      "Spring Boot": "Entwicklung produktionsreifer APIs und Microservices.",
      FastAPI: "Performante REST-APIs mit Async-Support und automatischer API-Dokumentation.",
      "REST APIs": "Saubere und wartbare API-Architekturen entwerfen.",
      Microservices: "Modulare und unabhängig deploybare Services entwickeln.",
      "Spring Security": "Authentifizierung, Autorisierung und sichere API-Entwicklung.",
      "JPA/Hibernate": "ORM-basierte Datenbankinteraktion und Persistenz.",
      Python: "Automatisierung, Skripting, KI-Integrationen und Backend-Utilities.",
      JavaScript: "Moderne Webentwicklung und Frontend-Interaktionen.",
      TypeScript: "Typsichere Anwendungsentwicklung.",
      React: "Interaktive und komponentenbasierte Benutzeroberflächen.",
      R3F: "3D-Erlebnisse in React mit Three.js bauen.",
      HTML5: "Semantische und zugängliche Webstrukturen.",
      CSS3: "Responsive Layouts und modernes Styling.",
      "Tailwind CSS": "Schnelle UI-Entwicklung mit Utility-first Styling.",
      "Framer Motion": "Polierte und flüssige Nutzererlebnisse gestalten.",
      PostgreSQL: "Relationales Datenbankdesign und fortgeschrittenes SQL.",
      MySQL: "Datenbankentwicklung und Optimierung.",
      MongoDB: "Dokumentenorientierte Datenbankverwaltung.",
      SQL: "Abfragen, Joins, Indexierung und Optimierung.",
      Docker: "Containerisierte Entwicklung und Deployment.",
      Azure: "Grundlagen von Cloud-Services und Deployment.",
      Git: "Versionskontrolle und kollaborative Entwicklung.",
      GitHub: "Repository-Verwaltung und CI/CD-Workflows.",
      "RAG Applications": "Retrieval-Augmented-Generation-Systeme und KI-Workflows.",
      "LLM Integrations": "Large-Language-Models in Anwendungen integrieren.",
      "Prompt Engineering": "Prompts für zuverlässige KI-Interaktionen entwickeln.",
      LangChain: "Framework für LLM-gestützte Anwendungen und RAG-Systeme.",
      ChromaDB: "Vektordatenbank für semantische Suche und Embeddings.",
      OpenAI: "LLM-APIs, Assistants und modellgestützte Anwendungsfunktionen.",
      OpenCV: "Bildverarbeitung und Computer-Vision-Workflows.",
      PyTorch: "Machine-Learning-Experimente und Modell-Workflows.",
      Postman: "API-Testing und Debugging.",
      Firebase: "Authentication, Hosting und Cloud-Services.",
      "VS Code": "Primäre Entwicklungsumgebung.",
      "IntelliJ IDEA": "Java- und Spring-Boot-Entwicklung.",
    },
    projects: [
      {
        id: "p1",
        title: "RAG Chatbot",
        description:
          "Retrieval-Augmented-Generation-Chatbot mit Dokumentenaufnahme, Vektorsuche, Chatverlauf und LLM-gestützter Fragebeantwortung.",
        tech: ["FastAPI", "LangChain", "ChromaDB"],
        features: ["Dokumentenaufnahme", "Vektorsuche", "Chatverlauf", "LLM-gestützte QA"],
        image: ragChatbotImage,
        github: "https://github.com/Yokesh-R-B/rag-chatbot-application",
        demo: "",
      },
      {
        id: "p2",
        title: "Crack Detection System",
        description:
          "Computer-Vision-Pipeline zur Erkennung, Segmentierung und strukturellen Analyse von Wandrissen mit Bildverarbeitung und Machine Learning.",
        tech: ["Python", "OpenCV", "Computer Vision"],
        features: ["Risserkennung", "Segmentierung", "Strukturanalyse"],
        image: crackDetectionImage,
        github: "https://github.com/Yokesh-R-B/Crack-Detection",
        demo: "",
      },
      {
        id: "p3",
        title: "Portfolio",
        description:
          "Eine polierte persönliche Website mit Backend-Projekten, Projekt-Cases und dem Engineering-Mindset hinter Java-, Spring-Boot- und Python-Apps.",
        tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
        features: ["Responsives Design", "Projektübersicht", "Moderne Animationen"],
        image: portfolioImage,
        github: "https://github.com/Yokesh-R-B/portfolio-yokesh-firebase",
        demo: "",
      },
    ],
    timeline: [
      {
        type: "education",
        title: "M.Sc. Digital Engineering",
        org: "Bauhaus-Universität Weimar, Deutschland",
        date: "2023 — 2026",
        detail:
          "Schwerpunkte in Machine Learning, Computer Vision, Simulationsmethoden, Optimierung, stochastischen Systemen, Software Engineering sowie Datenstrukturen und Algorithmen. Abschluss mit Auszeichnung.",
      },
      {
        type: "internship",
        title: "Software Developer Intern / Masterarbeit",
        org: "FORVIA Hella GmbH & Co. KGaA",
        date: "Okt. 2024 — Sep. 2025",
        detail:
          "Konzeption und Entwicklung einer verteilten Python-Workflow-Engine zur Orchestrierung automobiler Simulationen auf HPC-Clustern. Backend-Module für Scheduling, Monitoring, API-Integration und Ergebnisaggregation gebaut und 90% manueller Simulationsabläufe automatisiert.",
      },
      {
        type: "work",
        title: "Studentische Hilfskraft",
        org: "Bauhaus-Universität Weimar",
        date: "Apr. 2024 — Sep. 2024",
        detail:
          "Retrieval-Augmented-Generation-Systeme durch die Integration externer Wissensquellen und bessere Retrieval-Qualität erweitert. Forschung, Evaluation und Lehre in Stochastik und Optimierung unterstützt.",
      },
      {
        type: "achievement",
        title: "Teilnehmer am TREC 2024 RAG Track",
        org: "NIST (USA) & University of Waterloo",
        date: "2024",
        detail:
          "Teilnahme am international anerkannten TREC 2024 Retrieval-Augmented-Generation Track mit Fokus auf fortgeschrittene Information Retrieval-Methoden und LLM-Evaluation.",
      },
      {
        type: "work",
        title: "Assistant System Engineer",
        org: "Tata Consultancy Services",
        date: "Apr. 2021 — Feb. 2023",
        detail:
          "Java-Spring-Boot-Microservices und Backend-APIs für einen US-Finanzdienstleister entwickelt. Transaktionsabgleich und Batch-Processing-Systeme für hochvolumige verteilte Finanz-Workloads gebaut.",
      },
      {
        type: "achievement",
        title: "Forschungspublikation",
        org: "International Journal of Steel Structures",
        date: "2024",
        detail:
          "Mitautor einer peer-reviewten Forschungspublikation im International Journal of Steel Structures (DOI: 10.1007/s13296-024-00816-9).",
      },
      {
        type: "education",
        title: "B.E. Civil Engineering",
        org: "Anna University, Chennai, Indien",
        date: "2017 — 2021",
        detail:
          "Solide analytische und ingenieurwissenschaftliche Grundlagen aufgebaut und ein Interesse an Softwaresystemen, Automatisierung und technologiegestützter Problemlösung entwickelt.",
      },
    ],
    ...shared,
  },
} as const;

export type Locale = keyof typeof portfolioDataByLocale;

export function getPortfolioData(language?: string) {
  const locale = language?.startsWith("de") ? "de" : "en";
  return portfolioDataByLocale[locale];
}

export const portfolioData = portfolioDataByLocale.en;
export type Project = ReturnType<typeof getPortfolioData>["projects"][number];
