import React from "react";

export default function IncorporationHero(): React.ReactElement {
  return (
    <section className="relative w-full py-16 px-6 md:px-12 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full">
        <div className="w-full h-full opacity-15 bg-gradient-to-br from-primary via-info to-secondary blur-[120px]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 transition-all duration-700 transform opacity-100 translate-x-0">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
                Company Incorporation
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
                Company Setup &amp; Shareholder Agreements
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide incorporation documents, shareholder contracts, partnership agreements, and joint venture arrangements for UK startups and SMEs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-white hover:border hover:border-cosmic-accent py-2 bg-primary text-white hover:bg-primary/90 h-12 px-6">
                Get Legal Support Now
              </button>
            </div>
          </div>

          <div className="transition-all duration-1000 delay-300 opacity-100 translate-x-0">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-medium mb-6 text-foreground">Incorporation Process</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-medium text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Company Formation</h4>
                    <p className="text-sm text-muted-foreground">Articles of Association and company registration</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-medium text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Shareholder Setup</h4>
                    <p className="text-sm text-muted-foreground">Agreements, certificates, and ownership structure</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-info/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-info font-medium text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Governance Framework</h4>
                    <p className="text-sm text-muted-foreground">Corporate policies and compliance setup</p>
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


