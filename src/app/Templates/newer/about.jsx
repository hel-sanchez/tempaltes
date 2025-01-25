"use client";

import React, { useRef } from "react";
import CountUp from "react-countup";
import AvoidCostlyMistakes from "./avoidcostlymistake";
import TimeSaving from "./timesaving"; // Import TimeSaving component
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
    <section className="relative min-h-screen" id="about">
      <div className=" mx-auto max-w-8xl mt-5 bg-white">
        {/* Avoid Costly Mistakes Section with Different Background */}
        <div>
          <AvoidCostlyMistakes />
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

        {/* About Us Section */}
        <div>
          <TimeSaving />
        </div>
      </div>
    </section>
  );
};

export default About;
