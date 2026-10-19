import React from "react";
import ContactUsForm from "./ContactUsForm";
import GoogleMap from "./GoogleMap";

const InfoSection = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 px-6 sm:px-12 md:px-20 bg-white"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between gap-8 w-full items-stretch">
          <ContactUsForm />
          <GoogleMap />
        </div>

        {/* Editorial Footer Note */}
        <div className="mt-20 pt-8 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium uppercase tracking-widest">
          <div>
            © {new Date().getFullYear()} IEEE Student Branch GEC Palakkad. All
            rights reserved.
          </div>
          <div className="flex gap-6">
            <a
              href="https://ieee.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 transition-colors"
            >
              IEEE Org
            </a>
            <a
              href="https://ieeexplore.ieee.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 transition-colors"
            >
              IEEE Xplore
            </a>
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 transition-colors"
            >
              Membership
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
