import Sidebar from '@/components/sidebar/Sidebar';

export default function ProgressPage() {
  return (
    <div className="flex h-screen bg-bg-base overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex items-center justify-center">
        <p className="text-white/30 text-sm">Coming soon</p>
      </main>
    </div>
  );
}
