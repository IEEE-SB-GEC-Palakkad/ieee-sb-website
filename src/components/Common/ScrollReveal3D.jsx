import React, { useEffect, useRef, useState } from "react";

const ScrollReveal3D = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once the animation has triggered to keep it visible
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05, // Trigger when 5% of the element is visible
        rootMargin: "0px 0px -80px 0px" // Trigger slightly before element fully enters viewport
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-3d-item ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal3D;
