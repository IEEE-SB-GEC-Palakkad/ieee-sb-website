import { useSpring, animated } from "@react-spring/web";
import React from "react";

import "../MobileNavbar/MobileNavbar.css";
import { Link } from "react-router-dom";

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
          <Link onClick={() => setMenu(false)} to="/">
            Home
          </Link>
          <a onClick={() => setMenu(false)} href="/#events">
            Events
          </a>
          <a onClick={() => setMenu(false)} href="/#achievements">
            Achivements
          </a>
          <a onClick={() => setMenu(false)} href="/#society">
            Societies
          </a>
          <a onClick={() => setMenu(false)} href="/#gallery">
            Gallery
          </a>
          <a onClick={() => setMenu(false)} href="/#execom">
            Execom
          </a>
          <a onClick={() => setMenu(false)} href="/#contact">
            Contact
          </a>
          <a onClick={() => setMenu(false)} href="/blog">
            Blog
          </a>
        </div>
      </animated.div>
    </>
  );
};

export default MobileNavbar;
