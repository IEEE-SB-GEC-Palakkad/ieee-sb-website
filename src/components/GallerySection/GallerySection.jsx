import React, { useState, useEffect } from "react";
import Heading from "../Common/Heading";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ChevronDown
} from "lucide-react";

// Clean, standalone array of gallery images for scalable architecture.
// Simply drop in new asset paths here to update the gallery.
const GALLERY_IMAGES = [
  {
    src: "/images/gallery/attappadi2.jpg",
    alt: "Attappadi Visit 2026 Group Photo",
    caption: "Extension Activity - Rural Solar Support and Maintenance Program"
  },
  {
    src: "/images/gallery/ex25.jpg",
    alt: "IEEE EXCELSIOR 2025 Group Photo",
    caption: "IEEE EXCELSIOR 2025"
  },
  {
    src: "/images/gallery/yess25.jpg",
    alt: "YESS 2025 Group Photo",
    caption: "YESS 2025"
  },
  {
    src: "/images/gallery/symposium25.jpg",
    alt: "IEEE Symposium 2025 Group Photo",
    caption: "IEEE Symposium 2025"
  },
  {
    src: "/images/gallery/yess24.jpg",
    alt: "YESS 2024 Group Photo",
    caption: "YESS 2024"
  },
  {
    src: "/images/gallery/attappadi1.jpg",
    alt: "Attappadi Visit 2025 Group Photo",
    caption: "Rural Solar Support and Maintenance Program"
  },
  {
    src: "/images/gallery/gallery_item_1.jpg",
    alt: "IEEE Workshop Group Photo",
    caption: "Hands-on engineering workshop session"
  },
  {
    src: "/images/gallery/gallery_item_2.jpg",
    alt: "Student Delegates at Excelsior",
    caption: "Inaugural address and delegate seating"
  },
  {
    src: "/images/gallery/gallery_item_3.jpg",
    alt: "Mentalism Show Highlights",
    caption: "Cultural and interactive highlight during Excelsior"
  },
  {
    src: "/images/gallery/gallery_item_4.jpg",
    alt: "Arduino Hands-on Lab Session",
    caption: "Delegates working on circuit boards and prototypes"
  },
  {
    src: "/images/gallery/gallery_item_5.jpg",
    alt: "React Web Development Lab",
    caption: "Intense coding and front-end development workshop"
  },
  {
    src: "/images/gallery/gallery_item_6.jpg",
    alt: "GEC Palakkad Executive Committee",
    caption: "Executive committee members coordination meeting"
  }

  // ==========================================
  // ADD 2026 GALLERY IMAGES HERE
  // ==========================================
  // {
  //   src: "/images/gallery/gallery_2026_1.jpg",
  //   alt: "2026 Event Description",
  //   caption: "Event caption details"
  // }
];

function GallerySection() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Close lightbox on Escape key, navigate with Left/Right arrows
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhotoIndex === null) return;
      if (e.key === "Escape") setActivePhotoIndex(null);
      if (e.key === "ArrowLeft")
        setActivePhotoIndex((prev) =>
          prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1
        );
      if (e.key === "ArrowRight")
        setActivePhotoIndex((prev) =>
          prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1
        );
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex]);

  const handlePrev = () => {
    setActivePhotoIndex((prev) =>
      prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActivePhotoIndex((prev) =>
      prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="gallery"
      className="w-full py-20 px-6 sm:px-12 md:px-20 bg-white"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16">
          <Heading text="MEDIA GALLERY" />
          <p className="text-slate-500 text-sm md:text-base font-light text-center max-w-2xl mt-2">
            Capturing the memorable moments of learning, collaboration, and
            student engagement from past workshops and events.
          </p>
        </div>

        {/* Expandable Wrapper */}
        <div
          className={`relative expandable-container gallery-container ${isExpanded ? "expanded" : "collapsed"}`}
        >
          {/* Scalable Photo Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gallery-grid ${isExpanded ? "expanded" : "collapsed"}`}
          >
            {GALLERY_IMAGES.map((img, index) => (
              <div
                key={index}
                onClick={() => setActivePhotoIndex(index)}
                className="relative aspect-[3/2] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/50 cursor-pointer shadow-sm group hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Image */}
                <img
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={img.src}
                  alt={img.alt}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='100%' height='100%' fill='%23f1f5f9'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%2394a3b8'>Gallery Photo</text></svg>";
                  }}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <Maximize2 className="absolute top-4 right-4 w-5 h-5 text-white/80" />
                  <h4 className="text-white font-semibold text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {img.alt}
                  </h4>
                  <p className="text-white/70 text-xs mt-1 font-light translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Fade Overlay */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />
          )}
        </div>

        {/* Expand Action Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-0.5"
          >
            <span>{isExpanded ? "Show Less" : "View All Media"}</span>
            <ChevronDown
              className={`w-4 h-4 text-slate-500 group-hover:text-slate-700 transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Click-to-Expand Lightbox Overlay */}
      {activePhotoIndex !== null && (
        <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center select-none animate-in fade-in duration-200">
          {/* Close button */}
          <button
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors duration-200"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 p-3 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image Display Frame */}
          <div className="max-w-5xl max-h-[80vh] px-4 flex flex-col items-center gap-4">
            <img
              src={GALLERY_IMAGES[activePhotoIndex].src}
              alt={GALLERY_IMAGES[activePhotoIndex].alt}
              className="max-w-full max-h-[72vh] object-contain rounded-lg shadow-2xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1000' height='700' viewBox='0 0 1000 700'><rect width='100%' height='100%' fill='%23f1f5f9'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%2394a3b8'>Gallery Photo</text></svg>";
              }}
            />
            {/* Metadata Text */}
            <div className="text-center text-white space-y-1">
              <h4 className="font-semibold text-base sm:text-lg">
                {GALLERY_IMAGES[activePhotoIndex].alt}
              </h4>
              <p className="text-white/60 text-xs sm:text-sm font-light">
                {GALLERY_IMAGES[activePhotoIndex].caption}
              </p>
            </div>
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 p-3 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
}

export default GallerySection;
