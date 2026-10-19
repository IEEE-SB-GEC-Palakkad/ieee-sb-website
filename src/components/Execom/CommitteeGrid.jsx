import React from "react";
import { Linkedin, User } from "lucide-react";

export const CommitteeGrid = ({ sections }) => {
  return Object.keys(sections).map((sectionName) => (
    <div key={sectionName} className="mb-12 w-full">
      <h3 className="text-[#0f172a] font-monument font-bold text-lg sm:text-xl tracking-wider uppercase border-b border-slate-200/80 pb-2 mb-8">
        {sectionName}
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-6 justify-items-center">
        {sections[sectionName].map((member, idx) => (
          <div
            key={idx}
            className="relative w-full max-w-[200px] bg-white border border-slate-200/85 rounded-xl p-1.5 sm:p-4 flex flex-col items-center justify-between shadow-sm hover:shadow-md hover:border-sky-500/30 hover:-translate-y-0.5 transition-all duration-300 group overflow-hidden min-h-[135px] sm:min-h-[220px]"
          >
            {/* Photo Area */}
            <div className="flex-grow flex items-center justify-center w-full relative mb-1 sm:mb-2">
              <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-36 sm:h-36 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-200/50 group-hover:border-sky-500/20 transition-all duration-300">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <User className="w-6 h-6 sm:w-16 sm:h-16 text-slate-300" />
                )}
              </div>
            </div>

            {/* Name & Position */}
            <div className="w-full text-center mt-1 sm:mt-3 z-10">
              <h4 className="text-slate-800 font-bold text-[8px] sm:text-xs leading-tight tracking-normal truncate uppercase">
                {member.name}
              </h4>
              <p className="text-sky-600 font-medium text-[6.5px] xs:text-[7.5px] sm:text-[9px] uppercase tracking-widest mt-0.5 sm:mt-1 truncate">
                {member.position}
              </p>
            </div>

            {/* Hover overlay showing LinkedIn */}
            {member.linkedinUrl && (
              <div className="absolute inset-x-0 bottom-0 h-7 sm:h-10 bg-white/95 backdrop-blur-sm border-t border-slate-100 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-0.5 sm:p-1 text-slate-500 hover:text-sky-600 transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  ));
};

export default CommitteeGrid;
