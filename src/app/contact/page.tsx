export default function ContactPage() {
    return (
      <main className="mx-auto max-w-6xl px-5 py-16">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-4 text-neutral-600">Send a message and you’ll receive a confirmation email.</p>
  
        <form action="/api/contact" method="POST" className="mt-8 max-w-xl rounded-3xl border bg-white p-7">
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
          </div>
        </form>
      </main>
    );
  }