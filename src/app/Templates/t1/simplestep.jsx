import React from "react";
import {
  BsFillCalendarCheckFill,
  BsPersonFill,
  BsFillGearFill,
} from "react-icons/bs";

const SimpleSteps = () => {
  return (
    <div className="bg-[#e8e8e8] py-20">
      {/* Header Section */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl font-bold text-[#203a53] mb-4">
          3 Simple Steps to Success
        </h2>
        <p className="text-lg text-[#191919]">
          Build more efficiently with our software and support.
        </p>
      </div>

      {/* Steps Section */}
      <div className="flex flex-wrap justify-center gap-12 px-6">
        {/* Step 1 */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-[5px] border-[#203a53] mb-4 transition-transform duration-300 group hover:scale-105">
            <div className="absolute w-24 h-24 bg-white rounded-full border-[3px] border-[#203a53] group-hover:bg-[#191919] hover:scale-105 transition-colors duration-300 flex items-center justify-center">
              <BsFillCalendarCheckFill className="text-[#e6a310] text-4xl transition-colors duration-300 group-hover:text-[#e8e8e8]" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-[#191919] mb-2">
            Schedule Your Demo
          </h3>
          <p className="text-sm text-[#191919]">
            Experience our software in action.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-[5px] border-[#203a53] mb-4 transition-transform duration-300 group hover:scale-105">
            <div className="absolute w-24 h-24 bg-white rounded-full border-[3px] border-[#203a53] group-hover:bg-[#191919] transition-colors duration-300 flex items-center hover:scale-105 justify-center">
              <BsPersonFill className="text-[#e6a310] text-4xl transition-colors duration-300 group-hover:text-[#e8e8e8]" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-[#191919] mb-2">
            Sign Up for Your Account
          </h3>
          <p className="text-sm text-191919">
            Easy onboarding to get you started.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-[5px] border-[#203a53] mb-4 transition-transform duration-300 group hover:scale-105">
            <div className="absolute w-24 h-24 bg-white rounded-full border-[3px] border-[#203a53] group-hover:bg-[#191919] transition-colors duration-300 flex items-center justify-center hover:scale-105">
              <BsFillGearFill className="text-[#e6a310] text-4xl transition-colors duration-300 group-hover:text-[#e8e8e8]" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-[#333333] mb-2">
            Maximize Your Proposals
          </h3>
          <p className="text-sm text-black">
            Create accurate proposals in minutes.
          </p>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="text-center mt-12">
        <button className="px-8 py-4 bg-[#e6a310] text-[#e8e8e8] font-semibold text-lg rounded-lg shadow-lg hover:bg-[#203a53] transition-all duration-300 hover:scale-105">
          Schedule a Demo
        </button>
      </div>
    </div>
  );
};

export default SimpleSteps;