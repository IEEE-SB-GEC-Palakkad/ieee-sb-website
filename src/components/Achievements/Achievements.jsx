import React from "react";
import "./Achievements.css";
import AchievementsData from "../../helpers/Achievements.json";
import left from "../../assets/images/left.png";
import right from "../../assets/images/right.png";
import Heading from "../Heading";
import AchievementCard from "../AchievementCard";

const Achievements = () => {
  const [Achievements, setAchievements] = React.useState([0]);

  return (
    <>
      <div className="events container">
        <div className="event-details hidden sm:flex">
          <div className="event-image border-2 shadow-2xl h-96 w-72 flex justify-center items-center">
            <img src={AchievementsData[0][Achievements].img} className="w-full" alt="" />
          </div>
          <div className="event-contents flex justify-center items-end">
            <Heading text="ACHIEVEMENTS" className="sm:!text-right w-full" />
            <h3 className="event-name border-b-4 border-slate-600 float-none sm:!text-right ">
              {AchievementsData[0][Achievements].name}
            </h3>
            <p className="event-description text-right">
              {AchievementsData[0][Achievements].details}
            </p>
            <div className="event-explore">
              <button className="btn my-3 px-4 rounded-full shadow-md hover:text-white bg-[#00567D]">
                Explore
              </button>
            </div>
            <div className="nav-btn">
              <button
                onClick={() => setAchievements(Math.abs(Achievements - 1) % 3)}
              >
                <img src={left} className="w-10 my-2" alt="" />
              </button>
              <button onClick={() => setAchievements((Achievements + 1) % 3)}>
                <img src={right} className="w-10 mx-3 my-2" alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="event-list-mobile flex flex-row flex-wrap justify-center items-center sm:hidden">
          <Heading text="ACHIEVEMENTS" />

          {AchievementsData[0].map((Achievement, index) => (
            <AchievementCard
              key={index}
              image={Achievement.img}
              name={Achievement.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Achievements;
