export const runtime = "edge";

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const form = await req.formData();

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  const service = String(form.get("service") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  // Minimal validation
  if (!email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const from = process.env.CONTACT_FROM_EMAIL;
  const to = "julz@complext.ai";
  const forwardTo = "bamworksdhec@gmail.com";

  if (!process.env.RESEND_API_KEY || !from || !to) {
    console.error("Missing env vars for contact form", {
      hasResendKey: Boolean(process.env.RESEND_API_KEY),
      hasFrom: Boolean(from),
      hasTo: Boolean(to),
    });
    return NextResponse.json(
      { error: "Server email configuration is missing." },
      { status: 500 }
    );
  }

  // Email to business only
  const result = await resend.emails.send({
    from,
    to,
    cc: forwardTo,
    replyTo: email,
    subject: `New ${service || ""} inquiry from ${name || "Website"}`.trim(),
    text:
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Service: ${service}\n\n` +
      `Message:\n${message}`,
  });

  // Resend returns { data, error } — only redirect to success when accepted
  if ((result as any)?.error) {
    console.error("Resend send error", (result as any).error);
    return NextResponse.json(
      { error: "Email failed to send. Check Resend settings." },
      { status: 502 }
    );
  }

  console.log("Contact email sent", {
    to,
    cc: forwardTo,
    subject: `New ${service || ""} inquiry from ${name || "Website"}`.trim(),
    id: (result as any)?.data?.id,
  });

  // Redirect back to contact page after send
  return NextResponse.redirect(new URL("/contact?sent=1", req.url), 303);
}