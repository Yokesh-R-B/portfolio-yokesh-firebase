import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";
import { usePortfolioData } from "@/hooks/use-portfolio-data";

const items = [
  { key: "github", Icon: Github, label: "GitHub" },
  { key: "linkedin", Icon: Linkedin, label: "LinkedIn" },
  { key: "twitter", Icon: Twitter, label: "X" },
  { key: "instagram", Icon: Instagram, label: "Instagram" },
  { key: "youtube", Icon: Youtube, label: "YouTube" },
] as const;

export function Footer() {
  const { t } = useTranslation();
  const { social } = usePortfolioData();
  return (
    <footer className="relative border-t border-border/60 py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground">
          {t("footer.crafted", { year: new Date().getFullYear() })}
        </div>
        <div className="flex items-center gap-2">
          {items
            .filter(({ key }) => Boolean((social as Record<string, string>)[key]))
            .map(({ key, Icon, label }) => (
              <motion.a
                key={key}
                href={(social as Record<string, string>)[key]}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ y: -3 }}
                className="group grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/60 backdrop-blur hover:border-[var(--brand)] transition-colors"
              >
                <Icon className="h-4 w-4 transition-colors group-hover:text-[var(--brand)]" />
                <span className="pointer-events-none absolute h-10 w-10 rounded-xl opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_30px_var(--brand)] transition-opacity" />
              </motion.a>
            ))}
        </div>
      </div>
    </footer>
  );
}
