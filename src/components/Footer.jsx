import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] py-16 border-t border-white/5 text-center px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary -rotate-45">
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <line x1="20" y1="4" x2="8.12" y2="15.88" />
              <line x1="14.47" y1="14.48" x2="20" y2="20" />
              <line x1="8.12" y1="8.12" x2="12" y2="12" />
            </svg>
          </div>
          <span className="text-white font-heading tracking-widest text-2xl uppercase">Império</span>
        </div>
        <p className="text-gray-500 text-sm font-light tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Barbearia Império. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
