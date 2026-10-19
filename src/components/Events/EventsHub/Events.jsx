import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Compass,
  Calendar,
  User,
  MapPin,
  Users,
  Layers,
  Sparkles
} from "lucide-react";
import Heading from "../../Common/Heading";

// Comprehensive array of event data organized by society/branch and year
const EVENTS_DATA = [
  // ==========================================
  // EXISTING FLAGSHIP INITIATIVES
  // ==========================================
  {
    name: "IEEE Symposium",
    organizer: "IEEE SB GEC Palakkad",
    year: "Flagship Initiative",
    category: "Technical Symposium",
    details:
      "The Symposium on Electrical Drives, Robotics, Control, and Computing is a flagship event of the Department of Electrical Engineering, GEC Palakkad, organized in association with IEEE Student Branch. It provides a premium platform for students to present projects and innovative research papers in front of industrial experts.",
    highlights: [
      "Electrical Drives & Robotics",
      "Control & Computing Tracks",
      "Technical Paper Presentations",
      "Co-sponsored by Malabar Subsection"
    ],
    date: null,
    speaker: null,
    venue: null,
    attendance: null,
    img: "/images/symposium.jpg"
  },
  {
    name: "Excelsior",
    organizer: "IEEE SB GEC Palakkad",
    year: "Flagship Initiative",
    category: "Flagship Technical Festival",
    details:
      "Excelsior, IEEE SB GEC Palakkad's premier technical festival, is a vibrant gathering held at Government Engineering College Palakkad. Designed as an immersive learning experience, it brings together tech enthusiasts for intensive training, hands-on workshops, and expert talks.",
    highlights: [
      "React JS Front-End Development Workshop",
      "Arduino Hardware & Prototyping Lab",
      "AutoCAD Professional Drafting Session",
      "Insights on Web3 & Placements"
    ],
    date: null,
    speaker: null,
    venue: null,
    attendance: null,
    img: "/images/1.png"
  },
  {
    name: "Matrix Hackathon",
    organizer: "IEEE CS SBC GEC Palakkad",
    year: "Flagship Initiative",
    category: "24-Hour Sustainability Hackathon",
    details:
      "'MATRIX' hackathon, organized under the Collaborative Research and Learning Platform (CORaL) in association with IEEE CS SBC GEC Palakkad, challenged student teams to ideate, prototype, and present scalable solutions targeting Sustainability.",
    highlights: [
      "24-Hour Intensive Coding Sprint",
      "Focus on Environmental Sustainability",
      "Functional Prototype Development",
      "Mentorship from Industrial experts"
    ],
    date: null,
    speaker: null,
    venue: null,
    attendance: null,
    img: "/images/event_2.png"
  },
  {
    name: "Upscale",
    organizer: "IEEE SB GEC Palakkad",
    year: "Flagship Initiative",
    category: "Entrepreneurship Boot Camp",
    details:
      "Upscale is a week-long flagship boot camp focusing on introducing students to modern startup ecosystems, business modeling, venture capital pitch sessions, and product prototyping. It aims to mold young engineers into confident founders.",
    highlights: [
      "Week-long Entrepreneurial Journey",
      "Lean Startup Framework & Ideation",
      "Pitch Decks & Venture Capital Basics",
      "Interactive Founders Roundtable"
    ],
    date: null,
    speaker: null,
    venue: null,
    attendance: null,
    img: "/images/upscale.png"
  },
  {
    name: "Reise — STEM Outreach Initiative",
    organizer: "IEEE SB GEC Palakkad",
    year: "Flagship Initiative",
    category: "STEM Outreach Program",
    details:
      "Reise is a specialized two-day STEM program crafted for high school students in the Palakkad district. It opens the doors of engineering laboratories and technical hubs to young minds, inspiring future innovators.",
    highlights: [
      "High School Science & STEM Outreach",
      "Hands-on Chemistry & Electrical Labs",
      "Introduction to Creative Coding",
      "Interactive Team Engineering Contests"
    ],
    date: null,
    speaker: null,
    venue: null,
    attendance: null,
    img: "/images/symposium.jpg"
  },

  // ==========================================
  // IEEE SB GEC PALAKKAD EVENTS (Year: 2026–27)
  // Ordered by event date
  // ==========================================
  {
    name: "DesignVerse",
    organizer: "IEEE SB GEC Palakkad",
    year: "2026–27",
    category: "Design & Innovation",
    details:
      "DesignVerse is an event focused on design and creative innovation, providing students with opportunities to explore design concepts and develop their creative skills.",
    highlights: ["Design-focused learning and creative exploration."],
    date: "20–21/07/2026",
    speaker: null,
    venue: "CS PG Seminar Hall",
    attendance: "42",
    img: "/images/designverse.jpg"
  },
  {
    name: "Spectrum Talk Session 1",
    organizer: "IEEE SB GEC Palakkad",
    year: "2026–27",
    category: "Technical Talk",
    details:
      "A technical talk session designed to provide students with technical insights and knowledge sharing.",
    highlights: [],
    date: "30/07/2026",
    speaker: "Nafeesathul Raftha, S3 EEE",
    venue: "EEE 104",
    attendance: "32",
    img: "/images/spectrum-talk-session-1.jpg"
  },
  {
    name: "Spectrum Talk Session 2",
    organizer: "IEEE SB GEC Palakkad",
    year: "2026–27",
    category: "Technical Talk",
    details:
      "A technical talk session aimed at enhancing students' knowledge and awareness of emerging technologies.",
    highlights: [],
    date: "06/08/2026",
    speaker: "Aiswarya A Nair, S3 IT",
    venue: "IT 206",
    attendance: "34",
    img: "/images/spectrum-talk-session-2.jpg"
  },
  {
    name: "Renaissance 7.0",
    organizer: "IEEE SB GEC Palakkad",
    year: "2026–27",
    category: "Innovation & Learning",
    details:
      "An event organized to encourage innovation, technical learning, and student engagement.",
    highlights: [],
    date: "04/09/2026",
    speaker: "LINK TEAM",
    venue: "CS PG Seminar Hall",
    attendance: "75",
    img: null
  },
  {
    name: "Beyond Glass Barriers",
    organizer: "IEEE SB GEC Palakkad",
    year: "2026–27",
    category: "Awareness & Inclusivity",
    details:
      "An initiative aimed at promoting awareness, inclusivity, and opportunities for students.",
    highlights: [],
    date: "20/09/2026",
    speaker: "Wie Malabar Subsection",
    venue: "CS PG Seminar Hall",
    attendance: "52",
    img: null
  },

  // ==========================================
  // IEEE SIGHT GEC PALAKKAD EVENTS (Year: 2026–27)
  // ==========================================
  {
    name: "World Health Day Quiz",
    organizer: "IEEE SIGHT GEC Palakkad",
    year: "2026–27",
    category: "Health Awareness",
    details:
      "An online quiz conducted to promote awareness of health-related topics and encourage student participation.",
    highlights: [],
    date: "08/04/2026",
    speaker: null,
    venue: "Online",
    attendance: "8",
    img: "/images/world-health-day-quiz.jpg"
  },
  {
    name: "Cancer Awareness Session",
    organizer: "IEEE SIGHT GEC Palakkad",
    year: "2026–27",
    category: "Awareness Session",
    details:
      "An awareness session focused on cancer education, prevention, and the importance of early detection.",
    highlights: [],
    date: "16/04/2026",
    speaker: "Dr. Divya V S",
    venue: "EEE Seminar Hall",
    attendance: "11",
    img: "/images/cancer-awareness-session.jpg"
  },
  {
    name: "Magic of Composting",
    organizer: "IEEE SIGHT GEC Palakkad",
    year: "2026–27",
    category: "Sustainability",
    details:
      "An educational session highlighting the importance of composting and sustainable waste management.",
    highlights: [],
    date: "16/04/2026",
    speaker: "Madhumita Dinesh",
    venue: "EEE Seminar Hall",
    attendance: "11",
    img: "/images/magic-of-composting.jpg"
  },
  {
    name: "IIT Palakkad Visit",
    organizer: "IEEE SIGHT GEC Palakkad",
    year: "2026–27",
    category: "Academic Visit",
    details:
      "An academic visit providing students with exposure to the institutional environment and educational activities at IIT Palakkad.",
    highlights: [],
    date: "12/09/2026",
    speaker: "Prof. Ramanujam R & Prof. Indumathi R",
    venue: "IIT Palakkad",
    attendance: "14",
    img: null
  },
  {
    name: "Reise",
    organizer: "IEEE SIGHT GEC Palakkad",
    year: "2026–27",
    category: "Learning & Engagement",
    details:
      "An event organized to provide students with opportunities for learning and engagement.",
    highlights: [],
    date: "24/09/2026 & 25/09/2026",
    speaker: null,
    venue: "College",
    attendance: "17",
    img: "/images/reise.jpg"
  },
  {
    name: "Kusruthikalam",
    organizer: "IEEE SIGHT GEC Palakkad",
    year: "2026–27",
    category: "Interactive Activities",
    details:
      "An event designed to encourage student participation and engagement through interactive activities.",
    highlights: [],
    date: "26/09/2026",
    speaker: "Prof. Ramanujam R & Prof. Indumathi R",
    venue: "ECE Seminar Hall",
    attendance: "16",
    img: "/images/kusruthikalam.jpg"
  },

  // ==========================================
  // IEEE IAS GEC PALAKKAD EVENTS (Year: 2026–27)
  // ==========================================
  {
    name: "Hydronova — Session 1",
    organizer: "IEEE IAS GEC Palakkad",
    year: "2026–27",
    category: "Technical Learning",
    details:
      "An online session focused on technical learning and knowledge sharing.",
    highlights: [],
    date: "22/03/2026",
    speaker:
      "Prof. Vidhun V R, Assistant Professor, Mechanical Engineering, GEC Palakkad",
    venue: "Online (Google Meet)",
    attendance: null,
    img: "/images/hydronova-session-1.jpg"
  },
  {
    name: "Hydronova — Session 2",
    organizer: "IEEE IAS GEC Palakkad",
    year: "2026–27",
    category: "Technical Learning",
    details:
      "A follow-up session providing further insights into the topic.",
    highlights: [],
    date: "29/03/2026",
    speaker:
      "Dr. Arun B S, Assistant Professor, Mechanical Engineering, GEC Palakkad",
    venue: "Online (Google Meet)",
    attendance: null,
    img: "/images/hydronova-session-2.jpg"
  },
  {
    name: "Ecoquest",
    organizer: "IEEE IAS GEC Palakkad",
    year: "2026–27",
    category: "Environmental Quiz",
    details:
      "An online quiz conducted to encourage environmental awareness and sustainable practices.",
    highlights: [],
    date: "05/06/2026",
    speaker: null,
    venue: "Online (Quiz)",
    attendance: null,
    img: null
  },
  {
    name: "PLC SCADA — Session 1",
    organizer: "IEEE IAS GEC Palakkad",
    year: "2026–27",
    category: "Technical Session",
    details:
      "A technical session introducing students to PLC and SCADA systems and their applications in industrial automation.",
    highlights: [],
    date: "27/06/2026",
    speaker: "Sreejin G, Automation Engineer",
    venue: "Online (Google Meet)",
    attendance: null,
    img: null
  },
  {
    name: "PLC SCADA — Session 2",
    organizer: "IEEE IAS GEC Palakkad",
    year: "2026–27",
    category: "Technical Session",
    details:
      "A follow-up session exploring PLC and SCADA systems in greater detail.",
    highlights: [],
    date: "28/06/2026",
    speaker: "Sreejin G, Automation Engineer",
    venue: "Online (Google Meet)",
    attendance: null,
    img: null
  }
];

