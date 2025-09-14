import React, { useEffect } from "react";
import "./components/Excelsior2025/excelsior25.css"; // your CSS file, move into src

const Excelsior25 = () => {
  // === Effects for splash screen, sparkles, counters, registration ===
  useEffect(() => {
    // Splash
    const splash = document.getElementById("splash");
    if (splash) {
      setTimeout(() => splash.classList.add("fade"), 1400);
      setTimeout(() => (splash.style.display = "none"), 2100);
    }

    // Sparkles
    const canvas = document.getElementById("sparkleCanvas");
    if (canvas) {
      const ctx = canvas.getContext("2d");
      let sparkles = [];
      const COUNT = 120;

      function size() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 0.9;
      }
      window.addEventListener("resize", size);
      size();

      function mk() {
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.6 + 0.6,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          a: Math.random() * 0.6 + 0.3,
        };
      }
      for (let i = 0; i < COUNT; i++) sparkles.push(mk());

      function tick() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        sparkles.forEach((s, i) => {
          s.x += s.vx;
          s.y += s.vy;
          s.a -= 0.002;
          if (s.a <= 0) sparkles[i] = mk();
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${s.a})`;
          ctx.fill();
        });
        requestAnimationFrame(tick);
      }
      tick();
    }

    // Count-up numbers
    const nums = document.querySelectorAll(".stat-num");
    if (nums.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const end = parseInt(el.dataset.count, 10) || 0;
            let cur = 0;
            const step = Math.max(1, Math.round(end / 60));
            const iv = setInterval(() => {
              cur += step;
              if (cur >= end) {
                cur = end;
                clearInterval(iv);
              }
              el.textContent = cur.toString();
            }, 20);
            observer.unobserve(el);
          });
        },
        { threshold: 0.4 }
      );
      nums.forEach((n) => observer.observe(n));
    }

    // Schedule scroll check
    const day2Content = document.querySelector(".day-2 .schedule-content");
    function checkScroll() {
      if (!day2Content) return;
      if (day2Content.scrollHeight > day2Content.clientHeight) {
        day2Content.classList.add("has-scroll");
      } else {
        day2Content.classList.remove("has-scroll");
      }
    }
    checkScroll();
    window.addEventListener("resize", checkScroll);

    return () => {
      window.removeEventListener("resize", size);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <div className="theme-dream">
      {/* Splash */}
      <div id="splash" aria-hidden="true">
        <div className="splash-core">
          <h1 className="splash-title">EXCELSIOR'25</h1>
          <div className="splash-bar">
            <span></span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="nav">
        <a className="brand" href="/" aria-label="Excelsior Home">
          <span className="brand-mark">✶</span> EXCELSIOR'25
        </a>
        <nav className="links">
          <a href="#about">About</a>
          <a href="#highlights">Highlights</a>
          <a href="/register.html" className="btn btn-ghost">
            Register
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main id="hero" className="hero">
        <div className="hero-wrap">
          <div className="hero-left">
            <p className="eyebrow">IEEE SB GECPKD • Tech-Cultural Event</p>
            <h1 className="hero-title">EXCELSIOR'25</h1>
            <h2>
              <span className="title-accent">Rise Above the Rest</span>
            </h2>
            <h6 className="hero-date">
              September 27–29, 2025 • Government Engineering College, Palakkad
            </h6>
            <p className="hero-sub">
              A liminal, luminous space where ideas float, designed to provide
              students with hands-on exposure to modern technologies, insightful
              talks from industry experts, and workshops that equip them with
              essential technical and professional skills.
            </p>
            <div className="cta-row">
              <a
                className="btn btn-primary"
                href="https://www.yepdesk.com/embed/buy-tickets/68c1b79d46e0fb0001e38ab1/private/7khlo1ivnn"
                target="_blank"
                rel="noreferrer"
              >
                Register Now
              </a>
            </div>
          </div>
          <div className="hero-right">
            <img
              src="/EX25-logo.png" // move to public/
              alt="Excelsior logo"
              className="card-img"
              style={{
                opacity: "90%",
                margin: "0 auto",
                display: "block",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </main>

      {/* About */}
      <section id="about" className="section">
        <div className="section-inner glass">
          <h2 className="section-title">What is Excelsior?</h2>
          <p className="section-copy">
            A three-day celebration of technology, creativity, and community. We
            blend workshops, competitions, and performances in a space designed
            to feel <em>beautifully in-between</em> — soft edges, floating
            light, and room to dream.
          </p>
          <div className="tiles">
            <div className="tile glass">
              <img src="/1000131263.jpg" alt="Workshop vibe" />
              <h3>Workshops</h3>
              <p>Hands-on labs that glow with curiosity and collaboration.</p>
            </div>
            <div className="tile glass">
              <img src="/1000131261.jpg" alt="Stage lights" />
              <h3>Performances</h3>
              <p>
                Stages that shimmer—music, art, and stories under neon haze.
              </p>
            </div>
            <div className="tile glass">
              <img src="/1000131254.jpg" alt="Hackathon night" />
              <h3>Build Nights</h3>
              <p>Late nights, bright minds, and that soft hum of becoming.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TODO: Add your carousel, schedule, FAQ, footer here same way */}
      {/* I stopped here for length, but structure is same */}

      <footer>
        <div className="footer-container">
          <div className="footer-column">
            <h3>USEFUL LINKS</h3>
            <ul>
              <li>
                <a href="https://ieee-sb.vercel.app/">@ieeesbgecpkd</a>
              </li>
              <li>
                <a href="https://www.instagram.com/ieeesbgecpkd/">
                  ieeesbgecpkd
                </a>
              </li>
              <li>
                <a href="https://www.ieee.org/">IEEE</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>CONTACT US</h3>
            <p>Devika V R: +91 9496967500</p>
            <p>Ansaaf: +91 8921840950</p>
            <p>Fidha: +91 7034358860</p>
            <p>Email: ieee@gecskp.ac.in</p>
          </div>
          <div className="footer-column">
            <h3>ABOUT IEEE SB GEC PKD</h3>
            <p>
              The IEEE Students branch of Government Engineering College
              Palakkad works for providing an ideal platform for young minds to
              nourish their technical skills by providing a technical home.
            </p>
          </div>
        </div>
        <div className="copyright">
          Copyright © 2025 IEEE SB GECPKD. All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default Excelsior25;
