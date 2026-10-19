import React, { useEffect } from "react";
import Banner from "@/components/Banner/Banner";

const EventsPage = () => {
  useEffect(() => {
    document.title = "Events — IEEE SB GEC Palakkad";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore our upcoming and past technical activities, workshops, competitions, and community outreach events at IEEE Student Branch, GEC Palakkad."
      );
    }
  }, []);

  return (
    <>
      <Banner />
      {/* <iframe src='https://www.instagram.com/p/C9U2FzIPp0d' /> */}
    </>
  );
};

export default EventsPage;
