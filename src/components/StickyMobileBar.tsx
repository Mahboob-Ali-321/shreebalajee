import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";

export default function StickyMobileBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-gray-200 shadow-sticky px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
      data-purpose="sticky-bottom-bar"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2">
        {/* Call Button */}
        <a
          href={BUSINESS_INFO.callUrl}
          className="flex items-center justify-center gap-1.5 bg-[#14306B] active:bg-[#0A1931] text-white min-h-[44px] py-2.5 px-3 rounded-xl font-bold text-xs tracking-wide shadow-md transition active:scale-95"
          aria-label="Call Shree Balajee Travels"
        >
          <Phone className="w-4 h-4 text-[#FFD147]" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={BUSINESS_INFO.defaultWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-[#25D366] active:bg-[#1EBE5D] text-white min-h-[44px] py-2.5 px-3 rounded-xl font-bold text-xs tracking-wide shadow-md transition active:scale-95"
          aria-label="Book on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-white text-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
