import React from 'react';

export default function Contato() {
  return (
    <section id="contato" className="py-20 md:py-32 px-4 md:px-8 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-0">
          
          {/* Info Card - Overlapping the map */}
          <div className="w-full lg:w-5/12 bg-[#161616] p-8 md:p-16 rounded-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/5 relative z-20 lg:-mr-16 mt-8 lg:mt-0 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-7xl text-primary mb-8 md:mb-12 uppercase tracking-widest font-heading">Contato</h2>
            
            <div className="space-y-8 md:space-y-10">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 tracking-widest uppercase">Endereço</h3>
                <p className="text-gray-400 text-base md:text-lg font-light tracking-wide leading-relaxed">
                  Rua XV de Novembro, 1450 – Centro<br/>Curitiba - PR
                </p>
              </div>
              
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 tracking-widest uppercase">Horário</h3>
                <p className="text-gray-400 text-base md:text-lg font-light tracking-wide leading-relaxed">
                  Segunda a Sexta: 09h às 19h<br/>
                  Sábado: 09h às 17h<br/>
                  Domingo: Fechado
                </p>
              </div>
              
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-5 tracking-widest uppercase">Redes Sociais</h3>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                  <a 
                    href="https://instagram.com/base_digital1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-white font-bold text-base md:text-lg transition-colors uppercase tracking-widest flex items-center gap-2"
                  >
                    <span className="w-6 md:w-8 h-px bg-primary"></span> Instagram
                  </a>
                  <a 
                    href="https://wa.me/5567991788626" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-white font-bold text-base md:text-lg transition-colors uppercase tracking-widest flex items-center gap-2"
                  >
                    <span className="w-6 md:w-8 h-px bg-primary"></span> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="w-full lg:w-7/12 h-[350px] sm:h-[450px] lg:h-[700px] rounded-[20px] overflow-hidden shadow-2xl relative z-10 order-1 lg:order-2 border border-white/5">
            <iframe 
              src="https://maps.google.com/maps?q=Rua+XV+de+Novembro+1450+Curitiba&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Barbearia Império"
              className="w-full h-full transition duration-700 ease-in-out transform-gpu"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
