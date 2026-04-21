interface BioNodeProps {
  label: string;
  isLast?: boolean;
}

export default function BioNode({ label, isLast = false }: BioNodeProps) {
  return (
    <div className="flex items-start gap-5">
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-2.5 h-2.5 rounded-full border-2 border-[#1A1A18] mt-1" />
        {!isLast && <div className="w-px bg-[#1A1A18]/20 flex-1 min-h-[4rem]" />}
      </div>
      <p className="font-sans font-light text-sm text-[#1A1A18]/65 leading-relaxed pb-10">
        {label}
      </p>
    </div>
  );
}
