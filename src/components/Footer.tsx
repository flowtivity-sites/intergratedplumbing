import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-white">
      {/* CTA Banner */}
      <div className="bg-[var(--color-accent)] py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-display text-white mb-4">NEED A PLUMBER NOW?</h3>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            24/7 emergency service available. We service the entire Gold Coast from Tweed Heads to Beenleigh.
          </p>
          <a href="tel:+61410313011" className="inline-block bg-[var(--color-primary)] text-white font-display text-xl px-8 py-4 hover:bg-[var(--color-dark)] transition-colors">
            CALL 0410 313 011
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h.01M8 11h.01M8 15h.01M12 7h.01M12 11h.01M12 15h.01M16 7h.01M16 11h.01M16 15h.01M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-display text-lg tracking-wider">INTERGRATED PLUMBING</h4>
                <p className="text-[var(--color-accent)] text-xs tracking-widest">SOLUTIONS</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Experienced in all aspects of plumbing, drainage & gas fitting. Servicing the Gold Coast from Tweed Heads to Beenleigh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-6 text-[var(--color-accent)]">QUICK LINKS</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl mb-6 text-[var(--color-accent)]">OUR SERVICES</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Domestic Plumbing</li>
              <li className="text-gray-400">Commercial Plumbing</li>
              <li className="text-gray-400">Gas Fitting</li>
              <li className="text-gray-400">Hot Water Systems</li>
              <li className="text-gray-400">Emergency Plumbing</li>
              <li className="text-gray-400">Drainage Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl mb-6 text-[var(--color-accent)]">CONTACT US</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">4 Muresk Ct<br />Gold Coast, QLD 4218</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+61410313011" className="text-gray-400 hover:text-white transition-colors">0410 313 011</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:brook@intergatedplumbing.com.au" className="text-gray-400 hover:text-white transition-colors text-sm break-all">brook@intergatedplumbing.com.au</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Intergrated Plumbing Solutions. All rights reserved.</p>
          <p>Servicing Gold Coast, Tweed Heads to Beenleigh</p>
        </div>
      </div>
    </footer>
  );
}
