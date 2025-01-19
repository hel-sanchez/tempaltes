"use client";

import { useState, useEffect } from "react";
import React from "react";
import Footer from "./footer";
import About from "./about";
import Reviews from "./review";
import Vision from "./vision";
import Result from "./result";

function Template3() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the mobile menu

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full py-4 transition-all duration-300 ease-in-out z-50 ${
          scrolled ? "bg-black bg-opacity-60" : "bg-transparent"
        } hover:bg-opacity-100`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 relative">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            <a href="/">SIMPLE PROJEX</a>
          </div>

          {/* Mobile Hamburger Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
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

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex space-x-8">
            <a className="text-white hover:text-gray-300">
              Pricing
            </a>
            <a className="text-white hover:text-gray-300">
              Features
            </a>
            <a className="text-white hover:text-gray-300">
              Support
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex space-x-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition duration-300">
              Login
            </button>
            <button className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black bg-opacity-60 py-4 px-6 space-y-4 fixed top-16 left-0 w-full z-50">
          <a href="#pricing" className="block text-white hover:text-gray-300">
            Pricing
          </a>
          <a href="#features" className="block text-white hover:text-gray-300">
            Features
          </a>
          <a href="#support" className="block text-white hover:text-gray-300">
            Support
          </a>

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition duration-300">
              Login
            </button>
            <button className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main
        className="flex-grow relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="bg-black bg-opacity-70 h-full w-full absolute inset-0"></div>
        <div className="container mx-auto px-8 py-24 relative z-10 text-white mt-20 mb-20">
          <div className="flex flex-col items-center justify-center text-center h-full mt-10">
            {/* Text Section */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 animate-fade-in relative">
              <span className="block text-lg sm:text-xl md:text-2xl text-gray-300 mb-5">
                New and Improved
              </span>
              <span className="relative inline-block text-6xl sm:text-7xl md:text-8xl lg:text-8xl leading-tight sm:leading-none">
                {/* Top Highlight */}
                <span className="absolute left-[-10%] right-[-8%] top-[15%] sm:left-[-8%] sm:right-[-3%] sm:top-1/3 md:top-1/4 lg:top-1/3 bg-red-200 opacity-90 h-[55px] sm:h-[50px] md:h-[40px] lg:h-[36px] transform -translate-y-3 rounded-[4px] animate-highlight-top"></span>
                {/* Bottom Highlight */}
                <span className="absolute left-[-10%] right-[-8%] bottom-[9%] sm:left-[-4%] sm:right-[-6%] sm:bottom-1/3 md:bottom-1/4 lg:bottom-1/3 bg-red-200 opacity-90 h-[60px] sm:h-[50px] md:h-[40px] lg:h-[36px] transform translate-y-3 rounded-[4px] animate-highlight-bottom"></span>
                <span className="relative text-red-700">Vision Construct</span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 animate-slide-left animate-delay-400 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque it.
            </p>
            <div className="space-x-8 animate-fade-in animate-delay-600">
              <button className="bg-red-600 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-red-700 transition duration-300 transform hover:scale-105">
                Start Now
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <About />

      {/* Reviews Section */}
      <Reviews />

      {/* Vision Section */}
      <Vision />

      {/* Results Section */}
      <Result />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Template3;
