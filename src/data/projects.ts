import type { Project } from '../types/portfolio'

export const projectsData: Project[] = [
  {
    id: 'factra-electronic-invoicing',
    title: 'Factra — Electronic Invoicing Platform (Personal Project)',
    summary: {
      en: 'Personal electronic invoicing engine and API suite for high-volume tax document signing, validation, and submission.',
      es: 'Plataforma y suite de APIs personal de facturación electrónica para firma, validación y envío masivo de comprobantes tributarios.'
    },
    category: 'backend',
    tech: ['Go', 'Node.js / TypeScript', 'PostgreSQL', 'Docker', 'REST APIs', 'Redis'],
    problem: {
      en: 'Required a high-throughput, fault-tolerant invoicing engine capable of processing spikes of tax invoices with zero data loss.',
      es: 'Se requería un motor de facturación de alto rendimiento y tolerante a fallos capaz de procesar picos de emisión tributaria sin pérdida de información.'
    },
    solution: {
      en: 'Architected async queued processing pipeline for PDF/XML document generation, XAdES/XMLDSig cryptographic signing, and retry adapters.',
      es: 'Se diseñó un pipeline de procesamiento asíncrono para generación de comprobantes PDF/XML, firma criptográfica XAdES/XMLDSig y adaptadores de reintento.'
    },
    outcome: {
      en: 'Robust personal software product delivering fast document validation and complete compliance under heavy load spikes.',
      es: 'Producto de software personal robusto que entrega rápida validación de comprobantes y cumplimiento completo bajo picos de carga.'
    },
    visibility: 'case-study',
    featured: true,
    published: true
  },
  {
    id: 'urban-taxi-app',
    title: 'Urban Mobility & Taxi App (Personal Project)',
    summary: {
      en: 'Personal mobile ecosystem for real-time ride matching, live GPS tracking, and route optimization.',
      es: 'Ecosistema móvil personal para asignación de viajes en tiempo real, rastreo GPS en vivo y optimización de rutas.'
    },
    category: 'mobile',
    tech: ['Flutter / Dart', 'React Native / Expo', 'WebSockets', 'Go', 'REST APIs'],
    problem: {
      en: 'Exploring cross-platform mobile patterns for live location streaming, instant driver dispatch, and low-latency socket state.',
      es: 'Exploración de patrones móviles multiplataforma para emisión de ubicación en vivo, despacho instantáneo de conductores y estado por sockets.'
    },
    solution: {
      en: 'Developed a dual passenger/driver workflow featuring interactive map integration, WebSocket location update events, and state management.',
      es: 'Se desarrolló un flujo para pasajeros y conductores con integración de mapas interactivos, eventos WebSocket de ubicación y gestión de estado.'
    },
    outcome: {
      en: 'Fully functional personal prototype showcasing mobile UI architecture and geospatial event handling.',
      es: 'Prototipo personal funcional que demuestra arquitectura UI móvil y manejo de eventos geoespaciales.'
    },
    visibility: 'case-study',
    featured: true,
    published: true
  },
  {
    id: 'go-hexagonal-template',
    title: 'Go Hexagonal Architecture Template',
    summary: {
      en: 'Open source production-ready boilerplate for building Go microservices with Ports & Adapters architecture.',
      es: 'Plantilla de código abierto lista para producción para construir microservicios en Go con arquitectura Ports & Adapters.'
    },
    category: 'backend',
    tech: ['Go', 'Gin', 'PostgreSQL', 'Hexagonal Architecture', 'Docker'],
    problem: {
      en: 'Need for a clean, consistent starter template in Go enforcing strict separation between core domain logic and external infrastructure adapters.',
      es: 'Necesidad de una plantilla inicial limpia y consistente en Go que fuerce la separación estricta entre la lógica de dominio y los adaptadores de infraestructura.'
    },
    solution: {
      en: 'Implemented HTTP REST handlers, Gin web framework, PostgreSQL repository interfaces, and environment configuration structured cleanly into ports and adapters.',
      es: 'Se implementaron controladores HTTP REST con Gin, interfaces de repositorio para PostgreSQL y configuración de entorno estructuradas limpiamente en puertos y adaptadores.'
    },
    outcome: {
      en: 'Public reference template on GitHub serving as a blueprint for modular, highly testable backend services.',
      es: 'Plantilla pública de referencia en GitHub que sirve como modelo para servicios backend modulares y testeables.'
    },
    repoUrl: 'https://github.com/lrcliche/template_go_hexagonal_free',
    visibility: 'public-repo',
    featured: true,
    published: true
  },
  {
    id: 'emaus-pos-system',
    title: 'EMAUS POS — Point of Sale & Inventory',
    summary: {
      en: 'Multi-branch point-of-sale system with real-time stock sync, cashier management, and sales reports.',
      es: 'Sistema de punto de venta multisucursal con sincronización de inventario en tiempo real, gestión de cajas y reportes de ventas.'
    },
    category: 'fullstack',
    tech: ['NestJS', 'TypeScript', 'Vue', 'PostgreSQL', 'Redis'],
    problem: {
      en: 'Outdated legacy sales software experiencing slow transaction speed and inventory sync conflicts across branches.',
      es: 'Software de ventas heredado con baja velocidad de transacción y conflictos de sincronización de stock entre sucursales.'
    },
    solution: {
      en: 'Developed modular backend services coupled with a responsive frontend interface supporting offline cash operations and real-time inventory locking.',
      es: 'Se desarrollaron servicios backend modulares junto a una interfaz web responsive capaz de soportar operaciones de caja e inventario en tiempo real.'
    },
    outcome: {
      en: 'Improved cashier throughput, eliminated inventory discrepancies, and streamlined daily reconciliation reports.',
      es: 'Mejora en la velocidad de atención en caja, eliminación de discrepancias de inventario y agilización de arqueos diarios.'
    },
    visibility: 'case-study',
    featured: false,
    published: true
  },
  {
    id: 'industrial-dispenser-integrations',
    title: 'Industrial Controller & Event Integrations',
    summary: {
      en: 'Event-driven communication bridge interfacing hardware controllers and dispenser units with cloud backend APIs.',
      es: 'Puente de comunicación orientado a eventos que conecta controladores de hardware y dispensadores con APIs backend en la nube.'
    },
    category: 'industrial',
    tech: ['Go', 'WebSockets', 'TCP/IP Sockets', 'Redis', 'Docker'],
    problem: {
      en: 'Connecting proprietary hardware dispensing devices to central server management over low-latency socket protocols.',
      es: 'Conexión de dispositivos dispensadores de hardware propietario con el servidor central mediante protocolos de socket de baja latencia.'
    },
    solution: {
      en: 'Created an asynchronous event listener using Go and WebSockets to process telemetry signals, manage state machines, and broadcast live alerts.',
      es: 'Se creó un oyente de eventos asíncrono en Go y WebSockets para procesar señales telemétricas, gestionar máquinas de estado y emitir alertas en vivo.'
    },
    outcome: {
      en: 'High reliability under unstable connectivity and immediate visibility over physical dispenser operations.',
      es: 'Alta confiabilidad en conectividad inestable y visibilidad inmediata sobre la operación física de los dispensadores.'
    },
    visibility: 'case-study',
    featured: false,
    published: true
  },
  {
    id: 'mobile-pos-capacitor',
    title: 'Mobile POS & Offline Sync',
    summary: {
      en: 'Cross-platform mobile application enabling store clerks to perform mobile checkout and inventory audits.',
      es: 'Aplicación móvil multiplataforma que permite a los vendedores realizar ventas en movilidad y auditorías de inventario.'
    },
    category: 'mobile',
    tech: ['Vue 3', 'Capacitor', 'TypeScript', 'SQLite', 'Tailwind CSS'],
    problem: {
      en: 'Need for a handheld checkout terminal that continues operating inside warehouse areas without active Wi-Fi connection.',
      es: 'Necesidad de una terminal de venta portátil que continúe operando en zonas de almacén sin conexión Wi-Fi activa.'
    },
    solution: {
      en: 'Built a mobile web app wrapped with Capacitor, using local SQLite storage for offline transactions and background sync on reconnect.',
      es: 'Se construyó una app móvil empaquetada con Capacitor usando SQLite local para guardar transacciones offline y sincronizar en segundo plano al reconectar.'
    },
    outcome: {
      en: 'Fast sales processing on mobile handheld devices with resilient automatic synchronization.',
      es: 'Procesamiento rápido de ventas en dispositivos portátiles con sincronización automática y resistente.'
    },
    visibility: 'case-study',
    featured: false,
    published: true
  }
]
