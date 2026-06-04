import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-14 max-w-2xl"
          >
            {eyebrow && (
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                {eyebrow}
              </div>
            )}
            {title && <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">{title}</h2>}
            {subtitle && <p className="mt-4 text-base sm:text-lg text-muted-foreground">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
