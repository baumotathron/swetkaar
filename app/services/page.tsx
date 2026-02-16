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
  ArrowUpRight,
  Instagram,
} from "lucide-react";

const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/swetkaar.ai/";

const servicesData = [
  {
    id: "strategic-branding",
    number: "01",
    title: "Strategic Branding",
    icon: Palette,
    intro:
      "For brands that want to look credible, coherent, category-right before scaling spend. We use AI to create strategic branding and content that look premium, stay consistent and scale effortlessly.",
    deliverables: [
      {
        label: "Video content",
        icon: Video,
        items: [
          "5 short viral reels",
          "Brand-led, product-led and lifestyle narratives",
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
      "Professional ads & films built to stop scrolls and drive conversation. Ads that feel premium and emotional with exceptional storytelling.",
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
          "Platform-optimized formats, cutdowns for performance testing and clear conversation narratives",
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
      "With Swetkaar.ai, organizations move beyond traditional automation into intelligent, self-improving systems that drive efficiency, innovation, and sustainable growth in an increasingly AI-driven world.",
    deliverables: [
      {
        label: "Intelligent analytics",
        icon: BarChart3,
        items: [
          "Turn raw data into real-time insights, forecasts, and smarter decisions",
        ],
      },
      {
        label: "Agentic AI systems",
        icon: Cpu,
        items: [
          "Deploy autonomous AI agents that execute tasks and optimize workflows 24/7",
        ],
      },
      {
        label: "Custom AI integration",
        icon: Plug,
        items: [
          "Seamlessly connect AI solutions with your existing tools and business stack",
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
        {/* Hero */}
        <section className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20">
          <div className="absolute inset-0">
            <div className="orb top-[-120px] left-[-120px] h-[320px] w-[320px] bg-electric/60" />
            <div className="orb bottom-[-140px] right-[-120px] h-[260px] w-[260px] bg-gold/60" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 rounded-full border border-electric/40 bg-electric/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-electric"
            >
              What we offer
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl"
            >
              Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-white/70 md:text-xl"
            >
              Strategic branding, AI films & ads, and intelligent automations—crafted to scale.
            </motion.p>
          </div>
        </section>

        {/* Service cards */}
        <section className="relative mx-auto w-full max-w-5xl px-6 pb-32">
          <div className="space-y-24">
            {servicesData.map((service, serviceIndex) => (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-[2rem] border border-electric/30 bg-black/70 transition hover:border-electric/60 hover:bg-electric/5"
              >
                <div className="absolute inset-px -z-10 rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="h-full w-full rounded-[2rem] bg-gradient-to-br from-electric/30 via-transparent to-tech-blue/30 blur-2xl" />
                </div>
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap items-start justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <span className="rounded-full border border-electric/40 bg-electric/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-electric">
                        {service.number}
                      </span>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-electric/40 bg-electric/15 text-electric">
                        <service.icon className="h-7 w-7" />
                      </div>
                    </div>
                  </div>
                  <h2 className="mt-6 font-display text-3xl text-white md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/75">
                    {service.intro}
                  </p>
                  <div className="mt-10">
                    <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-electric">
                      What you get
                    </p>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {service.deliverables.map((deliverable, dIndex) => (
                        <div
                          key={dIndex}
                          className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-electric/30 hover:bg-electric/5"
                        >
                          <div className="mb-3 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-electric/30 bg-electric/10 text-electric">
                              <deliverable.icon className="h-5 w-5" />
                            </div>
                            <span className="text-sm font-semibold uppercase tracking-wider text-white">
                              {deliverable.label}
                            </span>
                          </div>
                          <ul className="space-y-2 text-sm text-white/70">
                            {deliverable.items.map((item, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-electric" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Instagram link */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24"
          >
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-electric">
                Our feed
              </p>
              <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
                Follow us on Instagram
              </h2>
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-electric"
              >
                <Instagram className="h-5 w-5" />
                <span>@swetkaar.ai</span>
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto mt-24 max-w-2xl overflow-hidden rounded-[2rem] border border-gold/40 bg-black/80 px-8 py-14 text-center"
          >
            <div className="absolute inset-0">
              <div className="orb -top-20 left-1/2 h-48 w-48 -translate-x-1/2 bg-gold/30 blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="font-display text-2xl text-white md:text-3xl">
                Ready to build something together?
              </h2>
              <p className="mt-3 text-white/70">
                Let's talk about your brand, films, or automation goals.
              </p>
              <Link
                href="/#contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold transition hover:border-gold hover:bg-gold/20"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
