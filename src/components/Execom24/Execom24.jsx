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
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="SREELAKSHMI RAM "
                  position="STUDENT MENTOR"
                  image='src\assets\images\Exicom24\edited_execom\sreelakshmi.png'
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="THULASI J PISHARADI"
                  position="CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\THULASI.png'
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="RENY MATHEW"
                  position="VICE CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\RENY.png'
                  linkedinUrl="https://www.linkedin.com/in/renymathew"
                />
                <ExecomMember 
                  name="ALEENA OK"
                  position="SECRETARY"
                  image='src\assets\images\Exicom24\edited_execom\aleena.png'
                  linkedinUrl="https://www.linkedin.com/in/p-y-muhammed-rahil-5a0037241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                />
                <ExecomMember 
                  name="YADURAJAKRISHNA"
                  position="TREASURER"
                  image='src\assets\images\Exicom24\edited_execom\Yadu.png'
                  linkedinUrl="https://www.linkedin.com/in/yadurajakrishnanm/"
                />
                <ExecomMember 
                  name="SANDRA KANNAN"
                  position="DESIGN LEAD"
                  image='src\assets\images\Exicom24\edited_execom\sandra.png'
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="VARSHA PRASAD"
                  position="CONTENT LEAD"
                  image='src\assets\images\Exicom24\edited_execom\VARHSA.png'
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="ADHIL JAHAN"
                  position="TECHNICAL CORDINATOR"
                  image='src\assets\images\Exicom24\edited_execom\adil.png'
                  linkedinUrl="linkedin.com/in/adhiljahan"
                />
                <ExecomMember 
                  name="NAMITHA"
                  position="ALUMINI NETWORK COORDINATOR"
                  image='src\assets\images\Exicom24\edited_execom\NAMITHA.png'
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="ANSAAF"
                  position="MDC"
                  image='src\assets\images\Exicom24\edited_execom\ansaf.png'
                  linkedinUrl="https://www.linkedin.com/in/ansaaf-anas-03b24a2b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                />
                <ExecomMember 
                  name="ADELINE ANTO"
                  position="LINK REPRESENTATIVE"
                  image='src\assets\images\Exicom24\edited_execom\adline.png'
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="UVAIS J"
                  position="WEB MASTER"
                  image='src\assets\images\Exicom24\edited_execom\UVASI.png'
                  linkedinUrl=""
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
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="MUHAMMED RAHIL"
                  position="CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\RAHIL.png'
                  linkedinUrl="https://www.linkedin.com/in/p-y-muhammed-rahil-5a0037241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                />
                <ExecomMember 
                  name="MUHAMMED SAAD"
                  position="VICE CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\SAAD.png'
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="GEETHU"
                  position="SECRETARY"
                  image='src\assets\images\Exicom24\edited_execom\GEETHU.png'
                  linkedinUrl="https://www.linkedin.com/in/geethu-v-32ab2b2a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
                />
                <ExecomMember 
                  name="MAHAV S NAIR"
                  position="PROGRAM COORDINATOR"
                  image='src\assets\images\Exicom24\edited_execom\MADHAV.png'
                  linkedinUrl=""
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
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="MUHAMMED ALI M"
                  position="CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\ali.png'
                  linkedinUrl="https://www.linkedin.com/in/muhammedalima/
