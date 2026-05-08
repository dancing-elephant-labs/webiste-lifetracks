"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play, Sparkles, Users, History, Cloud } from "lucide-react";

import { useTheme } from "@/hooks/useTheme";

export default function Hero() {
  const { theme, mounted } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-32 overflow-hidden bg-mesh">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="container mx-auto mt-10 px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-1 px-4 py-2 rounded-full glass mb-8 text-sm font-medium text-primary border-primary/20"
        >
          <div className="relative w-32 h-8 overflow-hidden">
            <Image
              src={!mounted || theme === "dark" ? "/images/logo-dark.svg" : "/images/logo-light.svg"}
              alt="Logo"
              fill
              sizes="128px"
              className="object-contain"
              priority
              loading="eager"
            />
          </div>
          <span>The future of personal storytelling</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight"
        >
          Your Life is a <br />
          <span className="text-gradient">Masterpiece</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/60 mb-12"
        >
          Capture every milestone, every feeling, and every memory in a beautiful,
          interactive timeline. LifeTracks helps you document your journey
          with cinematic flair.
        </motion.p>

        {/* Hero Image Mockup (Refined to match app UI) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="glass-elevated rounded-[3rem] p-3 sm:p-6 rotate-x-6 border-border">
            <div className="aspect-video rounded-[2rem] bg-surface overflow-hidden relative">
              {/* Simulated App UI (Profile List / Timeline) */}
              <div className="absolute inset-0 bg-linear-to-br from-surface to-background flex flex-col p-8">
                <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center gap-3">
                    <div className="relative w-24 h-6 overflow-hidden">
                      <Image
                        src={!mounted || theme === "dark" ? "/images/logo-dark.svg" : "/images/logo-light.svg"}
                        alt="Logo"
                        fill
                        sizes="96px"
                        className="object-contain"
                        priority
                        loading="eager"
                      />
                    </div>
                    <div className="w-16 h-4 bg-foreground/20 rounded-full" />
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-foreground/5 rounded-2xl border border-border flex items-center justify-center">
                      <Users className="w-5 h-5 text-foreground/40" />
                    </div>
                    <div className="w-10 h-10 bg-primary/20 rounded-2xl border border-primary/30 flex items-center justify-center">
                      <History className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  {[
                    { name: "My Journey", color: "bg-primary/20" },
                    { name: "Family Vault", color: "bg-secondary/20" },
                    { name: "Global Travels", color: "bg-accent/20" }
                  ].map((profile, i) => (
                    <div key={i} className="aspect-[4/5] glass rounded-3xl p-6 flex flex-col gap-4 border-border hover:border-foreground/20 transition-all cursor-pointer">
                      <div className={`w-full h-2/3 ${profile.color} rounded-2xl flex items-center justify-center`}>
                        <div className="w-12 h-12 rounded-full bg-foreground/10 blur-xl" />
                      </div>
                      <div className="w-3/4 h-3 bg-foreground/20 rounded-full" />
                      <div className="w-1/2 h-2 bg-foreground/10 rounded-full" />
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-4">
                  <div className="w-full h-16 glass rounded-[1.5rem] flex items-center px-8 justify-between border-border">
                    <div className="flex items-center gap-3">
                      <Cloud className="w-5 h-5 text-secondary" />
                      <div className="w-32 h-3 bg-foreground/10 rounded-full" />
                    </div>
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                      <ArrowRight className="w-6 h-6 text-background" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Floating UI Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 glass-elevated p-5 rounded-3xl shadow-2xl hidden lg:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-32 h-12 bg-foreground/10 rounded-2xl flex items-center justify-center overflow-hidden relative">
                {mounted && (
                  <Image
                    src={theme === "light" ? "/images/logo-light.svg" : "/images/logo-dark.svg"}
                    alt="Logo"
                    fill
                    sizes="128px"
                    className="object-contain p-2"
                  />
                )}
              </div>
              <div>
                <p className="text-xs text-foreground/50 font-bold uppercase tracking-wider">New Memory</p>
                <p className="text-base text-foreground font-black">Summers in Tokyo</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
