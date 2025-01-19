import React from "react";

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
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {/* Step 1 */}
        <div className="flex flex-col items-center justify-center p-6 border border-[#b8b8b8] rounded-lg shadow-sm text-center max-w-xs">
          <h3 className="text-lg font-semibold text-[#333333] mb-2">
            Schedule Your Demo
          </h3>
          <p className="text-sm text-[#b8b8b8]">
            Experience our software in action.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center justify-center p-6 border border-[#b8b8b8] rounded-lg shadow-sm text-center max-w-xs">
          <h3 className="text-lg font-semibold text-[#333333] mb-2">
            Sign Up for Your Account
          </h3>
          <p className="text-sm text-[#b8b8b8]">
            Easy onboarding to get you started.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center justify-center p-6 border border-[#b8b8b8] rounded-lg shadow-sm text-center max-w-xs">
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
        <button className="px-6 py-3 bg-[#4682b4] text-[#ffffff] font-semibold text-lg rounded-lg shadow-md hover:bg-[#333333] transition-all duration-300">
          Schedule a Demo
        </button>
      </div>
    </div>
  );
};

export default SimpleSteps;
