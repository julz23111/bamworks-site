import Image from "next/image";
import { sanity } from "@/lib/sanity";

const query = `*[_type=="siteSettings"][0]{
  brandName, heroTitle, heroSubtitle, nav,
  drone{headline, body},
  remodeling{headline, body},
  email, phone
}`;

export default async function HomePage() {
  const data = (await sanity.fetch(query)) ?? {};

  const brandName = data.brandName ?? "Bamworks LLC";
  const heroTitle = data.heroTitle ?? "engineering the way forward";
  const heroSubtitle =
    data.heroSubtitle ??
    "Drone video/photography for realty, construction, and local businesses — plus reliable remodeling & home repair.";

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpg" alt={`${brandName} logo`} width={48} height={48} className="rounded-lg" />
            <div className="font-semibold">{brandName}</div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
            <a href="/admin" className="rounded-lg border px-3 py-1.5 hover:bg-neutral-50">Admin</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">Bamworks LLC</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">{heroTitle}</h1>
            <p className="mt-4 text-neutral-600">{heroSubtitle}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90">
                Get a Quote
              </a>
              <a href="#services" className="rounded-xl border px-5 py-3 text-sm font-semibold hover:bg-neutral-50">
                View Services
              </a>
            </div>

            <div className="mt-6 text-sm text-neutral-600">
              {data.email ? <div>Email: <span className="font-medium text-neutral-900">{data.email}</span></div> : null}
              {data.phone ? <div>Phone: <span className="font-medium text-neutral-900">{data.phone}</span></div> : null}
            </div>
          </div>

          <div className="rounded-3xl border bg-neutral-50 p-6">
            <div className="text-sm font-semibold">What we do</div>
            <ul className="mt-3 space-y-2 text-neutral-700">
              <li>• Drone video & photography (realty, construction, local business)</li>
              <li>• Remodeling & home repair (drywall, trim, tile, bathrooms)</li>
              <li>• Clean communication + follow ups</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="border-t bg-neutral-50">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl font-semibold">Services</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border bg-white p-7">
              <h3 className="text-xl font-semibold">{data.drone?.headline ?? "Drone Video / Photography"}</h3>
              <p className="mt-3 text-neutral-600">
                {data.drone?.body ?? "Great for property listings, jobsite progress updates, roof inspections, and marketing content."}
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-7">
              <h3 className="text-xl font-semibold">{data.remodeling?.headline ?? "Remodeling / Home Repair"}</h3>
              <p className="mt-3 text-neutral-600">
                {data.remodeling?.body ?? "Drywall, trim, tile, bathroom work, vanities, ceilings, fans — simple and professional."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-neutral-600">Send a message and you’ll automatically receive a confirmation email.</p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <ContactForm />

            <div className="rounded-3xl border bg-neutral-50 p-7">
              <div className="text-sm font-semibold">What to include</div>
              <ul className="mt-3 space-y-2 text-neutral-700">
                <li>• Drone or Remodeling?</li>
                <li>• Address / location</li>
                <li>• Timeline</li>
                <li>• Photos (optional)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-neutral-500">
          © {new Date().getFullYear()} {brandName}
        </div>
      </footer>
    </main>
  );
}

function ContactForm() {
  return (
    <form action="/api/contact" method="POST" className="rounded-3xl border bg-white p-7">
      <div className="grid gap-4">
        <input name="name" placeholder="Name" className="rounded-xl border px-4 py-3" required />
        <input name="email" placeholder="Email" type="email" className="rounded-xl border px-4 py-3" required />
        <input name="phone" placeholder="Phone (optional)" className="rounded-xl border px-4 py-3" />
        <select name="service" className="rounded-xl border px-4 py-3">
          <option value="Drone">Drone</option>
          <option value="Remodeling">Remodeling</option>
        </select>
        <textarea name="message" placeholder="Message" className="min-h-[140px] rounded-xl border px-4 py-3" required />
        <button className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90">
          Send
        </button>
        <p className="text-xs text-neutral-500">After sending, you’ll get a confirmation email automatically.</p>
      </div>
    </form>
  );
}