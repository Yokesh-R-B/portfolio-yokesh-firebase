// Edit this single file to customize the portfolio content.

import ragChatbotImage from "@/assets/project-rag-chatbot.png";
import portfolioImage from "@/assets/project-portfolio.jpg";
import crackDetectionImage from "@/assets/project-crack.jpeg";

const shared = {
  social: {
    github: "https://github.com/Yokesh-R-B",
    linkedin: "https://www.linkedin.com/in/yokeshrb/",
    twitter: "",
    instagram: "",
    youtube: "",
  },
  emailjs: {
    serviceId: "service_1bldb18",
    templateId: "template_tx5icj4",
    publicKey: "1MVKLQX_ZiswwmgGg",
  },
};

export const portfolioDataByLocale = {
  en: {
    personal: {
      name: "Yokesh Ramasamy Bhalamuruhan",
      firstName: "Yokesh",
      title: "AI Developer | Python · Data & Automation",
      tagline:
        "Software developer with 3+ years across Python backends, data engineering, workflow automation, and AI-powered applications.",
      bio: "Software developer experienced in Python backend applications, enterprise data migration, API integrations, distributed workflows, and AI automation. Currently building Virtual Factory solutions at BMW Group alongside a Master's in Digital Engineering.",
      location: "Munich, Germany",
      email: "yokeshrb@gmail.com",
      resumeUrl: "/Yokesh_Resume.pdf?v=20261107",
      avatarUrl: "",
      roles: [
        "AI Developer",
        "Python Backend Developer",
        "Data Automation Developer",
        "Workflow Automation Developer",
        "RAG & LLM Developer",
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
      "Programming Languages": ["Python", "Java", "SQL", "TypeScript"],
      "Backend & APIs": ["FastAPI", "Spring Boot", "REST APIs", "GraphQL", "Hibernate", "JPA"],
      "Data Engineering": [
        "ETL",
        "Data Pipelines",
        "Data Migration",
        "Data Validation",
        "Batch Processing",
        "Pandas",
        "NumPy",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
      ],
      "AI & Automation": ["LLMs", "RAG Applications", "LangChain", "n8n", "Workflow Automation"],
      "Testing & Infrastructure": [
        "Selenium WebDriver",
        "Docker",
        "Linux",
        "Git",
        "Maven",
        "CI/CD",
        "Azure",
      ],
      "Engineering Concepts": [
        "Distributed Systems",
        "Microservices",
        "System Design",
        "OOP",
        "Data Structures & Algorithms",
      ],
      "Digital Engineering": ["NVIDIA Omniverse", "Blender"],
    },
    skillDescriptions: {
      Python: "Backend services, data validation, workflow automation, and AI-powered tools.",
      Java: "Enterprise automation and backend development with robust integration patterns.",
      SQL: "Data validation, migration checks, and reliable data-processing workflows.",
      TypeScript: "Type-safe application development for web interfaces and tooling.",
      FastAPI: "Production-ready Python APIs and internal tools for engineering workflows.",
      "Spring Boot": "Backend services and enterprise Java application development.",
      "REST APIs": "Integrating enterprise platforms and engineering data through reliable APIs.",
      GraphQL: "Bulk user and project-member migration with validation and audit logging.",
      Hibernate: "Java persistence and enterprise data access patterns.",
      JPA: "ORM-based database interaction and persistence.",
      ETL: "Transforming and validating engineering data for migration workflows.",
      "Data Pipelines": "Connecting data sources, validation services, and operational reporting.",
      "Data Migration":
        "Health checks and controlled migration of factory building and layout data.",
      "Data Validation": "Automated quality checks, dry runs, and auditable results.",
      "Batch Processing": "Reliable high-volume transaction and data-processing workflows.",
      Pandas: "Data analysis and Excel reporting for migration and validation workflows.",
      NumPy: "Numerical data processing in Python automation tools.",
      PostgreSQL: "Relational database design and advanced SQL.",
      MySQL: "Database development and optimization.",
      MongoDB: "Document-oriented database management.",
      LLMs: "Applying enterprise LLM APIs in practical engineering and automation workflows.",
      "RAG Applications": "Retrieval-Augmented Generation systems and AI workflows.",
      LangChain: "Framework for LLM-powered applications and RAG systems.",
      n8n: "Production workflow automation with APIs, Jira, Outlook, and business applications.",
      "Workflow Automation":
        "Reliable workflows with routing, notifications, error handling, and duplicate prevention.",
      "Selenium WebDriver": "Java-based RPA and high-volume browser workflow automation.",
      Docker: "Containerized development and deployment.",
      Linux: "Development and execution environments for backend and engineering workloads.",
      Maven: "Java builds and dependency management.",
      "CI/CD": "Repeatable build, test, and delivery practices.",
      Azure: "Cloud services and deployment fundamentals.",
      Git: "Version control and collaborative development.",
      GitHub: "Repository management and CI/CD workflows.",
      "Distributed Systems":
        "Workflow orchestration across HPC clusters and connected enterprise services.",
      Microservices: "Modular services designed for independent deployment and integration.",
      "System Design": "Designing dependable automation, data, and API-driven systems.",
      OOP: "Maintainable, modular application architecture.",
      "Data Structures & Algorithms":
        "Core problem-solving foundations for robust software development.",
      "NVIDIA Omniverse": "Digital-engineering workflows and virtual factory exploration.",
      Blender: "AI-assisted factory layout and 3D model-generation workflows.",
    },
    projects: [
      {
        id: "p1",
        title: "RAG Chatbot Backend",
        description:
          "End-to-end Retrieval-Augmented Generation backend with FastAPI endpoints, ChromaDB vector search, SQLite persistence, and multi-turn LLM chat.",
        tech: ["Python", "FastAPI", "LangChain", "ChromaDB", "SQLite", "LLM"],
        features: ["FastAPI endpoints", "Vector search", "SQLite persistence", "Multi-turn chat"],
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
          "Personal portfolio presenting software projects, technical implementations, and professional experience across AI, automation, backend development, and data engineering.",
        tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
        features: ["Responsive design", "Project showcase", "Modern animations"],
        image: portfolioImage,
        github: "https://github.com/Yokesh-R-B/portfolio-yokesh-firebase",
        demo: "",
      },
    ],
    timeline: [
      {
        type: "work",
        title: "Artificial Intelligence Developer - Virtual Factory",
        org: "BMW Group, Munich, Germany",
        date: "Sep 2026 - Present",
        detail:
          "Developing Python-based migration health checks for factory data across 80 plants and 325K+ files, bulk GraphQL migration tools with dry runs and audit logs, n8n automations using Jira, BMW LLM APIs, and Outlook, plus FastAPI/Leaflet tooling for NavVis scan-coverage analysis.",
      },
      {
        type: "work",
        title: "Freelance Automation Developer - n8n",
        org: "Independent Freelance Projects, Germany",
        date: "Oct 2025 - Aug 2026",
        detail:
          "Designed business automations integrating APIs and operational tools, with data transformation, conditional routing, error handling, notifications, and supply-chain purchase-order processing.",
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
          "Enhanced Retrieval-Augmented Generation systems through external knowledge sources and stronger retrieval quality; contributed to RAG evaluation, information retrieval, and optimization in the TREC 2024 RAG Track.",
      },
      {
        type: "achievement",
        title: "Research Publication",
        org: "International Journal of Steel Structures",
        date: "2024",
        detail:
          "Co-authored a peer-reviewed research publication in the International Journal of Steel Structures (DOI: 10.1007/s13296-024-00816-9).",
      },
      {
        type: "work",
        title: "Assistant System Engineer - RPA Development",
        org: "Tata Consultancy Services",
        date: "Apr 2021 — Feb 2023",
        detail:
          "Built and maintained Java and Selenium WebDriver automation for a US financial-services client, validating about 100,000 daily transactions. Automated reconciliation, exception checks, and end-of-day settlement workflows, reducing manual effort by 40%.",
      },
      {
        type: "education",
        title: "M.Sc. Digital Engineering (Current grade: 1.6)",
        org: "Bauhaus-Universität Weimar, Germany",
        date: "Apr 2023 - Nov 2026 (expected)",
        detail:
          "Master's thesis completed at FORVIA HELLA in Sep 2025; final presentation pending. Coursework includes Machine Learning, Computer Vision, Simulation Methods, Stochastic Systems, Optimization, and Software Engineering.",
      },
      {
        type: "education",
        title: "B.E. Civil Engineering",
        org: "Anna University, Chennai, India",
        date: "2017 — 2021",
        detail:
          "Civil Engineering degree; co-author of a 2024 publication in the International Journal of Steel Structures.",
      },
    ],
    ...shared,
  },
  de: {
    personal: {
      name: "Yokesh Ramasamy Bhalamuruhan",
      firstName: "Yokesh",
      title: "KI-Entwickler | Python · Daten & Automatisierung",
      tagline:
        "Softwareentwickler mit 3+ Jahren Erfahrung in Python-Backends, Data Engineering, Workflow-Automatisierung und KI-gestützten Anwendungen.",
      bio: "Softwareentwickler mit Erfahrung in Python-Backends, Enterprise-Datenmigration, API-Integrationen, verteilten Workflows und KI-Automatisierung. Aktuell entwickle ich Virtual-Factory-Lösungen bei der BMW Group und schließe meinen Master in Digital Engineering ab.",
      location: "München, Deutschland",
      email: "yokeshrb@gmail.com",
      resumeUrl: "/Yokesh_Lebenslauf.pdf?v=20261107",
      avatarUrl: "",
      roles: [
        "KI-Entwickler",
        "Python-Backend-Entwickler",
        "Data-Automation-Entwickler",
        "Workflow-Automation-Entwickler",
        "RAG- & LLM-Entwickler",
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
      Programmiersprachen: ["Python", "Java", "SQL", "TypeScript"],
      "Backend & APIs": ["FastAPI", "Spring Boot", "REST APIs", "GraphQL", "Hibernate", "JPA"],
      "Data Engineering": [
        "ETL",
        "Data Pipelines",
        "Data Migration",
        "Data Validation",
        "Batch Processing",
        "Pandas",
        "NumPy",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
      ],
      "KI & Automatisierung": [
        "LLMs",
        "RAG Applications",
        "LangChain",
        "n8n",
        "Workflow Automation",
      ],
      "Testing & Infrastruktur": [
        "Selenium WebDriver",
        "Docker",
        "Linux",
        "Git",
        "Maven",
        "CI/CD",
        "Azure",
      ],
      Engineering: [
        "Distributed Systems",
        "Microservices",
        "System Design",
        "OOP",
        "Data Structures & Algorithms",
      ],
      "Digital Engineering": ["NVIDIA Omniverse", "Blender"],
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
        title: "RAG-Chatbot-Backend",
        description:
          "End-to-End-RAG-Backend mit FastAPI-Endpunkten, ChromaDB-Vektorsuche, SQLite-Persistenz und mehrturnigem LLM-Chat.",
        tech: ["Python", "FastAPI", "LangChain", "ChromaDB", "SQLite", "LLM"],
        features: ["FastAPI-Endpunkte", "Vektorsuche", "SQLite-Persistenz", "Mehrturniger Chat"],
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
          "Persönliche Website mit Softwareprojekten, technischen Umsetzungen und beruflicher Erfahrung in KI, Automatisierung, Backend-Entwicklung und Data Engineering.",
        tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
        features: ["Responsives Design", "Projektübersicht", "Moderne Animationen"],
        image: portfolioImage,
        github: "https://github.com/Yokesh-R-B/portfolio-yokesh-firebase",
        demo: "",
      },
    ],
    timeline: [
      {
        type: "work",
        title: "Artificial Intelligence Developer - Virtual Factory",
        org: "BMW Group, München, Deutschland",
        date: "Sep. 2026 - heute",
        detail:
          "Entwicklung Python-basierter Migrations-Health-Checks für Fabrikdaten in 80 Werken mit mehr als 325.000 Dateien, GraphQL-Migrationstools mit Dry Runs und Audit-Logs, n8n-Automationen mit Jira, BMW LLM APIs und Outlook sowie FastAPI/Leaflet-Tools zur NavVis-Scanabdeckung.",
      },
      {
        type: "work",
        title: "Freelance Automation Developer - n8n",
        org: "Freelance-Projekte, Deutschland",
        date: "Okt. 2025 - Aug. 2026",
        detail:
          "Entwicklung von Business-Automatisierungen mit APIs und operativen Tools, inklusive Datentransformation, bedingtem Routing, Fehlerbehandlung, Benachrichtigungen und Lieferketten-Workflows für Bestellungen.",
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
          "Retrieval-Augmented-Generation-Systeme durch externe Wissensquellen und bessere Retrieval-Qualität erweitert; Beiträge zu RAG-Evaluation, Information Retrieval und Optimierung im TREC 2024 RAG Track.",
      },
      {
        type: "achievement",
        title: "Forschungspublikation",
        org: "International Journal of Steel Structures",
        date: "2024",
        detail:
          "Mitautor einer peer-reviewten Veröffentlichung im International Journal of Steel Structures (DOI: 10.1007/s13296-024-00816-9).",
      },
      {
        type: "work",
        title: "Assistant System Engineer - RPA Development",
        org: "Tata Consultancy Services",
        date: "Apr. 2021 — Feb. 2023",
        detail:
          "Java- und Selenium-WebDriver-Automatisierungen für einen US-Finanzdienstleister entwickelt und rund 100.000 tägliche Transaktionen validiert. Abgleich-, Exception- und End-of-Day-Workflows automatisiert und manuellen Aufwand um 40% reduziert.",
      },
      {
        type: "education",
        title: "M.Sc. Digital Engineering (aktuelle Note: 1,6)",
        org: "Bauhaus-Universität Weimar, Deutschland",
        date: "Apr. 2023 - Nov. 2026 (voraussichtlich)",
        detail:
          "Masterarbeit bei FORVIA HELLA im Sep. 2025 abgeschlossen; Abschlusspräsentation steht noch aus. Schwerpunkte: Machine Learning, Computer Vision, Simulationsmethoden, stochastische Systeme, Optimierung und Software Engineering.",
      },
      {
        type: "education",
        title: "B.E. Civil Engineering",
        org: "Anna University, Chennai, Indien",
        date: "2017 — 2021",
        detail:
          "Bachelor in Bauingenieurwesen; Mitautor einer Veröffentlichung im International Journal of Steel Structures (2024).",
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
