import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-rubi-black border-t border-white/5">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 bg-noise opacity-30 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">

          {/* Column 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}img/logo.jpg`}
                  alt="RUBIK"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-display font-semibold tracking-apple-wide text-white">RUBIK</span>
            </div>
            <p className="text-sm text-rubi-gray leading-relaxed max-w-sm">
              Sistemas de Inteligencia. Tu aliado tecnológico para evolucionar, innovar y vender más.
            </p>
            <div className="flex items-center gap-2 text-xs text-rubi-gray">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Infraestructura encriptada extremo a extremo</span>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-apple-wide mb-6">Navegación</h3>
            <ul className="space-y-3">
              {['Inicio', 'Propuesta', 'Servicios', 'Planes', 'Proyectos', 'Testimonios', 'Contacto'].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                    className="text-sm text-rubi-gray hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="text-rubi-red/50 group-hover:text-rubi-red transition-colors">▸</span>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Legal & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-apple-wide mb-6">Legal</h3>
            <ul className="space-y-3 mb-8">
              {['Documentación', 'Estado API', 'Política de Privacidad', 'Términos y Condiciones'].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-rubi-gray hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-rubi-gray">
                  ISO 27001
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-rubi-gray">
                  Certmind
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs text-rubi-gray"
            >
              © {currentYear} RUBIK Sistemas de Inteligencia. Todos los derechos reservados.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs text-rubi-gray"
            >
              Bogotá, Colombia
            </motion.p>
          </div>
        </div>
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
    </footer>
  );
};

export default Footer;
