import Link from "next/link";
import Image from "next/image";

const mainServices = [
  {
    name: "Domestic Plumbing",
    description: "Complete plumbing solutions for homes including repairs, installations, and maintenance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: "Commercial Plumbing",
    description: "Industrial-grade plumbing services for businesses, offices, and commercial properties.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: "Gas Fitting",
    description: "Licensed gas fitting services including installations, repairs, and safety inspections.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
  },
  {
    name: "Hot Water Systems",
    description: "Installation, repair, and replacement of all hot water system types and brands.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Drainage Solutions",
    description: "Expert drainage services including CCTV inspections, jet rodding, and blockage removal.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    name: "24/7 Emergency",
    description: "Round-the-clock emergency plumbing services. We're here when you need us most.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const trustSignals = [
  { number: "15+", label: "Years Experience" },
  { number: "24/7", label: "Emergency Service" },
  { number: "100%", label: "Satisfaction Guaranteed" },
  { number: "QLD", label: "Licensed & Insured" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 grain-overlay overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/headerv3.jpg"
            alt="Intergrated Plumbing Solutions team with work vehicles"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/90 to-[var(--color-primary)]/70"></div>
        </div>

        {/* Geometric accents */}
        <div className="geometric-accent -top-12 -right-12 hidden lg:block"></div>
        <div className="geometric-accent bottom-20 -left-12 w-32 h-32 hidden lg:block"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl">
            <div className="reveal">
              <span className="inline-block bg-[var(--color-accent)] text-white px-4 py-2 text-sm font-semibold tracking-wider mb-6">
                GOLD COAST&apos;S TRUSTED PLUMBER
              </span>
            </div>
            <h1 className="reveal text-5xl md:text-6xl lg:text-7xl font-display text-white mb-6 leading-tight">
              EXPERIENCED IN ALL ASPECTS OF{" "}
              <span className="text-[var(--color-accent)]">PLUMBING, DRAINAGE & GAS FITTING</span>
            </h1>
            <p className="reveal text-xl text-white/80 mb-8 max-w-xl">
              Servicing the entire Gold Coast region from Tweed Heads to Beenleigh. Professional, reliable, and always on time.
            </p>
            <div className="reveal flex flex-col sm:flex-row gap-4">
              <a href="tel:+61410313011" className="btn-primary text-center">
                CALL 0410 313 011
              </a>
              <Link href="/contact" className="btn-secondary text-center">
                GET A FREE QUOTE
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Trust Signals Bar */}
      <section className="bg-[var(--color-primary)] py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center reveal">
                <div className="text-4xl md:text-5xl font-display text-[var(--color-accent)] mb-2">
                  {signal.number}
                </div>
                <div className="text-white/80 text-sm uppercase tracking-wider">
                  {signal.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-semibold tracking-wider text-sm">WHAT WE DO</span>
            <h2 className="text-4xl md:text-5xl font-display text-[var(--color-primary)] mt-3 mb-6">
              OUR SERVICES
            </h2>
            <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
              From emergency repairs to complete installations, we provide comprehensive plumbing, gas fitting, and drainage solutions for residential and commercial clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="service-card bg-white p-8 rounded-lg shadow-md reveal"
              >
                <div className="w-16 h-16 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-[var(--color-accent)] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display text-[var(--color-primary)] mb-3">
                  {service.name.toUpperCase()}
                </h3>
                <p className="text-[var(--color-text-muted)]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:text-[var(--color-accent)] transition-colors"
            >
              VIEW ALL SERVICES
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="geometric-accent top-20 -right-16 w-48 h-48"></div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/headerv3.jpg"
                  alt="Intergrated Plumbing Solutions team with work vehicles"
                  width={600}
                  height={200}
                  className="w-full h-auto object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[var(--color-accent)] rounded-lg -z-0"></div>
            </div>

            <div>
              <span className="text-[var(--color-accent)] font-semibold tracking-wider text-sm">ABOUT US</span>
              <h2 className="text-4xl md:text-5xl font-display text-[var(--color-primary)] mt-3 mb-6">
                YOUR LOCAL GOLD COAST PLUMBERS
              </h2>
              <p className="text-[var(--color-text-muted)] mb-6">
                Intergrated Plumbing Solutions is a Gold Coast plumbing and gas fitting business servicing all suburbs from Tweed Heads to the Beenleigh area.
              </p>
              <p className="text-[var(--color-text-muted)] mb-8">
                We strive to exceed customer expectations and provide the best service to customers, whether existing, referred, or brand new. Our team is dedicated to delivering quality workmanship with a focus on reliability and customer satisfaction.
              </p>
              <Link href="/about" className="btn-primary inline-block">
                LEARN MORE ABOUT US
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="py-20 bg-[var(--color-primary)] relative grain-overlay overflow-hidden">
        <div className="geometric-accent -top-16 left-20 w-40 h-40"></div>
        <div className="geometric-accent -bottom-16 right-20 w-56 h-56"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold tracking-wider text-sm mb-4">
            <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-pulse"></span>
            AVAILABLE 24/7
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6">
            PLUMBING EMERGENCY?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Don&apos;t let a plumbing emergency ruin your day. Our team is on standby around the clock to handle any urgent plumbing situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+61410313011" className="btn-primary text-center text-xl px-10 py-5">
              CALL NOW: 0410 313 011
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[var(--color-accent)] font-semibold tracking-wider text-sm">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-display text-[var(--color-primary)] mt-3">
              COMMON QUESTIONS
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What areas do you service on the Gold Coast?",
                a: "We service the entire Gold Coast region from Tweed Heads in the south to Beenleigh in the north, including all suburbs in between."
              },
              {
                q: "Do you offer 24/7 emergency plumbing services?",
                a: "Yes, we provide round-the-clock emergency plumbing services. Call us anytime on 0410 313 011 for urgent plumbing issues including burst pipes, gas leaks, blocked drains, and hot water emergencies."
              },
              {
                q: "Are you licensed for gas fitting?",
                a: "Yes, we are fully licensed and insured for all gas fitting work in Queensland, including installations, repairs, and safety inspections."
              },
              {
                q: "How much does a plumber cost on the Gold Coast?",
                a: "Costs vary depending on the job. We offer free quotes for most work, and our pricing is competitive and transparent with no hidden fees. Call us for a quote."
              },
              {
                q: "What plumbing services do you offer?",
                a: "We offer comprehensive plumbing services including domestic and commercial plumbing, gas fitting, hot water systems, drainage solutions, CCTV inspections, leak detection, and emergency repairs."
              }
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-lg shadow-md group">
                <summary className="p-6 cursor-pointer font-semibold text-[var(--color-primary)] flex justify-between items-center list-none">
                  {faq.q}
                  <svg className="w-5 h-5 text-[var(--color-accent)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-[var(--color-text-muted)]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
