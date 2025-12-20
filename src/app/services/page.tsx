export default function ServicesPage() {
    return (
      <main className="mx-auto max-w-6xl px-5 py-16">
        <h1 className="text-3xl font-semibold">Services</h1>
  
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border bg-white p-7">
            <h2 className="text-xl font-semibold">Drone Video / Photography</h2>
            <p className="mt-3 text-neutral-600">
              Realty listings, construction progress, inspections, and marketing content.
            </p>
          </section>
  
          <section className="rounded-3xl border bg-white p-7">
            <h2 className="text-xl font-semibold">Remodeling / Home Repair</h2>
            <p className="mt-3 text-neutral-600">
              Drywall, trim, tile, bathrooms, vanities, ceilings, fans — professional and clean.
            </p>
          </section>
        </div>
      </main>
    );
  }