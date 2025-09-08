import React from "react";
import IncorporationHero from "@/components/IncorporationHero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Faqs from "@/components/Faqs";
import ContactForm from "@/components/ContactForm";

export default function IncorporationPage(): React.ReactElement {
  return (
    <main>
      <IncorporationHero />
      {/* The following sections will be customized/trimmed next as needed */}
      <Services />
      <Team />
      <Industries />
      <Testimonials />
      <Faqs />
      <ContactForm />
    </main>
  );
}


