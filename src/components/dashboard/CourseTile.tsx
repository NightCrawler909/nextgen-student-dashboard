'use client';

import { motion } from 'framer-motion';
import { getLucideIcon } from '@/lib/utils';
import ProgressBar from '@/components/ui/ProgressBar';
import { tile } from './BentoGrid';
import type { Course } from '@/lib/types';

interface CourseTileProps {
  course: Course;
}

function getProgressColor(progress: number): string {
  if (progress >= 80) return 'text-accent-emerald';
  if (progress >= 50) return 'text-accent-violet';
  return 'text-accent-cyan';
}

export default function CourseTile({ course }: CourseTileProps) {
  const Icon = getLucideIcon(course.icon_name);

  return (
    <motion.article
      variants={tile}
      whileHover={{
        scale: 1.02,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 20,
        },
      }}
      className="relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-card p-5 cursor-pointer group card-grain"
    >
      <div className="absolute inset-0 rounded-2xl border border-accent-violet/0 group-hover:border-accent-violet/40 transition-colors duration-300 pointer-events-none z-20" />

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-accent-violet/[0.03] pointer-events-none" />

      <div className="relative z-10">
        <header className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-violet-dim">
            <Icon size={20} className={getProgressColor(course.progress)} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-text-primary truncate tracking-tight">
              {course.title}
            </h3>
            <p className="text-xs text-text-muted mt-0.5">
              {course.progress >= 80
                ? 'Almost there!'
                : course.progress >= 50
                  ? 'Good progress'
                  : 'Keep going'}
            </p>
          </div>
        </header>

        <ProgressBar progress={course.progress} />
      </div>
    </motion.article>
  );
}
