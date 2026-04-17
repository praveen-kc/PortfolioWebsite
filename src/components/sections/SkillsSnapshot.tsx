"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Heading2 } from "@/components/ui/Typography";
import { TechPills } from "@/components/ui/TechPills";

const SKILL_DOMAINS = [
  {
    icon: Cpu,
    name: "Unity & C#",
    skills: ["Unity 3D", "C#", "DOTS/ECS", "Physics", "Shader Graph", "URP/HDRP"],
    color: "xr-green",
  },
  {
    icon: Layers,
    name: "XR Platforms",
    skills: ["Meta Quest", "HTC Vive", "Oculus Rift", "ARCore", "ARKit", "WebXR"],
    color: "xr-purple",
  },
  {
    icon: Palette,
    name: "Graphics & Tools",
    skills: ["DirectX", "OpenGL", "HLSL", "Three.js", "WebGL", "Blender"],
    color: "primary",
  },
];

export function SkillsSnapshot() {
  return (
    <section className="container-page py-[--section-padding-y]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionLabel className="section-label">Expertise</SectionLabel>
        <Heading2>What I build with</Heading2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[--card-gap] mt-[--heading-to-body]">
        {SKILL_DOMAINS.map((domain, index) => (
          <motion.div
            key={domain.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div
              className={cn(
                "bg-surface border border-border rounded-2xl",
                "transition-all duration-300",
                "hover:border-xr-green/50 hover:shadow-[0_0_24px_rgba(0,229,160,0.12)]",
                "h-full flex flex-col",
                "p-[--card-padding]"
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-elevated flex items-center justify-center">
                  <domain.icon
                    className={cn(
                      "w-5 h-5",
                      domain.color === "xr-green" && "text-xr-green",
                      domain.color === "xr-purple" && "text-xr-purple",
                      domain.color === "primary" && "text-primary"
                    )}
                  />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-t1">
                  {domain.name}
                </h3>
              </div>
              <div className="mt-[--heading-to-body]">
                <TechPills tags={domain.skills} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
