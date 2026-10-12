import { Navigation, ExternalLink } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";

export default function GoogleMapBlock() {
  return (
    <div className="space-y-4">
      {/* Map iframe */}
      <div className="w-full h-[280px] md:h-[350px] rounded-2xl overflow-hidden border-0 shadow-sm bg-slate-100">
        <iframe
          src="https://www.google.com/maps?q=Shree+Balajee+Travels+Bartand+Dhanbad&ll=23.8068669,86.4295077&z=17&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Shree Balajee Travels Location Map"
        ></iframe>
      </div>

      {/* Two action buttons below the map */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
  );
}
