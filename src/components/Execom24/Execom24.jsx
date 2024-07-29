import Heading from "../Heading"
import exe1 from "../../assets/images/exe1.jpeg"
import exe2 from "../../assets/images/exe2.jpeg"
import exe3 from "../../assets/images/exe3.jpeg"
import wie from "../../assets/images/exe_wie.jpeg"
import cs from "../../assets/images/exe_cs.jpeg"
import sight from "../../assets/images/exe_sig.jpeg"
import com from "../../assets/images/exe_com.jpeg"
import teams from "../../assets/images/exe_teams.jpeg"
import ias from "../../assets/images/exe_ias.jpeg"


const Execom24 = () => {

    return (
        <>
        <div className="container">
            <Heading text="EXECOM'24" />
            <div className="flex flex-wrap flex-row justify-between items-center">
                <img src={exe1} alt="execom24" className="w-1/4 m-2 rounded-lg shadow-lg" />
                <img src={exe2} alt="execom24" className="w-1/4 m-2 rounded-lg shadow-lg" />
                <img src={exe3} alt="execom24" className="w-1/4 m-2 rounded-lg shadow-lg" />

                <img src={cs} alt="execom24" className="w-1/4 m-2 rounded-lg shadow-lg" />
                <img src={wie} alt="execom24" className="w-1/4 m-2 rounded-lg shadow-lg" />
                <img src={sight} alt="execom24" className="w-1/4 m-2 rounded-lg shadow-lg" />
                <img src={com} alt="execom24" className="w-1/4 m-2 rounded-lg shadow-lg" />
                <img src={teams} alt="execom24" className="w-1/4 m-2 rounded-lg shadow-lg" />
                <img src={ias} alt="execom24" className="w-1/4 m-2 rounded-lg shadow-lg" />
            </div>
        </div>
        </>
    )

}

export default Execom24