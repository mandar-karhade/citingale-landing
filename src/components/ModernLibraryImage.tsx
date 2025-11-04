'use client';

import { useState } from 'react';

export default function ModernLibraryImage() {
  const [isHovering, setIsHovering] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleMouseEnter = () => {
    if (!hasScrolled) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setHasScrolled(false);
  };

  const handleAnimationEnd = () => {
    setHasScrolled(true);
  };

  return (
    <div 
      className="mb-8 overflow-hidden shadow-lg relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-[3000ms]"></div>
      <div 
        className={`w-full h-[400px] bg-cover bg-center transition-all duration-[15000ms] ease-linear ${isHovering ? 'bg-bottom' : 'bg-top'}`}
        style={{ backgroundImage: 'url("/modern-library-2.jpg")' }}
        onTransitionEnd={handleAnimationEnd}
      ></div>
    </div>
  );
}