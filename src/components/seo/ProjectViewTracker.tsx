"use client"

import { useEffect } from "react"
import { trackProjectView } from "@/lib/analytics"

export function ProjectViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    trackProjectView(slug)
  }, [slug])

  return null
}
