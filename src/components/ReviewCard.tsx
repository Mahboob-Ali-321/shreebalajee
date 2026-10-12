import { Star } from "lucide-react";
import { ReviewItem } from "../data/business";

interface ReviewCardProps {
  review: ReviewItem;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-sm flex flex-col justify-between h-full w-full hover:shadow-md transition">
      <div className="flex flex-col flex-1">
        {/* Header: Avatar, Name, Rating */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-full bg-blue-100 text-[#14306B] font-bold text-xs flex items-center justify-center shrink-0">
              {review.initials}
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#0A1931] leading-tight">
                {review.name}
              </h4>
              <p className="text-[10px] text-gray-400">{review.timeAgo}</p>
            </div>
          </div>
          <div className="flex text-amber-400">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
            ))}
          </div>
        </div>

        {/* Review body */}
        <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed italic flex-1">
          "{review.quote}"
        </p>
      </div>

      {/* Footer: pinned to bottom */}
      {review.badge && (
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
            ✓ {review.badge}
          </span>
          <span className="text-[10px] text-gray-400">Google Review</span>
        </div>
      )}
    </div>
  );
}
