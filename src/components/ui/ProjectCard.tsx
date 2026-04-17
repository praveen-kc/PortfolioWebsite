"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/Badge"
import { TechPills } from "@/components/ui/TechPills"
import { CardHover } from "@/components/ui/Card"

interface ProjectCardProps {
  project: {
    slug: string
    title: string
    company: string
    category: string
    year: number
    thumbnail: string
    summary: string
    tags: string[]
    url: string
  }
}

const PLACEHOLDER_BLUR =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={project.url} className="block w-full h-full">
      <CardHover className="h-full flex flex-col group cursor-pointer rounded-2xl">
        <div className="relative aspect-[16/10] overflow-hidden bg-surface flex-shrink-0">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={PLACEHOLDER_BLUR}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-sm text-t1 font-[family-name:var(--font-body)] line-clamp-2">
              {project.summary}
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col p-[--card-padding]">
          <h3 className="font-[family-name:var(--font-display)] font-semibold text-t1 text-lg mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-[family-name:var(--font-mono)] text-t3">
              {project.year}
            </span>
            <span className="text-t3">•</span>
            <Badge variant={project.category as "VR" | "WebGL" | "Game" | "Mobile" | "Research"}>
              {project.category}
            </Badge>
          </div>
          <p className="text-sm text-t2 mb-3 line-clamp-2">{project.summary}</p>
          <div className="text-xs text-t3 font-[family-name:var(--font-mono)]">
            {project.company}
          </div>
        </div>
      </CardHover>
    </Link>
  )
}
