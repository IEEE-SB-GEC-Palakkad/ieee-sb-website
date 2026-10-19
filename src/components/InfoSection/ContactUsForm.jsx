import React, { useState } from "react";
import { Linkedin, Instagram, Send } from "lucide-react";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `IEEE SB GEC PKD Website - Message from ${formData.fullName}`;
    const body = `Name: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    const mailtoLink = `mailto:ieee@gecskp.ac.in?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="w-full md:w-[48%] bg-white border border-slate-200/80 rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <h3 className="text-slate-800 font-bold text-lg sm:text-xl tracking-wider uppercase font-monument mb-2">
          SEND US A MESSAGE
        </h3>

        {/* Full Name */}
        <div className="flex flex-col">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b-2 border-slate-200 focus:border-sky-500 placeholder:text-slate-400 py-3 text-slate-800 focus:outline-none transition-colors duration-200 text-sm font-semibold tracking-wide"
          />
        </div>

        {/* E-mail */}
        <div className="flex flex-col">
          <input
            type="email"
            name="email"
            placeholder="E-mail Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b-2 border-slate-200 focus:border-sky-500 placeholder:text-slate-400 py-3 text-slate-800 focus:outline-none transition-colors duration-200 text-sm font-semibold tracking-wide"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full bg-transparent border-b-2 border-slate-200 focus:border-sky-500 placeholder:text-slate-400 py-3 text-slate-800 focus:outline-none transition-colors duration-200 text-sm font-semibold tracking-wide resize-none"
          />
        </div>

        {/* Button & Socials Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-slate-100">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f172a] hover:bg-sky-600 text-white font-semibold rounded-md shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wider uppercase"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/ieeesbgecpkd/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-50 hover:bg-sky-50 text-slate-500 hover:text-sky-600 border border-slate-100 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/ieeesbgecpkd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-50 hover:bg-rose-50 text-slate-500 hover:text-rose-600 border border-slate-100 transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
