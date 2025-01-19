import React, { useEffect, useState } from "react";

const Succeed = () => {
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
    <div className="bg-[#191919]/90 py-16 px-4">
      {/* Help Succeed Section */}
      <div
        id="visionSection"
        className={`transition-all duration-700 ease-in-out mt-10 mb-16 ${
          isVisible ? "animate-slide-up" : "opacity-0"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#e6a310] mb-4 leading-tight">
            We're Here to Help You Succeed!
          </h2>
          <p className="text-lg text-[#e8e8e8]">
            Built by experts who understand your challenges.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Designed by General Contractors */}
          <div className="flex flex-col items-center p-8 bg-[#e6a310] rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-bold text-[#203a53] mb-4 text-center">
              Designed by General Contractors
            </h3>
            <p className="text-lg text-[#191919] text-center leading-relaxed">
              Our platform is crafted from real-world experiences to address
              your challenges effectively.
            </p>
          </div>

          {/* Proven to Increase Efficiency */}
          <div className="flex flex-col items-center p-8 bg-[#e6a310] rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-bold text-[#203a53] mb-4 text-center">
              Proven to Increase Efficiency
            </h3>
            <p className="text-lg text-[#191919] text-center leading-relaxed">
              Users report a significant reduction in proposal time, boosting
              productivity and results.
            </p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 text-center max-w-2xl mx-auto px-4">
          <blockquote className="text-xl italic text-[#e8e8e8] leading-relaxed mb-8">
            "Simple Projex has transformed my bidding process completely. I
            close more deals with confidence."
          </blockquote>
          <p className="font-bold text-[#e6a310]">
            John D. Construction Business Owner
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-[#203a53] text-[#e8e8e8] font-semibold rounded-lg shadow-lg hover:bg-[#e6a310] transition-all duration-300 transform hover:scale-105">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Succeed;
