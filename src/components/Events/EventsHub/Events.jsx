import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Compass } from "lucide-react";
import Heading from "../../Common/Heading";

// Clean, standalone array of event data for easy updating
const EVENTS_DATA = [
  {
    name: "IEEE Symposium",
    category: "Technical Symposium",
    details:
      "The Symposium on Electrical Drives, Robotics, Control, and Computing is a flagship event of the Department of Electrical Engineering, GEC Palakkad, organized in association with IEEE Student Branch. It provides a premium platform for students to present projects and innovative research papers in front of industrial experts.",
    highlights: [
      "Electrical Drives & Robotics",
      "Control & Computing Tracks",
      "Technical Paper Presentations",
      "Co-sponsored by Malabar Subsection"
    ],
    img: "/images/symposium.jpg"
  },
  {
    name: "Excelsior",
    category: "Flagship Technical Festival",
    details:
      "Excelsior, IEEE SB GEC Palakkad's premier technical festival, is a vibrant gathering held at Government Engineering College Palakkad. Designed as an immersive learning experience, it brings together tech enthusiasts for intensive training, hands-on workshops, and expert talks.",
    highlights: [
      "React JS Front-End Development Workshop",
      "Arduino Hardware & Prototyping Lab",
      "AutoCAD Professional Drafting Session",
      "Insights on Web3 & Placements"
    ],
    img: "/images/1.png"
  },
  {
    name: "Matrix Hackathon",
    category: "24-Hour Sustainability Hackathon",
    details:
      "'MATRIX' hackathon, organized under the Collaborative Research and Learning Platform (CORaL) in association with IEEE CS SBC GEC Palakkad, challenged student teams to ideate, prototype, and present scalable solutions targeting Sustainability.",
    highlights: [
      "24-Hour Intensive Coding Sprint",
      "Focus on Environmental Sustainability",
      "Functional Prototype Development",
      "Mentorship from Industrial experts"
    ],
    img: "/images/event_2.png"
  },
  {
    name: "Upscale",
    category: "Entrepreneurship Boot Camp",
    details:
      "Upscale is a week-long flagship boot camp focusing on introducing students to modern startup ecosystems, business modeling, venture capital pitch sessions, and product prototyping. It aims to mold young engineers into confident founders.",
    highlights: [
      "Week-long Entrepreneurial Journey",
      "Lean Startup Framework & Ideation",
      "Pitch Decks & Venture Capital Basics",
      "Interactive Founders Roundtable"
    ],
    img: "/images/upscale.png"
  },
  {
    name: "Reise",
    category: "STEM Outreach Program",
    details:
      "Reise is a specialized two-day STEM program crafted for high school students in the Palakkad district. It opens the doors of engineering laboratories and technical hubs to young minds, inspiring future innovators.",
    highlights: [
      "High School Science & STEM Outreach",
      "Hands-on Chemistry & Electrical Labs",
      "Introduction to Creative Coding",
      "Interactive Team Engineering Contests"
    ],
    img: "/images/symposium.jpg" // Fallback to symposium or reiselogo.png
  }
];

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? EVENTS_DATA.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === EVENTS_DATA.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-play timer: advances events every 6 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 6000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const activeEvent = EVENTS_DATA[currentIndex];

  return (
    <section
      id="events"
      className="w-full py-20 px-6 sm:px-12 md:px-20 bg-white"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <Heading text="EVENTS HUB" />
          <p className="text-slate-500 text-sm md:text-base font-light text-center max-w-2xl mt-2">
            Looking back at our major flagship initiatives, technical workshops,
            and hackathons that have empowered student engineers.
          </p>
        </div>

        {/* Carousel Container with Dynamic Height on Mobile, Fixed on Desktop */}
        <div className="relative border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50 shadow-sm min-h-[760px] sm:min-h-[740px] lg:h-[580px] flex flex-col lg:flex-row">
          {/* Left Split: Event Details */}
          <div className="w-full lg:max-w-[55%] h-auto lg:h-full p-6 sm:p-8 lg:p-12 flex flex-col justify-between z-10 bg-white">
            <div className="space-y-4 sm:space-y-6">
              {/* Category tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                {activeEvent.category}
              </div>

              {/* Event Name */}
              <h3 className="text-slate-900 font-monument font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-none uppercase">
                {activeEvent.name}
              </h3>

              {/* Description */}
              <p className="text-slate-600 font-light text-sm sm:text-base md:text-lg leading-relaxed">
                {activeEvent.details}
              </p>

              {/* Highlights Bullet List */}
              <div className="pt-1">
                <h4 className="text-slate-800 font-semibold text-xs tracking-wider uppercase mb-2">
                  Highlights & Outcomes
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                  {activeEvent.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-slate-700 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0"></span>
                      <span className="text-slate-700 font-semibold">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Navigation and Slide Indicator */}
            <div className="flex items-center justify-between mt-8 lg:mt-auto pt-4 sm:pt-6 border-t border-slate-100">
              {/* Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full border border-slate-200 hover:border-slate-800 text-slate-800 hover:text-slate-900 bg-white transition-all duration-200 shadow-sm flex items-center justify-center"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-800 stroke-[2.5]" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full border border-slate-200 hover:border-slate-800 text-slate-800 hover:text-slate-900 bg-white transition-all duration-200 shadow-sm flex items-center justify-center"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5 text-slate-800 stroke-[2.5]" />
                </button>
              </div>

              {/* Fractional Pagination */}
              <div className="text-slate-400 font-medium text-sm tracking-widest">
                <span className="text-slate-900 font-bold">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>
                <span> / </span>
                <span>{String(EVENTS_DATA.length).padStart(2, "0")}</span>
              </div>
            </div>
          </div>

          {/* Right Split: Event Image Frame with Full Visibility Containment */}
          <div className="w-full lg:w-[45%] h-[260px] sm:h-[280px] lg:h-full shrink-0 relative overflow-hidden bg-slate-100 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-200/80 p-6 sm:p-8">
            <img
              src={activeEvent.img}
              alt={`${activeEvent.name} photo`}
              className="max-w-full max-h-full object-contain transition-transform duration-700 hover:scale-102"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='100%' height='100%' fill='%23f1f5f9'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%2394a3b8'>IEEE Event Poster</text></svg>";
              }}
            />
            {/* Visual gradient to blend image shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/5 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
