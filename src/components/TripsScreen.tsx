import React from 'react';
import { motion } from 'motion/react';
import { WalkingPerson } from './WalkingPerson';

interface TripsScreenProps {
  theme: 'light' | 'dark';
}

export default function TripsScreen({ theme }: TripsScreenProps) {
  const isDarkMode = theme === 'dark';

  return (
    <div
      className={`absolute inset-0 flex flex-col justify-between overflow-hidden p-6 pb-24 transition-colors duration-500 ${
        isDarkMode ? 'bg-[#070b13]' : 'bg-[#8B5CF6]'
      }`}
    >
      {/* Fondo: Nubes moviéndose infinitamente a la izquierda */}
      <div className="absolute inset-0 pointer-events-none z-0 mt-32">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 flex gap-40 text-white/20 whitespace-nowrap"
        >
          {[...Array(5)].map((_, i) => (
            <svg key={`cloud-${i}`} viewBox="0 0 120 80" fill="currentColor" className="w-24 h-12 ml-48">
              <path d="M25 60 C15 60, 8 50, 15 40 C15 25, 45 20, 55 30 C65 18, 95 22, 90 42 C102 42, 108 52, 98 60 Z" />
            </svg>
          ))}
        </motion.div>
      </div>

      {/* Escenario de caminata central */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        
        {/* Sidewalk curb line */}
        <div className={`absolute left-0 right-0 h-[2px] z-0 ${isDarkMode ? 'bg-white/20' : 'bg-white/40'}`} style={{ top: 'calc(50% + 52px)' }} />

        {/* Street Road Block */}
        <div 
          className={`absolute left-0 right-0 bottom-0 z-0 ${isDarkMode ? 'bg-[#070b13]' : 'bg-[#8B5CF6]'}`} 
          style={{ top: 'calc(50% + 52px)' }} 
        >
          {/* Pavement details/Dashed center line */}
          <div className="absolute top-6 left-0 right-0 h-[3px] flex gap-8 justify-around px-8 opacity-25">
            {[...Array(16)].map((_, i) => (
              <div key={`line-${i}`} className="w-12 h-full bg-white rounded-full" />
            ))}
          </div>
        </div>

        {/* Cinta mecánica de aeropuerto infinita */}
        <div className="absolute top-1/2 translate-y-[52px] w-[120vw] h-[12px] bg-black/10 dark:bg-white/5 border-y border-white/20 flex overflow-hidden shadow-lg z-10">
          {/* Animación de líneas de la cinta */}
          <motion.div
            animate={{ x: [0, -40] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
            className="flex h-full items-center min-w-[200vw]"
          >
            {[...Array(120)].map((_, i) => (
              <div key={`belt-${i}`} className="h-[80%] w-[3px] bg-white/30 mx-[8px] rounded-full shrink-0" />
            ))}
          </motion.div>
          {/* Brillo verde/esmeralda opcional */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-emerald-400/30" />
        </div>
        
        {/* Siluetas de árboles u objetos del fondo moviéndose en dirección contraria */}
        <motion.div 
          animate={{ x: [400, -1200] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/2 translate-y-[48px] flex items-end opacity-60 z-0"
        >
          <div className="flex items-end gap-[600px]">
            {/* Árbol minimalista */}
            <div className="w-16 h-28 mb-0 flex flex-col items-center mt-auto relative">
              <div className="w-16 h-12 rounded-full bg-white/5 border border-white/20 mb-[-12px]" />
              <div className="w-16 h-12 rounded-full bg-white/5 border border-white/20 absolute mt-4 -ml-6" />
              <div className="w-16 h-12 rounded-full bg-white/5 border border-white/20 absolute mt-6 ml-8" />
              <div className="w-2 h-16 bg-white/20 mt-4" />
            </div>
          </div>
        </motion.div>

        {/* La Familia Caminando unida sobre la cinta */}
        <div className="absolute flex items-end gap-0 bottom-1/2 translate-y-[52px] scale-[1.75] origin-bottom translate-x-2 z-20">
          <WalkingPerson type="man" isDarkMode={isDarkMode} animDelay={0} size={70} className="z-40 drop-shadow-xl" />
          <WalkingPerson type="woman" isDarkMode={isDarkMode} animDelay={0.2} size={70} className="-ml-3 z-30 drop-shadow-xl" />
          <WalkingPerson type="boy" isDarkMode={isDarkMode} animDelay={0.4} size={70} className="-ml-5 z-20 drop-shadow-xl" />
          <WalkingPerson type="girl" isDarkMode={isDarkMode} animDelay={0.6} size={70} className="-ml-5 z-10 drop-shadow-xl" />
        </div>
        
        {/* Logotipo en el cielo con fallback automático si no existe logo_white_transparent.png */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 text-white text-center select-none z-30 min-w-[200px]">
          <img
            src="/logo_white_transparent.png"
            alt="Logo"
            className="h-14 w-auto object-contain mx-auto drop-shadow-md"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = document.getElementById('text-logo-fallback');
              if (fallback) fallback.classList.remove('hidden');
            }}
          />
          <div id="text-logo-fallback" className="hidden">
            <div className="font-sans font-black text-2xl tracking-widest uppercase opacity-90 drop-shadow-sm">
              My Trips
            </div>
            <div className="text-[10px] font-mono tracking-wider opacity-65 uppercase mt-1">
              Family Adventure
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
