"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Heading2 } from "@/components/ui/Typography";
import { CardHover } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const FEATURED_PROJECTS = [
  {
    id: "tooling-u-virtual-labs",
    title: "Tooling U Virtual Labs",
    summary: "Simulation-based training platform enabling learners to practice manufacturing procedures and safety protocols in realistic virtual environments",
    category: "VR" as const,
    company: "Sify Technologies",
    year: "2021",
    image: "/images/projects/tooling-u-cover.webp",
    link: "/work#tooling-u-virtual-labs",
  },
  {
    id: "uti-vr-simulation",
    title: "UTI VR Simulation",
    summary: "High-fidelity VR simulation for ultrasonic immersion testing — replacing dangerous physical NDT training with a safe, scalable virtual environment achieving 90+ FPS on standalone headsets",
    category: "VR" as const,
    company: "Sify Technologies",
    year: "2022",
    image: "/images/projects/uti-cover.webp",
    link: "/work#uti-vr-simulation",
  },
  {
    id: "msd-allergy-race",
    title: "MSD Allergy Race",
    summary: "Kinect-controlled racing game for MSD corporate event — powered by real-time sales data that dynamically influenced player car behavior",
    category: "Game" as const,
    company: "ThinkHi",
    year: "2017",
    image: "/images/projects/msd-allergy-race-cover.webp",
    link: "/work#msd-allergy-race",
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
        className="mb-12"
      >
        <SectionLabel className="mb-4">Featured Projects</SectionLabel>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-8" style={{ marginTop: "32px" }}>
        {FEATURED_PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : index * 0.15,
            }}
            className="flex"
          >
            <Link href={project.link} className="block w-full">
              <CardHover className="h-full flex flex-col group cursor-pointer rounded-2xl">
                <div className="relative aspect-[16/10] overflow-hidden bg-surface flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex-1 flex flex-col" style={{ padding: "24px" }}>
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-t1 text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-[family-name:var(--font-mono)] text-t3">
                      {project.year}
                    </span>
                    <span className="text-t3">•</span>
                    <Badge variant={project.category}>{project.category}</Badge>
                  </div>
                  <p className="text-sm text-t2 mb-3 line-clamp-2">{project.summary}</p>
                  <div className="text-xs text-t3 font-[family-name:var(--font-mono)]">
                    {project.company}
                  </div>
                </div>
              </CardHover>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 text-center py-4"
        style={{ marginTop: "40px" }}
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
