import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Section, fadeUp, stagger } from "@/components/Section";
import { usePortfolioData } from "@/hooks/use-portfolio-data";
import { Code2, Layers, Rocket, Sparkles } from "lucide-react";

const icons = [Code2, Layers, Rocket, Sparkles];

export function About() {
  const { t } = useTranslation();
  const { personal } = usePortfolioData();
  const highlights = t("sections.about.highlights", { returnObjects: true }) as {
    title: string;
    text: string;
  }[];

  return (
    <Section
      id="about"
      eyebrow={t("sections.about.eyebrow")}
      title={
        <>
          {t("sections.about.titlePrefix")}{" "}
          <span className="text-gradient">{t("sections.about.titleHighlight")}</span>
          {t("sections.about.titleSuffix")}
        </>
      }
      subtitle={personal.bio}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {highlights.map((h, index) => {
          const Icon = icons[index] ?? Sparkles;
          return (
            <motion.div
              key={h.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-border bg-card/60 p-6 backdrop-blur"
            >
              <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[color-mix(in_oklab,var(--brand)_15%,transparent)] to-transparent" />
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{h.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{h.text}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
