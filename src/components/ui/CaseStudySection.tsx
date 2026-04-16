"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface CaseStudySectionProps {
  children: ReactNode;
  className?: string;
}

export function CaseStudySection({ children, className }: CaseStudySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
