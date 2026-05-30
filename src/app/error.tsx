'use client';

import { useEffect } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Dashboard error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 text-center p-8 bg-bg-base">
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20">
        <AlertTriangle className="text-red-400" size={32} />
      </div>
      <div>
        <h2 className="text-xl font-semibold text-text-primary mb-2">
          Failed to load dashboard data
        </h2>
        <p className="text-sm text-text-secondary max-w-md">
          Could not connect to the database. Check your Supabase credentials in{' '}
          <code className="px-1.5 py-0.5 rounded bg-white/[0.06] text-xs font-mono text-accent-violet">
            .env.local
          </code>{' '}
          and try again.
        </p>
      </div>
      <button
        onClick={reset}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-violet text-white text-sm font-medium hover:bg-accent-violet/90 transition-colors"
      >
        <RotateCcw size={16} />
        Try again
      </button>
    </div>
  );
}
