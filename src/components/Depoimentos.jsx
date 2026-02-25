import React from 'react';

const testimonials = [
  "Melhor barbearia da região, atendimento impecável e corte perfeito.",
  "Ambiente top e profissionais muito qualificados.",
  "Sempre saio satisfeito, virou minha barbearia oficial.",
  "Pontualidade e qualidade no mesmo lugar."
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-32 px-8 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-7xl text-primary mb-6 uppercase tracking-widest font-heading">O que nossos clientes dizem</h2>
          <div className="w-24 h-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((text, index) => (
            <div 
              key={index} 
              className={`bg-[#111111]/80 backdrop-blur-sm p-10 md:p-12 rounded-[20px] shadow-2xl border border-white/5 hover:border-primary/30 transition duration-300 ease-in-out transform hover:-translate-y-2 will-change-transform ${index % 2 !== 0 ? 'md:translate-y-12' : ''}`}
            >
              <p className="text-gray-300 text-xl md:text-2xl italic mb-10 font-light leading-relaxed tracking-wide">"{text}"</p>
              <div className="flex items-center gap-6">
                <div className="w-12 h-1 bg-primary rounded-full"></div>
                <span className="text-white font-bold tracking-widest uppercase text-sm">Cliente Satisfeito</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
