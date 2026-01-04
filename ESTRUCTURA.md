# 🏗️ Estructura del Proyecto RUBIK

## 📂 Organización de Archivos

```
RUBI/
├── public/
│   └── img/
│       └── logo.jpg              # Logo de RUBIK
├── src/
│   ├── components/
│   │   ├── Header.tsx            # ✅ Navegación principal (blanco)
│   │   ├── Hero.tsx              # ✅ Sección hero con stats
│   │   ├── ValueProposition.tsx  # ✅ Propuesta de valor (3 cards)
│   │   ├── Pricing.tsx           # ✅ Planes de precios (3 tiers)
│   │   ├── Projects.tsx          # ✅ Casos de estudio con filtros
│   │   ├── Contact.tsx           # ✅ Formulario de contacto
│   │   ├── Footer.tsx            # ✅ Footer (blanco)
│   │   └── Services.tsx          # ⚠️ NO USADO (mantener por si se necesita)
│   ├── App.tsx                   # Componente principal
│   ├── main.tsx                  # Punto de entrada
│   └── index.css                 # Estilos globales
├── index.html                    # HTML base
├── tailwind.config.js            # Configuración de Tailwind
├── package.json                  # Dependencias
└── tsconfig.json                 # Configuración TypeScript
```

## 🎨 Sistema de Colores

### Paleta Principal
- **rubi-red**: `#E60023` - Color principal de la marca
- **rubi-crimson**: `#990011` - Color secundario (hover states)
- **rubi-black**: `#050507` - Fondo principal
- **rubi-dark**: `#0F0F12` - Fondo de cards/secciones
- **rubi-gray**: `#88888F` - Textos secundarios

### Colores Neutros
- **neutral-dark**: `#000000`
- **neutral-gray**: `#4B4B4B`
- **neutral-light**: `#FFFFFF`

## 🔤 Tipografía

### Fuentes Configuradas
1. **Sans (cuerpo)**: Inter
2. **Display (títulos)**: Plus Jakarta Sans
3. **Logo (marca)**: Space Grotesk, Rajdhani, Orbitron

### Tamaños Personalizados
- `description`: 16px
- `heading`: 18px

## 📍 Secciones y IDs

| Sección | ID | Componente | Orden |
|---------|----|-----------:|-------|
| Hero | `#inicio` | Hero.tsx | 1 |
| Propuesta de Valor | `#propuesta` | ValueProposition.tsx | 2 |
| Planes | `#planes` | Pricing.tsx | 3 |
| Proyectos | `#proyectos` | Projects.tsx | 4 |
| Contacto | `#contacto` | Contact.tsx | 5 |

## 🎭 Animaciones

### Framer Motion
- **Animaciones de entrada**: `initial`, `whileInView`, `viewport`
- **Hover states**: `whileHover`, `whileTap`
- **Transiciones**: `transition`, `delay`

### Animaciones Personalizadas (Tailwind)
- `animate-float`: Flotación suave (10s)
- `animate-pulse-slow`: Pulso lento (6s)
- `animate-shimmer`: Efecto shimmer (2.5s)
- `animate-scan`: Línea escaneadora (3s)
- `animate-spin-slow`: Rotación lenta (30s)

## 🎯 Componentes Principales

### 1. Header (Navegación)
```typescript
// Enlaces de navegación
- Inicio → #inicio
- Propuesta → #propuesta
- Planes → #planes
- Proyectos → #proyectos

// CTAs
- Acceso Cliente (link)
- Inicializar (botón → #contacto)
```

### 2. Hero
```typescript
// Elementos
- Badge de estado: "System 4.0 Active"
- Título principal con gradiente rojo
- Descripción
- 2 CTAs: "Comenzar ahora", "Ver propuesta"
- Stats: 7+ Servicios, 99% Satisfacción, 24/7 Soporte
```

