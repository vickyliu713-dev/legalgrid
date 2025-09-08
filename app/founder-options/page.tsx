import React from "react";
import FounderOptionsHero from "@/components/FounderOptionsHero";
import FounderOptionsServices from "@/components/FounderOptionsServices";
import Team from "@/components/Team";
import Industries from "@/components/Industries";
import Testimonials, { Testimonial } from "@/components/Testimonials";
import FounderOptionsFaqs from "@/components/FounderOptionsFaqs";
import ContactForm from "@/components/ContactForm";

export default function FounderOptionsPage(): React.ReactElement {
  return (
    <main>
      <FounderOptionsHero />
      <FounderOptionsServices />
      <Team />
      <Industries />
      <Testimonials testimonials={FOUNDER_TESTIMONIALS} />
      <FounderOptionsFaqs />
      <ContactForm />
    </main>
  );
}

const FOUNDER_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "LegalGrid set up our EMI option scheme and explained everything clearly to the team. It gave us a real advantage in hiring.",
    name: "James",
    role: "SaaS Founder",
  },
  {
    quote:
      "The founder vesting agreement LegalGrid prepared gave us peace of mind as we grew. Simple, fair, and exactly what we needed.",
    name: "Aisha",
    role: "Agency Co-Founder",
  },
  {
    quote:
      "Our option letters were prepared quickly and tailored to our business. Investors were impressed by how organised our equity structure was.",
    name: "Daniel",
    role: "Fintech Startup CEO",
  },
];


