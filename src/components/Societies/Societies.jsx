import React from "react";
import csLogo from "../../assets/images/cs.png";
import comLogo from "../../assets/images/com.png";
import iasLogo from "../../assets/images/ias.png";
import wieLogo from "../../assets/images/wie.png";
import sightLogo from "../../assets/images/sight.png";
import Heading from "../Common/Heading";
import SocietyCard from "./SocietyCard";

const Societies = () => {
  const societiesData = [
    {
      image: csLogo,
      name: "Computer Society",
      fullName: "IEEE Computer Society SBC",
      link1: "https://www.linkedin.com/company/ieee-cs-sbc-gec-palakkad/",
      link2: "https://www.instagram.com/ieeecsgecpkd",
      webpage: "https://www.computer.org/"
    },
    {
      image: comLogo,
      name: "Communications Society",
      fullName: "IEEE Communications Society SBC",
      link1:
        "https://www.linkedin.com/company/ieee-ias-sb-chapter-gec-palakkad/",
      link2: "https://www.instagram.com/ieeecomsocgecpalakkad",
      webpage: "https://www.comsoc.org/"
    },
    {
      image: iasLogo,
      name: "Industry Applications Society",
      fullName: "IEEE IAS SBC",
      link1:
        "https://www.linkedin.com/company/ieee-ias-sb-chapter-gec-palakkad/",
      link2: "https://www.instagram.com/ieeeiasgecpkd",
      webpage: "https://ias.ieee.org/"
    },
    {
      image: wieLogo,
      name: "Women in Engineering",
      fullName: "IEEE WIE Affinity Group",
      link1:
        "https://www.linkedin.com/company/ieee-wie-sb-chapter-gec-palakkad/",
      link2: "https://www.instagram.com/ieeewiegecpalakkad",
      webpage: "https://wie.ieee.org/"
    },
    {
      image: sightLogo,
      name: "SIGHT Affinity Group",
      fullName: "Special Interest Group on Humanitarian Tech",
      link1:
        "https://www.linkedin.com/company/ieee-sight-sb-chapter-gec-palakkad/",
      link2: "https://www.instagram.com/ieeesightgecpkd",
      webpage: "https://sight.ieee.org/"
    }
  ];

  return (
    <section
      id="society"
      className="w-full py-16 px-4 sm:px-12 md:px-20 bg-slate-50 border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center mb-12">
          <Heading text="ORGANIZATIONAL SOCIETIES" className="mb-2" />
          <p className="text-slate-500 text-sm md:text-base font-light text-center max-w-2xl">
            Explore our specialized technical chapters and affinity groups
            dedicated to fostering research, engineering knowledge, and
            humanitarian technology.
          </p>
        </div>

        {/* Uniform Grid Layout - 2 columns on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 justify-items-center mt-10">
          {societiesData.map((society, index) => (
            <SocietyCard
              key={index}
              image={society.image}
              name={society.name}
              fullName={society.fullName}
              link1={society.link1}
              link2={society.link2}
              webpage={society.webpage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Societies;
