import type { Experience } from '../types/portfolio'

export const experienceData: Experience[] = [
  {
    id: 'exp-devitech',
    position: {
      en: 'Senior Backend / Full Stack Engineer & DBA',
      es: 'Senior Backend / Full Stack Engineer y DBA'
    },
    employer: 'Devitech S.A.S',
    start: '2019',
    end: {
      en: 'Present',
      es: 'Presente'
    },
    highlights: {
      en: [
        'Engineered scalable backend APIs, microservices, and Full Stack features using Go, Java, and TypeScript/Node.js.',
        'Managed PostgreSQL and MongoDB database administration, query optimization, indexing, and high-volume data integration.',
        'Architected async messaging pipelines utilizing RabbitMQ, MQTT, gRPC, and custom event processing for POS systems.',
        'Integrated industrial fuel dispensers, ATG systems, Veeder-Root controllers, Modbus, TCP/IP, and serial device communications.',
        'Performed Linux/VPS server management, manual production deployments, SonarQube code quality audits, and live incident troubleshooting.'
      ],
      es: [
        'Desarrollo de APIs backend escalables, microservicios y funcionalidades Full Stack utilizando Go, Java y TypeScript/Node.js.',
        'Administración de bases de datos PostgreSQL y MongoDB, optimización de consultas SQL, indexación e integración masiva de información.',
        'Diseño de pipelines de mensajería asíncrona utilizando RabbitMQ, MQTT, gRPC y procesamiento propio de eventos para sistemas POS.',
        'Integración con surtidores de combustible, dispositivos ATG, sistemas Veeder-Root, comunicación Modbus, TCP/IP y serial.',
        'Administración de servidores Linux/VPS, despliegues manuales en producción, análisis de calidad con SonarQube y resolución de incidentes productivos.'
      ]
    },
    technologies: ['Go', 'Java', 'Node.js', 'PostgreSQL', 'MongoDB', 'RabbitMQ', 'MQTT', 'gRPC', 'Modbus', 'TCP/IP', 'Linux', 'SonarQube'],
    published: true
  },
  {
    id: 'exp-factra-lead',
    position: {
      en: 'Lead Architect & Developer (Electronic Invoicing)',
      es: 'Líder de Arquitectura y Desarrollo (Facturación Electrónica)'
    },
    employer: 'Factra (Plataforma SaaS / Proyecto Tecnológico)',
    start: '2021',
    end: {
      en: 'Present',
      es: 'Presente'
    },
    highlights: {
      en: [
        'Designed end-to-end electronic invoicing platform supporting high-volume tax document generation, validation, and XAdES/XMLDSig signing.',
        'Built asynchronous queue consumers for resilient submission to government tax service endpoints with zero data loss.',
        'Implemented multi-tenant authorization, client API keys, sales/inventory modules, and audit logging microservices.'
      ],
      es: [
        'Diseñé plataforma integral de facturación electrónica para generación, validación y firma criptográfica (XAdES/XMLDSig) de comprobantes tributarios de alto volumen.',
        'Construí consumidores de colas asíncronas para el envío tolerante a fallos hacia los servicios gubernamentales sin pérdida de datos.',
        'Implementé microservicios de autorización multi-inquilino (multi-tenant), llaves de API para clientes, módulos de ventas/inventario y trazabilidad de auditoría.'
      ]
    },
    technologies: ['Go', 'Node.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Docker', 'Redis', 'REST APIs'],
    published: true
  }
]
