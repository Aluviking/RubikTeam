# RUBIK - Plataforma de Transformación Digital

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0.3-646CFF.svg)](https://vitejs.dev/)

Plataforma web premium para servicios de transformación digital, ciberseguridad, desarrollo web, automatización y consultoría estratégica.

## 🚀 Características

- ✨ **Diseño Premium**: Interfaz moderna con animaciones fluidas
- 🎨 **Sistema de Diseño**: Paleta de colores roja consistente
- 📱 **Responsive**: Optimizado para móvil, tablet y desktop
- ⚡ **Alto Rendimiento**: Build optimizado de 99.57 kB (gzipped)
- 🔒 **TypeScript**: Código type-safe y mantenible
- 🎭 **Animaciones**: Framer Motion para experiencias interactivas
- 🎯 **SEO Ready**: Metadatos y estructura semántica

## 📋 Requisitos Previos

- Node.js >= 18.0.0
- npm >= 9.0.0

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd RUBI

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 📦 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo en http://localhost:5173
npm run build    # Compilar para producción
npm run preview  # Preview del build de producción
npm run lint     # Ejecutar linter (ESLint)
```

## 🏗️ Estructura del Proyecto

```
RUBI/
├── public/
│   └── img/              # Imágenes estáticas
├── src/
│   ├── components/       # Componentes React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ValueProposition.tsx
│   │   ├── Pricing.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── ESTRUCTURA.md        # Documentación detallada
└── package.json
```

## 🎨 Tecnologías

### Core
- **React 18.3.1** - Biblioteca UI
- **TypeScript 5.7.2** - Lenguaje tipado
- **Vite 6.0.3** - Build tool y dev server

### Styling
- **Tailwind CSS 3.4.1** - Framework de utilidades CSS
- **Framer Motion 11.0.5** - Animaciones

### UI Components
- **React Icons 5.4.0** - Biblioteca de iconos

## 🎯 Secciones

1. **Hero** - Presentación principal con stats (7+ Servicios, 99% Satisfacción, 24/7 Soporte)
2. **Propuesta de Valor** - 3 pilares: Velocidad Cognitiva, Núcleo Fortificado, Escala Neural
3. **Planes** - 3 tiers de precios: Fundación, Nexus, Soberano
4. **Proyectos** - Casos de estudio con filtros (FinTech, IA Salud, Logística)
5. **Contacto** - Formulario con mapa 3D interactivo

## 🎨 Paleta de Colores

```css
--rubi-red: #E60023;       /* Color principal */
--rubi-crimson: #990011;   /* Hover states */
--rubi-black: #050507;     /* Fondo principal */
--rubi-dark: #0F0F12;      /* Cards */
--rubi-gray: #88888F;      /* Textos secundarios */
```

## 📱 Responsive Design

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuración

### Tailwind
Configuración personalizada en `tailwind.config.js`:
- Colores personalizados (rubi-*)
- Fuentes: Inter, Plus Jakarta Sans, Space Grotesk, Rajdhani, Orbitron
- Animaciones custom: float, pulse-slow, shimmer, scan

### TypeScript
Configuración estricta en `tsconfig.json`:
- Strict mode activado
- Module resolution: bundler
- Target: ES2020

## 📈 Rendimiento

Build optimizado:
- HTML: 1.03 kB (gzipped: 0.54 kB)
- CSS: 44.79 kB (gzipped: 7.62 kB)
- JS: 324.58 kB (gzipped: 99.57 kB)

## 🔐 Seguridad

- Sin vulnerabilidades conocidas
- Dependencias actualizadas
- TypeScript para type safety
- Validación de formularios

## 📄 Licencia

Todos los derechos reservados © 2024 RUBIK

## 👥 Soporte

Para consultas o soporte:
- Email: intelligence@rubik.io
- Ubicación: Bogotá, Colombia

---

Desarrollado con ❤️ usando React, TypeScript, Tailwind CSS y Framer Motion
