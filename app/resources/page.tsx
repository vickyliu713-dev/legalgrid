import React from "react";
import Link from "next/link";

export default function ResourcesPage(): React.ReactElement {
  const posts: { title: string; excerpt: string; href: string }[] = [
    { title: "Do I need a shareholder agreement?", excerpt: "Why early-stage startups should formalise founder relationships.", href: "/resources/do-i-need-a-shareholder-agreement" },
    { title: "What is an EMI option scheme?", excerpt: "A simple overview of EMI options and eligibility.", href: "/resources/what-is-emi-option-scheme" },
    { title: "Convertible notes vs SAFEs vs ASAs", excerpt: "Choosing the right instrument for early fundraising.", href: "/resources/convertible-notes-vs-safes-vs-asas" },
    { title: "Privacy policy essentials for SaaS", excerpt: "Key clauses your SaaS privacy policy should include.", href: "/resources/privacy-policy-essentials-for-saas" },
    { title: "GDPR basics for startups", excerpt: "Data protection obligations when you collect user data.", href: "/resources/gdpr-basics-for-startups" },
    { title: "What should be in freelance contracts?", excerpt: "Scope, IP, payment terms, and risk control.", href: "/resources/what-should-be-in-freelance-contracts" },
    { title: "How to protect your brand with trademarks", excerpt: "When and how to seek trade mark protection.", href: "/resources/how-to-protect-your-brand-with-trademarks" },
    { title: "Terms of service pitfalls", excerpt: "Common mistakes in customer ToS and how to avoid them.", href: "/resources/terms-of-service-pitfalls" },
    { title: "Investor due diligence checklist", excerpt: "Documents investors typically request and why.", href: "/resources/investor-due-diligence-checklist" },
    { title: "Board minutes and resolutions 101", excerpt: "Keeping compliant governance records.", href: "/resources/board-minutes-and-resolutions-101" },
  ];

  return (
    <main className="w-full py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">Resources</h1>
          <p className="mt-3 text-muted-foreground text-lg">Practical guides and answers to common legal questions for UK startups and SMEs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.href} className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-200">
              <h2 className="text-xl font-medium text-foreground mb-2">
                <Link href={post.href} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
              <Link href={post.href} className="text-primary text-sm font-medium hover:underline">Read more →</Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
