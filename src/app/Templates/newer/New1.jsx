"use client";

import React, { useState, useEffect } from "react";
import { Envelope, Phone, PinMapFill } from "react-bootstrap-icons";
import { motion } from "framer-motion";

import SimpleSteps from "./simplestep";
import TimeSaving from "./timesaving";
import Succeed from "./succeed";
import CountUp from "./countup";
import Proposal from "./proposal";
import Footer from "./footer";

import Link from "next/link";

export default function New1() {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState("100vh"); // Initial header height as 100vh
  const [screenSize, setScreenSize] = useState("desktop"); // Tracks screen size

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth <= 768) {
        setScreenSize("mobile");
      } else if (window.innerWidth <= 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        setScrolling(true);

        // Adjust header height based on screen size
        if (screenSize === "mobile") {
          setHeaderHeight("8vh");
        } else if (screenSize === "tablet") {
          setHeaderHeight("15vh");
        } else {
          setHeaderHeight("13vh");
        }
      } else {
        setScrolling(false);
        setHeaderHeight("100vh"); // Default height
      }
    };

    // Update screen size on resize
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize(); // Initial call

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [screenSize]); // Re-run effect when screenSize changes

  return (
    <div className="flex flex-col bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full py-2 transition-all duration-1000 ease-in-out z-50 ${
          scrolling ? "bg-white shadow-md" : "bg-cover bg-center bg-no-repeat"
        }`}
        style={{
          backgroundImage: scrolling ? "none" : `url('/Home-picture.png')`,
          height: headerHeight,
        }}
      >
        {/* White Overlay */}
        {!scrolling && (
          <div className="absolute inset-0 bg-white opacity-50 transition-opacity duration-500"></div>
        )}

        {/* Navbar */}
        <div className="max-w-7xl mx-auto flex justify-between items-start relative">
          {/* Left Side: Contact Info and Login/Signup */}
          <div className="flex flex-col space-y-1 mt-3">
            {/* Contact Info at the Top */}
            <div className="flex space-x-6">
              <div className="flex items-center space-x-1">
                <Envelope className="w-4 h-4 text-[#191919] transition-transform duration-300" />
                <span className="text-[#191919]">info@example.com</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4 text-[#191919] transition-transform duration-300" />
                <span className="text-[#191919]">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-1">
                <PinMapFill className="w-4 h-4 text-[#191919] transition-transform duration-300" />
                <span className="text-[#191919]">Irvine, California</span>
              </div>
            </div>

            {/* Login/Signup Buttons at the Bottom */}
            <div className="hidden lg:flex space-x-4">
              <Link
                href="/login"
                className={`bg-[#203a53] text-[#e8e8e8] border-2 border-[#203a53] mb-3 text-md px-4 py-2 rounded-lg hover:bg-[#e6a310] hover:border-[#e6a310] hover:text-[#191919] transition-all duration-300 ${
                  scrolling ? "text-sm px-2 py-1" : "text-md"
                }`}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className={`bg-[#e6a310] border-2 mb-3 text-md border-[#203a53] text-[#203a53] px-4 py-2 rounded-lg hover:border-[#e6a310] hover:bg-[#203a53] hover:text-white transition-all duration-300 ${
                  scrolling ? "text-sm px-2 py-1" : "text-md"
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
                src={scrolling ? "/logo-no-bg.png" : "/logo-no-bg.png"}
                alt="Simple Projex Logo"
                className={`transition-all duration-1000 ${
                  scrolling ? "h-20 scale-up mt-1" : "h-28 mt-3"
                }`}
              />
            </Link>
          </div>
        </div>

        {/* Main Content Inside Header (Visible only when header is expanded) */}
        {!scrolling && (
          <div className="absolute bottom-40 left-16 w-3/4 pl-14 text-left animate-fade-up">
            <h1 className="text-6xl font-bold text-[#203a53] leading-tight">
              Are you tired of slow and <br />
              inaccurate construction proposals?
            </h1>
            <p className="text-2xl text-[#191919] mt-4">
              Proposals done in minutes, higher <br />
              accuracy, and increased profitability.
            </p>
            <div className="mt-6">
              <button
                onClick={() =>
                  window.Calendly.initPopupWidget({
                    url: "https://calendly.com/avorino/simple-projex-demo",
                  })
                }
                className="bg-[#e6a310] text-[#191919] px-8 font-sans tracking-wider py-3 text-lg font-bold uppercase hover:bg-[#203a53] hover:text-white transition-all duration-300"
              >
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
            scrolling ? "top-16 bg-opacity-100" : "top-20 bg-opacity-60" // Lower opacity before scrolling
          } bg-white transition-all duration-300`}
        >
          {/* Contact Info for Mobile */}
          <div className="bg-transparent py-1 text-sm text-gray-700">
            <div className="flex flex-col space-y-3 px-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-gray-600" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Envelope className="w-5 h-5 text-gray-600" />
                <span>info@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <PinMapFill className="w-5 h-5 text-gray-600" />
                <span>Irvine, California</span>
              </div>
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-4">
            <Link
              href="/login"
              className="bg-[#333333] text-white border-2 border-white text-md px-4 py-2 border-black rounded-lg hover:bg-[#4682b4] hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-[#4682b4] border-2 mb-3 text-md border-white text-white px-4 py-2 rounded-lg hover:bg-[#333333] hover:text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}

      {/* SimpleSteps Section */}
      <section
        style={{
          minHeight: "100vh",
          paddingTop: `${scrolling ? "60px" : "100vh"}`,
          paddingBottom: "0",
        }}
        className="transition-all duration-1000 ease-in-out mt-12"
      >
        <SimpleSteps />
      </section>

      {/* Line Section */}
      <hr className="border-t-3 border-[#191919]" />

      {/* HelpSucceed Section */}
      <motion.div
        style={{
          paddingTop: `${scrolling ? "0" : "100vh"}`,
          paddingBottom: "0",
        }}
        className="transition-all duration-1000 ease-in-out"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: scrolling ? 1 : 0, y: scrolling ? 0 : 40 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Succeed />
      </motion.div>

      {/* Line Section */}
      <hr className="border-t-3 border-[#191919]" />

      {/* Countup Section */}
      <motion.div
        style={{
          paddingTop: `${scrolling ? "0" : "100vh"}`,
          paddingBottom: "0",
        }}
        className="transition-all duration-1000 ease-in-out"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: scrolling ? 1 : 0, y: scrolling ? 0 : 40 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <CountUp />
      </motion.div>

      {/* Line Section */}
      <hr className="border-t-3 border-[#191919]" />

      {/* TimeSaving Section */}
      <motion.div
        style={{
          paddingTop: `${scrolling ? "0" : "100vh"}`,
          paddingBottom: "0",
        }}
        className="transition-all duration-1000 ease-in-out"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: scrolling ? 1 : 0, y: scrolling ? 0 : 40 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Proposal />
      </motion.div>

      {/* Line Section */}
      <hr className="border-t-3 border-[#191919]" />

      {/* Goodbye Section */}
      <motion.div
        style={{
          paddingTop: `${scrolling ? "0" : "100vh"}`,
          paddingBottom: "0",
        }}
        className="transition-all duration-1000 ease-in-out"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: scrolling ? 1 : 0, y: scrolling ? 0 : 40 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <TimeSaving />
      </motion.div>

      {/* Line Section */}
      <hr className="border-t-3 border-[#191919]" />

      {/* Footer Section */}
      <motion.div
        style={{
          paddingTop: `${scrolling ? "0" : "100vh"}`,
          paddingBottom: "0",
        }}
        className="transition-all duration-1000 ease-in-out"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: scrolling ? 1 : 0, y: scrolling ? 0 : 40 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
