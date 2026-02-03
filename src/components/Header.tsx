import { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Floating particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;
    for (let i = 0; i < 24; i++) {
      particles.push({
        x: Math.random() * w(),
        y: Math.random() * h(),
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 1.5 + 0.4,
        o: Math.random() * 0.25 + 0.06,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w(), h());
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w();
        if (p.x > w()) p.x = 0;
        if (p.y < 0) p.y = h();
        if (p.y > h()) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(225, 29, 72, ${p.o})`;
        ctx.fill();
      }

      // Draw faint connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(225, 29, 72, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const go = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    setQuery('');
  };

  const sections = [
    { id: '#servicios', label: 'Servicios' },
    { id: '#proyectos', label: 'Proyectos' },
    { id: '#planes', label: 'Planes' },
    { id: '#contacto', label: 'Contacto' },
  ];

  const filtered = query.trim()
    ? sections.filter(s => s.label.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-marble-900/50 backdrop-blur-3xl border-b border-white/[0.07] transition-all duration-700 shadow-[0_4px_30px_rgba(0,0,0,0.3),0_1px_0_rgba(255,255,255,0.04)_inset]">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <nav className="relative max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Search bar — left */}
        <div className="relative flex-1 max-w-[140px] sm:max-w-[180px] hidden sm:block">
          <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-full px-3 py-1.5 transition-all duration-500 focus-within:border-white/[0.12] focus-within:bg-white/[0.06]">
            <svg className="w-3 h-3 text-white/20 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Buscar..."
              className="bg-transparent text-[11px] text-white/60 placeholder:text-white/20 outline-none w-full font-light"
            />
          </div>
          {filtered.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-marble-800/95 backdrop-blur-xl border border-white/[0.06] rounded-xl overflow-hidden shadow-2xl">
              {filtered.map(s => (
                <button key={s.id} onClick={() => go(s.id)}
                  className="w-full px-4 py-2.5 text-left text-[11px] text-white/50 hover:text-white/90 hover:bg-white/[0.04] transition-colors duration-300">
                  {s.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Logo — center */}
        <button onClick={() => go('#inicio')} className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <img src={`${import.meta.env.BASE_URL}img/logo.jpg`} alt="RUBIK" className="w-6 h-6 rounded-md object-cover" />
          <span className="text-[13px] font-semibold tracking-tight text-white/90">RUBIK</span>
        </button>

        {/* Nav links — right */}
        <div className="flex-1 flex justify-end items-center gap-4 md:gap-6">
          <div className="hidden md:flex items-center gap-6">
            {['Servicios', 'Proyectos', 'Planes'].map(name => (
              <button key={name} onClick={() => go(`#${name.toLowerCase()}`)}
                className="text-[11px] text-white/25 hover:text-white/70 transition-colors duration-500">
                {name}
              </button>
            ))}
          </div>
          <button onClick={() => go('#contacto')}
            className="hidden sm:block text-[11px] font-semibold text-white bg-[#e11d48] hover:bg-[#fb7185] px-6 py-2 rounded-full transition-all duration-500 shadow-[0_4px_20px_rgba(225,29,72,0.4)] hover:shadow-[0_6px_30px_rgba(225,29,72,0.5)] hover:scale-105">
            Contacto
          </button>
          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-1">
            <span className={`block w-5 h-[1.5px] bg-white/60 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-white/60 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-white/60 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden relative z-10 border-t border-white/[0.05] bg-marble-900/90 backdrop-blur-2xl px-6 py-4 flex flex-col gap-3">
          {['Servicios', 'Proyectos', 'Planes'].map(name => (
            <button key={name} onClick={() => { go(`#${name.toLowerCase()}`); setMenuOpen(false); }}
              className="text-[13px] text-white/50 hover:text-white/90 transition-colors duration-300 text-left py-1">
              {name}
            </button>
          ))}
          <button onClick={() => { go('#contacto'); setMenuOpen(false); }}
            className="text-[12px] font-semibold text-white bg-[#e11d48] hover:bg-[#fb7185] px-5 py-2.5 rounded-full transition-all duration-500 shadow-[0_4px_20px_rgba(225,29,72,0.4)] mt-1 w-full">
            Contacto
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
