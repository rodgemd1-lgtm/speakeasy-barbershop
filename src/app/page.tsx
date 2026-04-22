"use client";

import { useState } from "react";

// ─── Data Sources ──────────────────────────────────────────────────────────────

const ORIGINAL_NAV = [
  "SERVICES",
  "POLICIES",
  "GALLERY",
  "BARBERS",
  "CAREERS",
  "FAQS",
];

const NEW_NAV = ["Services", "Barbers", "Amenities", "Reviews", "Strategy", "FAQ"];

const ORIGINAL_SERVICES = [
  { num: "1", name: "Haircut", price: "$45", time: "30 min" },
  { num: "2", name: "Haircut and Beard Trim", price: "$60", time: "45 min" },
  { num: "3", name: "Hot Towel Shave", price: "$45", time: "30 min" },
  { num: "4", name: "Razor Fade", price: "$45", time: "30 min" },
  { num: "5", name: "Beard Trim", price: "$25", time: "15 min" },
  { num: "6", name: "Junior Haircut (Under 12)", price: "$30", time: "30 min" },
];

const NEW_SERVICES = [
  {
    name: "The Signature Cut",
    price: "$45",
    time: "30 min",
    desc: "Denver's definitive men's haircut. Expert precision from barbers who style pros.",
    badge: "Most Popular",
    squireId: "haircut",
  },
  {
    name: "Cut + Beard Sculpt",
    price: "$60",
    time: "30 min",
    desc: "Full haircut plus detailed beard shaping with straight razor finishing.",
    badge: "Best Value",
    squireId: "haircut-beard",
  },
  {
    name: "Hot Towel Shave",
    price: "$45",
    time: "30 min",
    desc: "Traditional straight-razor shave with steamed towels and premium lather.",
    badge: null,
    squireId: "shave",
  },
  {
    name: "Razor Fade",
    price: "$45",
    time: "30 min",
    desc: "Surgical-precision skin fade, from zero to seamless. Our specialty.",
    badge: null,
    squireId: "razor-fade",
  },
  {
    name: "Beard Detail",
    price: "$25",
    time: "15 min",
    desc: "Lines, shape, and hot towel finish. Walk out looking like a new man.",
    badge: null,
    squireId: "beard-trim",
  },
  {
    name: "Junior Cut",
    price: "$30",
    time: "30 min",
    desc: "Under 12 — same quality, lighter touch. Next-gen style starts here.",
    badge: null,
    squireId: "junior",
  },
];

const NEW_PACKAGES = [
  {
    name: "The MVP",
    price: "$120/mo",
    features: [
      "2 Signature Cuts/month",
      "1 Beard Detail included",
      "Priority booking",
      "No $1 booking fee",
    ],
    highlight: true,
  },
  {
    name: "The Season Ticket",
    price: "$199/mo",
    features: [
      "Unlimited cuts",
      "All beard services included",
      "First-available walk-in priority",
      "Complimentary hot towel add-on",
      "No booking fees ever",
    ],
    highlight: false,
  },
];

const NEW_BARBERS = [
  {
    name: "Julian",
    title: "6 Seasons Colorado Rockies · 3 Seasons Denver Broncos",
    specialty: "Precision fades, athlete styling",
    emoji: "⚾",
  },
  {
    name: "David",
    title: "The G.O.A.T. — Former barber to NBA MVP Nikola Jokić",
    specialty: "Signature cuts, beard artistry",
    emoji: "🏆",
  },
  {
    name: "Drea",
    title: "9 Years of Precision",
    specialty: "Detail work, razor fades",
    emoji: "✂️",
  },
];

const NEW_AMENITIES = [
  { icon: "🥃", name: "Complimentary Whiskey", desc: "Premium pour while you wait" },
  { icon: "☕", name: "Nitro Cold Brew", desc: "On tap, always fresh" },
  { icon: "🎱", name: "Pool Table", desc: "Kill time in style" },
  { icon: "💆", name: "Massage Chairs", desc: "Relax before your cut" },
  { icon: "📚", name: "Hidden Entrance", desc: "Find the bookshelf. Push." },
  { icon: "✅", name: "Satisfaction Guarantee", desc: "Not happy? We fix it free" },
];

