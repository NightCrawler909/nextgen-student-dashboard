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
      whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      className="col-span-1 rounded-3xl border border-white/[0.06] bg-[#16161f] p-6 lg:p-8 xl:p-10 relative overflow-hidden group cursor-pointer flex flex-col justify-between min-h-[220px] lg:min-h-[280px]"
    >
      <div className="absolute inset-0 rounded-3xl border border-violet-500/0 group-hover:border-violet-500/40 transition-colors duration-300 pointer-events-none" />
      
      <div className="px-1 lg:px-2">
        <header className="flex items-start justify-between mb-6 lg:mb-8">
          <div className="p-3 lg:p-4 rounded-2xl bg-violet-500/10">
            <Icon className="text-violet-400 w-6 h-6 lg:w-8 lg:h-8" />
          </div>
          <span className="text-sm lg:text-base text-white/50 font-mono tabular-nums font-medium bg-white/[0.03] px-3 py-1.5 rounded-lg">{course.progress}%</span>
        </header>

        <h3 className="text-lg lg:text-2xl font-semibold text-white/90 mb-3 leading-snug tracking-tight">
          {course.title}
        </h3>
        
        <p className="text-sm lg:text-base text-white/40 mb-8 lg:mb-10 leading-relaxed">
          {course.progress >= 75 ? 'Almost there! Keep pushing.' : course.progress >= 40 ? 'Making great progress.' : 'Just started on this journey.'}
        </p>
      </div>

      <section className="mt-auto px-1 lg:px-2">
        <ProgressBar progress={course.progress} />
      </section>
    </motion.article>
  );
}
