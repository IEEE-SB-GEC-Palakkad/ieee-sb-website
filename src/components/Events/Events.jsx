import React from "react";
import "./Events.css";
import eventData from "../../helpers/events.json";
import left from "../../assets/images/left.png";
import right from "../../assets/images/right.png";
import Heading from "../Heading";
import EventCard from "../EventCard";

const Events = () => {
  const [events, setEvents] = React.useState([0]);

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
            <div className="event-explore">
              {/* <button className="btn my-3 px-4 rounded-full shadow-md hover:text-white bg-[#00567D]">
                Explore
              </button> */}
            </div>
            <div className="nav-btn">
              <button onClick={() => setEvents(Math.abs(events - 1) % 3)}>
                <img src={left} className="w-10 my-2" alt="" />
              </button>
              <button onClick={() => setEvents((events + 1) % 3)}>
                <img src={right} className="w-10 mx-3 my-2" alt="" />
              </button>
            </div>
          </div>
          <div className="event-image w-1/3 flex justify-center items-center">
            <img src={eventData[0][events].img} className="w-full" alt="" />
          </div>
        </div>

        <div className="event-list-mobile flex flex-row flex-wrap justify-center items-center sm:hidden">
          {eventData[0].map((event, index) => (
            <EventCard key={index} image={event.img} name={event.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
