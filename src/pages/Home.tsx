import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { AmbientBackground } from "@/components/AmbientBackground";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { CodingProfiles } from "@/components/sections/CodingProfiles";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { portfolioData } from "@/data/portfolioData";

export default function Home() {
  const { personal } = portfolioData;
  const title = `${personal.name} — ${personal.title}`;
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
            sameAs: Object.values(portfolioData.social),
          })}
        </script>
      </Helmet>

      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <CodingProfiles />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
