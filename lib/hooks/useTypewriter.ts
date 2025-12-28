'use client';

import { useState, useEffect } from 'react';

export function useTypewriter(text: string, speed = 40, startDelay = 0) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText('');
    setIsComplete(false);

    const startTimeout = setTimeout(() => {
      let currentIndex = 0;

      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(intervalId);
        }
      }, speed);

      return () => clearInterval(intervalId);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, startDelay]);

  return { displayText, isComplete };
}
