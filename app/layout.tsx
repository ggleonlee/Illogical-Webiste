import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'My Project',
    template: '%s | My Project',
  },
  // TODO: replace placeholder title and description with real project content
  description: 'Base architecture scaffold. Project content coming soon.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  ),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'My Project',
    description: 'Base architecture scaffold. Project content coming soon.',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Project',
    description: 'Base architecture scaffold. Project content coming soon.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* TODO: implement cookie consent banner before enabling GA4 for
            EU/EEA users. Gate GoogleAnalytics on consent state.
            Persist consent in a server-set cookie, not localStorage. */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
          process.env.NODE_ENV === 'production' && (
            <GoogleAnalytics
              gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
            />
          )}
        {children}
      </body>
    </html>
  );
}
