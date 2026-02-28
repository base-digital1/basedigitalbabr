import React from 'react';
import { motion } from 'motion/react';

const galleryImages = [
  "/galeria-1.png",
  "/galeria-2.png",
  "/galeria-3.png",
  "/galeria-4.png"
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-32 px-8 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-end text-right"
        >
          <h2 className="text-5xl md:text-7xl text-primary mb-6 uppercase tracking-widest font-heading">Galeria</h2>
          <div className="w-24 h-1 bg-primary rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {galleryImages.map((src, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative aspect-[3/4] rounded-[20px] overflow-hidden shadow-2xl border border-white/5 transition duration-500 ease-in-out hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-primary/30 hover:-translate-y-2 will-change-transform bg-[#1a1a1a] ${index % 2 !== 0 ? 'lg:translate-y-12' : ''}`}
            >
              <img 
                src={src} 
                alt={`Corte de Cabelo ${index + 1}`} 
                className="absolute inset-0 w-full h-full object-cover object-[center_top] md:object-center transition duration-700 transform hover:scale-110 transform-gpu will-change-transform"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
