# Portafolio profesional — Luis Ramos

> Especificación de implementación para un agente de desarrollo. Proyecto independiente en `lrcliche.github.io`. **No crear repositorios, no hacer push, no cambiar ajustes de GitHub ni publicar sin autorización expresa.**

## 1. Objetivo
Construir una web estática, rápida, responsive y bilingüe (EN/ES), destinada a procesos de selección de Senior Software Engineer / Backend Engineer / Tech Lead, oportunidades mobile y clientes freelance. El mensaje principal debe ser **Senior Backend Engineer · Software Architecture · Mobile Development**. No parecer una landing de venta genérica, sino una cartera de trabajos verificables.

## 2. Contexto profesional y veracidad
- Nombre público: **Luis Ramos** (confirmar nombre completo visible antes de publicar).
- Perfil: Senior Backend Developer / Tech Lead, más de 7 años de experiencia reportada.
- Backend: Go, Java, Node.js, NestJS, TypeScript, APIs REST, microservicios, PostgreSQL, MongoDB, Redis, SQL Server, Docker, Linux, Nginx, arquitectura hexagonal, procesamiento asíncrono, WebSockets/gRPC según evidencia disponible.
- Frontend: Vue, React, Next.js, Vite, TypeScript.
- Mobile: Flutter/Dart, React Native + Expo (proyectos personales, incluida aplicación de taxis); Vue + Capacitor (POS móvil); conocimientos de Kotlin y Swift. **No confundir conocimientos con experiencia laboral formal ni inventar años por tecnología.**
- Casos de estudio candidatos: Factra (facturación electrónica, servicios y APIs), EMAUS POS (POS, inventario, pagos), integraciones industriales / dispensadores, POS móvil y app de taxis; incluir únicamente contenido confirmado y autorizado.
- GitHub: https://github.com/lrcliche
- Repositorio público de ejemplo: https://github.com/lrcliche/template_go_hexagonal_free
- Referencia pública adicional para revisar antes de usar: https://github.com/lrcliche/emaus-pos-landing
- Inglés: no atribuir dominio avanzado ni certificación no comprobada. Sitio bilingüe no implica nivel de inglés.
- No inventar clientes, métricas, empresas, certificados, fechas, enlaces de demos ni logros.

## 3. Stack y requisitos
- Vue 3 + Vite + TypeScript, Composition API / `<script setup>`.
- Tailwind CSS 4 con plugin `@tailwindcss/vite`.
- Proyecto **100 % estático**; no SSR ni backend obligatorio.
- Sin servicios de pago ni llaves en el frontend.
- Deploy con GitHub Actions a GitHub Pages para el repositorio especial `lrcliche.github.io` y `base: '/'` en Vite.
- Idiomas EN/ES con diccionarios propios o librería liviana; idioma elegible por botón, con preferencia local si es posible, y fallback previsible. Usar inglés predeterminado para reclutadores internacionales.
- Accesibilidad: navegación con teclado, contraste adecuado, alt en imágenes, enfoque visible, semántica HTML, respeto a `prefers-reduced-motion`.
- SEO: title, description, canonical `https://lrcliche.github.io/` (una vez publicada), Open Graph, favicon, sitemap, robots.txt y metadata por idioma si se implementa ruta por idioma.
- Performance: imágenes optimizadas (`webp`/`avif`), carga diferida, SVG livianos, sin librerías de animación pesadas.
- Código claro, sin componentes gigantes; validación con `npm run build` y typecheck (`vue-tsc`).

## 4. Diseño
Identidad sobria tipo sitio de ingeniería: fondo carbón o claro, acento moderado, tipografía legible, jerarquía visual, tarjetas limpias, navegación sticky y animaciones sutiles. Botón de cambiar tema claro/oscuro opcional. Nada de estadísticas inventadas ni barras porcentuales de habilidades. Logos oficiales o SVG con licencias verificadas, sin falsificar marcas ni atribuciones.

