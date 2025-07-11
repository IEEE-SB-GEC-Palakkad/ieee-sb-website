import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Events.css";
import eventData from "../../helpers/events.json";
import left from "../../assets/images/left.png";
import right from "../../assets/images/right.png";
import Heading from "../Heading";
import EventCard from "../EventCard";

const Events = () => {
  const [events, setEvents] = useState(0);

  const [activeCardIndex, setActiveCardIndex] = useState(null);
  
 
  const totalEvents = eventData[0].length;

  
  const handlePrevious = () => {
    setEvents((prevEvent) => (prevEvent - 1 + totalEvents) % totalEvents);
  };

  const handleNext = () => {
    setEvents((prevEvent) => (prevEvent + 1) % totalEvents);
  };

 
  const toggleViewMore = (index) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  
  const fixImagePath = (path) => {
    if (!path) return "";
    if (path.startsWith("images/")) return path;
    if (path.includes("src")) return path.replace("../../src/", "/");
    return path;
  };

  
  const isSymposium = events === 0;

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
            
            {/* View More button - only for IEEE Symposium */}
            <div className="event-actions">
              {isSymposium && (
                <Link 
                  to="/events/symposium" 
                  className="btn my-3 px-4 rounded-full shadow-md hover:text-white bg-[#00567D] inline-block"
                >
                  View 
                </Link>
              )}
            </div>
            
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
            <img 
              src={fixImagePath(eventData[0][events].img)} 
              className="w-full" 
              alt={eventData[0][events].name} 
            />
          </div>
        </div>

        <div className="event-list-mobile flex flex-row flex-wrap justify-center items-center sm:hidden">
          {eventData[0].map((event, index) => (
            <div key={index} onClick={() => toggleViewMore(index)}>
              <EventCard 
                image={fixImagePath(event.img)}
                name={event.name} 
                eventId={index}
                showViewMore={index === 0} 
                symposiumPage={index === 0} 
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
