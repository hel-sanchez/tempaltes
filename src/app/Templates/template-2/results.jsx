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
    <div className="bg-gradient-to-b from-blue-50 to-white p-8">
      {/* Results Section */}
      <div
        id="resultsSection"
        className={`transition-all duration-700 ease-in-out mt-10 mb-10 ${
          isVisible ? "animate-slide-right" : "opacity-0"
        }`}
      >
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl font-extrabold text-blue-600 mb-8 leading-tight">
            Impressive Results
          </h2>
        </div>

        {/* Results Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 px-4">
          {/* Better Results */}
          <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105">
            <FaChartLine className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Better Results</h3>
            <p className="text-gray-700">Achieved remarkable improvements.</p>
          </div>

          {/* Increase Rate */}
          <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105">
            <FaArrowUp className="text-4xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-green-600 mb-2">Increase Rate</h3>
            <p className="text-gray-700">Boosted growth rate significantly.</p>
          </div>

          {/* Sales */}
          <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105">
            <FaDollarSign className="text-4xl text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">Sales</h3>
            <p className="text-gray-700">Saw a surge in sales across the board.</p>
          </div>

          {/* Happy Customers */}
          <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105">
            <FaSmile className="text-4xl text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-orange-600 mb-2">Happy Customers</h3>
            <p className="text-gray-700">Our clients are more satisfied than ever.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
