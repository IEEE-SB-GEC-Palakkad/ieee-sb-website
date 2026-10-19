import React, { useState } from "react";
import Heading from "../Common/Heading";
import { Award, ChevronDown } from "lucide-react";

// Standalone, easily-scalable array of achievements
const ACHIEVEMENTS_DATA = [
  {
    name: "Devika V R",
    details: [
      "Outstanding SB Chairperson Special Mention 2026 (Malabar Sub Section)",
      "Outstanding Women in Engineering Volunteer 2025 (Malabar Sub Section)"
    ],
    img: "/images/achievements/devikavr.png"
  },
  {
    name: "Adhil Jahan M B",
    details: [
      "Outstanding Student Volunteer Special Mention 2026 - (Malabar Sub Section)",
      "IEEE ComSoc Kerala Chapter SLT 2025 (Designer)"
    ],
    img: "/images/achievements/adhil.png"
  },
  {
    name: "Niranjana M V",
    details: [
      "IEEE SSCS Kerala Chapter SLT 2025 (Electronics & Communications Co-ordinator)"
    ],
    img: "/images/achievements/niranjana.png"
  },
  {
    name: "Ringloo",
    details: ["IEEE WIE Kerala Chapter SLT 2025 (Malabar HSR)"],
    img: "/images/achievements/ringloo.png"
  },
  {
    name: "Anu Raj",
    details: ["IEEE CS Kerala Chapter SLT 2025 (Malabar HSR)"],
    img: "/images/achievements/anuraj.png"
  },
  {
    name: "Meghna C Suresh",
    details: [
      "Outstanding Student Volunteer Fresher - Malabar Sub Section",
      "IEEE India Council SCT 2024",
      "IEEE EdSoc Intern",
      "IEEE Xtreme Ambassador"
    ],
    img: "/images/achievements/meghna.png"
  },
  {
    name: "Greeshma",
    details: [
      "IEEE IA/IE/PELS Jt. Kerala Chapter SLT 2024 (Designer)",
      "IEEE COMPUTE Graphics Designer"
    ],
    img: "/images/achievements/greeshma.png"
  },
  {
    name: "Varsha Prasad",
    details: [
      "IEEE Kerala Section Intern 2024",
      "IEEE SSCS Kerala Chapter Content Lead 2024"
    ],
    img: "/images/achievements/varsha.png"
  },
  {
    name: "Devika P Dinesh",
    details: ["IEEE COMPUTE Graphic Designer"],
    img: "/images/achievements/devikapdinesh.png"
  }
];

const Achievements = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="achievements"
      className="w-full py-16 px-4 sm:px-12 md:px-20 bg-slate-50 border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16">
          <Heading text="ACHIEVEMENTS REGISTRY" />
          <p className="text-slate-500 text-sm md:text-base font-light text-center max-w-2xl mt-2">
            Celebrating the excellence, leadership, and outstanding
            contributions of our student volunteers across section and national
            levels.
          </p>
        </div>

        {/* Expandable Wrapper */}
        <div
          className={`expandable-container achievements-container ${isExpanded ? "expanded" : "collapsed"}`}
        >
          {/* Grid Layout - 2 columns on mobile */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-8 achievements-grid ${isExpanded ? "expanded" : "collapsed"}`}
          >
            {/* Volunteer Cards */}
            {ACHIEVEMENTS_DATA.map((achievement, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200/80 rounded-2xl p-3 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-sky-500/20 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="space-y-3 sm:space-y-6">
                  {/* Image & Ribbon Container */}
                  <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    <img
                      src={achievement.img}
                      alt={achievement.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='250' height='250' viewBox='0 0 250 250'><rect width='100%' height='100%' fill='%23f1f5f9'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%2394a3b8'>Achievement</text></svg>";
                      }}
                    />
                    {/* Badge */}
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#0f172a] text-white p-1 sm:p-2 rounded-full shadow-md z-10 flex items-center justify-center">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 text-sky-400" />
                    </div>
                  </div>

                  {/* Info */}
                  <div>
                    <h3 className="text-[#0f172a] font-bold text-[10px] sm:text-lg leading-tight uppercase font-monument">
                      {achievement.name}
                    </h3>
                  </div>

                  {/* Details / Pills */}
                  <div className="flex flex-col gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                    {achievement.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="text-[8px] sm:text-xs text-slate-600 bg-slate-50 border border-slate-100 rounded-lg p-1.5 sm:p-2.5 leading-normal"
                      >
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fade Overlay */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent pointer-events-none z-10" />
          )}
        </div>

        {/* Expand Action Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-0.5"
          >
            <span>{isExpanded ? "Show Less" : "View All Achievements"}</span>
            <ChevronDown
              className={`w-4 h-4 text-slate-500 group-hover:text-slate-700 transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
