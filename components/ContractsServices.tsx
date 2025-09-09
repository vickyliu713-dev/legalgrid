import React from "react";
import Link from "next/link";

export default function ContractsServices(): React.ReactElement {
  return (
    <section id="services" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Contracts That Protect Your Business Relationships
          </h2>
          <p className="text-muted-foreground text-lg">
            LegalGrid prepares the commercial agreements that govern how your business works with clients, suppliers, and partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">B2B Service Agreements</h3>
            <p className="text-sm text-muted-foreground">clear terms for services you provide to clients</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Supplier Agreements</h3>
            <p className="text-sm text-muted-foreground">protect your business when working with suppliers and vendors</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Distribution Agreements</h3>
            <p className="text-sm text-muted-foreground">define rights, territories, and responsibilities in product distribution</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Licensing Agreements</h3>
            <p className="text-sm text-muted-foreground">secure your intellectual property while allowing others to use it</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Franchise Agreements</h3>
            <p className="text-sm text-muted-foreground">formalise franchise relationships and protect your brand</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Non-Disclosure Agreements (NDAs)</h3>
            <p className="text-sm text-muted-foreground">safeguard confidential information in discussions and partnerships</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Terms of Business</h3>
            <p className="text-sm text-muted-foreground">standardised terms for working with clients and customers</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Heads of Terms / Letters of Intent</h3>
            <p className="text-sm text-muted-foreground">outline deal terms before contracts are finalised</p>
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



