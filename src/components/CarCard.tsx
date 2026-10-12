import { Phone, MessageCircle } from "lucide-react";
import { Car, BUSINESS_INFO } from "../data/business";
import { createCarBookingWhatsAppUrl } from "../utils/whatsapp";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const whatsappUrl = createCarBookingWhatsAppUrl(car.name);
  const position = car.imagePosition || "center 50%";

  return (
    <div className="bg-white rounded-2xl border border-gray-200/90 shadow-card overflow-hidden flex flex-col h-full w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Car Image with Badge and Price overlay */}
      <div className="relative bg-slate-100 overflow-hidden group w-full h-56 md:h-64 shrink-0">
        <img
          src={car.imageUrl}
          alt={car.altText || `${car.name} cab in Dhanbad`}
          loading="lazy"
          style={{ objectPosition: position }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

        {/* Category Tag */}
        <span className="absolute top-2.5 left-2.5 bg-[#14306B] text-[#FFD147] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow">
          {car.tag}
        </span>

        {/* Pricing Box */}
        <div className="absolute bottom-2.5 right-2.5 bg-[#0A1931]/90 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-right shadow">
          <span className="text-[10px] text-gray-300 block leading-tight">Starting at</span>
          <span className="text-sm font-extrabold text-[#FFD147]">
            {car.rateText}
          </span>
        </div>
      </div>

      {/* Content Details & Action Buttons pinned to bottom */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#0A1931]">
                {car.name}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                {car.subtitle}
              </p>
            </div>
            <span className="text-[10px] font-semibold bg-blue-50 text-[#14306B] px-2 py-0.5 rounded border border-blue-100 shrink-0">
              {car.type}
            </span>
          </div>

          <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
            {car.description}
          </p>

          {/* Features Badges */}
          <div className="flex flex-wrap gap-1.5 my-3">
            {car.features.map((feature, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-gray-700 text-[10px] font-medium px-2 py-0.5 rounded-md"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons pinned to bottom with mt-auto */}
        <div className="pt-3 mt-auto border-t border-gray-100">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={BUSINESS_INFO.callUrl}
              className="flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-[#14306B] font-semibold py-2.5 rounded-xl text-xs transition active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call to Book</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-2.5 rounded-xl text-xs transition shadow-sm active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
