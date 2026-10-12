import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../data/business";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-4 text-left font-bold text-xs sm:text-sm text-[#0A1931] hover:text-[#14306B] transition focus:outline-none"
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-4 h-4 text-[#14306B] transition-transform duration-200 shrink-0 ml-2 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
