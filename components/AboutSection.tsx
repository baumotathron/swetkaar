"use client";

import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  })
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative mx-auto mt-32 w-full max-w-6xl overflow-hidden rounded-[3rem] border border-electric/20 bg-gradient-to-br from-white/5 via-white/0 to-white/5 px-6 py-24 backdrop-blur-2xl"
    >
      <div className="absolute inset-0">
        <div className="orb -top-24 left-16 h-56 w-56 bg-electric/50" />
        <div className="orb top-1/3 right-0 h-72 w-72 bg-tech-blue/40" />
      </div>
      <div className="relative grid gap-16 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-9">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60"
          >
            Our Philosophy
          </motion.span>
          <motion.h2
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={1}
            className="font-display text-3xl leading-tight text-white md:text-4xl"
          >
            Comprehensive AI services that transform how businesses operate, create, and market.
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={2}
            className="text-lg text-white/70"
          >
            We start with your business needs and deploy intelligent solutions across workflow automation, content creation, and marketing optimization. We engineer integrated systems where operational efficiency, creative production, and marketing performance converge to amplify business results.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col gap-4"
        >
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={3}
            className="grid gap-4 text-sm text-white/60"
          >
            <div className="rounded-3xl border border-electric/30 bg-black/60 p-5 transition hover:border-electric/60 hover:bg-electric/10">
              <h3 className="font-display text-lg text-electric">Business Process Automation</h3>
              <p className="mt-2 text-sm text-white/70">
                We identify opportunities across your operations and deploy intelligent automation systems that optimize workflows, reduce costs, and free resources for strategic initiatives.
              </p>
            </div>
            <div className="rounded-3xl border border-electric/30 bg-black/60 p-5 transition hover:border-electric/60 hover:bg-electric/10">
              <h3 className="font-display text-lg text-electric">Content & Marketing Platforms</h3>
              <p className="mt-2 text-sm text-white/70">
                From automated content generation to AI-driven marketing campaigns, we create integrated systems that produce, personalize, and optimize content to maximize engagement and conversion.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-8 flex flex-col gap-2.5 rounded-3xl border border-electric/25 bg-black/60 p-4"
      >
        <div className="absolute -top-20 right-8 h-48 w-48 rounded-full bg-electric/40 blur-3xl" />
        <h3 className="relative font-display text-lg text-white">The Swetkaar Method</h3>
        <ul className="relative grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-white/70">
          {[
            "Automate operations, reduce costs",
            "Scale content creation and distribution",
            "Optimize marketing performance",
            "Enterprise-scale solutions"
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/0 px-2.5 py-1.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-electric shadow-glow" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

