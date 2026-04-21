'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-medium text-neutral-800 mb-3">
        Something went wrong
      </h1>
      <p className="text-neutral-500 text-sm mb-6">
        An unexpected error occurred. Try again or come back later.
      </p>
      <button
        onClick={reset}
        className="px-4 py-2 text-sm bg-neutral-900 text-white rounded-md hover:bg-neutral-700 transition-colors"
      >
        Try again
      </button>
    </main>
  );
}
