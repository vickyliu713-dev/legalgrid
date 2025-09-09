import React from "react";

export default function EmploymentFaqs(): React.ReactElement {
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
    q: "Do I really need tailored employment contracts?",
    a: "Yes. Employment law in the UK requires written terms, and tailored contracts ensure compliance while protecting your business.",
  },
  {
    q: "Can you help with both employees and freelancers?",
    a: "Absolutely. We prepare agreements for permanent staff, contractors, and consultants, ensuring your business is protected in every arrangement.",
  },
  {
    q: "How quickly can contracts and policies be delivered?",
    a: "Most documents are completed within 3–5 working days. If you need urgent contracts for a new hire, we can often provide them faster.",
  },
  {
    q: "Do you also prepare HR policies and staff handbooks?",
    a: "Yes. We provide complete HR documentation, including handbooks and workplace policies, to ensure clarity for your team and compliance with UK law.",
  },
  {
    q: "What happens if my business grows or changes?",
    a: "We can update or expand your contracts and policies as your team grows, ensuring your documentation always reflects your current needs.",
  },
];



