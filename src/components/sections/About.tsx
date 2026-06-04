import { motion } from "framer-motion";
import { Section, fadeUp, stagger } from "@/components/Section";
import { portfolioData } from "@/data/portfolioData";
import { Code2, Layers, Rocket, Sparkles } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Backend-first", text: "I love designing reliable APIs and clean service boundaries." },
  { icon: Layers, title: "Scalable systems", text: "Distributed patterns, queues, and observability done right." },
  { icon: Rocket, title: "Ship, then iterate", text: "Pragmatic delivery without compromising on quality." },
  { icon: Sparkles, title: "Always learning", text: "New languages, tools, and patterns — every single week." },
];

export function About() {
  const { personal } = portfolioData;
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>A developer who cares about <span className="text-gradient">craft</span>.</>}
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
