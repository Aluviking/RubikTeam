import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Mendoza',
      role: 'CEO',
      company: 'TechVision Colombia',
      image: '/img/testimonial-1.jpg',
      quote:
        'RUBIK transformó completamente nuestra infraestructura digital. Su equipo nos ayudó a implementar ISO 27001 y automatizar procesos que nos ahorraron más de 40 horas semanales.',
      rating: 5,
    },
    {
      name: 'María Rodríguez',
      role: 'Directora de Operaciones',
      company: 'Logística Express',
      image: '/img/testimonial-2.jpg',
      quote:
        'La integración de sistemas que desarrollaron es impresionante. Ahora tenemos visibilidad en tiempo real de toda nuestra operación. El ROI se vio en los primeros 3 meses.',
      rating: 5,
    },
    {
      name: 'Andrés Gómez',
      role: 'CTO',
      company: 'FinanceHub',
      image: '/img/testimonial-3.jpg',
      quote:
        'Su enfoque en ciberseguridad nos dio la confianza para escalar nuestro negocio. El soporte 24/7 y la consultoría estratégica son invaluables para nuestro crecimiento.',
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonios"
      className="relative w-full min-h-screen flex flex-col overflow-hidden bg-rubi-black py-32"
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0 bg-noise opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-rubi-red/5 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Main content */}
      <div className="relative z-10 px-6 flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-8 animate-float"
          >
            <span className="size-1.5 rounded-full bg-rubi-red shadow-[0_0_10px_#E60023]"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-rubi-gray font-medium">
              Casos de Éxito
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-white mb-6"
          >
            LO QUE DICEN
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rubi-red via-white to-rubi-red animate-pulse-slow">
              NUESTROS CLIENTES
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-rubi-gray text-lg font-light max-w-2xl mx-auto leading-relaxed"
          >
            Empresas que confiaron en RUBIK para su transformación digital y hoy lideran sus
            industrias con tecnología de vanguardia.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-rubi-red/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(230,0,35,0.15)]"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-6xl text-rubi-red/10 font-serif leading-none">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-rubi-red"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <p className="text-white/90 text-sm leading-relaxed mb-8 relative z-10">
                {testimonial.quote}
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rubi-red/20 to-rubi-crimson/20 border border-white/10 flex items-center justify-center overflow-hidden">
                  <span className="text-white font-display font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-rubi-gray text-xs">
                    {testimonial.role} - {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rubi-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl mx-auto border-t border-white/5 pt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-white mb-2">
              98<span className="text-rubi-red">%</span>
            </div>
            <div className="text-xs text-rubi-gray uppercase tracking-wider">
              Satisfacción del Cliente
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-white mb-2">
              50<span className="text-rubi-red">+</span>
            </div>
            <div className="text-xs text-rubi-gray uppercase tracking-wider">
              Proyectos Completados
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-white mb-2">
              4<span className="text-rubi-red">x</span>
            </div>
            <div className="text-xs text-rubi-gray uppercase tracking-wider">ROI Promedio</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-white mb-2">
              24<span className="text-rubi-red">/7</span>
            </div>
            <div className="text-xs text-rubi-gray uppercase tracking-wider">
              Soporte Disponible
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom line effect */}
      <div className="absolute bottom-0 w-full h-[1px] bg-white/5 z-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="w-[20%] h-full bg-gradient-to-r from-transparent via-rubi-red to-transparent opacity-50"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
