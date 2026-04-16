"use client";

import { Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Heading2, Body } from "@/components/ui/Typography";
import { ContactForm } from "@/components/sections/ContactForm";
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";

export default function Contact() {
  return (
    <div className="!pt-16 pb-16">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heading2 className="mb-4">Let&apos;s connect</Heading2>
            <Body className="mb-6">
              Have a project in mind or looking for a senior Unity/XR developer?
              I&apos;d love to hear from you. Fill out the form or reach out directly —
              I typically respond within 24 hours.
            </Body>

            <div className="mb-8">
              <AvailabilityBadge showText />
            </div>

            <div className="space-y-4 mb-8">
              <a
                href="https://linkedin.com/in/praveenkc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-t2 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-elevated flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <span>linkedin.com/in/praveenkc</span>
              </a>
              <a
                href="https://github.com/praveenkc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-t2 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-elevated flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <span>github.com/praveenkc</span>
              </a>
              <a
                href="mailto:praveen_kc@outlook.com"
                className="flex items-center gap-3 text-t2 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-elevated flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>praveen_kc@outlook.com</span>
              </a>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-sm text-t3">
                Response time: <span className="text-t2">Within 24 hours</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
