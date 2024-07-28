import React from "react";
import Achievements from "../components/Achievements/Achievements";
import Banner from "../components/Banner/Banner";
import Events from "../components/Events/Events";
import Societies from "../components/Socities/Societies";
import Welcome from "../components/Welcome/Welcome";
import Upthinq from "../components/Upthinq/Upthinq";
import Hero from "../components/Hero/Hero";
import GallerySection from "../components/GallerySection/GallerySection";
import Spacer from "@/components/Spacer";

const HomePage = () => {
  return (
    <>
      <Spacer />
      <Hero />
      <Spacer />
      {/* <Banner /> */}
      <Societies />
      <Spacer />
      <Events />
      <Spacer />
      <Achievements/>
      <Spacer />
      <GallerySection />
      {/* <Welcome/> */}
      {/* <Upthinq/> */}
      {/* <Gallery/> */}
    </>
  );
};

export default HomePage;
