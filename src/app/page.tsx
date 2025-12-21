import Image from "next/image";
import { sanity } from "@/lib/sanity";

const query = `*[_type=="siteSettings"][0]{
  brandName, heroTitle, heroSubtitle, nav,
  drone{headline, body},
  remodeling{headline, body},
  email, phone
}`;

export default async function HomePage() {
  let data = {};
  try {
    data = (await sanity.fetch(query)) ?? {};
  } catch (error) {
    console.log("Sanity fetch failed, using defaults");
  }

  const brandName = data.brandName ?? "Bamworks LLC";
  const heroTitle = data.heroTitle ?? "engineering the way forward";
  const heroSubtitle =
    data.heroSubtitle ??
    "Drone video/photography for realty, construction, and local businesses — plus reliable remodeling & home repair.";

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="animate-fade-in-up">
            <p className="text-xs uppercase tracking-widest text-blue-400">Bamworks LLC</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl text-white">
              {heroTitle}
            </h1>
            <p className="mt-4 text-white/80">{heroSubtitle}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl btn-gradient px-6 py-3 text-sm font-semibold text-white">
                Get a Quote
              </a>
              <a href="#services" className="rounded-xl glass-button px-6 py-3 text-sm font-semibold text-white">
                View Services
              </a>
            </div>

            <div className="mt-6 text-sm text-white/70">
              {data.email ? <div>Email: <span className="font-medium text-white">{data.email}</span></div> : null}
              {data.phone ? <div>Phone: <span className="font-medium text-white">{data.phone}</span></div> : null}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-sm font-semibold text-white">What we do</div>
            <ul className="mt-3 space-y-2 text-white/80">
              <li>• Drone video & photography (realty, construction, local business)</li>
              <li>• Remodeling & home repair (drywall, trim, tile, bathrooms)</li>
              <li>• Clean communication + follow ups</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="glass-section border-y border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-3xl font-bold text-white">Services</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="glass-card rounded-3xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">{data.drone?.headline ?? "Drone Video / Photography"}</h3>
              </div>
              <p className="text-white/80">
                {data.drone?.body ?? "Great for property listings, jobsite progress updates, roof inspections, and marketing content."}
              </p>
            </div>

            <div className="glass-card rounded-3xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">{data.remodeling?.headline ?? "Remodeling / Home Repair"}</h3>
              </div>
              <p className="text-white/80">
                {data.remodeling?.body ?? "Drywall, trim, tile, bathroom work, vanities, ceilings, fans — simple and professional."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-3xl font-bold text-white">Contact</h2>
          <p className="mt-2 text-white/80">Send a message and you'll automatically receive a confirmation email.</p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <ContactForm />

            <div className="glass-card rounded-3xl p-7">
              <div className="text-sm font-semibold text-white">What to include</div>
              <ul className="mt-3 space-y-2 text-white/80">
                <li>• Drone or Remodeling?</li>
                <li>• Address / location</li>
                <li>• Timeline</li>
                <li>• Photos (optional)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-white/50 text-center">
          © {new Date().getFullYear()} {brandName}. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

function ContactForm() {
  return (
    <form action="/api/contact" method="POST" className="glass-card rounded-3xl p-7">
      <div className="grid gap-4">
        <input name="name" placeholder="Name" className="rounded-xl glass-input px-4 py-3" required />
        <input name="email" placeholder="Email" type="email" className="rounded-xl glass-input px-4 py-3" required />
        <input name="phone" placeholder="Phone (optional)" className="rounded-xl glass-input px-4 py-3" />
        <select name="service" className="rounded-xl glass-input px-4 py-3">
          <option value="Drone">Drone</option>
          <option value="Remodeling">Remodeling</option>
        </select>
        <textarea name="message" placeholder="Message" className="min-h-[140px] rounded-xl glass-input px-4 py-3" required />
        <button className="rounded-xl btn-gradient px-5 py-3 text-sm font-semibold text-white">
          Send
        </button>
        <p className="text-xs text-white/50">After sending, you'll get a confirmation email automatically.</p>
      </div>
    </form>
  );
}
