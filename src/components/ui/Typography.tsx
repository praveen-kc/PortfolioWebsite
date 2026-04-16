import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Heading1Props {
  children: ReactNode;
  className?: string;
}

export function Heading1({ children, className }: Heading1Props) {
  return (
    <h1
      className={cn(
        "font-[family-name:var(--font-display)] font-bold text-t1 tracking-tight",
        "text-[clamp(40px,6vw,72px)] leading-[1.1]",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function Heading2({ children, className }: Heading1Props) {
  return (
    <h2
      className={cn(
        "font-[family-name:var(--font-display)] font-bold text-t1 tracking-tight",
        "text-[clamp(28px,4vw,48px)] leading-[1.15]",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function Heading3({ children, className }: Heading1Props) {
  return (
    <h3
      className={cn(
        "font-[family-name:var(--font-display)] font-semibold text-t1",
        "text-[clamp(20px,2.5vw,28px)] leading-[1.3]",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function Body({ children, className }: Heading1Props) {
  return (
    <p
      className={cn(
        "font-[family-name:var(--font-body)] font-normal text-t1 leading-relaxed",
        "text-base",
        className
      )}
    >
      {children}
    </p>
  );
}

export function Caption({ children, className }: Heading1Props) {
  return (
    <span
      className={cn(
        "font-[family-name:var(--font-mono)] font-medium text-t2 text-xs tracking-wide uppercase",
        className
      )}
    >
      {children}
    </span>
  );
}

export function GradientText({ children, className }: Heading1Props) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-primary to-xr-green bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
