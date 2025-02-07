import React from "react";

const HeroSection = ({ darkMode }) => {
  return (
    <div className="absolute bottom-40 left-16 w-3/4 pl-14 text-left animate-fade-up">
      <h1
        className={`text-6xl font-bold leading-tight ${
          darkMode ? "text-white" : "text-[#203a53]"
        }`}
      >
        Are you tired of slow and <br />
        inaccurate construction proposals?
      </h1>
      <p
        className={`text-2xl mt-4 ${
          darkMode ? "text-white" : "text-[#191919]"
        }`}
      >
        Proposals done in minutes, higher <br />
        accuracy, and increased profitability.
      </p>
      <div className="mt-6">
        <button
          onClick={() =>
            window.Calendly.initPopupWidget({
              url: "https://calendly.com/avorino/simple-projex-demo",
            })
          }
          className={`px-8 font-sans tracking-wider py-3 text-lg font-bold uppercase hover:bg-[#203a53] hover:text-white transition-all duration-300 ${
            darkMode
              ? "bg-[#e6a310] text-black"
              : "bg-[#e6a310] text-[#191919] hover:bg-[#203a53] hover:text-white"
          }`}
        >
          Schedule a Demo
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
