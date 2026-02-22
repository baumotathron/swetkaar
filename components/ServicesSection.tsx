"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  })
};

export function ServicesSection() {
  return (
    <section id="services" className="relative mx-auto mt-32 w-full max-w-6xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 rounded-full border border-electric/40 bg-electric/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-electric"
        >
          Services
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-6 font-display text-3xl leading-tight text-white md:text-4xl"
        >
          Creative systems engineered to move culture, crafted with AI intuition.
        </motion.h2>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            custom={index}
            className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-electric/30 bg-black/70 p-8 transition hover:border-electric/70 hover:bg-electric/10"
          >
            <div className="absolute inset-px -z-10 rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="h-full w-full rounded-3xl bg-gradient-to-br from-electric/40 via-transparent to-tech-blue/40 blur-xl" />
            </div>
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-electric/30 bg-electric/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-electric">
                0{index + 1}
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                Swetkaar Craft
              </span>
            </div>
            <h3 className="font-display text-2xl text-white">{service.title}</h3>
            <p className="text-sm text-white/70">{service.description}</p>
            <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/50">
              <span>{service.tagline}</span>
              <span className="text-electric">∞</span>
            </div>
            <span className="absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-electric to-tech-blue transition-all duration-500 group-hover:scale-x-100" />
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 flex justify-center"
      >
        <Link
          href="/services"
          className="group inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-electric transition hover:border-electric hover:bg-electric/20"
        >
          <span>View full services</span>
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </motion.div>
    </section>
  );
}


