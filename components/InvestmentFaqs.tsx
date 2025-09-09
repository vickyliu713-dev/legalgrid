import React from "react";

export default function InvestmentFaqs(): React.ReactElement {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-border rounded-xl border border-border bg-card">
          {faqItems.map((item) => (
            <details key={item.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span className="text-left font-medium text-foreground">{item.q}</span>
                <span className="shrink-0 rounded-md border border-border px-2 py-0.5 text-sm text-muted-foreground group-open:hidden">Show</span>
                <span className="shrink-0 rounded-md border border-border px-2 py-0.5 text-sm text-muted-foreground hidden group-open:inline">Hide</span>
              </summary>
              <div className="pt-3 text-muted-foreground text-sm leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqItems: { q: string; a: string }[] = [
  {
    q: "Why do I need tailored investment agreements?",
    a: "Generic templates often fail investor due diligence. A tailored agreement ensures the terms are clear, enforceable, and aligned with your fundraising goals.",
  },
  {
    q: "Can you help with convertible notes or ASAs?",
    a: "Yes. We prepare convertible loan notes, ASAs, and SAFEs, which allow you to raise capital quickly while deferring valuation discussions.",
  },
  {
    q: "How quickly can investment documents be prepared?",
    a: "Most investment agreements are delivered within 3–5 working days. We also handle urgent requests where needed.",
  },
  {
    q: "Do you only work with early-stage startups?",
    a: "No. We also support SMEs raising growth funding, securing loans, or restructuring ownership.",
  },
  {
    q: "How does LegalGrid support fundraising?",
    a: "We prepare agreements that satisfy investors, protect founders, and provide the clarity needed for smooth funding rounds. Our documents are designed to withstand due diligence and avoid disputes later.",
  },
];



