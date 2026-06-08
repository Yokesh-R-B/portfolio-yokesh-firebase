import { motion, useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export function AmbientBackground() {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 grain opacity-[0.04]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_10%_0%,color-mix(in_oklab,var(--brand)_16%,transparent),transparent_70%),radial-gradient(70%_50%_at_90%_30%,color-mix(in_oklab,var(--brand-2)_14%,transparent),transparent_75%),radial-gradient(80%_60%_at_40%_100%,color-mix(in_oklab,var(--brand-3)_12%,transparent),transparent_75%)]" />
      </div>
    );
  }

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grain opacity-[0.07]" />
      <motion.div
        className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-[var(--brand)] opacity-20 blur-3xl"
        animate={reduce ? undefined : { x: [0, 60, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-[var(--brand-2)] opacity-20 blur-3xl"
        animate={reduce ? undefined : { x: [0, -50, 30, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 left-1/3 h-[30rem] w-[30rem] rounded-full bg-[var(--brand-3)] opacity-15 blur-3xl"
        animate={reduce ? undefined : { x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
