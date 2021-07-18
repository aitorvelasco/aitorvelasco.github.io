export interface Project {
  name: string
  imagePreview: string
  description: string
  url?: string
}

export interface Job {
  company: string
  projects: Project[]
  time?: string
  logo?: string
}
