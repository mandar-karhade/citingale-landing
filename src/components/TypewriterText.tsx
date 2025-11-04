'use client';


import React, { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  typeSpeed: number;
  pauseBetweenPhrases: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, typeSpeed, pauseBetweenPhrases, className }) => {
  const [displayText, setDisplayText] = useState('');
  const phrases = text.split('|');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[currentPhraseIndex];

    if (displayText !== currentPhrase) {
      if (displayText.length === 0) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, 1));
        }, typeSpeed);
      } else if (displayText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, typeSpeed);
      }
    } else if (currentPhraseIndex < phrases.length - 1) {
      timer = setTimeout(() => {
        setDisplayText('');
        setCurrentPhraseIndex(currentPhraseIndex + 1);
      }, pauseBetweenPhrases);
    }

    return () => clearTimeout(timer);
  }, [displayText, currentPhraseIndex, phrases, typeSpeed, pauseBetweenPhrases]);

  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.offsetHeight;
      containerRef.current.style.height = `${height}px`;
    }
  }, []);
  return (
    <div 
      ref={containerRef} 
      className={`${className} relative whitespace-nowrap`} 
      style={{ minHeight: '1.5em', minWidth: '400px' }} // Adjust minWidth as needed
    >
      <div className="absolute inset-0">{displayText}</div>
    </div>
  );
};

export default TypewriterText;