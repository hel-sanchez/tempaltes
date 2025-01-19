"use client";

import React, { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("aboutSection");
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="aboutSection"
      className="relative min-h-screen p-10 bg-gradient-to-r from-gray-50 to-white py-20 px-8"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Who We Are */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-16">
          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/3182752/pexels-photo-3182752.jpeg"
                alt="Team Collaboration"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 relative">
              <span className="absolute left-0 bottom-0 w-16 h-1 bg-[#4682b4] rounded-full"></span>
              Avoid Costly Mistakes
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Is our proposal process leaving money on the table?
            </p>

            <ul className="text-left text-gray-600 mt-2">
              <li className="flex items-center gap-4 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4682b4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Proposals take too long to create.</span>
              </li>

              <li className="flex items-center gap-4 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4682b4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Inefficiently limits your growth potential.</span>
              </li>

              <li className="flex items-center gap-4 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4682b4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Inconsistent proposals damage your reputation.</span>
              </li>

              <li className="flex items-center gap-4 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4682b4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Complex software confuses your team.</span>
              </li>

              <li className="flex items-center gap-4 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4682b4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Inaccurate estimates hurt your bottom line.</span>
              </li>

              <li className="flex items-center gap-4 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4682b4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>You risk losing client with delays.</span>
              </li>

              <li className="flex items-center gap-4 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4682b4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Excel spreadsheets aren't cutting it anymore.</span>
              </li>

              <li className="flex items-center gap-4 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4682b4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Lack of organization leads to missed deadlines.</span>
              </li>

              <div className="space-x-8 animate-fade-in animate-delay-600">
                <button className="inline-block bg-[#4682b4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors duration-300">
                  Schedule a Demo
                </button>
              </div>
            </ul>
          </div>
        </div>

        {/* About Us */}
        <div
          className={`flex flex-col md:flex-row items-center gap-16 transition-transform duration-700 ease-in-out ${
            isVisible ? "translate-y-0" : "translate-y-10"
          }`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg"
                alt="Innovative Solutions"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 relative">
              <span className="absolute left-0 bottom-0 w-16 h-1 bg-[#4682b4] rounded-full"></span>
              Your Time-Saving Solution
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Transform how you create proposals with unmatched efficiency.
            </p>

            <ul className="text-left text-gray-600 mt-2">
              <li className="flex items-center gap-4 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4682b4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Create proposals 10x faster with our simple tool.</span>
              </li>

              <li className="flex items-center gap-4 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4682b4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Achieve 5x more accuracy to win bids.</span>
              </li>

              <li className="flex items-center gap-4 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4682b4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Spend more time on projects, not paperwork.</span>
              </li>

              <li className="flex items-center gap-4 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4682b4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Stay competitive in a rapidly evolving market.</span>
              </li>
            </ul>

            <button className="inline-block bg-[#4682b4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
