import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/Navbar";
import { AmbientBackground } from "@/components/AmbientBackground";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/Footer";
import { usePortfolioData } from "@/hooks/use-portfolio-data";

const Skills = lazy(() =>
  import("@/components/sections/Skills").then((m) => ({ default: m.Skills })),
);
const Projects = lazy(() =>
  import("@/components/sections/Projects").then((m) => ({ default: m.Projects })),
);
const Experience = lazy(() =>
  import("@/components/sections/Experience").then((m) => ({ default: m.Experience })),
);
const CodingProfiles = lazy(() =>
  import("@/components/sections/CodingProfiles").then((m) => ({ default: m.CodingProfiles })),
);
const Resume = lazy(() =>
  import("@/components/sections/Resume").then((m) => ({ default: m.Resume })),
);
const Contact = lazy(() =>
  import("@/components/sections/Contact").then((m) => ({ default: m.Contact })),
);

export default function Home() {
  const { i18n } = useTranslation();
  const data = usePortfolioData();
  const { personal } = data;
  const title = `${personal.name} - ${personal.title}`;
  const desc = personal.tagline;

  return (
    <div className="relative min-h-screen">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: personal.name,
            jobTitle: personal.title,
            email: personal.email,
            url: typeof window !== "undefined" ? window.location.origin : "",
            sameAs: Object.values(data.social),
            inLanguage: i18n.resolvedLanguage ?? i18n.language,
          })}
        </script>
      </Helmet>

      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<div className="h-32" />}>
          <Skills />
          <Projects />
          <Experience />
          <CodingProfiles />
          <Resume />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
