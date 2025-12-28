'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ProductionIncident } from '@/lib/types';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

interface ProductionMomentSectionProps {
  incident: ProductionIncident;
}

export function ProductionMomentSection({ incident }: ProductionMomentSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<'error' | 'fixing' | 'resolved'>('error');

  // Progress through phases when in view
  if (isInView && phase === 'error') {
    setTimeout(() => setPhase('fixing'), 1500);
  }
  if (phase === 'fixing') {
    setTimeout(() => setPhase('resolved'), 2000);
  }

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-black px-4 py-20 relative overflow-hidden">
      {/* Background flash effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={
          phase === 'error' && !prefersReducedMotion
            ? { opacity: [0, 0.3, 0, 0.3, 0] }
            : { opacity: 0 }
        }
        transition={{ duration: 1, times: [0, 0.2, 0.4, 0.6, 1] }}
        className="absolute inset-0 bg-red-600 pointer-events-none"
      />

      <div className="w-full max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            That <span className="text-red-500">One Moment</span>
          </h2>
          <p className="text-zinc-400 text-lg">When production decided to take a break...</p>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? {} : { scale: 0.9, opacity: 0 }}
          animate={
            isInView
              ? prefersReducedMotion
                ? { opacity: 1, scale: 1 }
                : phase === 'error'
                ? { scale: [0.9, 1.02, 0.98, 1], opacity: 1 }
                : { scale: 1, opacity: 1 }
              : {}
          }
          transition={{ duration: 0.5 }}
          className={`relative bg-zinc-900 rounded-xl border-2 overflow-hidden ${
            phase === 'error'
              ? 'border-red-500'
              : phase === 'fixing'
              ? 'border-yellow-500'
              : 'border-green-500'
          }`}
        >
          {/* Terminal-style incident display */}
          <div className={`px-6 py-4 ${
            phase === 'error'
              ? 'bg-red-500/10'
              : phase === 'fixing'
              ? 'bg-yellow-500/10'
              : 'bg-green-500/10'
          }`}>
            <div className="flex items-center gap-3">
              {phase === 'error' && (
                <motion.svg
                  animate={prefersReducedMotion ? {} : { rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: 2 }}
                  className="w-8 h-8 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </motion.svg>
              )}
              {phase === 'fixing' && (
                <motion.svg
                  animate={prefersReducedMotion ? {} : { rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </motion.svg>
              )}
              {phase === 'resolved' && (
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, type: "spring" }}
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </motion.svg>
              )}
              <span
                className={`font-mono text-lg font-bold ${
                  phase === 'error'
                    ? 'text-red-500'
                    : phase === 'fixing'
                    ? 'text-yellow-500'
                    : 'text-green-500'
                }`}
              >
                {phase === 'error' && 'ERROR 500'}
                {phase === 'fixing' && 'DEPLOYING HOTFIX...'}
                {phase === 'resolved' && 'RESOLVED ✓'}
              </span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">{incident.title}</h3>
            <p className="text-zinc-400">{incident.description}</p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-zinc-800 rounded-lg p-4">
                <div className="text-sm text-zinc-500 mb-1">Impact</div>
                <div className="text-lg font-semibold text-red-400">{incident.impact}</div>
              </div>
              <div className="bg-zinc-800 rounded-lg p-4">
                <div className="text-sm text-zinc-500 mb-1">Resolution Time</div>
                <div className="text-lg font-semibold text-green-400">{incident.resolutionTime}min</div>
              </div>
            </div>

            {phase === 'resolved' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="pt-4 border-t border-zinc-800"
              >
                <p className="text-center text-zinc-500 italic">
                  "Another successful fire drill. Coffee count: ∞"
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
