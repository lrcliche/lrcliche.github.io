import type { Experience } from '../types/portfolio'

export const experienceData: Experience[] = [
  {
    id: 'exp-senior-backend',
    position: {
      en: 'Senior Backend Engineer / Tech Lead',
      es: 'Senior Backend Engineer / Lider Técnico'
    },
    employer: 'Enterprise & Industrial Solutions (Verified Path)',
    start: '2019',
    end: {
      en: 'Present',
      es: 'Presente'
    },
    highlights: {
      en: [
        'Led architecture design and backend microservices implementation using Go, Java, and NestJS.',
        'Designed decoupled Hexagonal Architecture services with domain event streaming and Redis caching.',
        'Integrated industrial communication protocols and real-time controller interfaces.',
        'Mentored engineering teams on clean code, REST standards, and Dockerized deployment workflows.'
      ],
      es: [
        'Lideré el diseño de arquitectura e implementación de microservicios backend utilizando Go, Java y NestJS.',
        'Diseñé servicios con Arquitectura Hexagonal desacoplada con flujo de eventos de dominio y almacenamiento en caché con Redis.',
        'Integré protocolos de comunicación industrial e interfaces de controladores en tiempo real.',
        'Guié a los equipos de ingeniería en código limpio, estándares REST y flujos de despliegue con Docker.'
      ]
    },
    technologies: ['Go', 'Java', 'NestJS', 'PostgreSQL', 'Redis', 'Docker', 'Hexagonal Architecture'],
    published: true
  }
]
