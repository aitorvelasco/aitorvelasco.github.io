export interface Project {
  name: string
  imagePreview: string
  description: string
  url?: string
}

export interface Job {
  company: string
  logo: string
  time: string
  projects: Project[]
}
