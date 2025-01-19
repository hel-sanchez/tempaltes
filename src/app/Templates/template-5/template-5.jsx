"use client";
import React, { useState, useEffect } from "react";
import About from "./about";
import Review from "./review";
import Vision from "./vision";
import Result from "./result";
import Footer from "./footer";

const Template5 = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState("100vh"); // Initial header height as 100vh

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Shrink header when scrolling
      if (scrollPosition > 50) {
        setScrolling(true);
        setHeaderHeight("60px"); // Shrink to 60px when scrolled
      } else {
        setScrolling(false);
        setHeaderHeight("100vh"); // Default height
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header
        className={`bg-white fixed top-0 left-0 w-full py-4 transition-all duration-1000 ease-in-out z-50 ${
          scrolling ? "bg-white shadow-md" : "bg-cover bg-center bg-no-repeat"
        }`}
        style={{
          backgroundImage: scrolling
            ? "none" // no background image when shrunk
            : "url('https://images.pexels.com/photos/12896265/pexels-photo-12896265.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')",
          height: headerHeight,
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 relative">
          {/* Logo */}
          <div
            className={`text-2xl mb-5 font-bold text-black transition-all duration-1000 ${
              scrolling ? "text-lg" : "text-3xl"
            }`}
          >
            <a href="/">SIMPLE PROJEX</a>
          </div>

          {/* Mobile Hamburger Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-black mb-6 bg-white opacity-50 p-1/2 rounded-md"
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
          <nav className="hidden lg:flex space-x-8 mb-5">
            <a className="text-black hover:text-gray-700">Pricing</a>
            <a className="text-black hover:text-gray-700">Features</a>
            <a className="text-black hover:text-gray-700">Support</a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex space-x-4">
            <button
              className={`bg-red-800 text-white mb-3 text-md px-4 py-2 rounded-lg hover:bg-red-800 transition duration-300 ${
                scrolling ? "text-sm px-2 py-1" : "text-lg"
              }`}
            >
              Login
            </button>
            <button
              className={`bg-transparent border-2 mb-3 text-md border-black text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition duration-300 ${
                scrolling ? "text-sm px-2 py-1" : "text-lg"
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Main Content Inside Header (Visible only when header is expanded) */}
        {!scrolling && (
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 animate-fade-in relative">
              <span className="block text-lg sm:text-xl md:text-2xl text-black mb-5">
                New and Improved
              </span>
              <span className="relative inline-block text-6xl sm:text-7xl md:text-8xl lg:text-8xl leading-tight sm:leading-none">
                <span className="relative text-red-800">Vision Construct</span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-black mb-10 animate-slide-left animate-delay-400 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque it.
            </p>
            <div className="space-x-8 animate-fade-in animate-delay-600">
              <button className="bg-red-800 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-red-900 transition duration-300 transform hover:scale-105">
                Start Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-6 space-y-4 fixed top-16 left-0 w-full z-50 shadow-md">
          <a href="#pricing" className="block text-black hover:text-gray-700">
            Pricing
          </a>
          <a href="#features" className="block text-black hover:text-gray-700">
            Features
          </a>
          <a href="#support" className="block text-black hover:text-gray-700">
            Support
          </a>

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-4">
            <button className="bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition duration-300">
              Login
            </button>
            <button className="bg-transparent border-2 border-black text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
      )}

      {/* About Us Section */}
      <section
        style={{
          minHeight: "100vh",
          paddingTop: `${scrolling ? "60px" : "100vh"}`,
          paddingBottom: "0",
        }}
        className="transition-all duration-1000 ease-in-out mt-12"
      >
        <About />
      </section>

      {/* Reviews Section */}
      <div
        style={{
          paddingTop: `${scrolling ? "0" : "100vh"}`,
          paddingBottom: "0",
        }}
        className="transition-all duration-1000 ease-in-out"
      >
        <Review />
      </div>

      {/* Vision Section */}
      <div
        style={{
          paddingTop: `${scrolling ? "0" : "100vh"}`,
          paddingBottom: "0",
        }}
        className="transition-all duration-1000 ease-in-out"
      >
        <Vision />
      </div>

      {/* Result Section */}
      <div
        style={{
          paddingTop: `${scrolling ? "0" : "100vh"}`,
          paddingBottom: "0",
        }}
        className="transition-all duration-1000 ease-in-out"
      >
        <Result />
      </div>

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Template5;
