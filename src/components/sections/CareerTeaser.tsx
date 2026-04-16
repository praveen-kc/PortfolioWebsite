"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const CAREER_STEPS = [
  {
    company: "Clite Technologies",
    role: "Unity Developer",
    period: "2012 – 2014",
  },
  {
    company: "ThinkHi",
    role: "Unity Developer",
    period: "2014 – 2019",
  },
  {
    company: "Sify Technologies",
    role: "Lead Unity Developer",
    period: "2019 – Present",
  },
];

export function CareerTeaser() {
  return (
    <section className="container-page py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <SectionLabel className="mb-4">Experience</SectionLabel>
      </motion.div>

      <div className="relative">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-8">
          {CAREER_STEPS.map((step, index) => (
            <motion.div
              key={step.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex-1 text-center md:text-left"
            >
              <div className="flex items-center gap-4 md:flex-col md:gap-2">
                <div className="flex-1 md:flex-none">
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-t1">
                    {step.company}
                  </h3>
                  <p className="text-sm text-t2 mt-1">{step.role}</p>
                  <span className="text-xs font-[family-name:var(--font-mono)] text-xr-green">
                    {step.period}
                  </span>
                </div>
                {index < CAREER_STEPS.length - 1 && (
                  <div className="hidden md:block w-16 h-px md:w-auto md:h-8 bg-border mx-4 md:mx-0" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <Link
            href="/about#timeline"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-[family-name:var(--font-body)] font-medium"
          >
            See full timeline
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
