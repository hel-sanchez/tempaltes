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
        setHeaderHeight("11vh"); // Shrink to 60px when scrolled
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
      className={`fixed top-0 left-0 w-full py-2 transition-all duration-1000 ease-in-out z-50 ${
        scrolling ? "bg-[#ededed] shadow-md" : "bg-cover bg-center bg-no-repeat"
      }`}
      style={{
        backgroundImage: scrolling
          ? "none" // no background image when shrunk
          : "url('/hero.png')",
        height: headerHeight,
      }}
    >
      {/* Top bar for contact info */}
      <div className="bg-transparent py-1 text-sm text-[#1a1a1a] hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-[#1a1a1a]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zM4 8c0 3.38 2.94 6.75 6 8.33V21h4v-4.67c3.06-1.58 6-4.95 6-8.33 0-4.42-3.58-8-8-8S4 3.58 4 8z"
                />
              </svg>
              <span>123 Main St, Cityville</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-[#1a1a1a]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>info@example.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-[#1a1a1a]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h11M9 21V4m0 0h3m-3 0H6"
                />
              </svg>
              <span>(123) 456-7890</span>
            </div>
          </div>
          <div>
            <a
              href="#contact"
              className="text-[#1a1a1a] bg-[#ededed] hover:text-[#c1440e]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 relative">
        {/* Logo */}
        <div className="mb-5">
          <a href="/">
            <img
              src={scrolling ? "/simpleProjex2.png" : "/simpleProjex2.png"}
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
            className="lg:hidden text-(#c1440e) mb-6 bg-[#ededed] opacity-50 p-1/2 rounded-md"
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
                ? "text-[#1a1a1a] hover:text-[#0b3d25]"
                : "text-[#1a1a1a] hover:text-[#0b3d25]"
              }`}
            >
              About Us
            </a>
            <a
              className={`transition-colors duration-300 ${
                scrolling
                ? "text-[#1a1a1a] hover:text-[#0b3d25]"
                : "text-[#1a1a1a] hover:text-[#0b3d25]"
              }`}
            >
              Contact
            </a>
            <a
              className={`transition-colors duration-300 ${
                scrolling
                ? "text-[#1a1a1a] hover:text-[#0b3d25]"
                : "text-[#1a1a1a] hover:text-[#0b3d25]"
              }`}
            >
              Careers
            </a>
            <a
              className={`transition-colors duration-300 ${
                scrolling
                ? "text-[#ededed] hover:text-[#1a1a1a]"
                  : "text-[#ededed] hover:text-[#1a1a1a]"
              }`}
            >
              Privacy Policy
            </a>
            <a
              className={`transition-colors duration-300 ${
                scrolling
                  ? "text-[#ededed] hover:text-[#1a1a1a]"
                  : "text-[#ededed] hover:text-[#1a1a1a]"
              }`}
            >
              FAQs
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex space-x-4">
            <button
              className={`bg-[#0b3d25] text-[#ededed]   mb-3 text-md px-4 py-2  rounded-lg hover:bg-[#c1440e] hover:text-[#ededed] transition duration-300 ${
                scrolling 
                ? "text-sm px-2 py-1" 
                : "text-md"
              }`}
            >
              Login
            </button>
            <button
              className={` mb-3 text-md bg-[#ededed] text-[#0b3d25] px-4 py-2 rounded-lg hover:text-[#ededed] hover:bg-[#c1440e] transition duration-300 ${
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
              <span className="block text-lg sm:text-xl md:text-2xl text-[#1a1a1a] mb-5">
                Proposals <span className="text-[#ededed]">Made Easy</span>
              </span>
              <span className="relative inline-block text-7xl md:text-8xl lg:text-8xl leading-tight sm:leading-none">
                <span
                  className="relative text-[#0b3d25]"
                >
                   <span className="text-[#c1440e]">Simple</span> Projex 
                </span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#1a1a1a] mb-10 animate-slide-left animate-delay-400 max-w-xl mx-auto">
              Are you tired of slow an<span className="text-[#ededed]">d inaccurate construction</span>   prop<span className="text-[#ededed]">osals?</span>
            </p>
            <div className="space-x-8 animate-fade-in animate-delay-600">
              <button className="bg-[#c1440e] text-white px-10 py-5 rounded-xl text-lg font-semibold hover:text-black hover:bg-[#0b3d25] hover:text-[#ededed] transition duration-300 transform hover:scale-105">
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
          {/* Contact Info for Mobile */}
          <div className="bg-transparent py-1 text-sm text-gray-700">
            <div className="flex flex-col space-y-3 px-4">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zM4 8c0 3.38 2.94 6.75 6 8.33V21h4v-4.67c3.06-1.58 6-4.95 6-8.33 0-4.42-3.58-8-8-8S4 3.58 4 8z"
                  />
                </svg>
                <span>123 Main St, Cityville</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h11M9 21V4m0 0h3m-3 0H6"
                  />
                </svg>
                <span>(123) 456-7890</span>
              </div>
              <div>
                <a
                  href="#contact"
                  className="text-[#c1440e] hover:underline hover:text-blue-800"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
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
            <button className="bg-[#c1440e] border-2 mb-3 text-md border-white text-white px-4 py-2 rounded-lg hover:bg-[#333333] hover:text-white">
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
