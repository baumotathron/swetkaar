"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden pt-32 text-white"
    >
      <div className="absolute inset-0">
        <div className="orb top-[-120px] left-[-120px] h-[320px] w-[320px] bg-electric/60" />
        <div className="orb bottom-[-140px] right-[-120px] h-[260px] w-[260px] bg-tech-blue/60" />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:items-start">
        <div className="relative z-10 flex-1">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-[3.75rem]"
          >
            The Perfect Fusion of Human Imagination & AI Power for Your Next Level
          </motion.h1>
          <motion.p
            variants={container}
            initial="hidden"
            animate="visible"
            custom={0.18}
            className="mt-6 max-w-xl text-lg text-white/70"
          >
            "Swetkaar" is the spark of metamorphosis. We craft mythic brand worlds,
            cinematic realities, and AI-powered experiences that move cultures forward.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
          className="relative z-10 flex flex-1 justify-center lg:mt-6"
        >
          <div className="glass-panel relative flex w-full max-w-md flex-col gap-6 overflow-hidden rounded-3xl px-6 py-8 text-left">
            <div className="absolute -top-32 right-8 h-56 w-56 rounded-full bg-electric/40 blur-3xl" />
            <div className="relative flex flex-col gap-4">
              <h3 className="font-display text-2xl text-white">
                Creative Intelligence Lab
              </h3>
              <p className="text-sm text-white/70">
                Human imagination × AI acceleration. We prototype future narratives,
                craft cinematic aesthetics, and orchestrate omni-channel resonance.
              </p>
            </div>
            <div className="relative flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/50">
              <span className="rounded-full border border-white/10 px-3 py-1">
                AI Storycraft
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                AI Cinematics
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                AI-Powered Platforms
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                AI Workflows
              </span>
            </div>
            <Link
              href="#services"
              className="rounded-full border border-gold/50 px-7 py-3 text-center text-sm font-semibold uppercase tracking-[0.25em] text-gold transition hover:bg-gold/10"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        custom={0.4}
        className="relative mx-auto mt-20 w-full max-w-6xl px-6"
      >
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="group relative overflow-hidden rounded-3xl border border-electric/40 bg-black/70 p-8 text-center transition hover:border-electric/70 hover:bg-electric/10">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-electric via-tech-blue to-electric opacity-0 transition group-hover:opacity-100" />
            <div className="absolute -top-20 right-8 h-32 w-32 rounded-full bg-electric/20 blur-3xl opacity-0 transition group-hover:opacity-100" />
            <p className="relative text-xl font-semibold leading-relaxed text-white">
              Automate workflows and scale your business
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-3xl border border-electric/40 bg-black/70 p-8 text-center transition hover:border-electric/70 hover:bg-electric/10">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-electric via-tech-blue to-electric opacity-0 transition group-hover:opacity-100" />
            <div className="absolute -top-20 right-8 h-32 w-32 rounded-full bg-electric/20 blur-3xl opacity-0 transition group-hover:opacity-100" />
            <p className="relative text-xl font-semibold leading-relaxed text-white">
              Create engaging content 10x faster with AI
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-3xl border border-electric/40 bg-black/70 p-8 text-center transition hover:border-electric/70 hover:bg-electric/10">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-electric via-tech-blue to-electric opacity-0 transition group-hover:opacity-100" />
            <div className="absolute -top-20 right-8 h-32 w-32 rounded-full bg-electric/20 blur-3xl opacity-0 transition group-hover:opacity-100" />
            <p className="relative text-xl font-semibold leading-relaxed text-white">
              Increase user base through intelligent storytelling
            </p>
          </div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-semibold text-white">
            <s className="text-white/50">Project</s> Product Manager
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            Our team has expert product managers who are outcome-driven. We don't manage projects—we deliver results. Crafting products that drive growth, engagement, and measurable business impact.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}


