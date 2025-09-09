import React from "react";
import ContractsHero from "@/components/ContractsHero";
import ContractsServices from "@/components/ContractsServices";
import Team from "@/components/Team";
import Industries from "@/components/Industries";
import Testimonials, { Testimonial } from "@/components/Testimonials";
import ContractsFaqs from "@/components/ContractsFaqs";
import ContactForm from "@/components/ContactForm";

export default function ContractsPage(): React.ReactElement {
  return (
    <main>
      <ContractsHero />
      <ContractsServices />
      <Team />
      <Industries />
      <Testimonials testimonials={CONTRACTS_TESTIMONIALS} />
      <ContractsFaqs />
      <ContactForm />
    </main>
  );
}

const CONTRACTS_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Our agency now has proper service agreements with clients. LegalGrid gave us contracts that protect against late payments and unclear scope.",
    name: "Rachel",
    role: "Creative Agency Director",
  },
  {
    quote:
      "The supplier contracts LegalGrid drafted gave us security in dealing with overseas manufacturers.",
    name: "David",
    role: "E-commerce Founder",
  },
  {
    quote:
      "We needed strong NDAs for investor discussions. LegalGrid delivered quickly and to a high standard.",
    name: "Omar",
    role: "SaaS Startup CEO",
  },
];



