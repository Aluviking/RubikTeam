import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const headerY = useTransform(scrollY, [0, 100], [0, -10]);
  const logoOpacity = useTransform(scrollY, [0, 50], [1, 0.7]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Propuesta', href: '#propuesta' },
    { name: 'Planes', href: '#planes' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Testimonios', href: '#testimonios' },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
      style={{ y: headerY }}
    >
      {/* Cristal principal con gradiente */}
      <div className={`relative mx-4 mt-4 rounded-2xl overflow-hidden transition-all duration-700 ${
        isScrolled
          ? 'bg-black/95 shadow-[0_20px_80px_rgba(0,0,0,0.9)]'
          : 'bg-black/40 shadow-[0_10px_40px_rgba(0,0,0,0.3)]'
      }`}
        style={{
          backdropFilter: isScrolled ? 'blur(60px) saturate(200%)' : 'blur(30px) saturate(150%)',
        }}
      >
        {/* Reflejo de cristal superior MUY visible */}
        <div
          className={`absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 via-white/10 to-transparent transition-opacity duration-700 ${
            isScrolled ? 'opacity-20' : 'opacity-30'
          }`}
        />

        {/* Borde brillante superior */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        {/* Borde inferior con gradiente rojo */}
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rubi-red to-transparent transition-all duration-700 ${
          isScrolled ? 'opacity-100 shadow-[0_0_20px_rgba(230,0,35,0.5)]' : 'opacity-0'
        }`} />

        {/* Contenido del nav */}
        <nav className="relative px-8 py-5">
          <div className="flex items-center justify-between max-w-7xl mx-auto">

            {/* Logo minimalista con cristal */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              style={{ opacity: logoOpacity }}
            >
              <div className="relative">
                {/* Logo con efecto de cristal */}
                <div className={`relative rounded-lg overflow-hidden transition-all duration-500 ${
                  isScrolled ? 'w-10 h-10' : 'w-12 h-12'
                }`}>
                  {/* Gradiente de fondo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rubi-red/60 via-rubi-red/30 to-transparent" />

                  <img
                    src={`${import.meta.env.BASE_URL}img/logo.jpg`}
                    alt="RUBIK"
                    className="w-full h-full object-cover"
                  />

                  {/* Reflejo de cristal superior SUPER visible */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent" />

                  {/* Borde brillante */}
                  <div className="absolute inset-0 border border-white/30 rounded-lg" />
                </div>

                {/* REFLEJO INVERTIDO DEBAJO - MUY VISIBLE */}
                <div
                  className="absolute left-0 right-0 rounded-lg overflow-hidden"
                  style={{
                    top: isScrolled ? '42px' : '50px',
                    height: isScrolled ? '40px' : '48px',
                    opacity: 0.5,
                    filter: 'blur(6px)',
                    transform: 'scaleY(-1)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 70%)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-rubi-red/40 to-transparent" />
                  <img
                    src={`${import.meta.env.BASE_URL}img/logo.jpg`}
                    alt=""
                    className="w-full h-full object-cover opacity-70"
                    style={{ transform: 'scaleY(-1)' }}
                  />
                </div>
              </div>

              <span className={`font-light uppercase transition-all duration-500 ${
                isScrolled
                  ? 'text-xl tracking-[0.4em]'
                  : 'text-2xl tracking-[0.5em]'
              }`}>
                RUBIK
              </span>
            </motion.div>

            {/* Navegación minimalista */}
            <div className="hidden md:flex items-center gap-12">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="relative group"
                >
                  <span className="text-[10px] font-light uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-all duration-500">
                    {item.name}
                  </span>

                  {/* Línea animada */}
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-rubi-red to-white group-hover:w-full transition-all duration-700" />

                  {/* Reflejo de la línea */}
                  <div
                    className="absolute left-0 w-0 h-px bg-gradient-to-r from-rubi-red/30 to-white/30 group-hover:w-full transition-all duration-700 blur-[1px] opacity-60"
                    style={{ bottom: '-6px' }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Botón CTA con cristal */}
            <div className="hidden md:block">
              <motion.button
                onClick={() => scrollToSection('#contacto')}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className={`px-8 py-3 rounded-full border-2 transition-all duration-500 ${
                  isScrolled
                    ? 'border-rubi-red/70 bg-rubi-red/30'
                    : 'border-white/40 bg-white/10'
                }`}
                  style={{ backdropFilter: 'blur(20px)' }}
                >
                  {/* Reflejo superior del botón */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-full" />

                  <span className="relative z-10 text-[10px] font-medium uppercase tracking-[0.4em] text-white">
                    Inicializar
                  </span>
                </div>

                {/* REFLEJO INVERTIDO DEL BOTÓN - MUY VISIBLE */}
                <div
                  className="absolute left-0 right-0 h-full rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500"
                  style={{
                    top: '48px',
                    background: 'linear-gradient(180deg, rgba(230,0,35,0.4) 0%, transparent 100%)',
                    filter: 'blur(8px)',
                    transform: 'scaleY(-0.7)',
                  }}
                />
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white/70 hover:text-white text-2xl transition-colors"
              onClick={() => {}}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* REFLEJO COMPLETO DEL HEADER - MUY VISIBLE */}
      <div
        className={`absolute left-0 right-0 mx-4 rounded-2xl transition-all duration-700 pointer-events-none ${
          isScrolled ? 'opacity-40' : 'opacity-25'
        }`}
        style={{
          top: isScrolled ? '88px' : '96px',
          height: '100px',
          background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%)',
          filter: 'blur(20px)',
          transform: 'scaleY(-0.5)',
        }}
      />
    </motion.header>
  );
};

export default Header;
