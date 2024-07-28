import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero_wrapper">
        <div className="container p-10">
          <div className="column md:w-1/3">
            <h1 className="text-4xl hero_h1 text-center justify-center items-center sm:text-left">IEEE SB</h1>
            <h2 className="text-2xl hero_h2">GEC PALAKKAD</h2>
            <button className="btn my-3 px-4 rounded-full shadow-md hover:text-white">Join IEEE</button>
          </div>
          <div className="column md:w-2/3">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
