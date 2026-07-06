import React from 'react';
import { motion } from 'motion/react';

interface WaitingWomanProps {
  className?: string;
  size?: number;
  state?: 'waiting' | 'greeting' | 'running';
  color?: string;
}

export const WaitingWoman: React.FC<WaitingWomanProps> = ({ 
  className = '', 
  size = 120, 
  state = 'waiting',
  color = 'white'
}) => {
  const cycleDuration = 0.75;
  const easePattern = "easeInOut";

  // Different animations for each state
  if (state === 'waiting') {
    // Elegant waiting pose: looking left, weight on one hip, hand on hip, tapping she-foot or slight wave
    return (
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Soft Shadow under her */}
        <motion.ellipse 
          cx="48" 
          cy="83" 
          rx="12" 
          ry="2" 
          fill="white" 
          opacity={0.15}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: easePattern }}
        />

        {/* Back Arm (Resting elegantly at her side) */}
        <path 
          d="M48 33 L42 45 L40 54" 
          stroke={color} 
          strokeWidth="5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />

        {/* Both Legs standing elegantly, one slightly bent/resting */}
        {/* Back Leg - Standing straight */}
        <path 
          d="M45 52 L45 81" 
          stroke={color} 
          strokeWidth="6" 
          strokeLinecap="round" 
        />
        {/* Front Leg - Slightly angled outwards, tapping heel */}
        <motion.path 
          d="M49 52 L52 68 L55 81" 
          stroke={color} 
          strokeWidth="6.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          animate={{
            rotate: [2, -1, 2],
            originY: "52px"
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: easePattern
          }}
        />

        {/* Torso - Beautiful curved feminine posture */}
        <path 
          d="M48 52 C46 44, 44 38, 48 33" 
          stroke={color} 
          strokeWidth="8" 
          strokeLinecap="round"
        />

        {/* Slender neck connection */}
        <circle cx="48" cy="28.5" r="2" fill={color} />

        {/* Head with dynamic ponytail & lovely facial facing left */}
        <motion.g
          animate={{
            y: [0, -1, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: easePattern
          }}
        >
          {/* Head circle */}
          <circle cx="48" cy="21" r="7.2" fill={color} />
          
          {/* Cute Feminine Ponytail - Wavy structure extending to the right with gentle dangle */}
          <motion.path 
            d="M42 19 C34 16, 32 23, 27 24 C30 27, 34 23, 42 21"
            fill={color}
            animate={{
              rotate: [0, 6, -4, 0]
            }}
            style={{ originX: "42px", originY: "19px" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.g>

        {/* Front Arm - Raising to do a warm, gentle wave to the left (waiting for him) */}
        <motion.path 
          d="M48 33 L58 35 L62 25" 
          stroke={color} 
          strokeWidth="5.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          animate={{
            d: [
              "M48 33 L58 32 L64 21", // Wave position high
              "M48 33 L57 34 L61 24", // Back slightly
              "M48 33 L58 32 L64 21"  // Wave high again
            ]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: easePattern
          }}
        />
      </svg>
    );
  }

  if (state === 'greeting') {
    // Joyful meeting state: jumping slightly, waving with both hands, facing left-ish or looking at him happily
    return (
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Shadow shrinking during jump */}
        <motion.ellipse 
          cx="48" 
          cy="83" 
          rx="12" 
          ry="2" 
          fill="white" 
          opacity={0.15}
          animate={{ 
            scale: [1, 0.7, 1],
            opacity: [0.15, 0.1, 0.15]
          }}
          transition={{ duration: 0.5, repeat: Infinity, ease: easePattern }}
        />

        {/* Entire body jumps up and down with excitement */}
        <motion.g
          animate={{
            y: [0, -12, 0]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeOut"
          }}
        >
          {/* Back Leg - Joyfully bent back */}
          <motion.path 
            d="M44 52 L38 65 L32 60" 
            stroke={color} 
            strokeWidth="6" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />

          {/* Front Leg - Bent forward slightly */}
          <motion.path 
            d="M48 52 L52 68 L48 78" 
            stroke={color} 
            strokeWidth="6.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />

          {/* Torso */}
          <path 
            d="M46 52 C45 44, 43 38, 47 33" 
            stroke={color} 
            strokeWidth="8" 
            strokeLinecap="round"
          />

          {/* Neck */}
          <circle cx="47" cy="28.5" r="2" fill={color} />

          {/* Head & Ponytail jumping/flopping with secondary action */}
          <motion.g
            animate={{
              rotate: [0, -5, 5, 0]
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Head */}
            <circle cx="47" cy="21" r="7.2" fill={color} />
            
            {/* Flapping Ponytail */}
            <path 
              d="M41 19 C31 15, 29 23, 22 23 C26 27, 30 23, 41 21"
              fill={color}
            />

            {/* Micro Details on Face (Gesto de Alegría / Rostro Amigable) */}
            {/* Happy wink/eyes, blushing and mouth */}
            <g transform="translate(1, 0)">
              {/* Ojos en arco de felicidad (^^) */}
              <path d="M 43.5 20 C 44.5 18 46 18 47 20" stroke="#1d1145" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              <path d="M 49 20 C 50 18 51.5 18 52.5 20" stroke="#1d1145" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              {/* Mejillas Rosadas / Rubor (Blush) */}
              <circle cx="42" cy="22.2" r="1.2" fill="#fda4af" />
              <circle cx="54" cy="22.2" r="1.2" fill="#fda4af" />
              {/* Smile */}
              <path d="M 46 22.5 Q 48 25 50 22.5 Z" fill="#e11d48" />
            </g>
          </motion.g>

          {/* Back Arm - Raising happily & waving */}
          <motion.path 
            d="M47 33 L35 28 L28 18" 
            stroke={color} 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            animate={{
              rotate: [0, -15, 15, 0]
            }}
            style={{ originX: "47px", originY: "33px" }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />

          {/* Front Arm - Happy waving */}
          <motion.path 
            d="M47 33 L59 26 L68 15" 
            stroke={color} 
            strokeWidth="5.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            animate={{
              rotate: [0, 20, -20, 0]
            }}
            style={{ originX: "47px", originY: "33px" }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </motion.g>
      </svg>
    );
  }

  // running/jogging state: running gracefully with sporty feminine silhouettes and bouncy ponytail
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Back Arm (Slightly lower posture and fluid runner style) */}
      <motion.path 
        animate={{
          d: [
            "M47 33 L38 43 L30 47", // Frame 1
            "M47 33 L45 45 L41 51", // Frame 2
            "M47 33 L55 43 L51 51", // Frame 3
            "M47 33 L53 46 L58 53", // Frame 4
            "M47 33 L38 43 L30 47"  // Frame 5
          ]
        }}
        transition={{
          duration: cycleDuration,
          repeat: Infinity,
          ease: easePattern
        }}
        stroke={color} 
        strokeWidth="5.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Back Leg (Slender leg paths, beautifully responsive) */}
      <motion.path 
        animate={{
          d: [
            "M43 52 L47 58 L42 72", // Cycle 1
            "M43 51 L55 63 L65 79", // Cycle 2
            "M43 52 L44 67 L41 83", // Cycle 3
            "M43 51 L27 63 L15 75", // Cycle 4
            "M43 52 L47 58 L42 72"  // Cycle 5
          ]
        }}
        transition={{
          duration: cycleDuration,
          repeat: Infinity,
          ease: easePattern
        }}
        stroke={color} 
        strokeWidth="6.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Torso - Curved waist silhouette */}
      <motion.path 
        animate={{
          d: [
            "M43 52 C41 44 43 37 47 33",
            "M43 50 C41 42 43 35 47 31",
            "M43 52 C41 44 43 37 47 33",
            "M43 50 C41 42 43 35 47 31",
            "M43 52 C41 44 43 37 47 33"
          ]
        }}
        transition={{
          duration: cycleDuration,
          repeat: Infinity,
          ease: easePattern
        }}
        stroke={color} 
        strokeWidth="8" 
        strokeLinecap="round"
      />

      {/* Neck */}
      <motion.circle 
        cx="47" 
        cy="28.5" 
        r="1.8" 
        fill={color}
        animate={{ y: [0, -1, 0, -1, 0] }}
        transition={{ duration: cycleDuration, repeat: Infinity }}
      />

      {/* Head with bouncing high-ponytail */}
      <motion.g
        animate={{
          y: [0, -2, 0, -2, 0],
          rotate: [-1, 2, -1, 2, -1]
        }}
        transition={{
          duration: cycleDuration,
          repeat: Infinity,
          ease: easePattern
        }}
      >
        {/* Head */}
        <circle cx="51" cy="21" r="7.2" fill={color} />
        
        {/* Ponytail bouncing strongly behind her as she runs */}
        <motion.path 
          animate={{
            d: [
              "M45 19 C38 10, 31 16, 23 15 C27 21, 34 19, 45 20", // high ponytail standard wave
              "M45 19 C39 12, 33 21, 25 22 C29 25, 36 21, 45 20", // bent lower during downward motion
              "M45 19 C38 10, 31 16, 23 15 C27 21, 34 19, 45 20"  // wave back
            ]
          }}
          transition={{
            duration: cycleDuration / 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          fill={color}
        />

        {/* Micro face details - Sweet smiling side profile */}
        <path d="M 54.5 19.5 C 55 19.5 56.5 20.3 56.5 21 C 56.5 21.7 55 22.5 54.5 22.5" stroke="#1d1145" strokeWidth="1" strokeLinecap="round" fill="none" />
        <circle cx="55.5" cy="21.5" r="0.8" fill="#fda4af" />
      </motion.g>

      {/* Front Leg */}
      <motion.path 
        animate={{
          d: [
            "M43 52 L44 67 L41 83", // Landing
            "M43 51 L27 63 L15 75", // Drive
            "M43 52 L47 58 L42 72", // Contract
            "M43 51 L55 63 L65 79", // Reach
            "M43 52 L44 67 L41 83"  // Loop
          ]
        }}
        transition={{
          duration: cycleDuration,
          repeat: Infinity,
          ease: easePattern
        }}
        stroke={color} 
        strokeWidth="6.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Front Arm - Jogging gracefully */}
      <motion.path 
        animate={{
          d: [
            "M47 33 L55 43 L51 51", // Angle 1
            "M47 33 L53 46 L58 53", // Angle 2
            "M47 33 L38 43 L30 47", // Angle 3
            "M47 33 L45 45 L41 51", // Angle 4
            "M47 33 L55 43 L51 51"  // Loop
          ]
        }}
        transition={{
          duration: cycleDuration,
          repeat: Infinity,
          ease: easePattern
        }}
        stroke={color} 
        strokeWidth="5.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};
