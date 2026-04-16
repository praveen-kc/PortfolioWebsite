"use client";

import { useMemo } from "react";
import NextLink from "next/link";
import { Link as LinkIcon, AtSign, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { trackResumeDownload } from "@/lib/analytics";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function EmailLink() {
  const email = useMemo(() => {
    const parts = ["praveen", "_", "kc", "@", "outlook", ".", "com"];
    return parts.join("");
  }, []);

  return (
    <a
      href={`mailto:${email}`}
      className="inline-flex items-center gap-2 text-sm text-t2 hover:text-t1 transition-colors"
    >
      <AtSign className="w-4 h-4" />
      {email}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div className="space-y-4">
            <NextLink href="/" className="font-[family-name:var(--font-display)] font-bold text-xl text-t1">
              PKC
            </NextLink>
            <p className="text-sm text-t2 leading-relaxed">
              Lead Unity Developer · XR Specialist · Creative Technologist
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-[family-name:var(--font-mono)] text-t3 uppercase tracking-wider">
              Navigation
            </span>
            <nav aria-label="Footer navigation" className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <NextLink
                  key={link.href}
                  href={link.href}
                  className="text-sm text-t2 hover:text-t1 transition-colors w-fit"
                >
                  {link.label}
                </NextLink>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-[family-name:var(--font-mono)] text-t3 uppercase tracking-wider">
              Connect
            </span>
            <div className="flex flex-col gap-3">
              <a
                href="https://linkedin.com/in/praveenkc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-t2 hover:text-t1 transition-colors w-fit"
              >
                <LinkIcon className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/praveenkc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-t2 hover:text-t1 transition-colors w-fit"
              >
                <GithubIcon />
                GitHub
              </a>
              <EmailLink />
              <Button
                variant="ghost"
                size="sm"
                className="w-fit mt-2"
                asChild
              >
                <NextLink href="/docs/PraveenKC-CV.pdf" className="inline-flex items-center" onClick={trackResumeDownload}>
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </NextLink>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-t3">
            <span>© 2026 Praveen K C · Built with Next.js + Three.js</span>
            <span className="font-[family-name:var(--font-mono)]">praveenkc.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
