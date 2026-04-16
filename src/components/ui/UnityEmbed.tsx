"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface UnityEmbedProps {
  buildUrl?: string;
  title: string;
  thumbnail?: string;
  highlights?: string[];
}

export function UnityEmbed({
  buildUrl,
  title,
  thumbnail = "/images/projects/placeholder.jpg",
  highlights = [],
}: UnityEmbedProps) {
  if (!buildUrl) {
    return (
      <div className="relative bg-surface border border-border rounded-xl overflow-hidden">
        <div className="relative aspect-video bg-elevated flex items-center justify-center">
          <div className="text-center p-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-elevated flex items-center justify-center">
              <Play className="w-8 h-8 text-xr-green" />
            </div>
            <h3 className="font-[family-name:var(--font-display)] font-semibold text-t1 text-lg mb-2">
              Interactive Demo — Coming Soon
            </h3>
            <p className="text-sm text-t2 mb-6">
              Unity WebGL build in development
            </p>
            {highlights.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2">
                {highlights.map((h, i) => (
                  <span
                    key={i}
                    className="text-xs font-[family-name:var(--font-mono)] bg-elevated border border-border px-2 py-1 rounded text-t2"
                  >
                    {h}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-surface border border-border rounded-xl overflow-hidden">
      <div className="absolute top-4 right-4 z-10">
        <span className="text-xs font-[family-name:var(--font-mono)] bg-void/80 backdrop-blur-sm px-2 py-1 rounded border border-border text-t2">
          Unity WebGL · Interactive Demo
        </span>
      </div>

      <div className="relative aspect-video">
        <Image
          src={thumbnail}
          alt={`${title} preview`}
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />
        <div className="absolute inset-0 bg-void/40 flex items-center justify-center">
          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              className="gap-2"
              disabled
            >
              <Play className="w-5 h-5" />
              Demo Available (Build Required)
            </Button>
            <p className="text-xs text-t3 mt-2">
              Unity WebGL integration ready — build your project to enable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
