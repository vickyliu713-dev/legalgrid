import React from "react";
import ComplianceHero from "@/components/ComplianceHero";
import ComplianceServices from "@/components/ComplianceServices";
import Team from "@/components/Team";
import Industries from "@/components/Industries";
import Testimonials, { Testimonial } from "@/components/Testimonials";
import ComplianceFaqs from "@/components/ComplianceFaqs";
import ContactForm from "@/components/ContactForm";

export default function CompliancePage(): React.ReactElement {
  return (
    <main>
      <ComplianceHero />
      <ComplianceServices />
      <Team />
      <Industries />
      <Testimonials testimonials={COMPLIANCE_TESTIMONIALS} />
      <ComplianceFaqs />
      <ContactForm />
    </main>
  );
}

const COMPLIANCE_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "LegalGrid prepared all our website and GDPR policies before launch. Everything was thorough and tailored to our business.",
    name: "Emily",
    role: "E-commerce Owner",
  },
  {
    quote:
      "Our SaaS platform needed proper terms and an acceptable use policy. LegalGrid delivered fast and gave us peace of mind.",
    name: "Tom",
    role: "SaaS Founder",
  },
  {
    quote:
      "The data processing agreements LegalGrid drafted helped us secure a major client who required full compliance documentation.",
    name: "Claire",
    role: "Marketing Agency Director",
  },
];



