'use client';

import { motion, useSpring, useMotionValue, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

export function CommitCounter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { 
    stiffness: prefersReducedMotion ? 500 : 200, 
    damping: prefersReducedMotion ? 100 : 30 
  });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      mv.set(value);
    }
  }, [isInView, value, mv]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (v) => setDisplay(Math.round(v)));
    return () => unsubscribe();
  }, [spring]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center gap-2 w-full">
      <motion.div
        initial={prefersReducedMotion ? {} : { scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-6xl md:text-8xl font-bold font-mono text-cyan-400 text-center"
      >
        {display.toLocaleString()}
      </motion.div>
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-xl text-zinc-400 text-center"
      >
        {label}
      </motion.div>
    </div>
  );
}
