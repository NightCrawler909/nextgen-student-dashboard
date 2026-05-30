import {
  Code2,
  Server,
  FileType,
  Network,
  BookOpen,
  LayoutDashboard,
  TrendingUp,
  Calendar,
  Settings,
  Flame,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Activity,
  GraduationCap,
  Zap,
  RotateCcw,
  type LucideProps,
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import type { FC } from 'react';

const iconMap: Record<string, FC<LucideProps>> = {
  Code2,
  Server,
  FileType,
  Network,
  BookOpen,
  LayoutDashboard,
  TrendingUp,
  Calendar,
  Settings,
  Flame,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Activity,
  GraduationCap,
  Zap,
  RotateCcw,
};

export function getLucideIcon(name: string): FC<LucideProps> {
  return iconMap[name] ?? BookOpen;
}

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