const ORIGINAL_FAQS = [
  {
    q: "How do I access the barber shop in Denver?",
    a: "We're located inside the Dairy Block at 1635 Blake St, Suite 201, Denver, CO 80202. Look for the bookshelf entrance on the 2nd floor.",
  },
  {
    q: "Do you wash hair?",
    a: "We do not offer hair washing with our standard services. Our focus is on precision cutting and styling.",
  },
  {
    q: "How does your waitlist option work?",
    a: "When all appointments are booked, you can join the waitlist through Squire. If a cancellation occurs, you'll receive an automatic notification.",
  },
  {
    q: "What is the $1 booking fee?",
    a: "There is a $1 convenience fee for online booking, and $3 for prepaid appointments. This covers the Squire booking platform.",
  },
  {
    q: "Will I be charged if I cancel?",
    a: "Cancellations made at least 24 hours in advance will not be charged. Late cancellations or no-shows may be subject to a fee.",
  },
  {
    q: "Does Speakeasy offer women's hairstyles?",
    a: "We specialize in men's grooming. However, we welcome anyone who wants our style of cut.",
  },
  {
    q: "Does Speakeasy do kids cuts?",
    a: "Yes! We offer Junior Haircuts for children under 12.",
  },
];

const HOURS = [
  { day: "Monday – Wednesday", time: "9:00 AM – 6:00 PM" },
  { day: "Thursday – Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "8:00 AM – 5:00 PM" },
  { day: "Sunday", time: "9:00 AM – 3:00 PM" },
];

// ─── Version Toggle ────────────────────────────────────────────────────────────

function VersionToggle({
  version,
  setVersion,
}: {
  version: "original" | "new";
  setVersion: (v: "original" | "new") => void;
}) {
  return (
    <div className="version-toggle">
      <button
        className={version === "original" ? "active" : ""}
        onClick={() => setVersion("original")}
      >
        Original
      </button>
      <button
        className={version === "new" ? "active" : ""}
        onClick={() => setVersion("new")}
      >
        Strategy+
      </button>
    </div>
  );
}

// ─── ORIGINAL SITE RECREATION ──────────────────────────────────────────────────

function OriginalSite() {
  return (
    <div className="original-site">
      {/* Navigation — black bg, gold/pink text, exact from extraction */}
      <header
        style={{
          background: "#000",
          padding: "0",
          position: "sticky",
          top: 0,
          zIndex: 99,
        }}
      >
        <div
          style={{
            maxWidth: "1500px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 10px",
            height: "100px",
          }}
        >
          {/* Logo area */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: '"GFS Didot", serif',
                fontSize: "32px",
                fontWeight: 900,
                color: "#ffcc00",
                lineHeight: "32px",
              }}
            >
              SPEAKEASY
            </span>
            <span
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "11px",
                color: "#6ec1e4",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Barber Lounge
            </span>
          </div>
          {/* Nav Links */}
          <nav style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            {ORIGINAL_NAV.map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  textDecoration: "none",
                  fontFamily: "Montserrat, sans-serif",
                  transition: "color 0.3s",
                }}
              >
                {item}
              </a>
            ))}
            <a
              href="https://getsquire.com/book/speakeasy-barber-lounge"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ fontSize: "15px", padding: "12px 24px" }}
            >
              BOOK NOW
            </a>
          </nav>
        </div>
      </header>

      {/* Hero — gradient bar + gift offer (exact from extraction) */}
      <div
        className="gradient-bar"
        style={{ height: "4px", width: "100%" }}
      />
      <section
        style={{
          background: "#000",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h1
          style={{
            fontFamily: '"GFS Didot", serif',
            fontSize: "55px",
            fontWeight: 900,
            color: "#fff",
            lineHeight: "55px",
            marginBottom: "20px",
          }}
        >
          Best Barber Shop in Denver
        </h1>
        <p
          style={{
            fontSize: "20px",
            color: "#6ec1e4",
            fontFamily: "Montserrat, sans-serif",
            marginBottom: "30px",
          }}
        >
          A $10 gift to first time clients from the Speakeasy team
        </p>
        <a
          href="https://getsquire.com/book/speakeasy-barber-lounge"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
        >
          BOOK NOW
        </a>
      </section>

      {/* Services Section — exact layout from original */}
      <section
        style={{
          background: "#000",
          padding: "60px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: '"GFS Didot", serif',
            fontSize: "38px",
            fontWeight: 900,
            color: "#fff",
            textAlign: "center",
            marginBottom: "8px",
          }}
        >
          Our Barbershop Services
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#7a7a7a",
            marginBottom: "40px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Barber Shop Services in Denver
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "20px",
          }}
        >
          {ORIGINAL_SERVICES.map((svc) => (
            <div
              key={svc.num}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "3px",
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span
                    style={{
                      color: "#ffcc00",
                      fontFamily: '"GFS Didot", serif',
                      fontSize: "37px",
                      fontWeight: 900,
                    }}
                  >
                    {svc.num}
                  </span>
                  <span
                    style={{
                      color: "#fff",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "18.72px",
                      fontWeight: 500,
                    }}
                  >
                    {svc.name}
                  </span>
                </div>
                <span
                  style={{
                    color: "#6ec1e4",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  {svc.price}
                </span>
              </div>
              <span
                style={{
                  color: "#7a7a7a",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                }}
              >
                {svc.time}
              </span>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a
            href="#"
            style={{
              color: "#61ce70",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              textTransform: "uppercase",
              textDecoration: "none",
              border: "1px solid #61ce70",
              padding: "12px 24px",
              borderRadius: "3px",
              transition: "all 0.3s",
            }}
          >
            Explore All Services
          </a>
        </div>
      </section>

      {/* Policies Section */}
      <section
        style={{
          background: "#000",
          padding: "40px 20px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: '"GFS Didot", serif',
            fontSize: "32px",
            fontWeight: 900,
            color: "#fff",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Please review our policies before booking
        </h2>
        <p style={{ color: "#7a7a7a", textAlign: "center", fontFamily: "Montserrat, sans-serif" }}>
          A $1 booking fee applies. $3 for prepaid. 24h cancellation policy. Late no-shows may be charged.
        </p>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a
            href="#"
            style={{
              color: "#cc3366",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            Review Policy
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section
        style={{
          background: "#000",
          padding: "60px 20px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: '"GFS Didot", serif',
            fontSize: "38px",
            fontWeight: 900,
            color: "#fff",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          FAQs
        </h2>
        {ORIGINAL_FAQS.map((faq, i) => (
          <div
            key={i}
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              padding: "20px 0",
            }}
          >
            <h3
              style={{
                color: "#6ec1e4",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "18.72px",
                fontWeight: 500,
                marginBottom: "8px",
              }}
            >
              {faq.q}
            </h3>
            <p
              style={{
                color: "#7a7a7a",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                lineHeight: "22px",
              }}
            >
              {faq.a}
            </p>
          </div>
        ))}
      </section>

      {/* Gallery Link */}
      <section
        style={{
          background: "#000",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: '"GFS Didot", serif',
            fontSize: "32px",
            fontWeight: 900,
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          View Our Haircuts Gallery
        </h2>
        <a
          href="#"
          style={{
            display: "inline-block",
            background: "#61ce70",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: "3px",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "15px",
            fontWeight: 500,
            textDecoration: "none",
            transition: "background 0.3s",
          }}
        >
          Explore Gallery
        </a>
      </section>

      {/* Footer — exact from extraction */}
      <footer
        style={{
          background: "#000",
          padding: "40px 20px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <div>
            <h3
              style={{
                color: "#ffcc00",
                fontFamily: '"GFS Didot", serif',
                fontSize: "18.72px",
                fontWeight: 500,
                marginBottom: "16px",
              }}
            >
              Business hours:
            </h3>
            {HOURS.map((h) => (
              <p key={h.day} style={{ color: "#7a7a7a", fontSize: "14px", margin: "4px 0" }}>
                {h.day}: {h.time}
              </p>
            ))}
          </div>
          <div>
            <h3
              style={{
                color: "#ffcc00",
                fontFamily: '"GFS Didot", serif',
                fontSize: "18.72px",
                fontWeight: 500,
                marginBottom: "16px",
              }}
            >
              Location:
            </h3>
            <p style={{ color: "#7a7a7a", fontSize: "14px", lineHeight: "20px" }}>
              1635 Blake St, Suite 201
              <br />
              Denver, CO 80202
              <br />
              Dairy Block, 2nd Floor
            </p>
          </div>
          <div>
            <h3
              style={{
                color: "#ffcc00",
                fontFamily: '"GFS Didot", serif',
                fontSize: "18.72px",
                fontWeight: 500,
                marginBottom: "16px",
              }}
            >
              Contact:
            </h3>
            <p style={{ color: "#7a7a7a", fontSize: "14px" }}>
              <a href="tel:+17204663567" style={{ color: "#6ec1e4", textDecoration: "none" }}>
                (720) 466-3567
              </a>
              <br />
              <a
                href="https://www.instagram.com/speakeasybarberlounge/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#6ec1e4", textDecoration: "none" }}
              >
                @speakeasybarberlounge
              </a>
            </p>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            color: "#494c4f",
            fontSize: "13px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          © {new Date().getFullYear()} Speakeasy Barber Lounge. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

// ─── NEW STRATEGY-ENHANCED SITE ─────────────────────────────────────────────────

function NewSite() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="new-site">
      {/* Navigation */}
      <header
        style={{
          background: "rgba(0,0,0,0.95)",
          backdropFilter: "blur(12px)",
          padding: "0",
          position: "sticky",
          top: 0,
          zIndex: 99,
          borderBottom: "1px solid rgba(255,204,0,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            height: "72px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: '"GFS Didot", serif',
                fontSize: "28px",
                color: "#ffcc00",
                lineHeight: "28px",
              }}
            >
              SPEAKEASY
            </span>
            <span
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "9px",
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Barber Lounge
            </span>
          </div>
          <nav style={{ display: "flex", gap: "28px", alignItems: "center" }}>
            {NEW_NAV.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                  textDecoration: "none",
                  fontFamily: "Montserrat, sans-serif",
                  transition: "color 0.2s",
                }}
              >
                {item}
              </a>
            ))}
            <a
              href="https://getsquire.com/book/speakeasy-barber-lounge"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-fill"
              style={{ padding: "10px 24px", fontSize: "14px" }}
            >
              Book Now
            </a>
          </nav>
        </div>
      </header>

      {/* Hero — AI-generated image, booking-first */}
      <section
        id="services"
        style={{
          background: "linear-gradient(180deg, #000 0%, #0a0a0a 100%)",
          textAlign: "center",
          padding: "80px 24px 60px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "rgba(255,204,0,0.1)",
            border: "1px solid rgba(255,204,0,0.2)",
            borderRadius: "999px",
            padding: "6px 16px",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              color: "#ffcc00",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            ★★★★★ 5.0 · 431+ Reviews · #1 in Denver
          </span>
        </div>
        <h1
          style={{
            fontFamily: '"GFS Didot", serif',
            fontSize: "clamp(36px, 6vw, 56px)",
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: "16px",
            maxWidth: "700px",
            margin: "0 auto 16px",
          }}
        >
          The Best Cut
          <br />
          <span style={{ color: "#ffcc00" }}>in Denver</span>
        </h1>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            color: "rgba(255,255,255,0.6)",
            fontSize: "18px",
            maxWidth: "500px",
            margin: "0 auto 32px",
            lineHeight: 1.6,
          }}
        >
          Barber to the Colorado Rockies &amp; Denver Broncos.
          <br />
          Hidden bookshelf entrance. Complimentary whiskey.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="https://getsquire.com/book/speakeasy-barber-lounge"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-fill"
          >
            Book Your Appointment
          </a>
          <a href="/offer" className="btn-gold-outline" style={{ padding: "14px 28px", fontSize: "16px" }}>
            Get $10 Off First Visit
          </a>
        </div>
      </section>

      {/* Services — enhanced with descriptions, badges, Squire links */}
      <section
        style={{
          background: "#000",
          padding: "80px 24px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: '"GFS Didot", serif',
            fontSize: "36px",
            color: "#fff",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          Our Services
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "16px",
          }}
        >
          {NEW_SERVICES.map((svc) => (
            <a
              key={svc.name}
              href={`https://getsquire.com/book/speakeasy-barber-lounge`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#0a0a0a",
                border: `1px solid ${svc.badge ? "rgba(255,204,0,0.3)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: "12px",
                padding: "24px",
                textDecoration: "none",
                transition: "all 0.3s",
                display: "block",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "8px" }}>
                <div>
                  {svc.badge && (
                    <span
                      style={{
                        display: "inline-block",
                        background: "rgba(255,204,0,0.15)",
                        color: "#ffcc00",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        padding: "3px 8px",
                        borderRadius: "4px",
                        marginBottom: "8px",
                      }}
                    >
                      {svc.badge}
                    </span>
                  )}
                  <h3
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#fff",
                      margin: svc.badge ? "4px 0 0" : "0 0 0",
                    }}
                  >
                    {svc.name}
                  </h3>
                </div>
                <span
                  style={{
                    fontFamily: '"GFS Didot", serif',
                    fontSize: "24px",
                    color: "#ffcc00",
                  }}
                >
                  {svc.price}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: "1.5",
                  margin: "4px 0 0",
                }}
              >
                {svc.desc}
              </p>
              <span
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.3)",
                  marginTop: "8px",
                  display: "block",
                }}
              >
                {svc.time}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Membership Packages — new strategy addition */}
      <section
        id="strategy"
        style={{
          background: "linear-gradient(180deg, #000 0%, #0a0a0a 100%)",
          padding: "80px 24px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              color: "#ffcc00",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            New — Membership Packages
          </span>
          <h2
            style={{
              fontFamily: '"GFS Didot", serif',
              fontSize: "36px",
              color: "#fff",
              marginTop: "8px",
            }}
          >
            Save More. Look Better.
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "16px",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          {NEW_PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              style={{
                background: pkg.highlight ? "rgba(255,204,0,0.08)" : "#0a0a0a",
                border: `1px solid ${pkg.highlight ? "rgba(255,204,0,0.3)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: "12px",
                padding: "32px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "4px",
                }}
              >
                {pkg.name}
              </h3>
              <p
                style={{
                  fontFamily: '"GFS Didot", serif',
                  fontSize: "32px",
                  color: "#ffcc00",
                  marginBottom: "20px",
                }}
              >
                {pkg.price}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  textAlign: "left",
                }}
              >
                {pkg.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.7)",
                      padding: "8px 0",
                      borderTop: "1px solid rgba(255,255,255,0.04)",
                      paddingLeft: "24px",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "#ffcc00",
                      }}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://getsquire.com/book/speakeasy-barber-lounge"
                target="_blank"
                rel="noopener noreferrer"
                className={pkg.highlight ? "btn-gold-fill" : "btn-gold-outline"}
                style={{
                  display: "inline-block",
                  marginTop: "24px",
                  padding: "12px 24px",
                  fontSize: "14px",
                }}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Barbers */}
      <section
        id="barbers"
        style={{
          background: "#000",
          padding: "80px 24px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: '"GFS Didot", serif',
            fontSize: "36px",
            color: "#fff",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          Your Barbers
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {NEW_BARBERS.map((b) => (
            <div
              key={b.name}
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "12px",
                padding: "32px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "40px", marginBottom: "12px" }}>{b.emoji}</div>
              <h3
                style={{
                  fontFamily: '"GFS Didot", serif',
                  fontSize: "28px",
                  color: "#ffcc00",
                  marginBottom: "8px",
                }}
              >
                {b.name}
              </h3>
              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.6)",
                  fontStyle: "italic",
                  marginBottom: "8px",
                  lineHeight: 1.4,
                }}
              >
                {b.title}
              </p>
              <span
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {b.specialty}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section
        id="amenities"
        style={{
          background: "linear-gradient(180deg, #000 0%, #0a0a0a 100%)",
          padding: "80px 24px",
        }}
      >
        <h2
          style={{
            fontFamily: '"GFS Didot", serif',
            fontSize: "36px",
            color: "#fff",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          More Than a Haircut
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {NEW_AMENITIES.map((a) => (
            <div
              key={a.name}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.04)",
                borderRadius: "12px",
                padding: "24px 16px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>{a.icon}</div>
              <h4
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "4px",
                }}
              >
                {a.name}
              </h4>
              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section
        id="reviews"
        style={{
          background: "#000",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "rgba(255,204,0,0.1)",
            borderRadius: "12px",
            padding: "32px 48px",
            border: "1px solid rgba(255,204,0,0.2)",
          }}
        >
          <div style={{ fontSize: "48px", color: "#ffcc00", marginBottom: "8px" }}>5.0</div>
          <div
            style={{
              color: "#ffcc00",
              fontSize: "20px",
              letterSpacing: "4px",
              marginBottom: "8px",
            }}
          >
            ★★★★★
          </div>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "14px",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "4px",
            }}
          >
            431+ reviews on Google
          </p>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "12px",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            #1 rated barbershop in Denver — CX Research Institute
          </p>
        </div>
      </section>

      {/* SMS Capture — new strategy addition */}
      <section
        style={{
          background: "#0a0a0a",
          padding: "60px 24px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,204,0,0.1)",
        }}
      >
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"GFS Didot", serif',
              fontSize: "28px",
              color: "#fff",
              marginBottom: "8px",
            }}
          >
            Get $10 Off Your First Visit
          </h2>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "14px",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "20px",
            }}
          >
            Text <span style={{ color: "#ffcc00", fontWeight: 600 }}>SPEAK10</span> to{" "}
            <span style={{ color: "#ffcc00", fontWeight: 600 }}>(720) 466-3567</span>
          </p>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "12px",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            We&apos;ll text you a $10 credit code. Msg &amp; data rates may apply.
            <br />
            Reply STOP to cancel. Or{" "}
            <a href="/offer" style={{ color: "#ffcc00", textDecoration: "underline" }}>
              claim online →
            </a>
          </p>
        </div>
      </section>

      {/* FAQs — accordion style */}
      <section
        id="faq"
        style={{
          background: "#000",
          padding: "80px 24px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: '"GFS Didot", serif',
            fontSize: "36px",
            color: "#fff",
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          Frequently Asked
        </h2>
        {ORIGINAL_FAQS.map((faq, i) => (
          <div
            key={i}
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              padding: "16px 0",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#fff",
                  margin: 0,
                }}
              >
                {faq.q}
              </h3>
              <span style={{ color: "#ffcc00", fontSize: "18px" }}>
                {openFaq === i ? "−" : "+"}
              </span>
            </div>
            {openFaq === i && (
              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.6,
                  marginTop: "8px",
                }}
              >
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#000",
          padding: "48px 24px",
          borderTop: "1px solid rgba(255,204,0,0.1)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "32px",
            maxWidth: "1200px",
            margin: "0 auto",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: '"GFS Didot", serif',
                fontSize: "24px",
                color: "#ffcc00",
              }}
            >
              SPEAKEASY
            </span>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.6,
                marginTop: "8px",
              }}
            >
              Denver&apos;s #1 rated barbershop.
              <br />
              Hidden bookshelf entrance. Complimentary whiskey.
              <br />
              Barber to the pros.
            </p>
          </div>
          <div>
            <h4
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                color: "#ffcc00",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Hours
            </h4>
            {HOURS.map((h) => (
              <p key={h.day} style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", margin: "4px 0" }}>
                {h.day}
                <br />
                <span style={{ color: "rgba(255,255,255,0.7)" }}>{h.time}</span>
              </p>
            ))}
          </div>
          <div>
            <h4
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                color: "#ffcc00",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Location
            </h4>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: 1.6 }}>
              1635 Blake St, Suite 201
              <br />
              Denver, CO 80202
              <br />
              Dairy Block, 2nd Floor
            </p>
            <p style={{ marginTop: "8px" }}>
              <a
                href="tel:+17204663567"
                style={{ color: "#ffcc00", fontSize: "13px", textDecoration: "none" }}
              >
                (720) 466-3567
              </a>
            </p>
          </div>
        </div>
        <div
          style={{
            maxWidth: "1200px",
            margin: "32px auto 0",
            textAlign: "center",
            color: "rgba(255,255,255,0.2)",
            fontSize: "12px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          © {new Date().getFullYear()} Speakeasy Barber Lounge · Strategy by Hermes AI Swarm ·{" "}
          <a href="https://gamma.app/docs/y9pe9cr12vpkpoh" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,204,0,0.4)", textDecoration: "none" }}>
            Full Strategy Deck →
          </a>
        </div>
      </footer>

      {/* Mobile Book Now Bar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(0,0,0,0.95)",
          backdropFilter: "blur(12px)",
          padding: "12px 16px",
          borderTop: "1px solid rgba(255,204,0,0.2)",
          zIndex: 999,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          href="https://getsquire.com/book/speakeasy-barber-lounge"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold-fill"
          style={{
            width: "100%",
            maxWidth: "400px",
            textAlign: "center",
            padding: "14px 0",
            fontSize: "16px",
          }}
        >
          Book Now — Squire
        </a>
      </div>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Home() {
  const [version, setVersion] = useState<"original" | "new">("original");

  return (
    <main>
      <VersionToggle version={version} setVersion={setVersion} />
      {version === "original" ? <OriginalSite /> : <NewSite />}
    </main>
  );
}