import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpeakEasy Barber Lounge | Denver's #1 Rated Barbershop",
  description:
    "5.0★ rated barbershop in LoDo Denver. Hidden bookshelf entrance, complimentary whiskey & nitro cold brew, barber to pro athletes. Book your appointment today.",
  keywords: [
    "barbershop Denver",
    "best barber Denver",
    "men's haircut Denver",
    "LoDo barbershop",
    "speakeasy barbershop",
    "premium grooming Denver",
  ],
  openGraph: {
    title: "SpeakEasy Barber Lounge — Denver's #1 Rated Barbershop",
    description:
      "Hidden bookshelf entrance. Complimentary whiskey. Barber to the Rockies & Broncos. 5.0★ with 431+ reviews.",
    type: "website",
    locale: "en_US",
    url: "https://speakeasybarberlounge.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpeakEasy Barber Lounge",
    description: "Denver's #1 rated barbershop. 5.0★ with 431+ reviews.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Fonts — loaded via link tag for Tailwind v4 compatibility */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=GFS+Didot&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Local Business Schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Barbershop",
              name: "SpeakEasy Barber Lounge",
              image: "https://speakeasybarberlounge.com/og-image.jpg",
              "@id": "https://speakeasybarberlounge.com",
              url: "https://speakeasybarberlounge.com",
              telephone: "+1-720-466-3567",
              email: "contact@speakeasybarberlounge.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1635 Blake Street, Suite 201",
                addressLocality: "Denver",
                addressRegion: "CO",
                postalCode: "80202",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 39.7582,
                longitude: -105.0096,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              priceRange: "$45-$115",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "431",
                bestRating: "5",
              },
              sameAs: [
                "https://www.instagram.com/speakeasybarberlounge",
                "https://www.facebook.com/speakeasybarberlounge",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Barber Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Haircut",
                      description: "Premium men's haircut by Denver's best barbers",
                    },
                    price: "60",
                    priceCurrency: "USD",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Haircut + Beard Trim",
                      description: "Haircut and precision beard trim",
                    },
                    price: "80",
                    priceCurrency: "USD",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Hot Towel Shave",
                      description: "Traditional hot towel straight razor shave",
                    },
                    price: "65",
                    priceCurrency: "USD",
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-body min-h-screen bg-black text-white">
        {children}
      </body>
    </html>
  );
}