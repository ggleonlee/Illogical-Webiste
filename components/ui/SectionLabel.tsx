export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[9px] font-sans uppercase tracking-[0.22em] text-[#1A1A18]/40 mb-8">
      {children}
    </p>
  );
}
