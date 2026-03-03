"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import {
  ArrowUpRight,
  GraduationCap,
  Building2,
  BookOpen,
  Brain,
  Target,
  Users,
  Rocket,
  BarChart3,
  Lightbulb,
  Search,
  Layout,
  Code2,
  LineChart,
  Megaphone,
  Briefcase,
  CheckCircle2,
  Calendar,
  Clock,
  Presentation,
  Wrench,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

/* ───────── curriculum ───────── */
const curriculum = [
  {
    num: "01",
    title: "Product vs Service",
    desc: "Understand the fundamental differences between products and services, pricing models, and how AI is reshaping the landscape.",
    icon: Lightbulb,
  },
  {
    num: "02",
    title: "What is Product Management?",
    desc: "Explore PM across industries — apps, robotics, FMCG, biopharma. Real-world case study: How Swiggy's PM team built India's food delivery giant.",
    icon: Search,
  },
  {
    num: "03",
    title: "Who is a Product Manager?",
    desc: "The 'salaried founder' role. How PM differs across startups, mid-size companies, and large organizations. Career paths and expectations.",
    icon: Users,
  },
  {
    num: "04",
    title: "How to Manage a Product?",
    desc: "Product Lifecycle, the Double Diamond framework, and the complete Product Management Map from problem to analytics.",
    icon: Target,
  },
  {
    num: "05",
    title: "Defining Problems & Market Research",
    desc: "Problem Statement, JTBD, 5 Whys, User Personas, Problem Matrix. Market sizing with TAM/SAM/SOM. Competitive analysis with PESTEL, Porter's 5 Forces, and SWOT.",
    icon: Search,
  },
  {
    num: "06",
    title: "Defining Solutions & Product Roadmap",
    desc: "Solution brainstorming, RICE & MoSCoW prioritization, Lean Business Canvas, Solution Hypothesis, and building time-bound product roadmaps.",
    icon: Rocket,
  },
  {
    num: "07",
    title: "Product Design Concepts + AI Tools",
    desc: "Design Systems, Component Libraries, Product Branding (Vision, Voice, Visuals). Hands-on wireframing and prototyping with AI design tools.",
    icon: Layout,
  },
  {
    num: "08",
    title: "Technical Concepts + AI Tools",
    desc: "AI fundamentals (ML, Deep Learning, GenAI). Tech stacks, APIs, servers, and hosting. Agile methodology — sprints, standups, user stories.",
    icon: Code2,
  },
  {
    num: "09",
    title: "Product Analytics",
    desc: "North Star Metric, Input/Output/Health metrics. Data-driven decision making with real dashboards and analytics tools.",
    icon: LineChart,
  },
  {
    num: "10",
    title: "Product Marketing + AI Tools",
    desc: "AARRR Pirate Funnel, Positioning Statements, Go-to-Market strategy. PM vs PMM roles. Key metrics: CAC, LTV, NPS, Activation, Retention.",
    icon: Megaphone,
  },
  {
    num: "11",
    title: "Capstone Case Study",
    desc: "Build a complete product from scratch — problem discovery to launch. Full case study: AI Lawyer for India with real market data, user personas, RICE scoring, roadmap, and metrics.",
    icon: Brain,
  },
  {
    num: "12",
    title: "Cracking Your First PM Role",
    desc: "PM career ladder (APM → PM → SPM), CV upgrade strategies, interview preparation, mock interviews, and outreach techniques.",
    icon: Briefcase,
  },
];

/* ───────── what participants build ───────── */
const outcomes = [
  {
    title: "2 End-to-End Case Studies",
    desc: "Solve real product problems across different domains — from problem discovery to product roadmap.",
  },
  {
    title: "AI-Powered MVP",
    desc: "Build a functional minimum viable product using AI tools — proving you can ship, not just strategize.",
  },
  {
    title: "Product Roadmap & Lean Canvas",
    desc: "Create investor-ready artifacts using industry frameworks like RICE, MoSCoW, and Lean Canvas.",
  },
  {
    title: "PM-Ready Portfolio",
    desc: "Walk out with a portfolio of case studies, an upgraded CV, and interview preparation for APM roles.",
  },
];

/* ───────── frameworks taught ───────── */
const frameworks = [
  "Double Diamond",
  "JTBD",
  "5 Whys",
  "Problem Matrix",
  "TAM / SAM / SOM",
  "PESTEL",
  "Porter's 5 Forces",
  "SWOT",
  "RICE",
  "MoSCoW",
  "Lean Canvas",
  "AARRR Funnel",
  "North Star Metric",
  "User Personas",
  "Agile & Sprints",
  "Solution Hypothesis",
];

