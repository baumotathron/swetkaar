import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Swetkaar AI for branding, AI films, consulting, or training. We respond within 48 hours. Hello@swetkaar.com.",
  alternates: { canonical: "https://swetkaar.ai/contact" },
  openGraph: {
    title: "Contact | Swetkaar AI",
    description:
      "Get in touch with Swetkaar AI for branding, AI films, consulting, or training. We respond within 48 hours.",
    url: "https://swetkaar.ai/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
