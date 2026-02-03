import { motion } from 'framer-motion';

const Hero = () => {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-marble-900 marble-tex marble-veins grid-bg">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ruby/[0.04] rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-ruby/[0.03] rounded-full blur-[180px]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-6">
          Tecnología que{' '}
          <span className="text-ruby">transforma</span>
          <br />tu empresa
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[14px] sm:text-[16px] md:text-[18px] text-white-faint font-light max-w-xl mx-auto mb-10 leading-relaxed px-2">
          Desarrollo de software, ciberseguridad e inteligencia digital.
          Construimos infraestructura tecnológica de alto rendimiento.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
          <button onClick={() => go('#contacto')} className="btn-ruby">Iniciar proyecto</button>
          <button onClick={() => go('#servicios')} className="btn-outline">Ver servicios</button>
        </motion.div>

        {/* Status badge — below buttons, with pulse */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/[0.02] border border-white/[0.05] rounded-full px-5 py-2">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#e11d48]" style={{ animation: 'ping 1.2s cubic-bezier(0,0,0.2,1) infinite' }} />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e11d48] shadow-[0_0_10px_rgba(225,29,72,0.7),0_0_4px_rgba(0,0,0,0.8)]" />
            </span>
            <span className="text-[11px] text-white/30 font-light tracking-wider">Operando en Bogotá, Colombia.</span>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-3 gap-6 sm:gap-10 max-w-xl mx-auto mb-20">
          {[
            { v: '500+', l: 'Proyectos' },
            { v: '98%', l: 'Uptime' },
            { v: '24/7', l: 'Soporte' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-mono font-light text-white tracking-tight">{s.v}</div>
              <div className="text-[11px] text-white/40 uppercase tracking-widest mt-2">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-marble-900 to-transparent z-10" />
    </section>
  );
};

export default Hero;
