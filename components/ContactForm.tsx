"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm(): React.ReactElement {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to submit");
      router.push("/contact/submission-success");
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      alert("There was a problem submitting the form. Please try again.");
    }
  }
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">Contact Us Now</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Fill out the form below and a member of our team will get back to you as soon as possible.</p>
        </div>
        <div className="w-full">
          <div className="max-w-5xl mx-auto bg-background border border-border rounded-xl shadow-lg p-10">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-base font-medium text-foreground mb-2.5">Full Name</label>
                  <input type="text" className="flex rounded-md bg-background py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full h-12 text-base px-4 border border-border focus:border-secondary" id="name" name="name" placeholder="Your full name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="businessName" className="block text-base font-medium text-foreground mb-2.5">Business Name</label>
                  <input type="text" className="flex rounded-md bg-background py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full h-12 text-base px-4 border border-border focus:border-secondary" id="businessName" name="businessName" placeholder="Your company or trading name" value={formData.businessName} onChange={handleChange} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-base font-medium text-foreground mb-2.5">Phone Number</label>
                  <input type="tel" className="flex rounded-md bg-background py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full h-12 text-base px-4 border border-border focus:border-secondary" id="phone" name="phone" placeholder="e.g. +44 7700 900123" value={formData.phone} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-base font-medium text-foreground mb-2.5">Email Address</label>
                  <input type="email" className="flex rounded-md bg-background py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full h-12 text-base px-4 border border-border focus:border-secondary" id="email" name="email" placeholder="yourname@business.co.uk" value={formData.email} onChange={handleChange} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-medium text-foreground mb-2.5">Details of Your Query</label>
                <textarea className="flex min-h-[80px] rounded-md bg-background ring-offset-background placeholder:text-muted-foreground outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full text-base px-4 py-3 border border-border focus:border-secondary" id="message" name="message" rows={5} placeholder="Include as much information as possible, such as the services you need (e.g. shareholder agreements, employment contracts, GDPR compliance)" value={formData.message} onChange={handleChange}></textarea>
              </div>

              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-primary hover:border hover:border-cosmic-accent px-4 py-2 w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 text-base font-semibold" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Form"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


