import Navbar from "@/components/layout/Navbar";
import OpeningAnimation from "@/components/OpeningAnimation";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import { Stats } from "@/components/ui/statistics-card";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <OpeningAnimation />
      <Navbar />
      <Hero />
      <ServicesSection />
      <Stats />
      <Footer />
    </main>
  );
}
