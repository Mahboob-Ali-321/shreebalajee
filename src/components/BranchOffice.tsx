import { MapPin, Phone, MessageCircle, Navigation } from "lucide-react";
import { DURGAPUR_BRANCH } from "../data/branch";

export default function BranchOffice() {
  return (
    <section className="bg-[#F3F6FC] py-12 md:py-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2 bg-blue-100/80 text-[#14306B]">
            {DURGAPUR_BRANCH.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading leading-tight text-[#0A1931]">
            {DURGAPUR_BRANCH.heading}
          </h2>
          <p className="text-xs sm:text-sm mt-2 leading-relaxed text-gray-600">
            {DURGAPUR_BRANCH.subtitle}
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left Info Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Business Name */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0A1931]">
                  {DURGAPUR_BRANCH.name}
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                <span className="p-2 rounded-lg bg-amber-50 text-amber-600 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#FFD147]" />
                </span>
                <span className="leading-relaxed">
                  {DURGAPUR_BRANCH.address}
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-700">
                <span className="p-2 rounded-lg bg-blue-50 text-[#14306B] shrink-0">
                  <Phone className="w-4 h-4 text-[#14306B]" />
                </span>
                <a
                  href={DURGAPUR_BRANCH.callUrl}
                  className="font-bold text-[#14306B] hover:underline"
                >
                  {DURGAPUR_BRANCH.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Action Buttons (at least 44px tall) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-gray-100">
              <a
                href={DURGAPUR_BRANCH.callUrl}
                className="min-h-[44px] bg-[#14306B] hover:bg-[#0A1931] text-white font-bold text-xs sm:text-sm rounded-xl px-4 py-2.5 flex items-center justify-center gap-2 transition-colors shadow-xs active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#FFD147]" />
                <span>Call Now</span>
              </a>

              <a
                href={DURGAPUR_BRANCH.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm rounded-xl px-4 py-2.5 flex items-center justify-center gap-2 transition-colors shadow-xs active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={DURGAPUR_BRANCH.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] border-2 border-[#14306B] text-[#14306B] hover:bg-[#14306B] hover:text-white font-bold text-xs sm:text-sm rounded-xl px-4 py-2.5 flex items-center justify-center gap-2 transition-colors active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Map */}
          <div className="w-full h-[280px] lg:h-full min-h-[280px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-slate-100">
            <iframe
              src={DURGAPUR_BRANCH.mapEmbedUrl}
              title="Durgapur Branch Office Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
