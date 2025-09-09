import React from "react";
import Link from "next/link";

export default function ComplianceHero(): React.ReactElement {
  return (
    <section className="relative w-full py-16 px-6 md:px-12 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full">
        <div className="w-full h-full opacity-15 bg-gradient-to-br from-primary via-info to-secondary blur-[120px]"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
          Business Policies &amp; Compliance Documents
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          We provide website terms, privacy and cookie policies, refund policies, GDPR frameworks, and data protection agreements for UK startups and SMEs.
        </p>
        <div className="flex justify-center pt-6">
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-white hover:border hover:border-cosmic-accent py-2 bg-primary text-white hover:bg-primary/90 h-12 px-6">
            Contact Us Now
          </Link>
        </div>
      </div>
    </section>
  );
}



