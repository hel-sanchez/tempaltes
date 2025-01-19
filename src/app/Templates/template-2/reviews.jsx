import React, { useEffect, useState } from "react";

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

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white p-5">
      {/* Client Reviews Section */}
      <div
        id="clientReviews"
        className={`mb-10 transition-all duration-700 ease-in-out mt-10 ${
          isVisible ? "animate-slide-left" : "opacity-0"
        }`}
      >
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl font-extrabold text-blue-600 mb-8 leading-tight transition-all duration-500 ease-in-out transform hover:scale-110">
            What Our Clients Say
          </h2>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
          {/* Review 1 */}
          <div className="bg-white p-8 rounded-lg shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:rotate-1 hover:bg-gray-50">
            <div className="flex items-center mb-4 transition-all duration-300 ease-in-out">
              <img
                src="https://via.placeholder.com/80"
                alt="Client 1"
                className="w-16 h-16 rounded-full mr-4 transform transition-all duration-300 ease-in-out hover:scale-125"
              />
              <div className="transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-blue-600 mb-1 transform transition-all duration-300 ease-in-out hover:scale-105">
                  John Doe
                </h3>
                <p className="text-gray-500">CEO, Example Corp</p>
              </div>
            </div>
            <p className="text-gray-700 italic transition-all duration-300 ease-in-out opacity-70 hover:opacity-100">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              neque vitae lorem volutpat aliquet. Vivamus ac efficitur quam."
            </p>
            <div className="mt-4 flex justify-center">
              <span className="text-yellow-400">
                &#9733;&#9733;&#9733;&#9733;&#9734;
              </span>{" "}
              {/* 4 stars */}
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-8 rounded-lg shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:rotate-1 hover:bg-gray-50">
            <div className="flex items-center mb-4 transition-all duration-300 ease-in-out">
              <img
                src="https://via.placeholder.com/80"
                alt="Client 2"
                className="w-16 h-16 rounded-full mr-4 transform transition-all duration-300 ease-in-out hover:scale-125"
              />
              <div className="transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-blue-600 mb-1 transform transition-all duration-300 ease-in-out hover:scale-105">
                  Jane Smith
                </h3>
                <p className="text-gray-500">Marketing Head, XYZ Ltd.</p>
              </div>
            </div>
            <p className="text-gray-700 italic transition-all duration-300 ease-in-out opacity-70 hover:opacity-100">
              "Sed ut neque vitae lorem volutpat aliquet. Vivamus ac efficitur
              quam. Donec vitae turpis sit amet justo tincidunt sollicitudin."
            </p>
            <div className="mt-4 flex justify-center">
              <span className="text-yellow-400">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>{" "}
              {/* 5 stars */}
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-8 rounded-lg shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:rotate-1 hover:bg-gray-50">
            <div className="flex items-center mb-4 transition-all duration-300 ease-in-out">
              <img
                src="https://via.placeholder.com/80"
                alt="Client 3"
                className="w-16 h-16 rounded-full mr-4 transform transition-all duration-300 ease-in-out hover:scale-125"
              />
              <div className="transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-blue-600 mb-1 transform transition-all duration-300 ease-in-out hover:scale-105">
                  Samuel Green
                </h3>
                <p className="text-gray-500">CTO, Tech Innovators</p>
              </div>
            </div>
            <p className="text-gray-700 italic transition-all duration-300 ease-in-out opacity-70 hover:opacity-100">
              "Nulla viverra metus ac odio bibendum, non bibendum ante
              scelerisque. Integer tristique magna ac dui gravida facilisis."
            </p>
            <div className="mt-4 flex justify-center">
              <span className="text-yellow-400">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>{" "}
              {/* 5 stars */}
            </div>
          </div>
        </div>

        {/* More Button */}
        <div className="text-center mt-10">
          <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md transform transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105">
            More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
