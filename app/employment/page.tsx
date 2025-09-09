import React from "react";
import EmploymentHero from "@/components/EmploymentHero";
import EmploymentServices from "@/components/EmploymentServices";
import Team from "@/components/Team";
import Industries from "@/components/Industries";
import Testimonials, { Testimonial } from "@/components/Testimonials";
import EmploymentFaqs from "@/components/EmploymentFaqs";
import ContactForm from "@/components/ContactForm";

export default function EmploymentPage(): React.ReactElement {
  return (
    <main>
      <EmploymentHero />
      <EmploymentServices />
      <Team />
      <Industries />
      <Testimonials testimonials={EMPLOYMENT_TESTIMONIALS} />
      <EmploymentFaqs />
      <ContactForm />
    </main>
  );
}

const EMPLOYMENT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "LegalGrid provided us with clear, tailored employment contracts for our growing team. Professional and fast.",
    name: "Laura",
    role: "Marketing Agency Founder",
  },
  {
    quote:
      "Our staff handbook and HR policies were delivered quickly and covered everything we needed. It made onboarding much smoother.",
    name: "Daniel",
    role: "E-commerce Business Owner",
  },
  {
    quote:
      "The consultancy agreement LegalGrid drafted protected us from scope creep and clarified IP ownership with a contractor.",
    name: "Harriet",
    role: "Tech Startup CEO",
  },
];



