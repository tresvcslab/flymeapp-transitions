import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo';

interface SplashScreenProps {
  onAnimationComplete: () => void;
}

export default function SplashScreen({ onAnimationComplete }: SplashScreenProps) {
  // Check for PWA standalone mode
  useEffect(() => {
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;

    if (isStandalone) {
      // Fire immediately if in standalone mode
      onAnimationComplete();
    }
  }, [onAnimationComplete]);

  const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    (window.navigator as any).standalone === true;

  if (isStandalone) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        animate={{
          scale: [1, 1, 10],
          opacity: [1, 1, 0],
        }}
        transition={{
          scale: {
            duration: 3.6,
            times: [0, 0.83, 1],
            ease: [0.6, -0.05, 0.01, 0.99],
          },
          opacity: {
            duration: 3.6,
            times: [0, 0.83, 1],
            ease: "linear",
          },
        }}
        onAnimationComplete={onAnimationComplete}
      >
        <Logo size="lg" className="text-white" />
      </motion.div>
    </motion.div>
  );
}
