import { motion } from 'framer-motion';
import {
  FaCode,
  FaShieldAlt,
  FaCogs,
  FaChartLine,
  FaBullhorn,
  FaPalette,
  FaCube,
  FaBuilding
} from 'react-icons/fa';
import { useState } from 'react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services: Service[] = [
    {
      icon: FaCode,
      title: 'Transformación Digital & Desarrollo',
      description: 'Soluciones completas para modernizar empresas mediante software, automatización e infraestructura robusta.',
      features: [
        'Desarrollo Web Profesional',
        'Aplicaciones Empresariales (Node, React, Vite)',
        'Integración de APIs y Automatizaciones',
        'Sistemas de Autenticación',
        'Infraestructura Cloud (AWS, Azure, GCP)',
        'Arquitectura Tecnológica'
      ]
    },
    {
      icon: FaShieldAlt,
      title: 'Ciberseguridad ISO 27001',
      description: 'Protegemos la información empresarial mediante estándares internacionales y auditorías especializadas.',
      features: [
        'Implementación ISO 27001',
        'Auditoría Interna Certificada (Certmind)',
        'Evaluación y Gestión de Riesgos',
        'Hardening de Servidores',
        'Concientización en Seguridad',
        'Políticas de Gobierno Corporativo TI'
      ]
    },
    {
      icon: FaCogs,
      title: 'Metodologías Ágiles & PMO',
      description: 'Optimizamos procesos empresariales mediante Scrum, Agile y consultoría operativa.',
      features: [
        'Implementación Scrum y Agile',
        'Formación de Equipos Ágiles',
        'PMO Ágil',
        'Sprint Planning y Retrospectivas',
        'Consultoría en Eficiencia Operativa',
        'Gestión de Proyectos'
      ]
    },
    {
      icon: FaChartLine,
      title: 'Gestión Organizacional',
      description: 'Acompañamos empresas en procesos humanos, liderazgo y crecimiento interno.',
      features: [
        'Cultura Organizacional',
        'Diagnósticos de Clima y Cultura',
        'Fortalecimiento de Equipos',
        'Desarrollo de Liderazgo',
        'Gestión del Cambio',
        'Acompañamiento Estratégico'
      ]
    },
    {
      icon: FaBullhorn,
      title: 'Marketing Estratégico',
      description: 'Impulsamos el crecimiento comercial mediante estrategias inteligentes y contenido profesional.',
      features: [
        'Gerencia de Marketing',
        'Estrategias de Posicionamiento B2B/B2C',
        'Campañas Digitales Automatizadas',
        'Email Marketing Segmentado',
        'Gestión de Redes Sociales',
        'Copywriting Corporativo'
      ]
    },
    {
      icon: FaPalette,
      title: 'Diseño Gráfico & Multimedia',
      description: 'Producción visual y creativa que fortalece el posicionamiento de marcas.',
      features: [
        'Branding Corporativo',
        'Identidad Visual',
        'Diseño Publicitario Digital y Físico',
        'Animación, Video y Multimedia',
        'Edición Profesional',
        'Mockups y Presentaciones'
      ]
    },
    {
      icon: FaCube,
      title: 'Diseño Industrial',
      description: 'Desarrollo de productos, modelado 2D/3D y visualización profesional.',
      features: [
        'Conceptualización de Productos',
        'Modelado 2D y 3D para Prototipado',
        'Diseño Funcional y Ergonómico',
        'Optimización para Manufactura',
        'Propuestas Estéticas Alineadas',
        'Gestión de Diseño'
      ]
    },
    {
      icon: FaBuilding,
      title: 'Diseño Arquitectónico',
      description: 'Diseño de espacios residenciales, comerciales e industriales con planificación integral.',
      features: [
        'Planificación Arquitectónica',
        'Renderización y Visualización',
        'Planos Técnicos Completos',
        'Detallados Constructivos',
        'Supervisión y Asesoría Técnica',
        'Proyectos Interdisciplinarios'
      ]
    }
  ];

  return (
    <section id="servicios" className="section-padding bg-neutral-dark relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rubi-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rubi-crimson/5 rounded-full blur-3xl"></div>

      <div className="container-custom mx-auto relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-bold text-rubi-red bg-rubi-red/10 px-4 py-2 rounded-full border border-rubi-red/30">
              NUESTROS SERVICIOS
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            8 Ramas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-rubi-red to-white">Servicio Integral</span>
          </h2>
          <p className="text-description text-gray-300 max-w-2xl mx-auto">
            Transformamos organizaciones mediante soluciones tecnológicas, estratégicas y culturales. Integramos metodologías ágiles, ciberseguridad, desarrollo tecnológico, diseño y marketing para generar crecimiento sostenible.
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setSelectedService(index)}
              onHoverEnd={() => setSelectedService(null)}
              className="group relative"
            >
              <div className={`
                premium-glass-card rounded-2xl p-6 h-full
                transition-all duration-500
                ${selectedService === index ? 'scale-105 shadow-2xl shadow-rubi-red/30' : 'hover:scale-[1.02]'}
              `}>
                {/* Reflejo superior 3D */}
                <div className="glass-reflection"></div>
                <div className="glass-side-light"></div>

                {/* Glow effect en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-rubi-red/20 via-rubi-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

                {/* Left glow accent */}
                <div className="absolute left-0 top-1/4 w-1 h-1/2 bg-gradient-to-b from-transparent via-rubi-red to-transparent opacity-0 group-hover:opacity-70 blur-sm transition-opacity duration-500"></div>

                {/* Contenido */}
                <div className="relative z-10">
                  {/* Icono con glass container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="icon-glass-container inline-flex p-4 rounded-xl mb-4"
                  >
                    <service.icon className="text-3xl text-white drop-shadow-[0_0_8px_rgba(230,0,35,0.6)]" />
                  </motion.div>

                  {/* Título */}
                  <h3 className="text-heading font-bold mb-3 text-white group-hover:text-rubi-red transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-description text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * idx }}
                        className="flex items-start text-sm text-gray-300 group-hover:text-white transition-colors"
                      >
                        <span className="text-rubi-red mr-2 mt-1 drop-shadow-[0_0_4px_rgba(230,0,35,0.8)] text-base">▸</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Scan line decorativo */}
                <motion.div
                  initial={{ top: '-100%' }}
                  animate={{ top: '200%' }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: index * 0.2 }}
                  className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rubi-red/50 to-transparent pointer-events-none"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-premium-glass px-8 py-4 rounded-full text-white font-semibold text-lg"
          >
            <span className="relative z-10">Solicitar consultoría gratuita</span>
          </motion.button>
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

export default Services;
