import "./Societies.css";
import cs from "../../assets/images/cs.png";
import com from "../../assets/images/com.png";
import ias from "../../assets/images/ias.png";
import wie from "../../assets/images/wie.png";
import sight from "../../assets/images/sight.png";
import Globe from "@/components/magicui/globe";
import Heading from "../Heading";
import SocietyCard from "../SocietyCard";

const Societies = () => {
  const societiesData = [
    { 
      image: cs, 
      name: "Computer Society", 
      link1: "https://www.linkedin.com/company/ieee-cs-sbc-gec-palakkad/", 
      link2: "https://www.instagram.com/ieeecsgecpkd?igsh=a3k4ZXdwenZrYXdt"
    },
    { 
      image: com, 
      name: "Communications Society", 
      link1: "https://www.linkedin.com/company/ieee-ias-sb-chapter-gec-palakkad/", 
      link2: "https://www.instagram.com/ieeecomsocgecpalakkad?igsh=MXh1Z3Blc3AxbWU0cw=="
    },
    { 
      image: ias, 
      name: "IAS Society", 
      link1: "https://www.linkedin.com/company/ieee-ias-sb-chapter-gec-palakkad/", 
      link2: "https://www.instagram.com/ieeeiasgecpkd?igsh=MXFqdDl4M3E5a25naw=="
    },
    { 
      image: wie, 
      name: "WIE", 
      link1: "https://www.linkedin.com/company/ieee-wie-sb-chapter-gec-palakkad/", 
      link2: "https://www.instagram.com/ieeewiegecpalakkad?igsh=eWRvdGpnd3Z2N2J5"
    },
    { 
      image: sight, 
      name: "SIGHT", 
      link1: "https://www.linkedin.com/company/ieee-sight-sb-chapter-gec-palakkad/", 
      link2: "https://www.instagram.com/ieeesightgecpkd?igsh=MXRxdHY1djVqOXlhbA=="
    },
  ];

  return (
    <>
      <div id="society" className="societies-section relative container">
        {/* <Globe className="absolute left-[-50%]" /> */}
        <div className="society">
          <Heading text="SOCIETIES" />
        </div>

        <div className="socities-list flex flex-wrap flex-row justify-center items-center">
          {societiesData.map((society, index) => (
            <SocietyCard 
              key={index}
              image={society.image} 
              name={society.name}
              link1={society.link1}
              link2={society.link2}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Societies;