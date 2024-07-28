import React from "react";
import Achievements from "../components/Achievements/Achievements";
import Banner from "../components/Banner/Banner";
import Events from "../components/Events/Events";
import Societies from "../components/Socities/Societies";
import Welcome from "../components/Welcome/Welcome";
import Upthinq from "../components/Upthinq/Upthinq";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      {/* <Banner /> */}

      {/* <Welcome/> */}
      <Societies/>
      {/* <Events/>
      <Achievements/>
      <Upthinq/>
      <Gallery/> */}
    </>
  );
};

export default HomePage;
