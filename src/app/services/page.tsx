import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Bamworks LLC",
  description:
    "Drone video/photography and remodeling/home repair services. Real estate, construction documentation, marketing content, and residential upgrades.",
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 fade-in">
      <header className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs font-semibold text-neutral-700">
          <span className="h-2 w-2 rounded-full bg-green-600" aria-hidden="true" />
          Services
        </div>

        <h1 className="mt-3 text-3xl font-semibold md:text-4xl">Drone + Remodeling</h1>
        <p className="mt-4 text-neutral-600">
          Two core service lines under one roof: drone media for marketing/inspection work and hands-on remodeling for
          residential upgrades. Clean communication, fast follow-up, and quality work.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
          >
            Get a Quote
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-neutral-300 bg-white/70 px-5 py-3 text-sm font-semibold hover:bg-neutral-50"
          >
            Schedule a Call
          </Link>
        </div>

        <p className="mt-6 text-sm text-neutral-500">
          Prefer text? Send details on the <Link href="/contact" className="font-semibold text-neutral-800 hover:opacity-80">contact page</Link> and we’ll follow up.
        </p>
      </header>

      {/* Drone */}
      <section className="mt-14" aria-labelledby="drone-services">
        <div className="glass lift p-7">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 id="drone-services" className="text-2xl font-semibold">
                Drone Video / Photography
              </h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-green-600/80" aria-hidden="true" />
              <p className="mt-4 text-neutral-600">
                High-quality aerial visuals that help properties and projects look their best. Perfect for real estate,
                construction progress updates, roof/structure inspection support, and social media marketing.
              </p>

              <div className="mt-7">
                <h3 className="text-sm font-semibold text-neutral-900">Common deliverables</h3>
                <ul className="mt-3 space-y-2 text-neutral-700">
                  <li>• Aerial photo set (MLS-ready / marketing ready)</li>
                  <li>• Short highlight video (15–60 seconds)</li>
                  <li>• Jobsite progress snapshots (weekly / milestone based)</li>
                  <li>• Roof/structure overview footage for documentation</li>
                </ul>
              </div>

              <div className="mt-7">
                <h3 className="text-sm font-semibold text-neutral-900">Great for</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Real estate listings",
                    "Construction sites",
                    "Local business marketing",
                    "Roof overview / inspection support",
                    "Before/after visuals",
                  ].map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
                >
                  Request drone pricing
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl border border-neutral-300 bg-white/70 px-4 py-2 text-sm font-semibold hover:bg-neutral-50"
                >
                  Ask a question
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-900">Drone gallery</h3>
              <p className="mt-2 text-sm text-neutral-600">Two sample shots. Replace images in /public.</p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <figure className="overflow-hidden rounded-2xl border bg-neutral-50 lift">
                  <Image
                    src="/drone-1.jpg"
                    alt="Drone photo example 1"
                    width={1200}
                    height={800}
                    className="h-52 w-full object-cover"
                    priority
                  />
                </figure>

                <figure className="overflow-hidden rounded-2xl border bg-neutral-50 lift">
                  <Image
                    src="/drone-2.jpg"
                    alt="Drone photo example 2"
                    width={1200}
                    height={800}
                    className="h-52 w-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remodeling */}
      <section className="mt-10" aria-labelledby="remodeling-services">
        <div className="glass lift p-7">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 id="remodeling-services" className="text-2xl font-semibold">
                Remodeling / Home Repair
              </h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-green-600/80" aria-hidden="true" />
              <p className="mt-4 text-neutral-600">
                Professional, detail-oriented work for the upgrades that make a home feel finished. From small repairs to
                room refreshes, we focus on clean lines, solid installs, and keeping the work area tidy.
              </p>

              <div className="mt-7">
                <h3 className="text-sm font-semibold text-neutral-900">Typical projects</h3>
                <ul className="mt-3 space-y-2 text-neutral-700">
                  <li>• Drywall repair + patch/texture</li>
                  <li>• Trim, baseboards, doors, and finish carpentry</li>
                  <li>• Tile work (backsplashes, floors, showers)</li>
                  <li>• Bathroom upgrades (vanities, fixtures, mirrors)</li>
                  <li>• Lighting and ceiling fan installs (where permitted)</li>
                </ul>
              </div>

              <div className="mt-7">
                <h3 className="text-sm font-semibold text-neutral-900">How it works</h3>
                <ol className="mt-3 space-y-2 text-neutral-700">
                  <li>1. You message us with details + photos.</li>
                  <li>2. We confirm scope and schedule.</li>
                  <li>3. We complete the work and follow up.</li>
                </ol>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
                >
                  Request a remodel quote
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl border border-neutral-300 bg-white/70 px-4 py-2 text-sm font-semibold hover:bg-neutral-50"
                >
                  Share project photos
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-900">Remodeling gallery</h3>
              <p className="mt-2 text-sm text-neutral-600">Here is some of my work</p>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <figure className="overflow-hidden rounded-2xl border bg-neutral-50 lift">
                  <Image
                    src="/remodel-1.jpg"
                    alt="Remodeling photo example 1"
                    width={1200}
                    height={800}
                    className="h-44 w-full object-cover"
                  />
                </figure>

                <figure className="overflow-hidden rounded-2xl border bg-neutral-50 lift">
                  <Image
                    src="/remodel-2.jpg"
                    alt="Remodeling photo example 2"
                    width={1200}
                    height={800}
                    className="h-44 w-full object-cover"
                  />
                </figure>

                <figure className="overflow-hidden rounded-2xl border bg-neutral-50 lift sm:col-span-3">
                  <Image
                    src="/remodel-3.jpg"
                    alt="Remodeling photo example 3"
                    width={1600}
                    height={900}
                    className="h-56 w-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-12" aria-labelledby="services-cta">
        <div className="glass lift p-7 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <h2 id="services-cta" className="text-xl font-semibold">
              Ready to get started?
            </h2>
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
              href="/contact"
              className="rounded-xl border border-neutral-300 bg-white/70 px-5 py-3 text-sm font-semibold hover:bg-neutral-50"
            >
              Ask a question
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}