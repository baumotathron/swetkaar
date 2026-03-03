"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import {
  Palette,
  Film,
  Bot,
  Video,
  Sparkles,
  Cpu,
  ArrowRight,
  FileText,
  Instagram,
} from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/swetkaar.ai/";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const services = [
  {
    id: "strategic-branding",
    number: "01",
    title: "Strategic Branding",
    icon: Palette,
    showPortfolio: true,
    intro:
      "We don't just create content — we start with strategy. A deep-dive brand report defines your positioning, audience, and visual direction. Then we produce premium content built on that foundation.",
    deliverables: [
      {
        label: "Brand strategy report",
        icon: FileText,
        items: [
          "Brand positioning & audience mapping",
          "Visual direction & style guide",
          "Content roadmap & narrative framework",
        ],
      },
      {
        label: "Premium content production",
        icon: Sparkles,
        items: [
          "5 short-form viral reels",
          "5 cinematic product shots",
          "AI-assisted environments & lighting",
          "High-end, brand-safe visuals",
        ],
      },
    ],
  },
  {
    id: "ai-films-ads",
    number: "02",
    title: "AI Films & Ads",
    icon: Film,
    showPortfolio: true,
    intro:
      "Cinematic ad films crafted by VFX experts using AI — giving you traditional production quality in a fraction of the time. Human creative direction meets AI-powered execution.",
    deliverables: [
      {
        label: "Creative direction",
        icon: FileText,
        items: [
          "Concept development & scripting",
          "Storyboard & shot planning",
          "Brand narrative & messaging strategy",
        ],
      },
      {
        label: "Production & delivery",
        icon: Sparkles,
        items: [
          "2 cinematic ad films by VFX experts using AI",
          "VFX compositing & motion design",
          "Sound design & visual polish",
          "Platform-optimized cutdowns for every channel",
        ],
      },
    ],
  },
  {
    id: "ai-consulting",
    number: "03",
    title: "AI Consulting & Implementation",
    icon: Bot,
    intro:
      "You know AI matters — but where will it actually move the needle? Our AI product managers audit your operations, deliver an Impact Report with the highest-ROI opportunities, and build the solutions.",
    deliverables: [
      {
        label: "AI Impact Report",
        icon: FileText,
        items: [
          "Operational audit & process mapping",
          "AI opportunity scoring with ROI estimates",
          "Prioritized implementation roadmap",
        ],
      },
      {
        label: "Build & deploy",
        icon: Cpu,
        items: [
          "Custom AI agents & workflow automation",
          "Integration with your existing tools & stack",
          "Team training & handoff documentation",
        ],
      },
    ],
  },
];


export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-6 pt-44 pb-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="orb left-[-120px] top-[-120px] h-[320px] w-[320px] bg-electric/40" />
            <div className="orb bottom-[-140px] right-[-120px] h-[260px] w-[260px] bg-gold/30" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl"
            >
              Everything your brand needs to{" "}
              <span className="text-gold">stand out</span> and{" "}
              <span className="text-gold">scale</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="mx-auto mt-6 max-w-xl text-lg text-white/80"
            >
              Premium branding, cinematic ads, and AI automations that drive
              real revenue — delivered in weeks, not months.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-8"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-soft-gold"
              >
                Book a free call
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Service quick-nav ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease }}
          className="mx-auto flex flex-wrap justify-center gap-3 px-6 pb-14"
        >
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/70 transition hover:border-gold/40 hover:bg-gold/10 hover:text-gold"
            >
              <s.icon className="h-4 w-4" />
              {s.title}
            </a>
          ))}
        </motion.div>

        {/* ── Service cards ── */}
        <section className="relative mx-auto w-full max-w-5xl px-6 pb-32">
          <div className="space-y-24">
            {services.map((service) => (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease }}
                className="scroll-mt-40 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition hover:border-gold/30"
              >
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-gold">
                    <service.icon className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-[0.25em]">
                      {service.number} · {service.title}
                    </span>
                  </div>

                  <h2 className="mt-5 font-display text-3xl text-white md:text-4xl">
                    {service.title}
                  </h2>

                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
                    {service.intro}
                  </p>

                  {/* Deliverables */}
                  <div className="mt-10">
                    <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                      What you get
                    </p>
                    <div className="grid gap-6 sm:grid-cols-2">
                      {service.deliverables.map((d, dIdx) => (
                        <div
                          key={dIdx}
                          className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10"
                        >
                          <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
                              <d.icon className="h-4 w-4" />
                            </div>
                            <span className="text-sm font-semibold text-white">
                              {d.label}
                            </span>
                          </div>
                          <ul className="space-y-2.5">
                            {d.items.map((item, i) => (
                              <li
                                key={i}
                                className="flex gap-2.5 text-sm text-white/75"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Per-service CTA */}
                  <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
                    <Link
                      href="/contact"
                      className="group/cta inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition hover:bg-soft-gold"
                    >
                      Get a quote
                      <ArrowRight className="h-4 w-4 transition group-hover/cta:translate-x-1" />
                    </Link>
                    {service.showPortfolio ? (
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/ig inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/60 transition hover:border-gold/40 hover:bg-gold/10 hover:text-gold"
                      >
                        <Instagram className="h-4 w-4" />
                        <span>@swetkaar.ai</span>
                        <ArrowRight className="h-3.5 w-3.5 transition group-hover/ig:translate-x-1" />
                      </a>
                    ) : (
                      <span className="text-xs text-white/50">
                        Free consultation included
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* ── Final CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="relative mx-auto mt-32 max-w-2xl overflow-hidden rounded-[2rem] border border-gold/30 bg-gradient-to-br from-gold/[0.08] via-black/80 to-black/80 px-8 py-16 text-center"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="orb -top-20 left-1/2 h-48 w-48 -translate-x-1/2 bg-gold/20 blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="font-display text-2xl text-white md:text-3xl">
                Let&apos;s build something that converts
              </h2>
              <p className="mx-auto mt-4 max-w-md text-white/70">
                Whether it&apos;s branding, films, or automations — we&apos;ll
                craft a strategy tailored to your goals.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-soft-gold"
                >
                  Book a free consultation
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
                <a
                  href="mailto:hello@swetkaar.com"
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  hello@swetkaar.com
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
