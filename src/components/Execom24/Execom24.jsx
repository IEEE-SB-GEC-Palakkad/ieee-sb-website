import React from 'react';
import './Execom24.css';
import Heading from "../Heading";
import ExecomMember from "./ExecomMember";

// Import all images
import dhanyaImage from "../../assets/images/Exicom24/edited_execom/DHANYA.png";
import sreelakshmiImage from "../../assets/images/Exicom24/edited_execom/sreelakshmi.png";
import thulasiImage from "../../assets/images/Exicom24/edited_execom/THULASI.png";
import renyImage from "../../assets/images/Exicom24/edited_execom/RENY.png";
import aleenaImage from "../../assets/images/Exicom24/edited_execom/aleena.png";
import yaduImage from "../../assets/images/Exicom24/edited_execom/Yadu.png";
import sandraImage from "../../assets/images/Exicom24/edited_execom/sandra.png";
import varshaImage from "../../assets/images/Exicom24/edited_execom/VARHSA.png";
import adhilImage from "../../assets/images/Exicom24/edited_execom/adil.png";
import namithaImage from "../../assets/images/Exicom24/edited_execom/NAMITHA.png";
import ansaafImage from "../../assets/images/Exicom24/edited_execom/ansaf.png";
import adelineImage from "../../assets/images/Exicom24/edited_execom/adline.png";
import uvaisImage from "../../assets/images/Exicom24/edited_execom/UVASI.png";
import lisyImage from "../../assets/images/Exicom24/edited_execom/lisy.png";
import rahilImage from "../../assets/images/Exicom24/edited_execom/RAHIL.png";
import saadImage from "../../assets/images/Exicom24/edited_execom/SAAD.png";
import geethuImage from "../../assets/images/Exicom24/edited_execom/GEETHU.png";
import madhavImage from "../../assets/images/Exicom24/edited_execom/MADHAV.png";
import sabithaImage from "../../assets/images/Exicom24/edited_execom/sabitha.png";
import aliImage from "../../assets/images/Exicom24/edited_execom/ali.png";
import meghanaImage from "../../assets/images/Exicom24/edited_execom/MEGHNA.png";
import greeshmaImage from "../../assets/images/Exicom24/edited_execom/GREESHMA.png";
import anurajImage from "../../assets/images/Exicom24/edited_execom/anuraj.png";
import devikaPImage from "../../assets/images/Exicom24/edited_execom/DEVIKAP.png";
import vishnuImage from "../../assets/images/Exicom24/edited_execom/vishnu.png";
import agnesImage from "../../assets/images/Exicom24/edited_execom/agnes.png";
import manuelImage from "../../assets/images/Exicom24/edited_execom/MANUEL.png";
import sarangImage from "../../assets/images/Exicom24/edited_execom/SARNG.png";
import hananImage from "../../assets/images/Exicom24/edited_execom/HANAN.png";
import vinitaImage from "../../assets/images/Exicom24/edited_execom/vinita.png";
import archanaImage from "../../assets/images/Exicom24/edited_execom/Archana.png";
import devikaVRImage from "../../assets/images/Exicom24/edited_execom/devika.png";
import ringlooImage from "../../assets/images/Exicom24/edited_execom/RINGLOO.png";
import gauriImage from "../../assets/images/Exicom24/edited_execom/GOURI.png";
import nandanaImage from "../../assets/images/Exicom24/edited_execom/nandana.png";
import abhiramImage from "../../assets/images/Exicom24/edited_execom/abhiram.png";
import aiswaryaImage from "../../assets/images/Exicom24/edited_execom/aiswarya.png";
import sreeramImage from "../../assets/images/Exicom24/edited_execom/Sreeramkrishna.png";
import asnaImage from "../../assets/images/Exicom24/edited_execom/ASNA.png";
import jubuhanImage from "../../assets/images/Exicom24/edited_execom/JUBHAN.png";
import snehaImage from "../../assets/images/Exicom24/edited_execom/sneha.png";
import aslamImage from "../../assets/images/Exicom24/edited_execom/aslam.png";
import aneesImage from "../../assets/images/Exicom24/edited_execom/anees.png";
import adithyaImage from "../../assets/images/Exicom24/edited_execom/ADITHYA.png";
import abhimanueImage from "../../assets/images/Exicom24/edited_execom/ABHI.png";
import jamsheenaImage from "../../assets/images/Exicom24/edited_execom/jemsheena.png";
import niranjanaImage from "../../assets/images/Exicom24/edited_execom/niranjana.png";
import aadhilImage from "../../assets/images/Exicom24/edited_execom/adhil.png";
import gururajImage from "../../assets/images/Exicom24/edited_execom/GURURAJ.png";
import parthivImage from "../../assets/images/Exicom24/edited_execom/Parthiv.png";

