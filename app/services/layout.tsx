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
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does Swetkaar AI do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Swetkaar AI is an AI-powered creative agency offering strategic branding, cinematic AI ad films, and AI consulting & automation — combining human creative direction with AI-accelerated execution."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can you deliver a project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most projects ship in weeks, not months, because we pair senior creative direction with AI-accelerated production."
          }
        },
        {
          "@type": "Question",
          "name": "Do you replace human creatives with AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. AI amplifies our speed and scale, while strategy, taste, and creative direction stay human."
          }
        },
        {
          "@type": "Question",
          "name": "What does an AI ad film project include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Concept and scripting, storyboard and shot planning, VFX production using AI, sound design, and platform-optimized cutdowns for every channel."
          }
        },
        {
          "@type": "Question",
          "name": "How do we get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Book a free call from the contact page. We respond within 48 hours with a tailored collaboration map."
          }
        }
      ]
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
