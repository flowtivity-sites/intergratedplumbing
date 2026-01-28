import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us | Intergrated Plumbing Solutions | Gold Coast Plumber",
  description: "Contact Intergrated Plumbing Solutions for all your plumbing needs. Call 0410 313 011 or fill out our contact form for a free quote.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 grain-overlay">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/headerv3.jpg"
            alt="Contact Intergrated Plumbing Solutions"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-[var(--color-primary)]/85"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block bg-[var(--color-accent)] text-white px-4 py-2 text-sm font-semibold tracking-wider mb-6">
              GET IN TOUCH
            </span>
            <h1 className="text-5xl md:text-6xl font-display text-white mb-6">
              CONTACT US
            </h1>
            <p className="text-xl text-white/80">
              Ready to get started? Contact us today for a free quote or to discuss your plumbing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-display text-[var(--color-primary)] mb-6">
                SEND US A MESSAGE
              </h2>
              <form
                action="https://formspree.io/f/xwpkqgjd"
                method="POST"
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text)] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-colors"
                      placeholder="0400 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[var(--color-text)] mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option value="domestic">Domestic Plumbing</option>
                    <option value="commercial">Commercial Plumbing</option>
                    <option value="gas">Gas Fitting</option>
                    <option value="hotwater">Hot Water Systems</option>
                    <option value="drainage">Drainage</option>
                    <option value="emergency">Emergency Plumbing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your plumbing needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-center"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Emergency Banner */}
              <div className="bg-[var(--color-accent)] p-6 rounded-lg text-white">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                  <span className="font-semibold tracking-wider text-sm">24/7 EMERGENCY SERVICE</span>
                </div>
                <h3 className="text-3xl font-display mb-2">CALL NOW</h3>
                <a href="tel:+61410313011" className="text-4xl font-display hover:underline">
                  0410 313 011
                </a>
              </div>

              {/* Contact Details */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-display text-[var(--color-primary)] mb-6">
                  CONTACT DETAILS
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-primary)]">Phone</h4>
                      <a href="tel:+61410313011" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                        0410 313 011
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-primary)]">Email</h4>
                      <a href="mailto:brook@intergatedplumbing.com.au" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors break-all">
                        brook@intergatedplumbing.com.au
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-primary)]">Address</h4>
                      <p className="text-[var(--color-text-muted)]">
                        4 Muresk Ct<br />
                        Gold Coast, QLD 4218
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-primary)]">Hours</h4>
                      <p className="text-[var(--color-text-muted)]">
                        24/7 Emergency Service<br />
                        <span className="text-sm">Standard hours: Mon-Fri 7am-5pm</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Service Area */}
              <div className="bg-[var(--color-primary)] p-6 rounded-lg text-white">
                <h3 className="text-xl font-display mb-3">SERVICE AREA</h3>
                <p className="text-white/80">
                  We service the entire Gold Coast region from Tweed Heads to Beenleigh, including all suburbs in between.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.0147037145!2d153.41599731506276!3d-28.007839982654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9107c5e0c1e10d%3A0x5017d681632ab80!2sGold%20Coast%20QLD%2C%20Australia!5e0!3m2!1sen!2sau!4v1704067200000!5m2!1sen!2sau"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Intergrated Plumbing Solutions Location"
        ></iframe>
      </section>
    </>
  );
}
