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
      className="col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl border border-white/[0.06] bg-[#16161f] p-8 lg:p-12 relative overflow-hidden flex flex-col justify-center min-h-[280px] lg:min-h-[360px]"
    >
      <div
        className="absolute -top-8 -right-8 w-56 h-56 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, #06b6d4 100%)',
          animation: 'blob-drift 8s ease-in-out infinite alternate',
        }}
      />

      <div className="relative z-10 px-2 lg:px-4">
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 tracking-tight">
          Welcome back, {name} 👋
        </h1>
        <p className="text-base lg:text-lg text-white/50 mb-10 lg:mb-14 max-w-xl leading-relaxed">
          Keep up the momentum — your consistency is paying off.
        </p>
        <div className="flex items-center gap-8 lg:gap-12">
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="p-3 lg:p-5 rounded-3xl bg-orange-500/10">
              <Flame className="text-orange-400 w-6 h-6 lg:w-8 lg:h-8" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl lg:text-4xl font-bold text-white tracking-tight">{streak}</span>
              <span className="text-sm lg:text-base text-white/40 font-medium uppercase tracking-wider mt-1">day streak</span>
            </div>
          </div>
          
          <div className="w-px h-12 lg:h-16 bg-white/[0.06]" />

          <div className="flex items-center gap-4 lg:gap-6">
            <div className="p-3 lg:p-5 rounded-3xl bg-yellow-500/10">
              <Zap className="text-yellow-400 w-6 h-6 lg:w-8 lg:h-8" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl lg:text-4xl font-bold text-white tracking-tight">2,450</span>
              <span className="text-sm lg:text-base text-white/40 font-medium uppercase tracking-wider mt-1">XP earned</span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
