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
    <div className="bg-white py-16">
      {/* Vision Construct Section */}
      <div
        id="visionSection"
        className={`transition-all duration-700 ease-in-out mt-10 mb-16 ${
          isVisible ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div className="text-center mb-12 px-4">
          <h2 className="text-6xl font-extrabold text-red-700 mb-8 leading-tight animate-fade-up">
            Vision Construct
          </h2>
          <p className="text-lg text-gray-600">Strategic elements driving our growth</p>
        </div>

        {/* Vision Elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Time */}
          <div
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-t from-red-100 via-pink-200 to-red-200 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <FaClock className="text-red-700 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-red-700 mb-4">Time</h3>
            <p className="text-gray-600 mb-2">
              Rate: <span className="font-bold text-red-800">50x</span>
            </p>
            <p className="text-gray-600">
              Others: <span className="font-bold text-red-800">30x</span>
            </p>
          </div>

          {/* Sales */}
          <div
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-t from-red-100 via-pink-200 to-red-200 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <FaChartLine className="text-red-700 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-red-700 mb-4">Sales</h3>
            <p className="text-gray-600 mb-2">
              Rate: <span className="font-bold text-red-800">40x</span>
            </p>
            <p className="text-gray-600">
              Others: <span className="font-bold text-red-800">25x</span>
            </p>
          </div>

          {/* Rate */}
          <div
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-t from-red-100 via-pink-200 to-red-200 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <FaStar className="text-red-700 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-red-700 mb-4">Rate</h3>
            <p className="text-gray-600 mb-2">
              Rate: <span className="font-bold text-red-800">75x</span>
            </p>
            <p className="text-gray-600">
              Others: <span className="font-bold text-red-800">50x</span>
            </p>
          </div>

          {/* Something 1 */}
          <div
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-t from-red-100 via-pink-200 to-red-200 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <FaCog className="text-red-700 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-red-700 mb-4">Something 1</h3>
            <p className="text-gray-600 mb-2">
              Rate: <span className="font-bold text-red-800">60x</span>
            </p>
            <p className="text-gray-600">
              Others: <span className="font-bold text-red-800">45x</span>
            </p>
          </div>

          {/* Something 2 */}
          <div
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-t from-red-100 via-pink-200 to-red-200 animate-fade-up"
            style={{ animationDelay: "1s" }}
          >
            <FaGift className="text-red-700 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-red-700 mb-4">Something 2</h3>
            <p className="text-gray-600 mb-2">
              Rate: <span className="font-bold text-red-800">80x</span>
            </p>
            <p className="text-gray-600">
              Others: <span className="font-bold text-red-800">55x</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionConstruct;
