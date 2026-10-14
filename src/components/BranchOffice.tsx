import { useState } from "react";
import { MapPin, Phone, MessageCircle, Navigation, Car, Copy, Check, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { DURGAPUR_BRANCH, getBranchMapEmbedUrl, getBranchDirectionsUrl } from "../data/branch";

export default function BranchOffice() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(DURGAPUR_BRANCH.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is unavailable
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const mapEmbedSrc = getBranchMapEmbedUrl(DURGAPUR_BRANCH);
  const directionsHref = getBranchDirectionsUrl(DURGAPUR_BRANCH);

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

        {/* 2-Column Responsive Layout with subtle fade-up motion on scroll */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col justify-between"
          >
            {/* 1. Card Header Strip (navy gradient, rounded top, white text) */}
            <div className="bg-gradient-to-r from-[#14306B] to-[#0A1931] text-white px-5 sm:px-6 py-4 flex items-center gap-3.5 border-b border-blue-900/40">
              <div className="w-10 h-10 rounded-full bg-[#FFD147] flex items-center justify-center shrink-0 shadow-xs">
                <MapPin className="w-5 h-5 text-[#0A1931] fill-[#0A1931]/15" />
              </div>
              <div className="leading-tight">
                <div className="font-heading font-bold text-base sm:text-lg text-white">
                  Branch Office
                </div>
                <div className="text-xs text-[#FFD147] font-medium">
                  City Centre, Durgapur
                </div>
              </div>
            </div>

            {/* Card Body Content */}
            <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between gap-6">
              {/* Business Name & 2. Office Chips Row */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0A1931]">
                    {DURGAPUR_BRANCH.name}
                  </h3>
                </div>

                {/* Office Chips joined by a dotted line with a car icon */}
                <div className="flex items-center justify-between gap-2 p-3 bg-[#F3F6FC]/70 rounded-xl border border-gray-200/80 text-xs">
                  {/* Chip 1 */}
                  <div className="flex-1 min-w-0 bg-white p-2.5 rounded-lg border border-gray-200 shadow-2xs">
                    <span className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                      Main Office
                    </span>
                    <span className="block font-semibold text-[#0A1931] truncate text-[11px] sm:text-xs">
                      Bartand, Dhanbad
                    </span>
                  </div>

                  {/* Dotted Connector with Car Icon */}
                  <div className="flex items-center justify-center shrink-0 px-1 text-slate-400">
                    <span className="w-2.5 sm:w-4 border-b-2 border-dotted border-gray-300"></span>
                    <Car className="w-4 h-4 text-[#14306B] mx-1 shrink-0" />
                    <span className="w-2.5 sm:w-4 border-b-2 border-dotted border-gray-300"></span>
                  </div>

                  {/* Chip 2 (Highlighted with amber border) */}
                  <div className="flex-1 min-w-0 bg-white p-2.5 rounded-lg border-2 border-[#FFD147] shadow-xs">
                    <span className="block text-[10px] uppercase font-bold text-[#14306B] tracking-wider">
                      Branch Office
                    </span>
                    <span className="block font-bold text-[#0A1931] truncate text-[11px] sm:text-xs">
                      City Centre, Durgapur
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. Info rows with icon tiles */}
              <div className="space-y-4">
                {/* Address Row */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#14306B] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#14306B]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-wider font-bold text-gray-500">
                      Address
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-gray-800 leading-snug mt-0.5">
                      {DURGAPUR_BRANCH.address}
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#14306B] hover:text-[#0A1931] bg-white border border-gray-200 hover:border-gray-300 px-2.5 py-1 rounded-md transition-colors shadow-2xs"
                      title="Copy address to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-[#14306B]" />
                          <span>Copy address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone Row */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#14306B] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#14306B]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-wider font-bold text-gray-500">
                      Call or WhatsApp
                    </div>
                    <a
                      href={DURGAPUR_BRANCH.callUrl}
                      className="text-sm sm:text-base font-extrabold text-[#14306B] hover:underline font-heading block mt-0.5"
                    >
                      {DURGAPUR_BRANCH.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* 4. Action Buttons with hover lift + Justdial text link */}
              <div className="pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href={DURGAPUR_BRANCH.callUrl}
                    className="min-h-[44px] bg-[#14306B] hover:bg-[#0A1931] text-white font-bold text-xs sm:text-sm rounded-xl px-4 py-2.5 flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xs hover:shadow-md"
                  >
                    <Phone className="w-4 h-4 text-[#FFD147]" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={DURGAPUR_BRANCH.whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm rounded-xl px-4 py-2.5 flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xs hover:shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={directionsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] border-2 border-[#14306B] text-[#14306B] hover:bg-[#14306B] hover:text-white font-bold text-xs sm:text-sm rounded-xl px-4 py-2.5 flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xs hover:shadow-md"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions</span>
                  </a>
                </div>

                {/* Justdial Link */}
                <div className="mt-4 pt-3 border-t border-gray-100 text-center">
                  <a
                    href={DURGAPUR_BRANCH.justdialUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 text-[11px] text-gray-500 hover:text-[#14306B] transition-colors"
                  >
                    <span>View our listing on Justdial</span>
                    <ExternalLink className="w-3 h-3 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Map (equal height on desktop, 300px on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="relative w-full h-[300px] lg:h-full min-h-[300px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-slate-100 flex"
          >
            {/* Floating White Label at Top-Left */}
            <div className="absolute top-3 left-3 z-10 pointer-events-none bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg shadow-sm border border-gray-200/80 flex items-center gap-2 text-xs font-bold text-[#0A1931]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Durgapur Branch</span>
            </div>

            <iframe
              src={mapEmbedSrc}
              title="Durgapur Branch Office Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0 rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
