// ComingSoon.jsx
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./comingsoon.css";

function IframeModal({ onClose, src, title }) {
  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="iframe-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="iframe-content" onClick={(e) => e.stopPropagation()}>
        <button className="iframe-close" onClick={onClose} aria-label="Close registration dialog">
          ×
        </button>
        <div className="responsive-iframe">
          <iframe src={src} title={title} frameBorder="0" allowFullScreen />
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function ComingSoon() {
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setShowIframe(false);
    };

    if (showIframe) {
      window.addEventListener("keydown", onKey);
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = prevOverflow;
      };
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [showIframe]);

  const handleRegisterClick = () => setShowIframe(true);
  const closeIframe = () => setShowIframe(false);

  return (
    // This new container will center the card on the page
    <div className="coming-soon-container">
      <div className="event-card" aria-live="polite">
        <h1 className="bounce-heading">UPCOMING EVENT</h1>
        <h1 className="heading">EXCELSIOR 2025</h1>
        <p className="event-date">September 27 - 29, 2025</p>

        <button
          type="button"
          className="glow-button"
          onClick={handleRegisterClick}
          aria-haspopup="dialog"
          aria-expanded={showIframe}
        >
          Register Now
        </button>

        {showIframe && (
          <IframeModal
            onClose={closeIframe}
            src="https://www.yepdesk.com/embed/buy-tickets/68c1b79d46e0fb0001e38ab1/private/7khlo1ivnn"
            title="Excelsior 2025 registration"
          />
        )}
      </div>
    </div>
  );
}