import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Galeria from './components/Galeria';
import Depoimentos from './components/Depoimentos';
import CTA from './components/CTA';
import Contato from './components/Contato';
import Footer from './components/Footer';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 pt-6 px-4 md:px-8 pointer-events-none">
      <div className="max-w-6xl mx-auto flex justify-between items-center bg-[#0a0a0a]/50 backdrop-blur-2xl border border-white/10 border-t-white/20 rounded-full py-3 px-4 md:px-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] pointer-events-auto relative">
        
        {/* Glass Reflection Overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

        {/* Logo */}
        <div className="text-primary font-heading tracking-widest text-3xl ml-2 md:ml-4 relative z-10 drop-shadow-[0_0_15px_rgba(201,162,39,0.4)]">
          BI
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex items-center gap-3 lg:gap-5 relative z-10">
          {['Sobre', 'Serviços', 'Método', 'Depoimentos'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
              className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-medium tracking-wide transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:bg-white/10 hover:text-white hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-105"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a 
          href="https://wa.me/5567991788626" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative z-10 px-7 py-2.5 rounded-full bg-gradient-to-r from-[#C9A227] via-[#E5C045] to-[#C9A227] bg-[length:200%_auto] text-[#0a0a0a] font-bold text-sm uppercase tracking-widest shadow-[0_0_15px_rgba(201,162,39,0.3)] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(201,162,39,0.6)] hover:bg-right"
        >
          Solicitar Orçamento
        </a>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-primary selection:text-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Galeria />
      <Depoimentos />
      <CTA />
      <Contato />
      <Footer />
    </div>
  );
}
