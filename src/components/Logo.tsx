import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  isPremium?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', isPremium = false }) => {
  const logoHeight = size === 'sm' ? 'h-8' : size === 'md' ? 'h-14' : 'h-20';

  return (
    <div className={`flex justify-center items-center select-none z-30 ${className}`}>
      <img
        src={isPremium ? "/logo_black_transparent.png" : "/logo_white_transparent.png"}
        alt="Logo"
        className={`${logoHeight} w-auto object-contain drop-shadow-md`}
      />
    </div>
  );
};
