"use client";

import React, { useEffect, useState } from "react";

// Keyframes for the border animation
const borderAnimation = `
  @keyframes animate-border {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;

const About = () => {
  // State to check if the element is in view
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("whoWeAre");
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#282828] min-h-screen p-8">
      {/* Adding the border animation styles */}
      <style>{borderAnimation}</style>

      {/* Who We Are Section */}
      <div
        id="whoWeAre"
        className={`mb-16 transition-all duration-700 ease-in-out ${
          isVisible ? "animate-slide-left" : "opacity-0"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image Section */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="relative group opacity-0 animate-slide-left overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.pexels.com/photos/220885/pexels-photo-220885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team Image"
                className="w-full h-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg group-hover:bg-opacity-50 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left opacity-0 translate-x-12 animate-slide-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#FFCC00] mb-4 leading-tight tracking-wide border-b-4 border-[#FF5722] pb-2 overflow-hidden">
              <span
                className={`inline-block transition-all duration-700 ease-in-out ${
                  isVisible ? "animate-border" : ""
                }`}
              ></span>
              Who We Are
            </h1>
            <p className="text-lg md:text-xl text-white max-w-xl mx-auto mb-8">
              We are a passionate team committed to creating innovative,
              sustainable, and scalable solutions. Our work is driven by the
              goal to provide individuals and businesses with the tools they
              need to succeed in a rapidly evolving world.
            </p>
            <p className="text-lg text-[#D3D3D3]">
              Our mission is to empower change, optimize processes, and elevate
              experiences for our clients and their customers.
            </p>
          </div>
        </div>
      </div>

      <hr className="border-t-2 border-[#FF5722] my-4 mb-10" />

      {/* About Us Section */}
      <div className="max-w-6xl mx-auto text-center mb-12 px-4 mt-16">
        <h1 className="text-4xl font-extrabold text-[#FFCC00] mb-4 hover:scale-105 border-b-4 border-[#FF5722] pb-2">
          <div
            className={`transform transition-all duration-500 ease-in-out ${
              isVisible ? "animate-slide-right" : "opacity-0"
            }`}
          >
            About Us
          </div>
        </h1>

        <div
          className={`transform transition-all duration-500 ease-in-out ${
            isVisible ? "animate-slide-right" : "opacity-0"
          }`}
        >
          <p className="text-xl text-white max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            neque vitae lorem volutpat aliquet. Vivamus ac efficitur quam. Donec
            vitae turpis sit amet justo tincidunt sollicitudin.
          </p>
        </div>
      </div>

      {/* Mission and Vision Sections */}
      <div className="grid md:grid-cols-2 gap-12 px-4">
        {/* Mission Section */}
        <div
          className={`bg-[#333333] p-8 rounded-lg shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl ${
            isVisible ? "animate-slide-right" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-semibold text-[#FF5722] mb-4">
            Our Mission
          </h2>
          <p className="text-white">
            We are committed to providing innovative solutions and exceptional
            service to help our clients realize their full potential. Our
            mission is to redefine industry standards and bring lasting change
            to the world.
          </p>
        </div>

        {/* Vision Section */}
        <div
          className={`bg-[#333333] p-8 rounded-lg shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl ${
            isVisible ? "animate-slide-right" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-semibold text-[#FF5722] mb-4">
            Our Vision
          </h2>
          <p className="text-white">
            Our vision is to be a global leader in innovation, delivering
            sustainable, high-quality products and services that create
            long-term value for our clients, communities, and the environment.
          </p>
        </div>
      </div>

      {/* Learn More Button */}
      <div className="text-center mt-10">
        <button className="px-8 py-4 bg-[#FF5722] text-white text-lg font-semibold rounded-full shadow-md transform transition-all duration-300 ease-in-out hover:bg-[#FF5722] hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
