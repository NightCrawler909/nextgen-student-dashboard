'use client';

import { motion } from 'framer-motion';
import { Flame, Zap } from 'lucide-react';
import { tile } from './BentoGrid';

interface HeroTileProps {
  name: string;
  streak: number;
}

export default function HeroTile({ name, streak }: HeroTileProps) {
  return (
    <motion.article
      variants={tile}
      className="relative col-span-1 md:col-span-2 overflow-hidden rounded-2xl border border-border-subtle bg-bg-card p-6 lg:p-8 card-grain"
    >
      <div
        className="absolute inset-0 opacity-30 animate-blob-shift rounded-2xl"
        style={{
          background:
            'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(6,182,212,0.1) 50%, rgba(139,92,246,0.15) 100%)',
          backgroundSize: '200% 200%',
        }}
      />

      <div
        className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, #06b6d4 100%)',
          animation: 'blob-drift 8s ease-in-out infinite alternate',
        }}
      />
      <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-accent-cyan/8 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <header className="mb-4">
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-text-primary mb-1">
            Welcome back, {name} 👋
          </h2>
          <p className="text-sm text-text-secondary">
            Keep up the momentum — your consistency is paying off.
          </p>
        </header>

        <div className="flex items-center gap-6 mt-6">
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-accent-violet-dim border border-accent-violet/20">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <Flame size={22} className="text-orange-400" />
            </motion.div>
            <div>
              <p className="text-lg font-semibold text-text-primary leading-none">{streak}</p>
              <p className="text-[11px] text-text-secondary mt-0.5">day streak</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-accent-cyan-dim border border-accent-cyan/20">
            <Zap size={20} className="text-accent-cyan" />
            <div>
              <p className="text-lg font-semibold text-text-primary leading-none">2,450</p>
              <p className="text-[11px] text-text-secondary mt-0.5">XP earned</p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
