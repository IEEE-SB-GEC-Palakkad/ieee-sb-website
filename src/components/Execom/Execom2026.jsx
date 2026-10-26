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
    { name: "Ansaaf Anas", position: "CHAIRPERSON", image: "/images/Execom26/Ansaaf Anas Chair SB.jpeg", linkedinUrl: "https://www.linkedin.com/in/ansaafanas/" },
    { name: "Aysha Henan", position: "VICE CHAIRPERSON", image: "/images/Execom26/AyshaHenan.jpg", linkedinUrl: "https://www.linkedin.com/in/aysha-henan-596120334/" },
    { name: "Sharfeena S", position: "SECRETARY", image:"/images/Execom26/Sharfeena S Secretary.jpg", linkedinUrl: "https://www.linkedin.com/in/sharfeena-s-839487300/" },
    { name: "Ardhra K", position: "TREASURER", image: "/images/Execom26/Ardhra K Treasurer.jpg", linkedinUrl: "https://www.linkedin.com/in/ardhra-k1209/" },
    { name: "Bhadra K N", position: "DESIGN LEAD", image: "/images/Execom26/BHADRA K N Design Lead.jpeg", linkedinUrl: "https://www.linkedin.com/in/bhadrakn/" },
    { name: "Aiswarya C", position: "CONTENT LEAD", image: "/images/Execom26/Aiswarya C & Content Lead.jpg", linkedinUrl: "https://www.linkedin.com/in/aiswarya-c-109794333/" },
    {
      name: "Mohamed Nihal T K N",
      position: "TECHNICAL COORDINATOR",
      image: "/images/Execom26/MOHAMED NIHAL T K N - WEBMASTER AND ECC.JPG",
      linkedinUrl: "https://www.linkedin.com/in/mohamednihaltkn/"
    },
    { name: "Muhammed Hashim C H", position: "MDC", image: "/images/Execom26/Muhammed Hashim MDC.jpg", linkedinUrl: "https://www.linkedin.com/in/muhammedhashimch/" },
    {
      name: "Shafana N P",
      position: "LINK REPRESENTATIVE",
      image: "/images/Execom25/shafana.png",
      linkedinUrl: "https://www.linkedin.com/in/shafanaabdul/"
    }
  ],
  "IAS CHAPTER": [
    { name: "Gayathri J Pisharady", position: "CHAIRPERSON", image: "/images/Execom26/Gayathri J Pisharady Chair IAS.jpg", linkedinUrl: "https://www.linkedin.com/in/gayathrijpisharady/" },
    { name: "Ayush K Satheesh", position: "VICE CHAIRPERSON", image: "/images/Execom25/ayush.png", linkedinUrl: "https://www.linkedin.com/in/ayush-k-satheesh-93a4a3347/" },
    { name: "N Fadeela", position: "SECRETARY", image: "/images/Execom26/N Fadeela.jpg", linkedinUrl: "https://www.linkedin.com/in/nfadeela/" }
  ],
  "CS CHAPTER": [
    { name: "Anu Raj", position: "CHAIRPERSON", image: "/images/Execom26/Anu Raj CS Chair.jpg", linkedinUrl: "https://www.linkedin.com/in/anu-raj-08b2aa367/" },
    { name: "Mohammed Thamjeed KT", position: "VICE CHAIRPERSON", image: "/images/Execom25/thamjeed.png", linkedinUrl: "https://www.linkedin.com/in/mohammed-thamjeed-2ab407334/" },
    { name: "Muhammed Shebin Valangattil Askar", position: "SECRETARY", image: "/images/Execom26/Muhammed Shebin CS Secretary.jpg", linkedinUrl: "https://www.linkedin.com/in/muhammed--shebin/" }
  ],
  "COMSOC CHAPTER": [
    { name: "Parthiv Krishna", position: "CHAIRPERSON", image: "/images/Execom25/parthiv.png", linkedinUrl: "https://www.linkedin.com/in/parthivkrishna/" },
    { name: "Shahabas Ahammed", position: "VICE CHAIRPERSON", image: "/images/Execom26/Shahabas Ahammed COMSOC VC.jpg", linkedinUrl: "https://www.linkedin.com/in/shahabas-ahammed-065146334/" },
    { name: "Sikha V S", position: "SECRETARY", image: "/images/Execom26/SIKHA V S -COMSOC- SECRETARY.jpg", linkedinUrl: "https://www.linkedin.com/in/sikha-v-s-55555b3a3/" }
  ],
  "WIE AFFINITY GROUP": [
    { name: "Fidha Fathima Kiliyamannil", position: "CHAIRPERSON", image: "/images/Execom26/Fidha Fathima Kiliyamannil WIE Chair.jpeg", linkedinUrl: "https://www.linkedin.com/in/fathima-nihala-mp-1154162a2/" },
    { name: "Fathima Nihala M P", position: "VICE CHAIRPERSON", image: "/images/Execom26/Nihala wie vc.jpg", linkedinUrl: "https://www.linkedin.com/in/megha-k-348a24333/" },
    { name: "Megha K", position: "SECRETARY", image: "/images/Execom26/Megha K WIE Secretary.jpg", linkedinUrl: "https://www.linkedin.com/in/famida-cp-b24b4a3b6/" }
  ],
  "SIGHT AFFINITY GROUP": [
    { name: "Adnan Rasheed V", position: "CHAIRPERSON", image: "/images/Execom25/adnan.png", linkedinUrl: "https://www.linkedin.com/in/adnan-rasheed-v-98a549418/" },
    { name: "Pavithra Rajesh", position: "VICE CHAIRPERSON", image: "/images/Execom26/pavithra sight vc.jpg", linkedinUrl: "https://www.linkedin.com/in/pavithra-rajesh-1b83333a4/" },
    { name: "Ayfa Mehrin P", position: "SECRETARY", image: "/images/Execom26/Ayfa Mehrin Secretary of SIGHT.jpeg", linkedinUrl: "https://www.linkedin.com/in/ayfa-mehrin-palapatta-57056b423/" }
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
