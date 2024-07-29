import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero_wrapper">
        <div className="container p-10">
          <div className="column md:w-1/3 flex flex-col justify-center items-center sm:items-start">
            <h1 className="text-3xl hero_h1 sm:text-4xl">IEEE SB</h1>
            <h2 className="text-xl hero_h2 sm:text-2xl">GEC PALAKKAD</h2>
            <a
              href="https://ieee.org"
              className="btn my-3 px-4 rounded-full shadow-md hover:text-white"
            >
              Join IEEE
            </a>
          </div>
          <div className="column md:w-2/3">
            <p>
              The IEEE Student Branch of Government Engineering College
              Palakkad, Kerala continuously works to enhance the proficiency of
              each and every student in the institution as well as the locality
              in becoming more comfortable with enhancing technologies via
              talks, workshops and competitions. We work for providing an ideal
              platform for young minds to nourish their technical skills as an
              engineer by providing a technical home.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
