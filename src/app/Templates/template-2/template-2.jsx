"use client";

import Navbar from "./header";
import Footer from "./footer";
import About from "./about";
import Reviews from "./reviews";
import Vision from "./vision";
import Results from "./results";

function Template2() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main
        className="flex-grow relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/220885/pexels-photo-220885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="bg-black bg-opacity-50 h-full w-full absolute inset-0"></div>
        <div className="container mx-auto px-6 py-20 relative z-10 text-white">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left opacity-0 translate-y-10 animate-fade-slide">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                Build the Future with <br />
                <span className="text-blue-400">Vision Construct</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Empower your projects with advanced tools and innovative
                solutions designed for modern construction challenges. From
                planning to execution, we’ve got you covered.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
              <div className="relative group opacity-0 animate-fade-in overflow-hidden rounded-lg shadow-xl">
                <img
                  src="https://images.pexels.com/photos/7919267/pexels-photo-7919267.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt="Construction site"
                  className="rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105 w-[600px] h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* About */}
      <About />

      {/* Reviews */}
      <Reviews />

      {/* Vision Construct */}
      <Vision />

      {/* Results */}
      <Results />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Template2;
