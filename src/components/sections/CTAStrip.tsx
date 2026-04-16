"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heading2 } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

export function CTAStrip() {
  return (
    <section className="bg-elevated border-y border-border" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container-page text-center"
      >
        <Heading2>Let&apos;s build something remarkable together.</Heading2>
        <p className="text-t2 max-w-md mx-auto" style={{ marginTop: "20px", marginBottom: "28px" }}>
          Available for senior Unity/XR roles — remote or hybrid.
        </p>
        <div className="flex flex-wrap justify-center" style={{ gap: "16px" }}>
          <Button variant="primary" asChild className="py-3 rounded-[8px] text-[15px] font-[500] leading-[1.5] h-[48px] whitespace-nowrap" style={{ paddingLeft: "32px", paddingRight: "32px" }}>
            <Link href="/contact">Get In Touch</Link>
          </Button>
          <Button variant="ghost" asChild className="py-3 rounded-[8px] text-[15px] font-[500] leading-[1.5] h-[48px]" style={{ paddingLeft: "32px", paddingRight: "32px" }}>
            <a href="/docs/PraveenKC-CV.pdf" download>
              View Resume
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}