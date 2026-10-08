import type { Technology } from '../types/portfolio'

export const technologiesData: Technology[] = [
  // Backend
  { name: 'Go (Golang)', category: 'backend', proficiencyLabel: 'professional' },
  { name: 'Java', category: 'backend', proficiencyLabel: 'professional' },
  { name: 'Node.js / TypeScript', category: 'backend', proficiencyLabel: 'professional' },
  { name: 'NestJS', category: 'backend', proficiencyLabel: 'professional' },
  { name: 'REST APIs & Microservices', category: 'backend', proficiencyLabel: 'professional' },
  { name: 'Hexagonal Architecture / DDD', category: 'backend', proficiencyLabel: 'professional' },
  { name: 'WebSockets & Async Queues', category: 'backend', proficiencyLabel: 'professional' },

  // Frontend
  { name: 'Vue 3', category: 'frontend', proficiencyLabel: 'professional' },
  { name: 'React / Next.js', category: 'frontend', proficiencyLabel: 'professional' },
  { name: 'Vite', category: 'frontend', proficiencyLabel: 'professional' },
  { name: 'Tailwind CSS', category: 'frontend', proficiencyLabel: 'professional' },
  { name: 'TypeScript', category: 'frontend', proficiencyLabel: 'professional' },

  // Mobile
  { name: 'Flutter / Dart', category: 'mobile', proficiencyLabel: 'project' },
  { name: 'React Native / Expo', category: 'mobile', proficiencyLabel: 'project' },
  { name: 'Vue + Capacitor (Mobile POS)', category: 'mobile', proficiencyLabel: 'project' },
  { name: 'Kotlin / Swift (Basics)', category: 'mobile', proficiencyLabel: 'familiar' },

  // Databases
  { name: 'PostgreSQL', category: 'databases', proficiencyLabel: 'professional' },
  { name: 'MongoDB', category: 'databases', proficiencyLabel: 'professional' },
  { name: 'Redis', category: 'databases', proficiencyLabel: 'professional' },
  { name: 'SQL Server', category: 'databases', proficiencyLabel: 'professional' },

  // Infrastructure
  { name: 'Docker', category: 'infrastructure', proficiencyLabel: 'professional' },
  { name: 'Linux', category: 'infrastructure', proficiencyLabel: 'professional' },
  { name: 'Nginx', category: 'infrastructure', proficiencyLabel: 'professional' },
  { name: 'GitHub Actions / CI/CD', category: 'infrastructure', proficiencyLabel: 'professional' }
]
