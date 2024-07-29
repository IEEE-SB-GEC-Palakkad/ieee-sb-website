import React from "react";
import ContactUsForm from "./ContactUsForm";
import GoogleMap from "./GoogleMap";

const InfoSection = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="md:flex justify-between space-y-16 md:space-y-0 mb-8">
          <ContactUsForm />
          <GoogleMap />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