/* ───────── delivery formats ───────── */
const deliveryFormats = [
  {
    icon: Presentation,
    title: "Guest Lecture",
    duration: "2 – 3 hours",
    desc: "High-impact awareness session introducing AI-powered product management to students.",
  },
  {
    icon: Calendar,
    title: "Workshop Series",
    duration: "2 – 5 days",
    desc: "Intensive, hands-on workshop with case studies, exercises, and AI tool demonstrations.",
  },
  {
    icon: BookOpen,
    title: "Semester Module",
    duration: "12 – 16 weeks",
    desc: "Full curriculum mapped to your academic calendar with assignments, projects, and evaluations.",
  },
  {
    icon: Wrench,
    title: "Faculty Development",
    duration: "Custom",
    desc: "Train-the-trainer program to equip your faculty with AI-integrated PM teaching capabilities.",
  },
];

export default function TrainingPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* ════════════════════ HERO ════════════════════ */}
        <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-6 pt-44 pb-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="orb left-[-120px] top-[-120px] h-[320px] w-[320px] bg-electric/40" />
            <div className="orb bottom-[-140px] right-[-120px] h-[260px] w-[260px] bg-gold/30" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-gold"
            >
              <GraduationCap className="h-4 w-4" />
              Training Program
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="mt-8 font-display text-4xl leading-[1.15] text-white md:text-5xl lg:text-6xl"
            >
              Product Management
              <br />
              <span className="text-gold">Powered by AI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70"
            >
              A comprehensive, hands-on program that teaches product management
              through real frameworks, real case studies, and real AI tools —
              not just theory.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="#curriculum"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-soft-gold"
              >
                View Curriculum
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-gold/60 bg-gradient-to-r from-gold/20 via-gold/15 to-transparent px-6 py-3 text-sm font-semibold text-gold transition hover:border-gold hover:bg-gold/20"
              >
                Request a Session
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════ AI TOOLS STRIP ════════════════════ */}
        <section className="relative mx-auto w-full max-w-5xl px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            className="rounded-[2rem] border border-white/10 bg-white/5 px-8 py-10"
          >
            <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              AI Tools You&apos;ll Master
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {[
                { name: "Claude", logo: "/logos/claude.svg" },
                { name: "Claude Code", logo: "/logos/claudecode.svg" },
                { name: "Cursor", logo: "/logos/cursor.svg" },
                { name: "Vercel", logo: "/logos/vercel.svg" },
                { name: "n8n", logo: "/logos/n8n.svg" },
                { name: "MCP", logo: "/logos/mcp.svg" },
                { name: "LangChain", logo: "/logos/langchain.svg" },
                { name: "Make", logo: "/logos/make.svg" },
              ].map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04, ease }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2.5 transition hover:border-gold/30 hover:bg-gold/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="h-full w-full object-contain opacity-70 transition hover:opacity-100"
                    />
                  </div>
                  <span className="text-[10px] font-medium text-white/40">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ════════════════════ PUNCHY STATEMENT ════════════════════ */}
        <section className="relative mx-auto w-full max-w-5xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="text-center"
          >
            <h2 className="mx-auto max-w-2xl font-display text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
              AI Doesn&apos;t Replace PMs.
              <br />
              <span className="text-gold">It Exposes the Ones Who Aren&apos;t Real.</span>
            </h2>
          </motion.div>
        </section>

        {/* ════════════════════ CURRICULUM ════════════════════ */}
        <section id="curriculum" className="relative mx-auto w-full max-w-5xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gold">
              <BookOpen className="h-4 w-4" />
              12 Modules
            </span>
            <h2 className="mt-6 font-display text-3xl text-white md:text-4xl">
              What You&apos;ll Learn
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-white/60">
              From foundational concepts to building and launching a product with AI — every module is designed to be practical and immediately applicable.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {curriculum.map((mod, i) => (
              <motion.div
                key={mod.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-gold/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold transition group-hover:bg-gold/20">
                    <mod.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold tracking-wider text-gold/60">
                        {mod.num}
                      </span>
                      <h3 className="font-display text-lg text-white">
                        {mod.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {mod.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ════════════════════ WHAT PARTICIPANTS BUILD ════════════════════ */}
        <section className="relative mx-auto w-full max-w-5xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gold">
              <Rocket className="h-4 w-4" />
              Hands-On Outcomes
            </span>
            <h2 className="mt-6 font-display text-3xl text-white md:text-4xl">
              What Participants Build
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-white/60">
              This isn&apos;t a lecture series. Every participant walks out with tangible, portfolio-ready work.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {outcomes.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="rounded-2xl border border-gold/20 bg-black/50 p-7 transition hover:border-gold/40 hover:bg-gold/5"
              >
                <div className="mb-3 flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" />
                  <h3 className="font-display text-lg text-white">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ════════════════════ FRAMEWORKS STRIP ════════════════════ */}
        <section className="relative mx-auto w-full max-w-5xl px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            className="rounded-[2rem] border border-white/10 bg-white/5 px-8 py-10"
          >
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              Frameworks & Methodologies Covered
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {frameworks.map((f, i) => (
                <motion.span
                  key={f}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03, ease }}
                  className="rounded-full border border-gold/25 bg-gold/5 px-4 py-2 text-xs font-medium text-white/70 transition hover:border-gold/50 hover:text-white"
                >
                  {f}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ════════════════════ FOR INSTITUTIONS ════════════════════ */}
        <section className="relative mx-auto w-full max-w-5xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
            className="overflow-hidden rounded-[2rem] border border-gold/30 bg-black/60"
          >
            <div className="border-b border-gold/20 px-8 py-8 md:px-12">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 text-gold">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-gold/70">
                    For Academic Institutions
                  </span>
                  <h2 className="font-display text-2xl text-white md:text-3xl">
                    Prepare Your Students for the Highest-Paying Tech Role
                  </h2>
                </div>
              </div>
            </div>

            <div className="px-8 py-10 md:px-12">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
                    Why This Matters
                  </h3>
                  <ul className="space-y-2.5 text-sm leading-relaxed text-white/65">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                      <span>Product Management roles start at 12+ LPA — among the highest for freshers in India</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                      <span>AI-integrated PM skills are the fastest-growing demand in tech hiring</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                      <span>Students build a job-ready portfolio, not just a certificate</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
                    What Students Get
                  </h3>
                  <ul className="space-y-2.5 text-sm leading-relaxed text-white/65">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                      <span>Hands-on experience with industry-standard AI tools and frameworks</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                      <span>Case studies from real Indian products (Swiggy, AI-based legal tech)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                      <span>Interview prep and CV upgrade for APM/PM roles at top companies</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
                    For Your Institution
                  </h3>
                  <ul className="space-y-2.5 text-sm leading-relaxed text-white/65">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                      <span>Strengthens placement outcomes with industry-relevant curriculum</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                      <span>Aligned with NEP 2020&apos;s emphasis on skill-based, industry-integrated learning</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                      <span>Flexible delivery — weekends, workshops, or full semester integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ════════════════════ DELIVERY FORMATS ════════════════════ */}
        <section className="relative mx-auto w-full max-w-5xl px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gold">
              <Clock className="h-4 w-4" />
              Flexible Delivery
            </span>
            <h2 className="mt-6 font-display text-3xl text-white md:text-4xl">
              Choose What Works for You
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {deliveryFormats.map((format, i) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-gold/30"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
                  <format.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base text-white">{format.title}</h3>
                <span className="mt-1 inline-block text-xs font-semibold text-gold/80">{format.duration}</span>
                <p className="mt-3 text-xs leading-relaxed text-white/55">{format.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ════════════════════ FOR CORPORATES ════════════════════ */}
        <section className="relative mx-auto w-full max-w-5xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
            className="overflow-hidden rounded-[2rem] border border-gold/30 bg-black/60"
          >
            <div className="border-b border-gold/20 px-8 py-8 md:px-12">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 text-gold">
                  <Building2 className="h-7 w-7" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-gold/70">
                    For Corporates & Professionals
                  </span>
                  <h2 className="font-display text-2xl text-white md:text-3xl">
                    Upskill Your Product Teams with AI
                  </h2>
                </div>
              </div>
            </div>

            <div className="px-8 py-10 md:px-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
                    For Product Teams
                  </h3>
                  <ul className="space-y-2.5 text-sm leading-relaxed text-white/65">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                      <span>Integrate AI into every stage of the product lifecycle — research, design, development, marketing</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                      <span>Move from gut-driven to data-driven product decisions using AI analytics</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                      <span>Build AI-powered MVPs faster — reduce ideation-to-launch timelines</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
                    For Aspiring PMs
                  </h3>
                  <ul className="space-y-2.5 text-sm leading-relaxed text-white/65">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                      <span>Transition into product management from engineering, design, or business roles</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                      <span>Build a portfolio that stands out — case studies, MVP, and AI-integrated workflows</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                      <span>Mock interviews, CV upgrade, and targeted preparation for PM hiring processes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ════════════════════ FINAL CTA ════════════════════ */}
        <section className="relative mx-auto w-full max-w-5xl px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="relative mx-auto max-w-2xl overflow-hidden rounded-[2rem] border border-gold/30 bg-gradient-to-br from-gold/[0.08] via-black/80 to-black/80 px-8 py-14 text-center"
          >
            <div className="absolute inset-0">
              <div className="orb -top-20 left-1/2 h-48 w-48 -translate-x-1/2 bg-gold/30 blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="font-display text-2xl text-white md:text-3xl">
                Interested? Let&apos;s Talk.
              </h2>
              <p className="mt-3 text-white/65">
                Whether you&apos;re an institution looking to add PM to your curriculum or a team
                looking to upskill — reach out and we&apos;ll design the right format for you.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold transition hover:border-gold hover:bg-gold/20"
              >
                <span>Get in Touch</span>
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
