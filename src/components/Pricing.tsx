import { motion } from 'framer-motion';
import { useState } from 'react';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      tier: 'Entrada',
      name: 'Plan Esencial',
      price: 'Desde $300',
      period: '/ mes',
      description: 'Soporte técnico, mantenimiento y optimización mensual para tu infraestructura digital.',
      features: [
        'Soporte técnico especializado',
        'Mantenimiento preventivo y correctivo',
        'Optimización mensual de sistemas',
        'Reportes de rendimiento',
        'Actualizaciones de seguridad básicas',
        'Monitoreo de infraestructura'
      ],
      buttonText: 'COMENZAR AHORA',
      highlighted: false
    },
    {
      tier: 'Profesional',
      name: 'Plan Profesional',
      price: 'Desde $890',
      period: '/ mes',
      description: 'Solución integral: mantenimiento, desarrollo, automatización y reportes estratégicos.',
      features: [
        'Todo lo del Plan Esencial',
        'Desarrollo web personalizado',
        'Automatización de procesos operativos',
        'Reportes ejecutivos mensuales',
        'Consultoría estratégica trimestral',
        'Integración de sistemas (CRM/ERP)',
        'Prioridad en soporte técnico'
      ],
      buttonText: 'PLAN RECOMENDADO',
      highlighted: true,
      active: true
    },
    {
      tier: 'Empresarial',
      name: 'Plan Corporativo',
      price: 'Personalizado',
      period: '',
      description: 'Transformación digital completa con consultoría estratégica, ciberseguridad ISO 27001 y liderazgo tecnológico.',
      features: [
        'Todo lo del Plan Profesional',
        'Consultoría estratégica continua',
        'Liderazgo digital y transformación',
        'Auditoría ISO 27001 completa',
        'Implementación de SGSI',
        'Equipo dedicado 24/7',
        'Infraestructura cloud personalizada',
        'Gestión de cultura organizacional'
      ],
      buttonText: 'CONTACTAR VENTAS',
      highlighted: false
    }
  ];

  return (
    <section id="planes" className="relative w-full min-h-screen flex flex-col overflow-hidden bg-rubi-black py-32">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 bg-noise opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 z-0 flex items-start justify-center pointer-events-none">
        <div className="w-[80vw] h-[80vw] bg-radial-glow from-rubi-red/10 via-rubi-crimson/5 to-transparent blur-[120px] animate-pulse-slow -mt-[20vh]"></div>
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full arch-grid opacity-30"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-6 flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8 shadow-lg shadow-black/20"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rubi-red"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-semibold">Planes de Servicio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] text-white mb-6"
          >
            ELIGE EL PLAN IDEAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-rubi-gray to-rubi-dark relative">
              PARA TU EMPRESA
              <span aria-hidden="true" className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 blur-[1px] opacity-80">PARA TU EMPRESA</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-rubi-gray font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          >
            Desde mantenimiento esencial hasta transformación digital completa. Selecciona el plan que mejor se adapte a tus necesidades y objetivos de crecimiento.
          </motion.p>
        </div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-20 mb-20 p-1 bg-white/5 rounded-full border border-white/10 flex items-center backdrop-blur-md"
        >
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`relative px-6 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors ${
              billingPeriod === 'monthly' ? 'text-white bg-white/10 shadow-sm border border-white/5' : 'text-rubi-gray hover:text-white'
            }`}
          >
            MENSUAL
          </button>
          <button
            onClick={() => setBillingPeriod('annual')}
            className={`relative px-6 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors ${
              billingPeriod === 'annual' ? 'text-white bg-white/10 shadow-sm border border-white/5' : 'text-rubi-gray hover:text-white'
            }`}
          >
            ANUAL
            {billingPeriod === 'annual' && (
              <span className="absolute -top-3 -right-3 text-[9px] bg-rubi-red text-white px-1.5 py-0.5 rounded-full font-bold shadow-[0_0_10px_rgba(230,0,35,0.4)]">−20%</span>
            )}
          </button>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative premium-glass-card-apple rounded-2xl p-8 min-h-[600px] flex flex-col transition-all duration-500 ${
                plan.highlighted
                  ? 'shadow-[0_0_0_2px_rgba(230,0,35,0.4),0_0_40px_-10px_rgba(230,0,35,0.5)] hover:-translate-y-2'
                  : 'hover:-translate-y-2 hover:shadow-2xl hover:shadow-rubi-red/20'
              }`}
            >
              {/* Extra glow for highlighted */}
              {plan.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-b from-rubi-red/10 to-transparent rounded-2xl pointer-events-none"></div>
              )}

              {/* Left glow accent */}
              <div className={`absolute left-0 top-1/4 w-1 h-1/2 bg-gradient-to-b from-transparent via-rubi-red to-transparent blur-sm transition-opacity duration-500 ${
                plan.highlighted ? 'opacity-80' : 'opacity-0 group-hover:opacity-70'
              }`}></div>

              {/* Scanning line for highlighted card */}
              {plan.highlighted && (
                <motion.div
                  initial={{ top: '-100%' }}
                  animate={{ top: '200%' }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rubi-red/60 to-transparent pointer-events-none"
                ></motion.div>
              )}

              {/* Active badge */}
              {plan.active && (
                <div className="absolute top-0 right-0 p-6">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rubi-red opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-rubi-red"></span>
                    </span>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-rubi-red">Activo</span>
                  </div>
                </div>
              )}

              <div className="relative z-10 flex flex-col h-full">
                {/* Plan tier and name */}
                <div className="mb-8">
                  <span className={`text-xs font-mono uppercase tracking-widest mb-2 block ${
                    plan.highlighted ? 'text-rubi-red' : 'text-rubi-gray'
                  }`}>
                    {plan.tier}
                  </span>
                  <h3 className={`text-2xl font-display font-semibold mb-4 ${
                    plan.highlighted ? 'text-white' : 'text-white'
                  }`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm leading-relaxed h-10 ${
                    plan.highlighted ? 'text-white/80' : 'text-rubi-gray'
                  }`}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8 flex items-baseline gap-1">
                  <span className={`font-display font-bold tracking-tight ${
                    plan.price === 'Custom' ? 'text-4xl' : 'text-5xl'
                  } text-white`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm ${
                      plan.highlighted ? 'text-white/60' : 'text-rubi-gray'
                    }`}>
                      {plan.period}
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="flex-grow space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <svg
                        className={`w-[18px] h-[18px] pt-0.5 flex-shrink-0 ${
                          plan.highlighted ? 'text-rubi-red' : 'text-white/40'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        {plan.highlighted ? (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        ) : (
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        )}
                      </svg>
                      <span className={`text-sm ${
                        plan.highlighted ? 'text-white font-medium' : 'text-rubi-gray'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                  onClick={() => {
                    const element = document.querySelector('#contacto');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`relative w-full py-3.5 rounded-lg text-xs font-bold tracking-wider transition-all overflow-hidden group/btn ${
                    plan.highlighted
                      ? 'btn-apple-primary'
                      : 'btn-apple-secondary'
                  }`}
                >
                  <span className="relative z-10">{plan.buttonText}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
