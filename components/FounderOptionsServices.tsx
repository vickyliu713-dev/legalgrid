import React from "react";
import Link from "next/link";

export default function FounderOptionsServices(): React.ReactElement {
  return (
    <section id="services" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Agreements to Manage Equity and Reward Teams
          </h2>
          <p className="text-muted-foreground text-lg">
            LegalGrid helps startups and SMEs put in place the right equity arrangements — protecting founders and attracting talent with clear, compliant documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">EMI Option Schemes</h3>
            <p className="text-sm text-muted-foreground">tax-efficient share option schemes tailored for your business</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Founder Vesting Agreements</h3>
            <p className="text-sm text-muted-foreground">protect the company if a founder leaves early</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Option Letters</h3>
            <p className="text-sm text-muted-foreground">clear agreements for staff, advisors, or consultants receiving equity</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Share Option Documentation</h3>
            <p className="text-sm text-muted-foreground">full legal documentation for option grants and exercises</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Growth Shares &amp; Alternatives</h3>
            <p className="text-sm text-muted-foreground">bespoke arrangements when EMI is not suitable</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Investor-Ready Equity Structures</h3>
            <p className="text-sm text-muted-foreground">agreements aligned with what investors expect in due diligence</p>
          </div>
        </div>

        <div className="pt-2 flex justify-center">
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-6">
            Contact Us Now
          </Link>
        </div>
      </div>
    </section>
  );
}


