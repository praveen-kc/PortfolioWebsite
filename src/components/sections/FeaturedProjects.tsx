"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Heading2 } from "@/components/ui/Typography";

const FEATURED_PROJECTS = [
  {
    slug: "tooling-u-virtual-labs",
    title: "Tooling U Virtual Labs",
    summary: "Simulation-based training platform enabling learners to practice manufacturing procedures and safety protocols in realistic virtual environments",
    category: "VR",
    company: "Sify Technologies",
    year: 2021,
    thumbnail: "/images/projects/tooling-u-cover.webp",
    tags: [],
    url: "/work#tooling-u-virtual-labs",
  },
  {
    slug: "uti-vr-simulation",
    title: "UTI VR Simulation",
    summary: "High-fidelity VR simulation for ultrasonic immersion testing — replacing dangerous physical NDT training with a safe, scalable virtual environment achieving 90+ FPS on standalone headsets",
    category: "VR",
    company: "Sify Technologies",
    year: 2022,
    thumbnail: "/images/projects/uti-cover.webp",
    tags: [],
    url: "/work#uti-vr-simulation",
  },
  {
    slug: "msd-allergy-race",
    title: "MSD Allergy Race",
    summary: "Kinect-controlled racing game for MSD corporate event — powered by real-time sales data that dynamically influenced player car behavior",
    category: "Game",
    company: "ThinkHi",
    year: 2017,
    thumbnail: "/images/projects/msd-allergy-race-cover.webp",
    tags: [],
    url: "/work#msd-allergy-race",
  },
];

export function FeaturedProjects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="container-page py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      >
        <SectionLabel className="section-label">Featured Projects</SectionLabel>
        <Heading2 className="mt-[--label-to-heading]">Work I&apos;m proud of</Heading2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[--card-gap] items-stretch mb-8 mb-4">
        {FEATURED_PROJECTS.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : index * 0.15,
            }}
            className="flex"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center py-4 mt-[--section-gap]"
      >
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-[family-name:var(--font-body)] font-medium"
        >
          View All Projects
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}