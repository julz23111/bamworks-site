export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
        <p className="text-xl text-white/80 max-w-3xl">
          Have a project in mind? We'd love to hear from you. Send us a message and we'll respond promptly.
        </p>
      </section>

      <section className="glass-section border-y border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              <form action="/api/contact" method="POST" className="glass-card rounded-3xl p-7">
                <div className="grid gap-4">
                  <input 
                    name="name" 
                    placeholder="Your Name" 
                    className="rounded-xl glass-input px-4 py-3" 
                    required 
                  />
                  <input 
                    name="email" 
                    placeholder="Email Address" 
                    type="email" 
                    className="rounded-xl glass-input px-4 py-3" 
                    required 
                  />
                  <input 
                    name="phone" 
                    placeholder="Phone Number (optional)" 
                    className="rounded-xl glass-input px-4 py-3" 
                  />
                  <select name="service" className="rounded-xl glass-input px-4 py-3">
                    <option value="">Select a Service</option>
                    <option value="Drone">Drone Video/Photography</option>
                    <option value="Remodeling">Remodeling/Home Repair</option>
                    <option value="Both">Both Services</option>
                    <option value="Other">Other/General Inquiry</option>
                  </select>
                  <textarea 
                    name="message" 
                    placeholder="Tell us about your project..." 
                    className="min-h-[160px] rounded-xl glass-input px-4 py-3" 
                    required 
                  />
                  <button className="rounded-xl btn-gradient px-5 py-3 text-sm font-semibold text-white">
                    Send Message
                  </button>
                  <p className="text-xs text-white/50">
                    You'll receive an automatic confirmation email after sending.
                  </p>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="glass-card rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Email</h3>
                        <p className="text-white/70 text-sm">
                          Get a response within 24 hours
                        </p>
                        <a href="mailto:info@bamworks.com" className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block">
                          info@bamworks.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Phone</h3>
                        <p className="text-white/70 text-sm">
                          Call or text for quick questions
                        </p>
                        <a href="tel:+15555551234" className="text-purple-400 hover:text-purple-300 text-sm mt-2 inline-block">
                          (555) 555-1234
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                        <div className="text-white/70 text-sm space-y-1 mt-2">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                          <p>Sunday: By appointment</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">What to Include in Your Message:</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>Type of service needed (Drone or Remodeling)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>Project location/address</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>Desired timeline or deadline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>Budget range (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>Any specific requirements or concerns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass-card rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">How quickly can you start?</h3>
            <p className="text-white/70 text-sm">
              Most drone shoots can be scheduled within a few days. Remodeling projects vary based on scope and current schedule.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Do you offer free estimates?</h3>
            <p className="text-white/70 text-sm">
              Yes! We provide free consultations and estimates for all remodeling projects. Drone quotes are typically provided same-day.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">What areas do you serve?</h3>
            <p className="text-white/70 text-sm">
              We serve the greater metropolitan area and surrounding regions. Contact us to confirm service availability in your location.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Are you licensed and insured?</h3>
            <p className="text-white/70 text-sm">
              Absolutely. We are fully licensed and insured for both drone operations and construction work, giving you complete peace of mind.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
