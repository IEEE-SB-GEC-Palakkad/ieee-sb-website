import "./Banner.css";
import { useState } from "react";

import logo from "../../assets/images/logo.png";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import caroselImg from '../../assets/images/carosel.png'

const Banner = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="banner_wrapper">
        <div className="container navbar_wrapper">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="navbar_links_wrapper">
            <div className="navbar_links">
              <p>Home</p>
              <p>Events</p>
              <p>Achivements</p>
              <p>Societies</p>
              <p>Upthinq</p>
              <p>Gallery</p>
              <p>Excom</p>
              <p>Contact</p>
            </div>
            <div className="navbar_line"></div>
          </div>
          <i onClick={() => setMenu(true)} className="bi bi-list"></i>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 carosel_wrapper">
              <img src={caroselImg} alt="carosel" />
            </div>
            <div className="col-lg-6 welcome_wrapper">
              <h2>Welcome to</h2>
              <h1>Our Family</h1>
              <button>Join IEEE</button>
            </div>
          </div>
        </div>

        {menu && <MobileNavbar menu={menu} setMenu={setMenu} />}
      </div>
    </>
  );
};

export default Banner;
