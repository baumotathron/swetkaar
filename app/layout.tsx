import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne"
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.swetkaar.com'),
  title: {
    default: "AI Creative Agency — Branding, AI Ad Films & Automation | Swetkaar AI",
    template: "%s | Swetkaar AI"
  },
  description:
    "Swetkaar AI is an AI-powered creative agency delivering premium branding, cinematic AI ad films, and AI automation that drives real revenue — strategy-first work shipped in weeks, not months.",
  keywords: [
    "AI creative agency",
    "branding and identity",
    "AI storytelling",
    "social media growth",
    "creative direction",
    "AI-powered film",
    "VFX production",
    "content creation",
    "web experiences",
    "immersive design",
    "generative AI",
    "brand transformation"
  ],
  authors: [{ name: "Swetkaar AI" }],
  creator: "Swetkaar AI",
  publisher: "Swetkaar AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.swetkaar.com",
    siteName: "Swetkaar AI",
    title: "AI Creative Agency — Branding, AI Ad Films & Automation | Swetkaar AI",
    description:
      "AI-powered branding, cinematic AI ad films, and AI automation that drives real revenue — premium creative delivered in weeks, not months.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Creative Agency — Branding, AI Ad Films & Automation | Swetkaar AI",
    description:
      "AI-powered branding, cinematic AI ad films, and AI automation that drives real revenue — premium creative delivered in weeks, not months.",
    creator: "@swetkaarai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://www.swetkaar.com",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.swetkaar.com/#organization",
  "name": "Swetkaar AI",
  "url": "https://www.swetkaar.com",
  "logo": "https://www.swetkaar.com/swetkaar_logo.webp",
  "image": "https://www.swetkaar.com/swetkaar_logo.webp",
  "description": "Swetkaar AI is an AI-powered creative agency delivering premium branding, cinematic AI ad films, and AI automation that drives real revenue.",
  "email": "hello@swetkaar.com",
  "telephone": "+91-9825375509",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "hello@swetkaar.com",
    "telephone": "+91-9825375509",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://www.instagram.com/swetkaar.ai/"
  ],
  "areaServed": "Worldwide",
  "serviceType": [
    "Branding & Identity",
    "Social Media & Growth",
    "Creative Direction",
    "AI-Powered Film & VFX",
    "Content Creation",
    "Web Experiences"
  ]
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Swetkaar AI",
  "url": "https://www.swetkaar.com",
  "description": "Next-Generation Creative Agency specializing in AI-powered branding, storytelling, and immersive experiences.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.swetkaar.com?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon-dark.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#0066ff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
      </head>
      <body
        className={cn(
          syne.variable,
          manrope.variable,
          "bg-midnight text-white font-body antialiased selection:bg-electric/60 selection:text-white"
        )}
      >
        <div className="fixed inset-0 -z-10 bg-midnight">
          <div className="absolute inset-0 bg-orb-gradient opacity-60" />
          <div className="absolute inset-0 noise-bg" />
        </div>
        {children}
      </body>
    </html>
  );
}


