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
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="SREELAKSHMI RAM "
                  position="STUDENT MENTOR"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="THULASI J PISHARADI"
                  position="CHAIRPERSON"
                  image='src\assets\images\Exicom24\IMG-20230901-WA0027(1).jpg'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="RENY MATHEW"
                  position="VICE CHAIRPERSON"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="ALEENA OK"
                  position="SECRETARY"
                  image='src\assets\images\Exicom24\IMG_20240331_115958_082~2.jpg'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="YADURAJAKRISHNA"
                  position="TREASURER"
                  image='src\assets\images\Exicom24\IMG_20240325_195249.jpg'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="SANDRA KANNAN"
                  position="DESIGN LEAD"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="VARSHA PRASAD"
                  position="CONTENT LEAD"
                  image='src\assets\images\Exicom24\IMG_20230323_135424.jpg'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="ADHIL JAHAN"
                  position="TECHNICAL CORDINATOR"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="NAMITHA"
                  position="ALUMINI NETWORK COORDINATOR"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="ANSAAF"
                  position="MDC"
                  image='src\assets\images\Exicom24\1000134318-01.jpeg'
                  linkedinUrl="https://www.linkedin.com/in/anothername"
                />
                <ExecomMember 
                  name="ADELINE ANTO"
                  position="LINK REPRESENTATIVE"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="UVAIS J"
                  position="WEB MASTER"
                  image={com}
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
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/techperson2"
                />
                <ExecomMember 
                  name="MUHAMMED SAAD"
                  position="VICE CHAIRPERSON"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="GEETHU"
                  position="SECRETARY"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="MAHAV S NAIR"
                  position="PROGRAM COORDINATOR"
                  image={com}
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
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/techperson1"
                />
                <ExecomMember 
                  name="MUHAMMED ALI M"
                  position="CHAIRPERSON"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/techperson2"
                />
                <ExecomMember 
                  name="MEGHANA C SURESH"
                  position="VICE CHAIRPERSON"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="GREESHMA V"
                  position="SECRETARY"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="ANU RAJ"
                  position="PROGRAM COORDINATOR"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="DEVIKA P DINESH"
                  position="WIC"
                  image={com}
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
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/techperson1"
                />
                <ExecomMember 
                  name="AGNES DAVIES"
                  position="CHAIRPERSON"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/techperson2"
                />
                <ExecomMember 
                  name="MANNUAL DOMNY"
                  position="VICE CHAIRPERSON"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="E V SARANG"
                  position="SECRETARY"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="HANAN MUHAMMED"
                  position="PROGRAM COORDINATOR"
                  image={com}
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
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/techperson1"
                />
                <ExecomMember 
                  name="ARCHANA NK"
                  position="CHAIRPERSON"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/techperson2"
                />
                <ExecomMember 
                  name="DEVIKA VR"
                  position="VICE CHAIRPERSON"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="RINGLOO M"
                  position="SECRETARY"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="GAURI PARVATHY"
                  position="PROGRAM COORDINATOR"
                  image={com}
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
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/techperson1"
                />
                <ExecomMember 
                  name="NANDANA VS"
                  position="CHAIRPERSON"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/techperson2"
                />
                <ExecomMember 
                  name="ABHIRAM K"
                  position="VICE CHAIRPERSON"
                  image='src\assets\images\Exicom24\IMG-20240331-WA0136.jpg'
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="AISWARYA P"
                  position="SECRETARY"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="SREERAM"
                  position="TREASUREE"
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="ASNA K S"
                  position="PROGRAM COORDINATOR"
                  image='src\assets\images\Exicom24\ASNA.jpg'
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
                  position=""
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/techperson1"
                />
                <ExecomMember 
                  name="SNEHA S"
                  position=""
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/techperson2"
                />
                <ExecomMember 
                  name="MUHAMMED ASLAM"
                  position=""
                  image={com}
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
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/techperson1"
                />
                <ExecomMember 
                  name="ADITHYA K"
                  position=""
                  image={com}
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
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/techperson1"
                />
                <ExecomMember 
                  name="JAMSHEENA M"
                  position=""
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/techperson2"
                />
                <ExecomMember 
                  name="NIRANJANA MV"
                  position=""
                  image={com}
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
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/techperson1"
                />
                <ExecomMember 
                  name="GURURAJ L"
                  position=""
                  image={com}
                  linkedinUrl="https://www.linkedin.com/in/techperson2"
                />
                <ExecomMember 
                  name="PARTHIV KRISHNA"
                  position=""
                  image={com}
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