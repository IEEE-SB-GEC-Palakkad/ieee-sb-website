import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

function Reise() {
  const [currentSlide, setCurrentSlide] = useState(0);
 
  // Sample images for carousel - you can replace with your actual images
  const carouselImages = [
    {
      src: "/images/1000158877.jpg",
      alt: "Students participating in a hands-on science workshop, working together with lab equipment in a bright classroom. The atmosphere is energetic and focused, with facilitators guiding the activities"
    },
    {
      src: "/images/1000159089.jpg",
      alt: "Students and instructors collaborating during an engineering session, surrounded by educational posters and tools. The mood is enthusiastic and supportive, highlighting teamwork and learning"
    },
    {
      src: "/images/IMG-20250807-WA0010.jpg",
      alt: "Students and instructors collaborating during an engineering session, surrounded by educational posters and tools. The mood is enthusiastic and supportive, highlighting teamwork and learning"
    },
    {
      src: "/images/IMG-20250807-WA0007.jpg",
      alt: "Students and instructors collaborating during an engineering session, surrounded by educational posters and tools. The mood is enthusiastic and supportive, highlighting teamwork and learning"
    },
    {
      src: "/images/IMG-20250807-WA0047.jpg",
      alt: "Students and instructors collaborating during an engineering session, surrounded by educational posters and tools. The mood is enthusiastic and supportive, highlighting teamwork and learning"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const openPDF = () => {
    window.open("/pdf/REISE_Brochure.pdf", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <img
            className="mx-auto h-20 w-auto mb-8"
            src="/images/reiselogo.png"
            alt="REISE event logo"
          />
         
          {/* Main Header Layout */}
          <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
            {/* Organized By */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
              <h2 className="text-xl font-bold text-blue-700 mb-2">Organized by</h2>
              <h3 className="text-lg font-semibold text-blue-800">IEEE SB GEC Palakkad</h3>
            </div>
           
            {/* Main Title */}
            <div className="text-center">
              <h1 className="text-5xl font-bold text-blue-800 mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                REISE 2025
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
            </div>
           
            {/* In Association With */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-r-4 border-blue-600">
              <h2 className="text-xl font-bold text-blue-700 mb-2">In Association with</h2>
              <h3 className="text-lg font-semibold text-blue-800">IEEE Malabar Subsection</h3>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-6 sm:space-y-8">
          {/* Executive Summary */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border border-blue-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 sm:mb-6 border-b-2 border-blue-200 pb-3">
              EXECUTIVE SUMMARY
            </h2>
            <p className="text-blue-700 leading-relaxed text-base sm:text-lg mb-4">
              "REISE: Roadmap to Success" is organized by IEEE SB GEC Palakkad in association with the
              IEEE Malabar Subsection as part of the Silver Jubilee Celebrations of GEC Palakkad. This event
              aims to inspire and guide school students toward building a strong foundation for their future
              through experiential learning and interactive sessions.
            </p>
            <p className="text-blue-700 leading-relaxed text-base sm:text-lg">
              The proposed workshop will be conducted over two days — August 7 and 8, 2025 — in the various
              department laboratories of GEC Palakkad. We are expecting around 30 students from Grades 8
              and 9 from nearby schools, coordinated through the Block Resource Center (BRC),
              Kadampuram, Kazhipuram, Palakkad.
            </p>
          </div>

          {/* Objectives */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border border-blue-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 sm:mb-6 border-b-2 border-blue-200 pb-3">
              OBJECTIVES
            </h2>
            <p className="text-blue-700 leading-relaxed text-base sm:text-lg mb-6">
              The core aim of this program is to introduce school students to the fundamentals of science,
              technology, and career planning through engaging hands-on sessions across different engineering
              domains. Each workshop is curated to bridge the gap between school curriculum and real-world
              applications, thereby nurturing their curiosity and interest in STEM careers.
            </p>
           
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {[
                { dept: "CE", desc: "Introduction to mechanical properties, test of materials" },
                { dept: "EEE", desc: "Introduction to basics of digital electronics" },
                { dept: "IT", desc: "Introduction to chatbot making" },
                { dept: "CSE", desc: "Introduction to cybersecurity" },
                { dept: "ME", desc: "Study of mechanical tools, components and their applications" },
                { dept: "ECE", desc: "Familiarization of DSO and logic gates" }
              ].map((item, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <span className="font-bold text-blue-800 text-base sm:text-lg">{item.dept}:</span>
                  <span className="text-blue-700 ml-2 text-sm sm:text-base">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Carousel Section */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border border-blue-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 sm:mb-8 text-center border-b-2 border-blue-200 pb-3">
              OUR SESSIONS
            </h2>
           
            <div className="relative max-w-4xl mx-auto">
              {/* Carousel Container */}
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {carouselImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                  ))}
                </div>
               
                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-blue-800" />
                </button>
               
                <button
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-blue-800" />
                </button>
              </div>
             
              {/* Dots Indicator */}
              <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                      currentSlide === index
                        ? 'bg-blue-600 scale-125'
                        : 'bg-blue-300 hover:bg-blue-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center py-6 sm:py-8">
            <button
              onClick={openPDF}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2 text-base sm:text-lg"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Download Brochure</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reise;