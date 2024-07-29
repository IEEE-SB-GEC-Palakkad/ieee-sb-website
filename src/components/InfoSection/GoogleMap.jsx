const GoogleMap = () => {
  return (
    <div className="md:w-[40%] space-y-4">
      <h3 className="text-2xl font-medium text-[#757575]">
        Find us on Google Maps
      </h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.792590429096!2d76.43187407488439!3d10.903361589253254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d635151d9b73%3A0xecf06761ecf4f56c!2sGovt.%20Engineering%20College%20Sreekrishnapuram!5e0!3m2!1sen!2sin!4v1722239045811!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen="false"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
