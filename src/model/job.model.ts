export interface Project {
  name: string
  imagePreview: string
  url?: string
  description: string
}

export interface Job {
  company: string
  logo: string
  time: string
  projects: Project[]
}
