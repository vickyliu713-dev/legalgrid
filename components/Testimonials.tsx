"use client";

import React, { useState } from "react";

export type Testimonial = { quote: string; name: string; role: string };

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "LegalGrid drafted our shareholder agreement in time for an investor pitch. It gave everyone confidence and avoided weeks of negotiation.",
    name: "Alex",
    role: "Fintech Founder",
  },
  {
    quote:
      "As co-founders, we wanted clarity from the start. LegalGrid delivered a founder agreement that set everything out clearly. Huge relief.",
    name: "Priya & Tom",
    role: "Agency Owners",
  },
  {
    quote:
      "Our joint venture agreement was thorough and easy to work with. LegalGrid understood our industry and protected us in all the right places.",
    name: "Martin",
    role: "Construction Director",
  },
];

export default function Testimonials({ testimonials }: { testimonials?: Testimonial[] }): React.ReactElement {
  const data = testimonials ?? DEFAULT_TESTIMONIALS;
  const [index, setIndex] = useState<number>(0);
  const count = data.length;
  const prevIndex = (index - 1 + count) % count;
  const nextIndex = (index + 1) % count;

  const center = data[index];
  const left = data[prevIndex];
  const right = data[nextIndex];
  return (
    <section
      className="w-full py-20 px-6 md:px-12 relative overflow-hidden min-h-[400px]"
      style={{
        background:
          "linear-gradient(to bottom, hsl(var(--background)) 0%, hsl(var(--background)) 70%, rgba(255, 255, 255, 0.2) 90%, rgba(255, 255, 255, 0.4) 100%)",
      }}
    >
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full">
        <div className="w-full h-full opacity-20 bg-gradient-to-r from-primary via-info to-secondary blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-4 relative z-10">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground">Trusted by 200+ UK Startups &amp; SMEs</h2>
          <div className="text-primary text-xl" aria-label="5 star rating">★★★★★</div>
        </div>

        <div className="relative max-w-6xl mx-auto">

          <div className="relative px-20 py-16">
            <div className="flex justify-center items-center relative">
              {/* Center card */}
              <div className={`transition-all duration-500 relative z-30 scale-100 opacity-100`}>
                <div className="max-w-lg px-8 py-0 bg-white shadow-2xl transition-all duration-700 min-h-[320px]">
                  <div className="mb-4 text-center pt-8">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-primary inline-block mr-1 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-lg mb-4 text-gray-800 italic text-center leading-relaxed">&quot;{center.quote}&quot;</p>
                  <div className="flex items-center justify-center gap-4 pb-8">
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 text-lg">{center.name}</h4>
                      <p className="text-gray-600">{center.role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right card */}
              <div
                className={`transition-all duration-500 absolute right-0 z-20 translate-x-1/2 scale-90 opacity-60 cursor-pointer hover:opacity-80`}
                onClick={() => setIndex(nextIndex)}
                role="button"
                aria-label="Next testimonial"
              >
                <div className="max-w-lg px-8 py-0 bg-white shadow-2xl transition-all duration-700 min-h-[320px]">
                  <div className="mb-4 text-center pt-8">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-primary inline-block mr-1 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-lg mb-4 text-gray-800 italic text-center leading-relaxed">&quot;{right.quote}&quot;</p>
                  <div className="flex items-center justify-center gap-4 pb-8">
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 text-lg">{right.name}</h4>
                      <p className="text-gray-600">{right.role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Left card */}
              <div
                className={`transition-all duration-500 absolute left-0 z-20 -translate-x-1/2 scale-90 opacity-60 cursor-pointer hover:opacity-80`}
                onClick={() => setIndex(prevIndex)}
                role="button"
                aria-label="Previous testimonial"
              >
                <div className="max-w-lg px-8 py-0 bg-white shadow-2xl transition-all duration-700 min-h-[320px]">
                  <div className="mb-4 text-center pt-8">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-primary inline-block mr-1 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-lg mb-4 text-gray-800 italic text-center leading-relaxed">&quot;{left.quote}&quot;</p>
                  <div className="flex items-center justify-center gap-4 pb-8">
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 text-lg">{left.name}</h4>
                      <p className="text-gray-600">{left.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrows removed per request */}
        </div>

        {/* Growth stats section removed per request */}
      </div>
    </section>
  );
}


