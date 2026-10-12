import { useState } from "react";
import { Star, MessageCircle, HeartHandshake } from "lucide-react";
import ReviewCard from "../components/ReviewCard";
import SectionTitle from "../components/SectionTitle";
import { REVIEWS, BUSINESS_INFO } from "../data/business";

export default function Reviews() {
  const [filter, setFilter] = useState<string>("All");

  const filteredReviews = REVIEWS.filter((r) => {
    if (filter === "All") return true;
    if (filter === "Airport") return r.badge?.toLowerCase().includes("airport");
    if (filter === "Pilgrimage") return r.badge?.toLowerCase().includes("pilgrimage");
    if (filter === "Railway / Local") return r.badge?.toLowerCase().includes("railway") || r.badge?.toLowerCase().includes("local");
    return true;
  });

  return (
    <div className="py-8 sm:py-12 px-4 max-w-6xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-[11px] font-bold text-[#14306B] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
          Customer Testimonials
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#0A1931] mt-3">
          What Dhanbad Travelers Say
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2">
          Read genuine reviews from families, corporate travelers, and pilgrims who ride with Shree Balajee Travels.
        </p>
      </div>

      {/* Big Rating Summary Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-2xl bg-amber-500/10 flex items-center justify-center text-4xl font-extrabold text-amber-500 shrink-0">
            ★
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#14306B] font-heading">
                4.8
              </span>
              <div className="flex text-amber-400 text-xl">★★★★★</div>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-gray-700 mt-0.5">
              Overall Rating based on {BUSINESS_INFO.reviewCount}+ Google Reviews
            </p>
            <span className="text-[11px] text-emerald-700 font-medium">
              ✓ 100% Verified Authentic Reviews
            </span>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 text-center w-full md:w-auto">
          <div>
            <div className="text-lg sm:text-2xl font-black text-[#14306B]">8,500+</div>
            <span className="text-[10px] sm:text-xs text-gray-500">Trips Done</span>
          </div>
          <div>
            <div className="text-lg sm:text-2xl font-black text-[#14306B]">10+</div>
            <span className="text-[10px] sm:text-xs text-gray-500">Years in Bartand</span>
          </div>
          <div>
            <div className="text-lg sm:text-2xl font-black text-emerald-600">0%</div>
            <span className="text-[10px] sm:text-xs text-gray-500">Cancellation</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {["All", "Airport", "Pilgrimage", "Railway / Local"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm ${
              filter === cat
                ? "bg-[#14306B] text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {cat} Reviews
          </button>
        ))}
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filteredReviews.map((review) => (
          <div key={review.id} className="flex">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>

      {/* Experience Assurance Box */}
      <div className="bg-slate-50 border border-gray-200 rounded-3xl p-6 sm:p-8 text-center max-w-2xl mx-auto space-y-4">
        <HeartHandshake className="w-10 h-10 text-[#14306B] mx-auto" />
        <h2 className="text-lg sm:text-xl font-bold text-[#0A1931]">
          Traveled with Us Recently?
        </h2>
        <p className="text-xs text-gray-600 leading-relaxed">
          Your feedback helps us continuously improve our service quality for Dhanbad. We appreciate your support and recommendations!
        </p>
        <a
          href="https://wa.me/919310241446?text=Hi%20Shree%20Balajee%20Travels,%20I%20would%20like%20to%20share%20my%20trip%20feedback."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#14306B] hover:bg-[#0A1931] text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition shadow"
        >
          <MessageCircle className="w-4 h-4 text-[#FFD147]" />
          <span>Send Feedback on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
