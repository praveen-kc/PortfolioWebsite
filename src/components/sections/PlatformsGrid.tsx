"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Heading2 } from "@/components/ui/Typography";

const PLATFORMS = [
  "Meta Quest",
  "HTC Vive",
  "Oculus Rift",
  "Kinect",
  "iOS",
  "Android",
  "WebGL",
  "PC",
  "Xbox 360",
  "PS2",
];

export function PlatformsGrid() {
  return (
    <section className="container-page py-[--section-padding-y]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionLabel className="section-label">Shipped On</SectionLabel>
        <Heading2>Platforms I&apos;ve delivered on</Heading2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-[--heading-to-body] mb-4">
        {PLATFORMS.map((platform, index) => (
          <motion.div
            key={platform}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div
              className={cn(
                "bg-elevated border border-border rounded-xl",
                "h-10 min-w-[80px] px-3",
                "flex items-center justify-center",
                "font-[family-name:var(--font-mono)] text-xs text-t2",
                "transition-all duration-200",
                "hover:border-primary/30 hover:bg-surface"
              )}
            >
              {platform}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
