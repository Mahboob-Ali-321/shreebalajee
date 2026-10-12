import { MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";

export default function FloatingWhatsApp() {
  return (
    <aside
      className="fixed bottom-[80px] right-4 md:bottom-6 md:right-6 z-40 md:z-50 transition-transform duration-300 hover:scale-105 active:scale-95"
      data-purpose="floating-whatsapp-cta"
    >
      <a
        href={BUSINESS_INFO.defaultWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold rounded-full shadow-2xl transition border-2 border-white w-14 h-14 md:w-auto md:h-auto md:px-4 md:py-3 md:gap-2.5 group"
        title="Chat on WhatsApp with Shree Balajee Travels"
        aria-label="WhatsApp Booking"
      >
        <MessageCircle className="w-6 h-6 md:w-5 md:h-5 fill-white shrink-0" />
        <span className="hidden md:inline text-xs sm:text-sm tracking-wide">WhatsApp Booking</span>
        <span className="hidden md:inline-block w-2 h-2 rounded-full bg-white animate-ping"></span>
      </a>
    </aside>
  );
}
