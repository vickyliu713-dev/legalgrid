import React from "react";
import InvestmentHero from "@/components/InvestmentHero";
import InvestmentServices from "@/components/InvestmentServices";
import Team from "@/components/Team";
import Industries from "@/components/Industries";
import Testimonials, { Testimonial } from "@/components/Testimonials";
import InvestmentFaqs from "@/components/InvestmentFaqs";
import ContactForm from "@/components/ContactForm";

export default function InvestmentPage(): React.ReactElement {
  return (
    <main>
      <InvestmentHero />
      <InvestmentServices />
      <Team />
      <Industries />
      <Testimonials testimonials={INVESTMENT_TESTIMONIALS} />
      <InvestmentFaqs />
      <ContactForm />
    </main>
  );
}

const INVESTMENT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "LegalGrid prepared our investment agreement ahead of closing our first angel round. The process was smooth, clear, and gave our investors confidence.",
    name: "James",
    role: "Tech Founder",
  },
  {
    quote:
      "The convertible loan note LegalGrid drafted allowed us to bring in capital quickly without lengthy negotiations. Exactly what we needed.",
    name: "Sophie",
    role: "SaaS Founder",
  },
  {
    quote:
      "We raised funding from a private lender with a loan agreement drafted by LegalGrid. Everything was clear, enforceable, and tailored to our business.",
    name: "Mark",
    role: "Retail SME Owner",
  },
];



