import React from 'react';
import { motion } from 'motion/react';

export interface WalkingPersonProps {
  size?: number;
  type?: 'man' | 'woman' | 'boy' | 'girl';
  isDarkMode?: boolean;
  animDelay?: number;
  className?: string;
}

export const WalkingPerson: React.FC<WalkingPersonProps> = ({
  size = 80,
  type = 'man',
  isDarkMode = false,
  animDelay = 0,
  className = ''
}) => {
  const cycleDuration = 1.4;
  const easePattern = "linear";

  const isKid = type === 'boy' || type === 'girl';
  const scale = isKid ? 0.75 : 1;
  const actualSize = size * scale;
  const isFemale = type === 'woman' || type === 'girl';

  const dimOpacity = isDarkMode ? 0.3 : 0.45;
  const accentColor = "#e11d48";
  const skinColor = "#fda4af";
  const eyeColor = isDarkMode ? "#070b13" : "#8B5CF6";
  const balloonColor = isDarkMode ? accentColor : "white";
  
  const suitcaseColor = isDarkMode ? (isFemale ? "#f472b6" : "#60a5fa") : "white";

  const suitcaseAnim = {
    y: [0, 1.5, 0, 1.5, 0]
  };

  return (
    <svg 
      width={actualSize} 
      height={actualSize} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Suitcase (Back Left Side) */}
      <motion.g
        animate={suitcaseAnim}
        transition={{ duration: cycleDuration, delay: animDelay, repeat: Infinity, ease: easePattern }}
      >
        <path d="M22 55 L16 63 L16 68" stroke="white" strokeOpacity={dimOpacity} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 63 L10 63 L10 68" stroke="white" strokeOpacity={dimOpacity} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="68" width="22" height="26" rx="4" fill={suitcaseColor} fillOpacity={isDarkMode ? 0.2 : 0.2} stroke={suitcaseColor} strokeOpacity={isDarkMode ? 0.6 : dimOpacity} strokeWidth="3.5" />
        <circle cx="6" cy="95" r="2.5" fill="white" opacity={dimOpacity} />
        <circle cx="20" cy="95" r="2.5" fill="white" opacity={dimOpacity} />
        <line x1="13" y1="74" x2="13" y2="88" stroke="white" strokeOpacity={dimOpacity} strokeWidth="2" strokeLinecap="round" />
      </motion.g>

      {/* Back Arm Pulling Suitcase */}
      <motion.path 
         d="M48 33 L35 44 L22 55"
         stroke="white" 
         strokeWidth="5.5" 
         strokeLinecap="round" 
         strokeLinejoin="round"
      />

      {/* Back Leg */}
      <motion.path 
        animate={{
          d: [
            "M47 51 L40 68 L30 80",
            "M47 50 L50 63 L45 75",
            "M47 51 L55 65 L60 82",
            "M47 50 L47 68 L48 83",
            "M47 51 L40 68 L30 80"
          ]
        }}
        transition={{ duration: cycleDuration, delay: animDelay, repeat: Infinity, ease: easePattern }}
        stroke="white" 
        strokeWidth="6.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Torso */}
      <motion.path 
        animate={{
          d: [
            "M47 51 C45 43 46 36 49 33", 
            "M47 50 C45 42 46 35 49 32", 
            "M47 51 C45 43 46 36 49 33",
            "M47 50 C45 42 46 35 49 32",
            "M47 51 C45 43 46 36 49 33"
          ]
        }}
        transition={{ duration: cycleDuration, delay: animDelay, repeat: Infinity, ease: easePattern }}
        stroke="white" 
        strokeWidth="8" 
        strokeLinecap="round"
      />

      {/* Dress/Skirt for females */}
      {isFemale && (
        <motion.path 
          animate={{
            d: [
              "M 44 45 Q 36 60 38 64 L 56 64 Q 58 60 50 45 Z",
              "M 44 44 Q 35 59 37 62 L 58 62 Q 59 59 50 44 Z",
              "M 44 45 Q 36 60 38 64 L 56 64 Q 58 60 50 45 Z",
              "M 44 44 Q 35 59 37 62 L 58 62 Q 59 59 50 44 Z",
              "M 44 45 Q 36 60 38 64 L 56 64 Q 58 60 50 45 Z"
            ]
          }}
          transition={{ duration: cycleDuration, delay: animDelay, repeat: Infinity, ease: easePattern }}
          fill="white"
        />
      )}

      {/* Head & Face */}
      <motion.g
        animate={{
          y: [0, 1.5, 0, 1.5, 0]
        }}
        transition={{ duration: cycleDuration, delay: animDelay, repeat: Infinity, ease: easePattern }}
      >
        <circle cx="49" cy="22" r="7.5" fill="white" />
        
        {isFemale ? (
           <>
             {/* Hair bun and ponytail */}
             <circle cx="42" cy="18" r="3.5" fill="white" />
             <path d="M 43 20 Q 36 28 39 36" stroke="white" strokeWidth="4.5" fill="none" strokeLinecap="round" />
           </>
        ) : type === 'boy' ? (
           <path d="M49 14.5 C45 14.5 40 16 38 18 C40 19.5 45 20 49 20 Z" fill="white" />
        ) : (
           <path d="M46 15.5 C 48 14 52 14 55 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        )}

        {/* Happy Face */}
        <g transform="translate(1.5, 0)">
          <path d="M47 21 C 48 19 49.5 19 50.5 21" stroke={eyeColor} strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M52 21 C 53 19 54.5 19 55.5 21" stroke={eyeColor} strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <circle cx="46" cy="23.5" r="1.3" fill={skinColor} />
          <circle cx="56.5" cy="23.5" r="1.3" fill={skinColor} />
          <path d="M49 23.5 Q 51 26 53 23.5 Z" fill={accentColor} />
        </g>
      </motion.g>

      {/* Front Leg */}
      <motion.path 
        animate={{
          d: [
            "M47 51 L55 65 L60 82",
            "M47 50 L47 68 L48 83",
            "M47 51 L40 68 L30 80",
            "M47 50 L50 63 L45 75",
            "M47 51 L55 65 L60 82"
          ]
        }}
        transition={{ duration: cycleDuration, delay: animDelay, repeat: Infinity, ease: easePattern }}
        stroke="white" 
        strokeWidth="6.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Front Arm */}
      <motion.path 
        animate={{
          d: [
            "M49 33 L40 43 L32 46",
            "M49 32 L47 43 L45 52",
            "M49 33 L55 42 L60 48",
            "M49 32 L47 43 L45 52",
            "M49 33 L40 43 L32 46"
          ]
        }}
        transition={{ duration: cycleDuration, delay: animDelay, repeat: Infinity, ease: easePattern }}
        stroke="white" 
        strokeWidth="5.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Girl's Balloon */}
      {type === 'girl' && (
        <motion.g 
          animate={{ rotate: [-2, 2, -2], y: [0, -3, 0] }} 
          transition={{ duration: 2.2, delay: animDelay, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M60 48 Q 72 30 78 12" stroke="white" strokeDasharray="2 3" strokeWidth="1.2" fill="none" />
          <circle cx="78" cy="7" r="7" fill={balloonColor} />
          <path d="M78 14 L 75 18 L 81 18 Z" fill={balloonColor} />
        </motion.g>
      )}
    </svg>
  );
};
