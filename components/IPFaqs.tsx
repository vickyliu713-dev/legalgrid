import React from "react";

export default function IPFaqs(): React.ReactElement {
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
    q: "Why do I need IP assignment agreements?",
    a: "Without assignment agreements, intellectual property created by staff or contractors may not legally belong to your business — a major red flag for investors.",
  },
  {
    q: "Can you help with licensing IP to others?",
    a: "Yes. We draft licensing agreements that protect your rights while allowing others to use your IP under agreed terms.",
  },
  {
    q: "Do I really need an NDA?",
    a: "Yes. NDAs protect your confidential information when sharing ideas with potential investors, partners, or contractors.",
  },
  {
    q: "Can you support trademark protection?",
    a: "Yes. We provide trademark strategy and support to help you protect your brand identity and avoid costly disputes.",
  },
  {
    q: "Will these agreements satisfy investors?",
    a: "Yes. Our IP agreements are prepared to meet due diligence standards, giving investors confidence your IP is secure.",
  },
];



