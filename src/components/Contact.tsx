import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const handleSubmit = (e: React.FormEvent) => e.preventDefault();
  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <section id="contacto" className="relative bg-marble-900 py-16 sm:py-28 px-4 sm:px-6 marble-tex">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="label-section mb-5 block">Contacto</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-5">Hablemos de tu proyecto</h2>
              <p className="text-[15px] text-white-faint font-light leading-relaxed mb-10">
                Cuéntanos qué necesitas. Nuestro equipo te responde en menos de 24 horas.
              </p>
            </motion.div>

            <div className="space-y-6">
              <div className="card p-5 flex items-center gap-4 cursor-pointer group"
                onClick={() => window.open('https://maps.google.com/?q=Bogotá,Colombia', '_blank')}>
                <div className="relative z-10 flex items-center gap-4 w-full">
                  <div className="w-10 h-10 rounded-xl bg-ruby/[0.06] border border-ruby/[0.1] flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-ruby shadow-[0_0_8px_rgba(225,29,72,0.6)]" />
                  </div>
                  <div>
                    <div className="text-[14px] text-white-soft">Bogotá, Colombia</div>
                    <div className="text-[11px] text-white-faint">Abrir en Maps</div>
                  </div>
                </div>
              </div>

              <div className="card p-5">
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ruby/[0.06] border border-ruby/[0.1] flex items-center justify-center">
                    <span className="text-ruby/60 text-sm">@</span>
                  </div>
                  <div>
                    <div className="text-[14px] text-white-soft">intelligence@rubik.io</div>
                    <div className="text-[11px] text-white-faint">Email corporativo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
              <div className="relative z-10 space-y-5">
                <div>
                  <label className="text-[11px] text-white-faint uppercase tracking-widest block mb-2">Nombre</label>
                  <input name="name" value={form.name} onChange={set} placeholder="Tu nombre completo" className="input-marble" />
                </div>
                <div>
                  <label className="text-[11px] text-white-faint uppercase tracking-widest block mb-2">Email</label>
                  <input name="email" type="email" value={form.email} onChange={set} placeholder="nombre@empresa.com" className="input-marble" />
                </div>
                <div>
                  <label className="text-[11px] text-white-faint uppercase tracking-widest block mb-2">Tema</label>
                  <select name="subject" value={form.subject} onChange={set} className="input-marble appearance-none cursor-pointer">
                    <option value="" className="bg-marble-800">Selecciona un tema</option>
                    <option value="dev" className="bg-marble-800">Desarrollo de Software</option>
                    <option value="security" className="bg-marble-800">Ciberseguridad</option>
                    <option value="automation" className="bg-marble-800">Automatización</option>
                    <option value="marketing" className="bg-marble-800">Marketing Digital</option>
                    <option value="design" className="bg-marble-800">Diseño</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] text-white-faint uppercase tracking-widest block mb-2">Mensaje</label>
                  <textarea name="message" value={form.message} onChange={set} placeholder="Describe tu proyecto..." rows={4}
                    className="input-marble h-auto p-4 resize-none" />
                </div>
                <button type="submit" className="btn-ruby w-full">Enviar mensaje</button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
