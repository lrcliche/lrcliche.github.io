import type { ExpertiseItem } from '../types/portfolio'

export const expertiseData: ExpertiseItem[] = [
  {
    id: 'backend-microservices',
    title: {
      en: 'Backend & Microservices',
      es: 'Backend y Microservicios'
    },
    description: {
      en: 'Designing and building resilient high-throughput backend services using Go, Java, and NestJS/Node.js focused on clean domain boundaries and strict API design.',
      es: 'Diseño y construcción de servicios backend resilientes de alto rendimiento con Go, Java y NestJS/Node.js enfocados en límites de dominio limpios y diseño estricto de APIs.'
    },
    skills: ['Go', 'Java', 'Node.js', 'NestJS', 'REST APIs', 'gRPC', 'WebSockets'],
    icon: 'server'
  },
  {
    id: 'distributed-messaging',
    title: {
      en: 'Distributed Systems & Messaging',
      es: 'Sistemas Distribuidos y Mensajería'
    },
    description: {
      en: 'Design and integration of asynchronous processing workflows using RabbitMQ, MQTT, gRPC, and event-driven architectures, including high-volume data processing and service-to-service communication.',
      es: 'Diseño e integración de flujos de trabajo de procesamiento asíncrono utilizando RabbitMQ, MQTT, gRPC y arquitecturas orientadas a eventos, incluyendo procesamiento masivo de datos y comunicación entre servicios.'
    },
    skills: ['RabbitMQ', 'MQTT', 'gRPC', 'Event-Driven', 'Async Processing', 'TCP/IP'],
    icon: 'cpu'
  },
  {
    id: 'industrial-integrations',
    title: {
      en: 'Industrial Integrations & IoT',
      es: 'Integraciones Industriales e IoT'
    },
    description: {
      en: 'Interfacing edge devices, fuel dispensers, ATG systems (Veeder-Root), serial controllers, and Modbus/TCP communications with centralized cloud backend services.',
      es: 'Conexión de dispositivos Edge, surtidores de combustible, sistemas ATG (Veeder-Root), controladores seriales y comunicaciones Modbus/TCP con servicios backend centralizados en la nube.'
    },
    skills: ['Veeder-Root', 'ATG Systems', 'Modbus', 'TCP/IP', 'Serial Comms', 'Edge Services'],
    icon: 'radio'
  },
  {
    id: 'databases-dba',
    title: {
      en: 'Databases & Data Processing',
      es: 'Bases de Datos y Procesamiento de Datos'
    },
    description: {
      en: 'Schema design, query optimization, DBA administration, and high-volume data integration across PostgreSQL, MongoDB, SQL Server, and Redis caching layers.',
      es: 'Diseño de esquemas, optimización de consultas, administración DBA e integración de datos masivos en PostgreSQL, MongoDB, SQL Server y capas de caché con Redis.'
    },
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL Server', 'Query Tuning', 'DBA Ops'],
    icon: 'database'
  },
  {
    id: 'mobile-development',
    title: {
      en: 'Mobile Development',
      es: 'Desarrollo Móvil Multiplataforma'
    },
    description: {
      en: 'Building cross-platform mobile products for retail POS handhelds and mobility services using Flutter/Dart, React Native/Expo, and Vue + Capacitor with offline-first capabilities.',
      es: 'Construcción de productos móviles multiplataforma para terminales POS portátiles y movilidad con Flutter/Dart, React Native/Expo y Vue + Capacitor con arquitectura offline-first.'
    },
    skills: ['Flutter', 'React Native / Expo', 'Vue + Capacitor', 'Offline Sync', 'SQLite'],
    icon: 'smartphone'
  },
  {
    id: 'infrastructure-devops',
    title: {
      en: 'Infrastructure & Production Operations',
      es: 'Infraestructura y Operación en Producción'
    },
    description: {
      en: 'Linux server management, VPS configuration, Docker containerization, SonarQube code quality audits, manual production deployments, and live incident troubleshooting.',
      es: 'Administración de servidores Linux, configuración VPS, contenedorización con Docker, auditorías de calidad con SonarQube, despliegues manuales y resolución de incidentes en producción.'
    },
    skills: ['Linux / VPS', 'Docker', 'Nginx', 'SonarQube', 'Production Troubleshooting', 'CI/CD'],
    icon: 'cloud'
  },
  {
    id: 'software-architecture',
    title: {
      en: 'Software Architecture',
      es: 'Arquitectura de Software'
    },
    description: {
      en: 'Applying Hexagonal Architecture (Ports & Adapters), Clean Architecture, Domain-Driven Design principles, and SOLID patterns to guarantee maintainable codebases.',
      es: 'Aplicación de Arquitectura Hexagonal (Ports & Adapters), Clean Architecture, principios de Domain-Driven Design y patrones SOLID para garantizar código altamente mantenible.'
    },
    skills: ['Hexagonal Arch', 'DDD Principles', 'Clean Architecture', 'SOLID', 'API Design'],
    icon: 'layers'
  },
  {
    id: 'technical-leadership',
    title: {
      en: 'Technical Leadership',
      es: 'Liderazgo Técnico'
    },
    description: {
      en: 'Guiding engineering teams, conducting code reviews, establishing API standards, resolving production blockers, and balancing technical debt with business delivery.',
      es: 'Guía de equipos de ingeniería, revisiones de código, establecimiento de estándares de API, resolución de bloqueos productivos y equilibrio de deuda técnica con entregas de negocio.'
    },
    skills: ['Code Review', 'Team Mentoring', 'API Standards', 'Incident Response', 'Agile Delivery'],
    icon: 'users'
  }
]
