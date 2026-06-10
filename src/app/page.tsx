"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 bg-mesh overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeatureSection />
      <Footer />
    </main>
  );
}
