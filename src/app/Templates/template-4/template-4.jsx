"use client";

import { useState, useEffect } from "react";
import About from "./about";
import Reviews from "./review";
import Vision from "./vision";
import Results from "./result";
import Footer from "./footer";

function LandingPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCursorOnLeft, setIsCursorOnLeft] = useState(false);
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isSidebarToggled && event.clientX < 200) {
        setIsCursorOnLeft(true);
      } else {
        setIsCursorOnLeft(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isSidebarToggled]);

  useEffect(() => {
    if (!isSidebarToggled) {
      if (isCursorOnLeft) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    }
  }, [isCursorOnLeft, isSidebarToggled]);

  const toggleSidebar = () => {
    setIsSidebarToggled(!isSidebarToggled);
    if (isSidebarToggled) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Sidebar */}
      <header
        className={`fixed inset-0 bg-[#333333] shadow-md transform overflow-hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 md:w-64 w-48`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <a href="/" className="text-2xl font-extrabold text-[#FFA500] mt-10">
            Simple Projex
          </a>
          <a className="text-white hover:text-[#FFA500]">Pricing</a>
          <a className="text-white hover:text-[#FFA500]">Features</a>
          <a className="text-white hover:text-[#FFA500]">Support</a>
          <div className="space-y-4">
            <button className="w-full px-4 py-2 text-white bg-[#4682B4] rounded-md hover:bg-[#FFA500] hover:text-[black]">
              Sign In
            </button>
            <button className="w-full px-4 py-2 text-black bg-[#B8B8B8] rounded-md hover:bg-[#333333] hover:text-[#FFA500]">
              Join Us
            </button>
          </div>
        </div>
      </header>

      <button
        onClick={toggleSidebar}
        className="fixed top-5 left-5 text-white z-50 bg-[#333333] bg-opacity-70 p-1 rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Main Content */}
      <main
        className={`flex-grow relative bg-cover bg-center bg-no-repeat transition-all duration-500 overflow-hidden min-h-screen ${
          isSidebarOpen ? "md:ml-64 ml-0" : "ml-0"
        }`}
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/34295/pexels-photo-34295.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#333333] via-[#4682B4] to-[#FFA500] opacity-70"></div>
        <div className="container mx-auto px-6 py-32 relative z-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6 text-white tracking-wide">
                Build Your Future with{" "}
                <span className="text-[#FFA500]">Simple Projex</span>
              </h1>
              <p className="text-lg sm:text-xl text-white mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-[#FFA500] text-[#333333] px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-xl">
                Start Your Journey
              </button>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
              <img
                src="https://images.pexels.com/photos/1445324/pexels-photo-1445324.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Construction"
                className="rounded-lg shadow-lg w-[500px] sm:w-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      {/* About Content */}
      <div
        className={`flex-grow relative bg-cover bg-center bg-no-repeat transition-all duration-500 overflow-hidden min-h-screen ${
          isSidebarOpen ? "md:ml-64 ml-0" : "ml-0"
        }`}
      >
        <About />
      </div>

      {/* Reviews Content */}
      <div
        className={`flex-grow relative bg-cover bg-center bg-no-repeat transition-all duration-500 overflow-hidden min-h-screen ${
          isSidebarOpen ? "md:ml-64 ml-0" : "ml-0"
        }`}
      >
        <Reviews />
      </div>

      {/* Vision Content */}
      <div
        className={`flex-grow relative bg-cover bg-center bg-no-repeat transition-all duration-500 overflow-hidden min-h-screen ${
          isSidebarOpen ? "md:ml-64 ml-0" : "ml-0"
        }`}
      >
        <Vision />
      </div>

      {/* Results Content */}
      <div
        className={`flex-grow relative bg-cover bg-center bg-no-repeat transition-all duration-500 overflow-hidden min-h-screen ${
          isSidebarOpen ? "md:ml-64 ml-0" : "ml-0"
        }`}
      >
        <Results />
      </div>

      {/* Footer Content */}
      <footer
        className={`flex-grow relative w-full border-t border-gray-300 border-shadow-800 text-[#333333] transition-all duration-500 ${
          isSidebarOpen ? "md:ml-64 ml-0" : "ml-0"
        }`}
      >
        <Footer />
      </footer>
    </div>
  );
}

export default LandingPage;
