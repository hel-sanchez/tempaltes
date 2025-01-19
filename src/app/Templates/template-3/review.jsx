import React, { useEffect, useState } from "react";

const Reviews = () => {
  const reviews = [
    {
      name: "Jane Doe",
      role: "CEO, Example Corp",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stars: 5,
      img: "https://via.placeholder.com/80",
    },
    {
      name: "Mina Lee",
      role: "Marketing Head, XYZ Ltd.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stars: 4,
      img: "https://via.placeholder.com/80",
    },
    {
      name: "Kate Brown",
      role: "CTO, Tech Innovators",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stars: 5,
      img: "https://via.placeholder.com/80",
    },
    {
      name: "Ray Smith",
      role: "Freelancer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stars: 4,
      img: "https://via.placeholder.com/80",
    },
    {
      name: "Alice Green",
      role: "Designer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stars: 5,
      img: "https://via.placeholder.com/80",
    },
    {
      name: "John White",
      role: "Entrepreneur",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stars: 5,
      img: "https://via.placeholder.com/80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Auto-scroll every 3 seconds
    return () => clearInterval(interval);
  }, [reviews.length]);

  const getVisibleReviews = () => {
    const prevIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    const nextIndex = (currentIndex + 1) % reviews.length;
    return [reviews[prevIndex], reviews[currentIndex], reviews[nextIndex]];
  };

  const visibleReviews = getVisibleReviews();

  return (
    <div
      className="relative bg-white bg-cover bg-center p-10"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/53214/trekking-hiking-group-alpine-53214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Section Title */}
        <h2 className="text-center text-5xl font-bold text-red-700 mt-10 mb-10 animate-pop">
          What Our Clients Say
        </h2>

        {/* Reviews Carousel */}
        <div className="relative flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center items-center">
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className={`w-80 p-6 rounded-lg shadow-lg transition-all duration-500 bg-white ${
                index === 1
                  ? "scale-105 text-red-700" // Center: focused style
                  : "scale-95 text-gray-400" // Other: dimmed style
              } animate-pop`} // Apply pop animation
            >
              {/* Review Content */}
              <div className="flex items-center mb-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{review.name}</h3>
                  <p className="text-sm">{review.role}</p>
                </div>
              </div>
              <p className="italic mb-4">{`"${review.text}"`}</p>
              <div className="flex justify-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-yellow-400 ${
                      i < review.stars ? "text-yellow-400" : "text-gray-200"
                    }`}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* More Reviews Button */}
        <div className="text-center mt-10 mb-10">
          <button className="px-6 py-3 bg-red-800 text-white font-medium text-lg rounded-full shadow-md hover:bg-red-900 transition duration-300 animate-pop">
            More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
