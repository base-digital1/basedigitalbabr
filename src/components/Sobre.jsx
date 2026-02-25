import React from 'react';

export default function Sobre() {
  return (
    <section id="sobre" className="py-32 px-8 bg-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Image - Asymmetrical Left */}
          <div className="w-full lg:w-3/5 relative z-0">
            <img 
              src="https://picsum.photos/seed/barberabout/1000/800" 
              alt="Sobre a Barbearia Império" 
              className="w-full h-[500px] md:h-[700px] object-cover rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.6)] grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-500 ease-in-out"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Text Card - Overlapping Right */}
          <div className="w-full lg:w-2/5 relative z-10 lg:-ml-32 mt-12 lg:mt-0">
            <div className="bg-[#1a1a1a]/95 backdrop-blur-md p-10 md:p-16 rounded-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/5">
              <h2 className="text-5xl md:text-7xl text-primary mb-8 uppercase tracking-widest font-heading">Sobre Nós</h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light tracking-wide">
                <p>
                  A Barbearia Império nasceu com o propósito de elevar o padrão do cuidado masculino em Curitiba.
                </p>
                <p>
                  Unimos técnica, atendimento personalizado e um ambiente moderno para proporcionar uma experiência completa.
                </p>
                <p className="text-white font-medium text-xl border-l-2 border-primary pl-4 mt-8">
                  Mais do que um corte, entregamos presença e confiança.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
