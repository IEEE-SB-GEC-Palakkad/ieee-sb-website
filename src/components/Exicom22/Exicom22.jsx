
import Heading from "../Heading"
import sb22 from "../../assets/images/Exicom22/exc22SB.webp"
import cs_ias22 from "../../assets/images/Exicom22/exc22CsIAs.webp"
import com_wig22 from "../../assets/images/Exicom22/exc22WigCOMS.webp"
import Banner from "../Banner/Banner"
const Execom22 = () => {

    return (
      <>
        <Banner />
        <div className="container">
          <Heading text="EXECOM'22" />
          <div className="flex flex-wrap flex-row justify-center items-center">
            <img
              src={sb22}
              alt="execom22"
              className="w-full md:w-1/2 m-2 rounded-lg shadow-lg"
            />
            <img
              src={cs_ias22}
              alt="execom22"
              className="w-full md:w-1/2 m-2 rounded-lg shadow-lg"
            />
            <img
              src={com_wig22}
              alt="execom22"
              className="w-full md:w-1/2 m-2 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </>
    );

}

export default Execom22