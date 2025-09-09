import React from "react";

export default function ComplianceFaqs(): React.ReactElement {
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
    q: "Do all businesses need policies?",
    a: "Yes. Whether you operate online or offline, UK law requires clear policies to protect your business and meet compliance standards.",
  },
  {
    q: "Can I copy policies from another company?",
    a: "No. Copied policies rarely reflect your actual business practices and may leave you exposed to legal or compliance risks.",
  },
  {
    q: "What happens if my business isn’t compliant?",
    a: "You risk fines, disputes, and lost contracts. Proper compliance documents build trust with clients and protect your business from penalties.",
  },
  {
    q: "Can you review policies we already have?",
    a: "Yes. We review and update existing policies to ensure they’re accurate, compliant, and reflect how your business operates.",
  },
  {
    q: "How quickly can compliance documents be delivered?",
    a: "Most documents are prepared within 3–5 working days. Full policy packages can often be completed just as quickly.",
  },
];



