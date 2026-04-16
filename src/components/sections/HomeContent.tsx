"use client";

import { PageTransition } from "@/components/layout/PageTransition";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SkillsSnapshot } from "@/components/sections/SkillsSnapshot";
import { PlatformsGrid } from "@/components/sections/PlatformsGrid";
import { CareerTeaser } from "@/components/sections/CareerTeaser";
import { CTAStrip } from "@/components/sections/CTAStrip";

export function HomeContent() {
  return (
    <PageTransition>
      <Hero />
      <FeaturedProjects />
      <SkillsSnapshot />
      <PlatformsGrid />
      <CareerTeaser />
      <CTAStrip />
    </PageTransition>
  );
}
