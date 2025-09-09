import React from "react";
import Link from "next/link";

export default function InvestmentServices(): React.ReactElement {
  return (
    <section id="services" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Investment Agreements That Protect Your Business
          </h2>
          <p className="text-muted-foreground text-lg">
            LegalGrid helps startups and SMEs secure funding with agreements that satisfy investors, protect founders, and give your business confidence for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-secondary/10 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Seed &amp; Angel Investment Agreements</h3>
            <p className="text-sm text-muted-foreground">tailored documents that protect both founders and investors</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-secondary/10 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Convertible Loan Notes / ASAs / SAFEs</h3>
            <p className="text-sm text-muted-foreground">flexible options to raise funding without immediate valuations</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-secondary/10 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Loan Agreements</h3>
            <p className="text-sm text-muted-foreground">clear, enforceable terms for private or institutional lending</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-secondary/10 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Subscription Agreements</h3>
            <p className="text-sm text-muted-foreground">formalise share subscriptions with investors</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-secondary/10 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Investment Term Sheets</h3>
            <p className="text-sm text-muted-foreground">outline key deal terms before drafting final contracts</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-secondary/10 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Cap Table Documentation</h3>
            <p className="text-sm text-muted-foreground">ensure ownership is structured and recorded correctly</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-secondary/10 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Investor Rights Agreements</h3>
            <p className="text-sm text-muted-foreground">define voting rights, exit terms, and protections for both sides</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-secondary/10 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Founders’ Warranties &amp; Protections</h3>
            <p className="text-sm text-muted-foreground">cover liabilities and provide reassurance to investors</p>
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



