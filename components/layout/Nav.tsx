'use client';

import { useState, useEffect } from 'react';

const links = [
  { label: 'Bio', href: '#bio' },
  { label: 'Criterio', href: '#criterio' },
  { label: 'Services', href: '#services' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'Witnesses', href: '#witnesses' },
  { label: 'Chat', href: '#chat' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-[#F5F2EE] border-b border-[#1A1A18]/[0.08]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
          <a
            href="#home"
            className="font-sans font-light text-sm tracking-[0.18em] text-[#1A1A18] uppercase"
          >
            Illogical
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans text-sm text-[#1A1A18]/50 hover:text-[#1A1A18] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-[22px] h-px bg-[#1A1A18] block" />
            <span className="w-[22px] h-px bg-[#1A1A18] block" />
            <span className="w-[14px] h-px bg-[#1A1A18] block" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div
            className="absolute inset-0 bg-[#1A1A18]/20"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-[#F5F2EE] flex flex-col px-10 py-14">
            <div className="flex items-center justify-between mb-12">
              <span className="font-sans font-light text-xs tracking-[0.18em] text-[#1A1A18]/40 uppercase">
                Menu
              </span>
              <button
                onClick={() => setOpen(false)}
                className="font-sans text-xs text-[#1A1A18]/40 hover:text-[#1A1A18] transition-colors uppercase tracking-widest"
              >
                Close
              </button>
            </div>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-heading text-2xl text-[#1A1A18] py-4 border-b border-[#1A1A18]/[0.08] hover:text-[#2E9CC4] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
