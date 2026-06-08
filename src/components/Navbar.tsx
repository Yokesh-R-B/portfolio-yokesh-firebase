import { motion } from "framer-motion";
import { Languages, Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const sections = [
  { id: "home", labelKey: "nav.home" },
  { id: "about", labelKey: "nav.about" },
  { id: "skills", labelKey: "nav.skills" },
  { id: "projects", labelKey: "nav.projects" },
  { id: "experience", labelKey: "nav.experience" },
  { id: "profiles", labelKey: "nav.profiles" },
  { id: "resume", labelKey: "nav.resume" },
  { id: "contact", labelKey: "nav.contact" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const { t, i18n } = useTranslation();
  const isGerman =
  (i18n.resolvedLanguage ?? i18n.language ?? "en").startsWith("de");
  const nextLanguage = isGerman ? "en" : "de";

  const changeLanguage = () => {
    if (typeof i18n.changeLanguage === "function") {
      void i18n.changeLanguage(nextLanguage);
    }
    document.documentElement.lang = nextLanguage;
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(1100px,calc(100%-1.5rem))]"
    >
      <div
        className={cn(
          "flex items-center justify-between gap-4 rounded-2xl border border-border/60",
          "bg-background/60 px-4 py-2.5 backdrop-blur-xl",
          "shadow-[0_8px_40px_-12px_color-mix(in_oklab,var(--brand)_25%,transparent)]",
        )}
      >
        <a href="#home" className="flex items-center gap-2 font-display font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-white shadow-sm">
            <span className="text-sm font-bold">Y</span>
          </span>
          <span className="hidden sm:inline">
            yokesh<span className="text-gradient">.dev</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              {t(s.labelKey)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={changeLanguage}
            aria-label={t("nav.language")}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-card/60 px-2.5 text-xs font-semibold hover:bg-accent transition-colors"
          >
            <Languages className="h-4 w-4" />
            {isGerman ? "EN" : "DE"}
          </button>

          <button
            onClick={toggle}
            aria-label={t("nav.theme")}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card/60 hover:bg-accent transition-colors"
          >
            <motion.span
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </motion.span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
