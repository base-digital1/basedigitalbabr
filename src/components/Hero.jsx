import React from 'react';

export default function Hero() {
  const headline = "Barbearia Império";
  const words = headline.split(" ");
  
  // Usando a imagem que você acabou de fazer upload!
  const bgImage = "/hero-bg.jpg.png";

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <img 
          src={bgImage} 
          alt="Barbearia Império" 
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Dark Overlay for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full flex flex-col items-start pt-20">
        <h1 className="text-7xl md:text-8xl lg:text-[140px] mb-6 uppercase tracking-widest leading-[0.9] font-heading drop-shadow-2xl">
          {words.map((word, wIndex) => (
            <React.Fragment key={wIndex}>
              <span className={`inline-block whitespace-nowrap ${wIndex === 1 ? 'text-primary' : 'text-white'}`}>
                {word.split("").map((letter, lIndex) => {
                  const absoluteIndex = wIndex === 0 ? lIndex : words[0].length + lIndex;
                  return (
                    <span 
                      key={lIndex}
                      className="inline-block animate-word-reveal"
                      style={{ animationDelay: `${absoluteIndex * 80}ms` }}
                    >
                      {letter}
                    </span>
                  );
                })}
              </span>
              {wIndex === 0 && <br />}
            </React.Fragment>
          ))}
        </h1>
        
        <p className="text-gray-300 text-xl md:text-2xl font-light tracking-wide max-w-xl mb-12 drop-shadow-md">
          Precisão, estilo e presença em cada corte.
        </p>

        <a 
          href="https://wa.me/5567991788626" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-primary text-[#0a0a0a] font-bold text-lg md:text-xl px-12 py-5 rounded-[20px] uppercase tracking-[0.15em] hover:bg-white hover:shadow-[0_10px_40px_rgba(201,162,39,0.4)] transition duration-300 ease-in-out transform hover:-translate-y-1 will-change-transform"
        >
          Agendar Horário
        </a>
      </div>
    </section>
  );
}
