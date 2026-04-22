import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refer a Friend — SpeakEasy Barber Lounge",
  description:
    "Share SpeakEasy with a friend and you both get $10 off. Denver's #1 rated barbershop.",
  robots: "noindex",
};

export default function ReferPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <p className="font-heading text-2xl text-[#FFCC00] mb-2">SPEAKEASY</p>

        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 mb-8">
          <p className="font-body text-[#FFCC00] text-sm font-semibold tracking-widest uppercase mb-4">
            Refer a Friend
          </p>
          <h1 className="font-heading text-4xl text-white mb-3">
            You both get $10 off
          </h1>
          <p className="font-body text-white/60 text-sm mb-6">
            Share your referral code with a friend. When they book their first
            appointment, you each save $10.
          </p>

          <div className="bg-[#1a1a1a] rounded-lg px-4 py-3 mb-6">
            <p className="font-body text-xs text-white/40 mb-1">Your Referral Code</p>
            <p className="font-heading text-3xl text-[#FFCC00] tracking-[0.2em]">
              SHARE10
            </p>
          </div>

          <p className="font-body text-white/40 text-xs mb-6">
            Friend presents this code at checkout or texts it to (720) 466-3567
          </p>

          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              "Hey! Check out SpeakEasy Barber Lounge — Denver's #1 rated barbershop (5.0★, 431+ reviews). Hidden bookshelf entrance, complimentary whiskey. Use code SHARE10 and we both get $10 off! https://speakeasybarberlounge.com/refer"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#25D366] text-white px-6 py-3 rounded font-semibold text-sm hover:bg-[#20bd5a] transition-colors mr-2"
          >
            Share via Text
          </a>
        </div>

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