import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { compileMDX } from 'next-mdx-remote/rsc'
import { allProjects } from "@/content/generated"
import { getProjectBySlug, getAdjacentProjects } from "@/lib/projects"
import { Heading1, Heading2, Caption, Body } from "@/components/ui/Typography"
import { Badge } from "@/components/ui/Badge"
import { TechPills } from "@/components/ui/TechPills"
import { MediaGallery } from "@/components/ui/MediaGallery"
import { AdjacentProject } from "@/components/ui/AdjacentProject"
import { ProjectJsonLd } from "@/components/seo/JsonLd"
import { ProjectViewTracker } from "@/components/seo/ProjectViewTracker"
import { CaseStudyWrapper } from "@/components/layout/CaseStudyWrapper"
import { CaseStudySection } from "@/components/ui/CaseStudySection"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: "Project Not Found" }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      images: [`/og?title=${encodeURIComponent(project.title)}&category=${encodeURIComponent(project.category)}`],
    },
  }
}

const PLACEHOLDER_BLUR =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="

const mdxComponents = {
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = typeof children === "string"
      ? children.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")
      : undefined
    return (
      <Heading2
        id={id}
        className="mt-12 mb-6 pl-4 border-l-2 border-primary scroll-mt-24"
        {...props}
      >
        {children}
      </Heading2>
    )
  },
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading2 className="mt-8 mb-4" {...props}>
      {children}
    </Heading2>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <Body className="mb-4 text-t1/90" {...props}>
      {children}
    </Body>
  ),
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 space-y-2 pl-6 list-disc marker:text-xr-green" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-4 space-y-2 pl-6 list-decimal" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-t1/90 font-[family-name:var(--font-body)]" {...props}>
      {children}
    </li>
  ),
  strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-t1" {...props}>
      {children}
    </strong>
  ),
  code: ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const isInline = !className
    if (isInline) {
      return (
        <code
          className="bg-elevated border border-border px-1.5 py-0.5 rounded text-sm font-[family-name:var(--font-mono)] text-xr-green"
          {...props}
        >
          {children}
        </code>
      )
    }
    return <code className={className} {...props}>{children}</code>
  },
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-surface border border-border rounded-lg p-4 overflow-x-auto mb-4" {...props}>
      {children}
    </pre>
  ),
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const { prev, next } = getAdjacentProjects(slug)

  const { content } = await compileMDX({
    source: project.body.raw,
    components: mdxComponents,
  })

  return (
    <CaseStudyWrapper>
      <div className="pt-16">
        <ProjectJsonLd project={project} />
        <ProjectViewTracker slug={slug} />
        <div className="relative">
          <div className="relative aspect-[21/9] max-h-[500px] overflow-hidden bg-surface">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL={PLACEHOLDER_BLUR}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 container-page pb-12 pt-24">
              <Heading1 className="max-w-3xl">{project.title}</Heading1>
            </div>
          </div>
        </div>

        <div className="container-page py-8 md:py-12">
          <div className="sticky top-16 z-10 bg-void/80 backdrop-blur-lg border-b border-border py-4 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12 mb-8">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-[family-name:var(--font-mono)] text-t3">
                  Company
                </span>
                <span className="text-sm font-[family-name:var(--font-mono)] text-xr-green">
                  {project.company}
                </span>
              </div>
              <Badge variant={project.category as "VR" | "WebGL" | "Game" | "Mobile" | "Research"}>
                {project.category}
              </Badge>
              <div className="flex items-center gap-2">
                {project.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="text-xs font-[family-name:var(--font-mono)] text-t3 bg-elevated border border-border px-2 py-1 rounded"
                  >
                    {platform}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-[family-name:var(--font-mono)] text-t3">
                  Year
                </span>
                <span className="text-sm font-[family-name:var(--font-mono)] text-t2">
                  {project.year}
                </span>
              </div>
            </div>
          </div>

          <CaseStudySection>
            {project.impact && (
              <div className="mb-12 p-6 bg-elevated border-l-4 border-xr-green rounded-r-lg max-w-3xl">
                <Caption className="text-xr-green mb-2">Impact</Caption>
                <p className="text-t1/90 font-[family-name:var(--font-body)] italic leading-relaxed">
                  {project.impact}
                </p>
              </div>
            )}
          </CaseStudySection>

          <CaseStudySection>
            <article className="max-w-3xl prose-content">
              {content}
            </article>
          </CaseStudySection>

          {project.images && project.images.length > 0 && (
            <CaseStudySection className="max-w-3xl">
              <MediaGallery images={project.images} title={project.title} />
            </CaseStudySection>
          )}

          {project.tags && project.tags.length > 0 && (
            <CaseStudySection className="mt-12 pt-8 border-t border-border max-w-3xl">
              <Heading2 className="text-xl mb-4">Tech Stack</Heading2>
              <TechPills tags={project.tags} />
            </CaseStudySection>
          )}

          <CaseStudySection className="mt-16 pt-8 border-t border-border max-w-3xl">
            <Heading2 className="text-xl mb-6">Continue Exploring</Heading2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AdjacentProject
                project={prev ? { title: prev.title, thumbnail: prev.thumbnail, url: prev.url } : null}
                direction="prev"
              />
              <AdjacentProject
                project={next ? { title: next.title, thumbnail: next.thumbnail, url: next.url } : null}
                direction="next"
              />
            </div>
          </CaseStudySection>
        </div>
      </div>
    </CaseStudyWrapper>
  )
}
