import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SimpleSteps = ({ darkMode }) => {
  const images = ["/demo.jpg", "/login.jpg"];
  const [isFirstImageFront, setIsFirstImageFront] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstImageFront((prev) => !prev); // Swap images every 5 seconds
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`flex items-center justify-between py-16 px-8 mt-16 ${
        darkMode ? "bg-[#191919] text-gray-200" : "bg-white text-[#191919]"
      }`}
    >
      {/* Left side - Image with swapping transition effect */}
      <div className="w-full md:w-1/2 relative mb-10 md:mb-0 h-[600px]">
        {/* First Image */}
        <motion.img
          src={images[0]}
          alt="First Image"
          className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
          style={{ zIndex: isFirstImageFront ? 2 : 1 }}
          animate={{
            opacity: isFirstImageFront ? 1 : 0.5,
            scale: isFirstImageFront ? 1 : 0.95,
            y: isFirstImageFront ? 0 : -40,
          }}
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Second Image */}
        <motion.img
          src={images[1]}
          alt="Second Image"
          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
          style={{ zIndex: isFirstImageFront ? 1 : 2 }}
          animate={{
            opacity: isFirstImageFront ? 0.5 : 1,
            scale: isFirstImageFront ? 0.95 : 1,
            y: isFirstImageFront ? -40 : 0,
          }}
          initial={{ opacity: 0.5, y: -20 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>

      {/* Right side - Text and Button */}
      <div className="w-full md:w-1/2 p-14 text-left z-10">
        <motion.h2
          className={`text-5xl font-semibold mb-4 leading-tight ${
            darkMode ? "text-[#f6b800]" : "text-[#f6b800]"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          3 Simple Steps to Success
        </motion.h2>
        <motion.ul
          className={`list-inside list-disc text-2xl pl-6 mb-6 ${
            darkMode ? "text-gray-300" : "text-[#191919]"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
        >
          <li>Schedule Your Demo</li>
          <li>Set Up Your Account</li>
          <li>Streamline Your Proposals</li>
        </motion.ul>
        <motion.button
          onClick={() =>
            window.Calendly.initPopupWidget({
              url: "https://calendly.com/avorino/simple-projex-demo",
            })
          }
          className={`block mx-auto px-8 font-sans tracking-widest py-3 text-2sm font-semibold uppercase transition duration-300 ${
            darkMode
              ? "bg-[#e6a310] text-[#191919] hover:bg-[#203a53] hover:text-white"
              : "bg-[#e6a310] text-[#191919] hover:bg-[#203a53] hover:text-white"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
        >
          Schedule a Demo
        </motion.button>
      </div>
    </section>
  );
};

export default SimpleSteps;
