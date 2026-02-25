import React from 'react';

export default function Sobre() {
  // Imagem da seção Sobre Nós
  const bgImage = "/sobre-bg.png";

  return (
    <section id="sobre" className="py-32 px-8 bg-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Text Card - Overlapping Left */}
          <div className="w-full lg:w-2/5 relative z-10 mb-12 lg:mb-0">
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

          {/* Image - Asymmetrical Right */}
          <div className="w-full lg:w-3/5 relative z-0 lg:-ml-32 h-[500px] md:h-[700px] bg-[#1a1a1a] rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <img 
              src={bgImage} 
              alt="Sobre a Barbearia Império" 
              className="absolute inset-0 w-full h-full object-cover transition duration-500 ease-in-out transform-gpu"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
