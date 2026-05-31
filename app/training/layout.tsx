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
    },
    {
      "@type": "Course",
      "name": "AI-Powered Product Management",
      "description": "Hands-on product management training built on real frameworks, case studies, and AI tools — from problem definition and market research to roadmaps, analytics, and go-to-market. For individuals and institutions.",
      "provider": {
        "@id": "https://www.swetkaar.com/#organization",
        "name": "Swetkaar AI",
        "sameAs": "https://www.swetkaar.com"
      },
      "url": "https://www.swetkaar.com/training",
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "description": "Guest lectures and multi-day workshops for institutions and teams."
        },
        {
          "@type": "CourseInstance",
          "courseMode": "blended",
          "description": "Semester module integrated with your academic calendar."
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
