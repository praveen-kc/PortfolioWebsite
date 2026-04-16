"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";
import { GradientText } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { trackResumeDownload } from "@/lib/analytics";

const HeroParticles = dynamic(
  () => import("@/components/3d/HeroParticles").then((mod) => mod.HeroParticles),
  { ssr: false }
);

const ROLES = ["Lead Unity Developer", "XR Architect", "Creative Technologist"];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setShowScrollIndicator(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col" suppressHydrationWarning>
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at center, var(--text-3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none animate-[pan_8s_linear_infinite]"
        style={{
          backgroundImage: "radial-gradient(circle at center, var(--text-3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <HeroParticles className="absolute inset-0 z-0" />

      <div className="flex-1 flex items-center justify-center container-page relative z-10">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <AvailabilityBadge showText />
          </motion.div>

          <h1 className="mb-4 text-center">
            <span className="font-[family-name:var(--font-display)] font-bold text-t1 tracking-tight text-[clamp(40px,6vw,72px)] leading-[1.1] block">
              I build the future of
            </span>
            <span className="inline-block mt-2">
              <GradientText>
                {" immersive XR".split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + charIndex * 0.06 }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </GradientText>
            </span>
          </h1>

          <div className="h-7 overflow-hidden" style={{ marginBottom: "32px" }}>
            <AnimatePresence mode="wait">
              <motion.p
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-[20px] font-[family-name:var(--font-body)] font-normal text-t2 text-center"
              >
                {ROLES[currentRole]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-base md:text-lg text-t2 mx-auto text-center leading-relaxed"
            style={{ paddingBottom: "24px" }}
          >
            12+ years delivering enterprise VR training simulations, WebGL interactive experiences, and cross-platform XR solutions for aerospace, manufacturing, and retail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap justify-center gap-8"
            style={{ paddingTop: "24px" }}
          >
            <Button variant="primary" size="lg" asChild>
              <Link href="/work">View My Work</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="/docs/PraveenKC-CV.pdf" download onClick={trackResumeDownload}>
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{ opacity: scrollOpacity }}
        className={cn(
          "transition-opacity duration-300",
          !showScrollIndicator && "opacity-0 pointer-events-none"
        )}
      >
        <div className="border-t border-border py-6 md:py-8">
          <div className="container-page">
            <div className="flex flex-wrap justify-center items-start md:items-center gap-6 md:gap-12">
              <div className="text-center">
                <Counter to={12} suffix="+" className="block" />
                <span className="text-[11px] font-[family-name:var(--font-mono)] text-t3 uppercase tracking-wider">
                  Years Experience
                </span>
              </div>
              <div className="w-px h-12 bg-border hidden md:block" />
              <div className="text-center">
                <Counter to={19} suffix="+" className="block" />
                <span className="text-[11px] font-[family-name:var(--font-mono)] text-t3 uppercase tracking-wider">
                  Projects Shipped
                </span>
              </div>
              <div className="w-px h-12 bg-border hidden md:block" />
              <div className="text-center">
                <Counter to={3} className="block" />
                <span className="text-[11px] font-[family-name:var(--font-mono)] text-t3 uppercase tracking-wider">
                  Companies Served
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollIndicator ? 1 : 0 }}
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300",
          !showScrollIndicator && "opacity-0 pointer-events-none"
        )}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-t3" />
        </motion.div>
      </motion.div>
    </section>
  );
}
