import React from "react";

export default function Team(): React.ReactElement {
  return (
    <section className="relative w-full py-16 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full">
        <div className="w-full h-full opacity-20 bg-gradient-to-r from-primary via-info to-secondary blur-[150px]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground mb-6 animate-fade-in">
            Our Team, Trusted by UK Startups &amp; SMEs
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            Behind LegalGrid is a team of legal specialists with experience supporting hundreds of startups and SMEs. We combine strong academic backgrounds with practical business knowledge, so every document is accurate, reliable, and tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="group relative transition-all duration-500 ease-out hover:scale-105">
            <div className="relative h-80 w-full flex flex-col">
              <div className="w-full h-8 bg-gradient-to-b from-card to-card/90 rounded-t-lg relative shadow-md">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-t-lg"></div>
                <div className="absolute bottom-1 left-2 right-2 h-0.5 bg-border"></div>
                <div className="absolute bottom-2 left-1 right-1 h-0.5 bg-border/50"></div>
              </div>
              <div className="flex-1 bg-card border-l-2 border-r-2 border-border/30 relative overflow-hidden group-hover:border-primary/30 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 py-6 text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300">Specialists in Startups &amp; SMEs</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">we focus only on the legal needs of small, growing businesses — no unnecessary complexity</p>
                </div>
              </div>
              <div className="w-full h-6 bg-gradient-to-t from-card to-card/90 rounded-b-lg relative shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-b-lg"></div>
                <div className="absolute top-1 left-1 right-1 h-0.5 bg-border/50"></div>
                <div className="absolute top-2 left-2 right-2 h-0.5 bg-border"></div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-black/10 rounded-full blur-sm"></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative transition-all duration-500 ease-out hover:scale-105">
            <div className="relative h-80 w-full flex flex-col">
              <div className="w-full h-8 bg-gradient-to-b from-card to-card/90 rounded-t-lg relative shadow-md">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-t-lg"></div>
                <div className="absolute bottom-1 left-2 right-2 h-0.5 bg-border"></div>
                <div className="absolute bottom-2 left-1 right-1 h-0.5 bg-border/50"></div>
              </div>
              <div className="flex-1 bg-card border-l-2 border-r-2 border-border/30 relative overflow-hidden group-hover:border-primary/30 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 py-6 text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock text-primary"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300">Fast, Reliable Delivery</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">most agreements are completed in 3–5 working days so you can move quickly</p>
                </div>
              </div>
              <div className="w-full h-6 bg-gradient-to-t from-card to-card/90 rounded-b-lg relative shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-b-lg"></div>
                <div className="absolute top-1 left-1 right-1 h-0.5 bg-border/50"></div>
                <div className="absolute top-2 left-2 right-2 h-0.5 bg-border"></div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-black/10 rounded-full blur-sm"></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative transition-all duration-500 ease-out hover:scale-105">
            <div className="relative h-80 w-full flex flex-col">
              <div className="w-full h-8 bg-gradient-to-b from-card to-card/90 rounded-t-lg relative shadow-md">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-t-lg"></div>
                <div className="absolute bottom-1 left-2 right-2 h-0.5 bg-border"></div>
                <div className="absolute bottom-2 left-1 right-1 h-0.5 bg-border/50"></div>
              </div>
              <div className="flex-1 bg-card border-l-2 border-r-2 border-border/30 relative overflow-hidden group-hover:border-primary/30 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 py-6 text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign text-primary"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300">Clear, Upfront Pricing</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">fixed fees agreed in advance, so you always know what you&apos;ll pay</p>
                </div>
              </div>
              <div className="w-full h-6 bg-gradient-to-t from-card to-card/90 rounded-b-lg relative shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-b-lg"></div>
                <div className="absolute top-1 left-1 right-1 h-0.5 bg-border/50"></div>
                <div className="absolute top-2 left-2 right-2 h-0.5 bg-border"></div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-black/10 rounded-full blur-sm"></div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative transition-all duration-500 ease-out hover:scale-105">
            <div className="relative h-80 w-full flex flex-col">
              <div className="w-full h-8 bg-gradient-to-b from-card to-card/90 rounded-t-lg relative shadow-md">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-t-lg"></div>
                <div className="absolute bottom-1 left-2 right-2 h-0.5 bg-border"></div>
                <div className="absolute bottom-2 left-1 right-1 h-0.5 bg-border/50"></div>
              </div>
              <div className="flex-1 bg-card border-l-2 border-r-2 border-border/30 relative overflow-hidden group-hover:border-primary/30 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 py-6 text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award text-primary"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300">Proven Track Record</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">over 200 UK companies supported across tech, retail, finance, and creative sectors</p>
                </div>
              </div>
              <div className="w-full h-6 bg-gradient-to-t from-card to-card/90 rounded-b-lg relative shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-b-lg"></div>
                <div className="absolute top-1 left-1 right-1 h-0.5 bg-border/50"></div>
                <div className="absolute top-2 left-2 right-2 h-0.5 bg-border"></div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-black/10 rounded-full blur-sm"></div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="group relative transition-all duration-500 ease-out hover:scale-105">
            <div className="relative h-80 w-full flex flex-col">
              <div className="w-full h-8 bg-gradient-to-b from-card to-card/90 rounded-t-lg relative shadow-md">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-t-lg"></div>
                <div className="absolute bottom-1 left-2 right-2 h-0.5 bg-border"></div>
                <div className="absolute bottom-2 left-1 right-1 h-0.5 bg-border/50"></div>
              </div>
              <div className="flex-1 bg-card border-l-2 border-r-2 border-border/30 relative overflow-hidden group-hover:border-primary/30 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 py-6 text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-check text-primary"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m9 15 2 2 4-4"></path></svg>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300">Investor-Ready Documents</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">agreements prepared to the standard expected by investors and due diligence</p>
                </div>
              </div>
              <div className="w-full h-6 bg-gradient-to-t from-card to-card/90 rounded-b-lg relative shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-b-lg"></div>
                <div className="absolute top-1 left-1 right-1 h-0.5 bg-border/50"></div>
                <div className="absolute top-2 left-2 right-2 h-0.5 bg-border"></div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-black/10 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


