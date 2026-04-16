import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("bg-surface border border-border rounded-xl overflow-hidden", className)}>
      {children}
    </div>
  );
}

export function CardHover({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface border border-border rounded-xl overflow-hidden",
        "transition-all duration-300 group",
        "hover:border-primary/50 hover:shadow-[0_0_24px_rgba(51,83,255,0.12)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardBody({ children, className }: CardProps) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

export function CardMeta({ children, className }: CardProps) {
  return (
    <div className={cn("px-6 py-4 border-t border-border flex gap-3", className)}>
      {children}
    </div>
  );
}
