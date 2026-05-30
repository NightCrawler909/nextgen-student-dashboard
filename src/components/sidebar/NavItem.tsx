'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { getLucideIcon, cn } from '@/lib/utils';
import type { NavItemType } from '@/lib/types';

interface NavItemProps {
  item: NavItemType;
  isActive: boolean;
  collapsed: boolean;
  isMobile?: boolean;
}

export default function NavItem({ item, isActive, collapsed, isMobile = false }: NavItemProps) {
  const Icon = getLucideIcon(item.icon);

  if (isMobile) {
    return (
      <Link
        href={item.href}
        className={cn(
          'relative flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-xl transition-colors',
          isActive ? 'text-accent-violet' : 'text-text-secondary hover:text-text-primary'
        )}
        aria-current={isActive ? 'page' : undefined}
        aria-label={item.label}
      >
        <AnimatePresence>
          {isActive && (
            <motion.div
              layoutId="nav-active-bg"
              className="absolute inset-0 rounded-xl bg-accent-violet/10 border border-accent-violet/20"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
        </AnimatePresence>
        <Icon size={20} className="relative z-10" aria-hidden="true" />
        <span className="relative z-10 text-[10px] font-medium">{item.label}</span>
      </Link>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        'relative flex items-center gap-3 w-full rounded-xl transition-colors',
        collapsed ? 'justify-center p-3' : 'px-4 py-3',
        isActive ? 'text-accent-violet' : 'text-text-secondary hover:text-text-primary'
      )}
      aria-current={isActive ? 'page' : undefined}
      aria-label={collapsed ? item.label : undefined}
      title={collapsed ? item.label : undefined}
    >
      <AnimatePresence>
        {isActive && (
          <motion.div
            layoutId="nav-active-bg"
            className="absolute inset-0 rounded-xl bg-accent-violet/10 border border-accent-violet/20"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
      </AnimatePresence>
      <Icon size={20} className="relative z-10 shrink-0" aria-hidden="true" />
      {!collapsed && (
        <motion.span
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 'auto' }}
          exit={{ opacity: 0, width: 0 }}
          className="relative z-10 text-sm font-medium whitespace-nowrap overflow-hidden"
        >
          {item.label}
        </motion.span>
      )}
    </Link>
  );
}
