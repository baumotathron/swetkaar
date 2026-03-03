"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import {
  Palette,
  Film,
  Bot,
  Sparkles,
  ArrowRight,
  Mail,
  MapPin,
} from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const projectTypes = [
  { icon: Palette, label: "Strategic Branding", value: "Strategic Branding" },
  { icon: Film, label: "AI Films & Ads", value: "AI Films & Ads" },
  { icon: Bot, label: "AI Consulting", value: "AI Consulting" },
  { icon: Sparkles, label: "Something Else", value: "Something Else" },
];

export function ContactSection() {
  const [selected, setSelected] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    vision: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selected) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const submittedDate = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const submittedTime = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      const adminEmail =
        process.env.NEXT_PUBLIC_ADMIN_EMAIL || "hello@swetkaar.com";

      if (!accessKey) {
        throw new Error(
          "Form submission service is not configured. Please contact support."
        );
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Inquiry — ${selected}`,
          from_name: formData.name,
          from_email: formData.email,
          email: adminEmail,
          name: formData.name,
          email_address: formData.email,
          project_type: selected,
          vision: formData.vision,
          submitted_date: submittedDate,
          submitted_time: submittedTime,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", vision: "" });
      setSelected("");

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "An error occurred. Please try again."
      );

      if (process.env.NODE_ENV === "development") {
        console.error("Form submission error:", error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative pb-32">
      <div className="mx-auto w-full max-w-4xl px-6">
        {/* Outer card with gold animated background */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition hover:border-gold/30"
        >
          {/* Orb */}
          <div className="pointer-events-none absolute inset-0">
            <div className="orb -top-20 left-1/2 h-48 w-48 -translate-x-1/2 bg-gold/20 blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 sm:px-12 md:px-16 md:py-20">
            {/* Header */}
            <div className="text-center">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease }}
                className="inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gold"
              >
                Let&apos;s Create
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease, delay: 0.1 }}
                className="mt-6 font-display text-3xl leading-tight text-white md:text-4xl"
              >
                Ready to ignite your{" "}
                <span className="text-gold">next chapter</span>?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease, delay: 0.18 }}
                className="mx-auto mt-4 max-w-lg text-white/60"
              >
                Tell us about your vision. We respond within 48 hours with a
                tailored collaboration map.
              </motion.p>
            </div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: 0.25 }}
              onSubmit={handleSubmit}
              className="mt-12"
            >
              {/* Project type selector */}
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                What are you looking for?
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {projectTypes.map((pt, i) => {
                  const active = selected === pt.value;
                  return (
                    <motion.button
                      key={pt.value}
                      type="button"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + i * 0.07,
                        ease,
                      }}
                      onClick={() => setSelected(pt.value)}
                      className={`group flex flex-col items-center gap-3 rounded-2xl border p-5 text-center transition-all duration-300 ${
                        active
                          ? "border-gold/60 bg-gold/15 text-gold shadow-[0_0_30px_rgba(253,197,0,0.12)]"
                          : "border-white/10 bg-white/[0.04] text-white/50 hover:border-gold/30 hover:bg-gold/[0.06] hover:text-gold/80"
                      }`}
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
                          active
                            ? "border-gold/50 bg-gold/20"
                            : "border-white/10 bg-white/5 group-hover:border-gold/25 group-hover:bg-gold/10"
                        }`}
                      >
                        <pt.icon
                          className={`h-5 w-5 transition ${
                            active
                              ? "text-gold"
                              : "text-white/30 group-hover:text-gold/60"
                          }`}
                        />
                      </div>
                      <span className="text-xs font-medium leading-tight">
                        {pt.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Fields */}
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none transition focus:border-gold/50 focus:bg-black/50 focus:shadow-[0_0_0_3px_rgba(253,197,0,0.1)]"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none transition focus:border-gold/50 focus:bg-black/50 focus:shadow-[0_0_0_3px_rgba(253,197,0,0.1)]"
                  />
                </div>
              </div>

              <div className="mt-5 grid gap-2">
                <label className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Your Vision
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you're dreaming into reality..."
                  required
                  value={formData.vision}
                  onChange={(e) =>
                    setFormData({ ...formData, vision: e.target.value })
                  }
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none transition focus:border-gold/50 focus:bg-black/50 focus:shadow-[0_0_0_3px_rgba(253,197,0,0.1)]"
                />
              </div>

              {/* Status messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400"
                >
                  Thank you! We&apos;ve received your request and will connect
                  with you shortly.
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                >
                  {errorMessage ||
                    "Failed to send message. Please try again."}
                </motion.div>
              )}

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting || !selected}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-soft-gold hover:shadow-[0_0_40px_rgba(253,197,0,0.25)] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {isSubmitting ? "Sending..." : "Send your vision"}
                {!isSubmitting && (
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                )}
              </motion.button>
            </motion.form>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40"
            >
              <a
                href="mailto:hello@swetkaar.com"
                className="inline-flex items-center gap-2 transition hover:text-gold"
              >
                <Mail className="h-4 w-4" />
                hello@swetkaar.com
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Global / Remote-first
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
