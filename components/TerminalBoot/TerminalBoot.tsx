'use client';

import { motion } from 'framer-motion';
import { useTypewriter } from '@/lib/hooks/useTypewriter';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

const terminalLines = [
  '> Initializing 2025 Developer Rewind...',
  '> Loading commit history...',
  '> Analyzing bug fixes...',
  '> Calculating caffeine consumption...',
  '> Ready.',
];

export function TerminalBoot({ onCompleteAction }: { onCompleteAction?: () => void }) {
  const prefersReducedMotion = useReducedMotion();
  const { displayText: line1, isComplete: complete1 } = useTypewriter(terminalLines[0], 30, 0);
  const { displayText: line2, isComplete: complete2 } = useTypewriter(terminalLines[1], 30, complete1 ? 100 : 999999);
  const { displayText: line3, isComplete: complete3 } = useTypewriter(terminalLines[2], 30, complete2 ? 100 : 999999);
  const { displayText: line4, isComplete: complete4 } = useTypewriter(terminalLines[3], 30, complete3 ? 100 : 999999);
  const { displayText: line5, isComplete: complete5 } = useTypewriter(terminalLines[4], 30, complete4 ? 100 : 999999);

  // Call onCompleteAction when all lines are done
  if (complete5 && onCompleteAction) {
    setTimeout(onCompleteAction, 500);
  }

  return (
    <motion.section
      initial={prefersReducedMotion ? {} : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-black px-4"
    >
      <div className="w-full max-w-3xl mx-auto">
        <motion.div
          className="relative bg-zinc-900 rounded-lg border border-zinc-800 shadow-2xl overflow-hidden"
          initial={prefersReducedMotion ? {} : { scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800 border-b border-zinc-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="ml-2 text-sm text-zinc-400 font-mono">commit-rewind.sh</span>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-sm space-y-2 min-h-75">
            {line1 && (
              <div className="text-green-400">
                {line1}
                {!complete1 && <span className="animate-pulse">_</span>}
              </div>
            )}
            {line2 && (
              <div className="text-green-400">
                {line2}
                {!complete2 && <span className="animate-pulse">_</span>}
              </div>
            )}
            {line3 && (
              <div className="text-green-400">
                {line3}
                {!complete3 && <span className="animate-pulse">_</span>}
              </div>
            )}
            {line4 && (
              <div className="text-green-400">
                {line4}
                {!complete4 && <span className="animate-pulse">_</span>}
              </div>
            )}
            {line5 && (
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-cyan-400 font-bold"
              >
                {line5}
                {!complete5 && <span className="animate-pulse">_</span>}
              </motion.div>
            )}

            {complete5 && (
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <button
                  onClick={onCompleteAction}
                  className="px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded transition-colors"
                >
                  Begin Rewind →
                </button>
              </motion.div>
            )}
          </div>

          {/* Scanline effect */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-white to-transparent h-2 animate-scan" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
