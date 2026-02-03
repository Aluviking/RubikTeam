const Footer = () => {
  const year = new Date().getFullYear();
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-marble-900 border-t border-white/[0.04] px-4 sm:px-6">
      <div className="max-w-6xl mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={`${import.meta.env.BASE_URL}img/logo.jpg`} alt="RUBIK" className="w-7 h-7 rounded-lg object-cover" />
              <span className="text-[14px] font-semibold tracking-tight text-white">RUBIK</span>
            </div>
            <p className="text-[13px] text-white-faint font-light leading-relaxed max-w-xs">
              Tecnología, ciberseguridad y transformación digital para empresas que buscan liderar.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] text-white-dim uppercase tracking-widest mb-4 font-medium">Navegación</h4>
            <ul className="space-y-2.5">
              {[['Inicio', '#inicio'], ['Servicios', '#servicios'], ['Proyectos', '#proyectos'], ['Planes', '#planes'], ['Contacto', '#contacto']].map(([label, id]) => (
                <li key={label}>
                  <button onClick={() => go(id)} className="text-[13px] text-white-faint hover:text-white-soft transition-colors duration-300">{label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] text-white-dim uppercase tracking-widest mb-4 font-medium">Legal</h4>
            <ul className="space-y-2.5 mb-6">
              {['Política de Privacidad', 'Términos de Servicio'].map((item) => (
                <li key={item}><a href="#" className="text-[13px] text-white-faint hover:text-white-soft transition-colors duration-300">{item}</a></li>
              ))}
            </ul>
            <div className="flex gap-2">
              <span className="tag">ISO 27001</span>
              <span className="tag">Certmind</span>
            </div>
          </div>
        </div>

        <div className="divider mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[12px] text-white-faint/50">© {year} RUBIK Intelligence. Bogotá, Colombia.</p>
          <p className="text-[11px] font-mono text-ruby/20">v2.0.1</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
