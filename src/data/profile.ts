import type { Profile } from '../types/portfolio'

export const profileData: Profile = {
  name: 'Luis Ramos',
  role: 'Senior Backend Engineer · Software Architecture · Mobile Development',
  tagline: {
    en: 'Designing scalable backend microservices, resilient industrial integrations, and high-performance cross-platform mobile solutions.',
    es: 'Diseño de microservicios backend escalables, integraciones industriales resilientes y soluciones móviles multiplataforma de alto rendimiento.'
  },
  aboutParagraphs: {
    en: [
      'Senior Backend Engineer with over 7 years of software engineering experience focusing on high-volume APIs, microservices architecture, and async processing pipelines. Expert in Go, Java, and TypeScript/Node.js ecosystem implementing Hexagonal Architecture and Domain-Driven Design (DDD).',
      'Extensive background in industrial systems integration, real-time device communications, mobile POS solutions, and full-lifecycle electronic invoicing (Factra). Hands-on experience building cross-platform mobile applications with Flutter and React Native / Expo.',
      'Committed to writing clean, maintainable, and well-tested code that balances rapid product iteration with strict architectural standards and data integrity.'
    ],
    es: [
      'Ingeniero Backend Senior con más de 7 años de experiencia en ingeniería de software focalizado en APIs de alto volumen, arquitectura de microservicios y procesamiento asíncrono. Experto en Go, Java y el ecosistema TypeScript/Node.js implementando Arquitectura Hexagonal y Diseño Guiado por el Dominio (DDD).',
      'Amplia trayectoria en integración de sistemas industriales, comunicación en tiempo real con dispositivos, soluciones POS móviles y facturación electrónica completa (Factra). Experiencia práctica en el desarrollo de aplicaciones móviles multiplataforma con Flutter y React Native / Expo.',
      'Comprometido con escribir código limpio, mantenible y bien testeado que equilibre la velocidad de iteración con estrictos estándares arquitectónicos e integridad de datos.'
    ]
  },
  socials: {
    github: 'https://github.com/lrcliche',
    linkedin: undefined, // Pending confirmation
    email: undefined // Pending confirmation
  },
  cvUrl: undefined, // Will be set when PDF is provided
  availableForWork: true
}
