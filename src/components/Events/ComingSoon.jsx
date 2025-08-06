import "./comingsoon.css";
import eventData from "../../helpers/events.json";
import { Link } from "react-router-dom";
import React from "react";

function ComingSoon() {
  return (
    <div className="pic-align">
        <h1 className="bounce-heading">ONGOING EVENT</h1>
      <h1 className="heading">REISE 2025</h1>
      <h1 class="heading">August 7 - 8 2025</h1>
      <a href="#events" className="glow-button">Know more</a>


    </div>
  );
}

export default ComingSoon;
