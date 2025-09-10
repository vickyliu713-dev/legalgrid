import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Industries from "@/components/Industries";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import Faqs from "@/components/Faqs";

export default function Home() {
  return (
    <main className="relative overflow-visible">
      {/* Mobile-only page overlays to carry glow down the page, stopping before Contact */}
      <div className="md:hidden pointer-events-none absolute left-1/2 -translate-x-1/2 top-[10%] w-[4200px] h-[4200px] -z-10">
        <div className="w-full h-full bg-gradient-to-r from-[#3554e8] via-[#22d3c5] to-[#8bcc19] opacity-25 blur-[320px]"></div>
      </div>
      <div className="md:hidden pointer-events-none absolute left-1/2 -translate-x-1/2 top-[22%] w-[5200px] h-[5200px] -z-10">
        <div className="w-full h-full bg-gradient-to-r from-[#3554e8] via-[#22d3c5] to-[#8bcc19] opacity-20 blur-[400px]"></div>
      </div>
      <Hero />
      <Services />
      <Team />
      <Industries />
      <Testimonials />
      <Faqs />
      <ContactForm />
    </main>
  );
}
