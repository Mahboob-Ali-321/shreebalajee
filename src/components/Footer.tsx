import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, Clock, Star, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";

export default function Footer() {
  return (
    <footer className="bg-[#0A1931] text-gray-300 pt-12 pb-24 md:pb-12 border-t border-blue-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10 text-xs sm:text-sm">
          {/* Column 1: Brand & Hindi Identity */}
          <div className="space-y-3">
            <Link
              to="/"
              className="inline-block bg-white px-3 py-2 rounded-xl shadow-md hover:opacity-95 transition"
              title="Shree Balajee Travels"
            >
              <img
                src="/images/logo.png"
                alt="Shree Balajee Travels logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-[#FFD147] font-semibold text-xs">
              श्री बालाजी ट्रेवल्स • धनबाद, झारखंड
            </p>
            <p className="text-gray-400 text-xs leading-relaxed">
              Dhanbad’s most trusted car rental, outstation taxi, and tour operator service. 24/7 on-time doorstep pickup, sanitized AC cabs, and transparent per-km billing.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
              <span className="font-bold">4.8 / 5.0</span>
              <span className="text-gray-400">({BUSINESS_INFO.reviewCount}+ Google Reviews)</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs border-b border-blue-900 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-gray-300 text-xs">
              <li>
                <Link to="/" className="hover:text-[#FFD147] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-[#FFD147] transition">
                  Maintained Fleet (Innova, Ertiga, Scorpio, Swift)
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-[#FFD147] transition">
                  Local City Hourly Packages (2h to 10h)
                </Link>
              </li>
              <li>
                <Link to="/routes" className="hover:text-[#FFD147] transition">
                  One-Way Drops (Ranchi, Kolkata, Deoghar, Patna)
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-[#FFD147] transition">
                  Traveler Reviews & Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FFD147] transition">
                  Office Location & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Locations */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs border-b border-blue-900 pb-2">
              Dhanbad Coverage
            </h4>
            <ul className="space-y-1.5 text-gray-400 text-xs">
              <li>• Bartand Bus Stand & Railway Station</li>
              <li>• Bank More Commercial Hub</li>
              <li>• Hirapur & Park Market</li>
              <li>• Saraidhela & Big Bazaar Area</li>
              <li>• IIT (ISM) Dhanbad Campus</li>
              <li>• Govindpur, Katras & Jharia Coal Belt</li>
              <li>• Maithon Dam & Topchanchi Lake Tours</li>
            </ul>
          </div>

          {/* Column 4: Contact & Hotline */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs border-b border-blue-900 pb-2">
              Registered Office
            </h4>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFD147] shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/cid=13490718521534785700"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFD147] transition hover:underline"
                  title="View Shree Balajee Travels on Google Maps"
                >
                  Lane No 4, Jai Prakash Nagar, Bartand, Dhanbad, Jharkhand 826007
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FFD147] shrink-0" />
                <span>24 Hours / 7 Days a Week</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Drivers • No Cancellation Guarantee</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={BUSINESS_INFO.callUrl}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-3 rounded-lg text-xs transition border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFD147]" />
                Call Hotline: 93102 41446
              </a>
              <a
                href={BUSINESS_INFO.defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-2 px-3 rounded-lg text-xs transition"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp Booking Desk
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <p>© 2026 Shree Balajee Travels. All rights reserved.</p>
          <div className="flex items-center space-x-4 text-[11px] text-gray-400">
            <Link to="/fleet" className="hover:text-[#FFD147]">Fleet</Link>
            <span>•</span>
            <Link to="/pricing" className="hover:text-[#FFD147]">Local Hourly</Link>
            <span>•</span>
            <Link to="/routes" className="hover:text-[#FFD147]">One-Way Drop</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#FFD147]">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
