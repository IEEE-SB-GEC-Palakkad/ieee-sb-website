import React, { useRef, useEffect } from "react";

const InteractiveGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let mouse = { x: -1000, y: -1000 };

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const container = canvas.parentElement;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(15, 23, 42, 0.05)"; // Slate-900 with 5% opacity
      ctx.lineWidth = 1;

      const gridSize = 45;
      const influenceRadius = 180;
      const pullStrength = 18;

      // Draw vertical lines warped
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y < canvas.height; y += 8) {
          let drawX = x;
          let drawY = y;

          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < influenceRadius) {
            const force = (1 - dist / influenceRadius) * pullStrength;
            drawX += (dx / dist) * force;
          }

          if (y === 0) {
            ctx.moveTo(drawX, drawY);
          } else {
            ctx.lineTo(drawX, drawY);
          }
        }
        ctx.stroke();
      }

      // Draw horizontal lines warped
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 8) {
          let drawX = x;
          let drawY = y;

          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < influenceRadius) {
            const force = (1 - dist / influenceRadius) * pullStrength;
            drawY += (dy / dist) * force;
          }

          if (x === 0) {
            ctx.moveTo(drawX, drawY);
          } else {
            ctx.lineTo(drawX, drawY);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

const Hero = () => {
  return (
    <section className="relative w-full pt-28 pb-16 sm:min-h-[85vh] sm:flex sm:items-center sm:justify-center bg-white px-6 sm:px-12 md:px-20 overflow-hidden border-b border-slate-100">
      <InteractiveGrid />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start gap-6 sm:gap-8">
        <div className="flex flex-col gap-2 max-w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl sm:rounded-full bg-slate-100 text-slate-800 text-[10px] sm:text-xs font-semibold uppercase tracking-wider max-w-full leading-normal">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse shrink-0"></span>
            <span>Government Engineering College Palakkad</span>
          </div>
        </div>

        <h1 className="text-[#0f172a] font-monument font-bold text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] sm:leading-[1.1] tracking-tight max-w-6xl">
          IEEE SB GEC PALAKKAD
        </h1>

        <p className="text-lg sm:text-2xl font-light text-[#0f172a] border-l-2 border-sky-500 pl-4 py-1 italic max-w-4xl">
          Nourishing Technical Minds, Providing a Technical Home.
        </p>

        <p className="text-sm sm:text-lg md:text-xl text-[#334155] font-light leading-relaxed max-w-4xl mt-2 sm:mt-4">
          The IEEE Student Branch of Government Engineering College Palakkad,
          Kerala continuously works to enhance the proficiency of each and every
          student in the institution as well as the locality in becoming more
          comfortable with enhancing technologies via talks, workshops and
          competitions. We work to provide an ideal platform for young minds to
          nourish their technical skills as an engineer by providing a technical
          home.
        </p>

        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mt-4 sm:mt-6">
          <a
            href="https://www.ieee.org"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-8 py-3 bg-[#0f172a] hover:bg-sky-600 text-white font-semibold rounded-md shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
          >
            Join IEEE
          </a>
          <a
            href="#society"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("society");
              if (el) {
                const offset = 80;
                window.scrollTo({
                  top:
                    el.getBoundingClientRect().top +
                    window.pageYOffset -
                    offset,
                  behavior: "smooth"
                });
              }
            }}
            className="w-full sm:w-auto text-center px-8 py-3 bg-white hover:bg-slate-50 text-[#0f172a] font-semibold rounded-md border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
          >
            Explore Societies
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
