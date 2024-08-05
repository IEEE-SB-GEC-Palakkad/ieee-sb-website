import Heading from "../Heading"
import sb23 from "../../assets/images/Exicome23/exc23_sb.webp"
import cs_ias23 from "../../assets/images/Exicome23/exc23_cs_nd_ias.webp"
import com_wig23 from "../../assets/images/Exicome23/exc23Com_Wig.webp"
import sght23 from "../../assets/images/Exicome23/exc23_sght.webp"
import Banner from "../Banner/Banner"
const Execom23 = () => {

    return (
      <>
        <Banner />
        <div className="container">
          <Heading text="EXECOM'23" />
          <div className="flex flex-wrap flex-row justify-center items-center">
            <img
              src={sb23}
              alt="execom23"
              className="w-full md:w-1/2 m-2 rounded-lg shadow-lg"
            />
            <img
              src={cs_ias23}
              alt="execom23"
              className="w-full md:w-1/2 m-2 rounded-lg shadow-lg"
            />
            <img
              src={com_wig23}
              alt="execom23"
              className="w-full md:w-1/2 m-2 rounded-lg shadow-lg"
            />
            <img
              src={sght23}
              alt="execom23"
              className="w-full md:w-1/2 m-2 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </>
    );

}

export default Execom23