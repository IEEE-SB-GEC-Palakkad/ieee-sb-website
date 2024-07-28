import "./Societies.css";
import cs from "../../assets/images/cs.png";
import com from "../../assets/images/com.png";
import ias from "../../assets/images/ias.png";
import wie from "../../assets/images/wie.png";
import Globe from "@/components/magicui/globe";

const Societies = () => {
  return (
    <>
      <div className="societies-section">
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Globe
          </span>
          <Globe className="top-28" />
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
        <div className="society">
          <h1>Societies</h1>
        </div>

        <div className="socities-list">
          <div className="soc-card">
            <div className="card">
              <img src={cs} alt="" />
            </div>
            <div className="card-btn">
              <button>Explore</button>
            </div>
          </div>

          <div className="soc-card">
            <div className="card">
              <img src={com} alt="" />
            </div>
            <div className="card-btn">
              <button>Explore</button>
            </div>
          </div>

          <div className="soc-card">
            <div className="card">
              <img src={wie} alt="" />
            </div>
            <div className="card-btn">
              <button>Explore</button>
            </div>
          </div>

          <div className="soc-card">
            <div className="card">
              <img src={ias} alt="" />
            </div>
            <div className="card-btn">
              <button>Explore</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Societies;
