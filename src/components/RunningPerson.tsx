import React from 'react';
import { motion } from 'motion/react';

interface RunningPersonProps {
  className?: string;
  size?: number;
  state?: 'running' | 'greeting';
  color?: string;
  shirtColor?: string;
  pantsColor?: string;
  capColor?: string;
}

export const RunningPerson: React.FC<RunningPersonProps> = ({ 
  className = '', 
  size = 80,
  state = 'running',
  color = 'white',
  shirtColor,
  pantsColor,
  capColor
}) => {
  // Speed is 0.75 seconds per full step cycle to make it feel energetic and fluid
  const cycleDuration = 0.75;
  const easePattern = "easeInOut";

  if (state === 'greeting') {
    // Elegant greeting pose: standing, slightly leaning forward, smiling at her, waving with low-height friendly gestures
    return (
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Soft shadow under him */}
        <motion.ellipse 
          cx="52" 
          cy="83" 
          rx="12" 
          ry="2" 
          fill="white" 
          opacity={0.15}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: easePattern }}
        />

        {/* Back Arm - Joyful greeting wave on the other side */}
        <motion.path 
          d="M48 33 L58 35 L62 25" 
          stroke={color} 
          strokeWidth="5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          animate={{
            d: [
              "M48 33 L59 31 L64 20", // Wave high
              "M48 33 L58 33 L61 24", // Wave low
              "M48 33 L59 31 L64 20"  // Wave high
            ]
          }}
          transition={{
            duration: 0.8,
            delay: 0.1, // Slightly out of phase for a natural look
            repeat: Infinity,
            ease: easePattern
          }}
        />
        {shirtColor && (
          <motion.path 
            d="M48 33 L58 35 L62 25" 
            stroke={shirtColor} 
            strokeWidth="5.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeDasharray="9 100"
            animate={{
              d: [
                "M48 33 L59 31 L64 20", // Wave high
                "M48 33 L58 33 L61 24", // Wave low
                "M48 33 L59 31 L64 20"  // Wave high
              ]
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              repeat: Infinity,
              ease: easePattern
            }}
          />
        )}

        {/* Both Legs standing, one slightly forward towards her */}
        {/* Back Leg - Straight support leg */}
        <path 
          d="M55 51 L55 81" 
          stroke={color} 
          strokeWidth="6" 
          strokeLinecap="round" 
        />
        {pantsColor && (
          <path 
            d="M55 51 L55 64" 
            stroke={pantsColor} 
            strokeWidth="6.5" 
            strokeLinecap="round" 
          />
        )}
        {/* Front Leg - Slightly angled forward, relaxed */}
        <motion.path 
          d="M51 51 L48 68 L46 81" 
          stroke={color} 
          strokeWidth="6.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          animate={{
            rotate: [-2, 1, -2],
            originY: "51px"
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: easePattern
          }}
        />
        {pantsColor && (
          <motion.path 
            d="M51 51 L48 68 L46 81" 
            stroke={pantsColor} 
            strokeWidth="7" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            strokeDasharray="14 100"
            animate={{
              rotate: [-2, 1, -2],
              originY: "51px"
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: easePattern
            }}
          />
        )}

        {/* Torso & Hips */}
        <path 
          d="M51 51 C53 43 51 36 48 33" 
          stroke={color} 
          strokeWidth="8" 
          strokeLinecap="round"
        />
        {shirtColor && (
          <path 
            d="M51 51 C53 43 51 36 48 33" 
            stroke={shirtColor} 
            strokeWidth="8.6" 
            strokeLinecap="round"
            strokeDasharray="16 100"
          />
        )}

        {/* Head with bouncing dynamic movement and cute face */}
        <motion.g
          animate={{
            y: [0, -1.5, 0]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: easePattern
          }}
        >
          {/* Head */}
          <circle cx="48" cy="21" r="7.5" fill={color} />
          
          {/* Cap Peak (Sporty look) */}
          <path d="M48 14.5 C45 14.5 40 16 38 18 C40 19.5 45 20 48 20 Z" fill={capColor || color} />
          {capColor && (
            <path d="M41 19.5 A 7.5 7.5 0 0 1 54.5 17.5 L 48 21 Z" fill={capColor} />
          )}

          {/* Happy Facing Gesto / Rostro Amigable (^^) */}
          <g transform="translate(1, 0)">
            {/* Happy eyes */}
            <path d="M 45.5 20 C 44.5 18 43 18 42 20" stroke="#1d1145" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M 50 20 C 49 18 47.5 18 46.5 20" stroke="#1d1145" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            {/* Blush cheeks */}
            <circle cx="41" cy="22.2" r="1.2" fill="#fda4af" />
            <circle cx="51" cy="22.2" r="1.2" fill="#fda4af" />
            {/* Smile */}
            <path d="M 44.5 22.5 Q 46 25 47.5 22.5 Z" fill="#e11d48" />
          </g>
        </motion.g>

        {/* Front Arm - Joyful greeting wave below shoulder height */}
        <motion.path 
          d="M48 33 L38 35 L34 25" 
          stroke={color} 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          animate={{
            d: [
              "M48 33 L37 31 L32 20", // Wave high
              "M48 33 L38 33 L35 24", // Wave low
              "M48 33 L37 31 L32 20"  // Wave high
            ]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: easePattern
          }}
        />
        {shirtColor && (
          <motion.path 
            d="M48 33 L38 35 L34 25" 
            stroke={shirtColor} 
            strokeWidth="6.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeDasharray="11 100"
            animate={{
              d: [
                "M48 33 L37 31 L32 20", // Wave high
                "M48 33 L38 33 L35 24", // Wave low
                "M48 33 L37 31 L32 20"  // Wave high
              ]
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: easePattern
            }}
          />
        )}
      </svg>
    );
  }

  // running/jogging state
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Back Arm (Slightly translucent for depth) - Kept low throughout the run cycle */}
      <motion.path 
        animate={{
          d: [
            "M47 33 L38 41 L28 45", // Phase 1: Low back drive
            "M47 33 L45 44 L40 50", // Phase 2: Swing forward low
            "M47 33 L55 42 L52 50", // Phase 3: Low front bent
            "M47 33 L53 45 L58 52", // Phase 4: Extended low forward
            "M47 33 L38 41 L28 45"  // Phase 5: Loop back
          ]
        }}
        transition={{
          duration: cycleDuration,
          repeat: Infinity,
          ease: easePattern
        }}
        stroke={color} 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Back Leg (Slightly translucent for depth) */}
      <motion.path 
        animate={{
          d: [
            "M44 51 L48 57 L43 71", // Frame 1: Swing-through / contract
            "M44 50 L56 62 L66 78", // Frame 2: Extension / reach forward
            "M44 51 L45 66 L42 82", // Frame 3: Landing / pull body
            "M44 50 L28 62 L16 74", // Frame 4: Strong push-off / drive
            "M44 51 L48 57 L43 71"  // Frame 5: Loop back
          ]
        }}
        transition={{
          duration: cycleDuration,
          repeat: Infinity,
          ease: easePattern
        }}
        stroke={color} 
        strokeWidth="7" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Torso & Hips */}
      <motion.path 
        animate={{
          d: [
            "M44 51 C42 43 44 36 47 33",
            "M44 49 C42 41 44 34 47 31",
            "M44 51 C42 43 44 36 47 33",
            "M44 49 C42 41 44 34 47 31",
            "M44 51 C42 43 44 36 47 33"
          ]
        }}
        transition={{
          duration: cycleDuration,
          repeat: Infinity,
          ease: easePattern
        }}
        stroke={color} 
        strokeWidth="9" 
        strokeLinecap="round"
      />

      {/* Runner Head with Dynamic Bouncing, Cap Peak transitions, and Happy Face details */}
      <motion.g
        animate={{
          y: [0, -2, 0, -2, 0]
        }}
        transition={{
          duration: cycleDuration,
          repeat: Infinity,
          ease: easePattern
        }}
      >
        {/* Head */}
        <circle cx="51" cy="21" r="7.5" fill={color} />
        
        {/* Streamlined Cap Peak - Transitioning to front facing visor on a 3s timeline */}
        <motion.path 
          animate={{
            d: [
              "M51 14.5 C54 14.5 59 16 61 18 C59 19.5 54 20 51 20 Z", // 0.0s: profile (face right)
              "M51 14.5 C54 14.5 59 16 61 18 C59 19.5 54 20 51 20 Z", // 0.6s: profile
              "M45 15.5 C48 14.5 54 14.5 57 15.5 C56 17.5 46 17.5 45 15.5 Z", // 0.9s: front-facing visor
              "M45 15.5 C48 14.5 54 14.5 57 15.5 C56 17.5 46 17.5 45 15.5 Z", // 2.1s: front-facing visor
              "M51 14.5 C54 14.5 59 16 61 18 C59 19.5 54 20 51 20 Z", // 2.4s: profile
              "M51 14.5 C54 14.5 59 16 61 18 C59 19.5 54 20 51 20 Z"  // 3.0s: profile
            ]
          }}
          transition={{
            duration: 3,
            times: [0, 0.2, 0.3, 0.7, 0.8, 1],
            repeat: Infinity,
            ease: "easeInOut"
          }}
          fill={color}
        />

        {/* Back Cap Adjusting Pin-hole - Fades out when looking front */}
        <motion.path 
          d="M50 14.5 L43 18 L50 20 Z" 
          animate={{
            opacity: [1, 1, 0, 0, 1, 1]
          }}
          transition={{
            duration: 3,
            times: [0, 0.2, 0.3, 0.7, 0.8, 1],
            repeat: Infinity,
            ease: "easeInOut"
          }}
          fill="rgba(255, 255, 255, 0.4)" 
        />

        {/* Gesto de alegría / Rostro amigable - Mirando al frente con ojos sonrientes, mejillas rosadas y una gran boca feliz */}
        <motion.g
          animate={{
            opacity: [0, 0, 1, 1, 0, 0]
          }}
          transition={{
            duration: 3,
            times: [0, 0.2, 0.3, 0.7, 0.8, 1],
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Ojos en arco de felicidad (^^) */}
          <path d="M 46.5 20 C 47.5 18 49 18 50 20" stroke="#1d1145" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M 52 20 C 53 18 54.5 18 55.5 20" stroke="#1d1145" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          
          {/* Mejillas Rosadas / Rubor (Blush) */}
          <circle cx="45" cy="22.5" r="1.3" fill="#fda4af" />
          <circle cx="57" cy="22.5" r="1.3" fill="#fda4af" />
          
          {/* Sonrisa Gigante con Lengua */}
          <path d="M 49 22.5 Q 51 25.5 53 22.5 Z" fill="#e11d48" />
          <path d="M 50 22.5 C 50.3 23.5 51.7 23.5 52 22.5 Z" fill="#fda4af" />
        </motion.g>
      </motion.g>

      {/* Front Leg */}
      <motion.path 
        animate={{
          d: [
            "M44 51 L45 66 L42 82", // Frame 1: Landing / pull body
            "M44 50 L28 62 L16 74", // Frame 2: Strong push-off / drive
            "M44 51 L48 57 L43 71", // Frame 3: Swing-through / contract
            "M44 50 L56 62 L66 78", // Frame 4: Extension / reach forward
            "M44 51 L45 66 L42 82"  // Frame 5: Loop back
          ]
        }}
        transition={{
          duration: cycleDuration,
          repeat: Infinity,
          ease: easePattern
        }}
        stroke={color} 
        strokeWidth="7" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Front Arm */}
      <motion.path 
        animate={{
          d: [
            "M47 33 L55 42 L52 50", // 0.00s: Run - mid-front
            "M47 33 L53 45 L58 52", // 0.19s: Run - extended forward
            "M47 33 L45 44 L40 50", // 0.38s: Run - swing back
            "M47 33 L38 41 L28 45", // 0.56s: Run - high back
            "M47 33 L47 38 L45 45", // 0.75s: Transition - preparing to wave
            "M47 33 L55 36 L63 32", // 0.94s: Wave - start (kept below shoulder)
            "M47 33 L56 34 L64 26", // 1.13s: Wave - peak 1 (low wave height)
            "M47 33 L54 37 L61 36", // 1.31s: Wave - low 1
            "M47 33 L56 34 L64 26", // 1.50s: Wave - peak 2
            "M47 33 L54 37 L61 36", // 1.69s: Wave - low 2
            "M47 33 L56 32 L64 24", // 1.88s: Wave - joyful front salute (waist/chest height)
            "M47 33 L54 37 L61 36", // 2.06s: Wave - down
            "M47 33 L45 44 L40 50", // 2.25s: Transition back to run
            "M47 33 L38 41 L28 45", // 2.44s: Run - swing back
            "M47 33 L55 42 L52 50", // 2.63s: Run - mid-front
            "M47 33 L53 45 L58 52", // 2.81s: Run - extended forward
            "M47 33 L45 44 L40 50"  // 3.00s: Run - swing back
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        stroke={color} 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};
