import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { ParticleField } from "@/components/ParticleField";
import { portfolioData } from "@/data/portfolioData";
import portrait from "@/assets/portrait.jpg";

function useTypewriter(words: string[], speed = 70, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (!del && text === current) {
      t = setTimeout(() => setDel(true), pause);
    } else if (del && text === "") {
      setDel(false);
      setI((x) => x + 1);
    } else {
      t = setTimeout(
        () => setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
        del ? speed / 2 : speed,
      );
    }
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}

export function Hero() {
  const { personal } = portfolioData;
  const role = useTypewriter(personal.roles);
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <ParticleField />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 lg:grid-cols-12 gap-10 px-6 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05]"
          >
            Hi, I'm <span className="text-gradient">{personal.firstName}.</span>
            <br />
            Building the unseen.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-6 flex items-center gap-2 font-mono text-m text-muted-foreground"
          >
            <span className="text-[var(--brand)]">$</span>
            <span>{role}</span>
            <motion.span
              aria-hidden
              animate={reduce ? undefined : { opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block h-4 w-[2px] bg-[var(--brand)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-medium text-white glow-brand transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-5 py-3 text-sm font-medium backdrop-blur hover:bg-accent transition-colors"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href={personal.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-5 py-3 text-sm font-medium backdrop-blur hover:bg-accent transition-colors"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative h-[360px] sm:h-[440px]"
        >
          <div className="absolute inset-0 rounded-3xl border border-border bg-card/30 backdrop-blur-sm overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute inset-7 rounded-[2.5rem] border border-[color:var(--brand)]/15" />
              <div className="absolute inset-14 rounded-[2.2rem] border border-[color:var(--neon)]/20" />
              <div className="absolute inset-20 rounded-[1.9rem] border border-[color:var(--neon-2)]/25" />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-[350px] aspect-square overflow-hidden rounded-[2rem] border border-border bg-background/90 shadow-[0_32px_90px_oklch(0_0_0_/_0.24)]">
                <img
                  src={portrait}
                  alt="Portrait of the developer"
                  // width={1024}
                  // height={1024}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,transparent_0%,transparent_42%,oklch(0_0_0_/_0.26)_100%),linear-gradient(to_top,var(--background),transparent_46%)]" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-full glass px-4 py-2 font-mono text-[10px] uppercase tracking-widest">
                  <span className="text-[color:var(--neon)]">● online</span>
                  <span className="text-muted-foreground">dev / java · python</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-brand opacity-20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
