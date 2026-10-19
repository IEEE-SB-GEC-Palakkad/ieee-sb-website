import React from "react";
import { Linkedin, Instagram, Globe } from "lucide-react";

const SocietyCard = ({ image, name, fullName, link1, link2, webpage }) => {
  return (
    <div className="w-full max-w-[240px] bg-white border border-slate-200/80 rounded-2xl p-3 sm:p-5 flex flex-col items-center justify-between shadow-sm hover:shadow-md hover:border-sky-500/30 hover:-translate-y-1 transition-all duration-300 group min-h-[290px] sm:min-h-[380px]">
      {/* Upper part: Clean Logo Container (Larger Size) */}
      <div className="h-16 sm:h-28 flex items-center justify-center w-full mb-1 sm:mb-2">
        <img
          src={image}
          alt={`${name} emblem`}
          className="w-[90%] h-16 sm:h-28 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><rect width='100%' height='100%' fill='%23f1f5f9'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='12' fill='%2394a3b8'>" + name.substring(0, 3) + "</text></svg>";
          }}
        />
      </div>

      {/* Middle part: Locked text height for perfect grid alignment */}
      <div className="w-full text-center flex-grow flex flex-col justify-center my-1 sm:my-2">
        <h3 className="text-slate-800 font-semibold text-[9px] sm:text-[13px] leading-tight tracking-wider uppercase font-monument min-h-[24px] sm:min-h-[36px] flex items-center justify-center">
          {name}
        </h3>
        <p className="text-slate-400 text-[8px] sm:text-[9px] mt-1 sm:mt-1.5 uppercase tracking-widest leading-normal line-clamp-2 min-h-[20px] sm:min-h-[28px] flex items-center justify-center">
          {fullName}
        </p>
      </div>

      {/* Lower part: Visible actions */}
      <div className="w-full mt-3 sm:mt-4 space-y-2 sm:space-y-3">
        {/* Redirect Button */}
        <a
          href={webpage}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 w-full py-1.5 sm:py-2 text-[8px] sm:text-[10px] font-bold tracking-wider uppercase text-slate-700 hover:text-white bg-slate-50 hover:bg-[#0f172a] border border-slate-200 hover:border-[#0f172a] rounded-lg transition-all duration-300 shadow-sm"
        >
          <span className="hidden xs:inline">Visit Society Site</span>
          <span className="xs:hidden">Visit</span>
          <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </a>

        {/* Social Links Row */}
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <a
            href={link1}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 sm:p-1.5 rounded-md hover:bg-sky-50 hover:text-sky-600 text-slate-400 transition-colors duration-200 border border-transparent hover:border-sky-100"
            aria-label={`${name} LinkedIn`}
          >
            <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
          <a
            href={link2}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 sm:p-1.5 rounded-md hover:bg-rose-50 hover:text-rose-600 text-slate-400 transition-colors duration-200 border border-transparent hover:border-rose-100"
            aria-label={`${name} Instagram`}
          >
            <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocietyCard;
