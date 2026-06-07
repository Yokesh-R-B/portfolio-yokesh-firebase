import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Section, fadeUp, stagger } from "@/components/Section";
import type { Project } from "@/data/portfolioData";
import { usePortfolioData } from "@/hooks/use-portfolio-data";

function TiltCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [8, -8]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(mx, [-50, 50], [-8, 8]), { stiffness: 200, damping: 18 });

  return (
    <motion.button
      variants={fadeUp}
      onClick={onOpen}
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mx.set(e.clientX - r.left - r.width / 2);
        my.set(e.clientY - r.top - r.height / 2);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className="group text-left relative rounded-2xl border border-border bg-card/70 overflow-hidden backdrop-blur"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-90" />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold">{project.title}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

export function Projects() {
  const { t } = useTranslation();
  const { projects } = usePortfolioData();
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      eyebrow={t("sections.projects.eyebrow")}
      title={
        <>
          {t("sections.projects.titlePrefix")}{" "}
          <span className="text-gradient">{t("sections.projects.titleHighlight")}</span>
          {t("sections.projects.titleSuffix")}
        </>
      }
      subtitle={t("sections.projects.subtitle")}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <AnimatePresence mode="popLayout">
          {projects.map((p) => (
            <TiltCard key={p.id} project={p} onOpen={() => setActive(p)} />
          ))}
        </AnimatePresence>
      </motion.div>

      {projects.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          {t("sections.projects.empty")}
        </p>
      )}

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-background/70 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full border border-border bg-background/70 backdrop-blur hover:bg-accent"
                aria-label={t("sections.projects.close")}
              >
                <X className="h-4 w-4" />
              </button>
              <img src={active.image} alt={active.title} className="h-64 w-full object-cover" />
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-semibold">{active.title}</h3>
                <p className="mt-3 text-muted-foreground">{active.description}</p>

                <h4 className="mt-6 text-sm font-semibold">{t("sections.projects.keyFeatures")}</h4>
                <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  {active.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <h4 className="mt-6 text-sm font-semibold">{t("sections.projects.techStack")}</h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {active.tech.map((t) => (
                    <span key={t} className="rounded-md bg-secondary px-2 py-0.5 text-xs">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {/* <a
                    href={active.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-medium text-white glow-brand"
                  >
                    <ExternalLink className="h-4 w-4" /> Live demo
                  </a> */}
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-4 py-2 text-sm font-medium hover:bg-accent"
                  >
                    <Github className="h-4 w-4" /> {t("sections.projects.source")}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
