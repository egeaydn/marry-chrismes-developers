'use client';

import { motion } from 'framer-motion';
import { CommitCounter } from './CommitCounter';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

interface CommitCounterSectionProps {
  totalCommits: number;
  linesOfCode: number;
}

export function CommitCounterSection({ totalCommits, linesOfCode }: CommitCounterSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-b from-black to-zinc-900 px-4 py-20 relative">
      <div className="w-full max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Your <span className="text-cyan-400">2025</span> in Code
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 place-items-center">
          <CommitCounter value={totalCommits} label="Commits Pushed" />
          <CommitCounter value={linesOfCode} label="Lines of Code" />
        </div>
      </div>

      {/* Particle background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={
              prefersReducedMotion
                ? {}
                : {
                    y: [null, Math.random() * -500],
                    opacity: [0, 1, 0],
                  }
            }
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}
