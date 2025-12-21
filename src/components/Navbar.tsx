'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
  brandName?: string;
}

export default function Navbar({ brandName = 'Bamworks LLC' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 glass-nav">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image src="/logo.jpg" alt={`${brandName} logo`} width={48} height={48} className="rounded-lg" />
          <div className="font-semibold text-white">{brandName}</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-6 text-sm md:flex items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/90 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/admin"
            className="rounded-lg glass-button px-4 py-2 text-white hover:bg-white/20 transition-all"
          >
            Admin
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 relative w-10 h-10 flex items-center justify-center rounded-lg glass-button hover:bg-white/20 transition-all"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 glass-menu border-l border-white/20 transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-2 p-6 pt-24">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/admin"
            onClick={closeMenu}
            className="px-4 py-3 mt-2 text-white glass-button hover:bg-white/20 rounded-lg transition-all text-center"
          >
            Admin
          </Link>
        </div>
      </nav>
    </header>
  );
}
