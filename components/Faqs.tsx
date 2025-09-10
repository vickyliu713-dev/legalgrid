import React from "react";

export default function Faqs(): React.ReactElement {
  return (
    <section className="relative w-full py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground mx-auto">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto"></p>
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
    q: "Why do I need a shareholder or founder agreement?",
    a: "Without one, disagreements over equity, responsibilities, or exits often end up in costly disputes. Investors also expect these documents before putting in funds — it shows your business is structured properly.",
  },
  {
    q: "Can’t I just use a template online?",
    a: "Templates don’t account for your company’s specific circumstances. We tailor agreements to your structure, industry, and growth plans, ensuring you’re protected where it matters.",
  },
  {
    q: "How quickly can you prepare incorporation and shareholder documents?",
    a: "Most agreements are ready in 3–5 working days. If you’re raising investment or working to a tight deadline, we can often turn urgent work around faster.",
  },
  {
    q: "Do you only work with new startups?",
    a: "No. We also support established SMEs that need to update their agreements, restructure ownership, or prepare for investment.",
  },
  {
    q: "Why do businesses choose LegalGrid?",
    a: "Because we focus exclusively on startups and SMEs, we understand the challenges growing companies face. Our agreements are clear, practical, and tailored to your business, with fast delivery and straightforward pricing that keeps you moving.",
  },
];


