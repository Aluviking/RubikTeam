import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 z-0 bg-noise opacity-30 pointer-events-none"></div>

      {/* Radial gradient glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[100vw] h-[100vw] bg-radial-glow from-rubi-red/10 via-rubi-crimson/5 to-transparent blur-[120px] animate-pulse-slow"></div>
      </div>

      {/* Main content */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center pt-32 pb-20 px-6">
        {/* Title section */}
        <div className="relative z-20 text-center flex flex-col items-center max-w-5xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8 shadow-lg shadow-black/20"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rubi-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rubi-red"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-semibold">System 4.0 Active</span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-white mb-6"
          >
            Transformamos empresas mediante{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-rubi-red to-rubi-crimson">
              tecnología, innovación y cultura organizacional
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-rubi-gray max-w-3xl mb-12 leading-relaxed"
          >
            Brindamos soluciones tecnológicas, estratégicas y culturales que mejoran el rendimiento, la seguridad y el crecimiento de las organizaciones. Integramos metodologías ágiles, innovación y enfoque humano para generar resultados sostenibles.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <button
              onClick={() => scrollToSection('#contacto')}
              className="px-8 py-4 bg-rubi-red hover:bg-rubi-crimson text-white rounded-full font-semibold transition-all shadow-lg shadow-rubi-red/30 hover:shadow-rubi-red/50 hover:scale-105"
            >
              Comenzar ahora
            </button>
            <button
              onClick={() => scrollToSection('#propuesta')}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-rubi-red/50 rounded-full font-semibold transition-all backdrop-blur-md"
            >
              Ver propuesta
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-6 sm:gap-12 w-full max-w-2xl"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">8</div>
              <div className="text-xs sm:text-sm text-rubi-gray uppercase tracking-wider">Ramas de Servicio</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">ISO 27001</div>
              <div className="text-xs sm:text-sm text-rubi-gray uppercase tracking-wider">Certificación</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-rubi-gray uppercase tracking-wider">Soporte Premium</div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 w-full h-[40vh] bg-gradient-to-t from-rubi-black via-rubi-black to-transparent z-0 pointer-events-none"></div>

      {/* Architectural grid */}
      <div
        className="absolute -bottom-[20%] left-[-50%] right-[-50%] h-[80vh] arch-grid opacity-20 pointer-events-none z-0"
        style={{
          transform: 'perspective(1000px) rotateX(70deg)',
        }}
      ></div>

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

export default Hero;
