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
    text: "CONTRACTS",
  },
  {
    number: 465,
    icon: <Calendar />, // Bootstrap icon for working days
    text: "WORKING DAYS",
  },
  {
    number: 175,
    icon: <HandThumbsUp />, // Bootstrap icon for positive feedback
    text: "POSITIVE FEEDBACKS",
  },
  {
    number: 39,
    icon: <Trophy />, // Bootstrap icon for awards
    text: "AWARDS",
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
    className="relative min-h-screen bg-gradient-to-r from-[#e8e8e8] to-[#203a53]/35 py-20 px-8"
    id="about"
  >
    <div className="container mx-auto max-w-8xl mt-5">
      {/* Avoid Costly Mistakes Section with Different Background */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 mb-16 bg-[#203a53] py-12 px-8 rounded-lg shadow-lg">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-[#e8e8e8] mb-6 relative">
            <span className="absolute left-0 bottom-0 w-16 h-1 bg-[#e6a310] rounded-full"></span>
            Avoid Costly Mistakes
          </h2>
          <p className="text-lg text-[#e8e8e8] leading-relaxed mb-8">
            Is our proposal process leaving money on the table?
          </p>
            {/* Grid for 2 rows and 4 columns */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                  className="flex flex-col items-center text-center gap-4 p-4 border border-[#203a53] rounded-lg shadow-lg bg-white text-[#191919] hover:bg-[#e8e8e8] hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <span className="text-[#e6a310] text-3xl">{item.icon}</span>
                  <span className="text-sm md:text-base">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center md:text-left">
              <button className="inline-block bg-[#e6a310] text-black hover:text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#191919] hover:text-[#e6a310] transition-colors duration-300">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16"
        >
          {stats.map((item, index) => (
            <motion.div
              variants={statsItem}
              className="flex flex-col justify-center items-center text-center bg-none p-8 hover:scale-105 transition-transform duration-300 ease-in-out"
              key={index}
            >
              {/* Circle with Number */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-28 h-28 rounded-full border-4 border-[#e6a310] flex items-center justify-center">
                  <span
                    ref={ref}
                    className="text-[#191919] text-4xl font-bold drop-shadow-lg"
                  >
                    {isInView && (
                      <CountUp start={0} end={item.number} duration={6} />
                    )}
                  </span>
                </div>
              </div>

              {/* Icon and Text Section */}
              <div className="flex flex-col items-center">
                <span className="text-3xl text-[#e6a310] mb-2">
                  {item.icon}
                </span>
                <h4 className="text-lg font-semibold text-[#191919]">
                  {item.text}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Your Time-Saving Solution Section with Boarded Up Design */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 mb-16 bg-[#e] py-12 px-8 rounded-lg shadow-lg relative">
          {/* Content Section */}
          <div className="w-full md:w-1/2 text-center md:text-left relative z-10">
            <h2 className="text-4xl font-bold text-[#191919] mb-6 relative">
              <span className="absolute left-0 bottom-0 w-16 h-1 bg-[#e6a310] rounded-full"></span>
              Your Time-Saving Solution
            </h2>
            <p className="text-lg text-[#191919] leading-relaxed mb-8">
              Transform how you create proposals with unmatched efficiency.
            </p>
            {/* Grid Layout */}
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
                  className="flex flex-col items-center text-center p-6 border border-[#e8e8e8] rounded-lg shadow-lg bg-[#203a53] text-[#e8e8e8] hover:bg-[#191919] hover:scale-105 transition-all duration-300 ease-in-out relative"
                >
                  <span className="text-[#e6a310] text-3xl mb-4">
                    {item.icon}
                  </span>
                  <span className="text-sm md:text-base">{item.text}</span>
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
            className="absolute inset-0 bg-cover bg-center opacity-20 z-0 rounded-lg"
            style={{
              backgroundImage: "url('path-to-your-wooden-texture.jpg')",
            }}
          ></div>

          {/* Nail Effects */}
          <div className="absolute inset-0 flex justify-between items-start">
            <div className="w-4 h-4 bg-[#191919] rounded-full shadow-lg"></div>
            <div className="w-4 h-4 bg-[#191919] rounded-full shadow-lg"></div>
          </div>
          <div className="absolute inset-0 flex justify-between items-end">
            <div className="w-4 h-4 bg-[#191919] rounded-full shadow-lg"></div>
            <div className="w-4 h-4 bg-[#191919] rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
