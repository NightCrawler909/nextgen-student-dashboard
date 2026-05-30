export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
}

export interface NavItemType {
  label: string;
  icon: string;
  href: string;
}

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
}

export interface ActivityDay {
  date: string;
  count: number;
}
