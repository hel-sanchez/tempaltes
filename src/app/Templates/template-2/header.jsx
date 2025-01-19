import React, { useState } from "react";

const Header = () => {
  // State to handle mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <a href="/">SIMPLE PROJEX</a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Pricing
          </a>
          <a
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Features
          </a>
          <a
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Support
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
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

        {/* Desktop Buttons (Login/Sign Up) */}
        <div className="hidden md:flex space-x-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 space-y-4">
          <a
            href="/pricing"
            className="block text-gray-600 hover:text-blue-600 transition"
          >
            Pricing
          </a>
          <a
            href="/features"
            className="block text-gray-600 hover:text-blue-600 transition"
          >
            Features
          </a>
          <a
            href="/support"
            className="block text-gray-600 hover:text-blue-600 transition"
          >
            Support
          </a>

          {/* Mobile Buttons (Login/Sign Up) */}
          <div className="flex flex-col space-y-4">
            <a
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </a>
            <a
              href="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
