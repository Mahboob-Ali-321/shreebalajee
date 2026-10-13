import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { GALLERY_ITEMS, GalleryItem } from "../data/gallery";

export default function GallerySection() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Touch tracking for mobile swipe inside lightbox
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setActiveLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1;
    });
  }, []);

  const showNext = useCallback(() => {
    setActiveLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1;
    });
  }, []);

  // Keyboard navigation for Lightbox (Esc, Left Arrow, Right Arrow)
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        showPrev();
      } else if (e.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll while lightbox is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeLightboxIndex, closeLightbox, showPrev, showNext]);

  // Touch handlers for mobile swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 45; // pixels
    if (diff > minSwipeDistance) {
      showNext();
    } else if (diff < -minSwipeDistance) {
      showPrev();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const activeItem: GalleryItem | null =
    activeLightboxIndex !== null ? GALLERY_ITEMS[activeLightboxIndex] : null;

  return (
    <section className="py-12 px-4 bg-white border-y border-gray-200" id="ground-fleet-gallery">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          badge="Real Vehicle Photos"
          title="Our Ground Fleet in Dhanbad"
          subtitle="Actual photos of our cars. What you book is what arrives at your doorstep."
        />

        {/* 3 columns on desktop, 2 on mobile - All 17 cards visible */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-slate-50 group cursor-pointer hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col focus:outline-none focus:ring-2 focus:ring-[#14306B]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              aria-label={`View photo: ${item.caption}`}
            >
              {/* 4:3 Image Area */}
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-200">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: item.objectPosition }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="p-2 bg-white/90 rounded-full text-[#14306B] shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Caption Below Card */}
              <div className="p-2.5 sm:p-3 text-[11px] sm:text-xs font-semibold text-gray-800 bg-white border-t border-gray-100 flex-1 flex items-center">
                <span className="line-clamp-2 leading-snug">{item.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-between p-3 sm:p-6 select-none animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Photo Lightbox"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Lightbox Top Header */}
          <div
            className="w-full max-w-5xl flex items-center justify-between text-white py-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs sm:text-sm font-medium text-slate-300">
              <span className="text-[#FFD147] font-bold">
                {(activeLightboxIndex ?? 0) + 1}
              </span>{" "}
              / {GALLERY_ITEMS.length}
            </div>

            <button
              onClick={closeLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition focus:outline-none focus:ring-2 focus:ring-[#FFD147]"
              aria-label="Close Lightbox"
              title="Close (Esc)"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Main Viewport */}
          <div
            className="relative flex-1 w-full max-w-5xl flex items-center justify-center my-auto min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Arrow */}
            <button
              onClick={showPrev}
              className="absolute left-1 sm:left-3 z-20 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#FFD147]"
              aria-label="Previous photo"
              title="Previous (Left arrow)"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Uncropped Full-size Photo (object-contain) */}
            <div className="w-full h-full flex items-center justify-center p-2 sm:p-4">
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                decoding="async"
                className="max-w-full max-h-[75vh] md:max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl transition-all"
              />
            </div>

            {/* Next Arrow */}
            <button
              onClick={showNext}
              className="absolute right-1 sm:right-3 z-20 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#FFD147]"
              aria-label="Next photo"
              title="Next (Right arrow)"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* Lightbox Caption & Hint Bar */}
          <div
            className="w-full max-w-3xl text-center py-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white text-xs sm:text-sm font-semibold tracking-wide">
              {activeItem.caption}
            </p>
            <p className="text-[10px] text-slate-400 mt-1 hidden sm:block">
              Use arrow keys or swipe to navigate • Esc to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
