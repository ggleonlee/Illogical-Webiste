import Nav from '@/components/layout/Nav';
import CharcoalRule from '@/components/ui/CharcoalRule';
import SectionLabel from '@/components/ui/SectionLabel';
import ServiceCard from '@/components/ui/ServiceCard';
import CaseStudyCard from '@/components/ui/CaseStudyCard';
import BioSection from '@/components/features/BioSection';
import CriterioSection from '@/components/features/CriterioSection';
import WitnessesSection from '@/components/features/WitnessesSection';

const consultingCards = [
  {
    name: '[Consulting service one]',
    description:
      '[One-line description of what this engagement addresses and who it is for]',
  },
  {
    name: '[Consulting service two]',
    description:
      '[One-line description of what this engagement addresses and who it is for]',
  },
  {
    name: '[Consulting service three]',
    description:
      '[One-line description of what this engagement addresses and who it is for]',
  },
];

const learningCards = [
  {
    name: '[Learning programme one]',
    description:
      '[One-line description of what this programme builds and who it is designed for]',
  },
  {
    name: '[Learning programme two]',
    description:
      '[One-line description of what this programme builds and who it is designed for]',
  },
  {
    name: '[Learning programme three]',
    description:
      '[One-line description of what this programme builds and who it is designed for]',
  },
];

const caseStudies = [
  {
    problem: '[The real problem — not the presenting one — that this engagement addressed]',
    judgement: '[The differential judgement that reframed the situation]',
    agency: '[What was stretched, challenged, or made possible that had not been before]',
    outcome: '[The lasting outcome — concrete, not abstract]',
    witness: '[Name · Role · Organisation]',
  },
  {
    problem: '[The real problem — a systemic pattern that had been misread for years]',
    judgement: '[The differential judgement — naming what others had avoided naming]',
    agency: '[What the organisation or individual was able to do that they could not before]',
    outcome: '[The lasting outcome — a decision, a structure, a capability that endures]',
    witness: '[Name · Role · Organisation]',
  },
];

const sideQuests = [
  {
    label: 'Pro bono',
    name: 'Gifted children & adults',
    description:
      '[One-line description of this pro bono line of work and who it reaches]',
  },
  {
    label: 'Book in progress',
    name: 'Futures Worth Following',
    description:
      '[One-line description of the book — its central argument and the reader it is written for]',
  },
  {
    label: 'Gatherings',
    name: 'Illogical',
    description:
      '[One-line description of what these gatherings are, who attends, and what happens in them]',
  },
];

