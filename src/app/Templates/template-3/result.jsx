import React, { useEffect, useState } from "react";
import { FaArrowUp, FaDollarSign, FaChartLine, FaSmile } from "react-icons/fa";

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
    <div className="bg-gradient-to-b from-gray-100 to-white p-8">
      {/* Results Section */}
      <div
        id="resultsSection"
        className={`transition-all duration-700 ease-in-out mt-12 mb-16 ${
          isVisible ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div className="text-center mb-12 px-4">
          <h2 className="text-5xl font-extrabold text-red-600 mb-8 leading-tight animate-fade-up">
            Our Impressive Results
          </h2>
        </div>
        
        {/* Results Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {/* Better Results */}
          <div
            className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <FaChartLine className="text-red-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              Better Results
            </h3>
            <p className="text-gray-700">
              Achieved remarkable improvements across the board.
            </p>
          </div>

          {/* Increase Rate */}
          <div
            className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <FaArrowUp className="text-green-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-green-600 mb-4">
              Increase Rate
            </h3>
            <p className="text-gray-700">
              Growth rate has surged significantly.
            </p>
          </div>

          {/* Sales */}
          <div
            className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <FaDollarSign className="text-yellow-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-yellow-600 mb-4">
              Sales
            </h3>
            <p className="text-gray-700">
              There’s been a massive increase in overall sales.
            </p>
          </div>

          {/* Happy Customers */}
          <div
            className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <FaSmile className="text-orange-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-orange-600 mb-4">
              Happy Customers
            </h3>
            <p className="text-gray-700">
              Customer satisfaction has reached new heights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
