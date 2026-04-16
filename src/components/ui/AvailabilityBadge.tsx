"use client";

import { cn } from "@/lib/utils";

interface AvailabilityBadgeProps {
  className?: string;
  showText?: boolean;
}

export function AvailabilityBadge({ className, showText = true }: AvailabilityBadgeProps) {
  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-xr-green opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-xr-green" />
      </span>
      {showText && (
        <span className="font-[family-name:var(--font-mono)] text-[13px] font-medium text-xr-green">
          Open to Work
        </span>
      )}
    </div>
  );
}
