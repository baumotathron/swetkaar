"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Instagram, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function InstagramPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-6 pt-32">
          <div className="absolute inset-0">
            <div className="orb top-[-120px] left-[-120px] h-[320px] w-[320px] bg-electric/60" />
            <div className="orb bottom-[-140px] right-[-120px] h-[260px] w-[260px] bg-gold/60" />
          </div>
          
          <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 opacity-20 blur-2xl" />
                <Instagram className="relative h-16 w-16 text-white" />
              </div>
              <h1 className="font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
                Follow Our Creative Journey
              </h1>
              <p className="mt-6 text-lg text-white/70 md:text-xl">
                Experience our latest work, behind-the-scenes moments, and creative insights on Instagram
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a
                href="https://www.instagram.com/swetkaar.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-gold/50 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 px-8 py-4 text-base font-semibold uppercase tracking-[0.3em] text-white transition hover:border-gold hover:from-purple-500/30 hover:via-pink-500/30 hover:to-orange-500/30"
              >
                <Instagram className="h-5 w-5" />
                <span>Visit @swetkaar.ai</span>
                <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative mx-auto mt-20 w-full max-w-6xl px-6 pb-32">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature Cards */}
            {[
              {
                icon: Sparkles,
                title: "Latest Work",
                description: "See our newest projects and creative outputs"
              },
              {
                icon: Instagram,
                title: "Behind the Scenes",
                description: "Get insights into our creative process"
              },
              {
                icon: ArrowUpRight,
                title: "Community",
                description: "Join our growing community of creators"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-electric/30 bg-black/70 p-8 transition hover:border-electric/70 hover:bg-electric/10"
              >
                <div className="absolute inset-px -z-10 rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="h-full w-full rounded-3xl bg-gradient-to-br from-electric/40 via-transparent to-tech-blue/40 blur-xl" />
                </div>
                <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-electric/40 bg-electric/15 text-electric">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-xl text-white">{feature.title}</h3>
                <p className="text-sm text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto mt-20 max-w-3xl overflow-hidden rounded-[3rem] border border-gold/40 bg-black/80 px-8 py-16 text-center"
          >
            <div className="absolute inset-0">
              <div className="orb -top-28 left-10 h-64 w-64 bg-gold/40 blur-3xl" />
              <div className="orb bottom-0 right-0 h-72 w-72 bg-electric/40 blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="mb-4 font-display text-3xl text-white md:text-4xl">
                Ready to See More?
              </h2>
              <p className="mb-8 text-white/70">
                Follow us on Instagram for daily inspiration, project updates, and creative insights
              </p>
              <a
                href="https://www.instagram.com/swetkaar.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-gold/50 bg-gold/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold transition hover:border-gold hover:bg-gold/20"
              >
                <Instagram className="h-5 w-5" />
                <span>Follow @swetkaar.ai</span>
                <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

