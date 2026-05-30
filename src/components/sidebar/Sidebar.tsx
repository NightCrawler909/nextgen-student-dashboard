'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, LayoutGroup } from 'framer-motion';
import { ChevronLeft, GraduationCap } from 'lucide-react';
import NavItem from './NavItem';
import type { NavItemType } from '@/lib/types';

const navItems: NavItemType[] = [
  { label: 'Dashboard', icon: 'LayoutDashboard', href: '/' },
  { label: 'Courses', icon: 'BookOpen', href: '/courses' },
  { label: 'Progress', icon: 'TrendingUp', href: '/progress' },
  { label: 'Calendar', icon: 'Calendar', href: '/calendar' },
  { label: 'Settings', icon: 'Settings', href: '/settings' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width <= 1024);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-border-subtle bg-bg-surface/95 backdrop-blur-lg px-2 py-1"
        aria-label="Main navigation"
      >
        <LayoutGroup>
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              isActive={pathname === item.href}
              collapsed={false}
              isMobile
            />
          ))}
        </LayoutGroup>
      </nav>
    );
  }

  const isCollapsed = isTablet || collapsed;

  return (
    <motion.aside
      animate={{ width: isCollapsed ? 72 : 256 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="relative flex flex-col h-screen border-r border-border-subtle bg-bg-surface shrink-0 overflow-hidden"
      aria-label="Sidebar"
    >
      <div className="flex items-center gap-3 px-4 py-5 border-b border-border-subtle">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-violet/15">
          <GraduationCap size={22} className="text-accent-violet" />
        </div>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="overflow-hidden"
          >
            <h1 className="text-sm font-semibold text-text-primary tracking-tight whitespace-nowrap">
              LearnHub
            </h1>
            <p className="text-[11px] text-text-muted whitespace-nowrap">Student Portal</p>
          </motion.div>
        )}
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1" aria-label="Main navigation">
        <LayoutGroup>
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              isActive={pathname === item.href}
              collapsed={isCollapsed}
            />
          ))}
        </LayoutGroup>
      </nav>

      {!isTablet && (
        <div className="px-3 py-4 border-t border-border-subtle">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex items-center justify-center w-full p-2.5 rounded-xl text-text-secondary hover:text-text-primary hover:bg-white/[0.04] transition-colors"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <motion.div
              animate={{ rotate: collapsed ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <ChevronLeft size={18} />
            </motion.div>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="ml-3 text-xs font-medium whitespace-nowrap"
              >
                Collapse
              </motion.span>
            )}
          </button>
        </div>
      )}
    </motion.aside>
  );
}
