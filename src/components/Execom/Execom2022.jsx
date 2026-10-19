import React from "react";

const EXECOM_2022_PICS = [
  {
    title: "Student Branch Executive Committee",
    img: "/images/Execom22/exc22SB.webp"
  },
  {
    title: "Computer Society & Industry Applications Society",
    img: "/images/Execom22/exc22CsIAs.webp"
  },
  {
    title: "Communications Society & Women In Engineering",
    img: "/images/Execom22/exc22WigCOMS.webp"
  }
];

const Execom2022 = () => {
  return (
    <div className="w-full flex flex-col gap-10 max-w-4xl animate-in fade-in duration-300">
      {EXECOM_2022_PICS.map((pic, idx) => (
        <div
          key={idx}
          className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50 shadow-sm p-4 text-center"
        >
          <h3 className="text-slate-700 font-semibold text-sm md:text-base tracking-wider uppercase font-monument mb-4">
            {pic.title}
          </h3>
          <img
            src={pic.img}
            alt={pic.title}
            className="w-full rounded-lg shadow-sm object-contain max-h-[500px] bg-white border border-slate-200/50"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect width='100%' height='100%' fill='%23f1f5f9'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%2394a3b8'>Execom Photo</text></svg>";
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Execom2022;
