"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TimelineEntry {
  company: string;
  role: string;
  period: string;
  description: string;
  highlight: string;
}

interface TimelineProps {
  entries: TimelineEntry[];
  className?: string;
}

export function Timeline({ entries, className }: TimelineProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn("space-y-0", className)}>
      {entries.map((entry, index) => (
        <motion.div
          key={entry.company}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: index * 0.1 }}
          className="relative pl-10 md:pl-14"
        >
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
          
          <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-xr-green border-2 border-surface" />

          <div className="bg-surface border border-border rounded-xl p-8 mb-8 last:mb-0">
            <div className="flex flex-col gap-2">
              <span className="font-[family-name:var(--font-mono)] text-sm text-xr-green">
                {entry.period}
              </span>
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-t1 text-xl">
                {entry.company}
              </h3>
              <p className="font-[family-name:var(--font-body)] text-base text-t2">
                {entry.role}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
