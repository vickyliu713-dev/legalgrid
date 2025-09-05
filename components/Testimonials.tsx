import React from "react";

export default function Testimonials(): JSX.Element {
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
          <button className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background border border-border hover:bg-muted/50 transition-colors shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left text-foreground"><path d="m15 18-6-6 6-6"></path></svg>
          </button>

          <div className="relative px-20 py-16">
            <div className="flex justify-center items-center relative">
              {/* Center card */}
              <div className="transition-all duration-700 relative z-30 scale-100 opacity-100">
                <div className="max-w-lg px-8 py-0 bg-white shadow-2xl transition-all duration-700 min-h-[320px]">
                  <div className="mb-4 text-center pt-8">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-primary inline-block mr-1 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-lg mb-4 text-gray-800 italic text-center leading-relaxed">
                    "LegalGrid prepared our shareholder agreement ahead of an investor meeting. Clear, precise, and delivered in just 72 hours."
                  </p>
                  <div className="flex items-center justify-center gap-4 pb-8">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                      alt="James"
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 text-lg">James</h4>
                      <p className="text-gray-600">SaaS Founder</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right card */}
              <div className="transition-all duration-700 absolute right-0 z-20 translate-x-1/2 scale-90 opacity-60">
                <div className="max-w-lg px-8 py-0 bg-white shadow-2xl transition-all duration-700 min-h-[320px]">
                  <div className="mb-4 text-center pt-8">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-primary inline-block mr-1 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-lg mb-4 text-gray-800 italic text-center leading-relaxed">
                    "As a small marketing agency, we needed client contracts that protected us. LegalGrid's agreements were clear, fair, and professional."
                  </p>
                  <div className="flex items-center justify-center gap-4 pb-8">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b39c1281?w=150&h=150&fit=crop&crop=face"
                      alt="Sarah"
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 text-lg">Sarah</h4>
                      <p className="text-gray-600">Agency Director</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Left card */}
              <div className="transition-all duration-700 absolute left-0 z-20 -translate-x-1/2 scale-90 opacity-60">
                <div className="max-w-lg px-8 py-0 bg-white shadow-2xl transition-all duration-700 min-h-[320px]">
                  <div className="mb-4 text-center pt-8">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-primary inline-block mr-1 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-lg mb-4 text-gray-800 italic text-center leading-relaxed">
                    "We launched our e-commerce business with full GDPR compliance thanks to LegalGrid. Everything was covered — terms, policies, and data protection agreements."
                  </p>
                  <div className="flex items-center justify-center gap-4 pb-8">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                      alt="Daniel"
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 text-lg">Daniel</h4>
                      <p className="text-gray-600">Retail Startup</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background border border-border hover:bg-muted/50 transition-colors shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right text-foreground"><path dName="m9 18 6-6-6-6"></path></svg>
          </button>
        </div>

        {/* Stats */}
        <div className="relative mt-16 pt-16 border-t border-border/20">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground mb-12 text-center animate-slide-in-left">
              Your Legal Partner for Growth
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="group text-center bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 hover:bg-card/70 transition-all duration-300 animate-scale-in" style={{ animationDelay: "0ms" }}>
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-3 bg-secondary/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 text-secondary"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-foreground">150+</div>
                    <p className="text-sm text-muted-foreground font-medium">UK startups &amp; SMEs supported</p>
                  </div>
                </div>
              </div>
              <div className="group text-center bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 hover:bg-card/70 transition-all duration-300 animate-scale-in" style={{ animationDelay: "150ms" }}>
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-3 bg-secondary/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-secondary"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-foreground">4.9/5</div>
                    <p className="text-sm text-muted-foreground font-medium">rating (200+ reviews)</p>
                  </div>
                </div>
              </div>
              <div className="group text-center bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 hover:bg-card/70 transition-all duration-300 animate-scale-in" style={{ animationDelay: "300ms" }}>
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-3 bg-secondary/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy text-secondary"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-foreground">#1</div>
                    <p className="text-sm text-muted-foreground font-medium">Rated for small business</p>
                  </div>
                </div>
              </div>
              <div className="group text-center bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 hover:bg-card/70 transition-all duration-300 animate-scale-in" style={{ animationDelay: "450ms" }}>
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-3 bg-secondary/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up text-secondary"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-foreground">98%</div>
                    <p className="text-sm text-muted-foreground font-medium">client satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


