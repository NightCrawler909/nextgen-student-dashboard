'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <section aria-label={`Progress: ${progress}%`}>
      <div className="flex items-center justify-between mb-3 lg:mb-4">
        <span className="text-sm lg:text-base text-text-secondary font-medium">Progress</span>
        <span className="text-sm lg:text-base font-semibold text-text-primary">{progress}%</span>
      </div>
      <div ref={ref} className="h-2.5 lg:h-3 w-full rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? progress / 100 : 0 }}
          style={{ transformOrigin: 'left' }}
          transition={{
            duration: 1.2,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 0.3,
          }}
        />
      </div>
    </section>
  );
}
