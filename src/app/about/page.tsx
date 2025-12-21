export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h1 className="text-4xl font-bold text-white mb-4">About Bamworks LLC</h1>
        <p className="text-xl text-white/80 max-w-3xl">
          We combine cutting-edge drone technology with expert craftsmanship to deliver exceptional results for our clients.
        </p>
      </section>

      <section className="glass-section border-y border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-3xl font-bold text-white mb-8">Our Story</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Founded on Quality</h3>
              <p className="text-white/80 leading-relaxed">
                Bamworks LLC was established with a mission to provide top-tier drone services and home remodeling solutions. 
                We believe in combining modern technology with traditional craftsmanship to deliver results that exceed expectations.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Experience & Expertise</h3>
              <p className="text-white/80 leading-relaxed">
                Our team brings years of experience in both aerial photography and home construction. We understand the importance 
                of attention to detail, whether we're capturing stunning aerial footage or renovating your bathroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass-card rounded-3xl p-7 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Quality First</h3>
            <p className="text-white/70 text-sm">
              We never compromise on quality. Every project receives our full attention and expertise.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-7 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Clear Communication</h3>
            <p className="text-white/70 text-sm">
              We keep you informed every step of the way with regular updates and transparent pricing.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-7 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Fast Turnaround</h3>
            <p className="text-white/70 text-sm">
              We respect your time and work efficiently to deliver results within your timeline.
            </p>
          </div>
        </div>
      </section>

      <section className="glass-section border-y border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose Us?</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-400 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Licensed & Insured</h3>
                <p className="text-white/70">
                  Fully licensed drone operator and insured contractor for your peace of mind.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <span className="text-purple-400 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Professional Equipment</h3>
                <p className="text-white/70">
                  State-of-the-art drones and professional tools for the best results.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-cyan-400 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Competitive Pricing</h3>
                <p className="text-white/70">
                  Fair and transparent pricing with no hidden fees or surprises.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-400 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Satisfaction Guaranteed</h3>
                <p className="text-white/70">
                  We're not satisfied until you are. Your happiness is our priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Whether you need aerial footage or home repairs, we're here to help bring your vision to life.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/contact" className="rounded-xl btn-gradient px-8 py-3 text-sm font-semibold text-white">
            Contact Us
          </a>
          <a href="/services" className="rounded-xl glass-button px-8 py-3 text-sm font-semibold text-white">
            View Services
          </a>
        </div>
      </section>
    </main>
  );
}
