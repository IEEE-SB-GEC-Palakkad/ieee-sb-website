import React from "react";
import { MapPin } from "lucide-react";

const GoogleMap = () => {
  return (
    <div className="w-full md:w-[48%] bg-white border border-slate-200/80 rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
      <div className="space-y-4 w-full">
        {/* Title */}
        <div className="flex items-center gap-2 mb-2 text-slate-800">
          <MapPin className="w-5 h-5 text-sky-500" />
          <h3 className="font-bold text-lg sm:text-xl tracking-wider uppercase font-monument">
            LOCATE US
          </h3>
        </div>

        {/* Info Text */}
        <p className="text-slate-500 text-sm font-light leading-relaxed">
          Government Engineering College, Sreekrishnapuram,
          <br />
          Palakkad, Kerala - 679513
        </p>

        {/* Map Frame Container */}
        <div className="overflow-hidden rounded-xl border border-slate-200/60 shadow-inner mt-4 h-[250px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.792590429096!2d76.43187407488439!3d10.903361589253254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d635151d9b73%3A0xecf06761ecf4f56c!2sGovt.%20Engineering%20College%20Sreekrishnapuram!5e0!3m2!1sen!2sin!4v1722239045811!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(10%) contrast(90%)" }}
            allowFullScreen=""
            loading="lazy"
            title="GEC Palakkad Map Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
