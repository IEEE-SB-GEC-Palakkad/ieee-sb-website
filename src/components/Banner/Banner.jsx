import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const Banner = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        const offset = 80; // Height of the floating navbar
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-slate-200/60 py-3"
          : "bg-white/70 backdrop-blur-md border-slate-200/30 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            className="h-11 md:h-13 w-auto object-contain"
            alt="IEEE SB GEC Palakkad"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="text-slate-700 hover:text-sky-600 transition-colors text-sm font-semibold tracking-wide uppercase"
          >
            Home
          </Link>
          <a
            href="/#society"
            onClick={(e) => handleScrollTo(e, "society")}
            className="text-slate-600 hover:text-sky-600 transition-colors text-sm font-semibold tracking-wide uppercase"
          >
            Societies
          </a>
          <a
            href="/#events"
            onClick={(e) => handleScrollTo(e, "events")}
            className="text-slate-600 hover:text-sky-600 transition-colors text-sm font-semibold tracking-wide uppercase"
          >
            Events
          </a>
          <a
            href="/#achievements"
            onClick={(e) => handleScrollTo(e, "achievements")}
            className="text-slate-600 hover:text-sky-600 transition-colors text-sm font-semibold tracking-wide uppercase"
          >
            Achievements
          </a>
          <a
            href="/#gallery"
            onClick={(e) => handleScrollTo(e, "gallery")}
            className="text-slate-600 hover:text-sky-600 transition-colors text-sm font-semibold tracking-wide uppercase"
          >
            Gallery
          </a>
          <a
            href="/#execom"
            onClick={(e) => handleScrollTo(e, "execom")}
            className="text-slate-600 hover:text-sky-600 transition-colors text-sm font-semibold tracking-wide uppercase"
          >
            Execom
          </a>
          <a
            href="/#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="text-slate-600 hover:text-sky-600 transition-colors text-sm font-semibold tracking-wide uppercase"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Nav Button */}
        <button
          onClick={() => setMenu(true)}
          className="lg:hidden text-slate-800 hover:text-sky-600 focus:outline-none transition-colors"
          aria-label="Toggle Menu"
        >
          <i className="bi bi-list text-3xl"></i>
        </button>
      </div>

      {menu && <MobileNavbar menu={menu} setMenu={setMenu} />}
    </header>
  );
};

export default Banner;
