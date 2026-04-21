const architecturePoints = [
  'Next.js App Router with TypeScript and React Server Components',
  'Tailwind CSS for styling with shadcn/ui component library',
  'Security headers: CSP, HSTS, X-Frame-Options, and more',
  'Google Analytics 4 via @next/third-parties (production-only)',
  'Dynamic sitemap.xml and robots.txt via Next.js Metadata API',
  'Open Graph and Twitter Card meta tags for social sharing',
  'Error boundaries at route and root level',
  'Middleware stub ready for auth and rate limiting',
  'ESLint, Prettier, and TypeScript strict mode enforced',
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white px-6 py-24 max-w-2xl mx-auto">

      <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
        Hello World
      </h1>

      <p className="text-base text-neutral-500 mb-12 leading-relaxed">
        This site is built on the following architecture:
      </p>

      <ul className="space-y-3">
        {architecturePoints.map((point) => (
          <li key={point} className="flex gap-3 text-sm text-neutral-600">
            <span className="text-neutral-300 select-none mt-0.5">–</span>
            {point}
          </li>
        ))}
      </ul>

    </main>
  );
}
