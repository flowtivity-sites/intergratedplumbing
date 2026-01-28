"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-primary)] shadow-lg">
      {/* Top bar */}
      <div className="bg-[var(--color-dark)] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+61410313011" className="flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold">0410 313 011</span>
            </a>
            <span className="hidden md:inline text-[var(--color-accent)] font-semibold">24/7 Emergency Service</span>
          </div>
          <a href="mailto:brook@intergatedplumbing.com.au" className="hidden sm:flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            brook@intergatedplumbing.com.au
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/IPSmobilehead.png"
            alt="Intergrated Plumbing Solutions"
            width={280}
            height={60}
            className="h-12 md:h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-[var(--color-accent)] font-medium transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-white hover:text-[var(--color-accent)] font-medium transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-white hover:text-[var(--color-accent)] font-medium transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-[var(--color-accent)] font-medium transition-colors">
            Contact
          </Link>
          <a href="tel:+61410313011" className="btn-primary">
            CALL NOW
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-[var(--color-dark)] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="text-white hover:text-[var(--color-accent)] font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-[var(--color-accent)] font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-[var(--color-accent)] font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-[var(--color-accent)] font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <a href="tel:+61410313011" className="btn-primary text-center mt-2">
              CALL NOW
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
