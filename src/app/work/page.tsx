import type { Metadata } from "next"
import { allProjects } from "@/content/generated"
import { getAllCategories } from "@/lib/projects"
import { Heading1 } from "@/components/ui/Typography"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { ProjectGrid } from "@/components/sections/ProjectGrid"
import { PageTransition } from "@/components/layout/PageTransition"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Portfolio of Unity 3D and XR projects — VR training simulations, WebGL interactive experiences, games, and technical explorations spanning 12+ years.",
}

export default function WorkPage() {
  const categories = getAllCategories()

  return (
    <PageTransition>
      <div className="!pt-16">
        <section className="container-page py-16 md:py-20">
          <div className="max-w-2xl">
            <SectionLabel className="mb-4">Portfolio</SectionLabel>
            <Heading1 className="mb-6">Selected Work</Heading1>
            <p className="text-t2 text-lg mb-4">
              A collection of projects spanning VR training simulations, WebGL
              experiences, games, and technical explorations.
            </p>
            <div className="inline-flex items-center gap-2 bg-elevated border border-border rounded-full px-4 py-2">
              <span className="text-xr-green font-[family-name:var(--font-mono)] text-sm">
                {allProjects.length}
              </span>
              <span className="text-t3 text-sm">projects</span>
            </div>
          </div>
        </section>

        <section className="container-page pb-24">
          <ProjectGrid projects={allProjects} categories={categories} />
        </section>
      </div>
    </PageTransition>
  )
}
