import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Section } from "@/components/Section";
import { usePortfolioData } from "@/hooks/use-portfolio-data";
import { GraduationCap, Briefcase, Award, BookOpen, Trophy } from "lucide-react";

const iconMap = {
  education: GraduationCap,
  internship: Briefcase,
  work: Briefcase,
  certification: Award,
  workshop: BookOpen,
  achievement: Trophy,
} as const;

export function Experience() {
  const { t } = useTranslation();
  const { timeline } = usePortfolioData();
  return (
    <Section
      id="experience"
      eyebrow={t("sections.experience.eyebrow")}
      title={
        <>
          {t("sections.experience.titlePrefix")}{" "}
          <span className="text-gradient">{t("sections.experience.titleHighlight")}</span>
        </>
      }
      subtitle={t("sections.experience.subtitle")}
    >
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent sm:-translate-x-1/2" />
        <div className="space-y-10">
          {timeline.map((t, i) => {
            const Icon = iconMap[t.type as keyof typeof iconMap] ?? Award;
            const left = i % 2 === 0;
            return (
              <motion.div
                key={t.title + i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative grid grid-cols-1 sm:grid-cols-2 gap-6 ${left ? "" : "sm:[&>*:first-child]:order-2"}`}
              >
                <div className={`pl-12 sm:pl-0 ${left ? "sm:pr-10 sm:text-right" : "sm:pl-10"}`}>
                  <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
                    <div className="text-xs font-mono uppercase tracking-widest text-[var(--brand)]">
                      {t.date}
                    </div>
                    <h3 className="mt-1 font-display text-lg font-semibold">{t.title}</h3>
                    <div className="text-sm text-muted-foreground">{t.org}</div>
                    <p className="mt-2 text-sm text-muted-foreground text-justify leading-relaxed">
                      {t.detail}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:block" />
                <div className="absolute left-4 sm:left-1/2 top-5 sm:-translate-x-1/2">
                  <div className="grid h-8 w-8 place-items-center rounded-full border border-border bg-background shadow-md">
                    <Icon className="h-4 w-4 text-[var(--brand)]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
