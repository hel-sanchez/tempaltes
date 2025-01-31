import React, { useEffect, useState } from "react";
import { Phone, Envelope } from "react-bootstrap-icons";

const ProposalStress = () => {
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
    <div id="proposalStress" className="relative p-20">
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
      <div className="absolute inset-0 bg-white opacity-50"></div>

      {/* Header Section */}
      <div className="p-10 mt-16 font-sans pl-16">
        <div
          className={`text-center transition-all duration-700 ease-in-out mt-16 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <h2 className="text-5xl font-bold text-left text-[#191919] mb-5 tracking-widest">
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
          <div className="flex-1 pl-6 mb-8 md:mb-0 text-[#191919]">
            <p>
              Simple Projex
              <br />
              Irvine, California
            </p>
          </div>

          {/* Center Column */}
          <div className="flex-1 mb-8 md:mb-0">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-2 text-[#e8e8e8]">
                <Phone className="w-4 h-4 text-[#191919]" />
                <span className="text-[#191919]">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-2 text-[#e8e8e8]">
                <Envelope className="w-4 h-4 text-[#191919]" />
                <span className="text-[#191919]">info@example.com</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 text-[#191919]">
            We specialize in <br /> Universal Design.
          </div>
        </div>

        <div className="mt-16 mb-10 text-[#191919] font-semibold relative z-10 text-4xl tracking-widest">
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
            className="bg-[#191919] text-[#e6a310] px-8 tracking-wider py-3 text-lg font-semibold uppercase hover:bg-[#203a53] hover:text-white transition duration-300"
          >
            Schedule a Demo Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProposalStress;
