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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=GFS+Didot&family=Montserrat:wght@300;400;500;600;700;800;900&family=Roboto:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}