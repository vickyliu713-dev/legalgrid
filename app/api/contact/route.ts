import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, businessName, phone, email, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send email via Resend if configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "vickyliu713@gmail.com";
    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          // Use Resend's verified onboarding sender for reliability unless a custom domain is configured
          from: "LegalGrid <onboarding@resend.dev>",
          to: [toEmail],
          subject: "New LegalGrid Contact Form Submission",
          reply_to: email,
          html: `
            <h2>New Contact Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Business:</strong> ${businessName || "-"}</p>
            <p><strong>Phone:</strong> ${phone || "-"}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${(message || "").replace(/\n/g, "<br/>")}</p>
          `,
        }),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error("Resend error:", text);
        return NextResponse.json({ error: "Email send failed", details: text }, { status: 500 });
      }
      const data = (await res.json().catch(() => ({}))) as { id?: string };
      return NextResponse.json({ ok: true, id: data?.id });
    } else {
      console.warn("RESEND_API_KEY not set; skipping email send.");
      return NextResponse.json({ ok: true, skipped: true });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


