import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] py-16 border-t border-white/5 text-center px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-primary font-heading text-4xl tracking-widest uppercase">
          BI
        </p>
        <p className="text-gray-500 text-sm font-light tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Barbearia Império. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
