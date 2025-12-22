import Image from "next/image";
import Link from "next/link";
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
    <main className="min-h-screen text-neutral-900 fade-in">
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs font-semibold text-neutral-700">
              <span className="h-2 w-2 rounded-full bg-green-600" aria-hidden="true" />
              {brandName}
            </div>
            <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">{heroTitle}</h1>
            <p className="mt-4 text-neutral-600">{heroSubtitle}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700">
                Get a Quote
              </Link>
              <Link href="/services" className="rounded-xl border border-neutral-300 bg-white/70 px-5 py-3 text-sm font-semibold hover:bg-neutral-50">
                View Services
              </Link>
            </div>

            <div className="mt-6 text-sm text-neutral-600">
              {data.email ? <div>Email: <span className="font-medium text-neutral-900">{data.email}</span></div> : null}
              {data.phone ? <div>Phone: <span className="font-medium text-neutral-900">{data.phone}</span></div> : null}
            </div>
          </div>

          <div className="glass lift p-6">
            <div className="text-sm font-semibold">What we do</div>
            <ul className="mt-3 space-y-2 text-neutral-700">
              <li>• Drone video & photography (realty, construction, local business)</li>
              <li>• Remodeling & home repair (drywall, trim, tile, bathrooms)</li>
              <li>• Clean communication + follow ups</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl font-semibold">Services</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="glass lift p-7">
              <h3 className="text-xl font-semibold">{data.drone?.headline ?? "Drone Video / Photography"}</h3>
              <div className="mt-3 h-1 w-12 rounded-full bg-green-600/80" aria-hidden="true" />
              <p className="mt-3 text-neutral-600">
                {data.drone?.body ?? "Great for property listings, jobsite progress updates, roof inspections, and marketing content."}
              </p>
            </div>

            <div className="glass lift p-7">
              <h3 className="text-xl font-semibold">{data.remodeling?.headline ?? "Remodeling / Home Repair"}</h3>
              <div className="mt-3 h-1 w-12 rounded-full bg-green-600/80" aria-hidden="true" />
              <p className="mt-3 text-neutral-600">
                {data.remodeling?.body ?? "Drywall, trim, tile, bathroom work, vanities, ceilings, fans — simple and professional."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="glass lift p-7 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="text-xl font-semibold">Ready to get started?</h2>
              <p className="mt-2 text-neutral-600">Send a quick message — you’ll get a confirmation email automatically.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
              <Link
                href="/contact"
                className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
              >
                Contact Bamworks
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-neutral-300 bg-white/70 px-5 py-3 text-sm font-semibold hover:bg-neutral-50"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}