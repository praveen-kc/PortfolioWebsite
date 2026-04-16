"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FilterTabs } from "@/components/ui/FilterTabs"
import { ProjectCard } from "@/components/ui/ProjectCard"
import { SectionLabel } from "@/components/ui/SectionLabel"
import type { Project } from "@/content/generated"
import { trackFilterChange } from "@/lib/analytics"

interface ProjectGridProps {
  projects: Project[]
  categories: string[]
}

export function ProjectGrid({ projects, categories }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState("All")

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    trackFilterChange(category)
  }

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const professionalProjects = filteredProjects.filter(p => p.category !== "Research")
  const academicProjects = filteredProjects.filter(p => p.category === "Research")

  const hasAcademic = activeCategory === "All" || activeCategory === "Research"

  return (
    <div>
      <div className="mb-10">
        <FilterTabs
          categories={categories}
          active={activeCategory}
          onChange={handleCategoryChange}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {professionalProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-16">
              {professionalProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  layout
                  className="flex"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          )}

          {hasAcademic && academicProjects.length > 0 && (
            <>
              <div className="mb-8">
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-border" />
                  <SectionLabel>Academic & Technical</SectionLabel>
                  <div className="flex-1 h-px bg-border" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {academicProjects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    layout
                    className="flex"
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-t2">No projects found in this category.</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
