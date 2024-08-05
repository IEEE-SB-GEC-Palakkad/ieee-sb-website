import React from 'react';
import linkdin_icon from "../Execom24/Lindin_Icon.png"


const ExecomMember = ({ name, position, image, linkedinUrl }) => {
  return (
    <div className="execom-member">
      <div className="execom-image">
        <img src={image} className="execom-person" alt={name} />
      </div>
      <div className="execom-text-container">
        <div className="execom-name">{name}</div>
        <div className="execom-position">{position}</div>
        <div className="execom-link-space">
          <a href={linkedinUrl} className="execom-social-link">
            <img src={linkdin_icon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExecomMember;