import React from "react";

export default function FounderOptionsFaqs(): React.ReactElement {
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
    q: "Why do I need an EMI scheme?",
    a: "EMI schemes are tax-efficient and widely expected by employees and investors. They allow you to reward staff with equity while keeping tax costs low.",
  },
  {
    q: "What is founder vesting and why is it important?",
    a: "Founder vesting protects the company if a founder leaves early, ensuring shares are only earned over time and preventing disputes later.",
  },
  {
    q: "Can you help if EMI doesn’t apply to my business?",
    a: "Yes. We prepare alternative equity arrangements such as growth shares or non-EMI share options.",
  },
  {
    q: "Will these agreements stand up to investor scrutiny?",
    a: "Yes. Our documents are prepared to meet the standards expected in due diligence, giving investors confidence in your equity structure.",
  },
  {
    q: "How quickly can share option documents be prepared?",
    a: "Most equity agreements are delivered within 3–5 working days, with urgent requests handled faster if needed.",
  },
];


