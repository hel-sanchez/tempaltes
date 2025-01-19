import React, { useEffect, useState } from "react";
import { FaClock, FaChartLine, FaStar, FaCog, FaGift } from "react-icons/fa"; // Adding icons for each vision element

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
    <div className="bg-gradient-to-b from-gray-100 to-white p-8">
      {/* Vision Construct Section */}
      <div
        id="visionSection"
        className={`transition-all duration-700 ease-in-out mt-10 mb-16 ${
          isVisible ? "animate-slide-left" : "opacity-0"
        }`}
      >
        <div className="text-center mb-12 px-4">
          <h2 className="text-5xl font-bold text-red-600 mb-8 leading-tight animate-fade-up">
            Vision Construct
          </h2>
        </div>

        {/* Vision Elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Time */}
          <div
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <FaClock className="text-red-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-red-600 mb-4">Time</h3>
            <p className="text-gray-700 mb-2">
              Rate: <span className="font-bold">50x</span>
            </p>
            <p className="text-gray-700">
              Others: <span className="font-bold">30x</span>
            </p>
          </div>

          {/* Sales */}
          <div
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <FaChartLine className="text-red-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-red-600 mb-4">Sales</h3>
            <p className="text-gray-700 mb-2">
              Rate: <span className="font-bold">40x</span>
            </p>
            <p className="text-gray-700">
              Others: <span className="font-bold">25x</span>
            </p>
          </div>

          {/* Rate */}
          <div
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <FaStar className="text-red-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-red-600 mb-4">Rate</h3>
            <p className="text-gray-700 mb-2">
              Rate: <span className="font-bold">75x</span>
            </p>
            <p className="text-gray-700">
              Others: <span className="font-bold">50x</span>
            </p>
          </div>

          {/* Something 1 */}
          <div
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <FaCog className="text-red-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-red-600 mb-4">Something 1</h3>
            <p className="text-gray-700 mb-2">
              Rate: <span className="font-bold">60x</span>
            </p>
            <p className="text-gray-700">
              Others: <span className="font-bold">45x</span>
            </p>
          </div>

          {/* Something 2 */}
          <div
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 animate-fade-up"
            style={{ animationDelay: "1s" }}
          >
            <FaGift className="text-red-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-red-600 mb-4">Something 2</h3>
            <p className="text-gray-700 mb-2">
              Rate: <span className="font-bold">80x</span>
            </p>
            <p className="text-gray-700">
              Others: <span className="font-bold">55x</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionConstruct;
