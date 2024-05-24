"use client"
import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="relative  text-white py-3 overflow-hidden" style={{background:' #2AA7FF'}}>
      <div className="absolute inset-y-0 left-0 w-full h-full flex items-center overflow-hidden">
        <div className="banner-text animate-scroll-left">
          <span className="banner-item">
            The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
