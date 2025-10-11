import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Comparison } from "@/components/Comparison";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Comparison />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
