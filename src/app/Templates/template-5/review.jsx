import React, { useState } from "react";

const Reviews = () => {
  const reviews = [
    {
      name: "Alice Cooper",
      role: "Marketing Director, Beta Inc.",
      text: "A fantastic experience! Highly recommend this service.",
      stars: 5,
      img: "https://via.placeholder.com/120",
    },
    {
      name: "Bob Williams",
      role: "Software Engineer, DevSoft",
      text: "The best tool I’ve used in years. It has simplified my workflow greatly.",
      stars: 4,
      img: "https://via.placeholder.com/120",
    },
    {
      name: "Clara Red",
      role: "Project Manager, Innovative Solutions",
      text: "Easy to use and saves so much time. Would love to see more features.",
      stars: 4,
      img: "https://via.placeholder.com/120",
    },
    {
      name: "David King",
      role: "CEO, StartUp World",
      text: "Incredible! The customer support was amazing, and the product is top-notch.",
      stars: 5,
      img: "https://via.placeholder.com/120",
    },
    {
      name: "Emily Stone",
      role: "Lead Developer, TechGenix",
      text: "This product changed the way we work. Excellent performance and support!",
      stars: 5,
      img: "https://via.placeholder.com/120",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview(
      (prevReview) => (prevReview - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div
      className="relative min-h-screen p-10 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/951061/pexels-photo-951061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <h2 className="text-5xl font-semibold text-center text-red-800 mt-10 mb-10 animate-fade-up">
        Hear From Our Customers
      </h2>

      {/* Reviews for Desktop */}
      <div className="hidden md:grid md:grid-cols-4 gap-8 relative z-10 max-w-full">
        <div className="relative flex flex-col items-center space-y-6">
          {/* Left column */}
          <div className="w-80 p-6 rounded-lg shadow-xl bg-white absolute left-0 transform -translate-x-10 rotate-3 translate-y-5">
            <div className="flex items-center mb-4">
              <img
                src={reviews[0].img}
                alt={reviews[0].name}
                className="w-24 h-24 rounded-full mr-4"
              />
              <div>
                <h3 className="text-2xl font-semibold text-red-800">
                  {reviews[0].name}
                </h3>
                <p className="text-sm text-black">{reviews[0].role}</p>
              </div>
            </div>
            <p className="italic text-black mb-4">{`"${reviews[0].text}"`}</p>
            <div className="flex justify-center mb-4">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`text-yellow-400 ${
                    i < reviews[0].stars ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  &#9733;
                </span>
              ))}
            </div>
          </div>

          <div className="w-80 p-6 rounded-lg shadow-xl bg-white absolute left-0 transform -translate-x-5 rotate-2 -translate-y-3">
            <div className="flex items-center mb-4">
              <img
                src={reviews[2].img}
                alt={reviews[2].name}
                className="w-24 h-24 rounded-full mr-4"
              />
              <div>
                <h3 className="text-2xl font-semibold text-red-800">
                  {reviews[2].name}
                </h3>
                <p className="text-sm text-black">{reviews[2].role}</p>
              </div>
            </div>
            <p className="italic text-black mb-4">{`"${reviews[2].text}"`}</p>
            <div className="flex justify-center mb-4">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`text-yellow-400 ${
                    i < reviews[2].stars ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  &#9733;
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Center review */}
        <div className="relative w-80 p-6 rounded-lg shadow-xl bg-white rotate-1 translate-y-4">
          <div className="flex items-center mb-4">
            <img
              src={reviews[1].img}
              alt={reviews[1].name}
              className="w-24 h-24 rounded-full mr-4"
            />
            <div>
              <h3 className="text-2xl font-semibold text-red-800">
                {reviews[1].name}
              </h3>
              <p className="text-sm text-black">{reviews[1].role}</p>
            </div>
          </div>
          <p className="italic text-black mb-4">{`"${reviews[1].text}"`}</p>
          <div className="flex justify-center mb-4">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={`text-yellow-400 ${
                  i < reviews[1].stars ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>

        {/* New review between center and right */}
        <div className="relative w-80 p-6 rounded-lg shadow-xl bg-white rotate-2 -translate-y-5">
          <div className="flex items-center mb-4">
            <img
              src={reviews[4].img}
              alt={reviews[4].name}
              className="w-24 h-24 rounded-full mr-4"
            />
            <div>
              <h3 className="text-2xl font-semibold text-red-800">
                {reviews[4].name}
              </h3>
              <p className="text-sm text-black">{reviews[4].role}</p>
            </div>
          </div>
          <p className="italic text-black mb-4">{`"${reviews[4].text}"`}</p>
          <div className="flex justify-center mb-4">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={`text-yellow-400 ${
                  i < reviews[4].stars ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="relative flex flex-col items-center space-y-6">
          <div className="w-80 p-6 rounded-lg shadow-xl bg-white absolute right-0 transform translate-x-10 rotate-3 translate-y-3">
            <div className="flex items-center mb-4">
              <img
                src={reviews[3].img}
                alt={reviews[3].name}
                className="w-24 h-24 rounded-full mr-4"
              />
              <div>
                <h3 className="text-2xl font-semibold text-red-800">
                  {reviews[3].name}
                </h3>
                <p className="text-sm text-black">{reviews[3].role}</p>
              </div>
            </div>
            <p className="italic text-black mb-4">{`"${reviews[3].text}"`}</p>
            <div className="flex justify-center mb-4">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`text-yellow-400 ${
                    i < reviews[3].stars ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  &#9733;
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews for Smaller Screens */}
      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 max-w-full">
        {reviews.map((review, index) => (
          <div key={index} className="p-6 rounded-lg shadow-xl bg-white">
            <div className="flex items-center mb-4">
              <img
                src={review.img}
                alt={review.name}
                className="w-24 h-24 rounded-full mr-4"
              />
              <div>
                <h3 className="text-2xl font-semibold text-red-800">
                  {review.name}
                </h3>
                <p className="text-sm text-black">{review.role}</p>
              </div>
            </div>
            <p className="italic text-black mb-4">{`"${review.text}"`}</p>
            <div className="flex justify-center mb-4">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`text-yellow-400 ${
                    i < review.stars ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  &#9733;
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <div className="text-center mt-10 relative z-20">
        <button className="px-8 py-4 bg-red-900 text-white font-medium text-xl rounded-full shadow-md hover:bg-red-800 transition duration-300">
          See More Reviews
        </button>
      </div>
    </div>
  );
};

export default Reviews;
