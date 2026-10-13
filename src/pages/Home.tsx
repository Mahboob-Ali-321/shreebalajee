import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Star, ArrowRight, ShieldCheck, Clock, Sparkles, Navigation, Send, MapPin, ExternalLink } from "lucide-react";
import BookingForm from "../components/BookingForm";
import CarCard from "../components/CarCard";
import PriceCard from "../components/PriceCard";
import RouteCard from "../components/RouteCard";
import ReviewCard from "../components/ReviewCard";
import FaqAccordion from "../components/FaqAccordion";
import SectionTitle from "../components/SectionTitle";
import GallerySection from "../components/GallerySection";
import { FLEET_DATA, LOCAL_PACKAGES, ONE_WAY_ROUTES, REVIEWS, BUSINESS_INFO } from "../data/business";
import { IMAGES } from "../data/images";

export default function Home() {
  const [quickName, setQuickName] = useState("");
  const [quickMsg, setQuickMsg] = useState("");

  const handleSendQuickNote = (e: React.FormEvent) => {
    e.preventDefault();
    const nameStr = quickName.trim() || "Customer";
    const noteStr = quickMsg.trim() || "Need cab assistance in Dhanbad";
    const text = encodeURIComponent(`Hi Shree Balajee Travels,\nMy Name: ${nameStr}\nMessage: ${noteStr}`);
    window.open(`https://wa.me/91${BUSINESS_INFO.phoneRaw}?text=${text}`, "_blank");
  };

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section
        className="relative bg-[#14306B] text-white overflow-hidden min-h-[560px] md:min-h-[600px] flex flex-col justify-start"
        id="hero"
      >
        {/* Background Fleet Lineup Photo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src={IMAGES.heroFleet}
            alt="Shree Balajee Travels Fleet Lineup Dhanbad"
            className="w-full h-full object-cover [object-position:60%_68%] md:[object-position:center_68%]"
            fetchPriority="high"
            loading="eager"
          />
          {/* Lightened Gradient Overlay: Covers top-left text area, leaving bottom and right clear and bright */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                "linear-gradient(135deg, rgba(20,48,107,0.85) 0%, rgba(20,48,107,0.70) 30%, rgba(20,48,107,0.25) 50%, rgba(20,48,107,0.15) 75%, rgba(20,48,107,0.10) 100%)",
            }}
          />
          <div
            className="absolute inset-0 block md:hidden"
            style={{
              background:
                "linear-gradient(to bottom, rgba(20,48,107,0.85) 0%, rgba(20,48,107,0.65) 35%, rgba(20,48,107,0.20) 48%, rgba(20,48,107,0.15) 65%, rgba(20,48,107,0.05) 100%)",
            }}
          />
        </div>

        {/* Hero Content Container (Top-Left aligned, 48px from top, max-w 640px) */}
        <div className="max-w-6xl mx-auto px-4 relative z-10 pt-12 pb-[100px] md:pb-[110px] w-full">
          <div className="max-w-[640px] space-y-3">
            {/* Top Review Badge */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0A1931]/85 text-[#FFD147] border border-[#FFD147]/40 shadow-sm">
                <Star className="w-3.5 h-3.5 fill-[#FFD147]" />
                4.8 ★ | 152+ Google Reviews
              </span>
            </div>

            {/* Tag */}
            <div>
              <div className="inline-block bg-[#FFD147] text-[#0A1931] text-xs font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wider">
                Dhanbad's #1 Trusted Cabs
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight font-heading text-white">
              Book Reliable Taxi in Dhanbad
            </h1>

            {/* Hindi tagline */}
            <p className="text-xs sm:text-sm text-[#FFD147] font-medium">
              आपकी यात्रा, हमारी ज़िम्मेदारी • Local, Outstation &amp; One-Way Drop
            </p>

            {/* Paragraph */}
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl">
              Clean AC cabs (Innova Crysta, Ertiga, Scorpio, Swift). Verified polite chauffeurs, 24x7 doorstep pickup, and guaranteed transparent per-km billing across Jharkhand, Bengal &amp; Bihar.
            </p>

            {/* Direct Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2 max-w-md">
              <a
                href={BUSINESS_INFO.defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#FFD147] hover:bg-[#F5C430] text-[#0A1931] font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-md transition active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-800 text-emerald-800" />
                <span>Book on WhatsApp</span>
              </a>
              <a
                href={BUSINESS_INFO.callUrl}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#FFD147]" />
                <span>Call 93102 41446</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-[11px] text-slate-300">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Zero Hidden Charges
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" /> On-Time Pickup Guaranteed
              </span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Sanitized AC Fleet
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK BOOKING ENQUIRY - Standalone block overlapping hero bottom edge */}
      <section
        className="relative z-10 -mt-[32px] md:-mt-[56px] px-4 pb-6"
        data-purpose="hero-booking-enquiry"
      >
        <div className="max-w-[1100px] mx-auto w-full">
          <BookingForm />
        </div>
      </section>

      {/* 2. TRUST STRIP / BADGES */}
      <section className="bg-white border-y border-gray-200 py-4 px-4 shadow-sm" data-purpose="trust-badges">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="flex items-center space-x-3 bg-[#F3F6FC]/70 p-3 rounded-xl border border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#14306B] flex items-center justify-center text-lg shrink-0">
              ⏰
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#0A1931] leading-tight">24x7 Ready Service</div>
              <div className="text-[10px] sm:text-xs text-gray-500">Day &amp; Night Cabs</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-[#F3F6FC]/70 p-3 rounded-xl border border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-lg shrink-0">
              ❄️
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#0A1931] leading-tight">Clean &amp; Chilled AC</div>
              <div className="text-[10px] sm:text-xs text-gray-500">Sanitized Daily</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-[#F3F6FC]/70 p-3 rounded-xl border border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-lg shrink-0">
              👨‍✈️
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#0A1931] leading-tight">Polite Drivers</div>
              <div className="text-[10px] sm:text-xs text-gray-500">Experienced &amp; Verified</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-[#F3F6FC]/70 p-3 rounded-xl border border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-lg shrink-0">
              💰
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#0A1931] leading-tight">Zero Hidden Cost</div>
              <div className="text-[10px] sm:text-xs text-gray-500">Genuine Billing</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FLEET SECTION */}
      <section className="py-12 px-4 max-w-6xl mx-auto" id="fleet-section">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-bold text-[#14306B] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded">
              Our Maintained Fleet
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0A1931] mt-2">
              Choose Your Comfort
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Well-maintained commercial vehicles with chilled AC, experienced drivers and upfront per-km billing.
            </p>
          </div>
          <Link
            to="/fleet"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14306B] hover:text-[#0A1931] border border-blue-200 bg-white px-3.5 py-2 rounded-lg hover:shadow-sm transition"
          >
            <span>View Full Fleet (5+ Models)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Fleet Grid: 3-column grid on desktop; last row (2 cards) centered with same card width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLEET_DATA.slice(0, 3).map((car) => (
            <div key={car.id} className="flex">
              <CarCard car={car} />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {FLEET_DATA.slice(3, 5).map((car) => (
            <div key={car.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex">
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </section>

      {/* 4. LOCAL PACKAGES SECTION */}
      <section className="py-12 px-4 bg-white border-y border-gray-200" id="local-packages">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            badge="Local Hourly Rentals"
            title="Dhanbad City Packages"
            subtitle="Shopping, business meetings, hospital visits, railway pickup & weddings in Dhanbad"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
            {LOCAL_PACKAGES.map((pkg) => (
              <div key={pkg.id} className="flex">
                <PriceCard pkg={pkg} />
              </div>
            ))}
          </div>

          {/* Transparent Policy Card */}
          <div className="mt-8 bg-[#F3F6FC] border border-gray-200 rounded-2xl p-4 sm:p-5 text-xs text-gray-700">
            <div className="font-bold text-[#0A1931] mb-2 flex items-center gap-2">
              <span className="text-base">ℹ️</span>
              <span className="text-sm">Transparent Extra Policy</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="bg-white p-2.5 rounded-lg border border-gray-200/80">
                <span className="text-gray-500 block text-[10px]">Extra KM Rate</span>
                <strong className="text-[#0A1931]">₹10 / km (Hatchback)</strong>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-gray-200/80">
                <span className="text-gray-500 block text-[10px]">Extra Hour Rate</span>
                <strong className="text-[#0A1931]">₹100 / hour</strong>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-gray-200/80">
                <span className="text-gray-500 block text-[10px]">Toll &amp; Parking</span>
                <strong className="text-[#0A1931]">As actuals</strong>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-gray-200/80">
                <span className="text-gray-500 block text-[10px]">Night Allowance</span>
                <strong className="text-[#0A1931]">Applicable after 10 PM</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ONE-WAY DROP TAXI SECTION */}
      <section className="py-12 px-4 max-w-6xl mx-auto" id="outstation-routes">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-6 gap-4">
          <div>
            <span className="text-[11px] font-bold text-[#14306B] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded">
              Outstation &amp; Transfers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0A1931] mt-2">
              One-Way Drop Taxi
            </h2>
            <div className="mt-2 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs p-2.5 rounded-xl font-medium flex items-center gap-2">
              <span>🏷️</span>
              <span>Pay only for one side – No return fare on confirmed one-way drops!</span>
            </div>
          </div>
          <Link
            to="/routes"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14306B] hover:text-[#0A1931] border border-blue-200 bg-white px-3.5 py-2 rounded-lg hover:shadow-sm transition shrink-0"
          >
            <span>See All Routes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {ONE_WAY_ROUTES.slice(0, 6).map((route) => (
            <div key={route.id} className="flex">
              <RouteCard route={route} />
            </div>
          ))}
        </div>
      </section>

      {/* 6. MEET THE FOUNDER SECTION */}
      <section className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#14306B] to-[#0A1931] text-white rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 h-64 sm:h-80 lg:h-full relative overflow-hidden">
              <img
                src={IMAGES.ownerFounder}
                alt="Founder of Shree Balajee Travels Dhanbad with Toyota Innova Crysta"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-transparent to-transparent lg:hidden"></div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[#FFD147] text-xs font-bold uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded">
                  Meet the Founder
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-3">
                  Prompt &amp; Personalized Service
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mt-3">
                  <strong className="text-white">Shree Balajee Travels</strong> is managed with a solemn commitment to Dhanbad travelers: <em>no last-minute cancellations, spotless deodorized vehicles, and verified respectful chauffeurs who prioritize family comfort</em>.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                  Operating out of our Bartand headquarters, we treat every passenger—whether a student catching the Shatabdi Express, an executive traveling to ISM Dhanbad, or pilgrims on their way to Baidyanath Dham—with utmost dignity.
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-3">
                <div className="flex flex-wrap items-center gap-4 text-xs text-white font-semibold">
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#FFD147]">✓</span> Dhanbad Local Office (Bartand)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#FFD147]">✓</span> On-Time Pickup Guaranteed
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#FFD147]">✓</span> GPS-Tracked Commercial Cabs
                  </span>
                </div>

                <div className="pt-1">
                  <a
                    href={BUSINESS_INFO.callUrl}
                    className="inline-flex items-center gap-2 text-[#FFD147] hover:text-[#F5C430] font-bold text-sm hover:underline"
                  >
                    <span>Direct Hotline: +91 93102 41446</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY RIDE WITH US? (BALAJEE ADVANTAGE) */}
      <section className="py-12 px-4 max-w-6xl mx-auto" id="why-us">
        <SectionTitle
          badge="Why Ride With Us?"
          title="The Balajee Advantage"
          subtitle="Direct ownership, clean fleet, and disciplined chauffeurs"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-2">🧼</div>
            <h3 className="text-xs sm:text-sm font-bold text-[#0A1931]">Spotless Cabs</h3>
            <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-relaxed">
              Washed and vacuumed before every single trip with working chilled AC.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-2">🛡️</div>
            <h3 className="text-xs sm:text-sm font-bold text-[#0A1931]">Family Safe</h3>
            <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-relaxed">
              Verified drivers trusted by senior citizens, solo women, and family pilgrims.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-2">⏱️</div>
            <h3 className="text-xs sm:text-sm font-bold text-[#0A1931]">100% Punctual</h3>
            <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-relaxed">
              Driver arrives 10–15 minutes prior to scheduled pickup time.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-2">🏷️</div>
            <h3 className="text-xs sm:text-sm font-bold text-[#0A1931]">Fixed Estimates</h3>
            <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-relaxed">
              Transparent per-km quotes with zero surprise fees or surge pricing.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-2">🚨</div>
            <h3 className="text-xs sm:text-sm font-bold text-[#0A1931]">Emergency Cabs</h3>
            <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-relaxed">
              Fast dispatches for urgent railway delays, midnight calls &amp; hospital visits.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-2">🧳</div>
            <h3 className="text-xs sm:text-sm font-bold text-[#0A1931]">Luggage Carrier</h3>
            <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-relaxed">
              Roof-carriers available on Scorpio &amp; Innova for bulky luggage upon request.
            </p>
          </div>
        </div>
      </section>

      {/* 8. HOW TO BOOK (3 SIMPLE STEPS) */}
      <section className="py-12 px-4 bg-[#14306B] text-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            badge="Fast &amp; Hassle-Free"
            title="Book in 3 Simple Steps"
            subtitle="No complex app downloads or signup headaches"
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3.5 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
              <div className="w-9 h-9 rounded-xl bg-[#FFD147] text-[#0A1931] flex items-center justify-center font-black text-sm shrink-0">
                1
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">Send Trip Details</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  WhatsApp or Call 93102 41446 with your pickup location, destination, date and car preference.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
              <div className="w-9 h-9 rounded-xl bg-[#FFD147] text-[#0A1931] flex items-center justify-center font-black text-sm shrink-0">
                2
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">Instant Fare &amp; Confirmation</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Receive immediate transparent quote &amp; vehicle details matching your exact travel requirement.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
              <div className="w-9 h-9 rounded-xl bg-[#FFD147] text-[#0A1931] flex items-center justify-center font-black text-sm shrink-0">
                3
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">Doorstep Pickup</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Chauffeur arrives at your doorstep on time. Relax and enjoy a smooth, safe ride!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. REVIEWS SECTION */}
      <section className="py-12 px-4 max-w-6xl mx-auto" id="reviews-section">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-[11px] font-bold text-[#14306B] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded">
              Happy Travelers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0A1931] mt-2">
              Google Reviews
            </h2>
          </div>
          <div className="text-right">
            <span className="text-base sm:text-lg font-black text-[#14306B]">4.8 / 5.0</span>
            <div className="text-amber-500 text-xs sm:text-sm">★★★★★</div>
            <span className="text-[10px] text-gray-500">{BUSINESS_INFO.reviewCount}+ Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {REVIEWS.slice(0, 3).map((rev) => (
            <div key={rev.id} className="flex">
              <ReviewCard review={rev} />
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14306B] hover:text-[#0A1931] hover:underline"
          >
            <span>Read all 152+ customer stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 10. REAL VEHICLE PHOTOS GALLERY */}
      <GallerySection />

      {/* 11. FAQ SECTION */}
      <section className="py-12 px-4 max-w-6xl mx-auto" id="faqs">
        <SectionTitle
          badge="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Clear answers about Dhanbad cab booking, tariffs, and outstation drops"
        />
        <FaqAccordion />
      </section>

      {/* 12. OFFICE & MAP CONTACT SECTION */}
      <section className="py-12 px-4 bg-white border-t border-gray-200" id="contact-info">
        <div className="max-w-6xl mx-auto space-y-8">
          <SectionTitle
            badge="Office &amp; Contact"
            title="Visit Us or Book 24x7 in Bartand, Dhanbad"
            subtitle="Registered office moments from Dhanbad Railway Station &amp; Bartand Bus Stand"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Embedded Google Map & Buttons (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              {/* Embedded Google Map with exact specifications */}
              <div className="w-full h-[280px] md:h-[350px] rounded-2xl overflow-hidden border-0 shadow-sm bg-slate-100">
                <iframe
                  src="https://www.google.com/maps?q=Shree+Balajee+Travels+Bartand+Dhanbad&ll=23.8068669,86.4295077&z=17&output=embed"
                  className="w-full h-full border-0 rounded-2xl"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shree Balajee Travels Google Map"
                ></iframe>
              </div>

              {/* Two buttons below the map */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=23.8068669,86.4295077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#14306B] hover:bg-[#0A1931] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-sm transition active:scale-95"
                >
                  <Navigation className="w-4 h-4 text-[#FFD147]" />
                  <span>Get Directions</span>
                </a>

                <a
                  href="https://www.google.com/maps/cid=13490718521534785700"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#14306B] font-bold py-3 px-4 rounded-xl text-xs sm:text-sm border border-gray-300 shadow-sm transition active:scale-95"
                >
                  <ExternalLink className="w-4 h-4 text-[#14306B]" />
                  <span>View on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Right: Address & Phone details next to the map (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl border border-gray-200 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#14306B] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                      Address
                    </strong>
                    <a
                      href="https://www.google.com/maps/cid=13490718521534785700"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-[#0A1931] hover:text-[#14306B] transition block mt-0.5"
                    >
                      Lane No 4, Jai Prakash Nagar, Bartand, Dhanbad, Jharkhand 826007
                    </a>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      Landmark: Near Bartand Bus Stand &amp; Dhanbad Poly-technic Road
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-gray-200/80">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                      Phone &amp; Hotline
                    </strong>
                    <a
                      href="tel:+919310241446"
                      className="text-sm sm:text-base font-extrabold text-[#14306B] hover:underline block mt-0.5"
                    >
                      93102 41446
                    </a>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      24x7 Direct human dispatcher • Instant booking
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-gray-200/80">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                      Operating Hours
                    </strong>
                    <p className="text-xs font-semibold text-gray-800 mt-0.5">
                      24 Hours / 7 Days a Week (24x7 Open)
                    </p>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      Day &amp; night station drops &amp; emergency rides
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <a
                    href="tel:+919310241446"
                    className="flex items-center justify-center gap-1.5 bg-[#14306B] hover:bg-[#0A1931] text-white font-bold py-2.5 rounded-xl text-xs transition active:scale-95"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FFD147]" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={BUSINESS_INFO.defaultWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-2.5 rounded-xl text-xs transition active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Quick Note Form */}
              <div className="bg-[#F3F6FC] p-4 sm:p-5 rounded-2xl border border-gray-200">
                <h3 className="text-xs sm:text-sm font-bold text-[#0A1931] mb-1">
                  Have a question? Send Quick Note
                </h3>
                <form onSubmit={handleSendQuickNote} className="space-y-2.5">
                  <input
                    type="text"
                    value={quickName}
                    onChange={(e) => setQuickName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full text-xs rounded-lg border-gray-300 focus:border-[#14306B] px-3 py-2 bg-white"
                  />
                  <textarea
                    rows={2}
                    value={quickMsg}
                    onChange={(e) => setQuickMsg(e.target.value)}
                    placeholder="Route or taxi requirement..."
                    required
                    className="w-full text-xs rounded-lg border-gray-300 focus:border-[#14306B] px-3 py-2 bg-white"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#14306B] hover:bg-[#0A1931] text-white font-bold py-2 px-4 rounded-lg text-xs uppercase tracking-wide flex items-center justify-center gap-2 transition active:scale-95 shadow-sm"
                  >
                    <Send className="w-3 h-3 text-[#FFD147]" />
                    <span>Send to WhatsApp Desk</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
