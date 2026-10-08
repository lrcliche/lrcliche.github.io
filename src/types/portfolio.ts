export interface Profile {
  name: string
  role: string
  tagline: {
    en: string
    es: string
  }
  aboutParagraphs: {
    en: string[]
    es: string[]
  }
  socials: {
    github?: string
    linkedin?: string
    email?: string
  }
  cvUrl?: string
  availableForWork?: boolean
}

export interface Experience {
  id: string
  position: {
    en: string
    es: string
  }
  employer: string
  start: string
  end: {
    en: string
    es: string
  }
  highlights: {
    en: string[]
    es: string[]
  }
  technologies: string[]
  published: boolean
}

export interface Project {
  id: string
  title: string
  summary: {
    en: string
    es: string
  }
  category: 'backend' | 'mobile' | 'fullstack' | 'industrial'
  tech: string[]
  problem: {
    en: string
    es: string
  }
  solution: {
    en: string
    es: string
  }
  outcome: {
    en: string
    es: string
  }
  image?: string
  repoUrl?: string
  demoUrl?: string
  visibility: 'public-repo' | 'case-study'
  featured: boolean
  published: boolean
}

export interface Technology {
  name: string
  category: 'backend' | 'frontend' | 'mobile' | 'databases' | 'messaging' | 'infrastructure' | 'architecture'
  proficiencyLabel?: 'professional' | 'project' | 'familiar'
  logo?: string
}

export interface ExpertiseItem {
  id: string
  title: {
    en: string
    es: string
  }
  description: {
    en: string
    es: string
  }
  skills: string[]
  icon: string
}
