export type ServiceDeliverable = { label: string; items: string[] };
export type ServiceFaq = { q: string; a: string };
export type ServiceDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  deliverables: ServiceDeliverable[];
  faqs: ServiceFaq[];
  seoTitle: string;
  seoDescription: string;
};

export const SERVICES: ServiceDetail[] = [
  {
    slug: "branding",
    title: "Strategic Branding",
    eyebrow: "Strategy-first brand systems",
    intro:
      "We don't just create content — we start with strategy. A deep-dive brand report defines your positioning, audience, and visual direction. Then we produce premium content built on that foundation.",
    deliverables: [
      { label: "Brand strategy report", items: ["Brand positioning & audience mapping", "Visual direction & style guide", "Content roadmap & narrative framework"] },
      { label: "Premium content production", items: ["5 short-form viral reels", "5 cinematic product shots", "AI-assisted environments & lighting", "High-end, brand-safe visuals"] },
    ],
    faqs: [
      { q: "What is included in the brand strategy report?", a: "Brand positioning, audience mapping, a visual direction and style guide, and a content roadmap with a narrative framework — the foundation everything else is built on." },
      { q: "How is this different from a normal content package?", a: "We start with strategy, not deliverables. Every reel and visual is produced against a defined positioning and visual system, so the work compounds your brand instead of being one-off content." },
    ],
    seoTitle: "AI Branding Agency — Brand Strategy + Premium Content",
    seoDescription:
      "Strategy-first branding from Swetkaar AI: a deep-dive brand report (positioning, audience, visual direction) plus premium AI-assisted reels and cinematic product visuals.",
  },
  {
    slug: "ai-films",
    title: "AI Films & Ads",
    eyebrow: "Cinematic ad films, AI-accelerated",
    intro:
      "Cinematic ad films crafted by VFX experts using AI — giving you traditional production quality in a fraction of the time. Human creative direction meets AI-powered execution.",
    deliverables: [
      { label: "Creative direction", items: ["Concept development & scripting", "Storyboard & shot planning", "Brand narrative & messaging strategy"] },
      { label: "Production & delivery", items: ["2 cinematic ad films by VFX experts using AI", "VFX compositing & motion design", "Sound design & visual polish", "Platform-optimized cutdowns for every channel"] },
    ],
    faqs: [
      { q: "How can AI ad films be both cinematic and fast?", a: "Our VFX artists use AI-accelerated pipelines for the heavy lifting while keeping human creative direction over concept, story, and final polish — traditional production quality in a fraction of the time." },
      { q: "What formats do I receive?", a: "Two cinematic ad films plus platform-optimized cutdowns for every channel, with VFX compositing, motion design, and sound design included." },
    ],
    seoTitle: "AI Ad Film Agency — Cinematic Ads Made with AI",
    seoDescription:
      "Swetkaar AI produces cinematic ad films by VFX experts using AI: concept, storyboard, production, VFX, sound design, and platform-optimized cutdowns — premium quality, delivered fast.",
  },
  {
    slug: "ai-consulting",
    title: "AI Consulting & Implementation",
    eyebrow: "Audit, roadmap, and build",
    intro:
      "You know AI matters — but where will it actually move the needle? Our AI product managers audit your operations, deliver an Impact Report with the highest-ROI opportunities, and build the solutions.",
    deliverables: [
      { label: "AI Impact Report", items: ["Operational audit & process mapping", "AI opportunity scoring with ROI estimates", "Prioritized implementation roadmap"] },
      { label: "Build & deploy", items: ["Custom AI agents & workflow automation", "Integration with your existing tools & stack", "Team training & handoff documentation"] },
    ],
    faqs: [
      { q: "Where do we start with AI?", a: "With an operational audit and an AI Impact Report that scores opportunities by ROI and gives you a prioritized implementation roadmap — so you invest where it actually moves the needle." },
      { q: "Do you only advise, or do you build the solutions?", a: "Both. We deliver the roadmap and then build it: custom AI agents and workflow automation, integrated with your existing stack, with team training and handoff documentation." },
    ],
    seoTitle: "AI Consulting & Automation Agency for Business",
    seoDescription:
      "Swetkaar AI audits your operations, delivers an ROI-scored AI Impact Report, then builds custom AI agents and workflow automation integrated with your stack.",
  },
];

export function getService(slug: string): ServiceDetail | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
