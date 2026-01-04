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
                relative h-full bg-neutral-dark/50 backdrop-blur-sm rounded-2xl p-6
                border-2 border-white/10 hover:border-rubi-red/40
                transition-all duration-300
                ${selectedService === index ? 'scale-105 shadow-2xl shadow-rubi-red/20' : 'hover:scale-105'}
              `}>
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-rubi-red/10 to-rubi-crimson/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                {/* Contenido */}
                <div className="relative z-10">
                  {/* Icono */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex p-4 rounded-xl mb-4 bg-gradient-to-br from-rubi-red to-rubi-crimson shadow-lg"
                  >
                    <service.icon className="text-3xl text-white" />
                  </motion.div>

                  {/* Título */}
                  <h3 className="text-heading font-bold mb-3 text-white group-hover:text-rubi-red transition-colors">
                    {service.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-description text-gray-400 mb-4 leading-relaxed">
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
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-start text-sm text-gray-400"
                      >
                        <span className="text-rubi-red mr-2 mt-1">▸</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Barra de progreso decorativa */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-rubi-red to-rubi-crimson rounded-b-2xl"
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
            className="btn-primary text-lg"
          >
            Solicitar consultoría gratuita
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
