"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 bg-mesh">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Our Vision</h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            At LifeTracks, we believe that every human life is a unique masterpiece. 
            Our mission is to give you the tools to curate, document, and celebrate 
            your journey with the cinematic flair it deserves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="glass p-10 rounded-[2.5rem]">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
              <Sparkles className="text-white w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Cinematic Storytelling</h3>
            <p className="text-foreground/50 leading-relaxed">
              We don't just store data; we help you build a narrative. From the first steps 
              of a child to the summits of your career, LifeTracks turns raw memories 
              into a beautiful, interactive timeline.
            </p>
          </div>

          <div className="glass p-10 rounded-[2.5rem]">
            <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-secondary/20">
              <Shield className="text-white w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Uncompromising Privacy</h3>
            <p className="text-foreground/50 leading-relaxed">
              Your life is private. We use state-of-the-art encryption to ensure that 
              your memories belong to you and only you. No ads, no tracking, no 
              compromises.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
