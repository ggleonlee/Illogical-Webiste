export default function CharcoalRule() {
  return (
    <div className="w-full py-3">
      <svg
        width="100%"
        height="20"
        viewBox="0 0 1440 20"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter id="charcoal-stroke" x="-2%" y="-150%" width="104%" height="400%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.025 0.08"
              numOctaves="3"
              seed="9"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="3"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <line
          x1="0"
          y1="10"
          x2="1440"
          y2="10"
          stroke="#1A1A18"
          strokeWidth="1.5"
          filter="url(#charcoal-stroke)"
        />
      </svg>
    </div>
  );
}
