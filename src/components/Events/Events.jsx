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
  const [fullscreen, setFullscreen] = useState(false);
  
  
  const totalEvents = eventData[0].length;

  
  const handleViewPdf = () => {
    setShowPdf(!showPdf);
    
    if (fullscreen) setFullscreen(false);
  };

  
  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  // Handle navigation with correct modulo arithmetic
  const handlePrevious = () => {
    setEvents((prevEvent) => (prevEvent - 1 + totalEvents) % totalEvents);
  };

  const handleNext = () => {
    setEvents((prevEvent) => (prevEvent + 1) % totalEvents);
  };


  const fixImagePath = (path) => {
    if (!path) return "";
    if (path.startsWith("images/")) return path;
    if (path.includes("src")) return path.replace("../../src/", "/");
    return path;
  };

  return (
    <>
    
      {fullscreen && showPdf && eventData[0][events].pdf && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="relative w-full h-full max-w-7xl max-h-screen p-4">
            <button 
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 z-10 bg-red-600 text-white p-2 rounded-full"
            >
              ✕
            </button>
            <iframe
              src={eventData[0][events].pdf}
              title={`PDF for ${eventData[0][events].name}`}
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      )}

      <div id="events" className="events container">
        <Heading text="EVENTS" />
        <div className="event-details hidden sm:flex">
          <div className="event-contents w-2/3">
            <h3 className="event-name border-b-4 border-slate-600">
              {eventData[0][events].name}
            </h3>
            <p className="event-description">{eventData[0][events].details}</p>  
            {eventData[0][events].pdf && (
              <div className="event-pdf flex space-x-2">
                <button 
                  onClick={handleViewPdf} 
                  className="btn my-3 px-4 rounded-full shadow-md hover:text-white bg-[#00567D]"
                >
                  {showPdf ? "Hide PDF" : "View PDF"}
                </button>
                
                {showPdf && (
                  <button 
                    onClick={toggleFullscreen} 
                    className="btn my-3 px-4 rounded-full shadow-md hover:text-white bg-[#005F8D]"
                  >
                    {fullscreen ? "Exit Fullscreen" : "Fullscreen PDF"}
                  </button>
                )}
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
              enableFullscreen={true}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;