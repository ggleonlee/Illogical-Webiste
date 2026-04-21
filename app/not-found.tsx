import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">
        404
      </p>
      <h1 className="text-2xl font-medium text-neutral-800 mb-3">
        Page not found
      </h1>
      <p className="text-neutral-500 text-sm mb-6">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-4 py-2 text-sm bg-neutral-900 text-white rounded-md hover:bg-neutral-700 transition-colors"
      >
        Go home
      </Link>
    </main>
  );
}
