import { motion } from "framer-motion";
import { Section, fadeUp, stagger } from "@/components/Section";
import { portfolioData } from "@/data/portfolioData";

export function Skills() {
  const { skills, skillDescriptions } = portfolioData;
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>Tools I reach for.</>}
      subtitle="A curated stack, organized by where it shows up in my work."
    >
      <div className="space-y-10">
        {Object.entries(skills).map(([group, items]) => (
          <motion.div
            key={group}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.h3 variants={fadeUp} className="mb-4 text-sm font-mono uppercase tracking-widest text-muted-foreground">
              {group}
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {items.map((s) => (
                <motion.div
                  key={s}
                  variants={fadeUp}
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="group relative rounded-xl border border-border bg-card/60 p-4 backdrop-blur overflow-hidden"
                >
                  <div className="absolute -inset-px rounded-xl bg-gradient-brand opacity-0 group-hover:opacity-20 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{s}</span>
                      <span className="h-2 w-2 rounded-full bg-[var(--brand)] shadow-[0_0_10px_var(--brand)]" />
                    </div>
                    <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">
                      {skillDescriptions[s] ?? "Working knowledge with hands-on projects."}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
