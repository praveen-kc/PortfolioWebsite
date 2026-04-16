import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "bg-surface animate-shimmer bg-[length:200%_100%] bg-gradient-to-r from-surface via-elevated to-surface",
        className
      )}
    />
  );
}
