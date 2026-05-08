"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import { useTheme } from "@/hooks/useTheme";

export default function Home() {
  const { theme, mounted } = useTheme();
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 bg-mesh overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeatureSection />
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="glass-elevated p-12 md:p-24 rounded-[4rem] relative overflow-hidden text-center">
            {/* Decorative Background Elements */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-secondary/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                Ready to start your <br />
                <span className="text-gradient">Timeline?</span>
              </h2>
              <p className="text-foreground/60 text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed">
                Join thousands of people who are already documenting their lives 
                with LifeTracks. Available now on iOS and Android.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30">
                  Download for iOS
                </button>
                <button className="w-full sm:w-auto bg-foreground/5 text-foreground border border-border px-10 py-5 rounded-2xl font-bold text-xl hover:bg-foreground/10 hover:scale-105 active:scale-95 transition-all shadow-lg backdrop-blur-sm">
                  Download for Android
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
