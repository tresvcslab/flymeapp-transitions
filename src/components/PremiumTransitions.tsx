import React from 'react';
import { motion } from 'motion/react';
import { Plane, Car, MapPin, ShieldCheck, Ticket } from 'lucide-react';
import { Logo } from './Logo';
import { RunningPerson } from './RunningPerson';
import { WaitingWoman } from './WaitingWoman';
import { WalkingPerson } from './WalkingPerson';

interface PremiumTransitionsProps {
  isAnimatingFlight: boolean;
  isAnimatingHotel: boolean;
  isAnimatingCar: boolean;
  isAnimatingTrips?: boolean;
  hotelAnimState: 'waiting' | 'greeting' | 'running';
  isDarkMode: boolean;
}

export const PremiumTransitions: React.FC<PremiumTransitionsProps> = ({
  isAnimatingFlight,
  isAnimatingHotel,
  isAnimatingCar,
  isAnimatingTrips = false,
  hotelAnimState,
  isDarkMode,
}) => {
  // Premium Light Theme uses a beautiful lilac/morado light background (#F6F4F9)
  const premiumBg = 'bg-[#F6F4F9]';
  const premiumText = 'text-[#3A1B58]';
  const premiumTextMuted = 'text-[#3A1B58]/60';
  const premiumStroke = '#3A1B58';
  const premiumStrokeLight = 'rgba(58, 27, 88, 0.15)';
  const premiumStrokeMedium = 'rgba(58, 27, 88, 0.35)';

  if (isAnimatingFlight) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`fixed inset-0 z-[100] flex flex-col overflow-hidden transition-colors duration-500 ${premiumBg}`}
      >
        {/* Logo in the same position as App.tsx */}
        <Logo className="absolute top-16 left-1/2 -translate-x-1/2 z-30 text-black" size="md" isPremium={true} />

        <div className="flex-1 relative flex items-center justify-center">

          {/* Celestial background stardust (Premium soft dark slate particles) */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`fstar-${i}`}
                className="absolute w-[1.5px] h-[1.5px] rounded-full bg-slate-400"
                style={{
                  left: `${(i * 17 + 11) % 95}%`,
                  top: `${(i * 13 + 5) % 90}%`,
                }}
                animate={{
                  opacity: [0.15, 0.75, 0.15],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 1.5 + (i % 3) * 0.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Aerodynamic Wind Currents & Scenic Flight Arc */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <svg viewBox="0 0 500 300" className="w-[500px] h-[300px] text-[#3A1B58]/15">
              {/* Main Flight Path Arc */}
              <motion.path
                d="M 100 230 Q 250 130 400 70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 0.5, 0.5, 0] }}
                transition={{ duration: 4.0, ease: [0.45, 0, 0.55, 1] }}
              />

              {/* Auxiliary air current lines */}
              <motion.path
                d="M 60 250 Q 220 180 440 110"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                opacity="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4.0, delay: 0.2, ease: "easeInOut" }}
              />

              <motion.path
                d="M 120 210 Q 270 90 380 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                opacity="0.15"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4.0, delay: 0.1, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {/* Moving Atmospheric High-Altitude clouds */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-15">
            <motion.div
              initial={{ x: -100, y: 180 }}
              animate={{ x: 500 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-20 h-10 text-slate-300"
            >
              <svg viewBox="0 0 120 80" fill="currentColor">
                <path d="M25 60 C15 60, 8 50, 15 40 C15 25, 45 20, 55 30 C65 18, 95 22, 90 42 C102 42, 108 52, 98 60 Z" />
              </svg>
            </motion.div>
          </div>

          {/* Global Miniature Travel Skylines Silhouette (The monument colors are maintained) */}
          <div className="absolute inset-x-0 h-16 pointer-events-none z-0 flex items-end justify-between px-6 opacity-95" style={{ bottom: 'calc(56px + 15%)' }}>
            {/* Horizontal ground/floor line (piso) */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] z-10 bg-[#3A1B58]/15" />
            {/* SVG Gradients & Glow Filters Definitions */}
            <svg className="absolute w-0 h-0" width="0" height="0">
              <defs>
                {/* Great Wall Jade & Beacon Glow */}
                <linearGradient id="greatWallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34D399" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <filter id="neonJade" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Pyramids Golden Sand */}
                <linearGradient id="pyramidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FBBF24" />
                  <stop offset="100%" stopColor="#B45309" />
                </linearGradient>
                <filter id="neonGold" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Colosseum Sunset Terracotta */}
                <linearGradient id="colosseumGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FB7185" />
                  <stop offset="100%" stopColor="#9F1239" />
                </linearGradient>
                <filter id="neonRose" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Eiffel Tower Golden Sparks */}
                <linearGradient id="eiffelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FEF08A" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
                <filter id="neonAmber" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Taj Mahal Moonlit Cyan/Orchid */}
                <linearGradient id="tajGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#67E8F9" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
                <filter id="neonCyan" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
            </svg>

            {/* 1. Great Wall of China (Left side) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.3 }}
              className="w-16 h-12"
            >
              <svg viewBox="0 0 100 60" fill="none" className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
                <path d="M 5 45 C 25 40, 45 28, 65 35 C 80 40, 90 32, 98 38 L 98 60 L 5 60 Z" fill="url(#greatWallGrad)" fillOpacity="0.2" />
                <path d="M 5 45 Q 25 40 45 28 Q 65 35 85 36 Q 95 31 98 38" stroke="url(#greatWallGrad)" strokeWidth="1.8" filter="url(#neonJade)" />
                {/* Watchtower */}
                <rect x="36" y="16" width="14" height="15" fill="url(#greatWallGrad)" fillOpacity="0.3" stroke="url(#greatWallGrad)" strokeWidth="1.5" />
                <path d="M 34 16 H 52 M 38 12 H 48 M 41 12 V 16 M 45 12 V 16" stroke="url(#greatWallGrad)" strokeWidth="1.3" />
                <rect x="41" y="22" width="4" height="9" rx="1" fill="transparent" stroke="#34D399" strokeWidth="1.0" />
                {/* Glowing beacon light */}
                <circle cx="43" cy="10" r="2" fill="#FBBF24" className="animate-pulse" filter="url(#neonGold)" />
                <circle cx="43" cy="10" r="4" fill="#FBBF24" opacity="0.4" className="animate-ping" />
              </svg>
            </motion.div>

            {/* 2. Pyramids of Egypt */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.5 }}
              className="w-14 h-12 -ml-2"
            >
              <svg viewBox="0 0 100 60" fill="none" className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
                {/* Sun rising between pyramids */}
                <circle cx="50" cy="35" r="7" fill="#EF4444" opacity="0.45" />
                <circle cx="50" cy="35" r="12" fill="#FBBF24" opacity="0.2" filter="url(#neonGold)" />
                
                <polygon points="5,55 45,15 85,55" fill="url(#pyramidGrad)" fillOpacity="0.2" stroke="url(#pyramidGrad)" strokeWidth="1.5" />
                <polygon points="45,15 85,55 65,55" fill="url(#pyramidGrad)" fillOpacity="0.25" stroke="url(#pyramidGrad)" strokeWidth="1.5" />
                <line x1="45" y1="15" x2="65" y2="55" stroke="url(#pyramidGrad)" strokeWidth="1.8" filter="url(#neonGold)" />
                
                <polygon points="60,55 80,30 100,55" fill="url(#pyramidGrad)" fillOpacity="0.15" stroke="url(#pyramidGrad)" strokeWidth="1.2" />
                <polygon points="80,30 100,55 90,55" fill="url(#pyramidGrad)" fillOpacity="0.2" stroke="url(#pyramidGrad)" strokeWidth="1.2" />
                <line x1="80" y1="30" x2="90" y2="55" stroke="url(#pyramidGrad)" strokeWidth="1.5" />
              </svg>
            </motion.div>

            {/* 3. Colosseum (Roman) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.7 }}
              className="w-16 h-12"
            >
              <svg viewBox="0 0 100 60" fill="none" className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
                <path d="M 12 55 C 12 25, 42 25, 88 25 L 88 55" stroke="url(#colosseumGrad)" strokeWidth="2.0" fill="url(#colosseumGrad)" fillOpacity="0.22" />
                {/* Glowing interior portals */}
                <path d="M 22 55 V 35 M 34 55 V 35 M 46 55 V 35 M 58 55 V 35 M 70 55 V 35 M 82 55 V 35" stroke="#FDA4AF" strokeDasharray="3 3" strokeWidth="1.8" opacity="0.7" />
                <path d="M 18 55 V 44 A 4 4 0 0 1 26 44 V 55 M 30 55 V 44 A 4 4 0 0 1 38 44 V 55 M 42 55 V 44 A 4 4 0 0 1 50 44 V 55 M 54 55 V 44 A 4 4 0 0 1 62 44 V 55 M 66 55 V 44 A 4 4 0 0 1 74 44 V 55 M 78 55 V 44 A 4 4 0 0 1 86 44 V 55" stroke="url(#colosseumGrad)" strokeWidth="1.8" filter="url(#neonRose)" />
                <path d="M 88 25 H 70 V 28 H 55 V 30 H 42 V 33" stroke="url(#colosseumGrad)" strokeWidth="2.0" />
                {/* Inner glowing spots */}
                <circle cx="22" cy="50" r="1.5" fill="#F59E0B" opacity="0.6" />
                <circle cx="34" cy="50" r="1.5" fill="#F59E0B" opacity="0.6" />
                <circle cx="46" cy="50" r="1.5" fill="#F59E0B" opacity="0.6" />
                <circle cx="58" cy="50" r="1.5" fill="#F59E0B" opacity="0.6" />
                <circle cx="70" cy="50" r="1.5" fill="#F59E0B" opacity="0.6" />
                <circle cx="82" cy="50" r="1.5" fill="#F59E0B" opacity="0.6" />
              </svg>
            </motion.div>

            {/* 4. Eiffel Tower */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.9 }}
              className="w-12 h-16"
            >
              <svg viewBox="0 0 60 100" fill="none" className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
                {/* Rotating beacon sweep effect */}
                <motion.polygon 
                  points="30,5 -5,60 65,60" 
                  fill="url(#eiffelGrad)" 
                  opacity="0.12"
                  style={{ transformOrigin: "30px 5px", mixBlendMode: 'multiply' }}
                  animate={{ rotate: [-20, 20, -20] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <line x1="30" y1="5" x2="30" y2="25" stroke="url(#eiffelGrad)" strokeWidth="2.0" />
                <path d="M 12 95 Q 30 70 48 95" stroke="url(#eiffelGrad)" strokeWidth="2.5" />
                <path d="M 16 95 L 26 55 H 34 L 44 95" stroke="url(#eiffelGrad)" strokeWidth="2.2" filter="url(#neonAmber)" />
                <path d="M 26 55 L 28 25 H 32 L 34 55" stroke="url(#eiffelGrad)" strokeWidth="1.8" />
                <line x1="18" y1="75" x2="42" y2="75" stroke="url(#eiffelGrad)" strokeWidth="2.0" />
                <line x1="25" y1="42" x2="35" y2="42" stroke="url(#eiffelGrad)" strokeWidth="1.5" />

                {/* Holiday glitter bulbs */}
                <circle cx="30" cy="5" r="1.5" fill="#3A1B58" className="animate-ping" />
                <circle cx="30" cy="18" r="1" fill="#FEF08A" />
                <circle cx="30" cy="35" r="1" fill="#FEF08A" />
                <circle cx="27" cy="48" r="1" fill="#FEF08A" />
                <circle cx="33" cy="48" r="1" fill="#FEF08A" />
                <circle cx="21" cy="65" r="1" fill="#FEF08A" />
                <circle cx="39" cy="65" r="1" fill="#FEF08A" />
                <circle cx="17" cy="85" r="1" fill="#FEF08A" />
                <circle cx="43" cy="85" r="1" fill="#FEF08A" />
              </svg>
            </motion.div>

            {/* 5. Taj Mahal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.1 }}
              className="w-16 h-12"
            >
              <svg viewBox="0 0 100 70" fill="none" className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
                <line x1="5" y1="62" x2="95" y2="62" stroke="url(#tajGrad)" strokeWidth="2.5" />
                <path d="M 22 62 V 40 Q 22 38 24 38 H 76 Q 78 38 78 40 V 62" fill="url(#tajGrad)" fillOpacity="0.2" stroke="url(#tajGrad)" strokeWidth="1.5" />
                <path d="M 40 38 Q 38 18 50 14 Q 62 18 60 38 Z" fill="url(#tajGrad)" fillOpacity="0.25" stroke="url(#tajGrad)" strokeWidth="1.8" filter="url(#neonCyan)" />
                <line x1="50" y1="14" x2="50" y2="6" stroke="url(#tajGrad)" strokeWidth="1.8" />
                <path d="M 28 38 Q 27 28 32 26 Q 37 28 36 38 Z" stroke="url(#tajGrad)" strokeWidth="1.8" />
                <path d="M 64 38 Q 63 28 68 26 Q 73 28 72 38 Z" stroke="url(#tajGrad)" strokeWidth="1.8" />
                <path d="M 12 62 V 18 H 15 V 62 M 88 62 V 18 H 85 V 62" stroke="url(#tajGrad)" strokeWidth="1.8" />
                <path d="M 10 18 H 17 M 83 18 H 90" stroke="url(#tajGrad)" strokeWidth="2.0" />
                
                {/* Starry sparkles */}
                <circle cx="13" cy="11" r="0.8" fill="#3A1B58" className="animate-pulse" />
                <circle cx="87" cy="11" r="0.8" fill="#3A1B58" className="animate-pulse" />
                <circle cx="50" cy="3" r="1" fill="#3A1B58" />
              </svg>
            </motion.div>
          </div>

          {/* Graceful Takeoff/Landing Plane Animation (Deep Morado/Slate for Light Premium) */}
          <motion.div
            initial={{ x: -280, y: 135, scale: 0.7, rotate: 0, rotateY: 0, rotateX: 0 }}
            animate={{ 
              x: [-280, -30, 290],
              y: [135, 110, -180],
              scale: [0.7, 1.1, 0.4],
              rotate: [0, -15, -25],
              rotateY: [0, 8, -5],
              rotateX: [0, 6, -3],
            }}
            transition={{ 
              duration: 4.0,
              times: [0, 0.45, 1],
              ease: "easeInOut",
            }}
            className="text-black relative z-10 flex items-center justify-center w-24 h-24"
          >
            {/* Wingtip streams */}
            <div className="absolute pointer-events-none right-12 top-11 flex flex-col gap-9 z-0">
              <motion.div 
                animate={{ 
                  width: [30, 100, 30],
                  opacity: [0.15, 0.7, 0.15],
                  x: [0, -15, 0]
                }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                className="h-[1.5px] w-20 bg-gradient-to-l to-transparent blur-xs origin-right from-black/60"
              />
              <motion.div 
                animate={{ 
                  width: [30, 100, 30],
                  opacity: [0.15, 0.7, 0.15],
                  x: [0, -15, 0]
                }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "linear", delay: 0.3 }}
                className="h-[1.5px] w-20 bg-gradient-to-l to-transparent blur-xs origin-right from-black/60"
              />
            </div>

            {/* Micro navigation lights */}
            <div className="absolute top-[38px] left-[26px] z-20">
              <motion.div 
                animate={{ opacity: [1, 0, 1], scale: [1, 1.5, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="w-1 h-1 rounded-full bg-red-500 shadow-[0_0_6px_#ef4444]"
              />
            </div>
            <div className="absolute top-[68px] left-[52px] z-20">
              <motion.div 
                animate={{ opacity: [1, 0, 1], scale: [1, 1.5, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, delay: 0.25 }}
                className="w-1 h-1 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e]"
              />
            </div>

            <Plane size={80} strokeWidth={2.5} className="text-black drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] relative z-10" />
          </motion.div>

          {/* Ambient Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`p-${i}`}
              initial={{ 
                x: Math.random() * 400 - 200, 
                y: Math.random() * 600 - 300,
                opacity: 0 
              }}
              animate={{ 
                x: (Math.random() * 400 - 200) - 100,
                opacity: [0, 0.3, 0] 
              }}
              transition={{ 
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              className="absolute w-1 h-1 rounded-full bg-[#3A1B58]/40"
            />
          ))}
        </div>
      </motion.div>
    );
  }

  if (isAnimatingCar) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`fixed inset-0 z-[100] flex flex-col overflow-hidden transition-colors duration-500 ${premiumBg}`}
      >
        <Logo className="absolute top-16 left-1/2 -translate-x-1/2 z-30 text-black" size="md" isPremium={true} />

        <div className="flex-1 relative flex items-center justify-center">


          {/* Floating Clouds */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <motion.div
              initial={{ x: -160, y: 10, opacity: 0 }}
              animate={{ 
                x: [-160, 480],
                opacity: [0, 0.25, 0.25, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute text-slate-300 w-24 h-12"
            >
              <svg viewBox="0 0 120 80" fill="currentColor">
                <path d="M25 60 C15 60, 8 50, 15 40 C15 25, 45 20, 55 30 C65 18, 95 22, 90 42 C102 42, 108 52, 98 60 Z" />
              </svg>
            </motion.div>

            <motion.div
              initial={{ x: 420, y: 35, opacity: 0 }}
              animate={{ 
                x: [420, -120],
                opacity: [0, 0.18, 0.18, 0]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute text-slate-300 w-16 h-8"
            >
              <svg viewBox="0 0 120 80" fill="currentColor">
                <path d="M25 60 C15 60, 8 50, 15 40 C15 25, 45 20, 55 30 C65 18, 95 22, 90 42 C102 42, 108 52, 98 60 Z" />
              </svg>
            </motion.div>
          </div>

          {/* Starlight Headliner (Premium style) */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-72 h-32 pointer-events-none z-10 overflow-hidden">
            {[...Array(72)].map((_, i) => {
              const left = `${5 + (i * 4.7 + (i % 7) * 9.3) % 92}%`;
              const top = `${5 + (i * 5.3 + (i % 5) * 11.2) % 90}%`;
              const size = (i % 4 === 0) ? 1.6 : (i % 3 === 0) ? 0.7 : (i % 2 === 0) ? 1.1 : 2.2;
              
              return (
                <div key={`star-${i}`} className="absolute" style={{ left, top }}>
                  <motion.div
                    className="bg-slate-400 rounded-full flex items-center justify-center shadow-[0_0_4px_rgba(0,0,0,0.2)]"
                    style={{ width: `${size}px`, height: `${size}px` }}
                    animate={{ opacity: [0.1, 0.9, 0.1], scale: [0.85, 1.15, 0.85] }}
                    transition={{ duration: 1.8 + (i % 5) * 0.7, repeat: Infinity, delay: i * 0.05, ease: "easeInOut" }}
                  />
                </div>
              );
            })}
          </div>

          {/* Cozy Neighborhood storefront Backdrop (Premium High-Contrast Light Mode) */}
          <div className="absolute inset-x-0 h-32 pointer-events-none z-0 overflow-hidden flex justify-center opacity-85" style={{ bottom: 'calc(16px + 15%)' }}>
            <svg 
              viewBox="0 0 800 200" 
              className="w-full max-w-4xl h-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
            >
              <defs>
                <linearGradient id="lightConeGradPremium" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Road deck line */}
              <line 
                x1="0" 
                y1="160" 
                x2="800" 
                y2="160" 
                stroke="#525252" 
                strokeWidth="2.5" 
                strokeOpacity="0.25" 
              />

              {/* Decorative Trees - Left Side */}
              <g id="left-trees">
                {/* Trunk 1 */}
                <line x1="50" y1="120" x2="50" y2="160" stroke="#737373" strokeWidth="2.5" strokeOpacity="0.4" />
                {/* Leafy canopy 1 */}
                <circle cx="50" cy="115" r="16" fill="rgba(115, 115, 115, 0.06)" stroke="#737373" strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="38" cy="105" r="13" fill="rgba(115, 115, 115, 0.06)" stroke="#737373" strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="62" cy="105" r="13" fill="rgba(115, 115, 115, 0.06)" stroke="#737373" strokeWidth="1" strokeOpacity="0.4" />

                {/* Trunk 2 */}
                <line x1="85" y1="130" x2="85" y2="160" stroke="#737373" strokeWidth="2" strokeOpacity="0.4" />
                {/* Leafy canopy 2 */}
                <circle cx="85" cy="125" r="12" fill="rgba(115, 115, 115, 0.05)" stroke="#737373" strokeWidth="1" strokeOpacity="0.35" />
                <circle cx="76" cy="118" r="10" fill="rgba(115, 115, 115, 0.05)" stroke="#737373" strokeWidth="1" strokeOpacity="0.35" />
                <circle cx="94" cy="118" r="10" fill="rgba(115, 115, 115, 0.05)" stroke="#737373" strokeWidth="1" strokeOpacity="0.35" />
              </g>

              {/* STOREFRONT A: Duplex Flats (x=110 to x=200) */}
              <g id="storefront-duplex" opacity="0.95">
                {/* Main Wall */}
                <rect 
                  x="110" 
                  y="50" 
                  width="90" 
                  height="110" 
                  rx="2" 
                  fill="rgba(64, 64, 64, 0.04)" 
                  stroke="#404040" 
                  strokeWidth="1.2" 
                  strokeOpacity="0.4"
                />
                {/* Flat Roof Trim */}
                <rect 
                  x="106" 
                  y="47" 
                  width="98" 
                  height="4" 
                  rx="1" 
                  fill="rgba(64, 64, 64, 0.15)" 
                  stroke="#404040" 
                  strokeWidth="1" 
                  strokeOpacity="0.5"
                />

                {/* Ground floor door with classic arch */}
                <path 
                  d="M 140 160 A 15 15 0 0 1 170 160 Z" 
                  fill="rgba(64, 64, 64, 0.1)" 
                  stroke="#404040" 
                  strokeWidth="1.2" 
                  strokeOpacity="0.5"
                />
                <rect 
                  x="148" 
                  y="145" 
                  width="14" 
                  height="15" 
                  fill="#FBBF24" 
                  fillOpacity="0.95" 
                />

                {/* Cozy Dual Windows - Row 1 */}
                <rect 
                  x="125" 
                  y="60" 
                  width="18" 
                  height="26" 
                  rx="1" 
                  fill="#FFFFFF" 
                  stroke="#404040"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
                <line x1="125" y1="73" x2="143" y2="73" stroke="#404040" strokeWidth="1" strokeOpacity="0.3" />
                <line x1="134" y1="60" x2="134" y2="86" stroke="#404040" strokeWidth="1" strokeOpacity="0.3" />

                <rect 
                  x="167" 
                  y="60" 
                  width="18" 
                  height="26" 
                  rx="1" 
                  fill="#FEF08A" 
                  fillOpacity="0.85" 
                  stroke="#404040"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
                <line x1="167" y1="73" x2="185" y2="73" stroke="#404040" strokeWidth="1" strokeOpacity="0.3" />
                <line x1="176" y1="60" x2="176" y2="86" stroke="#404040" strokeWidth="1" strokeOpacity="0.3" />

                {/* Balcony Rail at Row 2 */}
                <rect 
                  x="120" 
                  y="100" 
                  width="70" 
                  height="20" 
                  rx="1" 
                  fill="transparent" 
                  stroke="#404040" 
                  strokeWidth="1.2" 
                  strokeOpacity="0.4"
                />
                {[...Array(6)].map((_, idx) => (
                  <line 
                    key={`b-line-${idx}`} 
                    x1={125 + idx * 12} 
                    y1="100" 
                    x2={125 + idx * 12} 
                    y2="120" 
                    stroke="#404040" 
                    strokeWidth="1" 
                    strokeOpacity="0.4"
                  />
                ))}
              </g>

              {/* COZY STREETLIGHT 1 (x=215) */}
              <g id="streetlight-1">
                {/* Mast */}
                <rect x="214" y="65" width="2.5" height="95" fill="#262626" fillOpacity="0.5" />
                {/* Curved top ring */}
                <path d="M 214 65 Q 206 58 204 68" fill="none" stroke="#262626" strokeWidth="2" strokeOpacity="0.6" />
                {/* Lantern fixture */}
                <polygon points="201,68 207,68 208,74 200,74" fill="#262626" fillOpacity="0.7" />
                {/* Glow cone */}
                <polygon 
                  points="204,74 150,160 258,160" 
                  fill="url(#lightConeGradPremium)" 
                />
                {/* Light bulb */}
                <circle cx="204" cy="74" r="2" fill="#FFFFFF" />
              </g>

              {/* STOREFRONT B: Urban Skylight Café (x=225 to x=355) */}
              <g id="storefront-cafe" opacity="0.95">
                {/* Room Skylight Base */}
                <polygon 
                  points="225,75 285,45 345,75 345,160 225,160" 
                  fill="rgba(64, 64, 64, 0.02)" 
                  stroke="#404040" 
                  strokeWidth="1.2" 
                  strokeOpacity="0.4"
                />
                {/* Slanted Glass Roof Panels */}
                <line x1="225" y1="75" x2="285" y2="45" stroke="#404040" strokeWidth="1.8" strokeOpacity="0.5" />
                <line x1="285" y1="45" x2="345" y2="75" stroke="#404040" strokeWidth="1.8" strokeOpacity="0.5" />
                <line x1="255" y1="60" x2="255" y2="160" stroke="#404040" strokeWidth="1" strokeOpacity="0.25" />
                <line x1="285" y1="45" x2="285" y2="160" stroke="#404040" strokeWidth="1.2" strokeOpacity="0.3" />
                <line x1="315" y1="60" x2="315" y2="160" stroke="#404040" strokeWidth="1" strokeOpacity="0.25" />

                {/* SIGNBOARD "CAFÉ" */}
                <rect 
                  x="255" 
                  y="78" 
                  width="60" 
                  height="16" 
                  rx="2" 
                  fill="#FFFFFF" 
                  stroke="#404040" 
                  strokeWidth="1.2" 
                  strokeOpacity="0.6"
                />
                <text 
                  x="285" 
                  y="89" 
                  fill="#404040" 
                  fontSize="7.5" 
                  fontWeight="bold" 
                  textAnchor="middle" 
                  letterSpacing="1.2"
                >
                  CAFÉ
                </text>

                {/* Cozy Striped Awning */}
                <polygon 
                  points="235,97 335,97 340,111 230,111" 
                  fill="rgba(64, 64, 64, 0.1)" 
                  stroke="#404040" 
                  strokeWidth="0.8" 
                  strokeOpacity="0.5"
                />
                {/* Stripes */}
                {[...Array(9)].map((_, idx) => (
                  <polygon 
                    key={`strip-${idx}`} 
                    points={`${235 + idx * 11},97 ${241 + idx * 11},97 ${243 + idx * 11},111 ${237 + idx * 11},111`} 
                    fill={idx % 2 === 0 ? "#FFFFFF" : "rgba(64, 64, 64, 0.3)"} 
                  />
                ))}

                {/* Main Showcase window */}
                <rect 
                  x="235" 
                  y="117" 
                  width="100" 
                  height="34" 
                  rx="1" 
                  fill="#FFFFFF" 
                  stroke="#404040" 
                  strokeWidth="1" 
                  strokeOpacity="0.4"
                />
                
                {/* Miniature Coffee Cups shadow silhouette in displays */}
                <path d="M 245 151 L 249 151 L 249 146 L 245 146 Z" fill="#404040" fillOpacity="0.7" />
                <path d="M 260 151 L 265 151 L 266 142 L 259 142 Z" fill="#404040" fillOpacity="0.6" />
                <circle cx="262" cy="139" r="2.2" fill="#404040" fillOpacity="0.4" />
                <path d="M 315 151 L 320 151 L 320 144 L 315 144 Z" fill="#404040" fillOpacity="0.7" />
              </g>

              {/* STOREFRONT C: Townhome A with Gable Roof (x=370 to x=470) */}
              <g id="storefront-townhomea" opacity="0.95">
                {/* Main rectangular block */}
                <rect 
                  x="370" 
                  y="65" 
                  width="95" 
                  height="95" 
                  rx="1" 
                  fill="rgba(64, 64, 64, 0.03)" 
                  stroke="#404040" 
                  strokeWidth="1.2" 
                  strokeOpacity="0.4"
                />
                {/* Triangular Gable Roof */}
                <polygon 
                  points="364,65 417.5,22 471,65" 
                  fill="rgba(64, 64, 64, 0.12)" 
                  stroke="#404040" 
                  strokeWidth="1.2" 
                  strokeOpacity="0.5"
                />

                {/* Cozy Attic Circular window */}
                <circle cx="417.5" cy="45" r="9" fill="#FFFFFF" stroke="#404040" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="417.5" y1="36" x2="417.5" y2="54" stroke="#404040" strokeWidth="1" strokeOpacity="0.3" />
                <line x1="408.5" y1="45" x2="426.5" y2="45" stroke="#404040" strokeWidth="1" strokeOpacity="0.3" />

                {/* Second Floor Windows */}
                <rect 
                  x="382" 
                  y="78" 
                  width="22" 
                  height="28" 
                  rx="1" 
                  fill="#FEF08A" 
                  fillOpacity="0.85" 
                  stroke="#404040"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
                <line x1="382" y1="92" x2="404" y2="92" stroke="#404040" strokeOpacity="0.3" />
                <line x1="393" y1="78" x2="393" y2="106" stroke="#404040" strokeOpacity="0.3" />

                <rect 
                  x="431" 
                  y="78" 
                  width="22" 
                  height="28" 
                  rx="1" 
                  fill="#FFFFFF" 
                  stroke="#404040"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
                <line x1="431" y1="92" x2="453" y2="92" stroke="#404040" strokeOpacity="0.3" />
                <line x1="442" y1="78" x2="442" y2="106" stroke="#404040" strokeOpacity="0.3" />

                {/* Ground floor door */}
                <rect 
                  x="396" 
                  y="156" 
                  width="43" 
                  height="4" 
                  fill="#404040" 
                  fillOpacity="0.6"
                />
                <rect 
                  x="400" 
                  y="152" 
                  width="35" 
                  height="4" 
                  fill="#404040" 
                  fillOpacity="0.4"
                />
                <rect 
                  x="404" 
                  y="114" 
                  width="27" 
                  height="38" 
                  rx="1" 
                  fill="rgba(64, 64, 64, 0.08)" 
                  stroke="#404040" 
                  strokeWidth="1.2" 
                  strokeOpacity="0.5"
                />
                <rect x="410" y="120" width="15" height="15" fill="#FFFFFF" stroke="#404040" strokeWidth="0.8" strokeOpacity="0.4" />
              </g>

              {/* COZY STREETLIGHT 2 (x=480) */}
              <g id="streetlight-2">
                {/* Mast */}
                <rect x="479" y="65" width="2.5" height="95" fill="#262626" fillOpacity="0.5" />
                {/* Curved top arm */}
                <path d="M 479 65 Q 487 58 489 68" fill="none" stroke="#262626" strokeWidth="2" strokeOpacity="0.6" />
                {/* Lantern */}
                <polygon points="485,68 491,68 492,74 484,74" fill="#262626" fillOpacity="0.7" />
                {/* Glow cone */}
                <polygon 
                  points="488,74 434,160 542,160" 
                  fill="url(#lightConeGradPremium)" 
                />
                {/* Bulb */}
                <circle cx="488" cy="74" r="2" fill="#FFFFFF" />
              </g>

              {/* STOREFRONT D: Corner Boutique (x=490 to x=600) */}
              <g id="storefront-boutique" opacity="0.95">
                {/* Main Body */}
                <rect 
                  x="490" 
                  y="60" 
                  width="110" 
                  height="100" 
                  rx="1.5" 
                  fill="rgba(64, 64, 64, 0.03)" 
                  stroke="#404040" 
                  strokeWidth="1.2" 
                  strokeOpacity="0.4"
                />
                {/* Elegant top cornice */}
                <rect x="485" y="56" width="120" height="5" fill="rgba(64, 64, 64, 0.15)" />
                <polygon points="490,56 545,45 600,56" fill="rgba(64, 64, 64, 0.1)" stroke="#404040" strokeWidth="1" strokeOpacity="0.4" />

                {/* Large Boutique display window */}
                <rect 
                  x="500" 
                  y="105" 
                  width="50" 
                  height="45" 
                  rx="2" 
                  fill="#FFFFFF" 
                  stroke="#404040" 
                  strokeWidth="1.2" 
                  strokeOpacity="0.4"
                />
                
                {/* Dress silhouette */}
                <path d="M 520 148 L 530 148 M 525 148 L 525 130 Q 520 118 525 118 Q 530 118 525 130 Z" fill="#404040" fillOpacity="0.7" />

                {/* Upper classic shutter window */}
                <rect 
                  x="530" 
                  y="72" 
                  width="30" 
                  height="22" 
                  rx="1" 
                  fill="#FFFFFF" 
                  stroke="#404040"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
                <line x1="530" y1="83" x2="560" y2="83" stroke="#404040" strokeOpacity="0.3" />
                <line x1="545" y1="72" x2="545" y2="94" stroke="#404040" strokeOpacity="0.3" />

                {/* Shop Entrance under mini awning */}
                <rect 
                  x="558" 
                  y="105" 
                  width="32" 
                  height="55" 
                  fill="rgba(64, 64, 64, 0.08)" 
                  stroke="#404040" 
                  strokeWidth="1" 
                  strokeOpacity="0.4"
                />
                {/* Lit doorway slot */}
                <rect x="564" y="112" width="20" height="38" rx="0.5" fill="#FEF08A" fillOpacity="0.95" />
              </g>

              {/* STOREFRONT E: Townhome B with Steep Gable Roof (x=615 to x=700) */}
              <g id="storefront-townhomeb" opacity="0.95">
                <rect 
                  x="615" 
                  y="80" 
                  width="85" 
                  height="80" 
                  rx="1" 
                  fill="rgba(64, 64, 64, 0.03)" 
                  stroke="#404040" 
                  strokeWidth="1.2" 
                  strokeOpacity="0.4"
                />
                {/* Steep Pitch Roof */}
                <polygon 
                  points="610,80 657.5,35 705,80" 
                  fill="rgba(64, 64, 64, 0.12)" 
                  stroke="#404040" 
                  strokeWidth="1.2" 
                  strokeOpacity="0.5"
                />

                {/* Elegant vertical attic window */}
                <rect x="650" y="50" width="15" height="20" rx="1" fill="#FFFFFF" stroke="#404040" strokeWidth="1" strokeOpacity="0.4" />

                {/* Ground floor multi-pane cozy window */}
                <rect 
                  x="630" 
                  y="95" 
                  width="55" 
                  height="45" 
                  rx="2" 
                  fill="#FEF08A" 
                  fillOpacity="0.45" 
                  stroke="#404040" 
                  strokeWidth="1" 
                  strokeOpacity="0.3"
                />
                <line x1="630" y1="110" x2="685" y2="110" stroke="#404040" strokeOpacity="0.2" />
                <line x1="630" y1="125" x2="685" y2="125" stroke="#404040" strokeOpacity="0.2" />
                <line x1="648" y1="95" x2="648" y2="140" stroke="#404040" strokeOpacity="0.2" />
                <line x1="666" y1="95" x2="666" y2="140" stroke="#404040" strokeOpacity="0.2" />
              </g>

              {/* Decorative Trees - Right Side */}
              <g id="right-trees">
                {/* Trunk 1 */}
                <line x1="720" y1="125" x2="720" y2="160" stroke="#737373" strokeWidth="2" strokeOpacity="0.4" />
                {/* Leafy canopy 1 */}
                <circle cx="720" cy="120" r="14" fill="rgba(115, 115, 115, 0.05)" stroke="#737373" strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="710" cy="112" r="11" fill="rgba(115, 115, 115, 0.05)" stroke="#737373" strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="730" cy="112" r="11" fill="rgba(115, 115, 115, 0.05)" stroke="#737373" strokeWidth="1" strokeOpacity="0.4" />

                {/* Trunk 2 */}
                <line x1="755" y1="115" x2="755" y2="160" stroke="#737373" strokeWidth="2.5" strokeOpacity="0.4" />
                {/* Leafy canopy 2 */}
                <circle cx="755" cy="108" r="17" fill="rgba(115, 115, 115, 0.05)" stroke="#737373" strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="742" cy="98" r="14" fill="rgba(115, 115, 115, 0.05)" stroke="#737373" strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="768" cy="98" r="14" fill="rgba(115, 115, 115, 0.05)" stroke="#737373" strokeWidth="1" strokeOpacity="0.4" />
              </g>
            </svg>
          </div>

          {/* Speed/Road lines */}
          <div className="absolute inset-x-0 h-1 bg-slate-300/40" style={{ top: '55%' }} />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scaleX: 0.2, x: 250 }}
                animate={{ 
                  opacity: [0, 0.4, 0],
                  scaleX: [0.2, 1.5, 0.2],
                  x: [250, -250]
                }}
                transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity, ease: "linear" }}
                className="absolute h-0.5 w-16 bg-slate-400/50 rounded-full blur-xs"
                style={{ top: `${52 + (i * 2)}%` }}
              />
            ))}
          </div>

          {/* Graceful Car Animation */}
          <motion.div
            initial={{ x: -280, y: 10, scale: 0.8 }}
            animate={{ 
              x: [-280, -150, -40, 40, 150, 280],
              y: [10, 8, 5, 5, 8, 10],
              scale: [0.8, 1.0, 1.15, 1.15, 1.0, 0.8]
            }}
            transition={{ 
              duration: 5.0,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
              ease: "easeInOut",
            }}
            className="text-black relative z-10 flex flex-col items-center animate-fade-in"
          >
            <Car size={90} strokeWidth={2.5} className="text-black drop-shadow-[0_4px_12px_rgba(0,0,0,0.18)]" />
            
            <div className="flex justify-between w-14 -mt-1 px-1.5 pointer-events-none">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                className="w-3.5 h-3.5 rounded-full border-2 border-black border-t-transparent"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                className="w-3.5 h-3.5 rounded-full border-2 border-black border-t-transparent"
              />
            </div>
          </motion.div>

          {/* Waving family */}
          <div className="absolute flex items-end justify-center gap-4 sm:gap-10 scale-75 sm:scale-100 origin-bottom z-20 pointer-events-none" style={{ bottom: 'calc(24px + 15%)' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <RunningPerson size={100} state="greeting" color="#F3B490" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <RunningPerson size={62} state="greeting" color="#F3B490" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <WaitingWoman size={62} state="greeting" color="#F3B490" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <WaitingWoman size={100} state="greeting" color="#F3B490" />
            </motion.div>
          </div>
          
          {/* Ambient Particles */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`p-${i}`}
              initial={{ 
                x: Math.random() * 400 - 200, 
                y: Math.random() * 600 - 300,
                opacity: 0 
              }}
              animate={{ 
                x: (Math.random() * 400 - 200) - 120,
                opacity: [0, 0.25, 0] 
              }}
              transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 1.5 }}
              className="absolute w-1 h-1 bg-neutral-400/30 rounded-full"
            />
          ))}
        </div>
      </motion.div>
    );
  }

  if (isAnimatingHotel) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`fixed inset-0 z-[100] flex flex-col overflow-hidden transition-colors duration-500 ${premiumBg}`}
      >
        <Logo className="absolute top-16 left-1/2 -translate-x-1/2 z-30 text-black" size="md" isPremium={true} />

        <div className="flex-1 relative flex items-center justify-center">


          {/* Running Wind Trails */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5, x: 0 }}
                animate={{ 
                  opacity: [0, 0.25, 0],
                  scale: [0.8, 1.5, 2],
                  x: [40, -120 - (i * 25)],
                  y: [20 + (i % 2 === 0 ? 15 : -15), 10 + (i % 2 === 0 ? -10 : 10)]
                }}
                transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity, ease: "easeOut" }}
                className="absolute w-5 h-2 bg-neutral-400/10 rounded-full blur-md"
              />
            ))}
          </div>

          {/* Sidewalk curb line */}
          <div className="absolute left-0 right-0 h-[2px] z-0 bg-neutral-400/35" style={{ top: 'calc(50% + 70px)' }} />

          {/* Street Road Block */}
          <div 
            className="absolute left-0 right-0 bottom-0 z-0 bg-neutral-100" 
            style={{ top: 'calc(50% + 70px)' }} 
          >
            {/* Dashed center line */}
            <div className="absolute top-6 left-0 right-0 h-[3px] flex gap-8 justify-around px-8 opacity-45">
              {[...Array(16)].map((_, i) => (
                <div key={`line-${i}`} className="w-12 h-full bg-neutral-400/30 rounded-full" />
              ))}
            </div>
          </div>

          {/* Hotel and Street Scene Background */}
          <div className="absolute inset-x-0 inset-y-0 pointer-events-none z-0 overflow-hidden flex justify-center">
            <div className="relative w-full max-w-4xl h-full">
              
              {/* Background City Hotel Silhouette (Left) */}
              <div 
                className="absolute left-[8%] z-0" 
                style={{ bottom: 'calc(50% - 69px)' }}
              >
                <svg viewBox="0 0 140 220" className="w-[110px] h-[178px] text-neutral-400 pointer-events-none opacity-80">
                  <rect x="10" y="10" width="120" height="210" rx="2" fill="rgba(0, 0, 0, 0.02)" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
                  <polygon points="10,10 70,-10 130,10" fill="rgba(0, 0, 0, 0.04)" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
                  
                  {/* Classy sign vertical "HOTEL" */}
                  <g transform="translate(55, 30)">
                    <rect x="0" y="0" width="30" height="70" rx="3" fill="#FFFFFF" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5" />
                    <text x="15" y="18" fill="currentColor" fontSize="10" fontWeight="bold" textAnchor="middle">I</text>
                    <text x="15" y="38" fill="currentColor" fontSize="10" fontWeight="bold" textAnchor="middle">H</text>
                    <text x="15" y="58" fill="currentColor" fontSize="10" fontWeight="bold" textAnchor="middle">G</text>
                  </g>
                  
                  {/* Windows */}
                  <rect x="25" y="115" width="18" height="18" rx="1.5" fill="#FEF08A" fillOpacity="0.85" />
                  <rect x="97" y="115" width="18" height="18" rx="1.5" fill="#FFFFFF" />
                  <rect x="25" y="150" width="18" height="18" rx="1.5" fill="#FFFFFF" />
                  <rect x="97" y="150" width="18" height="18" rx="1.5" fill="#FEF08A" fillOpacity="0.7" />
                </svg>
              </div>

              {/* Elegant Victorian Street Lamp (Left) */}
              <div 
                className="absolute left-[30%] z-0" 
                style={{ bottom: 'calc(50% - 69px)' }}
              >
                <svg viewBox="0 0 60 180" className="w-[50px] h-[150px] text-neutral-800 pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
                  <rect x="28" y="25" width="4" height="155" fill="currentColor" fillOpacity="0.6" />
                  <rect x="24" y="175" width="12" height="5" fill="currentColor" />
                  <path d="M 30 35 Q 15 25 15 45" fill="none" stroke="currentColor" strokeWidth="3" strokeOpacity="0.7" />
                  <polygon points="10,45 20,45 23,38 7,38" fill="currentColor" fillOpacity="0.85" />
                  <polygon points="11,45 19,45 17,55 13,55" fill="#FEF08A" />
                  <path d="M 6 38 L 24 38 L 15 32 Z" fill="currentColor" />
                  <polygon points="15,55 -30,180 60,180" fill="#FEF08A" opacity="0.1" />
                </svg>
              </div>

              {/* Main Elegant Destination Boutique Hotel (Right) */}
              <div 
                className="absolute right-[8%] z-0" 
                style={{ bottom: 'calc(50% - 69px)' }}
              >
                <svg viewBox="0 0 160 240" className="w-[145px] h-[218px] text-neutral-800 pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                  {/* Building body */}
                  <rect x="10" y="30" width="140" height="210" rx="3" fill="rgba(0, 0, 0, 0.02)" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
                  {/* Roof classic cornice */}
                  <rect x="5" y="20" width="150" height="10" rx="1.5" fill="rgba(0, 0, 0, 0.08)" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
                  
                  {/* Elegant Entry Canopy */}
                  <path d="M 40 200 L 120 200 L 125 212 L 35 212 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
                  {/* Lit entrance doorway */}
                  <path d="M 60 212 H 100 V 240 H 60 Z" fill="#FEF08A" fillOpacity="0.95" />
                  {/* Arched line above entrance */}
                  <path d="M 55 200 Q 80 185 105 200" fill="none" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.5" />
                  
                  {/* Glowing "HOTEL" sign */}
                  <g transform="translate(45, 45)">
                    {/* Sign board */}
                    <rect x="0" y="0" width="70" height="24" rx="4" fill="#FFFFFF" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                    <text x="35" y="16" fill="currentColor" fontSize="9" fontFamily="sans-serif" fontWeight="900" textAnchor="middle" letterSpacing="1">
                      HOTEL
                    </text>
                  </g>

                  {/* Cozy Windows */}
                  {/* Row 1 */}
                  <rect x="25" y="85" width="22" height="26" rx="2" fill="#FEF08A" fillOpacity="0.9" />
                  <rect x="69" y="85" width="22" height="26" rx="2" fill="#FFFFFF" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
                  <rect x="113" y="85" width="22" height="26" rx="2" fill="#FEF08A" fillOpacity="0.8" />
                  
                  {/* Row 2 */}
                  <rect x="25" y="125" width="22" height="26" rx="2" fill="#FFFFFF" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
                  <rect x="69" y="125" width="22" height="26" rx="2" fill="#FEF08A" fillOpacity="0.95" />
                  <rect x="113" y="125" width="22" height="26" rx="2" fill="#FFFFFF" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />

                  {/* Row 3 */}
                  <rect x="25" y="165" width="22" height="22" rx="1.5" fill="#FEF08A" fillOpacity="0.8" />
                  <rect x="113" y="165" width="22" height="22" rx="1.5" fill="#FEF08A" fillOpacity="0.9" />
                  
                  <line x1="15" y1="55" x2="30" y2="55" stroke="currentColor" opacity="0.1" />
                  <line x1="130" y1="115" x2="145" y2="115" stroke="currentColor" opacity="0.1" />
                </svg>
              </div>

              {/* Second Victorian Street Lamp (Right near Hotel) */}
              <div 
                className="absolute right-[28%] z-0" 
                style={{ bottom: 'calc(50% - 69px)' }}
              >
                <svg viewBox="0 0 60 180" className="w-[50px] h-[150px] text-neutral-800 pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
                  <rect x="28" y="25" width="4" height="155" fill="currentColor" fillOpacity="0.6" />
                  <rect x="24" y="175" width="12" height="5" fill="currentColor" />
                  <path d="M 30 35 Q 15 25 15 45" fill="none" stroke="currentColor" strokeWidth="3" strokeOpacity="0.7" />
                  <polygon points="10,45 20,45 23,38 7,38" fill="currentColor" fillOpacity="0.85" />
                  <polygon points="11,45 19,45 17,55 13,55" fill="#FEF08A" />
                  <path d="M 6 38 L 24 38 L 15 32 Z" fill="currentColor" />
                  <polygon points="15,55 -30,180 60,180" fill="#FEF08A" opacity="0.1" />
                </svg>
              </div>

            </div>
          </div>

          {/* Couple Meeting and Running Animation */}
          <div className="relative flex items-center justify-center w-full max-w-md h-full">
            <motion.div
              initial={{ x: -240, y: 30, scale: 0.9 }}
              animate={{ 
                x: [-240, -30, -30, 240],
                y: [30, 25, 25, 30],
                scale: [0.9, 1.1, 1.1, 0.9]
              }}
              transition={{ 
                duration: 3.7,
                times: [0, 0.35, 0.6, 1],
                ease: [0.45, 0, 0.55, 1],
              }}
              className="text-black absolute z-10"
            >
              <RunningPerson 
                size={120} 
                state={hotelAnimState === 'greeting' ? 'greeting' : 'running'} 
                color="#F3B490"
              />
            </motion.div>

            <motion.div
              initial={{ x: 40, y: 30, scale: 0.95 }}
              animate={{ 
                x: [40, 40, 40, 310],
                y: [30, 30, 30, 30],
                scale: [0.95, 1.15, 1.15, 0.9]
              }}
              transition={{ 
                duration: 3.7,
                times: [0, 0.35, 0.6, 1],
                ease: [0.45, 0, 0.55, 1],
              }}
              className="text-black absolute z-10"
            >
              <WaitingWoman 
                size={120} 
                state={hotelAnimState} 
                color="#F3B490"
              />
            </motion.div>
          </div>
          
          {/* Ambient Particles */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`p-${i}`}
              initial={{ 
                x: Math.random() * 400 - 200, 
                y: Math.random() * 600 - 300,
                opacity: 0 
              }}
              animate={{ 
                x: (Math.random() * 400 - 200) - 80,
                opacity: [0, 0.25, 0] 
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: Math.random() * 2 }}
              className="absolute w-1 h-1 bg-neutral-400/20 rounded-full"
            />
          ))}
        </div>
      </motion.div>
    );
  }

  if (isAnimatingTrips) {
    return (
      <motion.div
        key="travel-transition-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className={`fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden p-6 pb-24 transition-colors duration-500 ${premiumBg}`}
      >
        {/* Scenery background */}
        <div className="absolute inset-0 pointer-events-none z-0 mt-32">

           {/* Clouds panning left */}
           <motion.div
             animate={{ x: [0, -1000] }}
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
             className="absolute top-10 flex gap-40 text-neutral-200 whitespace-nowrap"
           >
             {[...Array(5)].map((_, i) => (
                <svg key={`c-${i}`} viewBox="0 0 120 80" fill="currentColor" className="w-24 h-12 ml-48">
                   <path d="M25 60 C15 60, 8 50, 15 40 C15 25, 45 20, 55 30 C65 18, 95 22, 90 42 C102 42, 108 52, 98 60 Z" />
                </svg>
             ))}
           </motion.div>
        </div>

        {/* Central Walking Stage */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
            
            {/* Airport Moving Walkway */}
            <div className="absolute top-1/2 translate-y-[52px] w-[120vw] h-[12px] bg-neutral-100 border-y border-neutral-300 flex overflow-hidden shadow-sm z-10">
               {/* Moving belt pattern */}
               <motion.div
                  animate={{ x: [0, -40] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                  className="flex h-full items-center min-w-[200vw]"
               >
                 {[...Array(120)].map((_, i) => (
                    <div key={`belt-${i}`} className="h-[80%] w-[3px] bg-neutral-400/40 mx-[8px] rounded-full shrink-0" />
                 ))}
               </motion.div>
               {/* Glowing edge accent */}
               <div className="absolute top-0 inset-x-0 h-[1px] bg-neutral-300" />
            </div>
            
            {/* Scenery moving along the ground to simulate walking */}
            <motion.div 
               animate={{ x: [400, -1200] }}
               transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
               className="absolute bottom-1/2 translate-y-[48px] flex items-end opacity-40 z-0"
            >
               <div className="flex items-end gap-[600px]">
                  {/* Tree */}
                  <div className="w-16 h-28 mb-0 flex flex-col items-center mt-auto">
                     <div className="w-16 h-22 rounded-full bg-neutral-100 border border-neutral-300 mb-[-12px]" />
                     <div className="w-16 h-22 rounded-full bg-neutral-100 border border-neutral-300 absolute mt-4 -ml-6" />
                     <div className="w-16 h-22 rounded-full bg-neutral-100 border border-neutral-300 absolute mt-6 ml-8" />
                     <div className="w-2 h-16 bg-neutral-300 mt-4" />
                  </div>
               </div>
            </motion.div>

            {/* The Walking Family (Now standing on the moving walkway) */}
            <div className="absolute flex items-end gap-0 bottom-1/2 translate-y-[52px] scale-[1.75] origin-bottom translate-x-2 z-20">
               <WalkingPerson type="man" isDarkMode={false} animDelay={0} size={70} className="z-40 drop-shadow-md" color="#F3B490" />
               <WalkingPerson type="woman" isDarkMode={false} animDelay={0.2} size={70} className="-ml-3 z-30 drop-shadow-md" color="#F3B490" />
               <WalkingPerson type="boy" isDarkMode={false} animDelay={0.4} size={70} className="-ml-5 z-20 drop-shadow-md" color="#F3B490" />
               <WalkingPerson type="girl" isDarkMode={false} animDelay={0.6} size={70} className="-ml-5 z-10 drop-shadow-md" color="#F3B490" />
            </div>
            
            {/* Logo in the sky */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 text-black z-30">
               <Logo size="md" isPremium={true} />
            </div>

        </div>
      </motion.div>
    );
  }

  return null;
};
