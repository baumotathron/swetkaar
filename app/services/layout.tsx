import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategic branding, AI films & ads, and AI automations. Video content, cinematic product visuals, hero ad films, intelligent analytics, agentic AI systems, and custom AI integration.",
  alternates: { canonical: "https://www.swetkaar.com/services" },
  openGraph: {
    title: "Services | Swetkaar AI",
    description:
      "Strategic branding, AI films & ads, and AI automations. Video content, cinematic product visuals, hero ad films, intelligent analytics, agentic AI systems, and custom AI integration.",
    url: "https://www.swetkaar.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
