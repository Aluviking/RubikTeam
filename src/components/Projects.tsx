import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos los Proyectos');

  const filters = ['Todos los Proyectos', 'Desarrollo Web', 'Automatización', 'Marketing Digital'];

  const projects = [
    {
      tier: 'Desarrollo Web',
      name: 'E-Commerce TechStore',
      description: 'Plataforma de comercio electrónico completa con integración de pagos, gestión de inventario en tiempo real y sistema de facturación automática.',
      metrics: [
        { label: 'Incremento en Ventas', value: '145', unit: '%' },
        { label: 'Tiempo de Carga', value: '1.2', unit: 's' }
      ],
      tech: ['React', 'Node.js', 'PostgreSQL'],
      filter: 'Desarrollo Web'
    },
    {
      tier: 'Automatización',
      name: 'Sistema CRM Integrado',
      description: 'Automatización completa de procesos de ventas, seguimiento de clientes, reportes automáticos y sincronización con herramientas de marketing.',
      metrics: [
        { label: 'Ahorro de Tiempo', value: '40', unit: 'hrs/sem' },
        { label: 'Eficiencia', value: '3.5', unit: 'x' }
      ],
      tech: ['Python', 'Zapier', 'API Integration'],
      filter: 'Automatización'
    },
    {
      tier: 'Marketing Digital',
      name: 'Campaña Digital 360°',
      description: 'Estrategia integral de marketing digital con SEO, Google Ads, redes sociales y analítica avanzada que triplicó el alcance orgánico.',
      metrics: [
        { label: 'Incremento en Alcance', value: '280', unit: '%' },
        { label: 'ROI Campaña', value: '4.2', unit: 'x' }
      ],
      tech: ['Google Ads', 'Meta Ads', 'Analytics'],
      filter: 'Marketing Digital'
    },
    {
      tier: 'Ciberseguridad',
      name: 'Certificación ISO 27001',
      description: 'Implementación completa de normas ISO 27001, auditorías de seguridad, protección de datos y cumplimiento normativo para empresa financiera.',
      metrics: [
        { label: 'Incidentes de Seguridad', value: '0', unit: '' },
        { label: 'Nivel de Cumplimiento', value: '100', unit: '%' }
      ],
      tech: ['ISO 27001', 'Auditoría', 'Compliance'],
      filter: 'Todos los Proyectos'
    }
  ];

  const filteredProjects = activeFilter === 'Todos los Proyectos'
    ? projects
    : projects.filter(project => project.filter === activeFilter);

  return (
    <section id="proyectos" className="relative w-full min-h-screen flex flex-col overflow-hidden bg-rubi-black py-40">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 bg-noise opacity-30 pointer-events-none fixed"></div>
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none fixed">
        <div className="w-[80vw] h-[80vw] bg-radial-glow from-rubi-red/5 via-rubi-black to-transparent blur-[150px]"></div>
      </div>

      {/* Main content */}
      <main className="relative z-10 flex-grow flex flex-col items-center px-6 w-full max-w-[1400px] mx-auto pb-24">
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-12 mb-24 border-b border-white/5 pb-10">
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-rubi-red/80"
            >
              <svg className="w-[18px] h-[18px] animate-pulse-slow" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Portafolio de Proyectos</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white leading-none"
            >
              PROYECTOS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rubi-red via-white to-white opacity-90">DESTACADOS</span>
            </motion.h1>
          </div>

          {/* Filter buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-[12px] font-medium tracking-wide transition-all ${
                  activeFilter === filter
                    ? 'btn-premium-glass'
                    : 'btn-secondary-glass'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group premium-glass-card relative w-full h-[500px] rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-rubi-red/20 transition-all duration-500"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-rubi-red/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Left glow accent */}
              <div className="absolute left-0 top-1/4 w-1 h-1/2 bg-gradient-to-b from-transparent via-rubi-red to-transparent opacity-0 group-hover:opacity-70 blur-sm transition-opacity duration-500"></div>

              {/* Scan line */}
              <motion.div
                initial={{ top: '-100%' }}
                animate={{ top: '200%' }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: index * 0.5 }}
                className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rubi-red/40 to-transparent pointer-events-none"
              ></motion.div>

              {/* Background visual elements */}
              <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                <div className="project-visual-layer w-[120%] h-[120%] transition-transform duration-500 group-hover:scale-105">
                  {/* Different patterns for each project */}
                  {index === 0 && (
                    <>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-rubi-red/20 rounded-full animate-pulse-slow"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rotate-45"></div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-rubi-red to-transparent opacity-50"></div>
                      <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
                      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-rubi-red to-transparent opacity-50"></div>
                    </>
                  )}
                  {index === 2 && (
                    <div className="w-full h-full transform rotate-12 scale-150">
                      <div className="absolute top-[30%] left-[40%] size-2 bg-rubi-red rounded-full shadow-[0_0_15px_red] animate-pulse"></div>
                      <div className="absolute top-[60%] left-[70%] size-2 bg-white rounded-full"></div>
                      <div className="absolute top-[50%] left-[20%] size-2 bg-white rounded-full"></div>
                    </div>
                  )}
                  {index === 3 && (
                    <div className="flex items-center justify-center">
                      <div className="w-48 h-56 border-2 border-white/10 rounded-[40px] flex items-center justify-center backdrop-blur-sm relative">
                        <svg className="w-[80px] h-[80px] text-rubi-red/80 animate-pulse-slow" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Card content */}
              <div className="relative z-10 flex flex-col h-full p-8 md:p-10 justify-between">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] text-rubi-red uppercase tracking-widest font-semibold border border-rubi-red/20 px-2 py-1 rounded w-fit bg-rubi-red/5">
                      {project.tier}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
                      {project.name}
                    </h2>
                  </div>
                  <svg
                    className="w-6 h-6 text-white/20 group-hover:text-rubi-red transition-colors -rotate-45 group-hover:rotate-0 transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </div>

                {/* Description and metrics */}
                <div className="flex flex-col gap-6">
                  <p className="text-sm text-rubi-gray font-light max-w-sm">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <div className="text-2xl font-mono text-white font-medium">
                          {metric.value}
                          {metric.unit && <span className="text-sm text-rubi-red">{metric.unit}</span>}
                        </div>
                        <div className="text-[10px] uppercase text-rubi-gray tracking-wider mt-1">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-[10px] text-white/70 bg-white/[0.03] border border-white/10 transition-all group-hover:border-rubi-red/30 group-hover:bg-rubi-red/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load more button */}
        <div className="mt-20 flex items-center justify-center gap-4">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-white/20"></div>
          <button className="btn-secondary-glass px-6 py-3 rounded-full text-xs font-medium uppercase tracking-widest text-white/80 flex items-center gap-2">
            Ver Más Proyectos
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-white/20"></div>
        </div>
      </main>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-rubi-black via-rubi-black to-transparent z-0 pointer-events-none"></div>

      {/* Architectural grid */}
      <div className="fixed -bottom-[30%] left-[-50%] right-[-50%] h-[100vh] arch-grid opacity-20 pointer-events-none z-0" style={{ transform: 'perspective(1000px) rotateX(70deg)' }}></div>

      {/* Bottom line effect */}
      <div className="absolute bottom-0 w-full h-[1px] bg-white/5 z-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="w-[20%] h-full bg-gradient-to-r from-transparent via-rubi-red to-transparent opacity-50"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
