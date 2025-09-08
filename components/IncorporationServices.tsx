import React from "react";

export default function IncorporationServices(): React.ReactElement {
  return (
    <section id="services" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Legal Documents to Structure Your Business
          </h2>
          <p className="text-muted-foreground text-lg">
            LegalGrid provides the agreements every startup and SME needs to avoid disputes, attract investors, and stay compliant.
          </p>
        </div>

        <ul className="space-y-4 text-base leading-relaxed">
          <li>
            <span className="font-medium">Company Incorporation Documents</span> – register your UK limited company correctly from the start
          </li>
          <li>
            <span className="font-medium">Shareholder Agreements</span> – define equity, rights, and exit terms between founders and investors
          </li>
          <li>
            <span className="font-medium">Partnership Agreements</span> – set out profit-sharing, responsibilities, and exits
          </li>
          <li>
            <span className="font-medium">Joint Venture Agreements</span> – protect your interests when collaborating with another business
          </li>
          <li>
            <span className="font-medium">Articles of Association</span> – tailor your company rules to fit your business needs
          </li>
          <li>
            <span className="font-medium">Founder Agreements</span> – clarify roles and commitments early between co-founders
          </li>
          <li>
            <span className="font-medium">Board Resolutions &amp; Minutes</span> – keep company decisions documented and compliant
          </li>
          <li>
            <span className="font-medium">Business Name &amp; IP Assignment Agreements</span> – protect your intellectual property from day one
          </li>
        </ul>

        <div className="pt-2">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-6">
            Contact Us Now
          </button>
        </div>
      </div>
    </section>
  );
}


