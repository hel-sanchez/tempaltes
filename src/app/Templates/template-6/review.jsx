import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  // State to check if the element is in view
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("clientReviews");
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Settings for the carousel
  const carouselSettings = {
    dots: true, // Show dots at the bottom
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-gradient-to-b from-[#E0E0E0] to-[#FFFFFF] py-10 px-6 md:px-16">
      {/* Client Reviews Section */}
      <div
        id="clientReviews"
        className={`mb-10 transition-all duration-700 ease-in-out mt-10 ${
          isVisible ? "animate-slide-left" : "opacity-0"
        }`}
      >
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl font-extrabold text-[#2C3E50] mb-8 leading-tight transition-all duration-500 ease-in-out transform hover:scale-110">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel for Reviews */}
        <Slider {...carouselSettings}>
          {/* Review 1 */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:rotate-1 hover:bg-[#F0F0F0]">
            <div className="flex items-center mb-4 transition-all duration-300 ease-in-out">
              <img
                src="https://via.placeholder.com/80"
                alt="Client 1"
                className="w-16 h-16 rounded-full mr-4 transform transition-all duration-300 ease-in-out hover:scale-125"
              />
              <div className="transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-1 transform transition-all duration-300 ease-in-out hover:scale-105">
                  John Doe
                </h3>
                <p className="text-[#7F8C8D]">CEO, Example Corp</p>
              </div>
            </div>
            <p className="text-[#2C3E50] italic transition-all duration-300 ease-in-out opacity-70 hover:opacity-100">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              neque vitae lorem volutpat aliquet. Vivamus ac efficitur quam."
            </p>
            <div className="mt-4 flex justify-center">
              <span className="text-[#FF5722]">
                &#9733;&#9733;&#9733;&#9733;&#9734;
              </span>{" "}
              {/* 4 stars */}
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:rotate-1 hover:bg-[#F0F0F0]">
            <div className="flex items-center mb-4 transition-all duration-300 ease-in-out">
              <img
                src="https://via.placeholder.com/80"
                alt="Client 2"
                className="w-16 h-16 rounded-full mr-4 transform transition-all duration-300 ease-in-out hover:scale-125"
              />
              <div className="transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-1 transform transition-all duration-300 ease-in-out hover:scale-105">
                  Jane Smith
                </h3>
                <p className="text-[#7F8C8D]">Marketing Head, XYZ Ltd.</p>
              </div>
            </div>
            <p className="text-[#2C3E50] italic transition-all duration-300 ease-in-out opacity-70 hover:opacity-100">
              "Sed ut neque vitae lorem volutpat aliquet. Vivamus ac efficitur
              quam. Donec vitae turpis sit amet justo tincidunt sollicitudin."
            </p>
            <div className="mt-4 flex justify-center">
              <span className="text-[#FF5722]">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>{" "}
              {/* 5 stars */}
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:rotate-1 hover:bg-[#F0F0F0]">
            <div className="flex items-center mb-4 transition-all duration-300 ease-in-out">
              <img
                src="https://via.placeholder.com/80"
                alt="Client 3"
                className="w-16 h-16 rounded-full mr-4 transform transition-all duration-300 ease-in-out hover:scale-125"
              />
              <div className="transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-1 transform transition-all duration-300 ease-in-out hover:scale-105">
                  Samuel Green
                </h3>
                <p className="text-[#7F8C8D]">CTO, Tech Innovators</p>
              </div>
            </div>
            <p className="text-[#2C3E50] italic transition-all duration-300 ease-in-out opacity-70 hover:opacity-100">
              "Nulla viverra metus ac odio bibendum, non bibendum ante
              scelerisque. Integer tristique magna ac dui gravida facilisis."
            </p>
            <div className="mt-4 flex justify-center">
              <span className="text-[#FF5722]">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>{" "}
              {/* 5 stars */}
            </div>
          </div>
        </Slider>

        {/* More Button */}
        <div className="text-center mt-10">
          <button className="px-8 py-4 bg-[#2C3E50] text-white text-lg font-semibold rounded-full shadow-md transform transition-all duration-300 ease-in-out hover:bg-[#34495E] hover:scale-105">
            More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
