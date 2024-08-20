import React from 'react';
import './SocietyCard.css';
import linkdin_icon from "../components/Execom24/Lindin_Icon.png"
import insta_icon from "../components/ui/pngwing.com.png"

const SocietyCard = (props) => {
  return (
    <div className="society-card">
      <div className="card-content">
        <img src={props.image} alt={props.name} className="main-image" />
      </div>
      <div className="hover-content">
        <a href={props.link1} target="_blank" rel="noopener noreferrer">
          <img src={linkdin_icon} alt={`${props.name} link 1`} className="hover-image" />
        </a>
        <a href={props.link2} target="_blank" rel="noopener noreferrer">
          <img src={insta_icon} alt={`${props.name} link 2`} className="hover-image" />
        </a>
      </div>
    </div>
  );
};

export default SocietyCard;