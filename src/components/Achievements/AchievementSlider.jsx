import React from "react";
import React, { useState, useEffect } from 'react';
import "./Achievements.css";
import AchievementsData from "../../helpers/Achievements.json";



const AchievementsSlider = () => {
    const achievements = AchievementsData["0"]; // Access the data
    const [visibleIndexes, setVisibleIndexes] = useState([]);
  
    useEffect(() => {
      achievements.forEach((_, index) => {
        setTimeout(() => {
          setVisibleIndexes(prevIndexes => [...prevIndexes, index]);
        }, index * 500); // Adjust the delay between each slide-in as needed
      });
    }, [achievements]);
  
    return (
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={`achievement-item ${visibleIndexes.includes(index) ? 'slide-in-right' : 'hidden'}`}
          >
            <img src={achievement.img} alt={achievement.name} style={{ width: '100px', height: '100px' }} />
            <h3>{achievement.name}</h3>
            <p>
              {achievement.details.split('|').map((line, lineIndex) => (
                <span key={lineIndex}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    );
  };
  
  export default AchievementsSlider;
  