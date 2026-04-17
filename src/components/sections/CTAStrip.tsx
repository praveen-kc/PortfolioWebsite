"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heading2 } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

export function CTAStrip() {
  return (
    <section className="bg-elevated border-y border-border py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container-page text-center"
      >
        <Heading2 className="section-heading">Let&apos;s build something remarkable together.</Heading2>
        <p className="text-t2 max-w-md mx-auto section-body">
          Available for senior Unity/XR roles — remote or hybrid.
        </p>
        <div className="flex flex-wrap justify-center gap-[--cta-btn-gap]">
          <Button variant="primary" size="lg" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a href="/docs/PraveenKC-CV.pdf" download>
              View Resume
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}