import React from "react";
import Link from "next/link";

export default function IPServices(): React.ReactElement {
  return (
    <section id="services" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Protecting the Ideas and Assets Behind Your Business
          </h2>
          <p className="text-muted-foreground text-lg">
            LegalGrid Legal helps startups and SMEs secure their intellectual property, ensuring ownership is clear and your business is protected when working with employees, contractors, and partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">IP Assignment Agreements</h3>
            <p className="text-sm text-muted-foreground">ensure all intellectual property created belongs to your business</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Licensing Agreements</h3>
            <p className="text-sm text-muted-foreground">generate revenue while protecting your rights when others use your IP</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Confidentiality &amp; Non-Disclosure Agreements</h3>
            <p className="text-sm text-muted-foreground">safeguard sensitive information in discussions and partnerships</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Trademark Support &amp; Strategy</h3>
            <p className="text-sm text-muted-foreground">protect your brand identity and avoid disputes</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Software &amp; Technology Agreements</h3>
            <p className="text-sm text-muted-foreground">cover IP ownership in software development or SaaS products</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-yellow-50 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Investor-Ready IP Documentation</h3>
            <p className="text-sm text-muted-foreground">agreements designed to meet due diligence standards and reassure funders</p>
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



