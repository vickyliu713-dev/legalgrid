import React from "react";

export default function FinancesFaqs(): React.ReactElement {
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
    q: "Can you help with R&D tax credits?",
    a: "Yes. We prepare the supporting documentation required for HMRC claims and work alongside your accountant or tax adviser to maximise your benefit.",
  },
  {
    q: "What types of finance agreements can you prepare?",
    a: "We draft loan and credit facility agreements for banks, private lenders, and intra-group arrangements.",
  },
  {
    q: "Do you support corporate governance requirements?",
    a: "Yes. We provide board minutes, resolutions, and compliance registers to keep your company aligned with UK requirements.",
  },
  {
    q: "What if I’m preparing for an investment round or sale?",
    a: "We can assemble due diligence document packs, ensuring your business is investor-ready and avoiding delays.",
  },
  {
    q: "Can you help with government or private grants?",
    a: "Yes. We review grant and funding agreements to ensure you fully understand your obligations before signing.",
  },
];



