"use client";
import React, { useState, useEffect } from "react";
import About from "./about";
import Succeed from "./succeed";
import SimpleSteps from "./simplestep";
import Proposal from "./proposal";
import Footer from "./footer";

const New1 = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState("100vh"); // Initial header height as 100vh

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Shrink header when scrolling
      if (scrollPosition > 50) {
        setScrolling(true);
        setHeaderHeight("8vh"); // Shrink to 60px when scrolled
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
        className={`bg-white fixed top-0 left-0 w-full py-2 transition-all duration-1000 ease-in-out z-50 ${
          scrolling ? "bg-white shadow-md" : "bg-cover bg-center bg-no-repeat"
        }`}
        style={{
          backgroundImage: scrolling
            ? "none" // no background image when shrunk
            : "url('https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          height: headerHeight,
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 relative">
          {/* Logo */}
          <div className="mb-5">
            <a href="/">
              <img
                src={scrolling ? "/sideways.png" : "/sideways-white.png"}
                alt="Simple Projex Logo"
                className={`transition-all duration-1000 ${
                  scrolling ? "h-12" : "h-20"
                }`}
              />
            </a>
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
            <a
              className={`transition-colors duration-300 ${
                scrolling
                  ? "text-black hover:text-gray-700"
                  : "text-white hover:text-gray-300"
              }`}
            >
              About Us
            </a>
            <a
              className={`transition-colors duration-300 ${
                scrolling
                  ? "text-black hover:text-gray-700"
                  : "text-white hover:text-gray-300"
              }`}
            >
              Contact
            </a>
            <a
              className={`transition-colors duration-300 ${
                scrolling
                  ? "text-black hover:text-gray-700"
                  : "text-white hover:text-gray-300"
              }`}
            >
              Careers
            </a>
            <a
              className={`transition-colors duration-300 ${
                scrolling
                  ? "text-black hover:text-gray-700"
                  : "text-white hover:text-gray-300"
              }`}
            >
              Privacy Policy
            </a>
            <a
              className={`transition-colors duration-300 ${
                scrolling
                  ? "text-black hover:text-gray-700"
                  : "text-white hover:text-gray-300"
              }`}
            >
              FAQs
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex space-x-4">
            <button
              className={`bg-[#333333] text-white border-2 border-white mb-3 text-md px-4 py-2 border-black rounded-lg hover:bg-[#4682b4] hover:text-white transition duration-300 ${
                scrolling ? "text-sm px-2 py-1" : "text-md"
              }`}
            >
              Login
            </button>
            <button
              className={`bg-[#4682b4] border-2 mb-3 text-md border-white text-white px-4 py-2 rounded-lg hover:bg-[#333333] hover:text-white transition duration-300 ${
                scrolling ? "text-sm px-2 py-1" : "text-md"
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Main Content Inside Header (Visible only when header is expanded) */}
        {!scrolling && (
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 animate-fade-in relative">
              <span className="block text-lg sm:text-xl md:text-2xl text-white mb-5">
                Proposals Made Easy
              </span>
              <span className="relative inline-block text-7xl md:text-8xl lg:text-8xl leading-tight sm:leading-none">
                <span
                  className="relative text-[#ffa500]"
                  style={{
                    textShadow: "2px 2px 10px #333333",
                  }}
                >
                  Simple Projex
                </span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-10 animate-slide-left animate-delay-400 max-w-xl mx-auto">
              Are you tired of slow and inaccurate construction proposals?
            </p>
            <div className="space-x-8 animate-fade-in animate-delay-600">
              <button className="bg-[#4682b4] text-white border-2 border-black px-10 py-5 rounded-xl text-lg font-semibold hover:text-black hover:bg-[#ffa500] transition duration-300 transform hover:scale-105">
                Schedule a Demo
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`lg:hidden py-4 px-6 space-y-4 fixed left-0 w-full z-50 shadow-md ${
            scrolling ? "top-14 bg-opacity-100" : "top-20 bg-opacity-60" // Lower opacity before scrolling
          } bg-white transition-all duration-300`}
        >
          {["About Us", "Contact", "Careers", "Privacy Policy", "FAQs"].map(
            (link, index) => (
              <a key={index} className="block text-black hover:text-gray-700">
                {link}
              </a>
            )
          )}

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-4">
            <button className="bg-[#333333] text-white border-2 border-white text-md px-4 py-2 border-black rounded-lg hover:bg-[#4682b4] hover:text-white">
              Login
            </button>
            <button className="bg-[#4682b4] border-2 mb-3 text-md border-white text-white px-4 py-2 rounded-lg hover:bg-[#333333] hover:text-white">
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

      {/* Succeed Section */}
      <div
        style={{
          paddingTop: `${scrolling ? "0" : "100vh"}`,
          paddingBottom: "0",
        }}
        className="transition-all duration-1000 ease-in-out"
      >
        <Succeed />
      </div>

      {/* Simple Step Section */}
      <div
        style={{
          paddingTop: `${scrolling ? "0" : "100vh"}`,
          paddingBottom: "0",
        }}
        className="transition-all duration-1000 ease-in-out"
      >
        <SimpleSteps />
      </div>

      {/* Proposal Section */}
      <div
        style={{
          paddingTop: `${scrolling ? "0" : "100vh"}`,
          paddingBottom: "0",
        }}
        className="transition-all duration-1000 ease-in-out"
      >
        <Proposal />
      </div>

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default New1;
