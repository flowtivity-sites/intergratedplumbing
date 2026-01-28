import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Intergrated Plumbing Solutions | Gold Coast Plumber",
  description: "Full range of plumbing, gas fitting, and drainage services on the Gold Coast. Domestic, commercial, emergency plumbing, hot water systems, and more.",
};

const serviceCategories = [
  {
    title: "Plumbing Services",
    description: "Complete plumbing solutions for residential, commercial, and industrial properties.",
    image: "/images/headerv3.jpg",
    services: [
      "Domestic Plumbing",
      "Commercial Plumbing",
      "Industrial Plumbing",
      "Residential Plumbing",
      "Maintenance Plumbing",
      "Plumbing for home renovations",
      "New plumbing installations",
      "Renovation plumbing",
      "Tap maintenance and installation",
      "Toilet maintenance & installation",
      "Shower repairs",
      "Dishwasher installation",
      "Fridge water installation",
      "Install bathroom, laundry and kitchen fixtures",
    ],
  },
  {
    title: "Gas Fitting",
    description: "Licensed gas fitting services for all residential and commercial applications.",
    image: "/images/headerv3.jpg",
    services: [
      "Gas Installation",
      "Gas pipe repairs",
      "Gas leak repairs",
      "Gas hot water system installation",
      "Gas room heaters installation",
      "Gas stove and oven installation & repair",
      "Gas appliance servicing & maintenance",
      "Gas cooktop installation",
      "Commercial gas fitting",
      "Solar hot water with gas boost",
      "All brands of gas appliances installed and serviced",
    ],
  },
  {
    title: "Drainage Solutions",
    description: "Expert drainage services including inspections, repairs, and new installations.",
    image: "/images/headerv3.jpg",
    services: [
      "Drainage Plumbing",
      "CCTV camera drain inspections",
      "High pressure jet-rodder for drain cleaning",
      "Drain blockages",
      "Blocked drains",
      "Blocked drains, stormwater and sewer installation",
      "Septic system maintenance",
      "Septic tank installations",
    ],
  },
  {
    title: "Hot Water Systems",
    description: "Installation, repair, and replacement of all hot water system types.",
    image: "/images/headerv3.jpg",
    services: [
      "Hot Water Systems",
      "Hot water installation",
      "Hot water system repair",
      "Hot water solutions",
      "Hot water system installations",
      "Gas hot water system installation",
      "Instantaneous hot water system installation",
      "Hot water system leaking repairs",
    ],
  },
  {
    title: "Leak Detection & Repairs",
    description: "Advanced electronic leak detection and professional repair services.",
    image: "/images/headerv3.jpg",
    services: [
      "Water leak detection - Electronic",
      "Leaks repaired",
      "Leaking water pipe repairs",
      "Pipes leaking",
      "Leaking copper pipes",
      "Gas leaks",
      "Water leaks",
      "Toilet pipe leaks",
      "Dishwasher leaks",
      "Washing machine leaks",
    ],
  },
  {
    title: "Emergency Services",
    description: "24/7 emergency plumbing response for urgent situations.",
    image: "/images/headerv3.jpg",
    services: [
      "24hr Emergency Plumbing",
      "Emergency Plumbing",
      "Toilet overflow",
      "Burst pipes",
      "Gas leaks",
      "Blocked drains",
    ],
  },
  {
    title: "Roof & Guttering",
    description: "Complete roof plumbing and guttering solutions.",
    image: "/images/headerv3.jpg",
    services: [
      "Roof plumbing",
      "Metal roofing",
      "Guttering and downpipe repairs",
      "Guttering and down-pipe installations",
    ],
  },
  {
    title: "Water Systems",
    description: "Water filtration, tanks, and sustainable water solutions.",
    image: "/images/headerv3.jpg",
    services: [
      "Water filtration fitted",
      "Water filtration",
      "Water tank installation",
      "Rain water harvesting",
      "Grey water systems",
      "Rain water harvesting Grey water installations",
      "Water compliance certificates for rental properties",
    ],
  },
  {
    title: "Fire Safety",
    description: "Fire safety plumbing installations and maintenance.",
    image: "/images/headerv3.jpg",
    services: [
      "Fire Hydrants & Reels",
      "Fire hose reel installation",
      "Fire Hydrant installation",
    ],
  },
  {
    title: "Specialty Services",
    description: "Additional specialized plumbing services.",
    image: "/images/headerv3.jpg",
    services: [
      "Concrete cutting",
      "Insinkerator blockage repair",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 grain-overlay">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/headerv3.jpg"
            alt="Plumbing services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[var(--color-primary)]/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block bg-[var(--color-accent)] text-white px-4 py-2 text-sm font-semibold tracking-wider mb-6">
              OUR SERVICES
            </span>
            <h1 className="text-5xl md:text-6xl font-display text-white mb-6">
              COMPREHENSIVE PLUMBING SOLUTIONS
            </h1>
            <p className="text-xl text-white/80 mb-8">
              From routine maintenance to emergency repairs, we offer a full range of plumbing, gas fitting, and drainage services for the Gold Coast region.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-20">
            {serviceCategories.map((category, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src={category.image}
                        alt={category.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className={`absolute -bottom-4 ${index % 2 === 0 ? '-right-4' : '-left-4'} w-full h-full border-4 border-[var(--color-accent)] rounded-lg -z-0`}></div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-3xl md:text-4xl font-display text-[var(--color-primary)] mb-4">
                    {category.title.toUpperCase()}
                  </h2>
                  <p className="text-[var(--color-text-muted)] mb-6">
                    {category.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {category.services.map((service, sIndex) => (
                      <li key={sIndex} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[var(--color-text)]">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-primary)] grain-overlay">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
            NEED A QUOTE?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get in touch for a free, no-obligation quote on any of our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+61410313011" className="btn-primary text-center">
              CALL 0410 313 011
            </a>
            <Link href="/contact" className="btn-secondary text-center">
              REQUEST A QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
