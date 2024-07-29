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
  return (
    <>
      <div id="society" className="societies-section relative container">
        {/* <Globe className="absolute left-[-50%]" /> */}
        <div className="society">
          <Heading text="SOCIETIES" />
        </div>

        <div className="socities-list flex flex-wrap flex-row justify-center items-center">
          <SocietyCard image={cs} name="Computer Society" />
          <SocietyCard image={com} name="Communications Society" />
          <SocietyCard image={ias} name="IAS Society" />
          <SocietyCard image={wie} name="WIE" />
          <SocietyCard image={sight} name="SIGHT" />
        </div>
      </div>
    </>
  );
};

export default Societies;
