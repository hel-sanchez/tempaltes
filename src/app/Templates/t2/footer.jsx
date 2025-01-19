import React from "react";

const Footer = () => {
  return (
    <footer className="relative p-6 bg-[#0b3d25] text-[#c1440e]">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Logo and Description */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0 flex items-center">
          <div className="ml-4 flex flex-col items-start">
            <img
              src="./simpleProjex2.1.png"
              alt="Simple Projex Logo"
              className="h-28 w-28 w-auto mb-4"
            />
            <p className="text-sm text-[#ededed]">
              Revolutionizing construction with cutting-edge technology and
              innovative solutions. Build smarter. Build better.
            </p>
          </div>
        </div>

        {/* Address Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold text-[#c1440e]">Address</h4>
          <p className="text-sm text-[#ededed]">123 Innovation Drive,</p>
          <p className="text-sm text-[#ededed]">Tech City, 56789</p>
          <p className="text-sm text-[#ededed]">United States</p>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold text-[#c1440e]">Quick Links</h4>
          <ul className="space-y-2">
            {["About Us", "Contact", "Careers", "Privacy Policy", "FAQs"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-[#ededed] hover:text-black"
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
          <h4 className="text-lg font-semibold text-[#c1440e]">Contact Us</h4>
          <p className="text-sm text-[#ededed]">Phone: (123) 456-7890</p>
          <p className="text-sm text-[#ededed]">Email: info@simpleprojex.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 text-center text-sm text-[#c1440e] mb-14 md:mb-0 md:mt-8">
        <p>
          &copy; {new Date().getFullYear()} SIMPLE PROJEX. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
