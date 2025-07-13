import "./comingsoon.css";
import eventData from "../../helpers/events.json";
import { Link } from "react-router-dom";
import React from "react";

function ComingSoon() {
  return (
    <div className="pic-align">
        <h1 className="bounce-heading">UPCOMING EVENT</h1>
      <img className="event-pic" src={eventData[0][1].img} alt="Event" />
      <h1>EXCELSIOR 2025</h1>
      <button className="glow-button">Know more</button>
    </div>
  );
}

export default ComingSoon;
