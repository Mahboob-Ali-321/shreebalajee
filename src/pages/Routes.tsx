import { useState } from "react";
import { Plane, Train, MapPin, Search, ArrowRight, ShieldCheck, Clock, CheckCircle } from "lucide-react";
import RouteCard from "../components/RouteCard";
import SectionTitle from "../components/SectionTitle";
import { ONE_WAY_ROUTES, BUSINESS_INFO } from "../data/business";
import { createRouteFareWhatsAppUrl } from "../utils/whatsapp";

export default function Routes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [customDestination, setCustomDestination] = useState("");

  const filteredRoutes = ONE_WAY_ROUTES.filter((route) => {
    const q = searchTerm.toLowerCase();
    return route.to.toLowerCase().includes(q) || route.highlight.toLowerCase().includes(q);
  });

  const handleCustomRouteInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customDestination.trim()) return;
    const url = createRouteFareWhatsAppUrl("Dhanbad", customDestination.trim());
    window.open(url, "_blank");
  };

  return (
    <div className="py-8 sm:py-12 px-4 max-w-6xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
          Save Up to 40% on Outstation Drops
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#0A1931] mt-3">
          One-Way Drop Taxi from Dhanbad
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2">
          Pay strictly for the distance you travel. No return charges on confirmed drops to Ranchi Airport, Kolkata, Durgapur, Deoghar, Patna, and all major cities.
        </p>

        {/* Search Filter */}
        <div className="mt-6 max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search destination (e.g. Ranchi, Kolkata, Deoghar)..."
            className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#14306B] focus:ring-[#14306B] bg-white shadow-sm"
          />
        </div>
      </div>

      {/* Why Choose One-Way Drop Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start space-x-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-base shrink-0">
            ₹
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#0A1931]">Zero Return Fare</h3>
            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
              Never pay for the vehicle coming back to Dhanbad. Transparent one-way pricing.
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start space-x-3.5">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#14306B] flex items-center justify-center font-bold text-base shrink-0">
            <Plane className="w-5 h-5 text-[#14306B]" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#0A1931]">Airport Transfers</h3>
            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
              Guaranteed on-time drop for flights at Ranchi (IXR), Andal (RKN) &amp; Kolkata (CCU).
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start space-x-3.5">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-base shrink-0">
            <Clock className="w-5 h-5 text-amber-700" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#0A1931]">24x7 Midnight Dispatches</h3>
            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
              Night emergency drops and dawn highway trips with alert experienced chauffeurs.
            </p>
          </div>
        </div>
      </div>

      {/* Routes Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-[#0A1931]">
            Popular Outstation &amp; Transfer Corridors
          </h2>
          <span className="text-xs text-gray-500">
            {filteredRoutes.length} Destinations Available
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {filteredRoutes.map((route) => (
            <div key={route.id} className="flex">
              <RouteCard route={route} />
            </div>
          ))}
        </div>

        {filteredRoutes.length === 0 && (
          <div className="text-center py-10 bg-white rounded-2xl border border-gray-200 p-6 text-gray-500 text-xs">
            No predefined route found for "{searchTerm}". You can request a custom route quote below!
          </div>
        )}
      </div>

      {/* Custom Destination Box */}
      <div className="bg-gradient-to-br from-[#14306B] to-[#0A1931] text-white rounded-3xl p-6 sm:p-10 shadow-xl">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold text-[#FFD147] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
            Any Destination in India
          </span>
          <h2 className="text-xl sm:text-3xl font-bold font-heading">
            Need a Cab to Another City or Town?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            We cover all districts in Jharkhand, West Bengal, Bihar, and Odisha including Bokaro, Purulia, Giridih, Hazaribagh, Gaya, Asansol, and Siliguri.
          </p>

          <form onSubmit={handleCustomRouteInquiry} className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto pt-2">
            <input
              type="text"
              value={customDestination}
              onChange={(e) => setCustomDestination(e.target.value)}
              placeholder="Enter your destination city..."
              required
              className="flex-1 text-xs sm:text-sm px-4 py-3 rounded-xl border-0 text-[#0A1931] focus:ring-2 focus:ring-[#FFD147]"
            />
            <button
              type="submit"
              className="bg-[#FFD147] hover:bg-[#F5C430] text-[#0A1931] font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-wider shadow transition whitespace-nowrap active:scale-95 flex items-center justify-center gap-1.5"
            >
              <span>Get Instant Fare</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>

      {/* Popular Pilgrimage & Industrial Corridors */}
      <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm">
        <SectionTitle
          title="Frequent Dhanbad Outstation Travel Guides"
          subtitle="Estimated highway travel times, route conditions and recommended car classes"
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-700">
          <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-gray-200/80">
            <div className="flex items-center gap-2">
              <Plane className="w-4 h-4 text-[#14306B]" />
              <strong className="text-sm text-[#0A1931]">Dhanbad to Birsa Munda Airport Ranchi</strong>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Via NH-32 / NH-20 through Chas, Bokaro and Ramgarh Ghat. Distance: ~150 KM. Average drive time: 3.5 to 4 hours. Recommend <em>Toyota Innova Crysta</em> or <em>Maruti Ertiga</em> for families with airport luggage.
            </p>
            <div className="pt-1 text-[11px] text-emerald-700 font-semibold">
              ✓ Doorstep pickup in Dhanbad direct to Departure Terminal gate.
            </div>
          </div>

          <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-gray-200/80">
            <div className="flex items-center gap-2">
              <Train className="w-4 h-4 text-amber-700" />
              <strong className="text-sm text-[#0A1931]">Dhanbad to Deoghar Baba Baidyanath Dham</strong>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Pilgrimage route via Govindpur, Giridih &amp; Madhupur. Distance: ~115 KM. Average drive time: 3 hours. Same-day return or one-way drop available. Non-smoking polite chauffeurs.
            </p>
            <div className="pt-1 text-[11px] text-amber-800 font-semibold">
              ✓ Tailored stops for tea, prasad and refreshments.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
