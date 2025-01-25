import React from "react";

const TimeSaving = () => {
  return (
    <section className="relative bg-[#191919] py-16 px-8">
      {/* Main Section */}
      <div className="text-left md:ml-12 mb-14 mt-14">
        <h1 className="text-5xl font-bold text-[#e6a310] mb-4">
          Your Time-Saving Solution
        </h1>
        <p className="text-xl text-gray-300">
          Transform how you create proposals with unmatched efficiency.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* First Card */}
        <div className="relative rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
          <img
            src="5x_06.jpg"
            alt="5x more accuracy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-xl font-bold text-white px-4 text-center">
              Achieve 5x more accuracy to win bids.
            </h2>
          </div>
        </div>

        {/* Second Card */}
        <div className="relative rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
          <img
            src="10x_03.jpg"
            alt="10x faster proposals"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-xl font-bold text-white px-4 text-center">
              Create proposals 10x faster with our simple tool.
            </h2>
          </div>
        </div>

        {/* Third Card */}
        <div className="relative rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
          <img
            src="com_08.jpg"
            alt="Spend more time on projects"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-xl font-bold text-white px-4 text-center">
              Spend more time on projects, not paperwork.
            </h2>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="relative rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
          <img
            src="time_07.png"
            alt="Stay competitive"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-xl font-bold text-white px-4 text-center">
              Stay competitive in a rapidly evolving market.
            </h2>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <button
          onClick={() =>
            window.Calendly.initPopupWidget({
              url: "https://calendly.com/avorino/simple-projex-demo",
            })
          }
          className="bg-[#203a53] text-white px-10 py-5 rounded-xl text-lg font-semibold hover:text-black hover:bg-[#e6a310] hover:text-[#203a53] transition duration-300 transform hover:scale-105"
        >
          Schedule a Demo
        </button>
      </div>
    </section>
  );
};

export default TimeSaving;
