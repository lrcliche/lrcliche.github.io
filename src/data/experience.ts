import type { Experience } from '../types/portfolio'

export const experienceData: Experience[] = [
  {
    id: 'exp-devices-tech',
    position: {
      en: 'Senior Backend Engineer & Software Architect',
      es: 'Senior Backend Engineer y Arquitecto de Software'
    },
    employer: 'Devices & Technology S.A.S',
    start: '2019',
    end: {
      en: 'Present',
      es: 'Presente'
    },
    highlights: {
      en: [
        'Led architecture design and backend microservices implementation using Go, Java, and NestJS.',
        'Architected decoupled Hexagonal Architecture services with domain event streaming and Redis caching.',
        'Integrated industrial communication protocols, IoT hardware controllers, and real-time telemetry pipelines.',
        'Mentored engineering teams on clean code, REST/gRPC standards, and containerized CI/CD workflows.'
      ],
      es: [
        'Lideré el diseño de arquitectura e implementación de microservicios backend utilizando Go, Java y NestJS.',
        'Diseñé servicios con Arquitectura Hexagonal desacoplada con flujo de eventos de dominio y almacenamiento en caché con Redis.',
        'Integré protocolos de comunicación industrial, controladores de hardware IoT y pipelines de telemetría en tiempo real.',
        'Guié a los equipos de ingeniería en código limpio, estándares REST/gRPC y flujos de integración continua con Docker.'
      ]
    },
    technologies: ['Go', 'Java', 'NestJS', 'PostgreSQL', 'Redis', 'Docker', 'Hexagonal Architecture', 'WebSockets'],
    published: true
  },
  {
    id: 'exp-factra-lead',
    position: {
      en: 'Lead Architect & Tech Lead (Electronic Invoicing)',
      es: 'Líder de Arquitectura y Tecnología (Facturación Electrónica)'
    },
    employer: 'Factra (Proyecto Personal / Solución Tecnológica)',
    start: '2021',
    end: {
      en: 'Present',
      es: 'Presente'
    },
    highlights: {
      en: [
        'Designed end-to-end electronic invoicing platform supporting high-volume tax document generation, validation, and signing.',
        'Built asynchronous queue consumers for resilient submission to government tax service endpoints.',
        'Implemented multi-tenant authorization, client API keys, and audit logging microservices.'
      ],
      es: [
        'Diseñé plataforma integral de facturación electrónica para generación, validación y firma de comprobantes tributarios de alto volumen.',
        'Construí consumidores de colas asíncronas para el envío tolerante a fallos hacia los servicios gubernamentales.',
        'Implementé microservicios de autorización multi-inquilino (multi-tenant), llaves de API para clientes y trazabilidad de auditoría.'
      ]
    },
    technologies: ['Go', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'RabbitMQ/Redis'],
    published: true
  }
]
