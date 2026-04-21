const implemented = [
  {
    title: 'Hosting & deployment',
    items: [
      'Railway – auto-deploy on git push to main',
      'GitHub – remote repository and deployment trigger',
      'Node.js LTS – runtime, version pinned in .nvmrc',
    ],
  },
  {
    title: 'Framework & routing',
    items: [
      'Next.js latest – App Router, file-system routing',
      'TypeScript – strict mode, no implicit any',
      'React Server Components – default rendering model',
    ],
  },
  {
    title: 'Styling & components',
    items: [
      'Tailwind CSS – utility-first, configured via PostCSS',
      'shadcn/ui – component library via CLI, source owned by this project',
      'Radix UI – accessible headless primitives via shadcn',
    ],
  },
  {
    title: 'Analytics',
    items: [
      'Google Analytics 4 – via @next/third-parties',
      'Production-only – gated on NODE_ENV and measurement ID',
      'GDPR consent stub – placeholder ready for implementation',
    ],
  },
  {
    title: 'SEO & crawlers',
    items: [
      'Metadata API – title template, description, Open Graph, Twitter Card',
      'robots.ts – dynamic robots.txt, all crawlers allowed',
      'sitemap.ts – dynamic sitemap.xml',
      'llms.txt – LLM agent discoverability at /llms.txt',
    ],
  },
  {
    title: 'Security',
    items: [
      'Content-Security-Policy – XSS defence, GA4 domains whitelisted',
      'X-Frame-Options: DENY – clickjacking prevention',
      'X-Content-Type-Options: nosniff – MIME sniffing prevention',
      'Referrer-Policy: strict-origin-when-cross-origin',
      'Permissions-Policy – camera, microphone, geolocation disabled',
      'Strict-Transport-Security – HSTS, 2-year max-age, preload',
    ],
  },
  {
    title: 'Error handling',
    items: [
      'error.tsx – runtime error boundary with reset',
      'global-error.tsx – root-level error boundary',
      'not-found.tsx – 404 handler',
    ],
  },
  {
    title: 'Code quality',
    items: [
      'TypeScript strict mode – no any, explicit types',
      'ESLint next/core-web-vitals – zero warnings',
      'Prettier – consistent formatting via .prettierrc',
      'Conventional Commits – git message format',
    ],
  },
];

const upcoming = [
  'PostgreSQL via Railway – managed database',
  'Prisma ORM – schema, migrations, type-safe queries',
  'NextAuth.js – authentication and session management',
  'GDPR cookie consent UI – EU/EEA compliance gate',
  'Custom domain – DNS and TLS via Railway',
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 max-w-5xl mx-auto">

      <header className="mb-14">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-2xl font-medium tracking-tight text-neutral-900">
            Base Architecture
          </h1>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-neutral-100 text-neutral-500 border border-neutral-200">
            v1 scaffold
          </span>
        </div>
        <p className="text-sm text-neutral-400">
          Architecture overview – replace this page when project content is ready.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-5">
          Implemented
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {implemented.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-neutral-200 p-5"
            >
              <h3 className="text-sm font-medium text-neutral-800 mb-3">
                {group.title}
              </h3>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-neutral-500 flex gap-2"
                  >
                    <span className="text-neutral-300 select-none">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-5">
          Upcoming
        </h2>
        <div className="rounded-lg border border-dashed border-neutral-200 p-5">
          <ul className="space-y-1.5">
            {upcoming.map((item) => (
              <li key={item} className="text-xs text-neutral-400 flex gap-2">
                <span className="text-neutral-300 select-none">–</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

    </main>
  );
}
