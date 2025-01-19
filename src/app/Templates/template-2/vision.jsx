"use client";

import React, { useEffect, useState } from "react";

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
    <div className="bg-gradient-to-b from-blue-50 to-white p-8">
      {/* Vision Construct Section */}
      <div
        id="visionSection"
        className={`transition-all duration-700 ease-in-out mt-10 mb-16 ${
          isVisible ? "animate-slide-right" : "opacity-0"
        }`}
      >
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl font-extrabold text-blue-600 mb-8 leading-tight transition-all duration-500 ease-in-out transform hover:scale-110">
            Vision Construct
          </h2>
        </div>

        {/* Vision Elements */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Time */}
          <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl border-l-4 border-blue-600 transform transition-all duration-500 ease-in-out hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Time</h3>
            <p className="text-gray-700 mb-2">
              Rate: <span className="font-bold">50x</span>
            </p>
            <p className="text-gray-700">
              Others: <span className="font-bold">30x</span>
            </p>
          </div>

          {/* Sale */}
          <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl border-l-4 border-blue-600 transform transition-all duration-500 ease-in-out hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Sales</h3>
            <p className="text-gray-700 mb-2">
              Rate: <span className="font-bold">40x</span>
            </p>
            <p className="text-gray-700">
              Others: <span className="font-bold">25x</span>
            </p>
          </div>

          {/* Rate */}
          <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl border-l-4 border-blue-600 transform transition-all duration-500 ease-in-out hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Rate</h3>
            <p className="text-gray-700 mb-2">
              Rate: <span className="font-bold">75x</span>
            </p>
            <p className="text-gray-700">
              Others: <span className="font-bold">50x</span>
            </p>
          </div>

          {/* Something 1 */}
          <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl border-l-4 border-blue-600 transform transition-all duration-500 ease-in-out hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Something 1</h3>
            <p className="text-gray-700 mb-2">
              Rate: <span className="font-bold">60x</span>
            </p>
            <p className="text-gray-700">
              Others: <span className="font-bold">45x</span>
            </p>
          </div>

          {/* Something 2 */}
          <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl border-l-4 border-blue-600 transform transition-all duration-500 ease-in-out hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Something 2</h3>
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
