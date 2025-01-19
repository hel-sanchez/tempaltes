import React from "react";

const Footer = () => {
  return (
    <footer className="relative p-4 bg-gradient-to-b from-gray-300 to-[#FFFFFF] text-[#2E2E2E]">
      <div className="container mx-auto px-6 py-10 flex flex-wrap justify-between">
        {/* Logo and Description */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-[#FF5722]">SIMPLE PROJEX</h2>
          <p className="mt-4 text-sm text-[#607D8B]">
            Revolutionizing construction with cutting-edge technology and
            innovative solutions. Build smarter. Build better.
          </p>
        </div>

        {/* Address Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-bold text-[#FF5722]">Address</h4>
          <p className="mt-4 text-sm text-[#607D8B]">123 Innovation Drive,</p>
          <p className="text-sm text-[#607D8B]">Tech City, 56789</p>
          <p className="text-sm text-[#607D8B]">United States</p>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-bold text-[#FF5722]">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            {["About Us", "Services", "Projects", "Contact", "Blog"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-[#607D8B] hover:text-[#FF5722] transition"
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
          <h4 className="text-lg font-bold text-[#FF5722]">
            Subscribe to Updates
          </h4>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-[#F5F5F5] text-[#2E2E2E] border border-[#BDBDBD] focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
            />
            <button
              type="submit"
              className="mt-3 w-full bg-[#FF5722] text-white py-2 rounded-md hover:bg-[#FF7043] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#FFFFFF] py-4 border-t border-[#BDBDBD]">
        <div className="container mx-auto px-6 text-center text-sm text-[#607D8B]">
          © 2025 Vision Construct | All Rights Reserved |{" "}
          <a className="text-[#FF5722] hover:text-[#FF7043] transition">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a className="text-[#FF5722] hover:text-[#FF7043] transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
