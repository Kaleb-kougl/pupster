import React from "react";
import "./hero-style.css"

function Hero({ backgroundImage, children }) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {children}
    </div>
  );
}

export default Hero;