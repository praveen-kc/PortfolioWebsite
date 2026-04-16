import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-4 text-t3 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase", className)}>
      <span className="h-px w-8 bg-current opacity-30" />
      {children}
      <span className="h-px w-8 bg-current opacity-30" />
    </div>
  );
}
