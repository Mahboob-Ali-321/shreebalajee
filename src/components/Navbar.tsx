import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, MessageCircle, Menu, X, Star } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Fleet", path: "/fleet" },
  { name: "Local Packages", path: "/pricing" },
  { name: "One-Way Drops", path: "/routes" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#0A1931] text-white text-xs py-1.5 px-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[#FFD147] font-semibold text-[11px] sm:text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              24x7 Cab Service in Dhanbad
            </span>
            <span className="hidden md:inline-block text-slate-400">|</span>
            <span className="hidden md:inline-block text-slate-300 text-[11px]">
              📍 Bartand, Dhanbad 826007
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto text-[11px]">
            <div className="hidden sm:flex items-center gap-1 text-[#FFD147] font-semibold">
              <Star className="w-3.5 h-3.5 fill-[#FFD147]" />
              <span>4.8 ★</span>
              <span className="text-slate-300 font-normal">({BUSINESS_INFO.reviewCount} Reviews)</span>
            </div>
            <a
              href={BUSINESS_INFO.callUrl}
              className="text-white hover:text-[#FFD147] font-bold tracking-wide transition flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#FFD147]" />
              <span>93102 41446</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-[#14306B] text-white shadow-md border-b border-blue-900/40">
        <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link
  to="/"
  onClick={closeMenu}
  className="flex shrink-0 items-center gap-2.5"
  title="Shree Balajee Travels Dhanbad"
>
  <img
    src="/logo-emblem.png"
    alt="Shree Balajee Travels logo"
    width={400}
    height={400}
    className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 object-contain"
  />
  <div className="leading-tight">
    <div className="text-[15px] sm:text-lg font-bold tracking-tight text-white font-heading">
      Shree Balajee <span className="text-[#FFD147]">Travels</span>
    </div>
    <div className="text-[10px] sm:text-[11px] font-medium text-[#FFD147]">
      श्री बालाजी ट्रेवल्स • धनबाद
    </div>
  </div>
</Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-[13px] font-medium">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors whitespace-nowrap py-1 relative ${
                    isActive
                      ? "text-[#FFD147] font-bold"
                      : "text-slate-200 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFD147] rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-2">
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>
              24x7 Open
            </span>

            <a
              href={BUSINESS_INFO.callUrl}
              className="hidden md:inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-3 py-2 rounded-lg text-xs transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFD147]" />
              <span>Call Now</span>
            </a>

            <a
              href={BUSINESS_INFO.defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold px-3 py-2 rounded-lg text-xs shadow-sm transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FFD147]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-in Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A1931] border-t border-white/10 px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 pb-2 mb-2 border-b border-white/10">
              <a
                href={BUSINESS_INFO.callUrl}
                className="flex items-center justify-center gap-1.5 bg-white/10 py-2.5 rounded-lg text-xs font-bold text-white"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFD147]" />
                Call Driver
              </a>
              <a
                href={BUSINESS_INFO.defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#25D366] py-2.5 rounded-lg text-xs font-bold text-white"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>

            <nav className="space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                      isActive
                        ? "bg-[#14306B] text-[#FFD147] font-bold"
                        : "text-slate-200 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 space-y-1">
              <div>📍 Lane No 4, Jai Prakash Nagar, Bartand, Dhanbad</div>
              <div>⭐ 4.8 Rating from 152+ Google Reviews</div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
