export type Category = 'VR' | 'WebGL' | 'Game' | 'Mobile' | 'Research' | 'All'
export type Platform = 'Meta Quest' | 'HTC Vive' | 'PC VR' | 'Android' | 'iOS' | 'WebGL' | 'PC' | 'Kinect' | 'Xbox 360' | 'PS2'

export interface Skill {
  name: string
  domain: 'Core' | 'XR' | 'Graphics' | 'Tools' | 'Leadership'
  level: 1 | 2 | 3
  projects?: string[]
}

export interface TimelineEntry {
  company: string
  role: string
  period: string
  description: string
  highlight?: string
}