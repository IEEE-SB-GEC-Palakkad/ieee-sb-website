import { useSpring, animated } from "@react-spring/web";
import React from "react";

import "../MobileNavbar/MobileNavbar.css";

const MobileNavbar = ({ menu, setMenu }) => {
  const MenuFade = useSpring({
    from: { opacity: 0, position: "fixed", left: "-100%", top: "0" },
    to: {
      opacity: 1,
      left: "0",
    },
  });

  return (
    <>
      <animated.div style={MenuFade} className="movile_navbar_wrapper">
        <div className="container mobile_nav_header">
          <div></div>
          <i onClick={() => setMenu(!menu)} className="bi bi-x x_icon"></i>
        </div>
        <div className="mobile_nav_links">
          <p>Home</p>
          <p>Events</p>
          <p>Achivements</p>
          <p>Societies</p>
          <p>Gallery</p>
          <p>Execom</p>
          <p>Contact</p>
        </div>
      </animated.div>
    </>
  );
};

export default MobileNavbar;
