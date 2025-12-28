'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { DeveloperStats } from '@/lib/types';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

interface StatsCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  delay?: number;
}

function StatsCard({ icon, value, label, delay = 0 }: StatsCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -5 }}
      className="relative group"
    >
      {/* Glassmorphism card */}
      <div className="relative bg-zinc-900/50 backdrop-blur-lg border border-zinc-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="text-cyan-400">{icon}</div>
            <motion.div
              initial={prefersReducedMotion ? {} : { rotate: 0 }}
              animate={isInView && !prefersReducedMotion ? { rotate: 360 } : {}}
              transition={{ duration: 1, delay: delay + 0.3 }}
              className="w-2 h-2 bg-cyan-400 rounded-full"
            />
          </div>
          
          <div className="text-3xl font-bold font-mono text-white mb-2">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </div>
          
          <div className="text-sm text-zinc-400">{label}</div>
        </div>
      </div>
    </motion.div>
  );
}

interface StatsSectionProps {
  stats: DeveloperStats;
}

export function StatsSection({ stats }: StatsSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="min-h-screen bg-linear-to-b from-zinc-900 to-black px-4 py-20 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Developer <span className="text-cyan-400">Insights</span>
          </h2>
          <p className="text-zinc-400 text-lg">The numbers that tell your story</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatsCard
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            }
            value={stats.totalCommits}
            label="Total Commits"
            delay={0}
          />

          <StatsCard
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            value={stats.lateNightCommits}
            label="Late Night Commits"
            delay={0.1}
          />

          <StatsCard
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
            value={stats.weekendCommits}
            label="Weekend Warrior"
            delay={0.2}
          />

          <StatsCard
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            }
            value={stats.totalBugsFixed}
            label="Bugs Squashed"
            delay={0.3}
          />

          <StatsCard
            icon={
              <span className="text-3xl">☕</span>
            }
            value={stats.coffeeConsumed}
            label="Cups of Coffee"
            delay={0.4}
          />

          <StatsCard
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            value={stats.productionHotfixes}
            label="Emergency Hotfixes"
            delay={0.5}
          />
        </div>

        {/* Favorite commit type highlight */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-zinc-900/50 backdrop-blur-lg border border-zinc-800 rounded-full px-8 py-4">
            <span className="text-zinc-400">Your favorite commit type: </span>
            <span className="text-cyan-400 font-bold uppercase">{stats.favoriteCommitType}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
