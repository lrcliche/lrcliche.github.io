import type { Profile } from '../types/portfolio'

export const profileData: Profile = {
  name: 'Luis Alberto Ramos',
  role: 'Senior Backend Engineer · Software Architecture · Mobile Development',
  tagline: {
    en: 'Designing scalable backend microservices, resilient industrial integrations, distributed messaging, and high-performance cross-platform mobile solutions.',
    es: 'Diseño de microservicios backend escalables, integraciones industriales resilientes, mensajería distribuida y soluciones móviles multiplataforma de alto rendimiento.'
  },
  aboutParagraphs: {
    en: [
      'Senior Backend & Full Stack Engineer with over 7 years of software engineering experience focusing on high-volume APIs, microservices architecture, and async processing pipelines. Expert in Go, Java, and TypeScript/Node.js ecosystems implementing Hexagonal Architecture and Domain-Driven Design (DDD) principles.',
      'Extensive background in industrial systems integration (ATG devices, Veeder-Root, Modbus, TCP/Serial protocols), custom message processing for POS platforms, real-time device communications, and full-lifecycle electronic invoicing (Factra). Experienced in database administration (PostgreSQL, MongoDB, SQL Server) and Linux VPS production deployments.',
      'Hands-on developer of cross-platform mobile products with Flutter, React Native / Expo, and Vue + Capacitor. Committed to writing clean, maintainable, and thoroughly tested code that balances rapid product iteration with strict architectural standards.'
    ],
    es: [
      'Ingeniero Backend y Full Stack Senior con más de 7 años de experiencia en ingeniería de software focalizado en APIs de alto volumen, arquitectura de microservicios y pipelines de procesamiento asíncrono. Experto en los ecosistemas Go, Java y TypeScript/Node.js implementando Arquitectura Hexagonal y principios de Domain-Driven Design (DDD).',
      'Amplia trayectoria en integración de sistemas industriales (dispositivos ATG, Veeder-Root, Modbus, protocolos TCP/Serial), procesamiento propio de mensajería para plataformas POS, comunicación en tiempo real y facturación electrónica completa (Factra). Experiencia en administración de bases de datos (PostgreSQL, MongoDB, SQL Server) y despliegues en servidores Linux VPS.',
      'Desarrollador práctico de productos móviles multiplataforma con Flutter, React Native / Expo y Vue + Capacitor. Comprometido con escribir código limpio, mantenible y testeado que equilibre la entrega de producto con estrictos estándares arquitectónicos.'
    ]
  },
  socials: {
    github: 'https://github.com/lrcliche',
    linkedin: undefined,
    email: undefined
  },
  cvUrl: '/cv/Luis_Ramos_Senior_Software_Engineer_Backend_Mobile_2026.pdf',
  availableForWork: true
}
