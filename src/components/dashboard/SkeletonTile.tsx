export default function SkeletonTile() {
  return (
    <div className="rounded-2xl border border-border-subtle bg-bg-card p-5 animate-pulse">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-white/[0.06]" />
        <div className="flex-1 space-y-2">
          <div className="h-3 rounded-full bg-white/[0.06] w-3/4" />
          <div className="h-2 rounded-full bg-white/[0.06] w-1/2" />
        </div>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.06] w-full" />
    </div>
  );
}
