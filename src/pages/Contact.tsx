import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Navigation, ExternalLink } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";
import { createWhatsAppBookingUrl } from "../utils/whatsapp";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [vehicle, setVehicle] = useState("Innova Crysta");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = createWhatsAppBookingUrl({
      name,
      pickup: pickup || "Dhanbad",
      drop: drop || "Destination",
      dateTime: dateTime || "Not specified",
      vehicle,
      notes: notes ? `Phone: ${phone}. ${notes}` : `Phone: ${phone}`,
    });
    window.open(url, "_blank");
  };

  return (
    <div className="py-8 sm:py-12 px-4 max-w-6xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-[11px] font-bold text-[#14306B] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
          We Are Here For You 24x7
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#0A1931] mt-3">
          Contact Shree Balajee Travels
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2">
          Direct human dispatchers available 24 hours a day, 365 days a year in Bartand, Dhanbad.
        </p>
      </div>

      {/* Main Google Maps & Address Section */}
      <div className="bg-white rounded-3xl border border-gray-200/90 shadow-card p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Google Maps Embed (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold text-[#14306B] uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded">
                  Live GPS Office Pin
                </span>
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  24x7 Open Base
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold font-heading text-[#0A1931]">
                Find Us on Google Maps
              </h2>
            </div>

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

          {/* Right: Address & Contact details next to the map (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-[11px] font-bold text-[#14306B] uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded">
                Office Information
              </span>
              <h2 className="text-lg sm:text-xl font-bold font-heading text-[#0A1931] mt-1">
                Shree Balajee Travels
              </h2>
            </div>

            <div className="bg-slate-50/80 rounded-2xl p-5 border border-gray-200/80 space-y-4 text-xs sm:text-sm">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#14306B] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1931] text-xs uppercase tracking-wider text-gray-500">
                    Address
                  </h3>
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

              {/* Phone */}
              <div className="flex items-start gap-3 pt-3 border-t border-gray-200/70">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1931] text-xs uppercase tracking-wider text-gray-500">
                    Phone &amp; Helpline
                  </h3>
                  <a
                    href="tel:+919311112923"
                    className="text-sm sm:text-base font-extrabold text-[#14306B] hover:underline block mt-0.5"
                  >
                    93102 41446
                  </a>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    24x7 Direct human dispatcher • Instant confirmation
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3 pt-3 border-t border-gray-200/70">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1931] text-xs uppercase tracking-wider text-gray-500">
                    Business Hours
                  </h3>
                  <p className="text-xs font-semibold text-gray-800 mt-0.5">
                    24 Hours / 7 Days a Week (24x7 Open)
                  </p>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Round-the-clock emergency drops &amp; railway pickups
                  </p>
                </div>
              </div>

              {/* Trust Tag */}
              <div className="flex items-start gap-3 pt-3 border-t border-gray-200/70">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1931] text-xs uppercase tracking-wider text-gray-500">
                    Service Guarantee
                  </h3>
                  <p className="text-xs text-gray-700 mt-0.5">
                    Fixed fare upfront, verified drivers &amp; zero hidden charges.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action CTA Buttons */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a
                href="tel:+919311112923"
                className="flex items-center justify-center gap-1.5 bg-[#14306B] hover:bg-[#0A1931] text-white font-bold py-3 rounded-xl text-xs sm:text-sm transition shadow-sm active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#FFD147]" />
                <span>Call 93102 41446</span>
              </a>

              <a
                href={BUSINESS_INFO.defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3 rounded-xl text-xs sm:text-sm transition shadow-sm active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-card">
        <div className="max-w-2xl mb-6">
          <span className="text-[11px] font-bold text-[#14306B] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded">
            Direct Booking Form
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0A1931] mt-2">
            Send Trip Inquiry to WhatsApp Desk
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Fill the details below and tap submit to automatically open a prefilled WhatsApp chat with our operator.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rajesh Kumar"
                className="w-full text-xs sm:text-sm rounded-xl border-gray-300 focus:border-[#14306B] focus:ring-[#14306B] px-3.5 py-2.5 bg-slate-50/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9876543210"
                className="w-full text-xs sm:text-sm rounded-xl border-gray-300 focus:border-[#14306B] focus:ring-[#14306B] px-3.5 py-2.5 bg-slate-50/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Pickup Point in Dhanbad *
              </label>
              <input
                type="text"
                required
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="e.g. Dhanbad Rly Station / Bartand"
                className="w-full text-xs sm:text-sm rounded-xl border-gray-300 focus:border-[#14306B] focus:ring-[#14306B] px-3.5 py-2.5 bg-slate-50/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Destination / Drop Point *
              </label>
              <input
                type="text"
                required
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                placeholder="e.g. Ranchi Airport / Kolkata / Local"
                className="w-full text-xs sm:text-sm rounded-xl border-gray-300 focus:border-[#14306B] focus:ring-[#14306B] px-3.5 py-2.5 bg-slate-50/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Travel Date &amp; Time
              </label>
              <input
                type="text"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                placeholder="e.g. Tomorrow 6:00 AM or Immediate"
                className="w-full text-xs sm:text-sm rounded-xl border-gray-300 focus:border-[#14306B] focus:ring-[#14306B] px-3.5 py-2.5 bg-slate-50/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Preferred Car
              </label>
              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full text-xs sm:text-sm rounded-xl border-gray-300 focus:border-[#14306B] focus:ring-[#14306B] px-3.5 py-2.5 bg-slate-50/50 font-medium"
              >
                <option value="Toyota Innova Crysta">Toyota Innova Crysta (6/7 Seater)</option>
                <option value="Maruti Suzuki Ertiga">Maruti Suzuki Ertiga (6 Seater)</option>
                <option value="Mahindra Scorpio">Mahindra Scorpio (7/9 Seater)</option>
                <option value="Maruti Suzuki Swift">Maruti Suzuki Swift (Hatchback)</option>
                <option value="Honda WR-V">Honda WR-V (Compact Luxury)</option>
                <option value="Best Available (Any)">Best Available (Any Car)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Special Requirements (Optional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Luggage details, roof carrier, senior citizen assist..."
              className="w-full text-xs sm:text-sm rounded-xl border-gray-300 focus:border-[#14306B] focus:ring-[#14306B] px-3.5 py-2.5 bg-slate-50/50"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#14306B] hover:bg-[#0A1931] text-white font-bold min-h-[44px] py-3.5 px-6 rounded-xl text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-[#FFD147]" />
            <span>Submit &amp; Open WhatsApp Chat</span>
          </button>

          <div className="text-center pt-1 text-[11px] text-gray-500">
            Prefer a quick telephone call? Reach operator directly at{" "}
            <a href="tel:+919311112923" className="text-[#14306B] font-bold underline">
              93102 41446
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
