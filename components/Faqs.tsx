import React from "react";

export default function Faqs(): React.ReactElement {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Short answers to common questions about LegalGrid services for UK startups & SMEs.
          </p>
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
    q: "How fast can you deliver documents?",
    a: "Most agreements are completed in 3–5 working days. If you have an urgent deadline, tell us and we’ll prioritise where possible.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes. We work almost exclusively with startups and small businesses across the UK, from incorporation to investment and employment.",
  },
  {
    q: "What are your fees like?",
    a: "We use fixed, upfront fees for each document type wherever possible so you always know what you’ll pay.",
  },
  {
    q: "Do you provide investor-ready documents?",
    a: "Yes. Our agreements are prepared to standards expected by investors and due diligence teams.",
  },
];


