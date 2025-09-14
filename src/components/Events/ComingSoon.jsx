import "./comingsoon.css";
import eventData from "../../helpers/events.json";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Image from "/images/eventexe.png";

function ComingSoon() {
  // Target date
  const targetDate = new Date("2025-09-26T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft <= 0) {
    return (
      <div className="row con">
        <div className="col-12 col-md-6 text-center bg-light">
          <img src={Image} alt="Coming Soon" className="img-fluid" />
        </div>
        <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center bg-dark">
          <div className="countdown-text">Time's up!</div>
          <a to="src\components\Excelsior2025\excelsior25.html" target="_blank" className="btn btn-primary mt-3">
            Register Here
          </a>
        </div>
      </div>
    );
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="row con">
      {/* Left column with image */}
      <div className="col-12 col-md-6 text-center bg-light">
        <img src={Image} alt="Coming Soon" className="img-fluid" />
      </div>

      {/* Right column with countdown */}
      <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
        <div className="countdown-text">
          {days}d {hours}h {minutes}m {seconds}s
        </div>
        <Link to="src\components\Excelsior2025\excelsior25.html" target="_blank" className="btn btn-primary mt-3">
          Register Here
        </Link>
      </div>
    </div>
  );
}

export default ComingSoon;
