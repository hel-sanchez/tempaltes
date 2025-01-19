import React, { useState, useEffect } from "react";

const Header = () => {
  // State to handle mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle the full header visibility
  const toggleHeaderVisibility = () => {
    setIsHeaderVisible(!isHeaderVisible);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        setIsHeaderVisible(false);
      } else {
        setIsScrolled(false);
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-white">
      <div
        className={`bg-white ${
          isScrolled ? "fixed top-0 left-0 w-full z-50" : ""
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Hamburger Icon */}
          {isScrolled && !isHeaderVisible && (
            <button
              onClick={toggleHeaderVisibility}
              className="text-[#2E2E2E] focus:outline-none hover:text-[#FF5722] transition duration-300"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          )}

          {/* Full Header */}
          {isHeaderVisible && (
            <>
              {/* Logo */}
              <div className="text-2xl font-bold text-gradient">
                <a className="text-[#2E2E2E]">
                  Simple
                </a>
                <a className="text-[#FF5722]">
                  Projex
                </a>
              </div>

              {/* Navigation Links */}
              <nav className="hidden md:flex space-x-6">
                <a className="text-[#2E2E2E] font-medium hover:text-[#FF5722] transition duration-300">
                  Pricing
                </a>
                <a className="text-[#2E2E2E] font-medium hover:text-[#FF5722] transition duration-300">
                  Features
                </a>
                <a className="text-[#2E2E2E] font-medium hover:text-[#FF5722] transition duration-300">
                  Support
                </a>
              </nav>

              {/* Mobile Menu Icon */}
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-[#2E2E2E] focus:outline-none hover:text-[#FF5722] transition duration-300"
                >
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>

              {/* Desktop Buttons */}
              <div className="hidden md:flex space-x-4">
                <button className="bg-[#FF5722] text-white px-6 py-2 rounded-md hover:bg-[#D2691E] transition duration-300 font-semibold shadow-lg">
                  Get Started
                </button>
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        {isScrolled && !isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md py-4 px-6 space-y-4">
            <a className="block text-[#2E2E2E] font-medium hover:text-[#FF5722] transition duration-300">
              Pricing
            </a>
            <a className="block text-[#2E2E2E] font-medium hover:text-[#FF5722] transition duration-300">
              Features
            </a>
            <a className="block text-[#2E2E2E] font-medium hover:text-[#FF5722] transition duration-300">
              Support
            </a>

            {/* Mobile Buttons */}
            <div className="flex flex-col space-y-4">
              <a className="bg-[#FF5722] text-white px-6 py-2 rounded-md hover:bg-[#D2691E] transition duration-300 font-semibold shadow-lg">
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
