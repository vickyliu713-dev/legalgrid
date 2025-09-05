import React from "react";

export default function Services(): JSX.Element {
  return (
    <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Specialist Legal Support for SMEs &amp; Startups
          </h2>
          <p className="text-muted-foreground text-lg">
            We focus exclusively on startups and small businesses. Whether you're raising funds, hiring staff, or protecting your contracts, we provide the legal foundations that keep your business safe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-info/5 p-6 hover:border-secondary/40 transition-all duration-300 cursor-pointer">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-6 border border-secondary/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building text-secondary"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
            </div>
            <h3 className="text-lg font-medium tracking-tighter mb-4">Company Setup &amp; Structure</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Company incorporation documents</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Shareholder agreements</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Partnership agreements</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Joint venture agreements</span></li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-info/5 p-6 hover:border-secondary/40 transition-all duration-300 cursor-pointer">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-6 border border-secondary/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-secondary"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            </div>
            <h3 className="text-lg font-medium tracking-tighter mb-4">Founder &amp; Share Options</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>EMI option schemes</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Founder vesting agreements</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Option letters for staff and advisors</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Share option documentation</span></li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-info/5 p-6 hover:border-secondary/40 transition-all duration-300 cursor-pointer">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-6 border border-secondary/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up text-secondary"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
            </div>
            <h3 className="text-lg font-medium tracking-tighter mb-4">Investment &amp; Fundraising</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Seed &amp; angel investment agreements</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Convertible loan notes / ASAs / SAFEs</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Loan agreements</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Subscription agreements</span></li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-info/5 p-6 hover:border-secondary/40 transition-all duration-300 cursor-pointer">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-6 border border-secondary/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-secondary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3 className="text-lg font-medium tracking-tighter mb-4">Employment Contracts &amp; HR Policies</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Director and employee contracts</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Freelancer &amp; consultant agreements</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Staff handbooks</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>HR policies (disciplinary, grievance, equal opportunities, health &amp; safety)</span></li>
            </ul>
          </div>

          {/* Card 5 */}
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-info/5 p-6 hover:border-secondary/40 transition-all duration-300 cursor-pointer">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-6 border border-secondary/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scale text-secondary"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
            </div>
            <h3 className="text-lg font-medium tracking-tighter mb-4">Commercial Contracts</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>B2B service agreements</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Supplier agreements</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Distribution &amp; licensing contracts</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Franchise agreements</span></li>
            </ul>
          </div>

          {/* Card 6 */}
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-info/5 p-6 hover:border-secondary/40 transition-all duration-300 cursor-pointer">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-6 border border-secondary/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield text-secondary"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            </div>
            <h3 className="text-lg font-medium tracking-tighter mb-4">Intellectual Property Protection</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>IP assignment agreements</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Licensing agreements</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Confidentiality agreements</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Trademark support &amp; strategy</span></li>
            </ul>
          </div>

          {/* Card 7 */}
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-info/5 p-6 hover:border-secondary/40 transition-all duration-300 cursor-pointer">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-6 border border-secondary/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text text-secondary"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
            </div>
            <h3 className="text-lg font-medium tracking-tighter mb-4">Business Policies &amp; Compliance</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Website terms &amp; conditions</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Privacy &amp; cookie policies (GDPR-compliant)</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Refund &amp; returns policies</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Data protection agreements</span></li>
            </ul>
          </div>

          {/* Card 8 */}
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-info/5 p-6 hover:border-secondary/40 transition-all duration-300 cursor-pointer">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-6 border border-secondary/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open text-secondary"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
            </div>
            <h3 className="text-lg font-medium tracking-tighter mb-4">Finance &amp; Growth Support</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>R&amp;D tax credit documentation support</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Loan &amp; credit facility agreements</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Corporate governance documents</span></li>
              <li className="text-sm text-muted-foreground flex items-start"><span className="text-secondary mr-2 mt-1.5">•</span><span>Risk &amp; compliance frameworks</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


