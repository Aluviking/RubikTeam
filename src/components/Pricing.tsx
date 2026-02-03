import { motion } from 'framer-motion';
import { useState } from 'react';

const plans = [
  { name: 'Esencial', price: '$300', period: '/mes', desc: 'Soporte, mantenimiento y optimización.', features: ['Soporte técnico', 'Mantenimiento web', 'Optimización mensual', 'Reportes básicos', 'Seguridad base', 'Monitoreo 24/7'], featured: false },
  { name: 'Profesional', price: '$890', period: '/mes', desc: 'Desarrollo, automatización y reportes.', features: ['Todo de Esencial', 'Desarrollo personalizado', 'Automatización de procesos', 'Reportes ejecutivos', 'Consultoría trimestral', 'CRM/ERP', 'Soporte prioritario'], featured: true },
  { name: 'Corporativo', price: 'Custom', period: '', desc: 'Transformación digital completa.', features: ['Todo de Profesional', 'Consultoría continua', 'Liderazgo digital', 'ISO 27001 + SGSI', 'Equipo dedicado 24/7', 'Cloud privada', 'Cultura organizacional', 'SLA garantizado'], featured: false },
];

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="planes" className="relative bg-marble-900 py-16 sm:py-28 px-4 sm:px-6 marble-tex">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="label-section mb-5 block justify-center">Planes</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl mb-4">
            Elige tu plan
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-[15px] text-white-faint max-w-md mx-auto">
            Escala a tu ritmo. Todos los planes incluyen soporte técnico.
          </motion.p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-1 bg-marble-700/50 rounded-xl p-1 border border-white/[0.04]">
            <button onClick={() => setAnnual(false)}
              className={`px-5 py-2 text-[12px] font-medium rounded-lg transition-all duration-300 ${!annual ? 'bg-ruby text-white' : 'text-white-faint'}`}>
              Mensual
            </button>
            <button onClick={() => setAnnual(true)}
              className={`px-5 py-2 text-[12px] font-medium rounded-lg transition-all duration-300 relative ${annual ? 'bg-ruby text-white' : 'text-white-faint'}`}>
              Anual
              {annual && <span className="absolute -top-2 -right-3 text-[9px] bg-ruby text-white px-1.5 py-0.5 rounded-full font-bold">-20%</span>}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 sm:p-8 flex flex-col ${plan.featured ? 'card-featured' : 'card'}`}>
              <div className="relative z-10 flex flex-col flex-grow">
                {plan.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-ruby shadow-[0_0_8px_rgba(225,29,72,0.6)]" />
                    <span className="text-[10px] uppercase tracking-widest text-ruby font-medium">Recomendado</span>
                  </div>
                )}

                <h3 className="text-xl font-medium text-white mb-1">{plan.name}</h3>
                <p className="text-[12px] text-white-faint mb-5">{plan.desc}</p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-thin text-white">{plan.price}</span>
                  {plan.period && <span className="text-[13px] text-white-faint">{plan.period}</span>}
                </div>

                <div className="divider-ruby mb-5" />

                <ul className="space-y-3 flex-grow mb-8">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[13px] text-white-dim font-light">
                      <svg className="w-4 h-4 flex-shrink-0 text-ruby/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <button onClick={() => go('#contacto')}
                  className={plan.featured ? 'btn-ruby w-full' : 'btn-outline w-full'}>
                  {plan.featured ? 'Comenzar ahora' : plan.price === 'Custom' ? 'Contactar' : 'Seleccionar'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
