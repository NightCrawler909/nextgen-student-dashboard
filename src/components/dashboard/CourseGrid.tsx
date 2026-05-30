import type { Course } from '@/lib/types';
import CourseTile from './CourseTile';

interface CourseGridProps {
  courses: Course[];
}

export default function CourseGrid({ courses }: CourseGridProps) {
  return (
    <>
      {courses.map((course) => (
        <CourseTile key={course.id} course={course} />
      ))}
    </>
  );
}
