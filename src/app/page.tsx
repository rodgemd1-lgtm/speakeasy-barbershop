import Link from "next/link";

const services = [
  {
    name: "Haircut",
    price: "$60",
    duration: "30 min",
    description:
      "Precision cut from Denver's best barbers. Includes neck shave and hot towel finish.",
  },
  {
    name: "Haircut + Beard Trim",
    price: "$80",
    duration: "30 min",
    description:
      "Our signature service. Precision haircut with sculpted beard trim and hot towel.",
    popular: true,
  },
  {
    name: "Razor Fade",
    price: "$65",
    duration: "30 min",
    description: "Sharp, clean fades from David — the barber to an NBA MVP.",
  },
  {
    name: "Hot Towel Shave",
    price: "$65",
    duration: "30 min",
    description:
      "Traditional straight razor shave with hot towel prep. Pure relaxation.",
  },
  {
    name: "Haircut + Hot Towel Shave",
    price: "$115",
    duration: "60 min",
    description: "The full SpeakEasy experience. Haircut plus hot towel straight razor shave.",
  },
  {
    name: "Hair Line + Beard Trim",
    price: "$60",
    duration: "30 min",
    description: "Keep the shape clean between full cuts. Lineup and beard detail.",
  },
];

const barbers = [
  {
    name: "Julian Cuestas",
    nickname: "Julz",
    title: "Co-Owner",
    tagline: "Barber to the Rockies & Broncos",
    bio: "6 seasons with the Colorado Rockies. 3 seasons with the Denver Broncos. Born in Chihuahua, Mexico. Denver raised. The driving force behind SpeakEasy.",
    booking: "https://getsqr.co/julian-cuestas",
    accent: "from-yellow-400 to-amber-500",
  },
  {
    name: "David Ramirez",
    nickname: "The G.O.A.T.",
    title: "Co-Owner",
    tagline: "Former barber to NBA MVP Nikola Jokić",
    bio: "9+ years behind the chair. Denver native. The man who kept an MVP looking fresh. When locals call you The G.O.A.T., you earn it.",
    booking: "https://getsqr.co/david-ramirez-3",
    accent: "from-blue-400 to-cyan-500",
  },
  {
    name: "Drea Gaytan",
    nickname: "Drea",
    title: "Barber",
    tagline: "9 years of precision & style",
    bio: "Born and raised in Denver. Nearly 9 years behind the chair, 5 exclusively in barbershops. Specializes in barbering, color, and making you look good.",
    booking: "https://getsqr.co/drea-gaytan",
    accent: "from-pink-400 to-rose-500",
  },
];

