import { useState } from "react";
import {
  User,
  Phone,
  MapPin,
  Calendar,
  Car,
  Check,
  MessageCircle,
} from "lucide-react";

const getTodayStr = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getTomorrowStr = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const DROP_SUGGESTIONS = [
  "Durgapur",
  "Ranchi",
  "Kolkata",
  "Patna",
  "Jamshedpur",
  "Deoghar",
  "Bokaro",
  "Gaya",
  "Asansol",
  "Ranchi Airport",
];

const CAR_OPTIONS = [
  "Swift (Hatchback, 5 Seater)",
  "Any / Best Available",
  "Ertiga (SUV, 6 Seater)",
  "Scorpio (SUV, 7-9 Seater)",
  "Innova Crysta (MPV, 6 Seater)",
  "Honda WR-V (Compact, 5 Seater)",
];

interface BookingFormProps {
  compact?: boolean;
  className?: string;
}

export default function BookingForm({ className = "" }: BookingFormProps) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [pickup, setPickup] = useState("Dhanbad");
  const [drop, setDrop] = useState("");
  const [travelDate, setTravelDate] = useState(getTomorrowStr());
  const [carType, setCarType] = useState("Swift (Hatchback, 5 Seater)");

  const [errors, setErrors] = useState<{
    name?: string;
    mobile?: string;
    drop?: string;
    travelDate?: string;
  }>({});

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numeric = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobile(numeric);
    if (errors.mobile) {
      setErrors((prev) => ({ ...prev, mobile: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: {
      name?: string;
      mobile?: string;
      drop?: string;
      travelDate?: string;
    } = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your full name";
    }

    if (!mobile.trim() || mobile.trim().length !== 10) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    if (!drop.trim()) {
      newErrors.drop = "Please enter drop destination";
    }

    if (!travelDate) {
      newErrors.travelDate = "Please select travel date";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const message = [
      "Hello Shree Balajee Travels, I want to book a cab.",
      `Name: ${name.trim()}`,
      `Mobile: +91 ${mobile.trim()}`,
      `Pickup: ${pickup.trim() || "Dhanbad"}`,
      `Drop: ${drop.trim()}`,
      `Date: ${travelDate}`,
      `Car: ${carType}`,
    ].join("\n");

    const waUrl = `https://wa.me/919311112923?text=${encodeURIComponent(
      message
    )}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div
      className={`bg-white text-[#0A1931] rounded-2xl p-5 sm:p-7 md:p-8 shadow-xl shadow-slate-900/10 border border-gray-100 border-t-4 border-t-[#FFD147] transition-all duration-200 ${className}`}
      data-purpose="quick-booking-enquiry-card"
    >
      {/* CARD HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-gray-100">
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-1.5 h-8 bg-[#14306B] rounded-full shrink-0 mt-0.5 sm:mt-0" />
          <div>
            <h2 className="text-lg sm:text-xl font-bold font-heading text-[#0A1931] tracking-tight">
              Quick Booking Enquiry
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Direct quote in 2 minutes on WhatsApp with guaranteed availability.
            </p>
          </div>
        </div>

        <div className="self-start sm:self-center shrink-0">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full shadow-2xs">
            <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
            Fast response under 2 mins
          </span>
        </div>
      </div>

      {/* FORM FIELDS: 3 columns on desktop, 1 column on mobile */}
      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {/* 1. Full Name */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
              <span>
                Full Name <span className="text-red-500">*</span>
              </span>
              <span className="text-[11px] text-gray-400 font-normal lowercase tracking-normal">
                (नाम)
              </span>
            </div>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) {
                    setErrors((prev) => ({ ...prev, name: undefined }));
                  }
                }}
                placeholder="e.g. Ramesh Sharma"
                className={`w-full h-[48px] min-h-[48px] max-h-[48px] rounded-[12px] bg-slate-50 border pl-10 pr-3.5 text-[16px] text-slate-800 placeholder:text-gray-400 font-medium transition focus:bg-white focus:outline-none ${
                  errors.name
                    ? "border-red-500 ring-2 ring-red-200"
                    : "border-gray-200 focus:border-[#14306B] focus:ring-2 focus:ring-[#14306B]/20"
                }`}
              />
            </div>
            {errors.name && (
              <p className="text-xs text-red-600 mt-1 font-medium">
                {errors.name}
              </p>
            )}
          </div>

          {/* 2. Mobile Number */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
              <span>
                Mobile Number <span className="text-red-500">*</span>
              </span>
              <span className="text-[11px] text-gray-400 font-normal tracking-normal">
                (10 Digits)
              </span>
            </div>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none" />
              <span className="absolute left-[36px] top-1/2 -translate-y-1/2 text-slate-700 font-bold text-sm pointer-events-none select-none">
                +91
              </span>
              <input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                value={mobile}
                onChange={handleMobileChange}
                placeholder="10-digit number (e.g. 9876543210)"
                className={`w-full h-[48px] min-h-[48px] max-h-[48px] rounded-[12px] bg-slate-50 border pl-[68px] pr-3.5 text-[16px] text-slate-800 placeholder:text-gray-400 font-medium transition focus:bg-white focus:outline-none ${
                  errors.mobile
                    ? "border-red-500 ring-2 ring-red-200"
                    : "border-gray-200 focus:border-[#14306B] focus:ring-2 focus:ring-[#14306B]/20"
                }`}
              />
            </div>
            {errors.mobile && (
              <p className="text-xs text-red-600 mt-1 font-medium">
                {errors.mobile}
              </p>
            )}
          </div>

          {/* 3. Pickup Location */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
              <span>Pickup Location</span>
              <span className="text-[11px] text-gray-400 font-normal lowercase tracking-normal">
                (पिकअप स्थान)
              </span>
            </div>
            <div className="relative">
              <MapPin className="w-4 h-4 text-[#14306B] absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="e.g. Dhanbad / Bartand"
                className="w-full h-[48px] min-h-[48px] max-h-[48px] rounded-[12px] bg-slate-50 border border-gray-200 pl-10 pr-3.5 text-[16px] text-slate-800 font-medium transition focus:bg-white focus:border-[#14306B] focus:ring-2 focus:ring-[#14306B]/20 focus:outline-none"
              />
            </div>
          </div>

          {/* 4. Drop Destination */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
              <span>
                Drop Destination <span className="text-red-500">*</span>
              </span>
              <span className="text-[11px] text-gray-400 font-normal lowercase tracking-normal">
                (गंतव्य)
              </span>
            </div>
            <div className="relative">
              <MapPin className="w-4 h-4 text-amber-600 absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                list="drop-destinations-list"
                value={drop}
                onChange={(e) => {
                  setDrop(e.target.value);
                  if (errors.drop) {
                    setErrors((prev) => ({ ...prev, drop: undefined }));
                  }
                }}
                placeholder="e.g. Ranchi / Kolkata / Patna / Durgapur"
                className={`w-full h-[48px] min-h-[48px] max-h-[48px] rounded-[12px] bg-slate-50 border pl-10 pr-3.5 text-[16px] text-slate-800 placeholder:text-gray-400 font-medium transition focus:bg-white focus:outline-none ${
                  errors.drop
                    ? "border-red-500 ring-2 ring-red-200"
                    : "border-gray-200 focus:border-[#14306B] focus:ring-2 focus:ring-[#14306B]/20"
                }`}
              />
              <datalist id="drop-destinations-list">
                {DROP_SUGGESTIONS.map((city) => (
                  <option key={city} value={city} />
                ))}
              </datalist>
            </div>
            {errors.drop && (
              <p className="text-xs text-red-600 mt-1 font-medium">
                {errors.drop}
              </p>
            )}
          </div>

          {/* 5. Travel Date */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
              <span>
                Travel Date <span className="text-red-500">*</span>
              </span>
              <span className="text-[11px] text-gray-400 font-normal lowercase tracking-normal">
                (यात्रा तिथि)
              </span>
            </div>
            <div className="relative">
              <Calendar className="w-4 h-4 text-slate-400 absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="date"
                min={getTodayStr()}
                value={travelDate}
                onChange={(e) => {
                  setTravelDate(e.target.value);
                  if (errors.travelDate) {
                    setErrors((prev) => ({
                      ...prev,
                      travelDate: undefined,
                    }));
                  }
                }}
                className={`w-full h-[48px] min-h-[48px] max-h-[48px] rounded-[12px] bg-slate-50 border pl-10 pr-6 text-[16px] text-slate-800 font-medium transition cursor-pointer focus:bg-white focus:outline-none [&::-webkit-calendar-picker-indicator]:opacity-80 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:w-[18px] [&::-webkit-calendar-picker-indicator]:h-[18px] ${
                  errors.travelDate
                    ? "border-red-500 ring-2 ring-red-200"
                    : "border-gray-200 focus:border-[#14306B] focus:ring-2 focus:ring-[#14306B]/20"
                }`}
              />
            </div>
            {errors.travelDate && (
              <p className="text-xs text-red-600 mt-1 font-medium">
                {errors.travelDate}
              </p>
            )}
          </div>

          {/* 6. Car Type */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
              <span>Car Type</span>
              <span className="text-[11px] text-gray-400 font-normal lowercase tracking-normal">
                (वाहन का प्रकार)
              </span>
            </div>
            <div className="relative">
              <Car className="w-4 h-4 text-slate-400 absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
                className="w-full h-[48px] min-h-[48px] max-h-[48px] rounded-[12px] bg-slate-50 border border-gray-200 pl-10 pr-8 text-[16px] text-slate-800 font-medium transition focus:bg-white focus:border-[#14306B] focus:ring-2 focus:ring-[#14306B]/20 focus:outline-none cursor-pointer"
              >
                {CAR_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* SUBMIT BUTTON & DISCLAIMER */}
        <div className="pt-2 text-center">
          <button
            type="submit"
            className="h-[52px] min-h-[52px] px-8 bg-[#25D366] hover:bg-[#1EBE5D] active:scale-[0.99] text-white font-bold rounded-xl text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto mx-auto cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white text-white" />
            <span>Send Enquiry on WhatsApp</span>
          </button>

          <p className="text-center text-xs text-gray-500 mt-2.5 max-w-lg mx-auto">
            Exact fare and availability will be confirmed on WhatsApp. Toll and
            parking charged separately.
          </p>
        </div>
      </form>
    </div>
  );
}
