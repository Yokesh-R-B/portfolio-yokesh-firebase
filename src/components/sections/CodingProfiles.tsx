import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Section, fadeUp, stagger } from "@/components/Section";
import { usePortfolioData } from "@/hooks/use-portfolio-data";

export function CodingProfiles() {
  const { t } = useTranslation();
  const { codingProfiles } = usePortfolioData();
  return (
    <Section
      id="profiles"
      eyebrow={t("sections.profiles.eyebrow")}
      title={
        <>
          {t("sections.profiles.titlePrefix")}{" "}
          <span className="text-gradient">{t("sections.profiles.titleHighlight")}</span>
          {t("sections.profiles.titleSuffix")}
        </>
      }
      subtitle={t("sections.profiles.subtitle")}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {codingProfiles.map((p) => (
          <motion.a
            key={p.name}
            variants={fadeUp}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-5 backdrop-blur"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity group-hover:opacity-40" />
            <div className="relative flex items-center justify-between">
              <div>
                <div className="font-display text-lg font-semibold">{p.name}</div>
                <div className="mt-1 text-xs font-mono text-muted-foreground">{p.handle}</div>
              </div>
              <div className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-background/60 transition-transform group-hover:rotate-12">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
            <div className="relative mt-5 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{p.stat}</span>
              <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium">
                {t("sections.profiles.active")}
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
}
