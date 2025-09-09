import React from "react";
import Link from "next/link";

export default function FinancesServices(): React.ReactElement {
  return (
    <section id="services" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Supporting Funding, Compliance, and Long-Term Growth
          </h2>
          <p className="text-muted-foreground text-lg">
            LegalGrid Legal provides the financial and governance documentation startups and SMEs need to access funding, claim tax incentives, and manage risk as they scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">R&amp;D Tax Credit Documentation Support</h3>
            <p className="text-sm text-muted-foreground">prepare the legal and technical records required for HMRC claims</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Loan &amp; Credit Facility Agreements</h3>
            <p className="text-sm text-muted-foreground">clear, enforceable terms for borrowing from banks or private lenders</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Corporate Governance Documents</h3>
            <p className="text-sm text-muted-foreground">board minutes, resolutions, and registers to stay compliant</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Risk &amp; Compliance Frameworks</h3>
            <p className="text-sm text-muted-foreground">tailored policies to manage operational and financial risk</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Grant &amp; Funding Agreement Reviews</h3>
            <p className="text-sm text-muted-foreground">ensure obligations are clear before accepting government or private grants</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Growth Share Arrangements</h3>
            <p className="text-sm text-muted-foreground">alternative incentive structures for employees and advisors</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Due Diligence Document Packs</h3>
            <p className="text-sm text-muted-foreground">prepare your business for investors, lenders, or potential buyers</p>
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



