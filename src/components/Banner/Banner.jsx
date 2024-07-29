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
        <div className="container navbar_wrapper my-4">
          <div className="">
            <img src={logo} className="" alt="logo" />
          </div>
          <div className="navbar_links_wrapper">
            <div className="navbar_links">
              <p>Home</p>
              <p>Events</p>
              <p>Achivements</p>
              <p>Societies</p>
              <p>Gallery</p>
              <p>Execom</p>
              <p>Contact</p>
            </div>
            <div className="navbar_line"></div>
          </div>
          <i onClick={() => setMenu(true)} className="bi bi-list"></i>
        </div>


        {menu && <MobileNavbar menu={menu} setMenu={setMenu} />}
      </div>
    </>
  );
};

export default Banner;
