import { ArrowRight } from "lucide-react";
import { RouteItem } from "../data/business";
import { createRouteFareWhatsAppUrl } from "../utils/whatsapp";

interface RouteCardProps {
  route: RouteItem;
}

export default function RouteCard({ route }: RouteCardProps) {
  const whatsappUrl = createRouteFareWhatsAppUrl(route.from, route.to);

  return (
    <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between h-full w-full hover:border-[#14306B] hover:shadow-md transition">
      <div>
        {/* Route header with line clamp / truncation */}
        <div className="text-xs sm:text-sm font-bold text-[#0A1931] flex items-center gap-1.5 truncate">
          <span className="shrink-0">{route.from}</span>
          <span className="text-[#FFD147] font-bold shrink-0">➔</span>
          <span className="text-[#14306B] truncate" title={route.to}>
            {route.to}
          </span>
        </div>

        {/* Distance • Duration */}
        <div className="text-[11px] text-gray-500 mt-1 flex items-center gap-2">
          <span>{route.distance}</span>
          <span>•</span>
          <span>{route.duration}</span>
        </div>

        {/* One-way badge */}
        <p className="text-[10px] text-emerald-700 font-medium mt-1.5">
          ✓ {route.highlight} (No Return Charges)
        </p>
      </div>

      {/* Button pinned at bottom */}
      <div className="mt-4 pt-2 border-t border-gray-100 flex justify-end">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-1.5 bg-[#14306B] hover:bg-[#0A1931] text-white px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shadow-sm transition active:scale-95"
        >
          <span>Get Fare on WhatsApp</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
