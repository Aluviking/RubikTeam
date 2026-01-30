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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.2] text-white mb-4"
          >
            Elegant Testimonials
          </motion.h1>
        </div>

        {/* Testimonials Grid */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group premium-glass-card-apple relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rubi-red/20"
            >
              {/* Left glow accent */}
              <div className="absolute left-0 top-1/4 w-1 h-1/2 bg-gradient-to-b from-transparent via-rubi-red to-transparent opacity-0 group-hover:opacity-70 blur-sm transition-opacity duration-500"></div>

              {/* Scan line */}
              <motion.div
                initial={{ top: '-100%' }}
                animate={{ top: '200%' }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: index * 0.3 }}
                className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rubi-red/40 to-transparent pointer-events-none"
              ></motion.div>

              <div className="flex items-center gap-4 relative z-10">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rubi-red/30 to-rubi-crimson/30 border-2 border-rubi-red/40 flex items-center justify-center overflow-hidden group-hover:border-rubi-red/60 transition-colors">
                    <span className="text-white font-display font-bold text-2xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Quote text */}
                  <p className="text-white/90 text-sm leading-relaxed mb-3 italic">
                    "{testimonial.quote.split(' ').slice(0, 8).join(' ')}..."
                  </p>

                  {/* Author info */}
                  <div>
                    <h4 className="text-white font-semibold text-sm">- {testimonial.name}, {testimonial.role}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
