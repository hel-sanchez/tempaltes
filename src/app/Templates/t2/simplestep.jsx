import React from "react";
import { BsFillCalendarCheckFill, BsPersonFill, BsFillGearFill } from "react-icons/bs";

const SimpleSteps = () => {
  return (
    <div className="bg-[#ffffff] py-20">
      {/* Header Section */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl font-bold text-[#333333] mb-4">
          3 Simple Steps to Success
        </h2>
        <p className="text-lg text-[#b8b8b8]">
          Build more efficiently with our software and support.
        </p>
      </div>

      {/* Steps Section */}
      <div className="flex flex-wrap justify-center gap-8 px-6">
        {/* Step 1 */}
        <div className="flex flex-col items-center justify-center p-8 border border-[#4682b4] bg-[#f1f1f1] rounded-xl shadow-lg hover:scale-105 transition-all duration-300 max-w-xs">
          <BsFillCalendarCheckFill className="text-[#4682b4] text-4xl mb-4" />
          <h3 className="text-lg font-semibold text-[#333333] mb-2">
            Schedule Your Demo
          </h3>
          <p className="text-sm text-[#b8b8b8]">
            Experience our software in action.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center justify-center p-8 border border-[#4682b4] bg-[#f1f1f1] rounded-xl shadow-lg hover:scale-105 transition-all duration-300 max-w-xs">
          <BsPersonFill className="text-[#4682b4] text-4xl mb-4" />
          <h3 className="text-lg font-semibold text-[#333333] mb-2">
            Sign Up for Your Account
          </h3>
          <p className="text-sm text-[#b8b8b8]">
            Easy onboarding to get you started.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center justify-center p-8 border border-[#4682b4] bg-[#f1f1f1] rounded-xl shadow-lg hover:scale-105 transition-all duration-300 max-w-xs">
          <BsFillGearFill className="text-[#4682b4] text-4xl mb-4" />
          <h3 className="text-lg font-semibold text-[#333333] mb-2">
            Maximize Your Proposals
          </h3>
          <p className="text-sm text-[#b8b8b8]">
            Create accurate proposals in minutes.
          </p>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="text-center mt-12">
        <button className="px-8 py-4 bg-[#4682b4] text-[#ffffff] font-semibold text-lg rounded-lg shadow-lg hover:bg-[#333333] transition-all duration-300">
          Schedule a Demo
        </button>
      </div>
    </div>
  );
};

export default SimpleSteps;
