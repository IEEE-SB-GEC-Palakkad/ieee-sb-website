import React from "react";
import Achievements from "../components/Achievements/Achievements";
import Banner from "../components/Banner/Banner";
import Events from "../components/Events/Events";
import Societies from "../components/Socities/Societies";
import Welcome from "../components/Welcome/Welcome";
import Upthinq from "../components/Upthinq/Upthinq";
import Hero from "../components/Hero/Hero";
import ExecomSection from "../components/ExecomSection/ExecomSection";
import GallerySection from "../components/GallerySection/GallerySection";
import InfoSection from "@/components/InfoSection/InfoSection";
import Spacer from "@/components/Spacer";

const HomePage = () => {
  return (
    <>
      <Banner />
      <div className="sm:container sm:px-20 flex flex-col justify-center items-start">
          <Hero />
          <Spacer />
          <Societies />
          <Spacer />
          <Events />
          <Spacer /> 
          <Achievements /> 
          <Spacer />
          <GallerySection />
          <Spacer/>
          <ExecomSection />
          <Spacer/>
          <InfoSection />
          {/* <Upthinq/> */}
          {/* <Gallery/> */}  
      </div>
    </>
  );
};

export default HomePage;
