import React from "react";

export default function FounderOptionsTestimonials(): React.ReactElement {
  return (
    <section className="w-full py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground">
          Trusted by 200+ UK Startups &amp; SMEs
        </h2>
        <div className="text-primary text-2xl" aria-label="5 star rating">★★★★★</div>

        <div className="space-y-10 text-left">
          <blockquote className="bg-card border border-border rounded-xl p-6">
            <p className="italic text-foreground">“LegalGrid set up our EMI option scheme and explained everything clearly to the team. It gave us a real advantage in hiring.”</p>
            <footer className="mt-3 text-muted-foreground">— James, SaaS Founder</footer>
          </blockquote>
          <blockquote className="bg-card border border-border rounded-xl p-6">
            <p className="italic text-foreground">“The founder vesting agreement LegalGrid prepared gave us peace of mind as we grew. Simple, fair, and exactly what we needed.”</p>
            <footer className="mt-3 text-muted-foreground">— Aisha, Agency Co-Founder</footer>
          </blockquote>
          <blockquote className="bg-card border border-border rounded-xl p-6">
            <p className="italic text-foreground">“Our option letters were prepared quickly and tailored to our business. Investors were impressed by how organised our equity structure was.”</p>
            <footer className="mt-3 text-muted-foreground">— Daniel, Fintech Startup CEO</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}


