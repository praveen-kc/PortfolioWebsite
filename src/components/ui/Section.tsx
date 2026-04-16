"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "container-page py-16 md:py-24",
        className
      )}
    >
      {children}
    </section>
  );
}

type SectionWithAnimationProps = SectionProps;

export function SectionWithAnimation({ id, className, children }: SectionWithAnimationProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "container-page py-16 md:py-24",
        className
      )}
    >
      {children}
    </motion.section>
  );
}
