"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FilterTabsProps {
  categories: string[]
  active: string
  onChange: (category: string) => void
}

export function FilterTabs({ categories, active, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            "relative px-4 py-2 rounded-full text-sm font-[family-name:var(--font-body)] font-medium transition-colors",
            active === category
              ? "text-white"
              : "text-t2 hover:text-t1"
          )}
        >
          {active === category && (
            <motion.span
              layoutId="active-filter"
              className="absolute inset-0 bg-primary rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              style={{ zIndex: -1 }}
            />
          )}
          {category}
        </button>
      ))}
    </div>
  )
}
