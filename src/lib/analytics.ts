import { track } from '@vercel/analytics'

export const trackResumeDownload = () => track('resume_download')
export const trackContactSubmit = () => track('contact_form_submit')
export const trackProjectView = (slug: string) => track('project_view', { slug })
export const trackFilterChange = (category: string) => track('filter_change', { category })
