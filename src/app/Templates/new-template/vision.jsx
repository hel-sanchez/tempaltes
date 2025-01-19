import React, { useEffect, useState } from "react";

const VisionConstruct = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("visionSection");
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
    <div className="bg-[#ffffff] py-16">
      {/* Help Succeed Section */}
      <div
        id="visionSection"
        className={`transition-all duration-700 ease-in-out mt-10 mb-16 ${
          isVisible ? "animate-slide-up" : "opacity-0"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl font-extrabold text-[#333333] mb-4 leading-tight">
            We're Here to Help You Succeed!
          </h2>
          <p className="text-lg text-[#b8b8b8]">
            Built by experts who understand your challenges.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Designed by General Contractors */}
          <div className="flex flex-col items-center p-8 bg-[#4682b4] rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-[#ffffff] mb-4">
              Designed by General Contractors
            </h3>
            <p className="text-[#b8b8b8] text-center">
              Our platform is crafted from real-world experiences.
            </p>
          </div>

          {/* Proven to Increase Efficiency */}
          <div className="flex flex-col items-center p-8 bg-[#4682b4] rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-[#ffffff] mb-4">
              Proven to Increase Efficiency
            </h3>
            <p className="text-[#b8b8b8] text-center">
              Users report a significant reduction in proposal time.
            </p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl italic text-[#333333] leading-relaxed mb-8">
            "Simple Projex has transformed my bidding process completely. I
            close more deals with confidence."
          </blockquote>
          <p className="font-bold text-[#4682b4]">
            John D. Construction Business Owner
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-[#ffa500] text-[#ffffff] font-semibold rounded-lg shadow-lg hover:bg-[#e69500] transition-all duration-300">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisionConstruct;
