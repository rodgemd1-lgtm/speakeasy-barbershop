import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get $10 Off — SpeakEasy Barber Lounge",
  description:
    "Get $10 off your first visit to Denver's #1 rated barbershop. 5.0★ with 431+ reviews. Hidden bookshelf entrance, complimentary whiskey.",
  robots: "noindex",  // Don't index landing pages
};

export default function OfferPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <p className="font-heading text-2xl text-[#FFCC00] mb-2">SPEAKEASY</p>
        <p className="font-body text-xs text-white/40 mb-8">
          Denver&apos;s #1 Rated Barbershop
        </p>

        {/* Offer */}
        <div className="bg-[#FFCC00] text-black rounded-2xl p-8 mb-8 shadow-[0_0_40px_rgba(255,204,0,0.3)]">
          <p className="font-body text-sm font-semibold uppercase tracking-widest mb-3">
            First Visit Offer
          </p>
          <h1 className="font-heading text-5xl mb-3">$10 OFF</h1>
          <p className="font-body text-sm">
            Your first appointment at SpeakEasy Barber Lounge
          </p>
        </div>

        {/* Value props */}
        <div className="space-y-3 mb-8">
          <p className="font-body text-white/70 text-sm">
            ★★★★★ <span className="text-white/90">5.0 rating</span> — 431+ reviews
          </p>
          <p className="font-body text-white/50 text-xs">
            Hidden bookshelf entrance • Complimentary whiskey &amp; cold brew
          </p>
          <p className="font-body text-white/50 text-xs">
            Barber to the Colorado Rockies &amp; Denver Broncos
          </p>
        </div>

        {/* CTA */}
        <a
          href="https://getsquire.com/book/speakeasy-barber-lounge"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#FFCC00] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD633] transition-all shadow-[0_0_20px_rgba(255,204,0,0.3)] mb-6"
        >
          Book Your Appointment
        </a>

        {/* SMS Form */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-6 mb-6">
          <p className="font-body text-sm text-white/60 mb-3">
            Text this code to <span className="text-[#FFCC00] font-semibold">(720) 466-3567</span>
          </p>
          <div className="bg-[#1a1a1a] rounded px-4 py-3 font-heading text-2xl text-[#FFCC00] tracking-[0.3em]">
            SPEAK10
          </div>
          <p className="font-body text-xs text-white/30 mt-3">
            We&apos;ll text you a $10 credit code. Msg &amp; data rates may apply. Reply STOP to cancel.
          </p>
        </div>

        {/* Back link */}
        <a
          href="/"
          className="font-body text-white/30 text-xs hover:text-white/60 transition-colors"
        >
          ← Back to speakeasybarberlounge.com
        </a>
      </div>
    </div>
  );
}