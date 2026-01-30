import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    privacy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <section id="contacto" className="relative w-full min-h-screen flex flex-col bg-rubi-black">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 bg-noise opacity-30 pointer-events-none fixed"></div>
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none fixed">
        <div className="w-[80vw] h-[80vw] bg-radial-glow from-rubi-red/5 via-rubi-crimson/5 to-transparent blur-[120px] animate-pulse-slow translate-y-[-20%]"></div>
      </div>

      <main className="relative z-10 flex-grow w-full max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        {/* Left Column - Info & Map */}
        <div className="lg:col-span-5 flex flex-col relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 w-fit shadow-lg"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rubi-red animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest text-rubi-gray font-semibold">Canal Seguro</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Iniciar <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rubi-red via-white to-white">Secuencia Global.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-rubi-gray text-lg font-light leading-relaxed mb-12"
          >
            Ayudamos a empresas a optimizar sus operaciones y potenciar sus ventas mediante soluciones tecnológicas, desarrollo web, ciberseguridad, automatización y estrategias digitales. Conéctate con nosotros para integrar, proteger y escalar tus sistemas.
          </motion.p>

          {/* Interactive Map Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="premium-glass-card-apple relative w-full h-[300px] perspective-1000 flex items-center justify-center rounded-2xl overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => window.open('https://maps.google.com/?q=Bogotá,Colombia', '_blank')}
          >
            {/* Animated grid background */}
            <div className="absolute inset-[-50%] animate-pulse-slow group-hover:animate-none transition-all" style={{
              backgroundImage: 'linear-gradient(rgba(230, 0, 35, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(230, 0, 35, 0.15) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              transform: 'rotateX(60deg) scale(1.5)',
              maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
            }}></div>

            {/* Center marker */}
            <div className="relative preserve-3d animate-float">
              {/* Pulsing dot */}
              <div className="relative w-4 h-4 z-10">
                <span className="absolute inline-flex h-full w-full rounded-full bg-rubi-red opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-rubi-red shadow-[0_0_30px_rgba(230,0,35,1)]"></span>
              </div>

              {/* Rotating rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-rubi-red/40 rounded-full animate-[spin_10s_linear_infinite] group-hover:border-rubi-red/70 transition-colors" style={{ transform: 'rotateX(70deg)' }}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/20 rounded-full group-hover:border-white/40 transition-colors" style={{ animation: 'spin 15s linear infinite reverse', transform: 'rotateX(70deg)' }}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-rubi-red/10 rounded-full animate-[spin_20s_linear_infinite]" style={{ transform: 'rotateX(70deg)' }}></div>

              {/* Vertical beam */}
              <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-[2px] h-32 bg-gradient-to-t from-rubi-red via-rubi-red/50 to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>

              {/* Location label */}
              <motion.div
                className="absolute top-[-50px] left-[50px] bg-rubi-dark/95 border border-rubi-red/30 px-3 py-2 rounded-lg text-[10px] text-rubi-gray whitespace-nowrap backdrop-blur-md shadow-lg animate-float group-hover:border-rubi-red/60 transition-all"
                style={{ animationDelay: '1s' }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rubi-red opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rubi-red"></span>
                  </span>
                  <span className="text-white font-semibold text-xs">RUBIK HQ</span>
                </div>
                <span className="text-white/70 font-mono text-[9px]">4.6097° N, 74.0817° W</span>
                <div className="text-rubi-red/80 text-[9px] mt-1">Click para abrir en Maps</div>
              </motion.div>
            </div>

            {/* Radar sweep effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(230, 0, 35, 0.1) 60deg, transparent 120deg)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* Status indicator */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div className="flex flex-col gap-1 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                <span className="text-[9px] text-rubi-gray uppercase tracking-wider">Sistema</span>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs text-white font-mono">EN LÍNEA</span>
                </div>
              </div>

              <motion.div
                className="bg-black/30 backdrop-blur-sm p-2 rounded-lg border border-white/10"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="w-5 h-5 text-rubi-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-rubi-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 space-y-4"
          >
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-rubi-red/30 group-hover:bg-rubi-red/10 transition-colors">
                <svg className="w-[18px] h-[18px] text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <div className="text-[11px] text-rubi-gray uppercase tracking-wide">Correo Electrónico</div>
                <div className="text-white text-sm font-medium">intelligence@rubik.io</div>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-rubi-red/30 group-hover:bg-rubi-red/10 transition-colors">
                <svg className="w-[18px] h-[18px] text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-[11px] text-rubi-gray uppercase tracking-wide">Base de Operaciones</div>
                <div className="text-white text-sm font-medium">Bogotá, Colombia</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-7 relative"
        >
          <form onSubmit={handleSubmit} className="premium-glass-card-apple relative rounded-3xl p-10 overflow-hidden">
            {/* Top gradient glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-b from-rubi-red/10 to-transparent blur-3xl pointer-events-none rounded-full transform translate-x-1/2 -translate-y-1/2"></div>

            {/* Left glow accent */}
            <div className="absolute left-0 top-1/3 w-1 h-1/3 bg-gradient-to-b from-transparent via-rubi-red to-transparent opacity-50 blur-sm"></div>

            {/* Scan line */}
            <motion.div
              initial={{ top: '-100%' }}
              animate={{ top: '200%' }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rubi-red/30 to-transparent pointer-events-none"
            ></motion.div>

            {/* Name fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-xs font-medium text-rubi-gray uppercase tracking-wider ml-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Ingresa tu nombre"
                  className="w-full h-12 rounded-lg px-4 text-sm text-white bg-white/[0.03] border border-white/10 placeholder-white/20 focus:bg-white/[0.05] focus:border-rubi-red/50 focus:outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-xs font-medium text-rubi-gray uppercase tracking-wider ml-1">
                  Apellido
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Ingresa tu apellido"
                  className="w-full h-12 rounded-lg px-4 text-sm text-white bg-white/[0.03] border border-white/10 placeholder-white/20 focus:bg-white/[0.05] focus:border-rubi-red/50 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2 mb-6">
              <label htmlFor="email" className="text-xs font-medium text-rubi-gray uppercase tracking-wider ml-1">
                Email Empresarial
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="nombre@empresa.com"
                className="w-full h-12 rounded-lg px-4 text-sm text-white bg-white/[0.03] border border-white/10 placeholder-white/20 focus:bg-white/[0.05] focus:border-rubi-red/50 focus:outline-none transition-all"
              />
            </div>

            {/* Subject */}
            <div className="space-y-2 mb-6">
              <label htmlFor="subject" className="text-xs font-medium text-rubi-gray uppercase tracking-wider ml-1">
                Tipo de Consulta
              </label>
              <div className="relative">
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full h-12 rounded-lg px-4 text-sm text-white bg-white/[0.03] border border-white/10 appearance-none cursor-pointer focus:bg-white/[0.05] focus:border-rubi-red/50 focus:outline-none transition-all"
                >
                  <option value="" className="bg-rubi-dark text-gray-400">Selecciona un tema</option>
                  <option value="transformation" className="bg-rubi-dark text-white">Transformación Digital</option>
                  <option value="cybersecurity" className="bg-rubi-dark text-white">Ciberseguridad ISO 27001</option>
                  <option value="development" className="bg-rubi-dark text-white">Desarrollo Web & Apps</option>
                  <option value="agile" className="bg-rubi-dark text-white">Metodologías Ágiles</option>
                  <option value="marketing" className="bg-rubi-dark text-white">Marketing Digital</option>
                  <option value="design" className="bg-rubi-dark text-white">Diseño & Branding</option>
                  <option value="consulting" className="bg-rubi-dark text-white">Consultoría Estratégica</option>
                  <option value="partnership" className="bg-rubi-dark text-white">Propuesta de Alianza</option>
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-rubi-gray pointer-events-none w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2 mb-8">
              <label htmlFor="message" className="text-xs font-medium text-rubi-gray uppercase tracking-wider ml-1">
                Protocolo de Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Detalla tus requerimientos..."
                rows={4}
                className="w-full rounded-lg p-4 text-sm text-white bg-white/[0.03] border border-white/10 placeholder-white/20 resize-none focus:bg-white/[0.05] focus:border-rubi-red/50 focus:outline-none transition-all"
              />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-white/5">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="rounded bg-white/5 border-white/20 text-rubi-red focus:ring-0 focus:ring-offset-0 w-4 h-4 cursor-pointer"
                />
                <label htmlFor="privacy" className="text-[11px] text-rubi-gray cursor-pointer select-none">
                  Acepto la <a href="#" className="text-white hover:text-rubi-red transition-colors underline decoration-white/20 underline-offset-2">Política de Privacidad</a>
                </label>
              </div>
              <button
                type="submit"
                className="btn-apple-primary group px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2"
              >
                <span className="relative z-10">Transmitir Solicitud</span>
                <svg className="w-[18px] h-[18px] relative z-10 group-hover:rotate-45 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </form>
        </motion.div>
      </main>

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

export default Contact;
