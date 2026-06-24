"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="glass w-full max-w-7xl rounded-2xl px-6 py-3 flex items-center justify-between"
      >
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <div className="relative w-32 h-10 overflow-hidden">
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
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/#features" className="hover:text-primary transition-colors">Features</Link>
          <ThemeToggle />
          <Link href="/#download" className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl transition-all font-bold shadow-lg shadow-primary/25 hover:scale-105 active:scale-95 cursor-pointer text-center">
            Download App
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute top-20 left-4 right-4 glass-elevated rounded-2xl p-8 md:hidden flex flex-col gap-6 text-center shadow-2xl backdrop-blur-3xl"
        >
          <Link href="/about" className="text-xl font-semibold text-foreground/70 hover:text-foreground py-3 border-b border-border" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/#features" className="text-xl font-semibold text-foreground/70 hover:text-foreground py-3 border-b border-border" onClick={() => setIsOpen(false)}>Features</Link>
          <a href="#" className="text-xl font-semibold text-foreground/70 hover:text-foreground py-3 border-b border-border" onClick={() => setIsOpen(false)}>Community</a>
          <Link href="/#download" className="bg-primary text-white px-5 py-4 rounded-xl font-bold text-lg mt-4 shadow-xl shadow-primary/20 cursor-pointer text-center" onClick={() => setIsOpen(false)}>
            Download App
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
