import { allProjects } from '@/content/generated'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://praveenkc.com'
  const staticRoutes = ['', '/about', '/work', '/contact'].map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }))
  const projectRoutes = allProjects.map(p => ({
    url: `${base}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: p.featured ? 0.9 : 0.6,
  }))
  return [...staticRoutes, ...projectRoutes]
}
