import React from 'react';
import { motion } from 'motion/react';

export interface WalkingPersonProps {
  size?: number;
  type?: 'man' | 'woman' | 'boy' | 'girl';
  isDarkMode?: boolean;
  isPremium?: boolean;
  animDelay?: number;
  className?: string;
  color?: string;
  shirtColor?: string;
  pantsColor?: string;
  skirtColor?: string;
  capColor?: string;
}

export const WalkingPerson: React.FC<WalkingPersonProps> = ({
  size = 80,
  type = 'man',
  isDarkMode = false,
  isPremium = false,
  animDelay = 0,
  className = '',
  color = 'white',
  shirtColor,
  pantsColor,
  skirtColor,
  capColor
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
  const balloonColor = (isDarkMode || isPremium) ? accentColor : "white";
  
  const useDarkModeSuitcase = isDarkMode || isPremium;
  const suitcaseColor = useDarkModeSuitcase ? (isFemale ? "#f472b6" : "#60a5fa") : "white";
  const suitcaseDetailColor = isPremium ? "#3A1B58" : "white";

  // Assign defaults for stylish clothing colors based on context (premium, dark, or light mode)
  let defaultShirtColor = shirtColor;
  let defaultPantsColor = pantsColor;
  let defaultSkirtColor = skirtColor;
  let defaultCapColor = capColor;

  if (!defaultShirtColor && !defaultPantsColor && !defaultSkirtColor && !defaultCapColor) {
    if (isPremium) {
      if (type === 'man') {
        defaultShirtColor = "#4F46E5"; // Indigo
        defaultPantsColor = "#312E81"; // Dark Indigo
        defaultCapColor = "#4338CA";
      } else if (type === 'woman') {
        defaultShirtColor = "#EC4899"; // Pink
        defaultSkirtColor = "#BE185D"; // Rose
        defaultCapColor = "#9D174D";
      } else if (type === 'boy') {
        defaultShirtColor = "#10B981"; // Emerald
        defaultPantsColor = "#065F46"; // Dark emerald
        defaultCapColor = "#047857";
      } else if (type === 'girl') {
        defaultShirtColor = "#F59E0B"; // Amber
        defaultSkirtColor = "#B45309"; // Dark amber
        defaultCapColor = "#78350F";
      }
    } else if (isDarkMode) {
      if (type === 'man') {
        defaultShirtColor = "#3B82F6"; // Vibrant Blue
        defaultPantsColor = "#60A5FA"; // Light Blue
        defaultCapColor = "#2563EB";
      } else if (type === 'woman') {
        defaultShirtColor = "#EC4899"; // Vibrant Pink
        defaultSkirtColor = "#F472B6"; // Pink
        defaultCapColor = "#FBCFE8";
      } else if (type === 'boy') {
        defaultShirtColor = "#10B981"; // Vibrant Emerald
        defaultPantsColor = "#34D399"; // Mint
        defaultCapColor = "#059669";
      } else if (type === 'girl') {
        defaultShirtColor = "#F59E0B"; // Amber
        defaultSkirtColor = "#FBBF24"; // Yellow
        defaultCapColor = "#FDE68A";
      }
    } else {
      // Light Mode (Trips purple background)
      if (type === 'man') {
        defaultShirtColor = "#3B82F6";
        defaultPantsColor = "#1D4ED8";
        defaultCapColor = "#2563EB";
      } else if (type === 'woman') {
        defaultShirtColor = "#F472B6";
        defaultSkirtColor = "#EC4899";
        defaultCapColor = "#BE185D";
      } else if (type === 'boy') {
        defaultShirtColor = "#10B981";
        defaultPantsColor = "#059669";
        defaultCapColor = "#047857";
      } else if (type === 'girl') {
        defaultShirtColor = "#F59E0B";
        defaultSkirtColor = "#D97706";
        defaultCapColor = "#B45309";
      }
    }
  }

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
        <path d="M22 55 L16 63 L16 68" stroke={suitcaseDetailColor} strokeOpacity={dimOpacity} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 63 L10 63 L10 68" stroke={suitcaseDetailColor} strokeOpacity={dimOpacity} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="68" width="22" height="26" rx="4" fill={suitcaseColor} fillOpacity={useDarkModeSuitcase ? 0.2 : 0.2} stroke={suitcaseColor} strokeOpacity={useDarkModeSuitcase ? 0.6 : dimOpacity} strokeWidth="3.5" />
        <circle cx="6" cy="95" r="2.5" fill={suitcaseDetailColor} opacity={dimOpacity} />
        <circle cx="20" cy="95" r="2.5" fill={suitcaseDetailColor} opacity={dimOpacity} />
        <line x1="13" y1="74" x2="13" y2="88" stroke={suitcaseDetailColor} strokeOpacity={dimOpacity} strokeWidth="2" strokeLinecap="round" />
      </motion.g>

      {/* Back Arm Pulling Suitcase */}
      <motion.path 
         d="M48 33 L35 44 L22 55"
         stroke={color} 
         strokeWidth="5.5" 
         strokeLinecap="round" 
         strokeLinejoin="round"
      />
      {defaultShirtColor && (
        <motion.path 
           d="M48 33 L35 44 L22 55"
           stroke={defaultShirtColor} 
           strokeWidth="6" 
           strokeLinecap="round" 
           strokeLinejoin="round"
           strokeDasharray="9 100"
        />
      )}

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
        stroke={color} 
        strokeWidth="6.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {defaultPantsColor && !isFemale && (
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
          stroke={defaultPantsColor} 
          strokeWidth="7.1" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeDasharray="14 100"
        />
      )}
      {isFemale && (
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
          stroke={defaultSkirtColor || color} 
          strokeWidth="7.1" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeDasharray="16 100"
        />
      )}

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
        stroke={color} 
        strokeWidth="8" 
        strokeLinecap="round"
      />
      {defaultShirtColor && (
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
          stroke={defaultShirtColor} 
          strokeWidth="8.6" 
          strokeLinecap="round"
          strokeDasharray="16 100"
        />
      )}

      {/* Head & Face */}
      <motion.g
        animate={{
          y: [0, 1.5, 0, 1.5, 0]
        }}
        transition={{ duration: cycleDuration, delay: animDelay, repeat: Infinity, ease: easePattern }}
      >
        <circle cx="49" cy="22" r="7.5" fill={color} />
        
        {isFemale ? (
           <>
             {/* Hair bun and ponytail */}
             <circle cx="42" cy="18" r="3.5" fill={color} />
             {defaultCapColor && (
               <g transform="translate(42, 18)">
                 <circle cx="0" cy="0" r="4.2" fill={defaultCapColor} />
               </g>
             )}
             <path d="M 43 20 Q 36 28 39 36" stroke={color} strokeWidth="4.5" fill="none" strokeLinecap="round" />
             {defaultCapColor && (
               <path d="M 43 20 Q 36 28 39 36" stroke={defaultCapColor} strokeWidth="4.9" strokeLinecap="round" strokeDasharray="6 100" fill="none" />
             )}
           </>
        ) : type === 'boy' ? (
           <>
             <path d="M49 14.5 C45 14.5 40 16 38 18 C40 19.5 45 20 49 20 Z" fill={defaultCapColor || color} />
             {defaultCapColor && (
               <path d="M41 19.5 A 7.5 7.5 0 0 1 54.5 17.5 L 49 21 Z" fill={defaultCapColor} />
             )}
           </>
        ) : (
           <>
             <path d="M46 15.5 C 48 14 52 14 55 16" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
             {defaultCapColor && (
               <path d="M46 15.5 C 48 14 52 14 55 16" stroke={defaultCapColor} strokeWidth="3" strokeLinecap="round" fill="none" />
             )}
           </>
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
        stroke={color} 
        strokeWidth="6.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {defaultPantsColor && !isFemale && (
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
          stroke={defaultPantsColor} 
          strokeWidth="7.1" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeDasharray="14 100"
        />
      )}
      {isFemale && (
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
          stroke={defaultSkirtColor || color} 
          strokeWidth="7.1" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeDasharray="16 100"
        />
      )}

      {/* Dress/Skirt for females */}
      {isFemale && (
        <motion.path 
          animate={{
            d: [
              "M 44 45 Q 33 60 35 64 L 59 64 Q 61 60 50 45 Z",
              "M 44 44 Q 32 59 34 62 L 61 62 Q 62 59 50 44 Z",
              "M 44 45 Q 33 60 35 64 L 59 64 Q 61 60 50 45 Z",
              "M 44 44 Q 32 59 34 62 L 61 62 Q 62 59 50 44 Z",
              "M 44 45 Q 33 60 35 64 L 59 64 Q 61 60 50 45 Z"
            ]
          }}
          transition={{ duration: cycleDuration, delay: animDelay, repeat: Infinity, ease: easePattern }}
          fill={defaultSkirtColor || color}
        />
      )}

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
        stroke={color} 
        strokeWidth="5.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {defaultShirtColor && (
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
          stroke={defaultShirtColor} 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeDasharray="9 100"
        />
      )}

      {/* Girl's Balloon */}
      {type === 'girl' && (
        <motion.g 
          animate={{ rotate: [-2, 2, -2], y: [0, -3, 0] }} 
          transition={{ duration: 2.2, delay: animDelay, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M60 48 Q 72 30 78 12" stroke={color} strokeDasharray="2 3" strokeWidth="1.2" fill="none" />
          <circle cx="78" cy="7" r="7" fill={balloonColor} />
          <path d="M78 14 L 75 18 L 81 18 Z" fill={balloonColor} />
        </motion.g>
      )}
    </svg>
  );
};