const FILTER_TABS = [
  { id: "ALL", label: "All Events" },
  { id: "IEEE_SB_26", label: "IEEE SB (2026–27)" },
  { id: "IEEE_SIGHT_26", label: "IEEE SIGHT (2026–27)" },
  { id: "IEEE_IAS_26", label: "IEEE IAS (2026–27)" },
  { id: "FLAGSHIPS", label: "Flagship Initiatives" }
];

const Events = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter events based on active tab
  const filteredEvents = React.useMemo(() => {
    switch (activeTab) {
      case "IEEE_SB_26":
        return EVENTS_DATA.filter(
          (e) => e.organizer === "IEEE SB GEC Palakkad" && e.year === "2026–27"
        );
      case "IEEE_SIGHT_26":
        return EVENTS_DATA.filter(
          (e) => e.organizer === "IEEE SIGHT GEC Palakkad" && e.year === "2026–27"
        );
      case "IEEE_IAS_26":
        return EVENTS_DATA.filter(
          (e) => e.organizer === "IEEE IAS GEC Palakkad" && e.year === "2026–27"
        );
      case "FLAGSHIPS":
        return EVENTS_DATA.filter((e) => e.year === "Flagship Initiative");
      case "ALL":
      default:
        return EVENTS_DATA;
    }
  }, [activeTab]);

  // Safe active event
  const safeIndex =
    currentIndex >= filteredEvents.length ? 0 : currentIndex;
  const activeEvent = filteredEvents[safeIndex] || filteredEvents[0];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredEvents.length - 1 : prevIndex - 1
    );
  };

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= filteredEvents.length - 1 ? 0 : prevIndex + 1
    );
  }, [filteredEvents.length]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setCurrentIndex(0);
  };

  // Auto-play timer: advances events every 7 seconds
  React.useEffect(() => {
    if (filteredEvents.length <= 1) return;
    const timer = setTimeout(() => {
      handleNext();
    }, 7000);
    return () => clearTimeout(timer);
  }, [currentIndex, filteredEvents.length, handleNext]);

  return (
    <section
      id="events"
      className="w-full py-20 px-6 sm:px-12 md:px-20 bg-white"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-8">
          <Heading text="EVENTS HUB" />
          <p className="text-slate-500 text-sm md:text-base font-light text-center max-w-2xl mt-2">
            Explore our initiatives, technical workshops, expert sessions, and
            community outreach programs across our IEEE societies and chapters.
          </p>
        </div>

        {/* Society & Year Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {FILTER_TABS.map((tab) => {
            const isSelected = activeTab === tab.id;
            let count = EVENTS_DATA.length;
            if (tab.id === "IEEE_SB_26") {
              count = EVENTS_DATA.filter(
                (e) => e.organizer === "IEEE SB GEC Palakkad" && e.year === "2026–27"
              ).length;
            } else if (tab.id === "IEEE_SIGHT_26") {
              count = EVENTS_DATA.filter(
                (e) => e.organizer === "IEEE SIGHT GEC Palakkad" && e.year === "2026–27"
              ).length;
            } else if (tab.id === "IEEE_IAS_26") {
              count = EVENTS_DATA.filter(
                (e) => e.organizer === "IEEE IAS GEC Palakkad" && e.year === "2026–27"
              ).length;
            } else if (tab.id === "FLAGSHIPS") {
              count = EVENTS_DATA.filter(
                (e) => e.year === "Flagship Initiative"
              ).length;
            }

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabChange(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border flex items-center gap-1.5 cursor-pointer ${isSelected
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[11px] font-semibold ${isSelected
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-500"
                    }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Carousel Container */}
        {activeEvent && (
          <div className="relative border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50 shadow-sm min-h-[700px] sm:min-h-[660px] lg:min-h-[580px] flex flex-col lg:flex-row">
            {/* Left Split: Event Details */}
            <div className="w-full lg:max-w-[55%] h-auto p-6 sm:p-8 lg:p-12 flex flex-col justify-between z-10 bg-white">
              <div className="space-y-4 sm:space-y-6">
                {/* Badges: Organizer, Year, Category */}
                <div className="flex flex-wrap items-center gap-2">
                  {activeEvent.organizer && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wider">
                      <Compass className="w-3.5 h-3.5" />
                      {activeEvent.organizer}
                    </div>
                  )}
                  {activeEvent.year && (
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {activeEvent.year}
                    </div>
                  )}
                  {activeEvent.category && (
                    <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium">
                      {activeEvent.category}
                    </div>
                  )}
                </div>

                {/* Event Name */}
                <h3 className="text-slate-900 font-monument font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight uppercase">
                  {activeEvent.name}
                </h3>

                {/* Description */}
                <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed">
                  {activeEvent.details}
                </p>

                {/* Extended Metadata: Date, Speaker, Venue, Attendance */}
                {(activeEvent.date ||
                  activeEvent.speaker ||
                  activeEvent.venue ||
                  activeEvent.attendance) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
                      {activeEvent.date && (
                        <div className="flex items-start gap-2">
                          <Calendar className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block">
                              Date
                            </span>
                            <span className="text-slate-600">{activeEvent.date}</span>
                          </div>
                        </div>
                      )}
                      {activeEvent.venue && (
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block">
                              Venue
                            </span>
                            <span className="text-slate-600">{activeEvent.venue}</span>
                          </div>
                        </div>
                      )}
                      {activeEvent.speaker && (
                        <div className="flex items-start gap-2 sm:col-span-2">
                          <User className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block">
                              Speaker
                            </span>
                            <span className="text-slate-600">
                              {activeEvent.speaker}
                            </span>
                          </div>
                        </div>
                      )}
                      {activeEvent.attendance && (
                        <div className="flex items-start gap-2">
                          <Users className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block">
                              Members Present
                            </span>
                            <span className="text-slate-600">
                              {activeEvent.attendance}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                {/* Highlights Bullet List (if available) */}
                {activeEvent.highlights &&
                  activeEvent.highlights.length > 0 && (
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
                  )}
              </div>

              {/* Navigation and Slide Indicator */}
              <div className="flex items-center justify-between mt-8 lg:mt-auto pt-4 sm:pt-6 border-t border-slate-100">
                {/* Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full border border-slate-200 hover:border-slate-800 text-slate-800 hover:text-slate-900 bg-white transition-all duration-200 shadow-sm flex items-center justify-center cursor-pointer"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-800 stroke-[2.5]" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full border border-slate-200 hover:border-slate-800 text-slate-800 hover:text-slate-900 bg-white transition-all duration-200 shadow-sm flex items-center justify-center cursor-pointer"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-5 h-5 text-slate-800 stroke-[2.5]" />
                  </button>
                </div>

                {/* Fractional Pagination */}
                <div className="text-slate-400 font-medium text-sm tracking-widest">
                  <span className="text-slate-900 font-bold">
                    {String(safeIndex + 1).padStart(2, "0")}
                  </span>
                  <span> / </span>
                  <span>{String(filteredEvents.length).padStart(2, "0")}</span>
                </div>
              </div>
            </div>

            {/* Right Split: Event Image Frame or Elegant IEEE Branded Visual Container */}
            <div className="w-full lg:w-[45%] min-h-[300px] sm:min-h-[340px] lg:min-h-full shrink-0 relative overflow-hidden bg-slate-100 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-200/80 p-6 sm:p-8">
              {activeEvent.img ? (
                <>
                  <img
                    src={activeEvent.img}
                    alt={`${activeEvent.name} poster`}
                    className="max-w-full max-h-full object-contain transition-transform duration-700 hover:scale-102"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='100%' height='100%' fill='%23f1f5f9'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%2394a3b8'>IEEE Event Poster</text></svg>";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/5 to-transparent pointer-events-none"></div>
                </>
              ) : (
                /* Fallback IEEE-Branded Card for events without posters */
                <div className="w-full h-full min-h-[260px] rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-6 sm:p-8 flex flex-col justify-between text-white relative overflow-hidden border border-slate-800 shadow-md">
                  {/* Subtle decorative glow */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

                  {/* Card Header */}
                  <div className="flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-sky-200 text-xs font-semibold tracking-wider uppercase">
                      <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                      {activeEvent.year || "2026–27"}
                    </span>
                    <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
                      IEEE SB GECPKD
                    </span>
                  </div>

                  {/* Card Center Info */}
                  <div className="my-auto py-6 z-10 text-center flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center mb-4 text-sky-300 shadow-sm">
                      <Layers className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold font-monument tracking-tight uppercase text-white max-w-sm leading-tight">
                      {activeEvent.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-sky-300 font-medium mt-2">
                      {activeEvent.category}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-slate-300 z-10">
                    <span className="font-medium truncate max-w-[200px]">
                      {activeEvent.organizer || "IEEE SB GEC Palakkad"}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-sky-400 font-mono">
                      Official Event
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Events;