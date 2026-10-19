import React from "react";
import Heading from "../Common/Heading";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const ExecomSection = () => {
  const execomYears = [
    { year: "2026", to: "/execom" },
    { year: "2025", to: "/execom25" },
    { year: "2024", to: "/execom24" },
    { year: "2023", to: "/execom23" },
    { year: "2022", to: "/execom22" }
  ];

  return (
    <section
      id="execom"
      className="w-full py-20 px-6 sm:px-12 md:px-20 bg-slate-50 border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16">
          <Heading text="EXECOM ARCHIVE" />
          <p className="text-slate-500 text-sm md:text-base font-light text-center max-w-2xl mt-2">
            Explore our executive committee rosters, student volunteer leaders,
            and organizational groupings from previous years.
          </p>
        </div>

        {/* Scalable Flex/Grid Row of Year Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
          {execomYears.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className="bg-white border border-slate-200/85 rounded-2xl p-6 flex flex-col justify-between items-start aspect-square shadow-sm hover:shadow-md hover:border-sky-500/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <span className="text-slate-300 font-bold text-sm tracking-wider uppercase font-monument group-hover:text-sky-500 transition-colors">
                YEAR
              </span>

              <div className="w-full flex items-end justify-between mt-4">
                <h3 className="text-slate-800 font-bold text-xl sm:text-2xl tracking-tight leading-none group-hover:text-slate-900 font-monument">
                  {item.year}
                </h3>
                <div className="p-2 rounded-full bg-slate-50 border border-slate-100 text-slate-400 group-hover:bg-sky-50 group-hover:border-sky-100 group-hover:text-sky-600 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecomSection;
