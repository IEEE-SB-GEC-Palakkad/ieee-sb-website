import React, { useState } from "react";
import "./Events.css";
import eventData from "../../helpers/events.json";
import left from "../../assets/images/left.png";
import right from "../../assets/images/right.png";
import Heading from "../Heading";
import EventCard from "../EventCard";

const Events = () => {
  const [events, setEvents] = useState(0);
  const [showPdf, setShowPdf] = useState(false);
  
  // Calculate total number of events for correct navigation
  const totalEvents = eventData[0].length;

  // Handle viewing PDF
  const handleViewPdf = () => {
    setShowPdf(!showPdf);
  };

  // Handle navigation with correct modulo arithmetic
  const handlePrevious = () => {
    setEvents((prevEvent) => (prevEvent - 1 + totalEvents) % totalEvents);
  };

  const handleNext = () => {
    setEvents((prevEvent) => (prevEvent + 1) % totalEvents);
  };

  // Helper function to fix image paths
  const fixImagePath = (path) => {
    if (!path) return "";
    if (path.startsWith("images/")) return path;
    if (path.includes("src")) return path.replace("../../src/", "/");
    return path;
  };

  return (
    <>
      <div id="events" className="events container">
        <Heading text="EVENTS" />
        <div className="event-details hidden sm:flex">
          <div className="event-contents w-2/3">
            <h3 className="event-name border-b-4 border-slate-600">
              {eventData[0][events].name}
            </h3>
            <p className="event-description">{eventData[0][events].details}</p>
            
            {/* PDF button - only show if the current event has a PDF */}
            {eventData[0][events].pdf && (
              <div className="event-pdf">
                <button 
                  onClick={handleViewPdf} 
                  className="btn my-3 px-4 rounded-full shadow-md hover:text-white bg-[#00567D]"
                >
                  {showPdf ? "Hide PDF" : "View PDF"}
                </button>
              </div>
            )}
            
            <div className="nav-btn">
              <button onClick={handlePrevious}>
                <img src={left} className="w-10 my-2" alt="" />
              </button>
              <button onClick={handleNext}>
                <img src={right} className="w-10 mx-3 my-2" alt="" />
              </button>
            </div>
          </div>
          <div className="event-image w-1/3 flex justify-center items-center">
            {/* Display PDF or image based on state */}
            {showPdf && eventData[0][events].pdf ? (
              <div className="pdf-container w-full h-full">
                <iframe
                  src={eventData[0][events].pdf}
                  title={`PDF for ${eventData[0][events].name}`}
                  className="w-full h-full"
                  style={{ minHeight: "400px" }}
                ></iframe>
              </div>
            ) : (
              <img 
                src={fixImagePath(eventData[0][events].img)} 
                className="w-full" 
                alt="" 
              />
            )}
          </div>
        </div>

        <div className="event-list-mobile flex flex-row flex-wrap justify-center items-center sm:hidden">
          {eventData[0].map((event, index) => (
            <EventCard 
              key={index} 
              image={fixImagePath(event.img)}
              name={event.name} 
              pdf={event.pdf} 
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;