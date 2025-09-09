import React from "react";
import Link from "next/link";

export default function ContractsHero(): React.ReactElement {
  return (
    <section className="relative w-full py-16 px-6 md:px-12 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full">
        <div className="w-full h-full opacity-15 bg-gradient-to-br from-primary via-info to-secondary blur-[120px]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Commercial Contracts
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
                Commercial &amp; Supplier Contracts
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We create service agreements, supplier contracts, distribution and licensing agreements, franchise contracts, and NDAs for UK startups and SMEs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-white hover:border hover:border-cosmic-accent py-2 bg-primary text-white hover:bg-primary/90 h-12 px-6">
                Contact Us Now
              </Link>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
}



