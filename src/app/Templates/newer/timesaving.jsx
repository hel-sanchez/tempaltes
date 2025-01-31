import React from "react";
import { motion } from "framer-motion";

const TimeSaving = () => {
  return (
    <section className="relative bg-white py-16 px-5 font-sans">
      {/* Main Section */}
      <div className="text-center md:ml-12 mb-5 mt-10">
        <motion.h1
          className="text-6xl font-bold text-[#e6a310] mb-4 tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Time-Saving Solution
        </motion.h1>
        <motion.p
          className="text-2xl text-[#203a53] tracking-widest"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Transform how you create proposals with unmatched efficiency.
        </motion.p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 tracking-widest">
        {/* First Card */}
        <motion.div
          className="relative rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
          style={{ height: "550px" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="winbids.png"
            alt="5x more accuracy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-top justify-top">
            <h2 className="text-xl font-bold text-white px-4 mt-5">
              Achieve 5x more accuracy to win bids.
            </h2>
          </div>
        </motion.div>

        {/* Second Card */}
        <motion.div
          className="relative rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            src="faster.png"
            alt="10x faster proposals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex item-top justify-top">
            <h2 className="text-xl font-bold text-white px-4 mt-5">
              Create proposals 10x faster with our simple tool.
            </h2>
          </div>
        </motion.div>

        {/* Third Card */}
        <motion.div
          className="relative rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <img
            src="projects.jpg"
            alt="Spend more time on projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex item-top justify-top">
            <h2 className="text-xl font-bold text-white px-4 mt-5">
              Spend more time on projects, not paperwork.
            </h2>
          </div>
        </motion.div>

        {/* Fourth Card */}
        <motion.div
          className="relative rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <img
            src="competitive.jpg"
            alt="Stay competitive"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex item-top justify-top">
            <h2 className="text-xl font-bold text-white px-4 mt-5">
              Stay competitive in a rapidly evolving market.
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-12 ml-14"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <button
          onClick={() =>
            window.Calendly.initPopupWidget({
              url: "https://calendly.com/avorino/simple-projex-demo",
            })
          }
          className="bg-[#e6a310] text-[#191919] px-8 font-sans tracking-wider py-3 text-lg font-semibold uppercase hover:bg-[#203a53] hover:text-white transition duration-300"
        >
          Schedule a Demo
        </button>
      </motion.div>
    </section>
  );
};

export default TimeSaving;
