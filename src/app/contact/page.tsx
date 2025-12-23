import Link from "next/link";
export const runtime = "edge";
type ContactPageProps = {
  searchParams?: Promise<{ sent?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const sp = await searchParams;
  const sent = sp?.sent === "1";

  return (
    <main className="mx-auto max-w-6xl px-5 py-16 fade-in">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-neutral-500">Contact</p>
        <h1 className="mt-3 text-3xl font-semibold md:text-4xl">Let’s talk</h1>
        <p className="mt-4 text-neutral-600">
          Send a message with details (and any photos you have) and we’ll follow up fast.
        </p>
      </header>

      {sent ? (
        <div className="mt-8 glass lift p-5 border-l-4" style={{ borderLeftColor: "#16a34a" }}>
          <div className="text-sm font-semibold text-neutral-900">Message sent</div>
          <p className="mt-1 text-sm text-neutral-600">
            Thanks — your message was delivered to the team. We’ll get back to you soon.
          </p>
        </div>
      ) : null}

      <section className="mt-10 grid gap-8 lg:grid-cols-2">
        <form
          action="/api/contact"
          method="POST"
          encType="multipart/form-data"
          className="glass lift p-7"
        >
          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                placeholder="Name"
                className="rounded-xl border bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-600/30"
                required
              />
              <input
                name="phone"
                placeholder="Phone (optional)"
                className="rounded-xl border bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-600/30"
              />
            </div>

            <input
              name="email"
              placeholder="Email"
              type="email"
              className="rounded-xl border bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-600/30"
              required
            />

            <select
              name="service"
              className="rounded-xl border bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-600/30"
              defaultValue="Drone"
            >
              <option value="Drone">Drone</option>
              <option value="Remodeling">Remodeling</option>
            </select>

            <textarea
              name="message"
              placeholder="Message"
              className="min-h-[160px] rounded-xl border bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-600/30"
              required
            />

            <div className="rounded-2xl border bg-white/70 p-4">
              <div className="text-sm font-semibold text-neutral-900">Attach files (optional)</div>
              <p className="mt-1 text-xs text-neutral-500">Up to 3 files • 5MB each • JPG/PNG/WEBP/PDF</p>
              <input
                name="files"
                type="file"
                multiple
                accept=".jpg,.jpeg,.png,.webp,.pdf"
                className="mt-3 block w-full text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-green-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-green-700"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700"
            >
              Send Message
            </button>

            <p className="text-xs text-neutral-500">
              By sending, you agree to be contacted back. We don’t sell your information.
            </p>
          </div>
        </form>

        <aside className="glass lift p-7">
          <h2 className="text-lg font-semibold">What to include</h2>
          <ul className="mt-4 space-y-2 text-neutral-700">
            <li>• Drone or remodeling?</li>
            <li>• Address / location</li>
            <li>• Timeline</li>
            <li>• Any photos (optional)</li>
          </ul>

          <div className="mt-8 rounded-2xl border bg-white p-5">
            <div className="text-sm font-semibold">Quick links</div>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link href="/services" className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-neutral-50">
                View services
              </Link>
              <Link href="/" className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-neutral-50">
                Back home
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}