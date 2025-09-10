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
  const nextIndex = (index + 1) % count;
  const center = data[index];
  return (
    <section className="w-full py-20 px-6 md:px-12 relative overflow-hidden min-h-[360px]">

      <div className="max-w-7xl mx-auto space-y-4 relative z-10">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground">Trusted by 200+ UK Startups &amp; SMEs</h2>
          <div className="text-primary text-xl" aria-label="5 star rating">★★★★★</div>
        </div>

        <div className="relative mx-auto">
          <div className="px-4 sm:px-8 py-10">
            <div className="mx-auto bg-white shadow-xl rounded-2xl md:rounded-none md:shadow-2xl md:max-w-xl border border-border/60 md:border-0">
              <div className="mb-4 text-center pt-8">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-primary inline-block mr-1 text-xl">★</span>
                ))}
              </div>
              <p className="text-base sm:text-lg mb-4 text-gray-800 italic text-center leading-relaxed px-4">&quot;{center.quote}&quot;</p>
              <div className="flex items-center justify-center gap-4 pb-8 px-4">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 text-base sm:text-lg">{center.name}</h4>
                  <p className="text-gray-600 text-sm">{center.role}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6 gap-2 md:hidden">
              <button aria-label="Previous" className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" onClick={() => setIndex((index - 1 + count) % count)}></button>
              <button aria-label="Next" className="h-2.5 w-2.5 rounded-full bg-muted-foreground" onClick={() => setIndex(nextIndex)}></button>
            </div>
          </div>
        </div>

        {/* Growth stats section removed per request */}
      </div>
    </section>
  );
}


