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
    <div className="bg-gradient-to-b from-[#F5F5DC] via-[#DCDCDC] to-[#FFFFFF] py-20 px-6 md:px-16">
      {/* Vision Construct Section */}
      <div
        id="visionSection"
        className={`transition-all duration-700 ease-in-out mt-12 mb-16 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="text-center mb-12 px-4">
          <h2 className="text-5xl font-bold text-[#2E2E2E] mb-6 leading-tight transition-all duration-500 ease-in-out transform hover:scale-110 hover:text-[#607D8B]">
            Vision Construct
          </h2>
          <p className="text-lg text-[#607D8B]">
            Exploring how we reshape the future through time, sales, and more.
          </p>
        </div>

        {/* Vision Elements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Time */}
          <div className="flex flex-col items-center p-8 bg-gradient-to-r from-[#607D8B] to-[#FF5722] text-white rounded-xl shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">Time</h3>
            <p className="text-lg mb-2">
              Rate: <span className="font-bold">50x</span>
            </p>
            <p className="text-lg">
              Others: <span className="font-bold">30x</span>
            </p>
          </div>

          {/* Sales */}
          <div className="flex flex-col items-center p-8 bg-gradient-to-r from-[#607D8B] to-[#FF5722] text-white rounded-xl shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">Sales</h3>
            <p className="text-lg mb-2">
              Rate: <span className="font-bold">40x</span>
            </p>
            <p className="text-lg">
              Others: <span className="font-bold">25x</span>
            </p>
          </div>

          {/* Rate */}
          <div className="flex flex-col items-center p-8 bg-gradient-to-r from-[#607D8B] to-[#FF5722] text-white rounded-xl shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">Rate</h3>
            <p className="text-lg mb-2">
              Rate: <span className="font-bold">75x</span>
            </p>
            <p className="text-lg">
              Others: <span className="font-bold">50x</span>
            </p>
          </div>

          {/* Something 1 */}
          <div className="flex flex-col items-center p-8 bg-gradient-to-r from-[#607D8B] to-[#FF5722] text-white rounded-xl shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">Something 1</h3>
            <p className="text-lg mb-2">
              Rate: <span className="font-bold">60x</span>
            </p>
            <p className="text-lg">
              Others: <span className="font-bold">45x</span>
            </p>
          </div>

          {/* Something 2 */}
          <div className="flex flex-col items-center p-8 bg-gradient-to-r from-[#607D8B] to-[#FF5722] text-white rounded-xl shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">Something 2</h3>
            <p className="text-lg mb-2">
              Rate: <span className="font-bold">80x</span>
            </p>
            <p className="text-lg">
              Others: <span className="font-bold">55x</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionConstruct;
