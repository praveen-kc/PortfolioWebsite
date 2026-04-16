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
    if (prefersReducedMotion) {
      motionValue.set(to);
      return;
    }

    const triggerAnimation = () => {
      if (!hasAnimated) {
        setHasAnimated(true);
        animate(motionValue, to, {
          duration,
          onComplete: () => {
            setShowGlow(true);
            setTimeout(() => setShowGlow(false), 800);
          }
        });
      }
    };

    const element = ref.current;
    if (!element) return;

    if (element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().bottom > 0) {
      triggerAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          triggerAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "100px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [to, duration, motionValue, hasAnimated, prefersReducedMotion]);

  useEffect(() => {
    if (!prefersReducedMotion && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
        animate(motionValue, to, {
          duration,
          onComplete: () => {
            setShowGlow(true);
            setTimeout(() => setShowGlow(false), 800);
          }
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [prefersReducedMotion, hasAnimated, motionValue, to, duration]);

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
                color: ["var(--text-1)", "var(--xr-green)", "var(--text-1)"],
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
