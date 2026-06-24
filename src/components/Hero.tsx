"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
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
              src="/images/logo-dark.png"
              alt="Kintra Logo"
              fill
              sizes="150px"
              className="object-contain logo-dark-theme"
              loading="eager"
            />
            <Image
              src="/images/logo-light.png"
              alt="Kintra Logo"
              fill
              sizes="150px"
              className="object-contain logo-light-theme"
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
          interactive timeline. Kintra helps you document your journey
          with cinematic flair.
        </motion.p>

        <motion.div
          id="download"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 scroll-mt-32"
        >
          <button
            onClick={() => alert("Kintra for iOS is coming soon! Feel free to join our Android testing program in the meantime.")}
            className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/30 cursor-pointer"
          >
            Download for iOS
          </button>
          <a
            href="https://play.google.com/apps/testing/com.delabs.life_tracks"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-foreground/5 text-foreground border border-border px-8 py-4 rounded-xl font-bold text-lg hover:bg-foreground/10 hover:scale-105 active:scale-95 transition-all shadow-md backdrop-blur-sm cursor-pointer"
          >
            Download for Android
          </a>
        </motion.div>
      </div>
    </section>
  );
}
