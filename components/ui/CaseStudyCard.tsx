interface CaseStudyCardProps {
  problem: string;
  judgement: string;
  agency: string;
  outcome: string;
  witness: string;
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-8 py-5 grid grid-cols-[9rem_1fr] gap-8 items-baseline">
      <p className="text-[9px] font-sans uppercase tracking-[0.2em] text-[#1A1A18]/35 leading-tight">
        {label}
      </p>
      <p className="font-sans font-light text-sm text-[#1A1A18]/75 leading-relaxed">{value}</p>
    </div>
  );
}

export default function CaseStudyCard({
  problem,
  judgement,
  agency,
  outcome,
  witness,
}: CaseStudyCardProps) {
  return (
    <div className="border border-[#1A1A18]/[0.12] divide-y divide-[#1A1A18]/[0.06]">
      <Field label="Real problem" value={problem} />
      <Field label="Differential judgement" value={judgement} />
      <Field label="Stretched agency" value={agency} />
      <Field label="Lasting outcome" value={outcome} />
      <Field label="Impact witness" value={witness} />
    </div>
  );
}
