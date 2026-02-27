"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Film,
  Palette,
  Cpu,
  Zap,
  Eye,
  Target,
} from "lucide-react";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const studioRoles = [
  {
    icon: Brain,
    title: "Product Minds",
    description:
      "We think in outcomes, not deliverables. Every creative decision is filtered through product strategy — what converts, what retains, what scales.",
  },
  {
    icon: Palette,
    title: "Creative Directors",
    description:
      "Mythic storytelling meets modern brand systems. We architect visual identities and campaigns that feel both inevitable and unforgettable.",
  },
  {
    icon: Film,
    title: "Filmmakers & VFX Artists",
    description:
      "Cinematic production with AI-accelerated pipelines. Traditional craft, impossible speed. Ad films that stop the scroll.",
  },
  {
    icon: Cpu,
    title: "AI Engineers",
    description:
      "Custom agents, workflow automation, and intelligent systems. We don't just talk about AI — we ship it into your operations.",
  },
];

const values = [
  {
    icon: Zap,
    title: "Studio-Led, Not Factory-Made",
    description:
      "Direct attention from the people who built this studio. No account managers. No handoffs.",
  },
  {
    icon: Eye,
    title: "AI as Amplifier, Not Replacement",
    description:
      "We use AI to execute at speed and scale. The vision, strategy, and taste are irreplaceably human.",
  },
  {
    icon: Target,
    title: "Strategy Before Style",
    description:
      "Beautiful work that doesn't convert is decoration. We start with business objectives, not mood boards.",
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />

        {/* ── Why We Exist ── */}
        <section id="about" className="relative mx-auto w-full max-w-5xl scroll-mt-32 px-6 pb-24">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Why we exist
            </p>
            <h2 className="font-display text-3xl text-white md:text-4xl">
              Most agencies are broken in one of two ways
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Creative but blind to AI
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Beautiful work — but it takes months, costs a fortune, and
                  completely ignores AI. Same process since 2015.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Technical but soulless
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  They automate everything — but the output feels generic and
                  forgettable. AI without taste is just faster mediocrity.
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="max-w-2xl text-base leading-relaxed text-white/80">
                We built Swetkaar to be neither. Human creative direction
                meets AI-powered execution. Strategy-first branding meets
                cinematic production. The result: work that looks premium and
                actually converts — delivered in weeks, not quarters.
              </p>
            </div>
          </motion.article>
        </section>

        {/* ── The Studio ── */}
        <section className="relative mx-auto w-full max-w-5xl px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            className="mb-10 max-w-2xl"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              The Studio
            </p>
            <h2 className="font-display text-3xl text-white md:text-4xl">
              A tight crew. No bloat. No middlemen.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              We&apos;re a small, intentional team of specialists — not a 50-person
              agency where your project gets handed down three layers. The people
              who strategize are the people who execute.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {studioRoles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:border-gold/30"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
                    <role.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl text-white">
                    {role.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  {role.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── What We Believe ── */}
        <section className="relative mx-auto w-full max-w-5xl px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            className="mb-10 max-w-2xl"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              What We Believe
            </p>
            <h2 className="font-display text-3xl text-white md:text-4xl">
              Principles that shape every project
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-3">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