const amenities = [
  { icon: "🥃", name: "Complimentary Whiskey", desc: "Premium spirits while you wait" },
  { icon: "🍺", name: "Craft Beer & Cold Brew", desc: "Nitro cold brew on tap" },
  { icon: "🎱", name: "Pool Table", desc: "Shoot a game while your haircut sets" },
  { icon: "💆", name: "Massage Chairs", desc: "Relax during your service" },
  { icon: "⏰", name: "50% Punctuality Guarantee", desc: "If we're not on time, half off" },
  { icon: "🎁", name: "First Visit Gift", desc: "$10 off your first appointment" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ── NAV ─────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="font-heading text-xl tracking-wider text-gold">
            SPEAKEASY
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-body">
            <a href="#services" className="text-white/70 hover:text-gold transition-colors">
              Services
            </a>
            <a href="#barbers" className="text-white/70 hover:text-gold transition-colors">
              Barbers
            </a>
            <a href="#experience" className="text-white/70 hover:text-gold transition-colors">
              Experience
            </a>
            <a href="#reviews" className="text-white/70 hover:text-gold transition-colors">
              Reviews
            </a>
            <a
              href="https://getsquire.com/book/speakeasy-barber-lounge"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFCC00] text-black px-5 py-2 rounded font-semibold hover:bg-[#FFD633] transition-colors"
            >
              Book Now
            </a>
          </div>
          {/* Mobile: just Book Now */}
          <a
            href="https://getsquire.com/book/speakeasy-barber-lounge"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden bg-[#FFCC00] text-black px-4 py-2 rounded font-semibold text-sm"
          >
            Book
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background: dark speakeasy atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

        {/* Gold gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFCC00]/5 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 pt-20">
          {/* 5.0 Rating badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-[#FFCC00]/30 rounded-full mb-8">
            <span className="text-[#FFCC00] text-lg">★★★★★</span>
            <span className="text-white/90 font-body text-sm">
              5.0 — <span className="text-white/60">431+ reviews</span>
            </span>
            <span className="text-white/40 text-xs">|</span>
            <span className="text-[#FFCC00] text-xs font-semibold">#1 in Denver</span>
          </div>

          {/* Main headline */}
          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl text-white mb-6 leading-tight">
            Denver&apos;s Best Kept
            <br />
            <span className="text-[#FFCC00]">Secret</span>
          </h1>

          <p className="font-body text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-4">
            Behind an unmarked bookshelf in LoDo, the city&apos;s top barbers
            craft precision cuts with complimentary whiskey and zero wait.
          </p>

          <p className="font-body text-sm text-white/40 mb-10">
            Barber to the Colorado Rockies · Denver Broncos · Nikola Jokić
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://getsquire.com/book/speakeasy-barber-lounge"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFCC00] text-black px-8 py-4 rounded font-bold text-lg hover:bg-[#FFD633] transition-all hover:shadow-[0_0_30px_rgba(255,204,0,0.4)]"
            >
              Book Your Appointment
            </a>
            <a
              href="#experience"
              className="border border-white/20 text-white/80 px-8 py-4 rounded font-semibold hover:border-white/40 hover:text-white transition-all"
            >
              See the Experience
            </a>
          </div>

          {/* Hidden entrance hint */}
          <div className="mt-16 text-white/20 text-xs font-body animate-pulse">
            ↓ Walk through the bookshelf ↓
          </div>
        </div>
      </section>

      {/* ── GOLD DIVIDER ─────────────────────────────────────────── */}
      <div className="gold-line" />

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <section id="services" className="py-20 sm:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-[#FFCC00] text-sm font-semibold tracking-widest uppercase mb-3">
              The Menu
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-white">
              Premium Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className={`service-card bg-[#0a0a0a] border rounded-lg p-6 ${
                  service.popular
                    ? "border-[#FFCC00]/40 shadow-[0_0_20px_rgba(255,204,0,0.1)]"
                    : "border-white/10"
                }`}
              >
                {service.popular && (
                  <span className="inline-block bg-[#FFCC00] text-black text-xs font-bold px-2 py-1 rounded mb-3">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="font-heading text-xl text-white mb-1">
                  {service.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-body text-2xl font-bold text-[#FFCC00]">
                    {service.price}
                  </span>
                  <span className="font-body text-sm text-white/40">
                    {service.duration}
                  </span>
                </div>
                <p className="font-body text-sm text-white/60 mb-4">
                  {service.description}
                </p>
                <a
                  href="https://getsquire.com/book/speakeasy-barber-lounge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[#FFCC00] text-sm hover:text-[#FFD633] transition-colors"
                >
                  Book this service →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOLD DIVIDER ─────────────────────────────────────────── */}
      <div className="gold-line" />

      {/* ── BARBERS ──────────────────────────────────────────────── */}
      <section id="barbers" className="py-20 sm:py-28 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-[#FFCC00] text-sm font-semibold tracking-widest uppercase mb-3">
              Your Barbers
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-white">
              Meet the Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {barbers.map((barber) => (
              <div
                key={barber.name}
                className="barber-card bg-[#0a0a0a] border border-white/10 rounded-lg p-8 text-center"
              >
                {/* Avatar placeholder */}
                <div
                  className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${barber.accent} flex items-center justify-center text-3xl font-heading text-black mb-6`}
                >
                  {barber.name.split(" ").map((n) => n[0]).join("")}
                </div>

                <h3 className="font-heading text-2xl text-white mb-1">
                  {barber.name}
                </h3>
                <p className="font-body text-[#FFCC00] text-sm font-semibold mb-2">
                  {barber.tagline}
                </p>
                <p className="font-body text-xs text-white/40 mb-4">
                  {barber.title}
                </p>
                <p className="font-body text-sm text-white/60 mb-6">
                  {barber.bio}
                </p>
                <a
                  href={barber.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FFCC00] text-black px-6 py-2 rounded font-semibold text-sm hover:bg-[#FFD633] transition-colors"
                >
                  Book with {barber.name.split(" ")[0]}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOLD DIVIDER ─────────────────────────────────────────── */}
      <div className="gold-line" />

      {/* ── THE EXPERIENCE ─────────────────────────────────────────── */}
      <section id="experience" className="py-20 sm:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-[#FFCC00] text-sm font-semibold tracking-widest uppercase mb-3">
              The Speakeasy
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mb-4">
              More Than a Haircut
            </h2>
            <p className="font-body text-white/60 max-w-2xl mx-auto">
              Behind an unmarked bookshelf, Denver&apos;s best barbershop hides in
              plain sight. Complimentary whiskey. Pool table. Massage chairs. This
              isn&apos;t a barbershop — it&apos;s an experience.
            </p>
          </div>

          {/* Bookshelf entrance reveal */}
          <div className="bookshelf-entrance bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-lg p-12 text-center mb-12">
            <p className="font-heading text-2xl sm:text-3xl text-white mb-4">
              &ldquo;Walk through the bookshelf.&rdquo;
            </p>
            <p className="font-body text-white/50 text-sm">
              That&apos;s all we can tell you. The rest, you have to see for yourself.
            </p>
          </div>

          {/* Amenities grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {amenities.map((amenity) => (
              <div
                key={amenity.name}
                className="bg-[#0a0a0a] border border-white/10 rounded-lg p-6 text-center"
              >
                <div className="text-3xl mb-3">{amenity.icon}</div>
                <h3 className="font-heading text-lg text-white mb-2">
                  {amenity.name}
                </h3>
                <p className="font-body text-sm text-white/50">
                  {amenity.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOLD DIVIDER ─────────────────────────────────────────── */}
      <div className="gold-line" />

      {/* ── REVIEWS ─────────────────────────────────────────────── */}
      <section id="reviews" className="py-20 sm:py-28 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-[#FFCC00] text-sm font-semibold tracking-widest uppercase mb-3">
              Social Proof
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mb-4">
              431+ Five-Star Reviews
            </h2>
            <p className="font-body text-white/60">
              #1 rated barbershop in Denver, CO (CX Research Institute, 92/100)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Walked through a bookshelf and into the best barbershop I've ever been to. Julian gave me the cleanest fade I've had in Denver.",
                author: "Marcus R.",
                stars: 5,
              },
              {
                text: "David is THE G.O.A.T. Barbershop experience that makes you forget you're getting a haircut. Whiskey, pool table, and perfect lines.",
                author: "Jordan K.",
                stars: 5,
              },
              {
                text: "The 50% punctuality guarantee sold me. But the experience kept me coming back. Every. Single. Time.",
                author: "Chris P.",
                stars: 5,
              },
            ].map((review) => (
              <div
                key={review.author}
                className="bg-[#0a0a0a] border border-white/10 rounded-lg p-6"
              >
                <div className="text-[#FFCC00] text-lg mb-3">
                  {"★".repeat(review.stars)}
                </div>
                <p className="font-body text-white/80 text-sm mb-4 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="font-body text-white/40 text-xs">
                  — {review.author}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.google.com/maps/place/SpeakEasy+Barber+Lounge/@39.7582,-105.0096,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[#FFCC00] hover:text-[#FFD633] transition-colors"
            >
              Read all 431+ reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ── GOLD DIVIDER ─────────────────────────────────────────── */}
      <div className="gold-line" />

      {/* ── SMS CAPTURE ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-black">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="font-body text-[#FFCC00] text-sm font-semibold tracking-widest uppercase mb-3">
            First Visit?
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-white mb-4">
            Get $10 Off Your First Visit
          </h2>
          <p className="font-body text-white/60 mb-8">
            Enter your phone number and we&apos;ll text you a $10 credit. No spam, ever.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="tel"
              placeholder="(xxx) xxx-xxxx"
              className="sms-input flex-1 px-4 py-3 rounded border border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:border-[#FFCC00] focus:ring-1 focus:ring-[#FFCC00] focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#FFCC00] text-black px-6 py-3 rounded font-semibold hover:bg-[#FFD633] transition-colors whitespace-nowrap"
            >
              Claim $10 Off
            </button>
          </form>

          <p className="font-body text-xs text-white/30 mt-4">
            By signing up, you agree to receive promotional texts. Msg & data rates may apply. Reply STOP to cancel.
          </p>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="border-t border-white/10 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading text-xl text-[#FFCC00] mb-4">
                SPEAKEASY
              </h3>
              <p className="font-body text-sm text-white/50">
                Denver&apos;s #1 rated barbershop. Hidden bookshelf entrance.
                Complimentary whiskey. Barber to the pros.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg text-white mb-4">Hours</h3>
              <div className="font-body text-sm text-white/50 space-y-1">
                <p>Mon–Fri: 9am – 7pm</p>
                <p>Saturday: 8am – 5pm</p>
                <p>Sunday: 10am – 4pm</p>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-lg text-white mb-4">Location</h3>
              <div className="font-body text-sm text-white/50 space-y-1">
                <p>1635 Blake Street, Suite 201</p>
                <p>Denver, CO 80202</p>
                <p className="text-white/30">
                  (Look for the bookshelf 👀)
                </p>
                <a
                  href="tel:+17204663567"
                  className="text-[#FFCC00] hover:text-[#FFD633] block mt-2"
                >
                  (720) 466-3567
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-white/30">
              © 2024–2026 SpeakEasy Barber Lounge LLC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/speakeasybarberlounge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-[#FFCC00] transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/speakeasybarberlounge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-[#FFCC00] transition-colors text-sm"
              >
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/@speakeasybarberlounge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-[#FFCC00] transition-colors text-sm"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── STICKY BOOK NOW BAR (mobile) ─────────────────────────── */}
      <div className="book-now-bar md:hidden">
        <span className="font-heading text-sm">SPEAKEASY</span>
        <a
          href="https://getsquire.com/book/speakeasy-barber-lounge"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FFCC00] text-black px-6 py-2 rounded font-bold text-sm"
        >
          Book Now
        </a>
      </div>

      {/* ── DESKTOP STICKY BOOK NOW ──────────────────────────────── */}
      <div className="hidden md:fixed bottom-6 right-6 z-50">
        <a
          href="https://getsquire.com/book/speakeasy-barber-lounge"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FFCC00] text-black px-8 py-4 rounded-lg font-bold text-base shadow-[0_0_30px_rgba(255,204,0,0.4)] hover:shadow-[0_0_40px_rgba(255,204,0,0.6)] transition-all hover:-translate-y-1"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}