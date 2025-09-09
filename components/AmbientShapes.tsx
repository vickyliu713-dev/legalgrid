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
  // Accent palette kept consistent across the site
  const violet = "#7C83FF"; // soft brand-adjacent violet
  const lilac = "#C9C8FF";
  const teal = "#22D3C5";
  const blue = "#4F8BFF";
  const yellow = "#F6D32D";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0">
      {variant === "hero" && (
        <>
          {/* Striped circle - top left */}
          <svg className="absolute top-8 left-6 w-12 h-12 sm:w-16 sm:h-16 opacity-60" viewBox="0 0 100 100">
            <defs>
              <pattern id="hero-diag" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="4" height="10" fill={violet} />
              </pattern>
            </defs>
            <circle cx="50" cy="50" r="30" fill="url(#hero-diag)" />
          </svg>
          {/* Sprinkles - top right */}
          <svg className="absolute top-10 right-10 w-10 h-10 sm:w-14 sm:h-14 opacity-50" viewBox="0 0 64 64" fill="none">
            <path d="M12 8c4 0 6 4 4 8-2 4-6 5-8 2-2-3 0-10 4-10Z" fill={violet}/>
            <path d="M28 6c3 1 4 5 2 8-2 3-5 4-7 1-2-3 2-10 5-9Z" fill={violet}/>
            <path d="M19 18c3-2 7-1 8 2 1 3-3 5-7 5-5 0-5-4-1-7Z" fill={violet}/>
          </svg>
          {/* Quarter rings - right middle */}
          <svg className="absolute right-6 top-1/3 w-16 h-16 sm:w-24 sm:h-24 opacity-30" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="28" stroke={lilac} strokeWidth="12" strokeDasharray="130 60" strokeLinecap="round"/>
          </svg>
          {/* Blue squiggle - bottom center */}
          <svg className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-8 sm:w-32 sm:h-10 opacity-60" viewBox="0 0 200 60" fill="none">
            <path d="M5 45c5-10 25-12 33 0 6 10-8 18 4 24 11 6 21-6 24-10" stroke={blue} strokeWidth="12" strokeLinecap="round" fill="none"/>
          </svg>
          {/* Dotted triangle - bottom left */}
          <svg className="absolute bottom-10 left-10 w-20 h-16 opacity-60 hidden sm:block" viewBox="0 0 140 100" fill={yellow}>
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

      {variant === "services" && (
        <>
          {/* Striped circle - top left */}
          <svg className="absolute top-6 left-6 w-10 h-10 sm:w-14 sm:h-14 opacity-40" viewBox="0 0 100 100">
            <defs>
              <pattern id="diag" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="4" height="10" fill={violet}/>
              </pattern>
            </defs>
            <circle cx="50" cy="50" r="30" fill="url(#diag)" />
          </svg>
          {/* Dotted triangle - bottom right */}
          <svg className="absolute bottom-6 right-6 w-16 h-14 sm:w-20 sm:h-16 opacity-60" viewBox="0 0 140 100" fill={yellow}>
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
          <svg className="absolute top-16 left-8 w-16 h-12 sm:w-20 sm:h-14 opacity-50" viewBox="0 0 120 80" fill="none">
            {[0, 1, 2, 3].map((i) => (
              <path key={i} d={`M10 ${10 + i * 16}h80a10 10 0 1 1-20 0h-40a10 10 0 1 1-20 0Z`} fill={teal}/>
            ))}
          </svg>
        </>
      )}

      {variant === "team" && (
        <>
          {/* Subtle arc - top right */}
          <svg className="absolute -top-2 right-6 w-16 h-16 sm:w-24 sm:h-24 opacity-25" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" stroke={violet} strokeOpacity=".35" strokeWidth="8" strokeDasharray="150 130" strokeLinecap="round"/>
          </svg>
        </>
      )}

      {variant === "faqs" && (
        <>
          {/* Confetti bottom left */}
          <svg className="absolute bottom-6 left-6 w-8 h-8 sm:w-10 sm:h-10 opacity-40" viewBox="0 0 40 40" fill={violet}>
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
          <svg className="absolute -top-4 right-0 w-28 h-16 sm:w-40 sm:h-20 opacity-30" viewBox="0 0 300 120" fill="none">
            <path d="M10 90c40-50 80-20 130-40 40-16 70-50 150-50" stroke={teal} strokeWidth="16" strokeLinecap="round"/>
          </svg>
        </>
      )}
    </div>
  );
}


