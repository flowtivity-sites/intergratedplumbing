import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Intergrated Plumbing Solutions | Gold Coast Plumber",
  description: "Learn about Intergrated Plumbing Solutions - your trusted Gold Coast plumber servicing Tweed Heads to Beenleigh with professional plumbing, gas fitting, and drainage services.",
};

const values = [
  {
    title: "Reliability",
    description: "We show up on time, every time. You can count on us to be there when you need us.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Quality Workmanship",
    description: "We take pride in our work and stand behind every job we complete.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We listen, understand, and deliver solutions that work for you.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees or surprises. We provide clear, upfront quotes before starting any work.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const serviceAreas = [
  "Gold Coast",
  "Tweed Heads",
  "Beenleigh",
  "Robina",
  "Southport",
  "Burleigh Heads",
  "Surfers Paradise",
  "Coolangatta",
  "Palm Beach",
  "Nerang",
  "Mudgeeraba",
  "Varsity Lakes",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 grain-overlay">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/headerv3.jpg"
            alt="Intergrated Plumbing Solutions team"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-[var(--color-primary)]/85"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block bg-[var(--color-accent)] text-white px-4 py-2 text-sm font-semibold tracking-wider mb-6">
              ABOUT US
            </span>
            <h1 className="text-5xl md:text-6xl font-display text-white mb-6">
              YOUR TRUSTED GOLD COAST PLUMBERS
            </h1>
            <p className="text-xl text-white/80">
              Experienced in all aspects of plumbing, drainage & gas fitting. Proudly serving the Gold Coast community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
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
              <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-[var(--color-accent)] rounded-lg -z-0"></div>
            </div>

            <div>
              <span className="text-[var(--color-accent)] font-semibold tracking-wider text-sm">OUR STORY</span>
              <h2 className="text-4xl md:text-5xl font-display text-[var(--color-primary)] mt-3 mb-6">
                DEDICATED TO EXCELLENCE
              </h2>
              <p className="text-[var(--color-text-muted)] mb-6">
                Intergrated Plumbing Solutions is a Gold Coast plumbing and gas fitting business servicing all suburbs from Tweed Heads to the Beenleigh area.
              </p>
              <p className="text-[var(--color-text-muted)] mb-6">
                We strive to exceed customer expectations and provide the best service to customers, whether existing, referred, or brand new. Our commitment to quality workmanship and customer satisfaction has made us a trusted name in the Gold Coast plumbing industry.
              </p>
              <p className="text-[var(--color-text-muted)] mb-8">
                With extensive experience in domestic, commercial, and industrial plumbing, we have the skills and expertise to handle any plumbing challenge. From simple repairs to complex installations, we approach every job with the same dedication to excellence.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-[var(--color-surface)] rounded-lg">
                  <div className="text-4xl font-display text-[var(--color-accent)] mb-2">15+</div>
                  <div className="text-sm text-[var(--color-text-muted)]">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-[var(--color-surface)] rounded-lg">
                  <div className="text-4xl font-display text-[var(--color-accent)] mb-2">24/7</div>
                  <div className="text-sm text-[var(--color-text-muted)]">Emergency Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-semibold tracking-wider text-sm">WHY CHOOSE US</span>
            <h2 className="text-4xl md:text-5xl font-display text-[var(--color-primary)] mt-3">
              OUR VALUES
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-[var(--color-accent)] mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display text-[var(--color-primary)] mb-3">
                  {value.title.toUpperCase()}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[var(--color-accent)] font-semibold tracking-wider text-sm">COVERAGE</span>
              <h2 className="text-4xl md:text-5xl font-display text-[var(--color-primary)] mt-3 mb-6">
                SERVICE AREAS
              </h2>
              <p className="text-[var(--color-text-muted)] mb-8">
                We proudly service the entire Gold Coast region, from Tweed Heads in the south to Beenleigh in the north. No matter where you are in our service area, we&apos;re just a phone call away.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-[var(--color-text)]">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-[var(--color-primary)] p-8 rounded-lg text-white">
                <h3 className="text-2xl font-display mb-4">LICENSED & INSURED</h3>
                <p className="text-white/80 mb-6">
                  We are fully licensed Queensland plumbers and gas fitters, ensuring all work meets Australian standards and regulations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    QLD Licensed Plumber
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Licensed Gas Fitter
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Fully Insured
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Police Checked
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-accent)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
            READY TO GET STARTED?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free quote or to discuss your plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+61410313011" className="inline-block bg-[var(--color-primary)] text-white font-display text-xl px-8 py-4 hover:bg-[var(--color-dark)] transition-colors">
              CALL 0410 313 011
            </a>
            <Link href="/contact" className="inline-block bg-transparent border-2 border-white text-white font-display text-xl px-8 py-4 hover:bg-white hover:text-[var(--color-primary)] transition-colors">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
