import React from "react";

const Footer = () => {
  return (
    <footer className="relative p-4 bg-gradient-to-b from-gray-100 to-white text-gray-800">
      <div className="container mx-auto px-6 py-10 flex flex-wrap justify-between">
        {/* Logo and Description */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-amber-600">SIMPLE PROJEX</h2>
          <p className="mt-4 text-sm text-gray-700">
            Revolutionizing construction with cutting-edge technology and
            innovative solutions. Build smarter. Build better.
          </p>
        </div>

        {/* Address Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-bold text-amber-600">Address</h4>
          <p className="mt-4 text-sm text-gray-700">123 Innovation Drive,</p>
          <p className="text-sm text-gray-700">Tech City, 56789</p>
          <p className="text-sm text-gray-700">United States</p>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-bold text-amber-600">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            {["About Us", "Services", "Projects", "Contact", "Blog"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-gray-600 hover:text-amber-600 transition"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="w-full md:w-1/4">
          <h4 className="text-lg font-bold text-amber-600">
            Subscribe to Updates
          </h4>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
            <button
              type="submit"
              className="mt-3 w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-white py-4 border-t border-gray-300">
        <div className="container mx-auto px-6 text-center text-sm text-gray-600">
          © 2025 Vision Construct | All Rights Reserved |{" "}
          <a className="text-amber-600 hover:text-amber-700 transition">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a className="text-amber-600 hover:text-amber-700 transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
