"use client";

import React, { useState, useEffect } from "react";
import {
  Envelope,
  LightbulbFill,
  Phone,
  PinMapFill,
  PlugFill,
} from "react-bootstrap-icons";
import { motion } from "framer-motion";

import SimpleSteps from "./simplestep";
import TimeSaving from "./timesaving";
import Succeed from "./succeed";
import CountUp from "./countup";
import Proposal from "./proposal";
import Footer from "./footer";

import Link from "next/link";
import HeroSection from "./herosection";

export default function New1() {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState("100vh");
  const [screenSize, setScreenSize] = useState("desktop");
  const [darkMode, setDarkMode] = useState(false);

  // On first render, restore the dark mode preference from localStorage.
  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode) {
      setDarkMode(storedMode === "true");
    }
  }, []);

  // Save dark mode preference to localStorage whenever it changes.
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Define the updateScreenSize function outside of the effect hook.
  const updateScreenSize = () => {
    if (window.innerWidth <= 768) {
      setScreenSize("mobile");
    } else if (window.innerWidth <= 1024) {
      setScreenSize("tablet");
    } else {
      setScreenSize("desktop");
    }
  };

  useEffect(() => {
    // Attach scroll listener
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolling(true);
        if (screenSize === "mobile") {
          setHeaderHeight("8vh");
        } else if (screenSize === "tablet") {
          setHeaderHeight("15vh");
        } else {
          setHeaderHeight("13vh");
        }
      } else {
        setScrolling(false);
        setHeaderHeight("100vh");
      }
    };

    // Update screen size on resize
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize(); // Initial call to set the screen size

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [screenSize]);

  return (
    // The root div's background changes according to darkMode.
    <div className={`flex flex-col min-h-screen ${darkMode ? "bg-[#191919]" : "bg-white"}`}>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full py-2 transition-all duration-1000 ease-in-out z-50 ${
          scrolling
            ? darkMode
              ? "bg-[#191919] shadow-md"
              : "bg-white shadow-md"
            : "bg-cover bg-center bg-no-repeat"
        }`}
        style={{
          // When scrolling (minimized) use no background image and a plain background color;
          // when not scrolling, use the background image.
          backgroundImage: scrolling ? "none" : `url('/Home-picture.png')`,
          backgroundColor: scrolling
            ? darkMode
              ? "#191919"
              : "white"
            : undefined,
          height: headerHeight,
        }}
      >
        {/* White (or dark) overlay when header is expanded */}
        {!scrolling && (
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              darkMode ? "bg-[#191919] opacity-60" : "bg-white opacity-50"
            }`}
          ></div>
        )}

        {/* Navbar */}
        <div className="max-w-7xl mx-auto flex justify-between items-start relative">
          {/* Left Side: Contact Info and Login/Signup */}
          <div
            className={`flex flex-col transition-all duration-300 ${
              scrolling ? "space-y-1 mt-3" : "space-y-2 mt-6"
            }`}
          >
            {/* Contact Info at the Top */}
            <div className={`flex ${scrolling ? "space-x-4" : "space-x-6"}`}>
              <div className="flex items-center space-x-1">
                <Envelope
                  className={`transition-transform duration-300 ${
                    scrolling ? "w-4 h-4" : "w-6 h-6"
                  } ${darkMode ? "text-gray-300" : "text-[#191919]"}`}
                />
                <span
                  className={`transition-all duration-300 ${
                    scrolling ? "text-sm" : "text-lg"
                  } ${darkMode ? "text-gray-300" : "text-[#191919]"}`}
                >
                  build@simpleprojex.com
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone
                  className={`transition-transform duration-300 ${
                    scrolling ? "w-4 h-4" : "w-6 h-6"
                  } ${darkMode ? "text-gray-300" : "text-[#191919]"}`}
                />
                <span
                  className={`transition-all duration-300 ${
                    scrolling ? "text-sm" : "text-lg"
                  } ${darkMode ? "text-gray-300" : "text-[#191919]"}`}
                >
                  (123) 456-7890
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <PinMapFill
                  className={`transition-transform duration-300 ${
                    scrolling ? "w-4 h-4" : "w-6 h-6"
                  } ${darkMode ? "text-gray-300" : "text-[#191919]"}`}
                />
                <span
                  className={`transition-all duration-300 ${
                    scrolling ? "text-sm" : "text-lg"
                  } ${darkMode ? "text-gray-300" : "text-[#191919]"}`}
                >
                  Irvine, California
                </span>
              </div>
            </div>

            {/* Login/Signup Buttons at the Bottom (Desktop) */}
            <div className="hidden lg:flex space-x-2">
              {/* Dark/Light Mode Toggle Button */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`flex transition-all duration-300 ${
                  scrolling ? "w-20 h-10" : "w-24 h-12"
                } rounded-full border ${
                  darkMode
                    ? "border-white bg-[#191919]"
                    : "border-[#203a53] bg-[#e6a310]"
                } p-1 items-center hover:bg-gray-500 focus:outline-none`}
                aria-label="Toggle Theme"
              >
                {/* Switch Slider */}
                <div
                  className={`transition-all duration-300 transform ${
                    scrolling ? "w-8 h-8" : "w-10 h-10"
                  } bg-white rounded-full shadow-md ${
                    darkMode
                      ? scrolling
                        ? "translate-x-10"
                        : "translate-x-12"
                      : scrolling
                      ? "translate-x-0"
                      : "translate-x-0"
                  }`}
                >
                  {/* Icons inside the switch */}
                  <div className="absolute inset-0 flex justify-center items-center transition-all duration-300">
                    {darkMode ? (
                      <PlugFill className="w-6 h-6 text-gray-600 transition-all duration-300" />
                    ) : (
                      <LightbulbFill className="w-6 h-6 text-yellow-400 transition-all duration-300" />
                    )}
                  </div>
                </div>
              </button>

              <Link
                href="/login"
                className={`flex items-center justify-center border-2 rounded-lg transition-all duration-300 ${
                  scrolling
                    ? "text-sm px-2 py-1 min-h-[32px]"
                    : "text-lg px-6 py-3"
                } ${
                  darkMode
                    ? "bg-[#203a53] text-gray-200 border-[#203a53] hover:bg-[#e6a310] hover:text-[#191919]"
                    : "bg-[#203a53] text-[#e8e8e8] border-[#203a53] hover:bg-[#e6a310] hover:border-[#e6a310] hover:text-[#191919]"
                }`}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className={`flex items-center justify-center border-2 rounded-lg transition-all duration-300 ${
                  scrolling
                    ? "text-sm px-2 py-1 min-h-[32px]"
                    : "text-lg px-6 py-3"
                } ${
                  darkMode
                    ? "bg-[#e6a310] text-[#191919] border-[#203a53] hover:bg-[#203a53] hover:text-[#e6a310]"
                    : "bg-[#e6a310] text-[#203a53] border-[#203a53] hover:bg-[#203a53] hover:border-[#e6a310] hover:text-[#e6a310]"
                }`}
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Right Side: Logo */}
          <div className="ml-auto mb-5">
            <Link href="/">
              <img
                src={
                  // Replace with your dark mode logo if available.
                  scrolling
                    ? darkMode
                      ? "/logo-dangling-s-darkmode.png"
                      : "/logo-dangling-s.png"
                    : darkMode
                    ? "/logo-dangling-s-darkmode.png"
                    : "/logo-dangling-s.png"
                }
                alt="Simple Projex Logo"
                className={`transition-all duration-1000 ${
                  scrolling ? "h-20 mt-1" : "h-28 mt-3"
                }`}
              />
            </Link>
          </div>
        </div>

        {/* Main Content Inside Header (Visible only when header is expanded) */}
        {!scrolling && <HeroSection darkMode={darkMode} />}
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`lg:hidden py-4 px-6 space-y-4 fixed left-0 w-full z-50 shadow-md transition-all duration-300 ${
            scrolling ? "top-16" : "top-20"
          } ${darkMode ? "bg-gray-800" : "bg-white"}`}
        >
          {/* Contact Info for Mobile */}
          <div className="bg-transparent py-1 text-sm">
            <div className="flex flex-col space-y-3 px-4">
              <div className="flex items-center space-x-2">
                <Phone
                  className={`w-5 h-5 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                />
                <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  (123) 456-7890
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Envelope
                  className={`w-5 h-5 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                />
                <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  build@simpleprojex.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <PinMapFill
                  className={`w-5 h-5 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                />
                <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  Irvine, California
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-4">
            <Link
              href="/login"
              className={`border-2 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-[#203a53] text-gray-200 border-[#203a53] hover:bg-gray-600"
                  : "bg-[#333333] text-white border-white hover:bg-[#4682b4] hover:text-white"
              }`}
            >
              <span className="px-4 py-2 text-md">Login</span>
            </Link>
            <Link
              href="/signup"
              className={`border-2 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-[#e6a310] text-black border-[#e6a310] hover:bg-yellow-400"
                  : "bg-[#4682b4] text-white border-white hover:bg-[#333333] hover:text-white"
              }`}
            >
              <span className="px-4 py-2 text-md">Sign Up</span>
            </Link>
          </div>
        </div>
      )}

      {/* SimpleSteps Section */}
      <section
        style={{
          minHeight: "100vh",
          paddingTop: scrolling ? "60px" : "100vh", // Adjust padding as needed
          paddingBottom: "0",
        }}
        className={`transition-all duration-1000 ease-in-out mt-12 ${
          darkMode ? "bg-[#191919]" : "bg-white"
        }`}
      >
        <SimpleSteps darkMode={darkMode} />
      </section>

      {/* Succeed Section */}
      <motion.div
        style={{
          paddingTop: scrolling ? "0" : "100vh",
          paddingBottom: "0",
        }}
        className="transition-all duration-1000 ease-in-out"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: scrolling ? 1 : 0, y: scrolling ? 0 : 40 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Succeed darkMode={darkMode} />
        <CountUp darkMode={darkMode} />
        <Proposal darkMode={darkMode} />
        <TimeSaving darkMode={darkMode} />
        <Footer darkMode={darkMode} />{" "}
      </motion.div>
    </div>
  );
}
