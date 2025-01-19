import React, { useEffect, useState } from "react";
import { FaClock, FaChartLine, FaStar, FaCog, FaGift } from "react-icons/fa";

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
    <div className="flex flex-col items-center bg-gradient-to-b from-gray-100 to-white py-16">
      {/* Vision Construct Header */}
      <div
        id="visionSection"
        className={`transition-all duration-700 ease-in-out mt-10 mb-16 ${
          isVisible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        <h2 className="text-5xl font-bold text-gray-600 mb-8 text-center leading-tight">
          Vision Construct
        </h2>
      </div>

      {/* Vision Elements */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full px-8">
        {/* Time */}
        <div
          className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-2xl"
          style={{ animationDelay: "0.2s" }}
        >
          <FaClock className="text-yellow-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-4">Time</h3>
          <p className="text-gray-800 mb-2">
            Rate: <span className="font-bold">50x</span>
          </p>
          <p className="text-gray-800">
            Others: <span className="font-bold">30x</span>
          </p>
        </div>

        {/* Sales */}
        <div
          className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-2xl"
          style={{ animationDelay: "0.4s" }}
        >
          <FaChartLine className="text-yellow-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-4">Sales</h3>
          <p className="text-gray-800 mb-2">
            Rate: <span className="font-bold">40x</span>
          </p>
          <p className="text-gray-800">
            Others: <span className="font-bold">25x</span>
          </p>
        </div>

        {/* Rate */}
        <div
          className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-2xl"
          style={{ animationDelay: "0.6s" }}
        >
          <FaStar className="text-yellow-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-4">Rate</h3>
          <p className="text-gray-800 mb-2">
            Rate: <span className="font-bold">75x</span>
          </p>
          <p className="text-gray-800">
            Others: <span className="font-bold">50x</span>
          </p>
        </div>

        {/* Something 1 */}
        <div
          className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-2xl"
          style={{ animationDelay: "0.8s" }}
        >
          <FaCog className="text-yellow-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-4">Something 1</h3>
          <p className="text-gray-800 mb-2">
            Rate: <span className="font-bold">60x</span>
          </p>
          <p className="text-gray-800">
            Others: <span className="font-bold">45x</span>
          </p>
        </div>

        {/* Something 2 */}
        <div
          className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-2xl"
          style={{ animationDelay: "1s" }}
        >
          <FaGift className="text-yellow-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-4">Something 2</h3>
          <p className="text-gray-800 mb-2">
            Rate: <span className="font-bold">80x</span>
          </p>
          <p className="text-gray-800">
            Others: <span className="font-bold">55x</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionConstruct;
