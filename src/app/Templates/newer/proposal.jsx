import React, { useEffect, useState } from "react";
import { Phone, Envelope } from "react-bootstrap-icons";

const ProposalStress = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById("proposalStress");
    const rect = section.getBoundingClientRect();
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
    <div
      id="proposalStress"
      className={`relative p-20 ${
        darkMode ? "bg-[#191919] text-gray-200" : "bg-white text-[#191919]"
      }`}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ top: 0, left: 0 }}
      >
        <source src="proj-des.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* First White Overlay */}
      <div
        className={`absolute inset-0 ${
          darkMode ? "bg-black bg-opacity-60" : "bg-white bg-opacity-50"
        }`}
      ></div>

      {/* Header Section */}
      <div className="p-10 mt-16 font-sans pl-16">
        <div
          className={`text-center transition-all duration-700 ease-in-out mt-16 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <h2
            className={`text-5xl font-bold text-left mb-5 tracking-widest ${
              darkMode ? "text-[#e6a310]" : "text-[#191919]"
            }`}
          >
            LET'S TALK
          </h2>
        </div>

        {/* 3 Column Flex Layout */}
        <div
          className={`flex flex-col tracking-wider text-xl md:flex-row justify-between text-center md:text-left transition-all duration-700 ease-in-out ${
            isVisible ? "animate-fade-up delay-200" : "opacity-0"
          }`}
        >
          {/* Left Column */}
          <div
            className={`flex-1 pl-6 mb-8 md:mb-0 ${
              darkMode ? "text-gray-200" : "text-[#191919]"
            }`}
          >
            <p>
              Simple Projex
              <br />
              Irvine, California
            </p>
          </div>

          {/* Center Column */}
          <div className="flex-1 mb-8 md:mb-0">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" color={darkMode ? "#e6a310" : "#191919"} />
                <span className={`${darkMode ? "text-gray-200" : "text-[#191919]"}`}>
                  (123) 456-7890
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Envelope className="w-4 h-4" color={darkMode ? "#e6a310" : "#191919"} />
                <span className={`${darkMode ? "text-gray-200" : "text-[#191919]"}`}>
                  build@simpleprojex.com
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div
            className={`${darkMode ? "text-gray-200" : "text-[#191919]"}`}
          >
            We specialize in <br /> Universal Design.
          </div>
        </div>

        <div
          className={`mt-16 mb-10 ${
            darkMode ? "text-gray-200" : "text-[#191919]"
          } font-semibold relative z-10 text-4xl tracking-widest`}
        >
          "Say Goodbye to Proposal Stress"
        </div>

        {/* Call-to-Action Button */}
        <div
          className={`text-left transition-all duration-700 ease-in-out mb-16 ${
            isVisible ? "animate-fade-up delay-400" : "opacity-0"
          }`}
        >
          <button
            onClick={() =>
              window.Calendly.initPopupWidget({
                url: "https://calendly.com/avorino/simple-projex-demo",
              })
            }
            className={`${
              darkMode
                ? "bg-[#e6a310] text-[#191919] hover:bg-[#203a53] hover:text-white"
                : "bg-[#191919] text-[#e6a310] hover:bg-[#203a53] hover:text-white"
            } px-8 tracking-wider py-3 text-lg font-semibold uppercase transition duration-300`}
          >
            Schedule a Demo Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProposalStress;