const Execom24 = () => {
    return (
        <>
            <div className="container">
                <Heading text="EXECOM'24" />

                <div className="execom-sections">
                    {/* IEEE EXECOM Section */}
                    <section>
                        <h2 className="section-heading">IEEE EXECOM</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            <ExecomMember name="DR DHANYA KM" position="SB COUNSELOR" image={dhanyaImage} linkedinUrl="" />
                            <ExecomMember name="SREELAKSHMI RAM" position="STUDENT MENTOR" image={sreelakshmiImage} linkedinUrl="" />
                            <ExecomMember name="THULASI J PISHARADI" position="CHAIRPERSON" image={thulasiImage} linkedinUrl="" />
                            <ExecomMember name="RENY MATHEW" position="VICE CHAIRPERSON" image={renyImage} linkedinUrl="https://www.linkedin.com/in/renymathew" />
                            <ExecomMember name="ALEENA OK" position="SECRETARY" image={aleenaImage} linkedinUrl="https://linkedin.com/in/aleena-oralakkottu" />
                            <ExecomMember name="YADURAJAKRISHNA" position="TREASURER" image={yaduImage} linkedinUrl="https://www.linkedin.com/in/yadurajakrishnanm/" />
                            <ExecomMember name="SANDRA KANNAN" position="DESIGN LEAD" image={sandraImage} linkedinUrl="" />
                            <ExecomMember name="VARSHA PRASAD" position="CONTENT LEAD" image={varshaImage} linkedinUrl="" />
                            <ExecomMember name="ADHIL JAHAN" position="TECHNICAL COORDINATOR" image={adhilImage} linkedinUrl="https://www.linkedin.com/in/adhiljahan" />
                            <ExecomMember name="NAMITHA" position="ALUMNI NETWORK COORDINATOR" image={namithaImage} linkedinUrl="" />
                            <ExecomMember name="ANSAAF" position="MDC" image={ansaafImage} linkedinUrl="https://www.linkedin.com/in/ansaaf-anas-03b24a2b1" />
                            <ExecomMember name="ADELINE ANTO" position="LINK REPRESENTATIVE" image={adelineImage} linkedinUrl="" />
                            <ExecomMember name="UVAIS J" position="WEB MASTER" image={uvaisImage} linkedinUrl="" />
                        </div>
                    </section>

                    {/* IAS Section */}
                    <section>
                        <h2 className="section-heading">IAS</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            <ExecomMember name="LISY ER" position="CHAPTER ADVISOR" image={lisyImage} linkedinUrl="" />
                            <ExecomMember name="MUHAMMED RAHIL" position="CHAIRPERSON" image={rahilImage} linkedinUrl="https://www.linkedin.com/in/p-y-muhammed-rahil-5a0037241" />
                            <ExecomMember name="MUHAMMED SAAD" position="VICE CHAIRPERSON" image={saadImage} linkedinUrl="" />
                            <ExecomMember name="GEETHU" position="SECRETARY" image={geethuImage} linkedinUrl="https://www.linkedin.com/in/geethu-v-32ab2b2a1" />
                            <ExecomMember name="MAHAV S NAIR" position="PROGRAM COORDINATOR" image={madhavImage} linkedinUrl="" />
                        </div>
                    </section>

                    {/* CS Section */}
                    <section>
                        <h2 className="section-heading">CS</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            <ExecomMember name="DR SABITHA S" position="CHAPTER ADVISOR" image={sabithaImage} linkedinUrl="" />
                            <ExecomMember name="MUHAMMED ALI M" position="CHAIRPERSON" image={aliImage} linkedinUrl="https://www.linkedin.com/in/muhammedalima/" />
                            <ExecomMember name="MEGHANA C SURESH" position="VICE CHAIRPERSON" image={meghanaImage} linkedinUrl="" />
                            <ExecomMember name="GREESHMA V" position="SECRETARY" image={greeshmaImage} linkedinUrl="https://www.linkedin.com/in/greeshmavinodh" />
                            <ExecomMember name="ANU RAJ" position="PROGRAM COORDINATOR" image={anurajImage} linkedinUrl="https://www.linkedin.com/in/anu-raj-11aba7322" />
                            <ExecomMember name="DEVIKA P DINESH" position="WIC" image={devikaPImage} linkedinUrl="https://www.linkedin.com/in/devika-p-dinesh-b54632283" />
                        </div>
                    </section>

                    {/* IES Section */}
                    <section>
                        <h2 className="section-heading">IES</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            <ExecomMember name="VISHNUPRESHAD K" position="CHAPTER ADVISOR" image={vishnuImage} linkedinUrl="" />
                            <ExecomMember name="AGNES DAVIES" position="CHAIRPERSON" image={agnesImage} linkedinUrl="https://www.linkedin.com/in/agnesdavies" />
                            <ExecomMember name="MANNUAL DOMNY" position="VICE CHAIRPERSON" image={manuelImage} linkedinUrl="" />
                            <ExecomMember name="E V SARANG" position="SECRETARY" image={sarangImage} linkedinUrl="https://www.linkedin.com/in/e-v-sarang-51282a247" />
                            <ExecomMember name="HANAN MUHAMMED" position="PROGRAM COORDINATOR" image={hananImage} linkedinUrl="" />
                        </div>
                    </section>

                    {/* WIE Section */}
                    <section>
                        <h2 className="section-heading">WIE</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            <ExecomMember name="DR VINITA CHELLAPPAN" position="CHAPTER ADVISOR" image={vinitaImage} linkedinUrl="" />
                            <ExecomMember name="ARCHANA NK" position="CHAIRPERSON" image={archanaImage} linkedinUrl="https://www.linkedin.com/in/archana-n-k" />
                            <ExecomMember name="DEVIKA VR" position="VICE CHAIRPERSON" image={devikaVRImage} linkedinUrl="https://www.linkedin.com/in/devikavr" />
                            <ExecomMember name="RINGLOO M" position="SECRETARY" image={ringlooImage} linkedinUrl="https://www.linkedin.com/in/ringloo-m-a7bb3329b" />
                            <ExecomMember name="GAURI PARVATHY" position="PROGRAM COORDINATOR" image={gauriImage} linkedinUrl="https://www.linkedin.com/in/gauri-parvathy-64a576211" />
                        </div>
                    </section>

                    {/* SIGHT Section */}
                    <section>
                        <h2 className="section-heading">SIGHT</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            <ExecomMember name="DR VINITA CHELLAPPAN" position="CHAPTER ADVISOR" image={vinitaImage} linkedinUrl="" />
                            <ExecomMember name="NANDANA VS" position="CHAIRPERSON" image={nandanaImage} linkedinUrl="https://www.linkedin.com/in/nandana-vs" />
                            <ExecomMember name="ABHIRAM K" position="VICE CHAIRPERSON" image={abhiramImage} linkedinUrl="" />
                            <ExecomMember name="AISWARYA P" position="SECRETARY" image={aiswaryaImage} linkedinUrl="https://www.linkedin.com/in/aiswarya-p-365738280" />
                            <ExecomMember name="SREERAM" position="TREASURER" image={sreeramImage} linkedinUrl="https://www.linkedin.com/in/sreeramkrishna-ks-724344283" />
                            <ExecomMember name="ASNA K S" position="PROGRAM COORDINATOR" image={asnaImage} linkedinUrl="https://www.linkedin.com/in/asna-k-s-38639b2b0" />
                        </div>
                    </section>

                    {/* Teams Heading */}
                    <Heading text="TEAMS" />

                    {/* WEB TEAM Section */}
                    <section>
                        <h2 className="section-heading">WEB TEAM</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            <ExecomMember name="JUBUHAN" position="" image={jubuhanImage} linkedinUrl="https://www.linkedin.com/in/jubuhan" />
                            <ExecomMember name="SNEHA S" position="" image={snehaImage} linkedinUrl="" />
                            <ExecomMember name="MUHAMMED ASLAM" position="" image={aslamImage} linkedinUrl="https://www.linkedin.com/in/mohammed-aslam-71079a27b" />
                        </div>
                    </section>

                    {/* DESIGN TEAM Section */}
                    <section>
                        <h2 className="section-heading">DESIGN TEAM</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            <ExecomMember name="MUHAMMED ANEES" position="" image={aneesImage} linkedinUrl="" />
                            <ExecomMember name="ADITHYA K" position="" image={adithyaImage} linkedinUrl="" />
                        </div>
                    </section>

                    {/* CONTENT TEAM Section */}
                    <section>
                        <h2 className="section-heading">CONTENT TEAM</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            <ExecomMember name="ABHIMANUE JR" position="" image={abhimanueImage} linkedinUrl="" />
                            <ExecomMember name="JAMSHEENA M" position="" image={jamsheenaImage} linkedinUrl="" />
                            <ExecomMember name="NIRANJANA MV" position="" image={niranjanaImage} linkedinUrl="" />
                        </div>
                    </section>

                    {/* MEDIA TEAM Section */}
                    <section>
                        <h2 className="section-heading">MEDIA TEAM</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            <ExecomMember name="AADHIL SH" position="" image={aadhilImage} linkedinUrl="" />
                            <ExecomMember name="GURURAJ L" position="" image={gururajImage} linkedinUrl="" />
                            <ExecomMember name="PARTHIV KRISHNA" position="" image={parthivImage} linkedinUrl="" />
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Execom24;