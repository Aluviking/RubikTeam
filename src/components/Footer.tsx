import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Propuesta', href: '#propuesta' },
    { name: 'Planes', href: '#planes' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const services = [
    'Desarrollo Web & Integraciones',
    'Ciberseguridad ISO 27001',
    'Automatización & Sistemas',
    'Consultoría Estratégica',
    'Marketing Digital',
    'Diseño Gráfico & Multimedia',
    'Diseño Industrial',
    'Diseño Arquitectónico'
  ];

  const socialMedia = [
    { icon: FaLinkedin, link: '#', name: 'LinkedIn' },
    { icon: FaGithub, link: '#', name: 'GitHub' },
    { icon: FaTwitter, link: '#', name: 'Twitter' },
    { icon: FaInstagram, link: '#', name: 'Instagram' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white relative overflow-hidden border-t border-neutral-dark/10">
      <div className="container-custom mx-auto px-4 md:px-8 py-12 sm:py-16 relative z-10">
        {/* Sección principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Columna 1: Logo y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <img
                  src="/img/logo.jpg"
                  alt="RUBIK Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-logo font-black text-rubi-black" style={{ letterSpacing: '0.02em' }}>RUBIK</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Tu aliado tecnológico para evolucionar, innovar y vender más. Transformación digital con resultados reales de RUBIK.
            </p>
            <div className="flex space-x-3 pt-4">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-100 rounded-lg border border-gray-200 hover:border-rubi-red hover:bg-rubi-red/5 transition-all text-gray-600 hover:text-rubi-red"
                  aria-label={social.name}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Columna 2: Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-rubi-black mb-4 sm:mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    whileHover={{ x: 5 }}
                    className="text-sm text-gray-600 hover:text-rubi-red transition-colors cursor-pointer flex items-center"
                  >
                    <span className="text-rubi-red mr-2">▸</span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3: Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-rubi-black mb-4 sm:mb-6">Servicios</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-sm text-gray-600 hover:text-rubi-red transition-colors flex items-center"
                  >
                    <span className="text-rubi-red mr-2">✓</span>
                    {service}
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 4: Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-rubi-black mb-4 sm:mb-6">Contacto</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="mailto:contacto@rubi.com"
                  className="text-sm text-gray-600 hover:text-rubi-red transition-colors flex items-start"
                >
                  <FaEnvelope className="text-rubi-red mr-3 mt-1 flex-shrink-0" />
                  <span>contacto@rubi.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+573001234567"
                  className="text-sm text-gray-600 hover:text-rubi-red transition-colors flex items-start"
                >
                  <FaPhone className="text-rubi-red mr-3 mt-1 flex-shrink-0" />
                  <span>+57 300 123 4567</span>
                </a>
              </li>
              <li className="text-sm text-gray-600 flex items-start">
                <FaMapMarkerAlt className="text-rubi-red mr-3 mt-1 flex-shrink-0" />
                <span>Bogotá, Colombia</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-rubi-black mb-3">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-l-lg text-rubi-black focus:outline-none focus:border-rubi-red transition-colors text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-rubi-red to-rubi-crimson text-white rounded-r-lg font-semibold"
                >
                  →
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-200 mb-6 sm:mb-8"></div>

        {/* Sección inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm text-gray-500"
          >
            © {currentYear} RUBIK. Todos los derechos reservados.
          </motion.div>

          {/* Enlaces legales */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm"
          >
            <a href="#" className="text-gray-500 hover:text-rubi-red transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-500 hover:text-rubi-red transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="text-gray-500 hover:text-rubi-red transition-colors">
              Cookies
            </a>
          </motion.div>

          {/* Certificaciones */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-xs sm:text-sm text-gray-500"
          >
            <span className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs">
              ISO 27001
            </span>
            <span className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs">
              Certmind
            </span>
          </motion.div>
        </div>

        {/* Mensaje adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200"
        >
          <p className="text-xs sm:text-sm text-gray-500">
            Desarrollado con{' '}
            <span className="text-rubi-red">♥</span>{' '}
            usando React, TypeScript, Tailwind CSS y Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
