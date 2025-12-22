"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type NavLink = { href: string; label: string };

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links: NavLink[] = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/contact", label: "Contact" },
    ],
    []
  );

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="Bamworks LLC logo" width={44} height={44} className="rounded-lg" priority />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-neutral-900">Bamworks LLC</div>
            <div className="text-xs text-neutral-500">engineering the way forward</div>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={active ? "font-semibold text-neutral-900" : "text-neutral-700 hover:text-neutral-900"}
              >
                {l.label}
              </Link>
            );
          })}
          <Link href="/contact" className="rounded-lg bg-green-600 px-3 py-1.5 font-semibold text-white hover:bg-green-700">
            Get a quote
          </Link>
        </nav>

        {/* Mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-lg border bg-white px-3 py-2 font-semibold hover:bg-neutral-50"
          aria-expanded={open}
        >
          ☰
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl px-5 py-4 grid gap-2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="rounded-xl px-4 py-3 font-semibold hover:bg-neutral-50">
                {l.label}
              </Link>
            ))}
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <Link href="/contact" className="rounded-xl bg-green-600 px-4 py-3 text-center font-semibold text-white hover:bg-green-700">
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}