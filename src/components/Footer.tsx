import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t divider mt-16">
      <div className="container-max py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="text-sm font-semibold">Bamworks LLC</div>
            <p className="mt-2 text-sm text-neutral-600">
              Engineering the way forward.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <div className="text-sm font-semibold">Pages</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>
                <Link href="/" className="hover:opacity-80">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-80">About</Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-80">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-80">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* CTA */}
          <div>
            <div className="text-sm font-semibold">Get in touch</div>
            <p className="mt-3 text-sm text-neutral-600">
              Questions or project ideas?
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
              >
                Contact Bamworks
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t pt-6 text-xs text-neutral-500 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Bamworks LLC</div>
          <div className="flex gap-4">
            <span>Drone Services</span>
            <span>Remodeling</span>
          </div>
        </div>
      </div>
    </footer>
  );
}