import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function useScrollFade(start = 0, end = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(
    scrollYProgress,
    [start, end],
    prefersReducedMotion ? [1, 1] : [0, 1]
  );
  const y = useTransform(
    scrollYProgress,
    [start, end],
    prefersReducedMotion ? [0, 0] : [40, 0]
  );

  return { ref, opacity, y };
}

export function useScrollScale(start = 0, end = 0.2, scaleStart = 0.95) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(
    scrollYProgress,
    [start, end],
    prefersReducedMotion ? [1, 1] : [scaleStart, 1]
  );

  return { ref, scale };
}

export function usePathDraw(start = 0, end = 1) {
  const ref = useRef<SVGPathElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const pathLength: MotionValue<number> = useTransform(
    scrollYProgress,
    [start, end],
    prefersReducedMotion ? [1, 1] : [0, 1]
  );

  return { ref, pathLength };
}
