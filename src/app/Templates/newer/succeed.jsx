import React from "react";

const TimeSaving = () => {
  return (
    <section className="relative bg-white py-16 px-5">
      {/* Main Section */}
      <div className="text-center md:ml-12 mb-5">
        <h1 className="text-5xl font-bold text-[#e6a310] mb-3">
          We’re Here to Help You Succeed
        </h1>
        <p className="text-xl text-[#203a53]">
          Transform how you create proposals with unmatched efficiency.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
        {/* First Card */}
        <div
          className="relative shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
          style={{ height: "450px" }}
        >
          <img
            src="experts.png"
            alt="Build by Experts who understand your challenger"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#272727] px-12 py-4 w-3/4">
            <h2 className="text-2xl font-bold text-white text-center">
              Built by Experts who understand your challenges
            </h2>
          </div>
        </div>

        {/* Second Card */}
        <div
          className="relative shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
          style={{ height: "450px" }}
        >
          <img
            src="efficiency.png"
            alt="Proven to Increase Efficiency"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#272727] px-12 py-4 w-3/4">
          <h2 className="text-2xl font-bold text-white text-center">
              Proven to Increase Efficiency
            </h2>
          </div>
        </div>

        {/* Third Card */}
        <div
          className="relative shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
          style={{ height: "450px" }}
        >
          <img
            src="contractors.png"
            alt="Designed by General Contractors"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#272727] px-12 py-4 w-3/4">
          <h2 className="text-2xl font-bold text-white text-center">
              Designed by General Contractors
            </h2>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12 ml-14">
        <button
          onClick={() =>
            window.Calendly.initPopupWidget({
              url: "https://calendly.com/avorino/simple-projex-demo",
            })
          }
          className="bg-[#e6a310] text-[#191919] px-10 font-sans tracking-widest py-4 text-lg font-semibold uppercase hover:bg-[#203a53] hover:text-white transition duration-300"
        >
          Schedule a Demo
        </button>
      </div>
    </section>
  );
};

export default TimeSaving;
