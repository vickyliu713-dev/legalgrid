import React from "react";
import Link from "next/link";

export default function EmploymentServices(): React.ReactElement {
  return (
    <section id="services" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Employment Documents That Protect Your Business and Team
          </h2>
          <p className="text-muted-foreground text-lg">
            LegalGrid Legal provides the contracts and policies every employer needs to stay compliant, protect the business, and create clear working relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-secondary/10 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Director Service Agreements</h3>
            <p className="text-sm text-muted-foreground">define responsibilities, remuneration, and protections for company directors</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-secondary/10 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Employment Contracts</h3>
            <p className="text-sm text-muted-foreground">tailored for permanent, fixed-term, or part-time staff</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-secondary/10 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Freelancer &amp; Consultant Agreements</h3>
            <p className="text-sm text-muted-foreground">protect your business when working with contractors</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-secondary/10 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Staff Handbooks</h3>
            <p className="text-sm text-muted-foreground">cover workplace rules and procedures clearly for all employees</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-secondary/10 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">HR Policies</h3>
            <p className="text-sm text-muted-foreground">disciplinary, grievance, health &amp; safety, equal opportunities, and more</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-secondary/10 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Non-Compete &amp; Restrictive Covenants</h3>
            <p className="text-sm text-muted-foreground">protect your business after staff move on</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-secondary/10 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Confidentiality Agreements</h3>
            <p className="text-sm text-muted-foreground">safeguard sensitive business information</p>
          </div>
          <div className="rounded-xl border border-border/20 bg-gradient-to-br from-card to-secondary/10 p-6 hover:border-secondary/40 transition-all duration-300 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Contractor IR35 Compliance Documents</h3>
            <p className="text-sm text-muted-foreground">ensure compliance when engaging contractors</p>
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



