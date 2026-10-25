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
    { name: "Ansaaf Anas", position: "CHAIRPERSON", image: null, linkedinUrl: "https://www.linkedin.com/in/ansaafanas/" },
    { name: "Aysha Henan", position: "VICE CHAIRPERSON", image: null, linkedinUrl: "https://www.linkedin.com/in/aysha-henan-596120334/" },
    { name: "Sharfeena S", position: "SECRETARY", image: null, linkedinUrl: "https://www.linkedin.com/in/sharfeena-s-839487300/" },
    { name: "Ardhra K", position: "TREASURER", image: null, linkedinUrl: "https://www.linkedin.com/in/ardhra-k1209/" },
    { name: "Bhadra K N", position: "DESIGN LEAD", image: null, linkedinUrl: "https://www.linkedin.com/in/bhadrakn/" },
    { name: "Aiswarya C", position: "CONTENT LEAD", image: null, linkedinUrl: "https://www.linkedin.com/in/aiswarya-c-109794333/" },
    {
      name: "Mohamed Nihal T K N",
      position: "TECHNICAL COORDINATOR",
      image: null,
      linkedinUrl: "https://www.linkedin.com/in/mohamednihaltkn/"
    },
    { name: "Muhammed Hashim C H", position: "MDC", image: null, linkedinUrl: "https://www.linkedin.com/in/muhammedhashimch/" },
    {
      name: "Shafana N P",
      position: "LINK REPRESENTATIVE",
      image: null,
      linkedinUrl: "https://www.linkedin.com/in/shafanaabdul/"
    }
  ],
  "IAS CHAPTER": [
    { name: "Gayathri J Pisharady", position: "CHAIRPERSON", image: null, linkedinUrl: "https://www.linkedin.com/in/gayathrijpisharady/" },
    { name: "Ayush K Satheesh", position: "VICE CHAIRPERSON", image: null, linkedinUrl: "https://www.linkedin.com/in/ayush-k-satheesh-93a4a3347/" },
    { name: "N Fadeela", position: "SECRETARY", image: null, linkedinUrl: "https://www.linkedin.com/in/nfadeela/" }
  ],
  "CS CHAPTER": [
    { name: "Anu Raj", position: "CHAIRPERSON", image: null, linkedinUrl: "https://www.linkedin.com/in/anu-raj-08b2aa367/" },
    { name: "Mohammed Thamjeed KT", position: "VICE CHAIRPERSON", image: null, linkedinUrl: "https://www.linkedin.com/in/mohammed-thamjeed-2ab407334/" },
    { name: "Muhammed Shebin Valangattil Askar", position: "SECRETARY", image: null, linkedinUrl: "https://www.linkedin.com/in/muhammed--shebin/" }
  ],
  "COMSOC CHAPTER": [
    { name: "Parthiv Krishna", position: "CHAIRPERSON", image: null, linkedinUrl: "https://www.linkedin.com/in/parthivkrishna/" },
    { name: "Shahabas Ahammed", position: "VICE CHAIRPERSON", image: null, linkedinUrl: "https://www.linkedin.com/in/shahabas-ahammed-065146334/" },
    { name: "Sikha V S", position: "SECRETARY", image: null, linkedinUrl: "https://www.linkedin.com/in/sikha-v-s-55555b3a3/" }
  ],
  "WIE AFFINITY GROUP": [
    { name: "Fidha Fathima Kiliyamannil", position: "CHAIRPERSON", image: null, linkedinUrl: "https://www.linkedin.com/in/fathima-nihala-mp-1154162a2/" },
    { name: "Fathima Nihala M P", position: "VICE CHAIRPERSON", image: null, linkedinUrl: "https://www.linkedin.com/in/megha-k-348a24333/" },
    { name: "Megha K", position: "SECRETARY", image: null, linkedinUrl: "https://www.linkedin.com/in/famida-cp-b24b4a3b6/" }
  ],
  "SIGHT AFFINITY GROUP": [
    { name: "Adnan Rasheed V", position: "CHAIRPERSON", image: null, linkedinUrl: "https://www.linkedin.com/in/adnan-rasheed-v-98a549418/" },
    { name: "Pavithra Rajesh", position: "VICE CHAIRPERSON", image: null, linkedinUrl: "https://www.linkedin.com/in/pavithra-rajesh-1b83333a4/" },
    { name: "Ayfa Mehrin P", position: "SECRETARY", image: null, linkedinUrl: "https://www.linkedin.com/in/ayfa-mehrin-palapatta-57056b423/" }
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
