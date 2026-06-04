import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Section } from "@/components/Section";
import { portfolioData } from "@/data/portfolioData";
import { toast } from "sonner";

type FormData = { name: string; email: string; message: string };

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const { emailjs: cfg, personal } = portfolioData;

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      if (cfg.serviceId.startsWith("YOUR_")) {
        await new Promise((r) => setTimeout(r, 900));
      } else {
        await emailjs.send(
          cfg.serviceId,
          cfg.templateId,
          { from_name: data.name, from_email: data.email, message: data.message },
          { publicKey: cfg.publicKey },
        );
      }
      setStatus("sent");
      reset();
      setTimeout(() => setStatus("idle"), 3500);
    } catch (e) {
      console.error(e);
      toast.error("Couldn't send. Try emailing me directly.");
      setStatus("idle");
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's <span className="text-gradient">build something</span>.</>}
      subtitle={`I usually reply within a day. Or email me directly at ${personal.email}.`}
    >
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl space-y-5 rounded-3xl border border-border bg-card/60 p-6 sm:p-8 backdrop-blur"
      >
        <Field label="Name" error={errors.name?.message}>
          <input
            {...register("name", { required: "Name is required", maxLength: { value: 80, message: "Too long" } })}
            placeholder="Jane Doe"
            className="input"
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: "Invalid email" },
            })}
            placeholder="you@company.com"
            className="input"
          />
        </Field>
        <Field label="Message" error={errors.message?.message}>
          <textarea
            rows={5}
            {...register("message", { required: "Message is required", minLength: { value: 10, message: "A bit more, please" } })}
            placeholder="Tell me about your project, role, or idea..."
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
                <motion.span key="i" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="inline-flex items-center gap-2">
                  Send message <Send className="h-4 w-4" />
                </motion.span>
              )}
              {status === "sending" && (
                <motion.span key="s" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="inline-flex items-center gap-2">
                  Sending <Loader2 className="h-4 w-4 animate-spin" />
                </motion.span>
              )}
              {status === "sent" && (
                <motion.span key="d" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="inline-flex items-center gap-2">
                  Sent <CheckCircle2 className="h-4 w-4" />
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

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
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
