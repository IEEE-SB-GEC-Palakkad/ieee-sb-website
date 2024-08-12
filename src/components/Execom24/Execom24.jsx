import './Execom24.css'
import Heading from "../Heading"
import com from "../../assets/images/exe_com.jpeg"
import ExecomMember from "./ExecomMember"

const Execom24 = () => {
    return (
      <>
        <div className="container">
          <Heading text="EXECOM'24" />
          
          <div className="execom-sections">
            <section>
              <h2 className="section-heading">IEEE EXECOM</h2>
              <div className="flex flex-wrap justify-center items-center">
                <ExecomMember 
                  name="DR DHANYA KM"
                  position="SB COUNSELOR"
                  image='src\assets\images\Exicom24\edited_execom\DHANYA.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="SREELAKSHMI RAM "
                  position="STUDENT MENTOR"
                  image='src\assets\images\Exicom24\edited_execom\sreelakshmi.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="THULASI J PISHARADI"
                  position="CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\THULASI.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="RENY MATHEW"
                  position="VICE CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\RENY.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="ALEENA OK"
                  position="SECRETARY"
                  image='src\assets\images\Exicom24\edited_execom\aleena.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="YADURAJAKRISHNA"
                  position="TREASURER"
                  image='src\assets\images\Exicom24\edited_execom\Yadu.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="SANDRA KANNAN"
                  position="DESIGN LEAD"
                  image='src\assets\images\Exicom24\edited_execom\sandra.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="VARSHA PRASAD"
                  position="CONTENT LEAD"
                  image='src\assets\images\Exicom24\edited_execom\VARHSA.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="ADHIL JAHAN"
                  position="TECHNICAL CORDINATOR"
                  image='src\assets\images\Exicom24\edited_execom\adil.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="NAMITHA"
                  position="ALUMINI NETWORK COORDINATOR"
                  image='src\assets\images\Exicom24\edited_execom\NAMITHA.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="ANSAAF"
                  position="MDC"
                  image='src\assets\images\Exicom24\edited_execom\ansaf.png'
                  linkedinUrl="https://www.linkedin.com/in/anothername"
                />
                <ExecomMember 
                  name="ADELINE ANTO"
                  position="LINK REPRESENTATIVE"
                  image='src\assets\images\Exicom24\edited_execom\adline.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="UVAIS J"
                  position="WEB MASTER"
                  image='src\assets\images\Exicom24\edited_execom\UVASI.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                {/* Add more ExecomMember components for the Executive Committee */}
              </div>
            </section>

            <section>
              <h2 className="section-heading">IAS</h2>
              <div className="flex flex-wrap justify-center items-center">
                <ExecomMember 
                  name="LISY ER"
                  position="CHAPTER ADVISOR"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/techperson1"
                />
                <ExecomMember 
                  name="MUHAMMED RAHIL"
                  position="CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\RAHIL.png'
                  linkedinUrl="https://www.linkedin.com/in/techperson2"
                />
                <ExecomMember 
                  name="MUHAMMED SAAD"
                  position="VICE CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\SAAD.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="GEETHU"
                  position="SECRETARY"
                  image='src\assets\images\Exicom24\edited_execom\GEETHU.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="MAHAV S NAIR"
                  position="PROGRAM COORDINATOR"
                  image='src\assets\images\Exicom24\edited_execom\MADHAV.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                {/* Add more ExecomMember components for the Technical Team */}
              </div>
            </section>
            <section>
              <h2 className="section-heading">CS</h2>
              <div className="flex flex-wrap justify-center items-center">
                <ExecomMember 
                  name="DR SABITHA S"
                  position="CHAPTER ADVISOR"
                  image='src\assets\images\Exicom24\edited_execom\sabitha.png'
                  linkedinUrl="https://www.linkedin.com/in/techperson1"
                />
                <ExecomMember 
                  name="MUHAMMED ALI M"
                  position="CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\ali.png'
                  linkedinUrl="https://www.linkedin.com/in/techperson2"
                />
                <ExecomMember 
                  name="MEGHANA C SURESH"
                  position="VICE CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\MEGHNA.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="GREESHMA V"
                  position="SECRETARY"
                  image='src\assets\images\Exicom24\edited_execom\GREESHMA.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="ANU RAJ"
                  position="PROGRAM COORDINATOR"
                  image='src\assets\images\Exicom24\edited_execom\anuraj.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="DEVIKA P DINESH"
                  position="WIC"
                  image='src\assets\images\Exicom24\edited_execom\DEVIKAP.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                {/* Add more ExecomMember components for the Technical Team */}
              </div>
            </section>
            <section>
              <h2 className="section-heading">IAS</h2>
              <div className="flex flex-wrap justify-center items-center">
                <ExecomMember 
                  name="VISHNUPRESHAD K"
                  position="CHAPTER ADVISOR"
                  image='src\assets\images\Exicom24\edited_execom\vishnu.png'
                  linkedinUrl="https://www.linkedin.com/in/techperson1"
                />
                <ExecomMember 
                  name="AGNES DAVIES"
                  position="CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\agnes.png'
                  linkedinUrl="https://www.linkedin.com/in/techperson2"
                />
                <ExecomMember 
                  name="MANNUAL DOMNY"
                  position="VICE CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\MANUEL.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="E V SARANG"
                  position="SECRETARY"
                  image='src\assets\images\Exicom24\edited_execom\SARNG.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="HANAN MUHAMMED"
                  position="PROGRAM COORDINATOR"
                  image='src\assets\images\Exicom24\edited_execom\HANAN.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                {/* Add more ExecomMember components for the Technical Team */}
              </div>
            </section>
            <section>
              <h2 className="section-heading">WIE</h2>
              <div className="flex flex-wrap justify-center items-center">
                <ExecomMember 
                  name="DR VINITA CHELLAPPAN"
                  position="CHAPTER ADVISOR"
                  image='src\assets\images\Exicom24\edited_execom\vinita.png'
                  linkedinUrl="https://www.linkedin.com/in/techperson1"
                />
                <ExecomMember 
                  name="ARCHANA NK"
                  position="CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\Archana.png'
                  linkedinUrl="https://www.linkedin.com/in/techperson2"
                />
                <ExecomMember 
                  name="DEVIKA VR"
                  position="VICE CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\devika.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="RINGLOO M"
                  position="SECRETARY"
                  image='src\assets\images\Exicom24\edited_execom\RINGLOO.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="GAURI PARVATHY"
                  position="PROGRAM COORDINATOR"
                  image='src\assets\images\Exicom24\edited_execom\GOURI.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                {/* Add more ExecomMember components for the Technical Team */}
              </div>
            </section>
            <section>
              <h2 className="section-heading">SIGHT</h2>
              <div className="flex flex-wrap justify-center items-center">
                <ExecomMember 
                  name="DR VINITA CHELLAPPAN"
                  position="CHAPTER ADVISOR"
                  image='src\assets\images\Exicom24\edited_execom\vinita.png'
                  linkedinUrl="https://www.linkedin.com/in/techperson1"
                />
                <ExecomMember 
                  name="NANDANA VS"
                  position="CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\nandana.png'
                  linkedinUrl="https://www.linkedin.com/in/techperson2"
                />
                <ExecomMember 
                  name="ABHIRAM K"
                  position="VICE CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\abhiram.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="AISWARYA P"
                  position="SECRETARY"
                  image='src\assets\images\Exicom24\edited_execom\aiswarya.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="SREERAM"
                  position="TREASUREE"
                  image='src\assets\images\Exicom24\edited_execom\Sreeramkrishna.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="ASNA K S"
                  position="PROGRAM COORDINATOR"
                  image='src\assets\images\Exicom24\edited_execom\ASNA.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                {/* Add more ExecomMember components for the Technical Team */}
              </div>
            </section>
            <Heading text="TEAMS" />
            <section>
              <h2 className="section-heading">WEB TEAM</h2>
              <div className="flex flex-wrap justify-center items-center">
                <ExecomMember 
                  name="JUBUHAN"
                  position=''
                  image='src\assets\images\Exicom24\edited_execom\JUBHAN.png'
                  linkedinUrl="https://www.linkedin.com/in/techperson1"
                />
                <ExecomMember 
                  name="SNEHA S"
                  position=""
                  image='src\assets\images\Exicom24\edited_execom\sneha.png'
                  linkedinUrl="https://www.linkedin.com/in/techperson2"
                />
                <ExecomMember 
                  name="MUHAMMED ASLAM"
                  position=""
                  image='src\assets\images\Exicom24\edited_execom\aslam.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                {/* Add more ExecomMember components for the Technical Team */}
              </div>
            </section>
            <section>
              <h2 className="section-heading">DESIGN TEAM</h2>
              <div className="flex flex-wrap justify-center items-center">
                <ExecomMember 
                  name="MUHAMMED ANEES"
                  position=""
                  image='src\assets\images\Exicom24\edited_execom\anees.png'
                  linkedinUrl="https://www.linkedin.com/in/techperson1"
                />
                <ExecomMember 
                  name="ADITHYA K"
                  position=""
                  image='src\assets\images\Exicom24\edited_execom\ADITHYA.png'
                  linkedinUrl="https://www.linkedin.com/in/techperson2"
                />
                {/* Add more ExecomMember components for the Technical Team */}
              </div>
            </section>
            <section>
              <h2 className="section-heading">CONTENT TEAM</h2>
              <div className="flex flex-wrap justify-center items-center">
                <ExecomMember 
                  name="ABHIMANUE JR"
                  position=""
                  image='src\assets\images\Exicom24\edited_execom\ABHI.png'
                  linkedinUrl="https://www.linkedin.com/in/techperson1"
                />
                <ExecomMember 
                  name="JAMSHEENA M"
                  position=""
                  image='src\assets\images\Exicom24\edited_execom\jemsheena.png'
                  linkedinUrl="https://www.linkedin.com/in/techperson2"
                />
                <ExecomMember 
                  name="NIRANJANA MV"
                  position=""
                  image='src\assets\images\Exicom24\edited_execom\niranjana.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                {/* Add more ExecomMember components for the Technical Team */}
              </div>
            </section>
            <section>
              <h2 className="section-heading">WEB TEAM</h2>
              <div className="flex flex-wrap justify-center items-center">
                <ExecomMember 
                  name="AADHIL SH"
                  position=""
                  image='src\assets\images\Exicom24\edited_execom\adhil.png'
                  linkedinUrl="https://www.linkedin.com/in/techperson1"
                />
                <ExecomMember 
                  name="GURURAJ L"
                  position=""
                  image='src\assets\images\Exicom24\edited_execom\GURURAJ.png'
                  linkedinUrl="https://www.linkedin.com/in/techperson2"
                />
                <ExecomMember 
                  name="PARTHIV KRISHNA"
                  position=""
                  image='src\assets\images\Exicom24\edited_execom\Parthiv.png'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                {/* Add more ExecomMember components for the Technical Team */}
              </div>
            </section>



            
            {/* Add more sections as needed */}
          </div>
        </div>
      </>
    );
}

export default Execom24