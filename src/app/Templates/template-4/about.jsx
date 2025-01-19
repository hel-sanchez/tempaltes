"use client";

import React, { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("aboutSection");
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="aboutSection"
      className="relative bg-concrete-gray py-24 px-6"
      style={{ backgroundColor: "#B8B8B8" }} // Concrete Gray
    >
      <div className="container mx-auto max-w-7xl">
        <div
          className={`text-center mb-16 transition-opacity duration-700 ease-in-out ${
            isVisible ? "opacity-100 animate-fade-up" : "opacity-0"
          }`}
        >
          <h2
            className="text-5xl font-bold text-dark-gray mb-6 relative inline-block animate-slide-left"
            style={{ color: "#333333" }} // Dark Gray
          >
            <span
              className="absolute bottom-0 left-0 w-32 h-1 bg-safety-orange rounded-full"
              style={{ backgroundColor: "#FFA500" }} // Safety Orange
            ></span>
            Who We Are
          </h2>
          <p
            className="text-lg sm:text-xl text-slate-gray max-w-3xl mx-auto animate-fade-up delay-200"
            style={{ color: "black" }} // Slate Gray
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div
          className={`flex flex-col-reverse md:flex-row items-center gap-12 transition-transform duration-700 ease-in-out ${
            isVisible ? "translate-y-0 animate-fade-up" : "translate-y-10"
          }`}
        >
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 relative">
            <div className="group overflow-hidden rounded-xl shadow-lg transition-all duration-500 transform hover:scale-105 animate-pop delay-400">
              <img
                src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg"
                alt="Innovative Solutions"
                className="w-full h-auto object-cover rounded-xl transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            <h3
              className="text-4xl sm:text-5xl font-semibold text-dark-gray mb-6 relative inline-block animate-slide-right delay-400"
              style={{ color: "#333333" }} // Dark Gray
            >
              <span
                className="absolute bottom-0 left-0 w-24 h-1 bg-safety-orange rounded-full"
                style={{ backgroundColor: "#FFA500" }} // Safety Orange
              ></span>
              About Us
            </h3>
            <p
              className="text-lg sm:text-xl text-slate-gray leading-relaxed mb-8 animate-fade-up delay-600"
              style={{ color: "black" }} // Slate Gray
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button
              className="bg-safety-orange text-dark-gray px-8 py-4 rounded-lg font-semibold hover:bg-dark-gray hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-xl animate-pop delay-800"
              style={{
                backgroundColor: "#FFA500", // Safety Orange
                color: "#333333", // Dark Gray
              }}
            >
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
