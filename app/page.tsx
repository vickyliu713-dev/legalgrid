import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Industries from "@/components/Industries";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Team />
      <Industries />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
