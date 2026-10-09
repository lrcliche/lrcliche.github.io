import type { Project } from '../types/portfolio'

export const projectsData: Project[] = [
  {
    id: 'factra-platform',
    title: 'Factra — Electronic Invoicing & SaaS Ecosystem',
    summary: {
      en: 'Microservices-based electronic invoicing platform, API gateway, inventory, sales, payment management, and async tax document validation.',
      es: 'Ecosistema SaaS de facturación electrónica basado en microservicios, API Gateway, inventario, ventas, pagos y validación asíncrona de comprobantes.'
    },
    category: 'backend',
    tech: ['Go', 'Node.js', 'NestJS', 'PostgreSQL', 'API Gateway', 'Docker', 'Redis'],
    problem: {
      en: 'High-volume tax document processing requires resilient architectural boundaries, authentication gateways, and zero-loss queuing mechanisms for government endpoints.',
      es: 'El procesamiento masivo de comprobantes tributarios requiere límites arquitectónicos resilientes, pasarelas de autenticación y mecanismos de colas sin pérdida para servicios gubernamentales.'
    },
    solution: {
      en: 'Built modular microservices around API Gateway authentication, async queue workers for XAdES/XMLDSig signing, sales/inventory modules, and audit logging.',
      es: 'Se construyeron microservicios modulares con autenticación mediante API Gateway, trabajadores de colas asíncronas para firma XAdES/XMLDSig, módulos de ventas/inventario y auditoría.'
    },
    outcome: {
      en: 'Scalable SaaS architecture providing fast document response times, reliable inventory locks, and fault-tolerant retry workflows.',
      es: 'Arquitectura SaaS escalable que ofrece respuestas rápidas en comprobantes, bloqueos de inventario confiables y flujos de reintento con tolerancia a fallos.'
    },
    visibility: 'case-study',
    featured: true,
    published: true
  },
  {
    id: 'factra-mobile-pos',
    title: 'Factra Mobile POS — Handheld Checkout & Offline Sync',
    summary: {
      en: 'Cross-platform mobile application for handheld sales checkout, barcode scanning, local persistence, and background cloud sync.',
      es: 'Aplicación móvil multiplataforma para ventas en terminales portátiles, escaneo de código de barras, persistencia local y sincronización en segundo plano.'
    },
    category: 'mobile',
    tech: ['Vue 3', 'Vite', 'Capacitor', 'TypeScript', 'Tailwind CSS', 'SQLite'],
    problem: {
      en: 'Store operators need handheld sales terminals that continue performing billing and stock lookup inside warehouse zones without Wi-Fi connectivity.',
      es: 'Operadores comerciales requieren terminales de venta portátiles que continúen facturando y consultando inventario en zonas sin cobertura Wi-Fi.'
    },
    solution: {
      en: 'Implemented a Vue + Capacitor hybrid mobile app featuring camera barcode scanning, mobile/tablet layouts, SQLite offline queue storage, background sync, and prep for Bluetooth thermal printing.',
      es: 'Se implementó una app móvil híbrida con Vue + Capacitor con escaneo de barras por cámara, pantallas adaptadas a móviles/tablets, almacenamiento SQLite offline, sincronización y preparación para impresoras térmicas Bluetooth.'
    },
    outcome: {
      en: 'High sales speed on handheld devices with resilient automatic background synchronization upon reconnection.',
      es: 'Alta velocidad de atención en movilidad con sincronización automática en segundo plano al recuperar conexión.'
    },
    visibility: 'case-study',
    featured: true,
    published: true
  },
  {
    id: 'emaus-pos-system',
    title: 'EMAUS POS — Multi-Branch Point of Sale & Inventory',
    summary: {
      en: 'Full Stack multi-branch point-of-sale system featuring shift control, terminal management, inventory locks, and sales reporting.',
      es: 'Sistema de punto de venta multisucursal Full Stack con control de turnos, gestión de terminales, bloqueo de inventario y reportes de ventas.'
    },
    category: 'fullstack',
    tech: ['NestJS', 'TypeScript', 'Vue 3', 'PostgreSQL', 'Redis', 'Docker'],
    problem: {
      en: 'Retail stores required fast checkout terminals, shift reconciliation, real-time inventory synchronization across locations, and external system integrations.',
      es: 'Tiendas comerciales requerían velocidad en terminales de caja, arqueos de turno, sincronización de stock en tiempo real entre sedes e integraciones externas.'
    },
    solution: {
      en: 'Architected modular NestJS backend services coupled with a responsive Vue frontend, handling offline cash sessions, inventory locking, and audit logs.',
      es: 'Se diseñó un backend NestJS modular junto a un frontend Vue responsive, gestionando sesiones de caja offline, bloqueo de inventario y registros de auditoría.'
    },
    outcome: {
      en: 'Streamlined cashier workflows, eliminated inventory sync conflicts, and improved daily shift audit accuracy.',
      es: 'Flujos de atención optimizados, eliminación de conflictos de inventario y precisión en arqueos de caja diarios.'
    },
    visibility: 'case-study',
    featured: true,
    published: true
  },
  {
    id: 'industrial-dispenser-integrations',
    title: 'Industrial Controller & Real-Time Event Integrations',
    summary: {
      en: 'Event-driven edge integration connecting fuel dispensers, ATG devices (Veeder-Root), serial/Modbus protocols, and cloud APIs.',
      es: 'Integración en el borde orientada a eventos para conexión de surtidores, dispositivos ATG (Veeder-Root), protocolos serial/Modbus y APIs en la nube.'
    },
    category: 'industrial',
    tech: ['Go', 'Veeder-Root ATG', 'Modbus', 'TCP/IP', 'Serial Comms', 'MQTT', 'RabbitMQ', 'Redis'],
    problem: {
      en: 'Interfacing physical fuel dispensing hardware and tank monitoring units over serial/TCP protocols with cloud-based ERP and reporting engines.',
      es: 'Conexión de hardware físico de dispensado y monitoreo de tanques sobre protocolos serial/TCP con motores de reporte y ERPs en la nube.'
    },
    solution: {
      en: 'Built an event-driven edge listener using Go, MQTT, and RabbitMQ to process high-frequency telemetry, control dispenser state machines, and persist operational metrics into PostgreSQL/MongoDB.',
      es: 'Se construyó un oyente en el borde en Go, MQTT y RabbitMQ para procesar telemetría de alta frecuencia, controlar máquinas de estado y guardar métricas en PostgreSQL/MongoDB.'
    },
    outcome: {
      en: 'High fault tolerance over unstable networks and immediate telemetry visibility for industrial operations.',
      es: 'Alta tolerancia a fallos en redes inestables y visibilidad inmediata de telemetría para operaciones industriales.'
    },
    visibility: 'case-study',
    featured: true,
    published: true
  },
  {
    id: 'go-hexagonal-template',
    title: 'Go Hexagonal Architecture Template',
    summary: {
      en: 'Open-source production-ready starter template for building Go microservices with Ports & Adapters architecture.',
      es: 'Plantilla de código abierto lista para producción para construir microservicios en Go con arquitectura Ports & Adapters.'
    },
    category: 'backend',
    tech: ['Go', 'Gin', 'PostgreSQL', 'Hexagonal Architecture', 'Docker'],
    problem: {
      en: 'Need for a clean, consistent starter template in Go enforcing strict separation between core domain logic and external infrastructure adapters.',
      es: 'Necesidad de una plantilla inicial limpia y consistente en Go que fuerce la separación estricta entre la lógica de dominio y adaptadores de infraestructura.'
    },
    solution: {
      en: 'Implemented HTTP REST handlers, Gin web framework, PostgreSQL repository interfaces, unit tests, and environment configuration cleanly decoupled.',
      es: 'Se implementaron controladores HTTP REST con Gin, interfaces de repositorio para PostgreSQL, pruebas unitarias y configuración desacoplada.'
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
    id: 'urban-taxi-app',
    title: 'Urban Mobility & Taxi Application (Personal Project)',
    summary: {
      en: 'Personal mobile application exploring real-time location streaming, driver dispatch, ride matching, and route optimization.',
      es: 'Proyecto personal móvil enfocado en transmisión de ubicación en vivo, despacho de conductores, asignación de viajes y rutas.'
    },
    category: 'mobile',
    tech: ['Flutter / Dart', 'React Native / Expo', 'WebSockets', 'Go', 'REST APIs'],
    problem: {
      en: 'Exploring cross-platform mobile patterns for live location streaming and driver dispatch mechanisms over low-latency WebSockets.',
      es: 'Exploración de patrones móviles multiplataforma para transmisión de ubicación en vivo y mecanismos de despacho sobre WebSockets.'
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
    featured: false,
    published: true
  }
]
