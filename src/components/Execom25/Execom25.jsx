import React from 'react';
import './Execom25.css';
import Heading from "../Heading";
import ExecomMember from "./ExecomMember";

// Import all images
import dhanyaImage from "../../assets/Execom25/DHANYA.webp";
import sreelakshmiImage from "../../assets/Exicom24/edited_execom/sreelakshmi.webp";
import devikaImage from "../../assets/Execom25/Devika.png";
import renyImage from "../../assets/Execom25/Ansaaf.png";
import aleenaImage from "../../assets/Execom25/Ringloo M-Photoroom.png";
import yaduImage from "../../assets/Execom25/Jisto Prakash-Photoroom.png";
import varshaImage from "../../assets/Execom25/NIRANJANA-Photoroom.png";
import namithaImage from "../../assets/Exicom24/edited_execom/NAMITHA.webp";
import ansaafImage from "../../assets/Execom25/SHAFANA N P-Photoroom.png";
import adelineImage from "../../assets/Execom25/Sharfina.png";
import uvaisImage from "../../assets/Exicom24/edited_execom/UVASI.webp";
import lisyImage from "../../assets/Exicom24/edited_execom/lisy.webp";
import rahilImage from "../../assets/Execom25/ADHIL JAHAN M B-Photoroom.png";
import saadImage from "../../assets/Execom25/GAYATHRI J PISHARADY_-Photoroom.png";
import geethuImage from "../../assets/Execom25/FIDHA FATHIMA KILIYAMANNIL_-Photoroom.png";
import madhavImage from "../../assets/Execom25/ADNAN RASHEED V-Photoroom.png";
import sabithaImage from "../../assets/Exicom24/edited_execom/sabitha.webp";
import aliImage from "../../assets/Execom25/MEGHNA C SURESH-Photoroom.png";
import meghanaImage from "../../assets/Execom25/ANU RAJ-Photoroom.png";
import greeshmaImage from "../../assets/Execom25/Aysha Henan jpg-Photoroom.png";
import devikaPImage from "../../assets/Execom25/NayanaG-Photoroom.png";
import vishnuImage from "../../assets/Exicom24/edited_execom/vishnu.webp";
import agnesImage from "../../assets/Execom25/Jemsheena M-Photoroom.png";
import manuelImage from "../../assets/Execom25/Parthiv Krishna-Photoroom.png";
import sarangImage from "../../assets/Execom25/Akshatha R-Photoroom.png";
import hananImage from "../../assets/Execom25/Shahabas-Photoroom.png";
import vinitaImage from "../../assets/Exicom24/edited_execom/vinita.webp";
import archanaImage from "../../assets/Execom25/ASNAKS-Photoroom.png";
import devikaVRImage from "../../assets/Execom25/Ardhra K-Photoroom.png";
import ringlooImage from "../../assets/Execom25/Fadeela-Photoroom.png";
import nandanaImage from "../../assets/Execom25/Sayoojya K S-Photoroom.png";
import abhiramImage from "../../assets/Execom25/Abhiram-Photoroom.png";
import thamjeedImage from "../../assets/Execom25/Thamjeed -Photoroom.png";
import aiswaryaImage from "../../assets/Execom25/ADELINE ANTO-Photoroom.png";
import sreeramImage from "../../assets/Exicom24/edited_execom/Sreeramkrishna.webp";
import asnaImage from "../../assets/Execom25/Uvais.png";
import jubuhanImage from "../../assets/Execom25/Badhra-removebg-preview.png";
import snehaImage from "../../assets/Execom25/Ayush-removebg-preview.png";
import aslamImage from "../../assets/Execom25/Megha-removebg-preview.png";
import aneesImage from "../../assets/Execom25/Aishwarya-removebg-preview.png";
import adithyaImage from "../../assets/Execom25/Athul-removebg-preview.png";
import abhimanueImage from "../../assets/Execom25/Anuja-removebg-preview.png";
import jamsheenaImage from "../../assets/Execom25/Aiswarya-removebg-preview.png";
import niranjanaImage from "../../assets/Execom25/Mohamed_Nihal_T_K_N_24B648-removebg-preview.png";
import gauiriImage from "../../assets/Execom25/Gauirishankar.png";
import gururajImage from "../../assets/Execom25/devapriya-removebg-preview.png";
import parthivImage from "../../assets/Execom25/Aysha-removebg-preview.png";


