"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";

export default function Footer() {
  const { theme, mounted } = useTheme();

  return (
    <footer className="py-16 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <div className="relative w-32 h-10 overflow-hidden">
              {mounted && (
                <Image
                  src={theme === "light" ? "/images/logo-light.svg" : "/images/logo-dark.svg"}
                  alt="LifeTracks Logo"
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              )}
            </div>
          </Link>
          <div className="flex flex-wrap justify-center gap-10 text-sm font-medium text-foreground/50">
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <a href="mailto:support@lifetracks.app" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <p className="text-sm text-foreground/30 font-medium text-center md:text-right">
            © 2026 LifeTracks. <br className="md:hidden" />
            A Product of Dancing Elephant Labs.
          </p>
        </div>
      </div>
    </footer>
  );
}
