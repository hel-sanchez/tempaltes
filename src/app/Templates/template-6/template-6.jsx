"use client";

import React from "react";
import Header from "./header";
import Footer from "./footer";
import About from "./about";
import Review from "./review";
import Vision from "./vision";
import Result from "./result";

const Template6 = () => {
  return (
    <div className="min-h-screen flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="bg-[#FFFFFF] py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl font-semibold text-[#FF5722] animate-fade-in">
              New and Improved
            </h1>
            <h2 className="text-4xl md:text-7xl font-bold text-[#607D8B] mt-4 animate-slide-in">
              Vision Construct
            </h2>
            <p className="mt-6 text-[#4B4B4B] animate-fade-in">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vulputate diam et purus tincidunt, ac facilisis felis malesuada.
              Suspendisse potenti. Vivamus fermentum efficitur magna.
            </p>
            <button
              className="mt-8 px-6 py-3 bg-[#FF5722] text-white font-semibold rounded-md shadow-lg hover:bg-[#607D8B] transition duration-300 animate-bounce-in"
              onClick={() => alert("Start Now clicked!")}
            >
              Start Now
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
            {/* Main Image */}
            <img
              src="https://images.pexels.com/photos/1238864/pexels-photo-1238864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Vision Construct"
              className="w-full max-w-xs md:max-w-lg h-auto object-cover rounded-lg shadow-lg animate-scale-in"
            />

            {/* Small Image 1 */}
            <img
              src="https://images.pexels.com/photos/190417/pexels-photo-190417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Improvement"
              className="absolute top-0 left-0 transform -translate-x-8 -translate-y-8 w-24 h-24 md:w-32 md:h-32 object-cover rounded-full shadow-md animate-slide-in"
            />

            {/* Small Image 2 */}
            <img
              src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Progress"
              className="absolute bottom-0 right-0 transform translate-x-3 translate-y-8 w-24 h-24 md:w-32 md:h-32 object-cover rounded-full shadow-md animate-slide-in"
            />
          </div>
        </div>
      </main>

      {/* About Section */}
      <About />

      {/* Review Section */}
      <Review />

      {/* Vision Section */}
      <Vision />

      {/* Result Section */}
      <Result />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Template6;
