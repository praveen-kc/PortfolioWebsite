import { cn } from "@/lib/utils";

interface TechPillsProps {
  tags: string[];
  className?: string;
}

export function TechPills({ tags, className }: TechPillsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-elevated border border-border text-t2 font-[family-name:var(--font-mono)] text-xs rounded-full"
          style={{ padding: "5px 9px" }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
