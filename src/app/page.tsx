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
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) throw error;
    return data ?? [];
  } catch (e) {
    return [
      { id: '1', title: 'Advanced React Patterns', progress: 75, icon_name: 'Code2', created_at: new Date().toISOString() },
      { id: '2', title: 'System Design Fundamentals', progress: 42, icon_name: 'Server', created_at: new Date().toISOString() },
      { id: '3', title: 'TypeScript Deep Dive', progress: 91, icon_name: 'FileType', created_at: new Date().toISOString() },
      { id: '4', title: 'Node.js Microservices', progress: 28, icon_name: 'Network', created_at: new Date().toISOString() },
    ];
  }
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
    <div className="flex h-screen bg-[#0a0a0f] overflow-hidden">
      <Sidebar />
      <main className="flex-1 min-w-0 overflow-x-hidden overflow-y-auto">
        <div className="w-full max-w-[1400px] mx-auto p-6 md:p-8 lg:p-10 pb-16">
          <BentoGrid>
            <HeroTile name="Alex" streak={14} />
            <Suspense fallback={<Skeletons />}>
              <CoursesSection />
            </Suspense>
            <ActivityTile />
          </BentoGrid>
        </div>
      </main>
    </div>
  );
}
