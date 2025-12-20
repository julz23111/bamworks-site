import { NextResponse } from "next/server";
import { Resend } from "resend";
export const runtime = "edge";
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const form = await req.formData();

  const name = String(form.get("name") ?? "");
  const email = String(form.get("email") ?? "");
  const phone = String(form.get("phone") ?? "");
  const service = String(form.get("service") ?? "");
  const message = String(form.get("message") ?? "");

  // 1) Email to business
  await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL!,
    to: process.env.CONTACT_TO_EMAIL!,
    subject: `New ${service} lead from ${name}`,
    replyTo: email,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`,
  });

  // 2) Auto-reply to customer
  await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL!,
    to: email,
    subject: "We got your message — Bamworks LLC",
    text:
      `Hey ${name || "there"},\n\n` +
      `Thanks for reaching out about ${service}.\n` +
      `Your message was sent successfully, and we’ll follow up soon.\n\n` +
      `— Bamworks LLC`,
  });

  // 3) Redirect back with success flag (simple “email sent” UX)
  return NextResponse.redirect(new URL("/?sent=1#contact", req.url), 303);
}