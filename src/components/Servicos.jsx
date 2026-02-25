import React from 'react';

const services = [
  "Corte Masculino Tradicional",
  "Corte Degradê (Fade)",
  "Barba Completa",
  "Barba Terapia",
  "Corte + Barba",
  "Sobrancelha Masculina",
  "Pigmentação",
  "Hidratação Capilar"
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-32 px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-7xl text-primary mb-6 uppercase tracking-widest font-heading">Nossos Serviços</h2>
          <div className="w-24 h-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Column 1 */}
          <div className="space-y-6 md:space-y-8">
            {services.slice(0, 4).map((service, index) => (
              <div 
                key={index} 
                className="bg-[#111111] p-8 md:p-10 rounded-[20px] shadow-xl border border-white/5 hover:border-primary/50 hover:shadow-[0_15px_40px_rgba(201,162,39,0.15)] transition duration-300 ease-in-out transform hover:-translate-y-2 flex items-center justify-between group cursor-default will-change-transform"
              >
                <span className="text-xl md:text-2xl font-bold text-gray-300 group-hover:text-white transition-colors tracking-wide">{service}</span>
                <span className="text-primary font-heading text-4xl group-hover:scale-110 transition-transform duration-300">+</span>
              </div>
            ))}
          </div>

          {/* Column 2 - Staggered on desktop */}
          <div className="space-y-6 md:space-y-8 md:mt-16 lg:mt-24">
            {services.slice(4, 8).map((service, index) => (
              <div 
                key={index} 
                className="bg-[#111111] p-8 md:p-10 rounded-[20px] shadow-xl border border-white/5 hover:border-primary/50 hover:shadow-[0_15px_40px_rgba(201,162,39,0.15)] transition duration-300 ease-in-out transform hover:-translate-y-2 flex items-center justify-between group cursor-default will-change-transform"
              >
                <span className="text-xl md:text-2xl font-bold text-gray-300 group-hover:text-white transition-colors tracking-wide">{service}</span>
                <span className="text-primary font-heading text-4xl group-hover:scale-110 transition-transform duration-300">+</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
