import React from 'react';

const servicesData = [
  {
    id: 'corte',
    title: "Corte Masculino",
    image: "/servico-corte.jpg"
  },
  {
    id: 'barba',
    title: "Barba",
    image: "/servico-barba.jpg"
  },
  {
    id: 'sobrancelha',
    title: "Sobrancelha",
    image: "/servico-sobrancelha.jpg"
  },
  {
    id: 'pigmentacao',
    title: "Pigmentação",
    image: "/servico-pigmentacao.jpg"
  }
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
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="group relative overflow-hidden rounded-[20px] shadow-xl border border-white/5 hover:border-primary/50 hover:shadow-[0_15px_40px_rgba(201,162,39,0.15)] transition duration-500 ease-in-out transform hover:-translate-y-2 cursor-default will-change-transform aspect-[4/3] md:aspect-[16/10] bg-[#1a1a1a]"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition duration-700 ease-in-out transform group-hover:scale-110"
                loading="lazy"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex items-end justify-between">
                <span className="text-3xl md:text-4xl font-heading text-white tracking-widest uppercase drop-shadow-lg">{service.title}</span>
                <span className="text-primary font-heading text-4xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">+</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
