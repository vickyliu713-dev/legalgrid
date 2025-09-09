import React from "react";
import IPHero from "@/components/IPHero";
import IPServices from "@/components/IPServices";
import Team from "@/components/Team";
import Industries from "@/components/Industries";
import Testimonials, { Testimonial } from "@/components/Testimonials";
import IPFaqs from "@/components/IPFaqs";
import ContactForm from "@/components/ContactForm";

export default function IPPage(): React.ReactElement {
  return (
    <main>
      <IPHero />
      <IPServices />
      <Team />
      <Industries />
      <Testimonials testimonials={IP_TESTIMONIALS} />
      <IPFaqs />
      <ContactForm />
    </main>
  );
}

const IP_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "LegalGrid drafted IP assignment agreements for our developers, which gave investors confidence our technology was fully protected.",
    name: "Adam",
    role: "Tech Startup CEO",
  },
  {
    quote:
      "Our licensing agreements helped us monetise our content safely. LegalGrid explained everything clearly.",
    name: "Emma",
    role: "Creative Agency Owner",
  },
  {
    quote:
      "The NDA LegalGrid provided was simple, strong, and tailored to our business — exactly what we needed before partnership talks.",
    name: "Raj",
    role: "Retail SME Founder",
  },
];



