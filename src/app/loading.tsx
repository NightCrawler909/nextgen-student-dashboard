import SkeletonTile from '@/components/dashboard/SkeletonTile';

export default function Loading() {
  return (
    <div className="flex h-screen bg-bg-base">
      <div className="hidden md:block w-16 lg:w-64 border-r border-border-subtle animate-pulse bg-bg-surface shrink-0" />
      <main className="flex-1 p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2 rounded-2xl border border-border-subtle bg-bg-card p-8 animate-pulse">
            <div className="h-8 rounded-lg bg-white/[0.06] w-2/3 mb-3" />
            <div className="h-4 rounded-lg bg-white/[0.06] w-1/3" />
          </div>
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonTile key={i} />
          ))}
          <div className="rounded-2xl border border-border-subtle bg-bg-card p-5 animate-pulse">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06]" />
              <div className="h-3 rounded-full bg-white/[0.06] w-1/3" />
            </div>
            <div className="grid grid-cols-12 gap-1">
              {Array.from({ length: 84 }).map((_, i) => (
                <div key={i} className="w-3 h-3 rounded-sm bg-white/[0.04]" />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
