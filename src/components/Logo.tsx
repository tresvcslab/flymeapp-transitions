import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-lg leading-tight',
    md: 'text-2xl leading-tight',
    lg: 'text-4xl leading-tight',
  };

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
