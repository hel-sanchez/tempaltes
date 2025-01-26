"use client";

import React, { useState, useEffect } from "react";
import About from "./about";
import Succeed from "./succeed";
import SimpleSteps from "./simplestep";
import Proposal from "./proposal";
import Footer from "./footer";
import Link from "next/link";

import { Envelope, Phone, PinMapFill, List } from "react-bootstrap-icons";

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
    <div className="flex flex-col ">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full py-2 transition-all duration-1000 ease-in-out z-50 ${
          scrolling
            ? "bg-[#e8e8e8] shadow-md"
            : "bg-cover bg-center bg-no-repeat"
        }`}
        style={{
          backgroundImage: scrolling ? "none" : `url('/headpic.jpg')`, // Corrected the URL string
          height: headerHeight,
        }}
      >
        {/* Top bar for contact info */}
        <div className="bg-transparent py-1 text-sm text-[#191919] hidden sm:block">
          <div className="max-w-7xl mx-auto flex justify-end items-center px-6">
            <div className="flex space-x-6">
              <div className="flex items-center space-x-1">
                <Envelope className="w-4 h-4 text-[#203a53]" />
                <span className="text-[#191919]">info@example.com</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4 text-[#203a53]" />
                <span className="text-[#191919]">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-1">
                <PinMapFill className="w-4 h-4 text-[#203a53]" />
                <span className="text-[#191919]">Irvine, California</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 relative">
          {/* Logo */}
          <div className="mb-5">
            <Link href="/">
              <img
                src={scrolling ? "/logo-blue.png" : "/logo-orangefill.png"}
                alt="Simple Projex Logo"
                className={`transition-all duration-1000 ${
                  scrolling ? "h-12" : "h-16"
                }`}
              />
            </Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#203a53] mb-6 bg-transparent justify-center text-center rounded-md"
          >
            <List className="w-6 h-6" />
          </button>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex space-x-4">
            <Link
              href="/login"
              className={`bg-[#203a53] text-[#e8e8e8] border-2 border-[#203a53]  mb-3 text-md px-4 py-2  rounded-lg hover:bg-[#e6a310] hover:border-[#e6a310] hover:text-[#191919] transition duration-300 ${
                scrolling ? "text-sm px-2 py-1" : "text-md"
              }`}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className={`bg-transparent border-2 mb-3 text-md border-[#203a53] text-[#203a53] px-4 py-2 rounded-lg  hover:border-[#e6a310] hover:text-[#e6a310] transition duration-300 ${
                scrolling ? "text-sm px-2 py-1" : "text-md"
              }`}
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Main Content Inside Header (Visible only when header is expanded) */}
        {!scrolling && (
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-extrabold leading-tight mb-2 animate-fade-in relative">
              <span className="relative text-[#203a53]">
                Proposals Made Easy
              </span>
            </h1>
            <p className="text-md sm:text-xl md:text-lg text-[#191919] mb-10 animate-slide-left animate-delay-400 max-w-xl mx-auto">
              If you're struggling with proposals, Simple Projex <br/>is the right
              solution for you!
            </p>
            <div className="space-x-8 animate-fade-in animate-delay-600">
              <button
                onClick={() =>
                  window.Calendly.initPopupWidget({
                    url: "https://calendly.com/avorino/simple-projex-demo",
                  })
                }
                className="bg-[#e6a310] text-[#191919] px-10 py-2  text-lg font-semibold hover:text-black hover:bg-[#203a53] hover:text-white transition duration-300 transform hover:scale-105"
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
        <SimpleSteps />
        <Proposal />
        <Footer />
      </div>
    </div>
  );
}
