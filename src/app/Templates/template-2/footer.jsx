import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-6 py-10 flex flex-wrap justify-between">
        {/* Logo and Description */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-blue-600">SIMPLE PROJEX</h2>
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad
            officia ea expedita!
          </p>
        </div>

        {/* Address Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-bold text-blue-600">Address</h4>
          <p className="mt-4 text-sm">Address 1,</p>
          <p className="text-sm">Address 2,</p>
          <p className="text-sm">State, Country</p>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-bold text-blue-600">Links</h4>
          <ul className="mt-4 space-y-2">
            {["Pricing", "Demo", "Press", "Support Hub", "Contact"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-blue-500 hover:text-blue-700 transition"
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
          <h4 className="text-lg font-bold text-blue-600">
            Subscribe to our Newsletter
          </h4>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto px-6 text-center text-sm text-gray-600">
          © 2025 Avorino | All Rights Reserved |{" "}
          <a
            className="text-blue-500 hover:text-blue-700 transition"
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            className="text-blue-500 hover:text-blue-700 transition"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
