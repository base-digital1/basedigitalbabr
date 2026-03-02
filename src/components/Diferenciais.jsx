import React from 'react';
import { motion } from 'motion/react';

const diferenciais = [
  {
    title: "Atendimento Premium",
    description: "Experiência completa com toalha quente, produtos de alta performance e uma seleção de bebidas cortesia para você relaxar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  },
  {
    title: "Visagismo e Técnica",
    description: "Nossos profissionais dominam o visagismo, indicando o corte e o estilo de barba ideais para valorizar o formato do seu rosto.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    )
  },
  {
    title: "Pontualidade Britânica",
    description: "Respeitamos o seu tempo. Nosso sistema de agendamento garante que você seja atendido exatamente no horário marcado, sem esperas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  },
  {
    title: "Ambiente Exclusivo",
    description: "Um espaço climatizado, com som ambiente de bom gosto e poltronas ergonômicas de alto padrão para o seu máximo conforto.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <path d="M6 3h12l4 6-10 13L2 9Z" />
        <path d="M11 3 8 9l4 13" />
        <path d="M13 3l3 6-4 13" />
      </svg>
    )
  }
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 md:py-32 px-4 md:px-8 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-12 md:mb-20 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl text-primary mb-4 md:mb-6 uppercase tracking-widest font-heading">O Padrão Império</h2>
          <div className="w-20 md:w-24 h-1 bg-primary rounded-full"></div>
          <p className="mt-6 md:mt-8 text-gray-400 text-base md:text-lg font-light tracking-wide max-w-2xl">
            Não entregamos apenas cortes de cabelo. Entregamos uma experiência de cuidado masculino pensada em cada detalhe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {diferenciais.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#0a0a0a] p-8 md:p-10 rounded-[20px] border border-white/5 hover:border-primary/30 transition duration-500 group hover:-translate-y-2 will-change-transform shadow-lg hover:shadow-[0_15px_40px_rgba(201,162,39,0.1)]"
            >
              <div className="w-16 h-16 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-heading text-white mb-4 tracking-widest uppercase">{item.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed font-light tracking-wide">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
