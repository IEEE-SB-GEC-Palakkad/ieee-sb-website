import React, { useState } from 'react';

// Import your social media icons
import linkedinIcon from '../../components/Execom24/Lindin_Icon.png';
import instagramIcon from '../../components/ui/pngwing.com.png';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = `Message from ${formData.fullName}`;
    const body = `Name: ${formData.fullName}
Email: ${formData.email}

Message:
${formData.message}`;

    const mailtoLink = `mailto:ieee@gecskp.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black md:w-[44%] p-4 shadow-form-card rounded-lg">
      <input 
        type="text" 
        name="fullName" 
        placeholder="Full Name" 
        value={formData.fullName}
        onChange={handleChange}
        required
        className="bg-white border-b-[3px] border-[#757575] placeholder:tracking-wider font-semibold text-lg md:text-xl placeholder:text-[#757575] py-2 focus:outline-none focus-visible:outline-1 focus:border-[#2C84C5]"
      />
      <input 
        type="email" 
        name="email" 
        placeholder="E-mail" 
        value={formData.email}
        onChange={handleChange}
        required
        className="bg-white border-b-[3px] border-[#757575] placeholder:tracking-wider font-semibold text-lg md:text-xl placeholder:text-[#757575] py-2 focus:outline-none focus-visible:outline-1 focus:border-[#2C84C5]"
      />
      <textarea 
        name="message" 
        placeholder="Message" 
        value={formData.message}
        onChange={handleChange}
        required
        className="bg-white border-b-[3px] border-[#757575] placeholder:tracking-wider font-semibold text-lg md:text-xl placeholder:text-[#757575] py-2 focus:outline-none focus-visible:outline-1 focus:border-[#2C84C5]"
      />
      <div className="flex items-center justify-between mt-4">
        <button 
          type="submit" 
          className="bg-button-gradient py-2 px-3 rounded-[100vmax] font-semibold text-lg text-white active:scale-[0.98]"
        >
          Contact Us
        </button>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/company/ieeesbgecpkd/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/ieeesbgecpkd?igsh=MXh3MGRvcDdzZmZmMw==" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </form>
  );
};

export default ContactUsForm;