import { motion } from "framer-motion";
import { Section, fadeUp, stagger } from "@/components/Section";
import { portfolioData } from "@/data/portfolioData";
import { Code2, Layers, Rocket, Sparkles } from "lucide-react";

const highlights = [
  { icon: Code2, title: "5+ Projects shipped", text: "Delivered backend services, APIs, and automation systems used in production." },
  { icon: Layers, title: "3 Core stacks", text: "Java, Spring Boot, and Python power my backend-first engineering." },
  { icon: Rocket, title: "2+ Years experience", text: "Built systems for automotive, finance, and research teams." },
  { icon: Sparkles, title: "∞ Curiosity", text: "Continuously learning AI workflows, tooling, and better practices." },
];

export function About() {
  const { personal } = portfolioData;
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>A junior dev with <span className="text-gradient">senior curiosity</span>.</>}
      subtitle={personal.bio}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {highlights.map((h) => (
          <motion.div
            key={h.title}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl border border-border bg-card/60 p-6 backdrop-blur"
          >
            <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[color-mix(in_oklab,var(--brand)_15%,transparent)] to-transparent" />
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white">
              <h.icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold">{h.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{h.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
