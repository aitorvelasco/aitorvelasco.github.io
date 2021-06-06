export interface Project {
  name: string
  image: string
  url?: string
  description: string
}

export interface CVInfoProps {
  company: string
  logo: string
  time: string
  projects: Project[]
}
