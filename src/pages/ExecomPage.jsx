import React, { useState } from "react";
import Banner from "@/components/Banner/Banner";
import Heading from "@/components/Common/Heading";

// Lazy load the modular Execom subcomponents
const Execom2026 = React.lazy(() => import("@/components/Execom/Execom2026"));
const Execom2025 = React.lazy(() => import("@/components/Execom/Execom2025"));
const Execom2024 = React.lazy(() => import("@/components/Execom/Execom2024"));
const Execom2023 = React.lazy(() => import("@/components/Execom/Execom2023"));
const Execom2022 = React.lazy(() => import("@/components/Execom/Execom2022"));

const ExecomPage = ({ defaultYear = "2026" }) => {
  const [activeTab, setActiveTab] = useState(defaultYear);

  // Sync tab when route prop changes (e.g. /execom22 -> /execom25)
  /* eslint-disable react-hooks/set-state-in-effect */
  React.useEffect(() => {
    setActiveTab(defaultYear);
  }, [defaultYear]);
  /* eslint-enable react-hooks/set-state-in-effect */

  // Dynamic SEO title & description
  React.useEffect(() => {
    document.title = `Executive Committee ${activeTab} — IEEE SB GEC Palakkad`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        `Meet the dedicated student leaders of the IEEE Student Branch, GEC Palakkad executive committee (EXECOM) for the year ${activeTab}.`
      );
    }
  }, [activeTab]);

  const years = ["2026", "2025", "2024", "2023", "2022"];

  return (
    <>
      <Banner />
      <div className="w-full min-h-screen bg-white pt-24 pb-20 px-6 sm:px-12 md:px-20">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <Heading text="EXECOM ARCHIVE" />
            <p className="text-slate-500 text-sm md:text-base font-light max-w-2xl mt-2 leading-relaxed">
              Meet the dedicated student leaders driving innovation, managing
              events, and guiding our student branch across successive
              committees.
            </p>
          </div>

          {/* Year Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 md:gap-4 p-1.5 bg-slate-50 border border-slate-200/80 rounded-2xl sm:rounded-full mb-16 max-w-lg w-full">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveTab(year)}
                className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-full tracking-wider transition-all duration-300 ${
                  activeTab === year
                    ? "bg-[#0f172a] text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Tab Content Display with Lazy Loading Suspense */}
          <div className="w-full flex flex-col items-center min-h-[400px]">
            <React.Suspense
              fallback={
                <div className="flex flex-col items-center justify-center py-20 text-slate-400 gap-3">
                  <div className="w-6 h-6 border-2 border-slate-300 border-t-slate-800 rounded-full animate-spin"></div>
                  <span className="text-sm font-medium tracking-wide">
                    Loading registry...
                  </span>
                </div>
              }
            >
              {activeTab === "2026" && <Execom2026 />}
              {activeTab === "2025" && <Execom2025 />}
              {activeTab === "2024" && <Execom2024 />}
              {activeTab === "2023" && <Execom2023 />}
              {activeTab === "2022" && <Execom2022 />}
            </React.Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExecomPage;
