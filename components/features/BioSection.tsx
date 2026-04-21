import CharcoalRule from '@/components/ui/CharcoalRule';
import SectionLabel from '@/components/ui/SectionLabel';
import BioNode from '@/components/ui/BioNode';

const nodes = [
  '[Biography node — earliest formative experience or intellectual origin]',
  '[Biography node — a significant discipline or domain entered and mastered]',
  '[Biography node — a key professional inflection point or break]',
  '[Biography node — a period of independent work, research, or risk]',
  '[Biography node — a collaboration or context that changed the frame]',
  '[Biography node — current ground — what is being built now and why]',
];

const messages = [
  { from: 'user', text: '[Sample question about background or intellectual formation]' },
  {
    from: 'assistant',
    text: '[Placeholder response — how this person thinks about their own story and the thread running through it]',
  },
  { from: 'user', text: '[Follow-up question about a specific period or choice]' },
];

export default function BioSection() {
  return (
    <>
      <CharcoalRule />

      <section id="bio" className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Biography</SectionLabel>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              {nodes.map((label, i) => (
                <BioNode key={i} label={label} isLast={i === nodes.length - 1} />
              ))}
            </div>

            <div className="border border-[#1A1A18]/[0.12] flex flex-col min-h-[480px]">
              <div className="border-b border-[#1A1A18]/[0.08] px-6 py-4 flex items-center justify-between">
                <span className="font-sans text-sm text-[#1A1A18]/60">
                  Ask about the biography
                </span>
                <span className="text-[9px] font-sans uppercase tracking-[0.18em] text-[#A8D4E6] border border-[#A8D4E6] px-2 py-1">
                  Coming soon
                </span>
              </div>

              <div className="flex-1 p-6 space-y-5 overflow-y-auto">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-3 text-sm font-sans font-light leading-relaxed ${
                        msg.from === 'user'
                          ? 'bg-[#1A1A18] text-[#F5F2EE]'
                          : 'bg-[#1A1A18]/[0.05] text-[#1A1A18]/70'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#1A1A18]/[0.08] p-4 flex gap-3">
                <input
                  type="text"
                  placeholder="[Ask a question…]"
                  disabled
                  className="flex-1 bg-transparent text-sm font-sans font-light text-[#1A1A18] placeholder:text-[#1A1A18]/25 focus:outline-none disabled:cursor-not-allowed"
                />
                <button
                  disabled
                  className="px-4 py-2 text-xs font-sans uppercase tracking-[0.1em] text-[#1A1A18]/25 border border-[#1A1A18]/[0.12] disabled:cursor-not-allowed"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CharcoalRule />
    </>
  );
}
