"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Palette, Film, Bot, ArrowRight } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease },
  }),
};

/* ── AI Terminal sequences ── */
const terminalSessions = [
  [
    { cmd: "Analyzing brand DNA", delay: 1200 },
    { cmd: "Generating visual systems", delay: 1000 },
    { cmd: "Crafting cinematic narratives", delay: 1100 },
    { cmd: "Deploying AI workflows", delay: 900 },
    { cmd: "Ready to transform", delay: 0, final: true },
  ],
  [
    { cmd: "Scanning market landscape", delay: 1100 },
    { cmd: "Building content pipeline", delay: 1000 },
    { cmd: "Training ad creative engine", delay: 1200 },
    { cmd: "Optimizing for conversion", delay: 900 },
    { cmd: "Launch sequence ready", delay: 0, final: true },
  ],
  [
    { cmd: "Auditing operations", delay: 1000 },
    { cmd: "Mapping automation targets", delay: 1100 },
    { cmd: "Building AI agents", delay: 1200 },
    { cmd: "Integrating with your stack", delay: 1000 },
    { cmd: "Systems online", delay: 0, final: true },
  ],
];

/* ── Typewriter hook ── */
function useTypewriter(sessions: typeof terminalSessions) {
  const [lines, setLines] = useState<
    { text: string; status: "typing" | "done" | "final" }[]
  >([]);
  const [sessionIdx, setSessionIdx] = useState(0);
  const cancelledRef = useRef(false);

  useEffect(() => {
    cancelledRef.current = false;
    const session = sessions[sessionIdx % sessions.length];
    let lineIdx = 0;
    let charIdx = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];

    setLines([]);

    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (!cancelledRef.current) fn();
      }, ms);
      timers.push(id);
    };

    const typeChar = () => {
      if (cancelledRef.current) return;
      const line = session[lineIdx];
      if (!line) return;

      if (charIdx <= line.cmd.length) {
        const currentLine = lineIdx;
        const currentChar = charIdx;
        setLines((prev) => {
          const updated = [...prev];
          updated[currentLine] = {
            text: line.cmd.slice(0, currentChar),
            status: currentChar === line.cmd.length ? "done" : "typing",
          };
          if (line.final && currentChar === line.cmd.length) {
            updated[currentLine].status = "final";
          }
          return updated;
        });
        charIdx++;
        schedule(typeChar, 25 + Math.random() * 20);
      } else {
        schedule(() => {
          lineIdx++;
          charIdx = 0;
          if (lineIdx < session.length) {
            typeChar();
          } else {
            schedule(() => {
              setSessionIdx((prev) => prev + 1);
            }, 4000);
          }
        }, line.delay);
      }
    };

    schedule(typeChar, 600);

    return () => {
      cancelledRef.current = true;
      timers.forEach(clearTimeout);
    };
  }, [sessionIdx, sessions]);

  return lines;
}

/* ── Service cards data ── */
const heroServices = [
  {
    icon: Palette,
    title: "Strategic Branding",
    desc: "Brand report + premium content production",
    href: "/services#strategic-branding",
  },
  {
    icon: Film,
    title: "AI Films & Ads",
    desc: "Cinematic ads by VFX experts using AI",
    href: "/services#ai-films-ads",
  },
  {
    icon: Bot,
    title: "AI Consulting",
    desc: "Impact audit + custom AI implementation",
    href: "/services#ai-consulting",
  },
];

/* ── Component ── */
export function Hero() {
  const terminalLines = useTypewriter(terminalSessions);

  return (
    <section
      id="top"
      className="relative flex flex-col justify-center overflow-hidden px-6 pt-44 pb-24 text-white"
    >
      {/* Background orbs — same as services page */}
      <div className="pointer-events-none absolute inset-0">
        <div className="orb left-[-120px] top-[-120px] h-[320px] w-[320px] bg-electric/40" />
        <div className="orb bottom-[-140px] right-[-120px] h-[260px] w-[260px] bg-gold/30" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
        {/* Left — headline */}
        <div className="flex-1">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-[3.75rem]"
          >
            The Perfect Fusion of{" "}
            <span className="text-gold">Human Imagination</span>{" "}
            & AI Power
          </motion.h1>
          <motion.p
            variants={container}
            initial="hidden"
            animate="visible"
            custom={0.18}
            className="mt-6 max-w-xl text-lg text-white/70"
          >
            Premium branding, cinematic ad films, and AI automations
            that drive real revenue — delivered in weeks, not months.
          </motion.p>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            custom={0.26}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-soft-gold hover:shadow-[0_0_30px_rgba(253,197,0,0.25)]"
            >
              Book a free call
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Right — AI Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="flex flex-1 justify-center lg:mt-6"
        >
          <div className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-[0_0_60px_rgba(74,159,229,0.08)] backdrop-blur-xl">
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-white/10" />
              <div className="h-3 w-3 rounded-full bg-white/10" />
              <div className="h-3 w-3 rounded-full bg-white/10" />
              <span className="ml-2 text-[11px] uppercase tracking-[0.25em] text-white/25">
                swetkaar.ai
              </span>
            </div>
            {/* Terminal body */}
            <div className="min-h-[220px] px-5 py-4 font-mono text-sm leading-relaxed">
              {terminalLines.map((line, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="select-none text-electric/50">&gt;</span>
                  <span
                    className={
                      line.status === "final"
                        ? "text-gold"
                        : "text-white/70"
                    }
                  >
                    {line.text}
                  </span>
                  {line.status === "typing" && (
                    <span className="terminal-cursor" />
                  )}
                  {line.status === "done" && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, ease }}
                      className="ml-auto text-xs text-emerald-400/80"
                    >
                      done
                    </motion.span>
                  )}
                  {line.status === "final" && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="terminal-cursor"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3 Service cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        custom={0.45}
        className="relative z-10 mx-auto mt-20 w-full max-w-6xl"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {heroServices.map((svc, i) => (
            <Link key={svc.title} href={svc.href}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease }}
                className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-gold/40 hover:bg-gold/[0.06]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold transition group-hover:border-gold/50 group-hover:bg-gold/20">
                  <svc.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">
                    {svc.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/50 transition group-hover:text-white/70">
                    {svc.desc}
                  </p>
                </div>
                <ArrowRight className="ml-auto mt-1 h-4 w-4 shrink-0 text-white/20 transition group-hover:translate-x-1 group-hover:text-gold" />
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
