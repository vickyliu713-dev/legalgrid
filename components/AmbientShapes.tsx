import React from "react";

type AmbientShapesProps = {
  variant?:
    | "hero"
    | "services"
    | "team"
    | "industries"
    | "faqs"
    | "contact";
};

// Lightweight decorative SVGs to add subtle visual interest.
// These are aria-hidden and pointer-events-none.
export default function AmbientShapes({ variant }: AmbientShapesProps): React.ReactElement {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {variant === "hero" && (
        <>
          {/* Sprinkles - top left */}
          <svg className="absolute -top-2 left-2 w-16 h-16 opacity-50" viewBox="0 0 64 64" fill="none">
            <path d="M12 8c4 0 6 4 4 8-2 4-6 5-8 2-2-3 0-10 4-10Z" fill="#7C83FF"/>
            <path d="M28 6c3 1 4 5 2 8-2 3-5 4-7 1-2-3 2-10 5-9Z" fill="#7C83FF"/>
            <path d="M19 18c3-2 7-1 8 2 1 3-3 5-7 5-5 0-5-4-1-7Z" fill="#7C83FF"/>
          </svg>
          {/* Quarter ring - right middle */}
          <svg className="absolute right-4 top-1/3 w-24 h-24 opacity-30" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="28" stroke="#7C83FF" strokeWidth="12" strokeDasharray="130 60" strokeLinecap="round"/>
          </svg>
          {/* Blue squiggle - bottom center */}
          <svg className="absolute bottom-6 left-1/2 -translate-x-1/2 w-32 h-10 opacity-50" viewBox="0 0 200 60" fill="none">
            <path d="M5 45c5-10 25-12 33 0 6 10-8 18 4 24 11 6 21-6 24-10" stroke="#4F8BFF" strokeWidth="12" strokeLinecap="round" fill="none"/>
          </svg>
        </>
      )}

      {variant === "services" && (
        <>
          {/* Striped circle - top left */}
          <svg className="absolute top-4 left-4 w-14 h-14 opacity-40" viewBox="0 0 100 100">
            <defs>
              <pattern id="diag" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="4" height="10" fill="#7C83FF"/>
              </pattern>
            </defs>
            <circle cx="50" cy="50" r="30" fill="url(#diag)" />
          </svg>
          {/* Dotted triangle - bottom right */}
          <svg className="absolute bottom-6 right-6 w-20 h-16 opacity-60" viewBox="0 0 140 100" fill="#F6D32D">
            {Array.from({ length: 6 }).map((_, r) => (
              <g key={r}>
                {Array.from({ length: r + 1 }).map((__, c) => (
                  <circle key={c} cx={20 + c * 20 + (5 - r) * 10} cy={20 + r * 16} r="4" />
                ))}
              </g>
            ))}
          </svg>
        </>
      )}

      {variant === "industries" && (
        <>
          {/* Waves - left of heading */}
          <svg className="absolute top-20 left-8 w-20 h-14 opacity-40" viewBox="0 0 120 80" fill="none">
            {[0, 1, 2, 3].map((i) => (
              <path key={i} d={`M10 ${10 + i * 16}h80a10 10 0 1 1-20 0h-40a10 10 0 1 1-20 0Z`} fill="#22D3C5"/>
            ))}
          </svg>
        </>
      )}

      {variant === "team" && (
        <>
          {/* Subtle arc - top right */}
          <svg className="absolute -top-2 right-6 w-24 h-24 opacity-20" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" stroke="#0d2840" strokeOpacity=".25" strokeWidth="8" strokeDasharray="150 130" strokeLinecap="round"/>
          </svg>
        </>
      )}

      {variant === "faqs" && (
        <>
          {/* Confetti bottom left */}
          <svg className="absolute bottom-6 left-6 w-10 h-10 opacity-40" viewBox="0 0 40 40" fill="#7C83FF">
            <circle cx="6" cy="34" r="3"/>
            <circle cx="16" cy="30" r="2"/>
            <circle cx="10" cy="24" r="2"/>
            <circle cx="22" cy="36" r="2"/>
          </svg>
        </>
      )}

      {variant === "contact" && (
        <>
          {/* Accent ribbon - top right */}
          <svg className="absolute -top-4 right-0 w-40 h-20 opacity-25" viewBox="0 0 300 120" fill="none">
            <path d="M10 90c40-50 80-20 130-40 40-16 70-50 150-50" stroke="#22D3C5" strokeWidth="16" strokeLinecap="round"/>
          </svg>
        </>
      )}
    </div>
  );
}


