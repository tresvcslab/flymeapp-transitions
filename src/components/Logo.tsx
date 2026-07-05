import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    sm: 'text-lg leading-tight',
    md: 'text-2xl leading-tight',
    lg: 'text-4xl leading-tight',
  };

  if (!hasError) {
    const logoHeight = size === 'sm' ? 'h-8' : size === 'md' ? 'h-14' : 'h-20';
    return (
      <div className={`flex justify-center items-center select-none z-30 ${className}`}>
        <img
          src="/logo_white_transparent.png"
          alt="Logo"
          className={`${logoHeight} w-auto object-contain drop-shadow-md`}
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  return (
    <div className={`font-black tracking-tighter flex flex-col items-center select-none text-white ${sizeClasses[size]} ${className}`}>
      <div className="flex items-baseline">
        <span>FL</span>
        <span className="ml-[-1px]">¥</span>
      </div>
      <div className="flex items-baseline mt-[-4px]">
        <span>M</span>
        <span className="ml-[-1px]">€</span>
      </div>
      <div className="flex items-baseline mt-[-4px]">
        <span>CA</span>
        <span className="ml-[-1px]">$</span>
        <span>H</span>
      </div>
    </div>
  );
};
