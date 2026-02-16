import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { WhySection } from "@/components/WhySection";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <WhySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}