export default function Page() {
  return (
    <>
      <Nav />

      <main className="pt-16">

        {/* HOME */}
        <section
          id="home"
          className="min-h-screen flex items-center px-6 md:px-16 py-24"
        >
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="font-heading text-[clamp(2.8rem,6vw,6.5rem)] text-[#1A1A18] leading-[1.08] mb-7 max-w-4xl">
              [Tagline — <em>a different kind</em>
              <br />
              of thinking about hard problems]
            </h1>
            <p className="font-sans font-light text-lg md:text-xl text-[#1A1A18]/50 mb-14 max-w-lg leading-relaxed">
              [One-line descriptor of what this is, who it is for, and what makes it different]
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="px-9 py-4 bg-[#1A1A18] text-[#F5F2EE] font-sans text-sm tracking-[0.06em] hover:bg-[#2E9CC4] transition-colors">
                Short answer
              </button>
              <button className="px-9 py-4 border border-[#1A1A18] text-[#1A1A18] font-sans text-sm tracking-[0.06em] hover:bg-[#1A1A18]/[0.04] transition-colors">
                Long answer
              </button>
            </div>
          </div>
        </section>

        {/* BIO */}
        <BioSection />

        {/* CRITERIO */}
        <CriterioSection />

        <CharcoalRule />

        {/* SERVICES */}
        <section id="services" className="py-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <SectionLabel>Services</SectionLabel>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-8">
              <div>
                <p className="font-heading text-2xl text-[#1A1A18] mb-7">Consulting</p>
                <div className="grid grid-cols-1 gap-4">
                  {consultingCards.map((card) => (
                    <ServiceCard key={card.name} {...card} />
                  ))}
                </div>
              </div>

              <div>
                <p className="font-heading text-2xl text-[#1A1A18] mb-7">Learning</p>
                <div className="grid grid-cols-1 gap-4">
                  {learningCards.map((card) => (
                    <ServiceCard key={card.name} {...card} />
                  ))}
                </div>
              </div>
            </div>

            <div className="border-l-4 border-[#2E9CC4] bg-[#A8D4E6]/[0.12] p-10 md:p-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <p className="text-[9px] font-sans uppercase tracking-[0.22em] text-[#2E9CC4] mb-4">
                  Open engagement
                </p>
                <h3 className="font-heading text-3xl md:text-4xl text-[#1A1A18] leading-snug max-w-xl">
                  [The never done before — an open-ended request for something that does not yet have a name]
                </h3>
              </div>
              <button className="flex-shrink-0 px-8 py-4 border border-[#2E9CC4] text-[#2E9CC4] font-sans text-sm tracking-[0.06em] hover:bg-[#2E9CC4] hover:text-[#F5F2EE] transition-colors self-start md:self-end">
                Start a conversation →
              </button>
            </div>
          </div>
        </section>

        <CharcoalRule />

        {/* OUTCOMES */}
        <section id="outcomes" className="py-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <SectionLabel>LASTING OUTCOMES</SectionLabel>
            <div className="space-y-6">
              {caseStudies.map((cs, i) => (
                <CaseStudyCard key={i} {...cs} />
              ))}
            </div>
          </div>
        </section>

        <CharcoalRule />

        {/* WITNESSES */}
        <WitnessesSection />

        <CharcoalRule />

        {/* CHAT */}
        <section id="chat" className="py-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <SectionLabel>Book a conversation</SectionLabel>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              {[
                {
                  duration: '20 min',
                  title: '[Short conversation]',
                  description: '[What this slot is for and what to bring to it]',
                },
                {
                  duration: '40 min',
                  title: '[Full session]',
                  description: '[What this slot is for and what to bring to it]',
                },
              ].map((slot) => (
                <div key={slot.duration} className="border border-[#1A1A18]/[0.12] p-10">
                  <p className="text-[9px] font-sans uppercase tracking-[0.22em] text-[#1A1A18]/35 mb-4">
                    {slot.duration}
                  </p>
                  <h3 className="font-heading text-2xl text-[#1A1A18] mb-3 leading-snug">
                    {slot.title}
                  </h3>
                  <p className="font-sans font-light text-sm text-[#1A1A18]/55 leading-relaxed mb-8">
                    {slot.description}
                  </p>
                  <div className="bg-[#1A1A18]/[0.03] border border-[#1A1A18]/[0.08] h-48 flex items-center justify-center">
                    <p className="text-xs font-sans text-[#1A1A18]/25 tracking-wide">
                      [Calendar embed]
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-[#2E9CC4] pl-10 py-6 mb-16">
              <p className="font-heading text-2xl md:text-3xl text-[#1A1A18] mb-3 leading-snug max-w-2xl">
                [Friday availability — a note on how Fridays are held and why that matters]
              </p>
              <p className="font-sans font-light text-sm text-[#1A1A18]/55 leading-relaxed max-w-xl">
                [A short explanation of the Friday cadence, what kind of conversations happen there,
                and how to request one]
              </p>
            </div>

            <div>
              <p className="text-[9px] font-sans uppercase tracking-[0.22em] text-[#1A1A18]/35 mb-3">
                Reason for chat
              </p>
              <textarea
                placeholder="[What brings you here? A problem, a question, a hunch — any of these is a good reason to write.]"
                className="w-full border border-[#1A1A18]/[0.15] bg-transparent p-5 text-sm font-sans font-light text-[#1A1A18] placeholder:text-[#1A1A18]/25 resize-none h-32 focus:outline-none focus:border-[#1A1A18]/35 transition-colors"
              />
            </div>
          </div>
        </section>

        <CharcoalRule />

        {/* SIDE QUESTS */}
        <section id="side-quests" className="py-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <SectionLabel>SIDE QUESTS</SectionLabel>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sideQuests.map((sq) => (
                <div key={sq.name} className="border border-[#1A1A18]/[0.10] p-8">
                  <p className="text-[9px] font-sans uppercase tracking-[0.2em] text-[#1A1A18]/30 mb-4">
                    {sq.label}
                  </p>
                  <h3 className="font-heading text-xl text-[#1A1A18] mb-3 leading-snug">
                    {sq.name}
                  </h3>
                  <p className="font-sans font-light text-sm text-[#1A1A18]/55 leading-relaxed">
                    {sq.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="px-6 md:px-16 pb-16">
          <div className="max-w-7xl mx-auto">
            <CharcoalRule />
            <p className="font-sans font-light text-xs text-[#1A1A18]/30 mt-6 tracking-wide">
              Illogical
            </p>
          </div>
        </div>

      </main>
    </>
  );
}
