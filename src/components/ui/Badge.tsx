import { type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center font-[family-name:var(--font-mono)] font-medium rounded",
  {
    variants: {
      variant: {
        VR: "bg-[#1a0f3a] text-xr-purple border border-xr-purple/30",
        WebGL: "bg-[#0a1f3a] text-primary border border-primary/30",
        Game: "bg-[#0a2a1a] text-xr-green border border-xr-green/30",
        Mobile: "bg-[#2a1a0a] text-alert border border-alert/30",
        Research: "bg-[#1a0a2a] text-[#e0a0ff] border border-[#e0a0ff]/30",
        default: "bg-elevated text-t2 border border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: ReactNode;
  className?: string;
}

export function Badge({ variant, className, children }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), "text-[11px] px-2 py-[3px] tracking-[0.06em]", className)}>
      {children}
    </span>
  );
}
