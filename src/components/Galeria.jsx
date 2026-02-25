import React from 'react';

const images = [
  "https://picsum.photos/seed/barbercut/800/1000",
  "https://picsum.photos/seed/beardtrim/800/1000",
  "https://picsum.photos/seed/barberinterior/800/1000",
  "https://picsum.photos/seed/barbertools/800/1000"
];

export default function Galeria() {
  return (
    <section className="py-32 px-8 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-20 flex flex-col items-end text-right">
          <h2 className="text-5xl md:text-7xl text-primary mb-6 uppercase tracking-widest font-heading">Galeria</h2>
          <div className="w-24 h-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {images.map((src, index) => (
            <div 
              key={index} 
              className={`relative aspect-[3/4] rounded-[20px] overflow-hidden shadow-2xl border border-white/5 transition-all duration-500 ease-in-out hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-primary/30 hover:-translate-y-2 ${index % 2 !== 0 ? 'lg:translate-y-12' : ''}`}
            >
              <img 
                src={src} 
                alt={`Galeria ${index + 1}`} 
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700 transform hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
