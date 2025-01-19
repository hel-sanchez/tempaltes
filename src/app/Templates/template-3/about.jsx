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
      className="relative bg-gradient-to-r from-gray-50 to-white py-20 px-8"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Who We Are */}
        <div
          className={`flex flex-col md:flex-row items-center gap-16 mb-16 transition-opacity duration-700 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/3182752/pexels-photo-3182752.jpeg"
                alt="Team Collaboration"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 relative">
              <span className="absolute left-0 bottom-0 w-16 h-1 bg-red-600 rounded-full"></span>
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are a team of passionate individuals dedicated to delivering
              innovative solutions. Our diverse skill set and collaborative
              mindset empower us to tackle challenges and exceed expectations.
            </p>
          </div>
        </div>

        {/* About Us */}
        <div
          className={`flex flex-col md:flex-row items-center gap-16 transition-transform duration-700 ease-in-out ${
            isVisible ? "translate-y-0" : "translate-y-10"
          }`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg"
                alt="Innovative Solutions"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 relative">
              <span className="absolute left-0 bottom-0 w-16 h-1 bg-red-600 rounded-full"></span>
              About Us
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              At the core of our mission lies a commitment to excellence,
              innovation, and community impact. We aim to create value and
              provide meaningful experiences for our clients and their
              customers.
            </p>
            <button
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