const Execom25 = () => {
    return (
        <>
            <div className="container">
                <Heading text="EXECOM'25" />

                <div className="execom-sections">
                    {/* IEEE EXECOM Section */}
                    <section>
                        <h2 className="section-heading">IEEE EXECOM</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            <ExecomMember name="DHANYA K M" position="SB COUNSELOR" image={dhanyaImage} linkedinUrl="" />
                            <ExecomMember name="SREELAKSHMI RAM B" position="STUDENT MENTOR" image={sreelakshmiImage} linkedinUrl="" />
                            <ExecomMember name="DEVIKA V R" position="CHAIRPERSON" image={devikaImage} linkedinUrl="" />
                            <ExecomMember name="ANSAAF ANAS" position="VICE CHAIRPERSON" image={renyImage} linkedinUrl="https://www.linkedin.com/in/renymathew" />
                            <ExecomMember name="RINGLOO" position="SECRETARY" image={aleenaImage} linkedinUrl="https://linkedin.com/in/aleena-oralakkottu" />
                            <ExecomMember name="JISTO PRAKASH" position="TREASURER" image={yaduImage} linkedinUrl="https://www.linkedin.com/in/yadurajakrishnanm/" />
                            <ExecomMember name="ABHIRAM K" position="DESIGN LEAD" image={abhiramImage} linkedinUrl="" />
                            <ExecomMember name="NIRANJANA M V" position="CONTENT LEAD" image={varshaImage} linkedinUrl="" />
                            <ExecomMember name="GAUIRI SHANKAR" position="TECHNICAL COORDINATOR" image={gauiriImage} linkedinUrl="https://www.linkedin.com/in/adhiljahan" />
                            <ExecomMember name="SHAFANA N P" position="MDC" image={ansaafImage} linkedinUrl="https://www.linkedin.com/in/ansaaf-anas-03b24a2b1" />
                            <ExecomMember name="SHARFEENA S" position="LINK REPRESENTATIVE" image={adelineImage} linkedinUrl="" />
                            
                        </div>
                    </section>

                    {/* IAS Section */}
                    <section>
                        <h2 className="section-heading">IAS</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            <ExecomMember name="LISY ER" position="CHAPTER ADVISOR" image={lisyImage} linkedinUrl="" />
                            <ExecomMember name="ADHIL JAHAN MB" position="CHAIRPERSON" image={rahilImage} linkedinUrl="https://www.linkedin.com/in/p-y-muhammed-rahil-5a0037241" />
                            <ExecomMember name="GAYATHRI J PISHARADY" position="VICE CHAIRPERSON" image={saadImage} linkedinUrl="" />
                            <ExecomMember name="FIDHA FATHIMA KILIYAMANNIL" position="SECRETARY" image={geethuImage} linkedinUrl="https://www.linkedin.com/in/geethu-v-32ab2b2a1" />
                            <ExecomMember name="ADNAN RASHEED" position="PROGRAM COORDINATOR" image={madhavImage} linkedinUrl="" />
                        </div>
                    </section>

                    {/* CS Section */}
                    <section>
                        <h2 className="section-heading">CS</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            <ExecomMember name="LIJI L DOMINIC" position="CHAPTER ADVISOR" image={""} linkedinUrl="" />
                            <ExecomMember name="MEGHNA SURESH" position="CHAIRPERSON" image={aliImage} linkedinUrl="https://www.linkedin.com/in/muhammedalima/" />
                            <ExecomMember name="ANU RAJ" position="VICE CHAIRPERSON" image={meghanaImage} linkedinUrl="" />
                            <ExecomMember name="AYSHA HENAN" position="SECRETARY" image={greeshmaImage} linkedinUrl="https://www.linkedin.com/in/greeshmavinodh" />
                            <ExecomMember name="NAYANA G" position="WIC" image={devikaPImage} linkedinUrl="https://www.linkedin.com/in/devika-p-dinesh-b54632283" />
                        </div>
                    </section>

                    {/* IES Section */}
                    <section>
                        <h2 className="section-heading">COMSOC</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            <ExecomMember name="RUKSANA N" position="CHAPTER ADVISOR" image={vishnuImage} linkedinUrl="" />
                            <ExecomMember name="JEMSHEENA M" position="CHAIRPERSON" image={agnesImage} linkedinUrl="https://www.linkedin.com/in/agnesdavies" />
                            <ExecomMember name="PARTHIV KRISHNA" position="VICE CHAIRPERSON" image={manuelImage} linkedinUrl="" />
                            <ExecomMember name="AKSHATHA R" position="SECRETARY" image={sarangImage} linkedinUrl="https://www.linkedin.com/in/e-v-sarang-51282a247" />
                            <ExecomMember name="SHAHABAS AHAMMED" position="PROGRAM COORDINATOR" image={hananImage} linkedinUrl="" />
                        </div>
                    </section>

                    {/* WIE Section */}
                    <section>
                        <h2 className="section-heading">WIE</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            <ExecomMember name="DR VINITA CHELLAPPAN" position="CHAPTER ADVISOR" image={vinitaImage} linkedinUrl="" />
                            <ExecomMember name="ASNA K M" position="CHAIRPERSON" image={archanaImage} linkedinUrl="https://www.linkedin.com/in/archana-n-k" />
                            <ExecomMember name="ARDHRA K" position="VICE CHAIRPERSON" image={devikaVRImage} linkedinUrl="https://www.linkedin.com/in/devikavr" />
                            <ExecomMember name="N FADEELA" position="SECRETARY" image={ringlooImage} linkedinUrl="https://www.linkedin.com/in/ringloo-m-a7bb3329b" />
                        </div>
                    </section>

                    {/* SIGHT Section */}
                    <section>
                        <h2 className="section-heading">SIGHT</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            <ExecomMember name="DR VINITA CHELLAPPAN" position="CHAPTER ADVISOR" image={vinitaImage} linkedinUrl="" />
                            <ExecomMember name="SAYOOJYA K S" position="CHAIRPERSON" image={nandanaImage} linkedinUrl="https://www.linkedin.com/in/nandana-vs" />
                            <ExecomMember name="MOHAMMED THAMJEED K T " position="VICE CHAIRPERSON" image={thamjeedImage} linkedinUrl="" />
                            <ExecomMember name="ADELINE ANTO" position="SECRETARY" image={aiswaryaImage} linkedinUrl="https://www.linkedin.com/in/aiswarya-p-365738280" />
                        </div>
                    </section>

                    {/* Teams Heading */}
                    <Heading text="TEAMS" />

                    {/* WEB TEAM Section */}
                    <section>
                        <h2 className="section-heading">WEB TEAM</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            <ExecomMember name="NIHAL" position="" image={niranjanaImage} linkedinUrl="https://www.linkedin.com/in/jubuhan" />
                            <ExecomMember name="UVAIS" position="" image={asnaImage} linkedinUrl="" />
                            <ExecomMember name="AISWARYA" position="" image={jamsheenaImage} linkedinUrl="https://www.linkedin.com/in/mohammed-aslam-71079a27b" />
                        </div>
                    </section>

                    {/* DESIGN TEAM Section */}
                    <section>
                        <h2 className="section-heading">DESIGN TEAM</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            <ExecomMember name="NAYANA" position="" image={""} linkedinUrl="" />
                            <ExecomMember name="AYSHA" position="" image={parthivImage} linkedinUrl="" />
                            <ExecomMember name="BHADRA" position="" image={jubuhanImage} linkedinUrl="" />
                        </div>
                    </section>

                    {/* CONTENT TEAM Section */}
                    <section>
                        <h2 className="section-heading">CONTENT TEAM</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            <ExecomMember name="AISWARYA A C" position="" image={aneesImage} linkedinUrl="" />
                            <ExecomMember name="AYUSH" position="" image={snehaImage} linkedinUrl="" />
                            <ExecomMember name="DEVAPRIYA" position="" image={gururajImage} linkedinUrl="" />
                            <ExecomMember name="MEGHA" position="" image={aslamImage} linkedinUrl="" />
                        </div>
                    </section>

                    {/* MEDIA TEAM Section */}
                    <section>
                        <h2 className="section-heading">MEDIA TEAM</h2>
                        <div className="flex flex-wrap justify-center items-center">
                            <ExecomMember name="ANUJA" position="" image={abhimanueImage} linkedinUrl="" />
                            <ExecomMember name="ATHULKRISHNA" position="" image={adithyaImage} linkedinUrl="" />
                            <ExecomMember name="SHAHLA" position="" image={""} linkedinUrl="" />
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Execom25;