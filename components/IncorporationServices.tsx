import React from "react";

export default function IncorporationServices(): React.ReactElement {
  return (
    <section id="services" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Legal Documents to Structure Your Business
          </h2>
          <p className="text-muted-foreground text-lg">
            LegalGrid provides the agreements every startup and SME needs to avoid disputes, attract investors, and stay compliant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-xl border border-border/20 bg-card p-6">
            <h3 className="text-lg font-medium mb-2">Company Incorporation Documents</h3>
            <p className="text-sm text-muted-foreground">register your UK limited company correctly from the start</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-card p-6">
            <h3 className="text-lg font-medium mb-2">Shareholder Agreements</h3>
            <p className="text-sm text-muted-foreground">define equity, rights, and exit terms between founders and investors</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-card p-6">
            <h3 className="text-lg font-medium mb-2">Partnership Agreements</h3>
            <p className="text-sm text-muted-foreground">set out profit-sharing, responsibilities, and exits</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-card p-6">
            <h3 className="text-lg font-medium mb-2">Joint Venture Agreements</h3>
            <p className="text-sm text-muted-foreground">protect your interests when collaborating with another business</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-card p-6">
            <h3 className="text-lg font-medium mb-2">Articles of Association</h3>
            <p className="text-sm text-muted-foreground">tailor your company rules to fit your business needs</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-card p-6">
            <h3 className="text-lg font-medium mb-2">Founder Agreements</h3>
            <p className="text-sm text-muted-foreground">clarify roles and commitments early between co-founders</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-card p-6">
            <h3 className="text-lg font-medium mb-2">Board Resolutions &amp; Minutes</h3>
            <p className="text-sm text-muted-foreground">keep company decisions documented and compliant</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-card p-6">
            <h3 className="text-lg font-medium mb-2">Business Name &amp; IP Assignment Agreements</h3>
            <p className="text-sm text-muted-foreground">protect your intellectual property from day one</p>
          </div>
        </div>

        <div className="pt-2">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-6">
            Contact Us Now
          </button>
        </div>
      </div>
    </section>
  );
}


