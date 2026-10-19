import React from "react";
import { Users } from "lucide-react";
import CommitteeGrid from "./CommitteeGrid";

const EXECOM_2026 = {
  "IEEE EXECOM": [
    {
      name: "Position Pending Selection",
      position: "SB COUNSELOR",
      image: null,
      linkedinUrl: ""
    },
    { name: "TBD", position: "CHAIRPERSON", image: null, linkedinUrl: "" },
    { name: "TBD", position: "VICE CHAIRPERSON", image: null, linkedinUrl: "" },
    { name: "TBD", position: "SECRETARY", image: null, linkedinUrl: "" },
    { name: "TBD", position: "TREASURER", image: null, linkedinUrl: "" },
    { name: "TBD", position: "DESIGN LEAD", image: null, linkedinUrl: "" },
    { name: "TBD", position: "CONTENT LEAD", image: null, linkedinUrl: "" },
    {
      name: "TBD",
      position: "TECHNICAL COORDINATOR",
      image: null,
      linkedinUrl: ""
    },
    { name: "TBD", position: "MDC", image: null, linkedinUrl: "" },
    {
      name: "TBD",
      position: "LINK REPRESENTATIVE",
      image: null,
      linkedinUrl: ""
    }
  ],
  "IAS CHAPTER": [
    { name: "TBD", position: "CHAIRPERSON", image: null, linkedinUrl: "" },
    { name: "TBD", position: "VICE CHAIRPERSON", image: null, linkedinUrl: "" },
    { name: "TBD", position: "SECRETARY", image: null, linkedinUrl: "" }
  ],
  "CS CHAPTER": [
    { name: "TBD", position: "CHAIRPERSON", image: null, linkedinUrl: "" },
    { name: "TBD", position: "VICE CHAIRPERSON", image: null, linkedinUrl: "" },
    { name: "TBD", position: "SECRETARY", image: null, linkedinUrl: "" }
  ],
  "COMSOC CHAPTER": [
    { name: "TBD", position: "CHAIRPERSON", image: null, linkedinUrl: "" },
    { name: "TBD", position: "VICE CHAIRPERSON", image: null, linkedinUrl: "" },
    { name: "TBD", position: "SECRETARY", image: null, linkedinUrl: "" }
  ],
  "WIE AFFINITY GROUP": [
    { name: "TBD", position: "CHAIRPERSON", image: null, linkedinUrl: "" },
    { name: "TBD", position: "VICE CHAIRPERSON", image: null, linkedinUrl: "" },
    { name: "TBD", position: "SECRETARY", image: null, linkedinUrl: "" }
  ],
  "SIGHT AFFINITY GROUP": [
    { name: "TBD", position: "CHAIRPERSON", image: null, linkedinUrl: "" },
    { name: "TBD", position: "VICE CHAIRPERSON", image: null, linkedinUrl: "" },
    { name: "TBD", position: "SECRETARY", image: null, linkedinUrl: "" }
  ]
};

const Execom2026 = () => {
  return (
    <div className="w-full flex flex-col items-center animate-in fade-in duration-300">
      {/* 2026 Commentary & Status Box */}
      <div className="bg-sky-50/50 border border-sky-100/80 rounded-2xl p-6 text-center max-w-2xl mb-12">
        <Users className="w-8 h-8 text-sky-500 mx-auto mb-3" />
        <h4 className="text-slate-800 font-bold text-sm tracking-wider uppercase font-monument">
          2026 Executive Committee Formative Stage
        </h4>
        <p className="text-slate-500 text-xs md:text-sm font-light mt-2 leading-relaxed">
          The 2026 IEEE Student Branch Executive Committee details are currently
          being finalized. Clean code structures are prepared below; edit
          `src/components/Execom/Execom2026.jsx` directly to fill in official
          roles.
        </p>
      </div>
      <CommitteeGrid sections={EXECOM_2026} />
    </div>
  );
};

export default Execom2026;