### Secciones
1. **Navbar**: logo tipográfico LR, enlaces Inicio, Sobre mí, Experiencia, Proyectos, Tecnologías, Contacto, selector EN/ES, CV.
2. **Hero**: nombre, rol, resumen concreto, CTA Ver proyectos / Descargar CV / Contactar. Indicador de disponibilidad solo si se confirma.
3. **About**: 2–3 párrafos naturales sobre backend, arquitectura, sistemas industriales y aplicaciones móviles.
4. **Experience**: línea de tiempo editable; **no publicar nombres de empleadores, cargos exactos o fechas sin verificar**. Datos iniciales marcados como `draft` o TODO no visibles públicamente.
5. **Projects**: cards filtrables Backend, Mobile, Full Stack, Industrial; cada caso de estudio con problema, solución, stack, rol, retos, resultado verificable, imágenes reales, enlaces públicos opcionales. No publicar código privado.
6. **TechStack**: categorías Backend, Frontend, Mobile, Databases, Infrastructure. No listar como experto herramientas conocidas superficialmente.
7. **Contact**: GitHub y LinkedIn (URL LinkedIn pendiente), mailto (correo profesional pendiente), botón copiar email solo al confirmar correo. Evitar formulario funcional sin backend.
8. **Footer**: año actualizado, enlace GitHub y aviso simple de derechos.

## 5. Estructura de carpetas objetivo
```text
lrcliche.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── images/
│   │   ├── projects/
│   │   └── logos/
│   ├── cv/
│   │   └── Luis_Ramos_Resume.pdf
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.vue
│   │   ├── Hero.vue
│   │   ├── About.vue
│   │   ├── Experience.vue
│   │   ├── Projects.vue
│   │   ├── ProjectCard.vue
│   │   ├── TechStack.vue
│   │   ├── Contact.vue
│   │   └── Footer.vue
│   ├── data/
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── technologies.ts
│   │   └── profile.ts
│   ├── i18n/
│   │   ├── en.ts
│   │   └── es.ts
│   ├── composables/
│   │   └── useLocale.ts
│   ├── types/
│   │   └── portfolio.ts
│   ├── App.vue
│   ├── main.ts
│   └── style.css
├── index.html
├── vite.config.ts
├── package.json
├── tsconfig.json
└── README.md
```
El PDF del CV solo se copiará si existe y se autoriza el uso de esa versión; si falta, mostrar un botón deshabilitado o retirar el enlace, nunca un enlace roto.

## 6. Datos tipados y editoriales
Definir tipos TypeScript:
- `Profile`: nombre, rol, presentación traducida, redes opcionales y ruta CV opcional.
- `Experience`: id, employer, position, start/end, highlights EN/ES, technologies, `published`.
- `Project`: id, title, summary EN/ES, category, tech[], problem, solution, outcome, image?, repoUrl?, demoUrl?, visibility ('public-repo'|'case-study'), featured, published.
- `Technology`: name, category, logo?, proficiencyLabel opcional (`professional`, `project`, `familiar`) sin puntuaciones arbitrarias.
Comportamiento: mostrar solo experiencias/proyectos `published: true`; fallback de imagen elegante cuando no exista; sanitizar enlaces externos con `rel="noopener noreferrer"`.

### Casos de estudio iniciales
- **Go Hexagonal Architecture Template**: enlace público real a `template_go_hexagonal_free`, texto confirmado en su README (Go, Gin, PostgreSQL y Ports & Adapters). No reproducir promesas no verificadas como un hecho.
- **Factra**: caso privado; hablar de arquitectura de microservicios, integraciones y FE sin credenciales, URLs internas ni diagramas que revelen secretos; pedir aprobación antes de publicarlo.
- **EMAUS POS**: caso privado; POS y modos de operación; pedir aprobación de capturas y marcas.
- **Industrial systems**: descripción de integraciones con dispensadores/eventos; sin nombres de clientes o detalles internos no públicos.
- **Mobile POS**: Capacitor, operaciones offline y sincronización en tanto esté validado; capturas autorizadas.
- **Taxi app**: Flutter/Dart y/o React Native+Expo solo tras precisar qué tecnología corresponde a cada app; marcar como proyecto personal.
No confundir la titularidad del software propio con autorización para mostrar información de terceros.

