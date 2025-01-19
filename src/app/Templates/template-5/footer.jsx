import React from "react";

const Footer = () => {
  return (
    <footer className="relative p-6 bg-gradient-to-b from-gray-300 via-gray-200 to-white text-gray-800">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Logo and Description */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-black">SIMPLE PROJEX</h2>
          <p className="mt-4 text-sm text-gray-600">
            Revolutionizing construction with cutting-edge technology and
            innovative solutions. Build smarter. Build better.
          </p>
        </div>

        {/* Address Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold text-red-600">Address</h4>
          <p className="mt-4 text-sm text-gray-600">123 Innovation Drive,</p>
          <p className="text-sm text-gray-600">Tech City, 56789</p>
          <p className="text-sm text-gray-600">United States</p>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold text-red-600">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            {["About Us", "Services", "Projects", "Contact", "Blog"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/4">
          <h4 className="text-lg font-semibold text-red-600">Contact Us</h4>
          <p className="mt-4 text-sm text-gray-600">Phone: (123) 456-7890</p>
          <p className="text-sm text-gray-600">Email: info@simpleprojex.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-2 text-center text-sm text-gray-600 mb-12">
        <p>&copy; {new Date().getFullYear()} SIMPLE PROJEX. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
