import React from "react";
import Link from "next/link";

export default function ComplianceServices(): React.ReactElement {
  return (
    <section id="services" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Policies &amp; Compliance Documents That Protect Your Business
          </h2>
          <p className="text-muted-foreground text-lg">
            LegalGrid Legal helps startups and SMEs meet legal and regulatory requirements with clear, practical documents designed for real-world use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Website Terms &amp; Conditions</h3>
            <p className="text-sm text-muted-foreground">set clear rules for users and protect your business from liability</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Privacy Policies</h3>
            <p className="text-sm text-muted-foreground">GDPR-compliant documents tailored to your data processing activities</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Cookie Policies</h3>
            <p className="text-sm text-muted-foreground">required for websites using cookies or tracking tools</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Refund &amp; Returns Policies</h3>
            <p className="text-sm text-muted-foreground">meet consumer law requirements and protect your e-commerce business</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Data Processing Agreements</h3>
            <p className="text-sm text-muted-foreground">define responsibilities when handling customer data with third parties</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Acceptable Use Policies</h3>
            <p className="text-sm text-muted-foreground">outline rules for users of your services or platform</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">GDPR Compliance Frameworks</h3>
            <p className="text-sm text-muted-foreground">policies and procedures to keep your business compliant</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Intellectual Property Clauses</h3>
            <p className="text-sm text-muted-foreground">protect ownership of digital content and software</p>
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



