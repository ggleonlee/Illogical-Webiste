interface ServiceCardProps {
  name: string;
  description: string;
}

export default function ServiceCard({ name, description }: ServiceCardProps) {
  return (
    <div className="border border-[#1A1A18]/[0.12] p-8 flex flex-col">
      <h3 className="font-heading text-xl text-[#1A1A18] mb-3 leading-snug">{name}</h3>
      <p className="font-sans font-light text-sm text-[#1A1A18]/60 leading-relaxed flex-1 mb-6">
        {description}
      </p>
      <span className="text-xs font-sans text-[#2E9CC4] tracking-wide self-start">
        Learn more →
      </span>
    </div>
  );
}
