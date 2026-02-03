import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  { cat: 'Desarrollo', name: 'E-Commerce TechStore', desc: 'Plataforma con pagos en tiempo real, inventario sincronizado y facturación automática.', metrics: [{ v: '+145%', l: 'Ventas' }, { v: '1.2s', l: 'Carga' }], tech: ['React', 'Node.js', 'PostgreSQL'] },
  { cat: 'Automatización', name: 'Sistema CRM Integrado', desc: 'Automatización de flujos de venta, seguimiento de leads y sincronización con marketing.', metrics: [{ v: '40h/sem', l: 'Ahorro' }, { v: '3.5x', l: 'Eficiencia' }], tech: ['Python', 'Zapier', 'API REST'] },
  { cat: 'Marketing', name: 'Campaña Digital 360°', desc: 'SEO, Google Ads, redes sociales y analítica que triplicó el alcance orgánico.', metrics: [{ v: '+280%', l: 'Alcance' }, { v: '4.2x', l: 'ROI' }], tech: ['Google Ads', 'Meta', 'Analytics'] },
  { cat: 'Seguridad', name: 'Certificación ISO 27001', desc: 'Implementación completa del SGSI, auditorías de seguridad y cumplimiento normativo.', metrics: [{ v: '0', l: 'Incidentes' }, { v: '100%', l: 'Compliance' }], tech: ['ISO 27001', 'Auditoría', 'SGSI'] },
];

const Projects = () => {
  const [filter, setFilter] = useState('Todos');
  const cats = ['Todos', 'Desarrollo', 'Automatización', 'Marketing', 'Seguridad'];
  const filtered = filter === 'Todos' ? projects : projects.filter(p => p.cat === filter);

  return (
    <section id="proyectos" className="relative bg-marble-800 py-16 sm:py-28 px-4 sm:px-6 marble-tex">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <span className="label-section mb-4 block">Proyectos</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl">
              Casos de éxito
            </motion.h2>
          </div>

          <div className="flex gap-1 bg-marble-700/50 rounded-xl p-1 border border-white/[0.04] overflow-x-auto no-scrollbar">
            {cats.map(c => (
              <button key={c} onClick={() => setFilter(c)}
                className={`px-4 py-2 text-[11px] font-medium rounded-lg transition-all duration-300 whitespace-nowrap ${
                  filter === c ? 'bg-ruby text-white' : 'text-white-faint hover:text-white-soft'
                }`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card p-6 sm:p-8">
              <div className="relative z-10">
                <span className="tag mb-4 inline-block">{p.cat}</span>
                <h3 className="text-xl font-medium text-white mb-2">{p.name}</h3>
                <p className="text-[14px] text-white-faint font-light leading-relaxed mb-6">{p.desc}</p>

                <div className="flex gap-10 mb-6">
                  {p.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="font-mono text-2xl text-ruby font-light">{m.v}</div>
                      <div className="text-[10px] text-white-faint uppercase tracking-widest mt-1">{m.l}</div>
                    </div>
                  ))}
                </div>

                <div className="divider mb-5" />
                <div className="flex gap-2 flex-wrap">
                  {p.tech.map((t, idx) => (
                    <span key={idx} className="text-[11px] font-mono text-white-dim/60 bg-white/[0.03] border border-white/[0.04] px-2.5 py-1 rounded-md">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
