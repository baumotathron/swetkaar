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
  BarChart3,
  Cpu,
  Plug,
  ArrowRight,
  Search,
  Rocket,
  MessageSquare,
} from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const services = [
  {
    id: "strategic-branding",
    number: "01",
    title: "Strategic Branding",
    icon: Palette,
    intro:
      "Look credible, coherent, and category-right — before you scale spend. AI-powered branding and content that looks premium, stays consistent, and scales effortlessly.",
    deliverables: [
      {
        label: "Video content",
        icon: Video,
        items: [
          "5 short-form viral reels",
          "Brand-led, product-led & lifestyle narratives",
        ],
      },
      {
        label: "Cinematic product visuals",
        icon: Sparkles,
        items: [
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
    intro:
      "Ads and films that stop the scroll and drive conversion. Premium, emotional storytelling — designed to sell.",
    deliverables: [
      {
        label: "Hero ad films",
        icon: Film,
        items: [
          "2 professional cinematic ad films",
          "Concept, script & storyboard included",
        ],
      },
      {
        label: "High-end production",
        icon: Sparkles,
        items: [
          "AI-generated cinematic scenes",
          "VFX compositing & motion design",
          "Sound design & visual polish",
          "Platform-optimized formats & cutdowns",
          "Conversion-driven narratives",
        ],
      },
    ],
  },
  {
    id: "ai-automations",
    number: "03",
    title: "AI Automations",
    icon: Bot,
    intro:
      "Automate the busywork. Intelligent AI systems that handle repetitive tasks, surface insights from your data, and run 24/7 — so your team focuses on growth.",
    deliverables: [
      {
        label: "Intelligent analytics",
        icon: BarChart3,
        items: [
          "Custom analytics pipeline setup",
          "Real-time reporting dashboard",
          "Monthly insight reports for 3 months",
        ],
      },
      {
        label: "Agentic AI systems",
        icon: Cpu,
        items: [
          "2 custom AI agents for your workflows",
          "Slack, email & CRM integration",
          "30-day optimization & monitoring",
        ],
      },
      {
        label: "Custom AI integration",
        icon: Plug,
        items: [
          "API integration with your existing stack",
          "Custom model fine-tuning",
          "Documentation & team training session",
        ],
      },
    ],
  },
];

const processSteps = [
  {
    icon: Search,
    title: "Discover",
    desc: "We learn your brand, audience, and goals inside-out.",
  },
  {
    icon: Rocket,
    title: "Create",
    desc: "AI-powered production delivers premium output at speed.",
  },
  {
    icon: MessageSquare,
    title: "Launch & Iterate",
    desc: "Ship fast, measure results, optimize continuously.",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-16">
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
              Strategic branding, AI films, and intelligent automations —
              delivered at the quality of a top agency and the speed of AI.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-soft-gold"
              >
                Book a free call
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <a
                href="#strategic-branding"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
              >
                Explore services
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── Service quick-nav ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease }}
          className="mx-auto flex flex-wrap justify-center gap-3 px-6 pb-20"
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
          <div className="space-y-20">
            {services.map((service) => (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease }}
                className="scroll-mt-32 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition hover:border-gold/30"
              >
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] text-gold">
                      {service.number}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold">
                      <service.icon className="h-6 w-6" />
                    </div>
                  </div>

                  <h2 className="mt-6 font-display text-3xl text-white md:text-4xl">
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
                  <div className="mt-10 flex items-center gap-6 border-t border-white/10 pt-8">
                    <Link
                      href="/#contact"
                      className="group/cta inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition hover:bg-soft-gold"
                    >
                      Get a quote
                      <ArrowRight className="h-4 w-4 transition group-hover/cta:translate-x-1" />
                    </Link>
                    <span className="text-xs text-white/50">
                      Free consultation included
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* ── How we work ── */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mt-32"
          >
            <div className="mb-12 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                How we work
              </span>
              <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
                Three steps to launch
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
                >
                  <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-0.5 text-xs font-bold text-black">
                    {i + 1}
                  </span>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

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
                  href="/#contact"
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
