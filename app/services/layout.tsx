import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Branding, Ad Films & AI Consulting Services",
  description:
    "AI-powered branding, cinematic ad films, and custom AI automation for brands. Strategy-first creative delivered in weeks — explore Swetkaar AI services.",
  alternates: { canonical: "https://www.swetkaar.com/services" },
  openGraph: {
    title: "AI Branding, Ad Films & AI Consulting | Swetkaar AI",
    description:
      "AI-powered branding, cinematic ad films, and custom AI automation for brands. Strategy-first creative delivered in weeks — explore Swetkaar AI services.",
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
