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

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.swetkaar.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.swetkaar.com/services"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Strategic Branding",
      "serviceType": "Brand strategy & premium content production",
      "description": "Brand strategy report plus premium content production — positioning, visual direction, and high-end AI-assisted reels and product visuals.",
      "provider": {
        "@id": "https://www.swetkaar.com/#organization"
      },
      "areaServed": "Worldwide",
      "url": "https://www.swetkaar.com/services#strategic-branding"
    },
    {
      "@type": "Service",
      "name": "AI Films & Ads",
      "serviceType": "AI-powered ad film & VFX production",
      "description": "Cinematic ad films crafted by VFX experts using AI — concept, storyboard, production, VFX, sound design, and platform-optimized cutdowns.",
      "provider": {
        "@id": "https://www.swetkaar.com/#organization"
      },
      "areaServed": "Worldwide",
      "url": "https://www.swetkaar.com/services#ai-films-ads"
    },
    {
      "@type": "Service",
      "name": "AI Consulting & Implementation",
      "serviceType": "AI consulting & workflow automation",
      "description": "AI impact audit with ROI-scored opportunities, then custom AI agents and workflow automation integrated with your stack.",
      "provider": {
        "@id": "https://www.swetkaar.com/#organization"
      },
      "areaServed": "Worldwide",
      "url": "https://www.swetkaar.com/services#ai-consulting"
    }
  ]
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      {children}
    </>
  );
}
