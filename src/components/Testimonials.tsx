import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Carlos Mendoza', role: 'CEO, TechVision', text: 'RUBIK transformó nuestra infraestructura digital. ISO 27001 implementada y +40 horas semanales automatizadas.' },
  { name: 'María Rodríguez', role: 'COO, Logística Express', text: 'Integración de sistemas impecable. Visibilidad en tiempo real de toda la operación. ROI en 3 meses.' },
  { name: 'Andrés Gómez', role: 'CTO, FinanceHub', text: 'Su enfoque en ciberseguridad nos dio confianza para escalar. Soporte 24/7 y consultoría estratégica invaluable.' },
];

const Testimonials = () => {
  return (
    <section id="nosotros" className="relative bg-marble-800 py-16 sm:py-28 px-4 sm:px-6 marble-tex">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="label-section mb-5 block justify-center">Testimonios</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl">
            Lo que dicen nuestros clientes
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-6 sm:p-8">
              <div className="relative z-10">
                <svg className="w-8 h-8 text-ruby/15 mb-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>
                <p className="text-[14px] text-white-dim font-light leading-relaxed mb-8">{t.text}</p>
                <div className="divider mb-5" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ruby/[0.08] border border-ruby/[0.12] flex items-center justify-center">
                    <span className="text-ruby/70 font-medium text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <div className="text-[13px] text-white-soft font-medium">{t.name}</div>
                    <div className="text-[11px] text-white-faint">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
