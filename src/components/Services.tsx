import { motion } from 'framer-motion';
import {
  FaCode, FaShieldAlt, FaCogs, FaChartLine,
  FaBullhorn, FaPalette, FaCube, FaBuilding
} from 'react-icons/fa';

const services = [
  { icon: FaCode, title: 'Transformación Digital', desc: 'Desarrollo Web, Apps, APIs y Cloud.', features: ['Desarrollo Web', 'Apps Empresariales', 'Integración APIs', 'Arquitectura Cloud'] },
  { icon: FaShieldAlt, title: 'Ciberseguridad', desc: 'Protege tu infraestructura digital.', features: ['Auditorías de seguridad', 'Monitoreo 24/7', 'Respuesta a incidentes', 'ISO 27001'] },
  { icon: FaCogs, title: 'Metodologías Ágiles', desc: 'Optimiza procesos con Scrum y PMO.', features: ['Scrum & Agile', 'Sprint Planning', 'PMO', 'Consultoría'] },
  { icon: FaChartLine, title: 'Gestión Organizacional', desc: 'Liderazgo y estrategia empresarial.', features: ['Clima Laboral', 'Liderazgo', 'Gestión del Cambio', 'Estrategia'] },
  { icon: FaBullhorn, title: 'Marketing Digital', desc: 'Campañas y posicionamiento digital.', features: ['B2B / B2C', 'Campañas Digitales', 'Email Marketing', 'Redes Sociales'] },
  { icon: FaPalette, title: 'Diseño & Multimedia', desc: 'Identidad visual y branding.', features: ['Branding', 'Identidad Visual', 'Animación', 'Editorial'] },
  { icon: FaCube, title: 'Diseño Industrial', desc: 'Modelado y prototipado profesional.', features: ['Modelado 2D/3D', 'Prototipado', 'Manufactura', 'Gestión'] },
  { icon: FaBuilding, title: 'Diseño Arquitectónico', desc: 'Renders, planos y supervisión.', features: ['Renders 3D', 'Planos', 'Supervisión', 'Proyectos'] },
];

const Services = () => {
  return (
    <section id="servicios" className="relative bg-marble-900 py-16 sm:py-28 px-4 sm:px-6 marble-tex">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="label-section mb-5 block justify-center">Servicios</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl mb-4">
            8 ramas de servicio
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-[15px] text-white-faint max-w-md mx-auto">
            Cobertura completa para tu transformación tecnológica.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="card p-5 sm:p-7 group">
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:border-ruby/20 transition-all duration-500">
                  <s.icon className="text-ruby/50 text-lg group-hover:text-ruby/80 transition-colors duration-500" />
                </div>
                <h3 className="text-[15px] font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-[12px] text-white-faint/60 font-light mb-5">{s.desc}</p>
                <ul className="space-y-2.5">
                  {s.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-[12px] text-white-dim font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-ruby/70 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
