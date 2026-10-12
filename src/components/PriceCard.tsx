import { ArrowRight, Check } from "lucide-react";
import { LocalPackage } from "../data/business";
import { createPackageWhatsAppUrl } from "../utils/whatsapp";

interface PriceCardProps {
  pkg: LocalPackage;
}

export default function PriceCard({ pkg }: PriceCardProps) {
  const whatsappUrl = createPackageWhatsAppUrl(pkg.title);

  if (pkg.popular) {
    return (
      <div className="relative bg-white rounded-2xl border-2 border-[#14306B] p-5 shadow-lg flex flex-col justify-between h-full w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <span className="absolute -top-3 right-4 bg-[#FFD147] text-[#0A1931] text-[10px] font-extrabold px-3 py-0.5 rounded-full shadow tracking-wider uppercase">
          ★ Most Popular
        </span>

        <div className="flex flex-col flex-1">
          <div className="flex items-center space-x-2.5 mb-3">
            <span className="w-9 h-9 rounded-xl bg-[#14306B] text-[#FFD147] flex items-center justify-center font-black text-xs shrink-0">
              {pkg.hours}H
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-[#0A1931] whitespace-nowrap leading-tight">
                {pkg.title}
              </h3>
              <p className="text-[11px] text-gray-500 truncate mt-0.5">{pkg.subtitle}</p>
            </div>
          </div>

          <div className="my-3 pb-3 border-b border-gray-100">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#14306B] tracking-tight">
              ₹{pkg.price.toLocaleString("en-IN")}
            </div>
            <span className="text-[10px] text-gray-500 block mt-0.5">Base Swift / Hatchback in Dhanbad</span>
          </div>

          <ul className="space-y-2 mb-4 text-xs text-gray-700 flex-1">
            {pkg.features.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="text-[11px] leading-tight">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-1.5 bg-[#FFD147] hover:bg-[#F5C430] text-[#0A1931] font-bold py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider shadow transition active:scale-95"
          >
            <span>Book Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-card flex flex-col justify-between h-full w-full transition-all duration-300 hover:border-[#14306B] hover:shadow-md">
      <div className="flex flex-col flex-1">
        <div className="flex items-center space-x-2.5 mb-3">
          <span className="w-9 h-9 rounded-xl bg-blue-50 text-[#14306B] flex items-center justify-center font-bold text-xs shrink-0">
            {pkg.hours}H
          </span>
          <div className="min-w-0">
            <h3 className="text-sm font-bold text-[#0A1931] whitespace-nowrap leading-tight">
              {pkg.title}
            </h3>
            <p className="text-[11px] text-gray-500 truncate mt-0.5">{pkg.subtitle}</p>
          </div>
        </div>

        <div className="my-3 pb-3 border-b border-gray-100">
          <div className="text-2xl sm:text-3xl font-extrabold text-[#0A1931] tracking-tight">
            ₹{pkg.price.toLocaleString("en-IN")}
          </div>
          <span className="text-[10px] text-gray-500 block mt-0.5">Base Swift / Hatchback in Dhanbad</span>
        </div>

        <ul className="space-y-2 mb-4 text-xs text-gray-600 flex-1">
          {pkg.features.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="text-[11px] leading-tight">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-[#14306B] hover:text-white text-[#14306B] font-bold py-2.5 px-3 rounded-xl text-xs transition active:scale-95"
        >
          <span>Book Package</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
