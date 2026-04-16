"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CounterProps {
  from?: number;
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function Counter({
  from = 0,
  to,
  suffix = "",
  duration = 2,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const motionValue = useMotionValue(from);
  const prefersReducedMotion = useReducedMotion();
  const displayValue = useTransform(motionValue, (latest) =>
    Math.round(latest).toString()
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate(motionValue, to, {
            duration: prefersReducedMotion ? 0 : duration,
            onComplete: () => {
              if (!prefersReducedMotion) {
                setShowGlow(true);
                setTimeout(() => setShowGlow(false), 800);
              }
            }
          });
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [to, duration, motionValue, hasAnimated, prefersReducedMotion]);

  return (
    <span
      ref={ref}
      className={cn(
        "relative font-[family-name:var(--font-display)] font-bold text-t1",
        "text-[clamp(28px,4vw,48px)]",
        className
      )}
    >
      <motion.span
        className="relative z-10"
        animate={
          showGlow
            ? {
                scale: [1, 1.08, 1],
                color: ["#f0ede6", "#00e5a0", "#f0ede6"],
              }
            : { scale: 1 }
        }
        transition={{
          duration: 0.8,
          times: [0, 0.5, 1],
          ease: "easeInOut",
        }}
      >
        <motion.span>{displayValue}</motion.span>
        {suffix}
      </motion.span>
      {showGlow && (
        <motion.span
          className="absolute inset-0 blur-lg text-xr-green opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{ duration: 0.8 }}
        >
          <motion.span>{displayValue}</motion.span>
          {suffix}
        </motion.span>
      )}
    </span>
  );
}