"
                />
                <ExecomMember 
                  name="MEGHANA C SURESH"
                  position="VICE CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\MEGHNA.png'
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="GREESHMA V"
                  position="SECRETARY"
                  image='src\assets\images\Exicom24\edited_execom\GREESHMA.png'
                  linkedinUrl="www.linkedin.com/in/greeshmavinodh"
                />
                <ExecomMember 
                  name="ANU RAJ"
                  position="PROGRAM COORDINATOR"
                  image='src\assets\images\Exicom24\edited_execom\anuraj.png'
                  linkedinUrl="https://www.linkedin.com/in/ anu-raj-11aba7322"
                />
                <ExecomMember 
                  name="DEVIKA P DINESH"
                  position="WIC"
                  image='src\assets\images\Exicom24\edited_execom\DEVIKAP.png'
                  linkedinUrl="https://www.linkedin.com/in/devika-p-dinesh-b54632283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
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
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="AGNES DAVIES"
                  position="CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\agnes.png'
                  linkedinUrl="https://www.linkedin.com/in/ agnesdavies"
                />
                <ExecomMember 
                  name="MANNUAL DOMNY"
                  position="VICE CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\MANUEL.png'
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="E V SARANG"
                  position="SECRETARY"
                  image='src\assets\images\Exicom24\edited_execom\SARNG.png'
                  linkedinUrl="https://www.linkedin.com/in/e-v-sarang-51282a247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                />
                <ExecomMember 
                  name="HANAN MUHAMMED"
                  position="PROGRAM COORDINATOR"
                  image='src\assets\images\Exicom24\edited_execom\HANAN.png'
                  linkedinUrl=""
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
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="ARCHANA NK"
                  position="CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\Archana.png'
                  linkedinUrl="linkedin.com/in/archana-n-k "
                />
                <ExecomMember 
                  name="DEVIKA VR"
                  position="VICE CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\devika.png'
                  linkedinUrl="www.linkedin.com/in/devikavr"
                />
                <ExecomMember 
                  name="RINGLOO M"
                  position="SECRETARY"
                  image='src\assets\images\Exicom24\edited_execom\RINGLOO.png'
                  linkedinUrl="https://www.linkedin.com/in/ringloo-m-a7bb3329b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
                />
                <ExecomMember 
                  name="GAURI PARVATHY"
                  position="PROGRAM COORDINATOR"
                  image='src\assets\images\Exicom24\edited_execom\GOURI.png'
                  linkedinUrl="https://in.linkedin.com/in/gauri-parvathy-64a576211?original_referer=https%3A%2F%2Fwww.google.com%2F"
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
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="NANDANA VS"
                  position="CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\nandana.png'
                  linkedinUrl="https://www.linkedin.com/in/nandana-vs
"
                />
                <ExecomMember 
                  name="ABHIRAM K"
                  position="VICE CHAIRPERSON"
                  image='src\assets\images\Exicom24\edited_execom\abhiram.png'
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="AISWARYA P"
                  position="SECRETARY"
                  image='src\assets\images\Exicom24\edited_execom\aiswarya.png'
                  linkedinUrl="https://www.linkedin.com/in/aiswarya-p-365738280"
                />
                <ExecomMember 
                  name="SREERAM"
                  position="TREASUREE"
                  image='src\assets\images\Exicom24\edited_execom\Sreeramkrishna.png'
                  linkedinUrl="https://www.linkedin.com/in/sreeramkrishna-ks-724344283"
                />
                <ExecomMember 
                  name="ASNA K S"
                  position="PROGRAM COORDINATOR"
                  image='src\assets\images\Exicom24\edited_execom\ASNA.png'
                  linkedinUrl="https://www.linkedin.com/in/asna-k-s-38639b2b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
                  linkedinUrl="https://www.linkedin.com/in/jubuhan"
                />
                <ExecomMember 
                  name="SNEHA S"
                  position=""
                  image='src\assets\images\Exicom24\edited_execom\sneha.png'
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="MUHAMMED ASLAM"
                  position=""
                  image='src\assets\images\Exicom24\edited_execom\aslam.png'
                  linkedinUrl="https://www.linkedin.com/in/mohammed-aslam-71079a27b"
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
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="ADITHYA K"
                  position=""
                  image='src\assets\images\Exicom24\edited_execom\ADITHYA.png'
                  linkedinUrl=""
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
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="JAMSHEENA M"
                  position=""
                  image='src\assets\images\Exicom24\edited_execom\jemsheena.png'
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="NIRANJANA MV"
                  position=""
                  image='src\assets\images\Exicom24\edited_execom\niranjana.png'
                  linkedinUrl=""
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
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="GURURAJ L"
                  position=""
                  image='src\assets\images\Exicom24\edited_execom\GURURAJ.png'
                  linkedinUrl=""
                />
                <ExecomMember 
                  name="PARTHIV KRISHNA"
                  position=""
                  image='src\assets\images\Exicom24\edited_execom\Parthiv.png'
                  linkedinUrl=""
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