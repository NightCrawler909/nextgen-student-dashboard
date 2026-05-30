'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { tile } from './BentoGrid';
import type { ActivityDay } from '@/lib/types';

const WEEKS = 12;
const DAYS_PER_WEEK = 7;
const TOTAL_DAYS = WEEKS * DAYS_PER_WEEK;

const intensityColors = [
  'bg-white/[0.04]',
  'bg-violet-900/60',
  'bg-violet-700/70',
  'bg-violet-500/80',
  'bg-violet-400',
] as const;

function mockActivity(): ActivityDay[] {
  return Array.from({ length: TOTAL_DAYS }, (_, i) => ({
    date: new Date(Date.now() - (TOTAL_DAYS - 1 - i) * 86400000).toISOString(),
    count: Math.floor(Math.random() * 5),
  }));
}

export default function ActivityTile() {
  const [mounted, setMounted] = useState(false);
  const activityData = useMemo(() => mockActivity(), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const weeks: ActivityDay[][] = [];
  for (let w = 0; w < WEEKS; w++) {
    weeks.push(activityData.slice(w * DAYS_PER_WEEK, (w + 1) * DAYS_PER_WEEK));
  }

  return (
    <motion.article
      variants={tile}
      className="relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-card p-5 card-grain"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-accent-cyan/[0.03] pointer-events-none" />

      <div className="relative z-10">
        <header className="flex items-center gap-3 mb-5">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-cyan-dim">
            <Activity size={20} className="text-accent-cyan" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text-primary tracking-tight">
              Activity
            </h3>
            <p className="text-xs text-text-muted mt-0.5">Last 12 weeks</p>
          </div>
        </header>

        <figure className="overflow-x-auto" aria-label="Activity contribution grid">
          <div className="flex gap-[3px]">
            {weeks.map((week, weekIdx) => (
              <div key={weekIdx} className="flex flex-col gap-[3px]">
                {week.map((day, dayIdx) => {
                  const count = mounted ? day.count : 0;
                  const title = mounted
                    ? `${new Date(day.date).toLocaleDateString()}: ${count} contributions`
                    : 'Loading...';

                  return (
                    <motion.div
                      key={`${weekIdx}-${dayIdx}`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        delay: 0.4 + (weekIdx * DAYS_PER_WEEK + dayIdx) * 0.008,
                        type: 'spring',
                        stiffness: 400,
                        damping: 20,
                      }}
                      className={`w-3 h-3 rounded-sm ${intensityColors[count]} transition-colors`}
                      title={title}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          <figcaption className="flex items-center gap-2 mt-3 text-[10px] text-text-muted">
            <span>Less</span>
            {intensityColors.map((color, i) => (
              <div key={i} className={`w-2.5 h-2.5 rounded-sm ${color}`} />
            ))}
            <span>More</span>
          </figcaption>
        </figure>
      </div>
    </motion.article>
  );
}