### 3. ValueProposition
```typescript
// 3 Cards principales
1. Velocidad Cognitiva (01 / Latencia)
2. Núcleo Fortificado (02 / Defensa)
3. Escala Neural (03 / Expansión)

// Stats inferiores
- 99.9% Garantía de Uptime
- <20ms Latencia Global
- 256 Encriptación Bit
```

### 4. Pricing
```typescript
// 3 Planes
1. Fundación (Entrada) - $0/mes
2. Nexus (Profesional) - $890/mes [ACTIVO]
3. Soberano (Empresarial) - Personalizado

// Toggle: MENSUAL / ANUAL (-20%)
```

### 5. Projects (Casos de Estudio)
```typescript
// Filtros
- Todos los Sistemas
- FinTech
- IA Salud
- Logística

// 4 Proyectos
1. Apex Ledger (FinTech)
2. Neural Diag (IA Salud)
3. Omni Flow (Logística)
4. Iron Vault (Ciberseguridad)
```

### 6. Contact
```typescript
// Formulario
- Nombre / Apellido
- Email Empresarial
- Tipo de Consulta (select)
- Protocolo de Mensaje (textarea)
- Política de Privacidad (checkbox)
- Botón: "Transmitir Solicitud"

// Info de contacto
- Email: intelligence@rubik.io
- Ubicación: Bogotá, Colombia
```

### 7. Footer
```typescript
// 4 Columnas
1. Logo + Descripción + Redes sociales
2. Enlaces Rápidos (5 links)
3. Servicios (6 items)
4. Contacto + Newsletter

// Footer inferior
- Copyright © 2024 RUBIK
- Política de Privacidad, Términos, Cookies
- Certificaciones: ISO 27001, Certmind
```

## 🔧 Mejores Prácticas Implementadas

### ✅ Código
- [x] TypeScript estricto
- [x] Componentes funcionales con hooks
- [x] Props tipadas con interfaces
- [x] Nombres descriptivos en español
- [x] Comentarios claros en secciones

### ✅ Estructura
- [x] Componentes organizados en `/components`
- [x] Un componente por archivo
- [x] Exports default consistentes
- [x] Imports ordenados alfabéticamente

### ✅ Estilos
- [x] Tailwind CSS utility-first
- [x] Clases personalizadas en config
- [x] Sistema de colores centralizado
- [x] Responsive design mobile-first

### ✅ Rendimiento
- [x] Lazy loading con `viewport={{ once: true }}`
- [x] Optimización de animaciones
- [x] Build optimizado (99.57 kB gzipped)

### ✅ Accesibilidad
- [x] Alt texts en imágenes
- [x] ARIA labels en iconos
- [x] Contraste de colores adecuado
- [x] Navegación por teclado

### ✅ UX/UI
- [x] Smooth scroll behavior
- [x] Hover states claros
- [x] Loading states
- [x] Feedback visual en interacciones

## 📱 Responsive Breakpoints

```css
/* Tailwind Breakpoints */
sm:  640px   /* Teléfonos grandes */
md:  768px   /* Tablets */
lg:  1024px  /* Laptops */
xl:  1280px  /* Desktops */
2xl: 1536px  /* Pantallas grandes */
```

## 🚀 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Compilar para producción
npm run preview  # Preview del build
npm run lint     # Linter de código
```

## 📝 Notas Importantes

1. **Services.tsx** existe pero NO está en uso - mantener por si se necesita
2. Todas las secciones tienen la **línea roja animada** en el bottom
3. El logo está en `/public/img/logo.jpg`
4. Header y Footer son **blancos sólidos**
5. Todas las demás secciones son **fondo oscuro (rubi-black)**
6. Idioma: **100% Español** (excepto código técnico)
7. Marca: **RUBIK** (no RUBI)

## 🔄 Estado del Proyecto

**Última actualización**: Diciembre 2024
**Build**: ✅ Sin errores
**Versión**: 1.0.0
**Status**: Producción Ready

---

Desarrollado con ❤️ por el equipo de RUBIK
