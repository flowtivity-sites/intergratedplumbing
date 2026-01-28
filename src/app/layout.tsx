import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Intergrated Plumbing Solutions | Plumber Gold Coast | 24/7 Emergency",
  description: "Gold Coast's trusted plumber for domestic, commercial & emergency plumbing. Gas fitting, drainage, hot water systems. Servicing Tweed Heads to Beenleigh. Call 0410 313 011.",
  keywords: "plumber Gold Coast, emergency plumber, gas fitter, drainage, hot water systems, blocked drains, Tweed Heads, Beenleigh",
  openGraph: {
    title: "Intergrated Plumbing Solutions | Gold Coast Plumber",
    description: "Experienced in all aspects of plumbing, drainage & gas fitting. 24/7 emergency service available.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Plumber",
              "name": "Intergrated Plumbing Solutions",
              "description": "Experienced in all aspects of plumbing, drainage & gas fitting. Servicing the Gold Coast from Tweed Heads to Beenleigh.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4 Muresk Ct",
                "addressLocality": "Gold Coast",
                "addressRegion": "QLD",
                "postalCode": "4218",
                "addressCountry": "AU"
              },
              "telephone": "+61-410-313-011",
              "email": "brook@intergatedplumbing.com.au",
              "url": "https://intergratedplumbing.sites.flowtivity.com.au",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": -28.0167,
                  "longitude": 153.4000
                },
                "geoRadius": "50000"
              },
              "serviceType": [
                "Plumbing",
                "Gas Fitting",
                "Drainage",
                "Hot Water Systems",
                "Emergency Plumbing"
              ],
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
