import { useState } from "react";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import CarCard from "../components/CarCard";
import SectionTitle from "../components/SectionTitle";
import { FLEET_DATA, BUSINESS_INFO } from "../data/business";

type FilterType = "All" | "Hatchback" | "SUV" | "MPV";

export default function Fleet() {
  const [filter, setFilter] = useState<FilterType>("All");

  const filteredCars = FLEET_DATA.filter((car) => {
    if (filter === "All") return true;
    return car.type === filter;
  });

  return (
    <div className="py-8 sm:py-12 px-4 max-w-6xl mx-auto space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-[11px] font-bold text-[#14306B] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
          Verified Commercial Fleet
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#0A1931] mt-3">
          Our Maintained Dhanbad Fleet
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2">
          From economical hatchbacks to spacious 7-seater Innova Crystas and rugged Scorpios. Sanitized before every trip with chilled AC and verified polite drivers.
        </p>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-1.5 p-1 bg-white border border-gray-200 rounded-xl shadow-sm mt-6 max-w-sm mx-auto">
          {(["All", "Hatchback", "SUV", "MPV"] as FilterType[]).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg transition-all ${
                filter === type
                  ? "bg-[#14306B] text-white shadow"
                  : "text-gray-600 hover:text-[#0A1931] hover:bg-gray-100"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Fleet Cards Grid: 3 columns on desktop, last row centered with equal card widths */}
      {filter === "All" ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.slice(0, 3).map((car) => (
              <div key={car.id} className="flex">
                <CarCard car={car} />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {filteredCars.slice(3, 5).map((car) => (
              <div key={car.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex">
                <CarCard car={car} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {filteredCars.map((car) => (
            <div key={car.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex">
              <CarCard car={car} />
            </div>
          ))}
        </div>
      )}

      {/* Bulk & Wedding Convoy Callout Banner */}
      <div className="bg-gradient-to-br from-[#14306B] to-[#0A1931] text-white rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#FFD147]/20 text-[#FFD147] border border-[#FFD147]/30 px-2.5 py-0.5 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Special Events &amp; Convoys
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-heading">
            Need a Wedding Convoy or Corporate Fleet in Dhanbad?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Planning a marriage barat, corporate conference at IIT ISM Dhanbad, or VIP pilgrimage convoy to Parasnath &amp; Deoghar? We deploy 5 to 15 matching spotless cabs together with disciplined uniform chauffeurs.
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
          <a
            href="https://wa.me/919310241446?text=Hi%20Shree%20Balajee%20Travels,%20I%20need%20bulk%20cab%20booking%20for%20wedding/event%20in%20Dhanbad."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#FFD147] hover:bg-[#F5C430] text-[#0A1931] font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider shadow transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Inquire for Bulk Booking</span>
          </a>
          <a
            href={BUSINESS_INFO.callUrl}
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-4 rounded-xl text-xs border border-white/20 transition"
          >
            <Phone className="w-4 h-4 text-[#FFD147]" />
            <span>Call Hotline: 93102 41446</span>
          </a>
        </div>
      </div>

      {/* Fleet Standards Table */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <SectionTitle
          title="Fleet Tariffs &amp; Minimum Kilometers"
          subtitle="Simple, upfront billing structure with zero hidden demands"
          align="left"
        />

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700">
            <thead>
              <tr className="border-b border-gray-200 text-[#14306B] font-bold uppercase text-[10px]">
                <th className="py-3 px-3">Vehicle Model</th>
                <th className="py-3 px-3">Seating</th>
                <th className="py-3 px-3">Per KM Rate</th>
                <th className="py-3 px-3">Min. KM / Day</th>
                <th className="py-3 px-3">Air Conditioning</th>
                <th className="py-3 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-slate-50 transition">
                <td className="py-3.5 px-3 font-bold text-[#0A1931]">Toyota Innova Crysta</td>
                <td className="py-3.5 px-3">6-7 Seater</td>
                <td className="py-3.5 px-3 font-extrabold text-[#14306B]">₹18 / km</td>
                <td className="py-3.5 px-3">300 KM / day</td>
                <td className="py-3.5 px-3">Dual Climate AC</td>
                <td className="py-3.5 px-3 text-right">
                  <a
                    href="https://wa.me/919310241446?text=Hi,%20I%20want%20to%20book%20Toyota%20Innova%20Crysta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[11px] font-bold text-emerald-700 hover:underline"
                  >
                    Book →
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition">
                <td className="py-3.5 px-3 font-bold text-[#0A1931]">Maruti Suzuki Ertiga</td>
                <td className="py-3.5 px-3">6+1 Seater</td>
                <td className="py-3.5 px-3 font-extrabold text-[#14306B]">₹15 / km</td>
                <td className="py-3.5 px-3">270 KM / day</td>
                <td className="py-3.5 px-3">Dual AC Vents</td>
                <td className="py-3.5 px-3 text-right">
                  <a
                    href="https://wa.me/919310241446?text=Hi,%20I%20want%20to%20book%20Maruti%20Ertiga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[11px] font-bold text-emerald-700 hover:underline"
                  >
                    Book →
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition">
                <td className="py-3.5 px-3 font-bold text-[#0A1931]">Mahindra Scorpio</td>
                <td className="py-3.5 px-3">7-9 Seater</td>
                <td className="py-3.5 px-3 font-extrabold text-[#14306B]">₹15 / km</td>
                <td className="py-3.5 px-3">270 KM / day</td>
                <td className="py-3.5 px-3">High-Power AC</td>
                <td className="py-3.5 px-3 text-right">
                  <a
                    href="https://wa.me/919310241446?text=Hi,%20I%20want%20to%20book%20Mahindra%20Scorpio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[11px] font-bold text-emerald-700 hover:underline"
                  >
                    Book →
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition">
                <td className="py-3.5 px-3 font-bold text-[#0A1931]">Maruti Suzuki Swift</td>
                <td className="py-3.5 px-3">5 Seater</td>
                <td className="py-3.5 px-3 font-extrabold text-[#14306B]">₹13 / km</td>
                <td className="py-3.5 px-3">250 KM / day</td>
                <td className="py-3.5 px-3">Chilled AC &amp; Heater</td>
                <td className="py-3.5 px-3 text-right">
                  <a
                    href="https://wa.me/919310241446?text=Hi,%20I%20want%20to%20book%20a%20Maruti%20Suzuki%20Swift"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[11px] font-bold text-emerald-700 hover:underline"
                  >
                    Book →
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition">
                <td className="py-3.5 px-3 font-bold text-[#0A1931]">Honda WR-V</td>
                <td className="py-3.5 px-3">5 Seater</td>
                <td className="py-3.5 px-3 font-semibold text-gray-700">Ask for Fare</td>
                <td className="py-3.5 px-3">Custom</td>
                <td className="py-3.5 px-3">Full Climate AC</td>
                <td className="py-3.5 px-3 text-right">
                  <a
                    href="https://wa.me/919310241446?text=Hi,%20I%20want%20to%20book%20Honda%20WR-V"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[11px] font-bold text-emerald-700 hover:underline"
                  >
                    Book →
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
