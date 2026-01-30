import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 z-0 bg-noise opacity-5 pointer-events-none"></div>

      {/* Humo rojo sutil - derecha */}
      <div className="absolute top-0 right-0 w-[50%] h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[700px] h-[700px] bg-rubi-red/8 rounded-full blur-[180px] animate-pulse-slow"></div>
        <div className="absolute top-[35%] right-[5%] w-[500px] h-[500px] bg-rubi-red/5 rounded-full blur-[160px] animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Main content */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center py-32 px-6">
        {/* Title section */}
        <div className="relative z-20 text-center flex flex-col items-center max-w-5xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8 shadow-lg shadow-black/20"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rubi-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rubi-red"></span>
            </span>
            <span className="text-xs uppercase tracking-apple-wide text-white/80 font-medium">System 4.0 Active</span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-medium tracking-apple-tight leading-[0.9] text-white mb-8"
          >
            ELEVATING{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rubi-red to-rubi-crimson">
              TECH.
            </span>
            <br />
            DEFINING{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rubi-red to-rubi-crimson">
              THE FUTURE.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mb-12 leading-relaxed"
          >
            Premium software development, design, and security solutions for global enterprises.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              onClick={() => scrollToSection('#servicios')}
              className="btn-apple-primary px-8 py-4 rounded-full font-semibold text-base uppercase tracking-apple-wide"
            >
              <span className="relative z-10">Explore Services</span>
            </motion.button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl"
          >
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="premium-glass-card-apple rounded-3xl p-10 text-center group"
            >
              <div className="mb-4 flex justify-center relative z-10">
                <div className="icon-container-apple p-4 rounded-xl">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2 relative z-10">500+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider relative z-10">Projects Completed</div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="premium-glass-card-apple rounded-3xl p-10 text-center group"
            >
              <div className="mb-4 flex justify-center relative z-10">
                <div className="icon-container-apple p-4 rounded-xl">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2 relative z-10">98%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider relative z-10">Client Satisfaction</div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="premium-glass-card-apple rounded-3xl p-10 text-center group"
            >
              <div className="mb-4 flex justify-center relative z-10">
                <div className="icon-container-apple p-4 rounded-xl">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2 relative z-10">50+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider relative z-10">Awards Won</div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 w-full h-[40vh] bg-gradient-to-t from-black via-black/90 to-transparent z-0 pointer-events-none"></div>

      {/* Architectural grid */}
      <div
        className="absolute -bottom-[20%] left-[-50%] right-[-50%] h-[80vh] arch-grid opacity-20 pointer-events-none z-0"
        style={{
          transform: 'perspective(1000px) rotateX(70deg)',
        }}
      ></div>

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

export default Hero;
