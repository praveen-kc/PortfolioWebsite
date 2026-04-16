"use client";

import { ReadingProgress } from "@/components/ui/ReadingProgress";

export function CaseStudyWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReadingProgress />
      {children}
    </>
  );
}
