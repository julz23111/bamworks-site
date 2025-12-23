export const runtime = "edge";

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

const MAX_FILES = 3;
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB per file
const ALLOWED_MIME = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
]);

function isFileLike(v: unknown): v is File {
  return typeof File !== "undefined" && v instanceof File;
}

function toBase64(bytes: Uint8Array): string {
  // btoa expects a binary string; chunk to avoid call stack limits
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode(...chunk);
  }
  return btoa(binary);
}

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
  const to = process.env.CONTACT_TO_EMAIL;

  if (!process.env.RESEND_API_KEY || !from || !to) {
    console.error("Missing env vars for contact form", {
      hasResendKey: Boolean(process.env.RESEND_API_KEY),
      hasFrom: Boolean(from),
      hasTo: Boolean(to),
    });
    return NextResponse.json({ error: "Server email configuration is missing." }, { status: 500 });
  }

  // Files: expect <input type="file" name="files" multiple>
  const rawFiles = form.getAll("files");
  const files = rawFiles.filter(isFileLike).filter((f) => f.size > 0);

  if (files.length > MAX_FILES) {
    return NextResponse.json(
      { error: `Too many files. Max ${MAX_FILES}.` },
      { status: 400 }
    );
  }

  for (const f of files) {
    if (f.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json(
        { error: `File too large: ${f.name}. Max 5MB each.` },
        { status: 400 }
      );
    }
    // Some browsers may send empty type; allow by filename for common images/pdfs
    const hasAllowedType = f.type ? ALLOWED_MIME.has(f.type) : /\.(jpe?g|png|webp|pdf)$/i.test(f.name);
    if (!hasAllowedType) {
      return NextResponse.json(
        { error: `Unsupported file type: ${f.name}. Allowed: JPG, PNG, WEBP, PDF.` },
        { status: 400 }
      );
    }
  }

  const attachments = await Promise.all(
    files.map(async (f) => {
      const ab = await f.arrayBuffer();
      const bytes = new Uint8Array(ab);
      return {
        filename: f.name || "attachment",
        content: toBase64(bytes),
      };
    })
  );

  const attachmentNames = attachments.map((a) => a.filename);

  // Email to business only
  const result = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New ${service || ""} inquiry from ${name || "Website"}`.trim(),
    text:
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Service: ${service}\n\n` +
      `Message:\n${message}\n\n` +
      (attachmentNames.length
        ? `Attachments (${attachmentNames.length}):\n- ${attachmentNames.join("\n- ")}`
        : "Attachments: none"),
    attachments: attachments.length ? attachments : undefined,
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
    subject: `New ${service || ""} inquiry from ${name || "Website"}`.trim(),
    id: (result as any)?.data?.id,
    attachments: attachmentNames,
  });

  // Redirect back to contact page after send
  return NextResponse.redirect(new URL("/contact?sent=1", req.url), 303);
}