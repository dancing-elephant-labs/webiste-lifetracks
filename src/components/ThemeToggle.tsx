"use client";

import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center rounded-xl glass hover:bg-white/10 transition-colors"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait">
        {!mounted ? (
          <div key="placeholder" className="w-5 h-5" />
        ) : theme === "dark" ? (
          <motion.div
            key="moon"
            initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-5 h-5 text-foreground" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ scale: 0.5, opacity: 0, rotate: 45 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-5 h-5 text-foreground" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
