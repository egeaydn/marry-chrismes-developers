'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bug } from '@/lib/types';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

interface BugTimelineSectionProps {
  bugs: Bug[];
}

function BugItem({ bug, index }: { bug: Bug; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  const severityColor = {
    critical: 'from-red-500 to-red-700',
    high: 'from-orange-500 to-orange-700',
    medium: 'from-yellow-500 to-yellow-700',
    low: 'from-green-500 to-green-700',
  }[bug.severity];

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? {} : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Timeline connector */}
      <div className="flex-1 flex items-center">
        <motion.div
          initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`h-0.5 w-full bg-linear-to-r ${index % 2 === 0 ? severityColor : `${severityColor} bg-linear-to-l`}`}
          style={{ originX: index % 2 === 0 ? 0 : 1 }}
        />
      </div>

      {/* Bug card */}
      <motion.div
        initial={prefersReducedMotion ? {} : { scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="relative group"
      >
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-lg p-4 w-64 hover:border-cyan-500 transition-colors cursor-pointer">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{bug.emoji}</span>
            <div className="flex-1">
              <div className={`text-xs font-semibold uppercase tracking-wide ${
                bug.severity === 'critical' ? 'text-red-400' :
                bug.severity === 'high' ? 'text-orange-400' :
                bug.severity === 'medium' ? 'text-yellow-400' :
                'text-green-400'
              }`}>
                {bug.severity}
              </div>
            </div>
          </div>
          
          <h4 className="text-sm font-semibold text-white mb-2">{bug.name}</h4>
          
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{bug.timeToFix}min to fix</span>
          </div>

          {/* Fixed checkmark */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1"
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Empty space for alignment */}
      <div className="flex-1" />
    </motion.div>
  );
}

export function BugTimelineSection({ bugs }: BugTimelineSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="min-h-screen bg-zinc-950 px-4 py-20 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Bugs <span className="text-red-400">Squashed</span>
          </h2>
          <p className="text-zinc-400 text-lg">Every bug fixed is a victory 🎯</p>
        </motion.div>

        {/* Timeline center line */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 -translate-x-1/2" />
          
          <div className="space-y-12">
            {bugs.map((bug, index) => (
              <BugItem key={bug.id} bug={bug} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
