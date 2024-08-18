import React from "react";
import "./Achievements.css";
import AchievementsData from "../../helpers/Achievements.json";
import left from "../../assets/images/left.png";
import right from "../../assets/images/right.png";
import Heading from "../Heading";
import AchievementCard from "../AchievementCard";
import { MENU_CONTROL } from "../../constants/achivementConstants";

const Achievements = () => {
  const [achivementIndex, setAchievementIndex] = React.useState(0);
  const achivementCount = AchievementsData?.[0]?.length;
  const handleAchivementIndex = (control = MENU_CONTROL.RIGHT) => {
    if (control === MENU_CONTROL.RIGHT) {
      setAchievementIndex((prev) => (prev + 1) % achivementCount);
    } else if (control === MENU_CONTROL.LEFT) {
      setAchievementIndex((prev) =>
        prev === 0 ? achivementCount - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <div className="events container">
        <div className="event-details hidden sm:flex">
          <div className="border-2 shadow-2xl h-96 w-72 flex justify-center items-center rounded-xl">
            <img
              src={AchievementsData?.[0]?.[achivementIndex]?.img}
              className="w-full h-full rounded-lg object-cover"
              alt=""
            />
          </div>
          <div className="event-contents flex justify-center items-end">
            <Heading text="ACHIEVEMENTS" className="sm:!text-right w-full" />
            <h3 className="event-name border-b-4 border-slate-600 float-none sm:!text-right ">
              {AchievementsData?.[0]?.[achivementIndex]?.name}
            </h3>
            <p className="event-description text-right">
              {AchievementsData?.[0]?.[achivementIndex]?.details}
            </p>
            <div className="nav-btn">
              <button onClick={() => handleAchivementIndex(MENU_CONTROL.LEFT)}>
                <img src={left} className="w-10 my-2" alt="" />
              </button>
              <button
                onClick={() => handleAchivementIndex(MENU_CONTROL.RIGHT)}
              >
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
              details={Achievement.details}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Achievements;
