import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Section } from "@/components/Section";
import { usePortfolioData } from "@/hooks/use-portfolio-data";
import { toast } from "sonner";

type FormData = { name: string; email: string; message: string };

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const { t } = useTranslation();
  const { emailjs: cfg, personal } = usePortfolioData();

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      if (cfg.serviceId.startsWith("YOUR_")) {
        await new Promise((r) => setTimeout(r, 900));
      } else {
        await emailjs.send(
          cfg.serviceId,
          cfg.templateId,
          { name: data.name, email: data.email, message: data.message },
          { publicKey: cfg.publicKey },
        );
      }
      setStatus("sent");
      reset();
      setTimeout(() => setStatus("idle"), 3500);
    } catch (e) {
      console.error(e);
      toast.error(t("sections.contact.sendError"));
      setStatus("idle");
    }
  };

  return (
    <Section
      id="contact"
      eyebrow={t("sections.contact.eyebrow")}
      title={
        <>
          {t("sections.contact.titlePrefix")}{" "}
          <span className="text-gradient">{t("sections.contact.titleHighlight")}</span>
          {t("sections.contact.titleSuffix")}
        </>
      }
      subtitle={t("sections.contact.subtitle", { email: personal.email })}
    >
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.32 }}
        className="mx-auto max-w-2xl space-y-5 rounded-3xl border border-border bg-card/60 p-6 sm:p-8 backdrop-blur"
      >
        <Field label={t("sections.contact.name")} error={errors.name?.message}>
          <input
            {...register("name", {
              required: t("sections.contact.validation.nameRequired"),
              maxLength: { value: 80, message: t("sections.contact.validation.tooLong") },
            })}
            placeholder={t("sections.contact.namePlaceholder")}
            className="input"
          />
        </Field>
        <Field label={t("sections.contact.email")} error={errors.email?.message}>
          <input
            type="email"
            {...register("email", {
              required: t("sections.contact.validation.emailRequired"),
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: t("sections.contact.validation.invalidEmail"),
              },
            })}
            placeholder={t("sections.contact.emailPlaceholder")}
            className="input"
          />
        </Field>
        <Field label={t("sections.contact.message")} error={errors.message?.message}>
          <textarea
            rows={5}
            {...register("message", {
              required: t("sections.contact.validation.messageRequired"),
              minLength: { value: 10, message: t("sections.contact.validation.messageShort") },
            })}
            placeholder={t("sections.contact.messagePlaceholder")}
            className="input resize-none"
          />
        </Field>

        <div className="flex items-center justify-end">
          <button
            type="submit"
            disabled={status !== "idle"}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-medium text-white glow-brand disabled:opacity-70"
          >
            <AnimatePresence mode="wait">
              {status === "idle" && (
                <motion.span
                  key="i"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="inline-flex items-center gap-2"
                >
                  {t("sections.contact.send")} <Send className="h-4 w-4" />
                </motion.span>
              )}
              {status === "sending" && (
                <motion.span
                  key="s"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="inline-flex items-center gap-2"
                >
                  {t("sections.contact.sending")} <Loader2 className="h-4 w-4 animate-spin" />
                </motion.span>
              )}
              {status === "sent" && (
                <motion.span
                  key="d"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="inline-flex items-center gap-2"
                >
                  {t("sections.contact.sent")} <CheckCircle2 className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <style>{`
          .input {
            width: 100%;
            background: color-mix(in oklab, var(--background) 60%, transparent);
            border: 1px solid var(--border);
            border-radius: 0.75rem;
            padding: 0.75rem 1rem;
            font-size: 0.95rem;
            outline: none;
            transition: border-color .2s, box-shadow .2s, background .2s;
          }
          .input:focus {
            border-color: var(--brand);
            box-shadow: 0 0 0 4px color-mix(in oklab, var(--brand) 20%, transparent);
          }
        `}</style>
      </motion.form>
    </Section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium">{label}</span>
        {error && <span className="text-xs text-destructive">{error}</span>}
      </div>
      {children}
    </label>
  );
}
