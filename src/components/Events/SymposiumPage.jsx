import React from "react";
import { Link, useNavigate } from "react-router-dom";
import eventData from "../../helpers/events.json";
import Heading from "../Heading";
import "./SymposiumPage.css";

const SymposiumPage = () => {
  const navigate = useNavigate();
  const symposiumData = eventData[0][0];
  
  const registrationFormUrl = "https://forms.gle/wD9hB9RsrkQBfpMHA";

  const fixImagePath = (path) => {
    if (!path) return "";
    if (path.startsWith("images/")) return path;
    if (path.includes("src")) return path.replace("../../src/", "/");
    return path;
  };

  const handleBackClick = () => {
    navigate("/#events");
  };

  
  const handleDownloadPDF = () => {
    try {
     
      window.open("/pdf/IEEE_Symposium2025_Poster_Template_pdf.pdf", "_blank");
    } catch (error) {
      console.error("Error opening PDF:", error);
      alert("Sorry, there was an issue downloading the PDF. Please try again later.");
    }
  };
  
  // New function to handle zip file download
  const handleDownloadZip = () => {
    try {
      // Use the relative path from the public directory
      window.open("/pdf/IEEE Symposium-2025_Poster Template_LaTeX.zip", "_blank");
    } catch (error) {
      console.error("Error downloading ZIP file:", error);
      alert("Sorry, there was an issue downloading the ZIP file. Please try again later.");
    }
  };
  
  const openRegistrationForm = () => {
    window.open(registrationFormUrl, "_blank");
  };

  return (
    <div className="symposium-page container mx-auto px-4 py-8">
      <button 
        onClick={handleBackClick}
        className="back-button flex items-center text-[#00567D] hover:text-blue-800 mb-6"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Events
      </button>

      <Heading text="IEEE SYMPOSIUM" />
      
      <div className="symposium-content flex flex-col md:flex-row gap-8 mt-6">
        <div className="symposium-image md:w-1/3 flex justify-center">
          <img 
            src="/images/symposium.jpg" 
            alt={symposiumData.name} 
            className="w-full rounded-lg shadow-lg max-w-md"
          />
        </div>
        
        <div className="symposium-details md:w-2/3">
          <h2 className="text-2xl font-bold text-[#00567D] mb-4 border-b-2 border-slate-300 pb-2">
            {symposiumData.name}
          </h2>
          
          <div className="event-description mb-6">
            <p className="text-gray-700 leading-relaxed">
              {symposiumData.details}
            </p>
          </div>
          
          <div className="additional-info bg-blue-900 p-4 rounded-md border border-gray-200 mb-6">
            <h3 className="font-semibold text-lg mb-2 text-white">Event Highlights</h3>
            <ul className="list-disc pl-5 text-gray-200">
            <li><strong>Platform for Innovation:</strong> Present your ideas and projects to a panel of experts.</li>
<li><strong>Expert Evaluation:</strong> Receive constructive feedback from industry professionals.</li>
<li><strong>Networking Opportunities:</strong> Connect with industry leaders and like-minded peers.</li>
<li><strong>Technical Sponsorship:</strong> Supported by IEEE Malabar Subsection.</li>
<li><strong>Organized by:</strong> Department of Electrical Engineering, GEC Palakkad.</li>
<li><strong>Annual Symposium:</strong> A flagship event in association with IEEE Student Branch, GEC Palakkad.</li>
<li><strong>Encouraging Creativity:</strong> Explore emerging technologies with curiosity and innovation.</li>
<li><strong>Paper Submission:</strong> Submit a one-page summary on topics like drives, control, robotics, AI, and computing.</li>
<li><strong>Publication Opportunity:</strong> Selected summaries will be published in the Institute Symposium Proceedings.</li>
<li><strong>Fostering Collaboration:</strong> Engage in insightful discussions and groundbreaking ideas to drive innovation.</li>
            </ul>
          </div>
          
          {symposiumData.pdf && (
            <div className="download-section mt-6 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleDownloadPDF}
                className="download-button bg-[#00567D] text-white py-2 px-6 rounded-full hover:bg-blue-700 shadow-md flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Event Details
              </button>
              
              <button 
                onClick={handleDownloadZip}
                className="download-button bg-[#005F73] text-white py-2 px-6 rounded-full hover:bg-blue-700 shadow-md flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Resources
              </button>
            </div>
          )}
        </div>
      </div>
      
      <div className="registration-info mt-10 p-6 bg-blue-900 rounded-lg border border-blue-100">
        <h3 className="text-xl font-bold text-[#eceff1] mb-4">Registration Information</h3>
        <p className="mb-4 text-gray-200">
          Registration for the IEEE Symposium is now open<br />Join us for this exciting platform to showcase your innovative ideas and projects!
        </p>
        <button 
          onClick={openRegistrationForm}
          className="bg-[#00567D] text-white py-2 px-6 rounded-full hover:bg-blue-700 shadow-md flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Register Now
        </button>
      </div>
    </div>
  );
};

export default SymposiumPage;