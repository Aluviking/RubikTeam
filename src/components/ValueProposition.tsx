import { motion } from 'framer-motion';

const ValueProposition = () => {
  return (
    <section id="propuesta" className="relative w-full min-h-screen flex flex-col overflow-hidden bg-rubi-black py-32">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 bg-noise opacity-30 pointer-events-none"></div>
      <div className="absolute top-[-20%] left-0 w-[60vw] h-[60vw] bg-rubi-red/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-0 w-[50vw] h-[50vw] bg-rubi-crimson/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-8 animate-float"
          >
            <span className="size-1.5 rounded-full bg-rubi-red shadow-[0_0_10px_#E60023]"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-rubi-gray font-medium">Propuesta de Valor Integral</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-white mb-6"
          >
            PROPUESTA DE VALOR<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rubi-red via-white to-rubi-red animate-pulse-slow">
              INTEGRAL
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-rubi-gray text-lg font-light max-w-3xl mx-auto leading-relaxed"
          >
            Impulsamos el crecimiento de tu empresa a través de soluciones tecnológicas, digitales y operativas diseñadas para optimizar procesos, fortalecer tu presencia online y escalar tus resultados comerciales. Somos tu aliado tecnológico para evolucionar, innovar y vender más.
          </motion.p>
        </div>

        {/* Value Cards Grid */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 perspective-2000 mb-24">
          {/* Card 1 - Cognitive Speed */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            whileHover={{ y: -8 }}
            className="premium-glass-card group relative h-[420px] rounded-2xl p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-rubi-red/20"
          >
            {/* Left glow accent */}
            <div className="absolute left-0 top-1/3 w-1 h-1/3 bg-gradient-to-b from-transparent via-rubi-red to-transparent opacity-0 group-hover:opacity-70 blur-sm transition-opacity duration-500"></div>

            {/* Scan line */}
            <motion.div
              initial={{ top: '-100%' }}
              animate={{ top: '200%' }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
              className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rubi-red/40 to-transparent pointer-events-none"
            ></motion.div>
            {/* Animated Icon */}
            <div className="relative h-48 w-full flex items-center justify-center perspective-1000">
              <div className="absolute inset-0 bg-rubi-red/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative w-32 h-32 preserve-3d animate-spin-slow">
                <div className="absolute inset-0 rounded-full border border-white/20 border-t-rubi-red shadow-[0_0_15px_-5px_rgba(230,0,35,0.5)]"></div>
                <div className="absolute inset-4 rounded-full border border-dashed border-white/10 border-b-rubi-red/50 animate-spin-reverse"></div>
                <div className="absolute inset-[40%] rounded-full bg-rubi-red/80 blur-md animate-pulse"></div>
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-rubi-red/30 to-transparent transform rotate-45"></div>
              </div>
            </div>

            {/* Card Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                <span className="text-xs font-mono text-rubi-red tracking-wider uppercase">01 / Desarrollo</span>
                <svg className="w-5 h-5 text-rubi-gray group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold text-white mb-2 group-hover:text-rubi-red transition-colors duration-300">
                Transformación Digital
              </h3>
              <p className="text-sm text-rubi-gray leading-relaxed">
                Desarrollo web profesional, aplicaciones empresariales con Node y React, integración de APIs, automatización de procesos y arquitectura cloud robusta que moderniza tu infraestructura tecnológica.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Fortified Core */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="premium-glass-card group relative h-[420px] rounded-2xl p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-rubi-red/20"
          >
            {/* Left glow accent */}
            <div className="absolute left-0 top-1/3 w-1 h-1/3 bg-gradient-to-b from-transparent via-rubi-red to-transparent opacity-0 group-hover:opacity-70 blur-sm transition-opacity duration-500"></div>

            {/* Scan line */}
            <motion.div
              initial={{ top: '-100%' }}
              animate={{ top: '200%' }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
              className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rubi-red/40 to-transparent pointer-events-none"
            ></motion.div>
            {/* Animated Icon - Layered Lock */}
            <div className="relative h-48 w-full flex items-center justify-center perspective-1000">
              <div className="absolute inset-0 bg-rubi-red/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative w-24 h-24 preserve-3d animate-float">
                <div className="absolute w-full h-full border border-white/10 bg-white/5 backdrop-blur-sm rounded transform translate-z-0 group-hover:rotate-y-12 transition-transform duration-700"></div>
                <div className="absolute w-full h-full border border-rubi-red/30 bg-rubi-red/5 rounded transform scale-90 translate-z-4 group-hover:translate-z-8 group-hover:rotate-y-12 transition-all duration-700 delay-75 shadow-[0_0_30px_rgba(230,0,35,0.2)]"></div>
                <div className="absolute w-full h-full border border-white/10 rounded transform scale-75 translate-z-8 group-hover:translate-z-16 group-hover:rotate-y-12 transition-all duration-700 delay-150 flex items-center justify-center">
                  <svg className="w-8 h-8 text-rubi-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                <span className="text-xs font-mono text-rubi-red tracking-wider uppercase">02 / Seguridad</span>
                <svg className="w-5 h-5 text-rubi-gray group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold text-white mb-2 group-hover:text-rubi-red transition-colors duration-300">
                Ciberseguridad & Cumplimiento
              </h3>
              <p className="text-sm text-rubi-gray leading-relaxed">
                Implementación de ISO 27001, auditorías internas certificadas por Certmind, gestión de riesgos, hardening de servidores, políticas de seguridad y gobierno corporativo TI para proteger tu información empresarial.
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Neural Scale */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="premium-glass-card group relative h-[420px] rounded-2xl p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-rubi-red/20"
          >
            {/* Left glow accent */}
            <div className="absolute left-0 top-1/3 w-1 h-1/3 bg-gradient-to-b from-transparent via-rubi-red to-transparent opacity-0 group-hover:opacity-70 blur-sm transition-opacity duration-500"></div>

            {/* Scan line */}
            <motion.div
              initial={{ top: '-100%' }}
              animate={{ top: '200%' }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', delay: 1 }}
              className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rubi-red/40 to-transparent pointer-events-none"
            ></motion.div>
            {/* Animated Icon - Bars */}
            <div className="relative h-48 w-full flex items-center justify-center perspective-1000 overflow-hidden">
              <div className="absolute inset-0 bg-rubi-red/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 flex gap-4 preserve-3d">
                <motion.div
                  animate={{ height: ['64px', '96px', '64px'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-2 bg-gradient-to-t from-transparent via-white/20 to-transparent rounded-full"
                />
                <motion.div
                  animate={{ height: ['96px', '48px', '96px'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="w-2 bg-gradient-to-t from-transparent via-rubi-red/50 to-transparent rounded-full"
                />
                <motion.div
                  animate={{ height: ['48px', '96px', '48px'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="w-2 bg-gradient-to-t from-transparent via-white/20 to-transparent rounded-full"
                />
              </div>
            </div>

            {/* Card Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                <span className="text-xs font-mono text-rubi-red tracking-wider uppercase">03 / Automatización</span>
                <svg className="w-5 h-5 text-rubi-gray group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold text-white mb-2 group-hover:text-rubi-red transition-colors duration-300">
                Metodologías Ágiles & Automatización
              </h3>
              <p className="text-sm text-rubi-gray leading-relaxed">
                Implementación Scrum y PMO ágil, automatización de procesos operativos, integración de CRM/ERP, sprint planning, retrospectivas y consultoría en eficiencia operativa que transforman tu gestión empresarial.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl mx-auto border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-10"
        >
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-4xl font-display font-bold text-white tracking-tight">
              $186<span className="text-rubi-red text-2xl">M COP</span>
            </span>
            <span className="text-[11px] uppercase tracking-widest text-rubi-gray">Ganancia Neta Anual Proyectada</span>
          </div>

          <div className="h-10 w-[1px] bg-white/10 hidden md:block"></div>

          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-4xl font-display font-bold text-white tracking-tight">
              $4<span className="text-rubi-red text-2xl">M</span>
            </span>
            <span className="text-[11px] uppercase tracking-widest text-rubi-gray">Plan Mensual Corporativo</span>
          </div>

          <div className="h-10 w-[1px] bg-white/10 hidden md:block"></div>

          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center">
              <span className="text-4xl font-display font-bold text-white tracking-tight">ISO</span>
              <svg className="w-6 h-6 text-rubi-red ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-[11px] uppercase tracking-widest text-rubi-gray">Certificación 27001</span>
          </div>
        </motion.div>
      </div>

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

export default ValueProposition;
