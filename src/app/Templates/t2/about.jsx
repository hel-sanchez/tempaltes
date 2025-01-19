"use client";

import React, { useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  Calendar,
  HandThumbsUp,
  Trophy,
  Hourglass,
  FileLock,
  FileText,
  GraphDown,
  FileBarGraph,
  BarChart,
  Globe,
  Lightning,
  Bullseye,
} from "react-bootstrap-icons"; // Import Bootstrap icons

const stats = [
  {
    number: 90,
    icon: <Briefcase />, // Bootstrap icon for contracts
    text: "contracts",
  },
  {
    number: 465,
    icon: <Calendar />, // Bootstrap icon for working days
    text: "working days",
  },
  {
    number: 175,
    icon: <HandThumbsUp />, // Bootstrap icon for positive feedback
    text: "positive feedbacks",
  },
  {
    number: 39,
    icon: <Trophy />, // Bootstrap icon for awards
    text: "awards",
  },
];

// animation
const statsContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const statsItem = {
  hidden: { y: 20, opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      className="relative min-h-screen bg-gradient-to-r from-[#f1f1f1] to-[#ffffff] py-20 px-8"
      id="about"
    >
      <div className="container mx-auto max-w-8xl mt-5">
        {/* Avoid Costly Mistakes Section with Different Background */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 mb-16 bg-[#f7f7f7] py-12 px-8 rounded-lg shadow-lg">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-[#4682b4] mb-6 relative">
              <span className="absolute left-0 bottom-0 w-16 h-1 bg-[#ffa500] rounded-full"></span>
              Avoid Costly Mistakes
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Is our proposal process leaving money on the table?
            </p>
            {/* Grid for smaller screens (1 column), larger screens (2 columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  text: "Proposals take too long to create.",
                  icon: <Hourglass />,
                },
                {
                  text: "Inefficiently limits your growth potential.",
                  icon: <GraphDown />,
                },
                {
                  text: "Inconsistent proposals damage your reputation.",
                  icon: <FileLock />,
                },
                {
                  text: "Complex software confuses your team.",
                  icon: <FileText />,
                },
                {
                  text: "Inaccurate estimates hurt your bottom line.",
                  icon: <FileBarGraph />,
                },
                {
                  text: "You risk losing clients with delays.",
                  icon: <Hourglass />,
                },
                {
                  text: "Excel spreadsheets aren't cutting it anymore.",
                  icon: <FileBarGraph />,
                },
                {
                  text: "Lack of organization leads to missed deadlines.",
                  icon: <Calendar />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 border border-[#4682b4] rounded-lg shadow-lg bg-white text-[#333333] hover:bg-[#f1f1f1] hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <span className="text-[#4682b4] text-xl">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <button className="inline-block bg-[#ffa500] text-black hover:text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#4682b4] transition-colors duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>

        {/* Achievements with Counting Numbers */}
        <motion.div
          variants={statsContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16"
        >
          {stats.map((item, index) => (
            <motion.div
              variants={statsItem}
              className="flex flex-col justify-center items-center text-center bg-white p-6 rounded-lg shadow-lg"
              key={index}
            >
              {/* Digital Styled Number */}
              <div
                ref={ref}
                className="flex items-center justify-center text-black text-5xl mb-2 font-[Press Start 2P], monospace drop-shadow-lg"
              >
                {isInView && (
                  <CountUp start={0} end={item.number} duration={6} />
                )}
              </div>

              {/* Text Section */}
              <div className="flex items-center text-xl font-semibold text-[#4682b4]">
                <span className="mr-2">{item.icon}</span> <h4>{item.text}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Your Time-Saving Solution Section with Boarded Up Design */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 mb-16 bg-[#4682b4] py-12 px-8 rounded-lg shadow-lg relative">
          <div className="w-full md:w-1/2 text-center md:text-left relative z-10">
            <h2 className="text-4xl font-bold text-[#ffa500] mb-6 relative">
              <span className="absolute left-0 bottom-0 w-16 h-1 bg-[#ffa500] rounded-full"></span>
              Your Time-Saving Solution
            </h2>
            <p className="text-lg text-white leading-relaxed mb-8">
              Transform how you create proposals with unmatched efficiency.
            </p>
            {/* Grid for smaller screens (1 column), larger screens (2 columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  text: "Create proposals 10x faster with our simple tool.",
                  icon: <Lightning />,
                },
                {
                  text: "Achieve 5x more accuracy to win bids.",
                  icon: <Bullseye />,
                },
                {
                  text: "Spend more time on projects, not paperwork.",
                  icon: <BarChart />,
                },
                {
                  text: "Stay competitive in a rapidly evolving market.",
                  icon: <Globe />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 border border-[#4682b4] text-[#333333] rounded-lg shadow-lg bg-white hover:bg-[#f1f1f1] hover:scale-105 transition-all duration-300 ease-in-out relative"
                >
                  <span className="text-[#4682b4] text-xl">{item.icon}</span>
                  <span>{item.text}</span>
                  {/* Nail Icons */}
                  <span className="absolute top-0 left-0 p-1 text-[#4682b4] text-xl">
                    🪛
                  </span>
                  <span className="absolute bottom-0 right-0 p-1 text-[#4682b4] text-xl">
                    🪛
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <button className="inline-block bg-[#ffa500] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#333333] hover:text-white transition-colors duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>

          {/* Background "Boarded Up" Design */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
            style={{
              backgroundImage: "url('path-to-your-wooden-texture.jpg')",
            }}
          ></div>
          {/* Nail Effects */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="absolute top-4 left-4 w-4 h-4 bg-[#333333] rounded-full shadow-lg"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 bg-[#333333] rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
