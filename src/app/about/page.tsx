import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 fade-in">
      <header className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs font-semibold text-neutral-700">
          <span className="h-2 w-2 rounded-full bg-green-600" aria-hidden="true" />
          About
        </div>
        <h1 className="mt-3 text-3xl font-semibold md:text-4xl">Engineering the way forward</h1>
        <p className="mt-4 text-neutral-600">
          Bamworks LLC blends technical precision with hands-on craftsmanship. From aerial drone work to detailed
          remodeling projects, our focus is simple: deliver clean, accurate results and communicate clearly at every
          step.
        </p>
      </header>

      <section className="mt-12">
        <div className="glass lift p-7 md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <div>
            <h2 className="text-xl font-semibold">What we do</h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-green-600/80" aria-hidden="true" />
            <p className="mt-4 text-neutral-600">
              Our drone services provide high-quality visuals and documentation for real estate, construction, and
              local businesses. We capture perspectives that are difficult or impossible to see from the ground,
              helping clients make informed decisions and present their work professionally.
            </p>
            <p className="mt-4 text-neutral-600">
              On the remodeling side, we handle residential upgrades and repairs with the same attention to detail.
              Whether it’s drywall, trim, tile, or bathroom improvements, we approach each project methodically and
              keep the jobsite organized.
            </p>

            <ul className="mt-6 space-y-2 text-neutral-700">
              <li>• Drone photography & video</li>
              <li>• Construction progress documentation</li>
              <li>• Residential remodeling & home repair</li>
              <li>• Clear timelines and follow-up</li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl border bg-neutral-50 lift">
            <Image
              src="/drone-1.jpg"
              alt="Drone and remodeling work by Bamworks"
              width={1200}
              height={800}
              className="h-72 w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="glass lift p-7">
          <h2 className="text-xl font-semibold">Why Bamworks</h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-green-600/80" aria-hidden="true" />
          <p className="mt-4 text-neutral-600">
            We operate with an engineering mindset — plan first, execute cleanly, and verify results. Clients work with
            one point of contact, receive honest updates, and get deliverables that are ready to use.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
            >
              Contact Bamworks
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}