"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { Heading1, Heading2, Body } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Timeline, TimelineEntry } from "@/components/sections/Timeline";
import { Card } from "@/components/ui/Card";
import { PageTransition } from "@/components/layout/PageTransition";

const SkillGraph = dynamic(
  () => import("@/components/sections/SkillGraph").then((mod) => mod.SkillGraph),
  { ssr: false, loading: () => <div className="h-[400px] bg-surface animate-pulse rounded-xl" /> }
);

const TIMELINE_DATA: TimelineEntry[] = [
  {
    company: "Sify Technologies",
    role: "Lead Unity Developer / XR Specialist",
    period: "2019 – Present",
    description:
      "Led development of enterprise VR training simulations for aerospace, pharma, and manufacturing. Projects: UTI VR Simulation, Tooling U Virtual Labs, LensX Interactive 3D.",
    highlight: "Architected 90+ FPS VR systems on standalone headsets",
  },
  {
    company: "ThinkHi",
    role: "Unity Developer",
    period: "2014 – 2019",
    description:
      "Built WebGL experiences, mobile apps, Kinect games, and VR applications across retail, automotive, and events. Projects: YUCAD Design Studio, Lykagluv, MSD Allergy Race, Blister Packing VR.",
    highlight: "Led team of 3 developers + 2 artists on YUCAD",
  },
  {
    company: "Clite Technologies",
    role: "Unity Developer",
    period: "2012 – 2014",
    description:
      "Built physics-based virtual laboratory simulations for PC and Android. Projects: Clite Virtual Lab.",
    highlight: "Cross-platform PC + Android deployment",
  },
];

const COMPETENCIES = [
  "Technical Leadership",
  "Cross-Platform Architecture",
  "VR/AR Development",
  "Performance Optimization",
  "Client Engagement",
  "Team Mentorship",
  "Agile Delivery",
  "Research & Prototyping",
];

export default function About() {
  return (
    <PageTransition>
      <div className="!pt-16 pb-16">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-48"
          >
            <div>
              <Heading1 className="mb-4">Praveen K C</Heading1>
              <p className="text-xl text-xr-green font-[family-name:var(--font-body)] font-medium mb-6">
                Lead Unity Developer &amp; XR Specialist
              </p>
              <div className="space-y-4">
                <Body>
                  With over 12 years of experience in game and XR development, I specialize in creating
                  immersive virtual reality training simulations, interactive WebGL experiences, and
                  cross-platform solutions that push the boundaries of what&apos;s possible.
                </Body>
                <Body>
                  My work spans multiple industries including aerospace, automotive, pharmaceutical, and
                  retail, where I&apos;ve helped organizations transform how they train, engage, and connect
                  with their audiences through cutting-edge technology.
                </Body>
                <Body>
                  I&apos;m passionate about performance optimization, achieving 90+ FPS in standalone VR
                  headsets, and building scalable architectures that can grow with business needs.
                </Body>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-xr-green rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                <Image
                  src="/images/bordered-image-410x528.png"
                  alt="Praveen K C"
                  width={410}
                  height={528}
                  className="relative rounded-2xl border-2 border-border object-cover w-full max-w-[320px] md:max-w-[410px] transition-shadow duration-300 group-hover:shadow-[0_0_32px_rgba(0,229,160,0.2)]"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            id="timeline"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-48"
          >
            <Heading2 className="mb-12">Career Timeline</Heading2>
            <Timeline entries={TIMELINE_DATA} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-48"
          >
            <Heading2 className="mb-12">Education</Heading2>
            <Card className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-elevated flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-xr-green" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-t1 text-lg mb-2">
                    M.Sc. Computer Games Technology
                  </h3>
                  <p className="text-t2 mb-3">
                    Master&apos;s thesis exploring immersion differences between FPS and TPS
                    perspectives in video games.
                  </p>
                  <p className="text-sm text-t3 font-[family-name:var(--font-mono)]">
                    Thesis: &quot;Beyond Guns — Comparative Immersion Study&quot;
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-48"
          >
            <Heading2 className="mb-12">Competencies</Heading2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {COMPETENCIES.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-surface border border-border rounded-lg p-4 text-center"
                >
                  <span className="text-sm text-t2 font-[family-name:var(--font-body)] font-medium">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            id="skills"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-48"
          >
            <Heading2 className="mb-12">Skills Graph</Heading2>
            <div className="bg-surface border border-border rounded-xl p-4 md:p-8">
              <SkillGraph />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-48"
          >
            <p className="text-t2 mb-6">Interested in working together?</p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
