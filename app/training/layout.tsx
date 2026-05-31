import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Product Management Training & Workshops",
  description:
    "Product management and AI training programs by Swetkaar AI. Live cohorts, hands-on curriculum from problem definition to analytics, design and tech concepts with AI tools. For individuals and institutions.",
  alternates: { canonical: "https://www.swetkaar.com/training" },
  openGraph: {
    title: "AI Product Management Training & Workshops | Swetkaar AI",
    description:
      "Product management and AI training programs. Live cohorts, hands-on curriculum, design and tech with AI tools. For individuals and institutions.",
    url: "https://www.swetkaar.com/training",
  },
};

const trainingJsonLd = {
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
          "name": "Training",
          "item": "https://www.swetkaar.com/training"
        }
      ]
    }
  ]
};

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingJsonLd) }}
      />
      {children}
    </>
  );
}
