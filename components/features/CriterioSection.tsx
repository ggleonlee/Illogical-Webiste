'use client';

import { useState } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';

const tabs = ['Articles', 'Long reads', 'Case Studies', 'Trazos'] as const;
type Tab = (typeof tabs)[number];

interface Card {
  title: string;
  tag: string;
  description: string;
  type: Tab;
}

const cards: Card[] = [
  {
    type: 'Articles',
    title: '[Article title — a short precise claim]',
    tag: 'Article',
    description: '[One-line description of what this piece argues or observes]',
  },
  {
    type: 'Articles',
    title: '[Article title — on a recurring misreading]',
    tag: 'Article',
    description: '[One-line description of what this piece argues or observes]',
  },
  {
    type: 'Articles',
    title: '[Article title — against a common assumption]',
    tag: 'Article',
    description: '[One-line description of what this piece argues or observes]',
  },
  {
    type: 'Articles',
    title: '[Article title — on the cost of clarity too soon]',
    tag: 'Article',
    description: '[One-line description of what this piece argues or observes]',
  },
  {
    type: 'Long reads',
    title: '[Long read — a sustained argument over multiple turns]',
    tag: 'Long read',
    description: '[One-line description of this extended essay or investigation]',
  },
  {
    type: 'Long reads',
    title: '[Long read — rethinking a foundational concept]',
    tag: 'Long read',
    description: '[One-line description of this extended essay or investigation]',
  },
  {
    type: 'Long reads',
    title: '[Long read — a field study in misdirected effort]',
    tag: 'Long read',
    description: '[One-line description of this extended essay or investigation]',
  },
  {
    type: 'Long reads',
    title: '[Long read — where diagnosis ends and judgment begins]',
    tag: 'Long read',
    description: '[One-line description of this extended essay or investigation]',
  },
  {
    type: 'Case Studies',
    title: '[Case study — a problem that looked like one thing]',
    tag: 'Case study',
    description: '[One-line description of the situation and what shifted]',
  },
  {
    type: 'Case Studies',
    title: '[Case study — when the brief was wrong]',
    tag: 'Case study',
    description: '[One-line description of the situation and what shifted]',
  },
  {
    type: 'Case Studies',
    title: '[Case study — a lasting outcome from an unlikely entry point]',
    tag: 'Case study',
    description: '[One-line description of the situation and what shifted]',
  },
  {
    type: 'Case Studies',
    title: '[Case study — reframing a stuck organisation]',
    tag: 'Case study',
    description: '[One-line description of the situation and what shifted]',
  },
  {
    type: 'Trazos',
    title: '[Trazo — a note on what cannot be systematised]',
    tag: 'Trazo',
    description: '[One-line description of this trace, fragment, or marginal observation]',
  },
  {
    type: 'Trazos',
    title: '[Trazo — a short observation from the edge of a conversation]',
    tag: 'Trazo',
    description: '[One-line description of this trace, fragment, or marginal observation]',
  },
  {
    type: 'Trazos',
    title: '[Trazo — on the difference between precision and correctness]',
    tag: 'Trazo',
    description: '[One-line description of this trace, fragment, or marginal observation]',
  },
  {
    type: 'Trazos',
    title: '[Trazo — a question that stays open]',
    tag: 'Trazo',
    description: '[One-line description of this trace, fragment, or marginal observation]',
  },
];

export default function CriterioSection() {
  const [active, setActive] = useState<Tab>('Articles');
  const filtered = cards.filter((c) => c.type === active);

  return (
    <section id="criterio" className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>CRITERIO — Differential Judgement</SectionLabel>

        <div className="flex gap-7 mb-10 border-b border-[#1A1A18]/[0.08]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`pb-3.5 text-sm font-sans tracking-wide transition-colors whitespace-nowrap ${
                active === tab
                  ? 'text-[#1A1A18] border-b-2 border-[#1A1A18] -mb-px'
                  : 'text-[#1A1A18]/40 hover:text-[#1A1A18]/65'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-none">
          {filtered.map((card) => (
            <div
              key={card.title}
              className="flex-shrink-0 w-72 border border-[#1A1A18]/[0.12] p-7"
            >
              <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-[#2E9CC4] block mb-3">
                {card.tag}
              </span>
              <h3 className="font-heading text-lg text-[#1A1A18] mb-3 leading-snug">
                {card.title}
              </h3>
              <p className="text-xs font-sans font-light text-[#1A1A18]/55 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
