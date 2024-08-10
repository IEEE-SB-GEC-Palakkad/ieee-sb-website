import "./Banner.css";
import { useState } from "react";

import logo from "../../assets/images/logo.png";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import caroselImg from '../../assets/images/carosel.png'
import { Link } from "react-router-dom";

const Banner = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="banner_wrapper sm:px-12">
        <div className="container navbar_wrapper my-4">
          <Link to="/" className="">
            <img src={logo} className="w-36 md:w-48 lg:w-56" alt="logo" />
          </Link>
          <div className="navbar_links_wrapper">
            <div className="navbar_links">
              <Link to="/">Home</Link>
              <a href="/#events">Events</a>
              <a href="/#achievements">Achivements</a>
              <a href="/#society">Societies</a>
              <a href="/#gallery">Gallery</a>
              <a href="/#execom">Execom</a>
              <a href="/#contact">Contact</a>
              <a href="/blog">Blog</a>
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
