import React from 'react';

export default function CTA() {
  return (
    <section className="py-32 px-8 bg-[#111111]">
      <div className="max-w-7xl mx-auto relative rounded-[32px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/barbercta/1920/800" 
            alt="Barbearia CTA" 
            className="w-full h-full object-cover grayscale opacity-40"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 py-32 px-8 text-center flex flex-col items-center">
          <h2 className="text-6xl md:text-8xl text-primary mb-8 uppercase tracking-widest font-heading drop-shadow-2xl">
            Pronto para o<br/>próximo nível?
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 font-light tracking-wide max-w-2xl">
            Garanta seu horário e experimente o padrão Império.
          </p>
          <a 
            href="https://wa.me/5567991788626" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-primary text-[#0a0a0a] font-bold text-lg md:text-xl px-12 py-5 rounded-[20px] uppercase tracking-[0.15em] hover:bg-white hover:shadow-[0_10px_40px_rgba(201,162,39,0.4)] transition duration-300 ease-in-out transform hover:-translate-y-1 will-change-transform"
          >
            Agendar Agora
          </a>
        </div>

      </div>
    </section>
  );
}
