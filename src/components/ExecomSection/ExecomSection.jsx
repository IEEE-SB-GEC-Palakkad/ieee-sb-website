import SectionHeading from "../SectionHeading";
import Heading from "../Heading";
import { Link } from "react-router-dom";

const ExecomSection = () => {
  return (
    <section id="execom" className="text-black w-full">
      <div className="container mx-auto">
        <Heading text="EXECOM" />
        <div className="flex flex-wrap justify-around md:justify-between gap-8">
          <ExecomBox year="2024" to="/execom" />
          <ExecomBox year="2023" to="#" />
          <ExecomBox year="2022" to="#" />
        </div>
      </div>
    </section>
  );
};

const ExecomBox = ({ year, to }) => {
  return (
    <Link
      to={to}
      className="w-[43%] md:w-[27%] aspect-[0.95/1] shadow-execom-card flex items-center justify-center"
    >
      <h3 className="text-[#595959] font-bold text-[20px] md:text-xl sm:text-4xl text-center">
        Execom
        <br />
        {year ?? "Nan"}
      </h3>
    </Link>
  );
};

export default ExecomSection;
