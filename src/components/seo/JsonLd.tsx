export function PersonJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Praveen K C',
    url: 'https://praveenkc.com',
    jobTitle: 'Lead Unity Developer & XR Specialist',
    knowsAbout: ['Unity 3D', 'Virtual Reality', 'Augmented Reality', 'WebGL', 'C#', 'Three.js', 'Game Development', 'XR Training Simulation'],
    sameAs: ['https://www.linkedin.com/in/praveenkc', 'https://github.com/praveenkc'],
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'University of Abertay Dundee', description: 'M.Sc. Computer Games Technology' },
      { '@type': 'CollegeOrUniversity', name: 'SRM University', description: 'B.Tech Computer Science Engineering' },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function ProjectJsonLd({ project }: { project: { title: string; summary: string; year: number; tags: string[]; slug: string; thumbnail: string } }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    creator: { '@type': 'Person', name: 'Praveen K C' },
    dateCreated: project.year.toString(),
    keywords: project.tags.join(', '),
    url: `https://praveenkc.com/work/${project.slug}`,
    image: `https://praveenkc.com${project.thumbnail}`,
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
