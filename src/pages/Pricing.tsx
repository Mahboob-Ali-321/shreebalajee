import { useState } from "react";
import { Check, Info, Calculator, MessageCircle } from "lucide-react";
import PriceCard from "../components/PriceCard";
import SectionTitle from "../components/SectionTitle";
import { LOCAL_PACKAGES, BUSINESS_INFO } from "../data/business";
import { createPackageWhatsAppUrl } from "../utils/whatsapp";

export default function Pricing() {
  // Interactive Local Fare Calculator state
  const [selectedHours, setSelectedHours] = useState(8);
  const [estExtraKm, setEstExtraKm] = useState(10);
  const [selectedVehicleType, setSelectedVehicleType] = useState<"Hatchback" | "Ertiga" | "Innova">("Hatchback");

  // Calculation
  const basePackage = LOCAL_PACKAGES.find((p) => p.hours === selectedHours) || LOCAL_PACKAGES[3];
  const vehicleMultiplier = selectedVehicleType === "Innova" ? 1.4 : selectedVehicleType === "Ertiga" ? 1.2 : 1.0;
  const extraKmRate = selectedVehicleType === "Innova" ? 15 : selectedVehicleType === "Ertiga" ? 13 : 10;
  
  const estimatedTotal = Math.round(basePackage.price * vehicleMultiplier + estExtraKm * extraKmRate);

  const handleCalculatorWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Shree Balajee Travels, I calculated an estimated local package:\n- Package: ${basePackage.title}\n- Vehicle: ${selectedVehicleType}\n- Estimated Extra KM: ${estExtraKm} KM\n- Estimated Quote: ₹${estimatedTotal}\n\nPlease confirm availability and booking.`
    );
    window.open(`https://wa.me/91${BUSINESS_INFO.phoneRaw}?text=${text}`, "_blank");
  };

  return (
    <div className="py-8 sm:py-12 px-4 max-w-6xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-[11px] font-bold text-[#14306B] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
          Transparent &amp; Predictable Tariffs
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#0A1931] mt-3">
          Dhanbad Local Hourly Packages
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2">
          Fixed rates for shopping, marriage attendances, business meetings, and local city trips. No surge fees, no hidden billing surprises.
        </p>
      </div>

      {/* Package Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
        {LOCAL_PACKAGES.map((pkg) => (
          <div key={pkg.id} className="flex">
            <PriceCard pkg={pkg} />
          </div>
        ))}
      </div>

      {/* Interactive Fare Estimator */}
      <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-card">
        <div className="flex items-center gap-2 mb-2">
          <Calculator className="w-5 h-5 text-[#14306B]" />
          <h2 className="text-lg sm:text-xl font-bold text-[#0A1931]">
            Interactive Local Rental Calculator
          </h2>
        </div>
        <p className="text-xs text-gray-500 mb-6">
          Estimate your trip cost accurately based on your expected duration and distance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {/* Duration Selector */}
          <div>
            <label className="block text-xs font-bold text-[#0A1931] uppercase mb-2">
              Select Package Duration
            </label>
            <select
              value={selectedHours}
              onChange={(e) => setSelectedHours(Number(e.target.value))}
              className="w-full text-xs sm:text-sm rounded-xl border-gray-300 focus:border-[#14306B] focus:ring-[#14306B] p-2.5 bg-slate-50 font-medium"
            >
              <option value={2}>2 Hours / 25 KM (₹500 Base)</option>
              <option value={4}>4 Hours / 40 KM (₹1,000 Base)</option>
              <option value={6}>6 Hours / 60 KM (₹1,700 Base)</option>
              <option value={8}>8 Hours / 80 KM (₹2,000 Base - Most Popular)</option>
              <option value={10}>10 Hours / 100 KM (₹2,400 Base)</option>
            </select>
          </div>

          {/* Vehicle Class Selector */}
          <div>
            <label className="block text-xs font-bold text-[#0A1931] uppercase mb-2">
              Vehicle Class
            </label>
            <select
              value={selectedVehicleType}
              onChange={(e) => setSelectedVehicleType(e.target.value as "Hatchback" | "Ertiga" | "Innova")}
              className="w-full text-xs sm:text-sm rounded-xl border-gray-300 focus:border-[#14306B] focus:ring-[#14306B] p-2.5 bg-slate-50 font-medium"
            >
              <option value="Hatchback">Hatchback (Swift / 5-Seater)</option>
              <option value="Ertiga">Ertiga (6-Seater MPV)</option>
              <option value="Innova">Innova Crysta (7-Seater Executive)</option>
            </select>
          </div>

          {/* Expected Extra KM */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-[#0A1931] uppercase">
                Expected Extra KM: {estExtraKm} KM
              </label>
              <span className="text-[10px] text-gray-500">₹{extraKmRate}/km</span>
            </div>
            <input
              type="range"
              min={0}
              max={60}
              step={5}
              value={estExtraKm}
              onChange={(e) => setEstExtraKm(Number(e.target.value))}
              className="w-full accent-[#14306B]"
            />
          </div>
        </div>

        {/* Calculation Result Box */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-blue-50/50 p-4 rounded-2xl">
          <div>
            <span className="text-xs text-gray-500">Estimated Total Fare:</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#14306B]">
              ₹{estimatedTotal.toLocaleString("en-IN")}{" "}
              <span className="text-xs font-normal text-gray-500">(All base inclusive)</span>
            </div>
            <span className="text-[11px] text-emerald-700 font-medium">
              ✓ Includes Chauffeur service for {basePackage.hours} Hours &amp; {basePackage.kms + estExtraKm} Total Kilometers
            </span>
          </div>

          <button
            onClick={handleCalculatorWhatsApp}
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-wider shadow transition active:scale-95 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Book This Estimate</span>
          </button>
        </div>
      </div>

      {/* Transparent Rules & Inclusions */}
      <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm">
        <SectionTitle
          badge="Policy Details"
          title="Clear Billing Inclusions &amp; Guidelines"
          subtitle="Everything you need to know about our local car hire tariffs"
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-700 leading-relaxed">
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-[#0A1931] flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" /> What Is Included:
            </h3>
            <ul className="space-y-2 text-gray-600 list-disc pl-5">
              <li>Fuel and chauffeur services for the allotted hours and kilometers.</li>
              <li>Chilled air-conditioned travel across all Dhanbad municipal boundaries.</li>
              <li>Multiple stopovers for shopping, family visits, or meetings.</li>
              <li>Doorstep pickup and drop at any location in Dhanbad city limits.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-sm text-[#0A1931] flex items-center gap-2">
              <Info className="w-4 h-4 text-amber-600" /> Extra Charges &amp; Outstation Rules:
            </h3>
            <ul className="space-y-2 text-gray-600 list-disc pl-5">
              <li><strong>Extra KM:</strong> ₹10/km for Hatchback (Swift), ₹13/km for Ertiga, ₹15/km for Innova Crysta.</li>
              <li><strong>Extra Waiting:</strong> ₹100 per hour beyond the booked package time.</li>
              <li><strong>Toll &amp; Parking:</strong> Paid as per actual FASTag and municipal receipts.</li>
              <li><strong>Night Driving:</strong> Applicable for trips continuing past 10:00 PM.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs">
          <span className="text-gray-500">
            Need customized full-day or multi-day itinerary outside Dhanbad?
          </span>
          <a
            href={createPackageWhatsAppUrl("Custom Full Day Package")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#14306B] font-bold hover:underline"
          >
            Chat with Tour Desk on WhatsApp →
          </a>
        </div>
      </div>
    </div>
  );
}
