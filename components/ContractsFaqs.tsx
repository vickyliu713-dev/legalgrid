import React from "react";

export default function ContractsFaqs(): React.ReactElement {
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
    q: "Why do I need tailored commercial contracts?",
    a: "Well-drafted contracts prevent disputes, protect revenue, and clarify obligations. Templates rarely provide adequate protection for UK SMEs.",
  },
  {
    q: "Can you review contracts I already have?",
    a: "Yes. We can review existing contracts to identify risks, strengthen protections, and ensure compliance with UK law.",
  },
  {
    q: "How quickly can contracts be drafted or reviewed?",
    a: "Most agreements are delivered within 3–5 working days. Urgent reviews can often be completed faster.",
  },
  {
    q: "Do you handle both UK and international agreements?",
    a: "Yes. We draft and review agreements for UK-based businesses, including contracts involving international clients or suppliers.",
  },
  {
    q: "What types of businesses benefit most from commercial contracts?",
    a: "Every SME — whether you’re providing services, sourcing products, or entering partnerships — needs clear contracts to avoid costly misunderstandings.",
  },
];



