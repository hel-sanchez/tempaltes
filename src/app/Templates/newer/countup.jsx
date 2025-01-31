"use client";

import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { motion, useAnimation } from "framer-motion";

const pieData = [
  { name: "Contractors", value: 90, color: "#f2f2f2" },
  { name: "Working Days", value: 465, color: "#f4c04c" },
  { name: "Positive Feedbacks", value: 175, color: "#4b4b4b" },
  { name: "Awards", value: 39, color: "#f8b400" },
];

const Count = () => {
  const [activeData, setActiveData] = useState(
    pieData.map((d) => ({ ...d, value: 0 }))
  );
  const [countingValues, setCountingValues] = useState(
    pieData.map((d) => ({ ...d, count: 0 }))
  );
  const [endAngle, setEndAngle] = useState(0); // Initial endAngle for pie chart animation

  useEffect(() => {
    const timer = setTimeout(() => setActiveData(pieData), 500);

    // Start the count-up animation
    const countUpInterval = pieData.map((item, index) => {
      const interval = setInterval(() => {
        setCountingValues((prev) => {
          const updatedValues = [...prev];
          const currentValue = updatedValues[index].count;
          if (currentValue < item.value) {
            updatedValues[index].count = currentValue + 1;
          }
          return updatedValues;
        });
      }, 20); // Update every 20ms (can keep this same for smooth counting)

      return interval;
    });

    // Animate the pie chart opening (counter-clockwise direction)
    const angleInterval = setInterval(() => {
      setEndAngle((prev) => {
        if (prev < 360) {
          return prev + 2; // Increased increment for faster animation
        } else {
          clearInterval(angleInterval);
          return prev;
        }
      });
    }, 5); // Reduced interval for faster opening (was 10ms)

    return () => {
      clearTimeout(timer);
      countUpInterval.forEach(clearInterval);
      clearInterval(angleInterval);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white py-16 px-16 mt-16 mb-16">
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 mb-10 md:mb-0 text-center"
      >
        <h2 className="text-7xl font-bold text-[#e6a310] mb-4 font-serif">
          TRANSFORMING THE INDUSTRY:
        </h2>
        <p className="text-xl text-[#203a53] mb-6">
          Discover how we connect contractors with exciting opportunities and
          streamline project management for maximum efficiency and success.
        </p>

        <button
          className="bg-[#e6a310] text-[#191919] px-10 py-4 text-lg font-semibold uppercase hover:bg-[#203a53] hover:text-white transition duration-300"
          onClick={() =>
            window.Calendly.initPopupWidget({
              url: "https://calendly.com/avorino/simple-projex-demo",
            })
          }
        >
          Schedule a Demo
        </button>
      </motion.div>

      {/* Pie Chart Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <ResponsiveContainer width="80%" height={400}>
          <PieChart>
            <Pie
              data={activeData}
              dataKey="value"
              outerRadius={150}
              fill="#8884d8"
              label={({ name, value, cx, cy, midAngle }) => {
                const RADIAN = Math.PI / 180;
                const radius = 150 + 15;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);
                const currentValue =
                  countingValues.find((d) => d.name === name)?.count || 0;

                // Adjust x and y to position text on the sides
                const isLeft = midAngle > 90 && midAngle < 270; // Check if it's on the left side of the chart
                const offset = 5; // Adjust this for more/less space

                return (
                  <g>
                    {/* Place name text */}
                    <text
                      x={isLeft ? x - offset : x + offset} // Positioning text to the left or right
                      y={y}
                      fill="black"
                      dominantBaseline="central"
                      textAnchor={isLeft ? "end" : "start"} // Align text depending on position
                    >
                      {name}
                    </text>
                    {/* Place count-up text */}
                    <text
                      x={isLeft ? x - offset : x + offset} // Same as above for count-up text
                      y={y + 15} // Slight vertical offset for count-up
                      fill="black"
                      dominantBaseline="central"
                      textAnchor={isLeft ? "end" : "start"}
                    >
                      {currentValue}
                    </text>
                  </g>
                );
              }}
              labelLine={false} // Remove label line
              endAngle={endAngle} // Set the endAngle for the pie chart (this will animate)
              animationDuration={500} // Shortened duration for a faster animation
              isAnimationActive={true} // Enable animation
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    </section>
  );
};

export default Count;
