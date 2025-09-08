import React from "react";
import FounderOptionsHero from "@/components/FounderOptionsHero";
import FounderOptionsServices from "@/components/FounderOptionsServices";
import Team from "@/components/Team";
import Industries from "@/components/Industries";
import FounderOptionsTestimonials from "@/components/FounderOptionsTestimonials";
import FounderOptionsFaqs from "@/components/FounderOptionsFaqs";
import ContactForm from "@/components/ContactForm";

export default function FounderOptionsPage(): React.ReactElement {
  return (
    <main>
      <FounderOptionsHero />
      <FounderOptionsServices />
      <Team />
      <Industries />
      <FounderOptionsTestimonials />
      <FounderOptionsFaqs />
      <ContactForm />
    </main>
  );
}


