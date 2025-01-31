import React from "react";
import { Phone, Envelope, PinMapFill } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer
      id="proposalStress"
      className="relative bg-no-repeat bg-cover bg-top p-8 bg-white shadow-lg"
      style={{ backgroundImage: "url('goodbye.png')" }}
    >
      {/* White Overlay Behind Content */}
      <div className="absolute inset-0 bg-white opacity-70 z-0"></div>

      <div className="container mx-auto flex flex-wrap justify-between relative z-10">
        {/* Logo and Description */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0 flex items-center pr-10">
          <div className="ml-4 flex flex-col items-start">
            <img
              src="/logo-no-bg.png"
              alt="Simple Projex Logo"
              className="h-15 w-15 w-auto mb-4"
            />
            <p className="text-sm text-black">
              Revolutionizing construction with cutting-edge technology and
              innovative solutions. Build smarter. Build better.
            </p>
          </div>
        </div>

        {/* Address Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold text-[#191919] mb-2">
            Visit Us
          </h4>
          <div className="flex items-center text-[#191919]">
            <PinMapFill className="w-5 h-5 mr-2 text-black" />
            <p className="text-sm">Irvine, California</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-semibold text-[#191919] mb-2">
            Get in Touch
          </h4>
          <div className="flex items-center text-[#191919] mb-2">
            <Phone className="w-5 h-5 mr-2 text-black" />
            <p className="text-sm">Call Us: (123) 456-7890</p>
          </div>
          <div className="flex items-center text-[#191919] mb-2">
            <Envelope className="w-5 h-5 mr-2 text-black" />
            <p className="text-sm">Email Us: info@simpleprojex.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-sm text-black text-semibold relative z-10">
        <p>
          &copy; {new Date().getFullYear()} Simple Projex. All Rights Reserved.
        </p>
        <p className="text-sm text-[#191919] mt-2">
          We are committed to delivering high-quality solutions with a focus on
          sustainability and innovation.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
