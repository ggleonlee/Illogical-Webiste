interface ReferenceCardProps {
  name: string;
  role: string;
  industry: string;
  country: string;
  type: string;
  quote: string;
}

export default function ReferenceCard({
  name,
  role,
  industry,
  country,
  type,
  quote,
}: ReferenceCardProps) {
  return (
    <div className="border border-[#1A1A18]/[0.12] p-7">
      <p className="font-sans font-light text-sm text-[#1A1A18]/65 leading-relaxed italic mb-6">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="border-t border-[#1A1A18]/[0.08] pt-4">
        <p className="font-sans font-medium text-sm text-[#1A1A18]">{name}</p>
        <p className="font-sans font-light text-xs text-[#1A1A18]/50 mt-0.5">{role}</p>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-[9px] font-sans uppercase tracking-[0.18em] text-[#2E9CC4]">
            {industry}
          </span>
          <span className="text-[#1A1A18]/25 text-xs">·</span>
          <span className="text-[9px] font-sans uppercase tracking-[0.18em] text-[#1A1A18]/40">
            {country}
          </span>
          <span className="text-[#1A1A18]/25 text-xs">·</span>
          <span className="text-[9px] font-sans uppercase tracking-[0.18em] text-[#1A1A18]/40">
            {type}
          </span>
        </div>
      </div>
    </div>
  );
}
