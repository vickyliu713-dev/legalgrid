import React from "react";
import FinancesHero from "@/components/FinancesHero";
import FinancesServices from "@/components/FinancesServices";
import Team from "@/components/Team";
import Industries from "@/components/Industries";
import Testimonials, { Testimonial } from "@/components/Testimonials";
import FinancesFaqs from "@/components/FinancesFaqs";
import ContactForm from "@/components/ContactForm";

export default function FinancesPage(): React.ReactElement {
  return (
    <main>
      <FinancesHero />
      <FinancesServices />
      <Team />
      <Industries />
      <Testimonials testimonials={FINANCES_TESTIMONIALS} />
      <FinancesFaqs />
      <ContactForm />
    </main>
  );
}

const FINANCES_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "LegalGrid guided us through the R&D tax documentation process. We reclaimed thousands we didn’t know we could.",
    name: "Michael",
    role: "SaaS Founder",
  },
  {
    quote:
      "Our loan agreements were prepared quickly and gave us confidence before taking on growth funding.",
    name: "Hannah",
    role: "Retail SME Director",
  },
  {
    quote:
      "The governance documents LegalGrid created meant we passed investor due diligence with no issues.",
    name: "Oliver",
    role: "Fintech Co-Founder",
  },
];



