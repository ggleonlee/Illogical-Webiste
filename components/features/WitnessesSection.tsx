'use client';

import { useState } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import CharcoalRule from '@/components/ui/CharcoalRule';
import ReferenceCard from '@/components/ui/ReferenceCard';

const industries = ['Technology', 'Education', 'Finance', 'Healthcare'];
const countries = ['Spain', 'Mexico', 'Argentina', 'USA'];
const types = ['Client', 'Peer', 'Collaborator'];

interface Witness {
  name: string;
  role: string;
  industry: string;
  country: string;
  type: string;
  quote: string;
}

const witnesses: Witness[] = [
  {
    name: '[Name Surname]',
    role: '[Role · Organisation]',
    industry: 'Technology',
    country: 'Spain',
    type: 'Client',
    quote:
      '[Placeholder witness statement — a short observation about the nature of the work or the quality of thinking brought to it]',
  },
  {
    name: '[Name Surname]',
    role: '[Role · Organisation]',
    industry: 'Education',
    country: 'Mexico',
    type: 'Collaborator',
    quote:
      '[Placeholder witness statement — a short observation about the nature of the work or the quality of thinking brought to it]',
  },
  {
    name: '[Name Surname]',
    role: '[Role · Organisation]',
    industry: 'Finance',
    country: 'USA',
    type: 'Peer',
    quote:
      '[Placeholder witness statement — a short observation about the nature of the work or the quality of thinking brought to it]',
  },
  {
    name: '[Name Surname]',
    role: '[Role · Organisation]',
    industry: 'Healthcare',
    country: 'Argentina',
    type: 'Client',
    quote:
      '[Placeholder witness statement — a short observation about the nature of the work or the quality of thinking brought to it]',
  },
  {
    name: '[Name Surname]',
    role: '[Role · Organisation]',
    industry: 'Technology',
    country: 'Mexico',
    type: 'Collaborator',
    quote:
      '[Placeholder witness statement — a short observation about the nature of the work or the quality of thinking brought to it]',
  },
  {
    name: '[Name Surname]',
    role: '[Role · Organisation]',
    industry: 'Education',
    country: 'Spain',
    type: 'Peer',
    quote:
      '[Placeholder witness statement — a short observation about the nature of the work or the quality of thinking brought to it]',
  },
  {
    name: '[Name Surname]',
    role: '[Role · Organisation]',
    industry: 'Finance',
    country: 'USA',
    type: 'Client',
    quote:
      '[Placeholder witness statement — a short observation about the nature of the work or the quality of thinking brought to it]',
  },
  {
    name: '[Name Surname]',
    role: '[Role · Organisation]',
    industry: 'Technology',
    country: 'Argentina',
    type: 'Collaborator',
    quote:
      '[Placeholder witness statement — a short observation about the nature of the work or the quality of thinking brought to it]',
  },
];

type FilterKey = 'industry' | 'country' | 'type';

const filterGroups: { key: FilterKey; label: string; values: string[] }[] = [
  { key: 'industry', label: 'Industry', values: industries },
  { key: 'country', label: 'Country', values: countries },
  { key: 'type', label: 'Type', values: types },
];

const patterns = [
  '[Pattern statement one — a recurring observation about how people in positions of authority avoid the real question]',
  '[Pattern statement two — a recurring observation about what organisations resist even when they say they want change]',
  '[Pattern statement three — a recurring observation about where lasting outcomes actually begin]',
];

export default function WitnessesSection() {
  const [activeFilter, setActiveFilter] = useState<{
    key: FilterKey;
    value: string;
  } | null>(null);

  const filtered = activeFilter
    ? witnesses.filter((w) => w[activeFilter.key] === activeFilter.value)
    : witnesses;

  const toggle = (key: FilterKey, value: string) => {
    if (activeFilter?.key === key && activeFilter?.value === value) {
      setActiveFilter(null);
    } else {
      setActiveFilter({ key, value });
    }
  };

  const isActive = (key: FilterKey, value: string) =>
    activeFilter?.key === key && activeFilter?.value === value;

  return (
    <section id="witnesses" className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>Witnesses</SectionLabel>

        <div className="space-y-10 mb-20">
          {patterns.map((pattern, i) => (
            <p
              key={i}
              className="font-heading text-3xl md:text-4xl text-[#1A1A18] leading-[1.2] max-w-3xl"
            >
              {pattern}
            </p>
          ))}
        </div>

        <CharcoalRule />

        <div className="mt-14">
          <div className="flex flex-col gap-5 mb-10">
            {filterGroups.map((group) => (
              <div key={group.key} className="flex items-start gap-5">
                <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-[#1A1A18]/35 w-16 pt-1 flex-shrink-0">
                  {group.label}
                </span>
                <div className="flex gap-2 flex-wrap">
                  {group.values.map((v) => (
                    <button
                      key={v}
                      onClick={() => toggle(group.key, v)}
                      className={`px-3 py-1 text-xs font-sans border transition-colors ${
                        isActive(group.key, v)
                          ? 'bg-[#1A1A18] text-[#F5F2EE] border-[#1A1A18]'
                          : 'border-[#1A1A18]/[0.18] text-[#1A1A18]/55 hover:border-[#1A1A18]/40 hover:text-[#1A1A18]/80'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {filtered.map((w, i) => (
              <ReferenceCard
                key={i}
                name={w.name}
                role={w.role}
                industry={w.industry}
                country={w.country}
                type={w.type}
                quote={w.quote}
              />
            ))}
          </div>

          <button className="font-sans text-sm text-[#1A1A18] border-b border-[#1A1A18]/30 hover:border-[#1A1A18] transition-colors pb-0.5">
            Add your witness →
          </button>
        </div>
      </div>
    </section>
  );
}
