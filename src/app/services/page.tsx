export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-xl text-white/80 max-w-3xl">
          Professional drone services and expert home remodeling tailored to your needs.
        </p>
      </section>

      {/* Drone Services */}
      <section className="glass-section border-y border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Drone Video / Photography</h2>
              <p className="text-white/70">Aerial perspectives that make an impact</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Real Estate</h3>
              <p className="text-white/70 text-sm">
                Stunning aerial shots that showcase properties from unique angles, perfect for listings and virtual tours.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Construction Progress</h3>
              <p className="text-white/70 text-sm">
                Document jobsite progress with regular aerial updates for stakeholders and project management.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Roof Inspections</h3>
              <p className="text-white/70 text-sm">
                Safe, detailed roof inspections without the need for ladders or scaffolding. Get high-res imagery fast.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Marketing Content</h3>
              <p className="text-white/70 text-sm">
                Eye-catching aerial footage for promotional videos, social media, and advertising campaigns.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Event Coverage</h3>
              <p className="text-white/70 text-sm">
                Capture special events from above with dynamic aerial shots that add a professional touch.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Land Surveys</h3>
              <p className="text-white/70 text-sm">
                Comprehensive aerial surveys for land assessment, mapping, and development planning.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">What's Included:</h3>
            <ul className="grid gap-3 md:grid-cols-2 text-white/80">
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span> 4K High-resolution video & photos
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span> Professional editing & color grading
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span> Quick turnaround (24-48 hours)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span> Multiple delivery formats
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span> Licensed & insured operator
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span> Weather backup dates
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Remodeling Services */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Remodeling / Home Repair</h2>
            <p className="text-white/70">Expert craftsmanship for your home</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="glass-card rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Bathroom Remodeling</h3>
            <p className="text-white/70 text-sm">
              Complete bathroom renovations including tile work, vanities, fixtures, and finishing touches.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Drywall & Painting</h3>
            <p className="text-white/70 text-sm">
              Professional drywall installation, repair, and painting services for a flawless finish.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Tile Installation</h3>
            <p className="text-white/70 text-sm">
              Expert tile work for floors, walls, backsplashes, and shower surrounds with precision cuts.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Trim & Molding</h3>
            <p className="text-white/70 text-sm">
              Crown molding, baseboards, door and window trim installed with attention to detail.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Ceiling Fans & Fixtures</h3>
            <p className="text-white/70 text-sm">
              Installation and replacement of ceiling fans, light fixtures, and electrical updates.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">General Repairs</h3>
            <p className="text-white/70 text-sm">
              From small fixes to larger repairs, we handle a wide range of home maintenance needs.
            </p>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8">
          <h3 className="text-xl font-semibold text-white mb-4">Our Approach:</h3>
          <ul className="grid gap-3 md:grid-cols-2 text-white/80">
            <li className="flex items-center gap-2">
              <span className="text-purple-400">✓</span> Free estimates & consultations
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-400">✓</span> Quality materials & workmanship
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-400">✓</span> Clean, organized job sites
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-400">✓</span> Transparent pricing
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-400">✓</span> Flexible scheduling
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-400">✓</span> Satisfaction guarantee
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="glass-section border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Get in touch today for a free consultation and quote. We're here to help bring your vision to life.
          </p>
          <a href="/contact" className="inline-block rounded-xl btn-gradient px-8 py-3 text-sm font-semibold text-white">
            Request a Quote
          </a>
        </div>
      </section>
    </main>
  );
}
