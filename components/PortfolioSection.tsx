"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioProjects } from "@/lib/data";

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative mx-auto mt-32 w-full max-w-6xl px-6"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full border border-tech-blue/50 bg-tech-blue/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-tech-blue"
          >
            Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-3xl leading-tight text-white md:text-4xl"
          >
            Portals we have opened for visionary brands and founders.
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md text-sm text-white/60"
        >
          From adaptive brand ecosystems to AI-generated films, every engagement is a
          living system designed to evolve, respond, and resonate.
        </motion.p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {portfolioProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/70"
          >
            <div className="relative h-64 overflow-hidden">
              <div
                className="absolute inset-0 transition duration-700 group-hover:scale-110"
                style={{
                  background:
                    index % 2 === 0
                      ? "linear-gradient(135deg, rgba(0,102,255,0.35), rgba(39,121,247,0.1))"
                      : "linear-gradient(135deg, rgba(39,121,247,0.35), rgba(0,102,255,0.1))"
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="rounded-full border border-white/10 px-6 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
                  {project.category}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 grid place-items-center opacity-0 transition duration-500 group-hover:opacity-100">
                <ArrowUpRight className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="relative flex flex-col gap-4 border-t border-white/10 p-8">
              <h3 className="font-display text-2xl text-white">{project.title}</h3>
              <p className="text-sm text-white/65">{project.description}</p>
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/40">
                <span>View Narrative</span>
                <span className="h-px w-14 origin-left scale-x-100 bg-gradient-to-r from-electric to-tech-blue" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}


