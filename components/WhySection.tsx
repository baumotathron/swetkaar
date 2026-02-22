"use client";

import { motion } from "framer-motion";
import { Brain, Globe2, Infinity, Sparkles } from "lucide-react";
import { reasons } from "@/lib/data";

const iconMap = [Brain, Sparkles, Globe2, Infinity];

export function WhySection() {
  return (
    <section
      id="why"
      className="relative mx-auto mt-32 w-full max-w-6xl px-6"
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 rounded-full border border-electric/50 bg-electric/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-electric"
        >
          Why Swetkaar AI
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-display text-3xl leading-tight text-white md:text-4xl"
        >
          We operate as your creative intelligence partner, crafting futures that feel
          both divine and designed.
        </motion.h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {reasons.map((reason, index) => {
          const Icon = iconMap[index % iconMap.length];
          return (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-electric/30 bg-black/70 p-8 transition hover:border-electric/70 hover:bg-electric/10"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-electric via-tech-blue to-electric opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-start gap-4">
                <span className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl border border-electric/40 bg-electric/15 text-electric">
                  <span className="absolute inset-0 rounded-2xl bg-electric/30 blur-xl" />
                  <Icon className="relative h-6 w-6" />
                </span>
                <div className="space-y-3">
                  <h3 className="font-display text-xl text-white">{reason.title}</h3>
                  <p className="text-sm text-white/65">{reason.description}</p>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40">
                    Futurecraft
                    <span className="h-px w-10 bg-gradient-to-r from-electric to-tech-blue" />
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}