## 7. GitHub Pages / despliegue
1. El propietario creará manualmente el repositorio **público** `lrcliche.github.io` cuando lo decida.
2. Configurar en Vite `base: '/'` porque es un repositorio de usuario.
3. Crear workflow `.github/workflows/deploy.yml`:
   - disparador `push` a `main` y `workflow_dispatch`;
   - `permissions: contents: read, pages: write, id-token: write`;
   - `concurrency` para evitar despliegues simultáneos;
   - acciones oficiales actuales `actions/checkout`, `actions/setup-node`, `actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages`;
   - `npm ci`, `npm run build`, subir `./dist` y desplegar.
4. Propietario: Settings → Pages → Source → GitHub Actions.
5. Antes del primer push: revisar secretos, rutas, CV, derechos sobre logos/capturas y links.
6. **Ningún agente debe ejecutar `git push`, crear repo, cambiar visibilidad o desplegar sin aprobación expresa.**

## 8. Actualizaciones semanales y mensuales
- **En cada push autorizado**: CI compila y despliega. Validar link checks cuando sea viable.
- **Semanal**: opcional generar borrador de novedades desde repositorios *públicos* solamente. No exponer commits/repos privados; no convertir commits triviales en noticias. Por defecto, generar issue/PR de propuesta, no publicar automáticamente descripciones nuevas.
- **Mensual**: revisión manual de proyectos, imágenes/logos, habilidades, experiencia y CV; cada cambio de contenido pasa por revisión.
- No prometer programación recurrente fuera de GitHub Actions/configuración explícita; primero entregar sitio estable.

## 9. Fases de trabajo para el agente
**Fase 1 — Discovery sin escritura remota:** inspeccionar carpeta local si existe, confirmar configuración, pedir los datos faltantes estrictamente necesarios (LinkedIn, correo público, CV, fotografías, fechas y capturas autorizadas). No modificar proyectos previos.

**Fase 2 — MVP local:** scaffold Vue/Vite/TS, Tailwind, navegación responsive, secciones, contenido bilingüe y modo de proyecto privado, favicon provisional original, README de instalación. Priorizar calidad móvil.

**Fase 3 — Validación:** ejecutar `npm install`, `npm run build` y typecheck; inspeccionar layouts móvil/tablet/escritorio, comprobar navegación con teclado, contrastes, idiomas, links y ausencia de secretos. Reportar comandos y resultados.

**Fase 4 — Deploy listo, no ejecutado:** incluir workflow Pages, documentar cómo crear repositorio y subirlo manualmente; esperar autorización para cualquier acción remota.

**Fase 5 — Evolución:** casos de estudio profundos, métricas solo verificadas, Open Graph por proyecto, automatización editorial con PR revisables, posible dominio propio.

## 10. Criterios de aceptación
- Ejecuta localmente y genera `dist/` sin errores TypeScript.
- Diseño útil en 360px, 768px y desktop; menú accesible.
- Inglés y español completos, sin mezclas accidentales.
- Cada CTA funciona; si falta un enlace, no renderizarlo.
- Los casos privados son explicativos, no enlazan a repositorios privados ni divulgan secretos.
- CV servido únicamente si existe y está aprobado.
- Workflow GitHub Pages documentado; **sin ejecutar publicación**.
- README incluye instalación, edición de contenido, imágenes, build, despliegue y mantenimiento.
- Entrega final del agente: archivos cambiados, pruebas realizadas, pendientes y comandos manuales para Git.

## 11. Prompt de ejecución para el agente
> Implementa localmente la especificación de este documento como un portafolio Vue 3 + Vite + TypeScript + Tailwind CSS. Antes de cambiar archivos, revisa si existe un proyecto y aprovecha su estructura. Mantén cambios mínimos, consistencia visual y contenido real, y nunca inventes trayectoria profesional. No accedas ni publiques repositorios privados. No hagas push ni cambies configuraciones remotas. Entrega un MVP completo, responsive y bilingüe, incluye despliegue preparado para GitHub Pages, ejecuta build/typecheck y comunica resultados y datos pendientes para aprobación.
