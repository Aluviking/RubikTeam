import { motion } from 'framer-motion';
import { FaRocket, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const items = [
  { icon: FaRocket, title: 'Transformación Digital', desc: 'Arquitectura cloud y automatización para escalar tu operación.', features: ['Desarrollo web & apps', 'Integración de APIs', 'Automatización', 'Cloud computing'], stat: '145%', statLabel: 'más eficiencia' },
  { icon: FaShieldAlt, title: 'Ciberseguridad', desc: 'Protección empresarial de última generación.', features: ['Auditorías de seguridad', 'Monitoreo 24/7', 'Respuesta a incidentes', 'Gobierno TI'], stat: '0', statLabel: 'incidentes' },
  { icon: FaChartLine, title: 'Metodologías Ágiles', desc: 'Optimización operativa con frameworks modernos.', features: ['Scrum & Agile', 'PMO profesional', 'CRM / ERP', 'Consultoría'], stat: '40h', statLabel: 'ahorro semanal' },
];

const ValueProposition = () => {
  return (
    <section className="relative bg-marble-800 py-16 sm:py-28 px-4 sm:px-6 marble-tex">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="label-section mb-5 block justify-center">Por qué RUBIK</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl">
            Soluciones que impulsan resultados
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-6 sm:p-8 group">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-6 group-hover:border-ruby/20 transition-all duration-500">
                  <item.icon className="text-ruby/60 text-lg" />
                </div>
                <h3 className="text-[18px] font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-[13px] text-white-faint/60 font-light mb-6">{item.desc}</p>
                <ul className="space-y-2.5 mb-6">
                  {item.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-[13px] text-white-dim font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-ruby/70 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="divider-ruby mb-5" />
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xl text-ruby font-light">{item.stat}</span>
                  <span className="text-[11px] text-white-faint uppercase tracking-wider">{item.statLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
