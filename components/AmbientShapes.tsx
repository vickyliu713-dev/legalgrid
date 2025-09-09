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
          {/* One accent near top-left where whitespace is largest */}
          <svg className="absolute top-10 left-8 w-12 h-12 sm:w-16 sm:h-16 opacity-60" viewBox="0 0 100 100">
            <defs>
              <pattern id="hero-diag" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="4" height="10" fill={violet} />
              </pattern>
            </defs>
            <circle cx="50" cy="50" r="30" fill="url(#hero-diag)" />
          </svg>
          {/* Counter-balancing ring far right-middle */}
          <svg className="absolute right-8 top-1/3 w-16 h-16 sm:w-24 sm:h-24 opacity-30" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="28" stroke={lilac} strokeWidth="12" strokeDasharray="130 60" strokeLinecap="round"/>
          </svg>
        </>
      )}

      {variant === "services" && (
        <>
          {/* Single accent top-left only */}
          <svg className="absolute top-6 left-6 w-10 h-10 sm:w-14 sm:h-14 opacity-40" viewBox="0 0 100 100">
            <defs>
              <pattern id="diag" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="4" height="10" fill={violet}/>
              </pattern>
            </defs>
            <circle cx="50" cy="50" r="30" fill="url(#diag)" />
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
          {/* Single subtle arc - top right */}
          <svg className="absolute -top-2 right-6 w-16 h-16 sm:w-24 sm:h-24 opacity-25" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" stroke={violet} strokeOpacity=".35" strokeWidth="8" strokeDasharray="150 130" strokeLinecap="round"/>
          </svg>
        </>
      )}

      {variant === "faqs" && (
        <>
          {/* One small confetti bottom left only */}
          <svg className="absolute bottom-6 left-6 w-8 h-8 sm:w-10 sm:h-10 opacity-40" viewBox="0 0 40 40" fill={violet}>
            <circle cx="6" cy="34" r="3"/>
            <circle cx="16" cy="30" r="2"/>
          </svg>
        </>
      )}

      {variant === "contact" && (
        <>
          {/* Accent ribbon - top right only */}
          <svg className="absolute -top-4 right-0 w-28 h-16 sm:w-40 sm:h-20 opacity-30" viewBox="0 0 300 120" fill="none">
            <path d="M10 90c40-50 80-20 130-40 40-16 70-50 150-50" stroke={teal} strokeWidth="16" strokeLinecap="round"/>
          </svg>
        </>
      )}
    </div>
  );
}


