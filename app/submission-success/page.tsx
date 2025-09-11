import Link from "next/link";

export const metadata = {
  title: "Submission Success",
  description: "Thank you for contacting LegalGrid. We'll be in touch shortly.",
};

export default function SubmissionSuccessPage() {
  return (
    <main className="w-full py-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">Thanks for contacting LegalGrid</h1>
        <p className="text-lg text-muted-foreground">
          Your request has been received. We’ll review your details and get back to you shortly.
        </p>
        <Link href="/" className="inline-flex items-center justify-center rounded-md bg-secondary text-secondary-foreground h-12 px-6 font-medium hover:bg-secondary/90">Return to homepage</Link>
      </div>
    </main>
  );
}


