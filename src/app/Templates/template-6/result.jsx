"use client";

import React, { useEffect, useState } from "react";
import { FaChartLine, FaDollarSign, FaSmile, FaArrowUp } from "react-icons/fa";

const Results = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("resultsSection");
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
    <div className="bg-gradient-to-b from-[#F5F5DC] via-[#B8B8B8] to-[#FFFFFF] py-20 px-6 md:px-16">
      {/* Results Section */}
      <div
        id="resultsSection"
        className={`transition-all duration-700 ease-in-out mt-12 mb-16 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="text-center mb-12 px-4">
          <h2 className="text-5xl font-extrabold text-[#2E2E2E] mb-6 leading-tight transition-all duration-500 ease-in-out transform hover:scale-110 hover:text-[#2E2E2E]">
            Impressive Results
          </h2>
          <p className="text-lg text-[#607D8B]">See how we've made a big impact!</p>
        </div>

        {/* Results Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Better Results */}
          <div className="flex flex-col items-center p-8 bg-gradient-to-r from-[#2E2E2E] to-[#FF5722] text-white rounded-xl shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
            <FaChartLine className="text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Better Results</h3>
            <p className="text-lg">Achieved remarkable improvements.</p>
          </div>

          {/* Increase Rate */}
          <div className="flex flex-col items-center p-8 bg-gradient-to-r from-[#FF5722] to-[#FFCC00] text-white rounded-xl shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
            <FaArrowUp className="text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Increase Rate</h3>
            <p className="text-lg">Boosted growth rate significantly.</p>
          </div>

          {/* Sales */}
          <div className="flex flex-col items-center p-8 bg-gradient-to-r from-[#FF5722] to-[#FFCC00] text-white rounded-xl shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
            <FaDollarSign className="text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Sales</h3>
            <p className="text-lg">Saw a surge in sales across the board.</p>
          </div>

          {/* Happy Customers */}
          <div className="flex flex-col items-center p-8 bg-gradient-to-r from-[#FFCC00] to-[#FFD700] text-white rounded-xl shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
            <FaSmile className="text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Happy Customers</h3>
            <p className="text-lg">Our clients are more satisfied than ever.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
