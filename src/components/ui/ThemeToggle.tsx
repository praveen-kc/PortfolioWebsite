"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { Button } from "./Button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  const handleToggle = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTheme(isDark ? "light" : "dark");
      setTimeout(() => setIsTransitioning(false), 150);
    }
  };

  return (
    <Button
      variant="icon"
      size="sm"
      aria-label="Toggle theme"
      onClick={handleToggle}
      disabled={isTransitioning}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={mounted && isDark ? "moon" : "sun"}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {mounted && isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
}
