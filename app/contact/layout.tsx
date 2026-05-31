import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Start Your AI Branding or Ad Film Project",
  description:
    "Get in touch with Swetkaar AI for branding, AI films, consulting, or training. We respond within 48 hours. Hello@swetkaar.com.",
  alternates: { canonical: "https://www.swetkaar.com/contact" },
  openGraph: {
    title: "Contact | Swetkaar AI",
    description:
      "Get in touch with Swetkaar AI for branding, AI films, consulting, or training. We respond within 48 hours.",
    url: "https://www.swetkaar.com/contact",
  },
};

const contactJsonLd = {
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
          "name": "Contact",
          "item": "https://www.swetkaar.com/contact"
        }
      ]
    }
  ]
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  );
}
