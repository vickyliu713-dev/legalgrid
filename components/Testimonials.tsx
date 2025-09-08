"use client";

import React, { useState } from "react";

export default function Testimonials(): React.ReactElement {
  const [active, setActive] = useState<"center" | "left" | "right">("center");
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
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground">
            Trusted by 200+ UK Startups &amp; SMEs
          </h2>
          <p className="text-muted-foreground text-lg">
            From tech to finance, hundreds of companies trust LegalGrid to scale their
            business.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">

          <div className="relative px-20 py-16">
            <div className="flex justify-center items-center relative">
              {/* Center card */}
              <div className={`transition-all duration-500 relative z-30 ${active === "center" ? "scale-100 opacity-100" : "scale-90 opacity-60"}`}>
                <div className="max-w-lg px-8 py-0 bg-white shadow-2xl transition-all duration-700 min-h-[320px]">
                  <div className="mb-4 text-center pt-8">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-primary inline-block mr-1 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-lg mb-4 text-gray-800 italic text-center leading-relaxed">
                    &quot;LegalGrid prepared our shareholder agreement ahead of an investor meeting. Clear, precise, and delivered in just 72 hours.&quot;
                  </p>
                  <div className="flex items-center justify-center gap-4 pb-8">
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 text-lg">James</h4>
                      <p className="text-gray-600">SaaS Founder</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right card */}
              <div className={`transition-all duration-500 absolute right-0 z-20 ${active === "right" ? "translate-x-0 scale-100 opacity-100 z-30" : "translate-x-1/2 scale-90 opacity-60"}`}
                   onClick={() => setActive("right")} role="button" aria-label="Show testimonial">
                <div className="max-w-lg px-8 py-0 bg-white shadow-2xl transition-all duration-700 min-h-[320px]">
                  <div className="mb-4 text-center pt-8">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-primary inline-block mr-1 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-lg mb-4 text-gray-800 italic text-center leading-relaxed">
                    &quot;As a small marketing agency, we needed client contracts that protected us. LegalGrid&apos;s agreements were clear, fair, and professional.&quot;
                  </p>
                  <div className="flex items-center justify-center gap-4 pb-8">
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 text-lg">Sarah</h4>
                      <p className="text-gray-600">Agency Director</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Left card */}
              <div className={`transition-all duration-500 absolute left-0 z-20 ${active === "left" ? "translate-x-0 scale-100 opacity-100 z-30" : "-translate-x-1/2 scale-90 opacity-60"}`}
                   onClick={() => setActive("left")} role="button" aria-label="Show testimonial">
                <div className="max-w-lg px-8 py-0 bg-white shadow-2xl transition-all duration-700 min-h-[320px]">
                  <div className="mb-4 text-center pt-8">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-primary inline-block mr-1 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-lg mb-4 text-gray-800 italic text-center leading-relaxed">
                    &quot;We launched our e-commerce business with full GDPR compliance thanks to LegalGrid. Everything was covered — terms, policies, and data protection agreements.&quot;
                  </p>
                  <div className="flex items-center justify-center gap-4 pb-8">
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 text-lg">Daniel</h4>
                      <p className="text-gray-600">Retail Startup</p>
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


