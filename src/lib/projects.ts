import { allProjects } from '@/content/generated'

export function getFeaturedProjects() {
  return allProjects.filter(p => p.featured).sort((a, b) => a.order - b.order)
}

export function getProjectsByCategory(category: string) {
  if (category === 'All') return allProjects.sort((a, b) => a.order - b.order)
  return allProjects.filter(p => p.category === category).sort((a, b) => a.order - b.order)
}

export function getProjectBySlug(slug: string) {
  return allProjects.find(p => p.slug === slug)
}

export function getAdjacentProjects(slug: string) {
  const sorted = allProjects.sort((a, b) => a.order - b.order)
  const idx = sorted.findIndex(p => p.slug === slug)
  return { prev: sorted[idx - 1] ?? null, next: sorted[idx + 1] ?? null }
}

export function getAllCategories() {
  const categories = new Set(allProjects.map(p => p.category))
  return ['All', ...Array.from(categories)]
}
