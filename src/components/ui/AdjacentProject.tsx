"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface AdjacentProjectProps {
  project: {
    title: string
    thumbnail: string
    url: string
  } | null
  direction: "prev" | "next"
}

export function AdjacentProject({ project, direction }: AdjacentProjectProps) {
  if (!project) return null

  return (
    <Link
      href={project.url}
      className={cn(
        "group flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-primary/50 hover:bg-elevated transition-all",
        direction === "prev" ? "flex-row" : "flex-row-reverse text-right"
      )}
    >
      <div className="relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-elevated">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 text-t3 text-xs font-[family-name:var(--font-mono)] mb-1">
          {direction === "prev" ? (
            <ArrowLeft className="w-3 h-3" />
          ) : (
            <ArrowRight className="w-3 h-3" />
          )}
          {direction === "prev" ? "Previous" : "Next"}
        </div>
        <h4 className="font-[family-name:var(--font-display)] font-medium text-t1 group-hover:text-primary transition-colors truncate">
          {project.title}
        </h4>
      </div>
    </Link>
  )
}
