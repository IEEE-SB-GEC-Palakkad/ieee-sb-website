import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Reise.css";
function Reise() {
  const open = () => {
    window.open("/pdf/REISE_Brochure.pdf", "_blank");
  }
  return (
    <>
      <div>
        <div class="reise-container">
          <img
            class="images"
            src="/images/reiselogo.png"
            alt="REISE event logo featuring stylized graphics representing science and technology, conveying a sense of innovation and excitement"
          />
          <div class="head">
            <div>
              <strong><h1>Organized by</h1></strong>
              <h1>IEEE SB GEC Palakkad</h1>
            </div>
            <div>
              <h1 class="heading1"> REISE 2025</h1>
              <img
                src="/images/1000158423.jpg"
                alt="Group of students and organizers gathered in a classroom setting, engaged in interactive STEM activities. The environment is lively and collaborative, with posters and lab equipment visible. Text in image: REISE 2025"
              />
            </div>
            <div>
              <strong><h1>In Association with</h1></strong>
              <h1>IEEE Malabar Subsection</h1>
            </div>
          </div>
        </div>
        <div class="head">
          <div class="sc">
            <h1>EXECUTIVE SUMMARY</h1>
            <p>“REISE: Roadmap to Success” is organized by IEEE SB GEC Palakkad in association with the
              IEEE Malabar Subsection as part of the Silver Jubilee Celebrations of GEC Palakkad. This event
              aims to inspire and guide school students toward building a strong foundation for their future
              through experiential learning and interactive sessions.
              The proposed workshop will be conducted over two days — August 7 and 8, 2025 — in the various
              department laboratories of GEC Palakkad. We are expecting around 30 students from Grades 8
              and 9 from nearby schools, coordinated through the Block Resource Center (BRC),
              Kadampuram, Kazhipuram, Palakkad</p>
            <h1>OBJECTIVES</h1>
            <p>The core aim of this program is to introduce school students to the fundamentals of science,
              technology, and career planning through engaging hands-on sessions across different engineering
              domains. Each workshop is curated to bridge the gap between school curriculum and real-world
              applications, thereby nurturing their curiosity and interest in STEM careers. The following are the
              workshops organized under various departments.</p>
            <ul>
              <li>CE : Introduction to mechanical properties, test of materials</li>
              <li>EEE : Introduction to basics of digital electronics</li>
              <li>IT : Introduction to chatbot making</li>
              <li>CSE : Introduction to cybersecurity</li>
              <li>ME : Study of mechanical tools, components and their applications</li>
              <li>ECE : Familiarization of DSO and logic gates</li>
            </ul>
          </div>
        </div>
        <div class="sc">
          <h1>OUR SESSIONS</h1>
          <div>
            <img
              src="/images/1000158877.jpg"
              alt="Students participating in a hands-on science workshop, working together with lab equipment in a bright classroom. The atmosphere is energetic and focused, with facilitators guiding the activities"
            />
            <img
              src="/images/1000159089.jpg"
              alt="Students and instructors collaborating during an engineering session, surrounded by educational posters and tools. The mood is enthusiastic and supportive, highlighting teamwork and learning"
            />
          </div>
        </div>
        <div class="reise-container">
          <button onClick={open} class="btn">For More Details</button>
        </div>
      </div>
    </>
  );
}

export default Reise;
