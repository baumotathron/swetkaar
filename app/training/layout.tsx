import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Product management and AI training programs by Swetkaar AI. Live cohorts, hands-on curriculum from problem definition to analytics, design and tech concepts with AI tools. For individuals and institutions.",
  alternates: { canonical: "https://swetkaar.ai/training" },
  openGraph: {
    title: "Training | Swetkaar AI",
    description:
      "Product management and AI training programs. Live cohorts, hands-on curriculum, design and tech with AI tools. For individuals and institutions.",
    url: "https://swetkaar.ai/training",
  },
};

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
