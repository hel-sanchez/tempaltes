import React, { useEffect, useState } from "react";

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
    <div id="proposalStress" className="bg-[#e6a310] py-20 px-6">
      {/* Header Section */}
      <div
        className={`text-center mb-8 transition-all duration-700 ease-in-out ${
          isVisible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold text-[#191919] mb-2">
          Say Goodbye to Proposal Stress
        </h2>
        <p className="text-lg text-[#e8e8e8]">
          Accurate bids made simple and fast
        </p>
      </div>

      {/* Content Section */}
      <div
        className={`text-center max-w-4xl mx-auto mb-12 transition-all duration-700 ease-in-out ${
          isVisible ? "animate-fade-up delay-200" : "opacity-0"
        }`}
      >
        <p className="text-[#e8e8e8]/85 text-base italic leading-relaxed">
          Creating construction proposals shouldn’t be a hassle. Our platform
          solves the common problems construction companies face. With just a
          few variables, you can produce precise, professional proposals in mere
          minutes. That means less time managing paperwork, and more time
          focused on what really matters—your projects. Let us help you
          streamline your process and enhance your profitability.
        </p>
      </div>

      {/* Call-to-Action Button */}
      <div
        className={`text-center transition-all duration-700 ease-in-out ${
          isVisible ? "animate-fade-up delay-400" : "opacity-0"
        }`}
      >
        <button
          onClick={() =>
            window.Calendly.initPopupWidget({
              url: "https://calendly.com/avorino/simple-projex-demo",
            })
          }
          className="px-8 py-4 bg-[#333333] text-[#ffffff] font-semibold text-lg rounded-lg shadow-md hover:bg-[#ffa500] hover:text-black hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Schedule a Demo
        </button>
      </div>
    </div>
  );
};

export default ProposalStress;
