"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "framer-motion";

export function ReadingProgress() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-16 left-0 right-0 h-[2px] z-[60] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(to right, var(--primary), var(--xr-green))",
      }}
    />
  );
}
