# Portafolio Profesional — Luis Ramos

Portafolio estático, responsive y bilingüe (EN/ES) construido con Vue 3, Vite, TypeScript y Tailwind CSS 4.

## 🚀 Requisitos e Instalación

### Requisitos
- Node.js 18+
- npm

### Instalación
```bash
npm install
```

### Servidor de desarrollo
```bash
npm run dev
```

### Compilación y Verificación de Tipos
```bash
npm run build
```

---

## 🛠️ Estructura del Proyecto

- `src/composables/useLocale.ts`: Estado global de idioma (EN/ES) con persistencia en `localStorage` y detección del navegador.
- `src/i18n/`: Diccionarios de traducción en español (`es.ts`) e inglés (`en.ts`).
- `src/types/portfolio.ts`: Interfaces de TypeScript (`Profile`, `Experience`, `Project`, `Technology`).
- `src/data/`: Datos verificados y tipados del portafolio.
- `src/components/`: Componentes modulares (`Navbar`, `Hero`, `About`, `Experience`, `Projects`, `ProjectCard`, `TechStack`, `Contact`, `Footer`).
- `.github/workflows/deploy.yml`: Workflow para despliegue automático en GitHub Pages.

---

## 📄 Personalización de Datos

Para modificar la información personal y los casos de estudio, edita los archivos en `src/data/`:
- `profile.ts`: Datos generales, bio y enlaces de contacto.
- `projects.ts`: Proyectos públicos y casos de estudio privados (filtrables por categoría).
- `experience.ts`: Línea de tiempo de experiencia laboral.
- `technologies.ts`: Habilidades técnicas por categorías.

---

## 🚢 Instrucciones de Despliegue en GitHub Pages

1. **Crear repositorio en GitHub:**
   Crea un repositorio público llamado `lrcliche.github.io` en tu cuenta de GitHub.

2. **Configuración remota en Git:**
   ```bash
   git remote add origin https://github.com/lrcliche/lrcliche.github.io.git
   git branch -M main
   git add .
   git commit -m "feat: implement initial portfolio MVP"
   git push -u origin main
   ```

3. **Activar GitHub Pages:**
   En GitHub, ve a **Settings** -> **Pages** -> **Source** y selecciona **GitHub Actions**.

El workflow `.github/workflows/deploy.yml` compilará y desplegará automáticamente la aplicación en `https://lrcliche.github.io/`.
