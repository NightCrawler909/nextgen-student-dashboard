'use client';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { useMemo } from 'react';
import { tile } from './BentoGrid';

function getColor(count: number): string {
  if (count === 0) return 'bg-white/[0.05]';
  if (count === 1) return 'bg-violet-900';
  if (count === 2) return 'bg-violet-700';
  if (count === 3) return 'bg-violet-500';
  return 'bg-violet-400';
}

function generateData() {
  return Array.from({ length: 84 }, (_, i) => ({
    date: new Date(Date.now() - (83 - i) * 86400000).toISOString().split('T')[0],
    count: Math.floor(Math.random() * 5),
  }));
}

export default function ActivityTile() {
  const data = useMemo(() => generateData(), []);

  // Reshape flat array into 7 rows × 12 columns
  const weeks = Array.from({ length: 12 }, (_, weekIdx) =>
    Array.from({ length: 7 }, (_, dayIdx) => data[weekIdx * 7 + dayIdx])
  );

  return (
    <motion.article
      variants={tile}
      className="col-span-1 md:col-span-2 lg:col-span-3 rounded-2xl border border-white/[0.06] bg-[#16161f] p-5"
    >
      <header className="flex items-center gap-2 mb-4">
        <Activity size={16} className="text-cyan-400" />
        <h2 className="text-sm font-semibold text-white">Activity</h2>
        <span className="text-xs text-white/30">Last 12 weeks</span>
      </header>

      <figure>
        {/* Grid: 12 columns (weeks) × 7 rows (days) */}
        <div className="flex gap-1">
          {weeks.map((week, weekIdx) => (
            <div key={weekIdx} className="flex flex-col gap-1">
              {week.map((day, dayIdx) => (
                <motion.div
                  key={dayIdx}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: (weekIdx * 7 + dayIdx) * 0.004 }}
                  className={`w-3 h-3 rounded-sm ${getColor(day.count)}`}
                  title={`${day.date}: ${day.count}`}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-1.5 mt-3">
          <span className="text-[10px] text-white/30">Less</span>
          {[0, 1, 2, 3, 4].map(level => (
            <div key={level} className={`w-3 h-3 rounded-sm ${getColor(level)}`} />
          ))}
          <span className="text-[10px] text-white/30">More</span>
        </div>
      </figure>
    </motion.article>
  );
}
