import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import { Section } from "@/components/Section";
import { portfolioData } from "@/data/portfolioData";

export function Resume() {
  const { personal } = portfolioData;
  return (
    <Section id="resume" eyebrow="Resume" title={<>One page. <span className="text-gradient">All the highlights.</span></>}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -4 }}
        className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur"
      >
        <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-brand opacity-20 blur-2xl" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-brand text-white shadow-lg">
            <FileText className="h-8 w-8" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-2xl font-semibold">{personal.name} — Resume</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Updated recently · PDF · One page
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-4 py-2 text-sm font-medium hover:bg-accent"
            >
              <Eye className="h-4 w-4" /> Preview
            </a>
            <a
              href={personal.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-medium text-white glow-brand"
            >
              <Download className="h-4 w-4" /> Download
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
