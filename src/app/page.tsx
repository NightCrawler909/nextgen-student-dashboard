import { Suspense } from 'react';
import { createClient } from '@/lib/supabase/server';
import type { Course } from '@/lib/types';
import Sidebar from '@/components/sidebar/Sidebar';
import BentoGrid from '@/components/dashboard/BentoGrid';
import HeroTile from '@/components/dashboard/HeroTile';
import CourseGrid from '@/components/dashboard/CourseGrid';
import ActivityTile from '@/components/dashboard/ActivityTile';
import SkeletonTile from '@/components/dashboard/SkeletonTile';

async function getCourses(): Promise<Course[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    return [
      { id: '1', title: 'Advanced React Patterns', progress: 75, icon_name: 'Code2', created_at: new Date().toISOString() },
      { id: '2', title: 'System Design Fundamentals', progress: 42, icon_name: 'Server', created_at: new Date().toISOString() },
      { id: '3', title: 'TypeScript Deep Dive', progress: 91, icon_name: 'FileType', created_at: new Date().toISOString() },
      { id: '4', title: 'Node.js Microservices', progress: 28, icon_name: 'Network', created_at: new Date().toISOString() },
    ];
  }

  return data ?? [];
}

async function CoursesSection() {
  const courses = await getCourses();
  return <CourseGrid courses={courses} />;
}

function Skeletons() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, i) => (
        <SkeletonTile key={i} />
      ))}
    </>
  );
}

export default async function DashboardPage() {
  return (
    <div className="flex h-screen bg-bg-base overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-24 md:pb-6">
        <BentoGrid>
          <HeroTile name="Alex" streak={14} />
          <Suspense fallback={<Skeletons />}>
            <CoursesSection />
          </Suspense>
          <ActivityTile />
        </BentoGrid>
      </main>
    </div>
  );
}
