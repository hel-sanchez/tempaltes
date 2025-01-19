import React, { useState, useEffect } from "react";

const reviews = [
  {
    name: "Jane Doe",
    role: "CEO, Example Corp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stars: 5,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Mina Lee",
    role: "Marketing Head, XYZ Ltd.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stars: 4,
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Kate Brown",
    role: "CTO, Tech Innovators",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stars: 5,
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Ray Smith",
    role: "Freelancer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stars: 4,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Alice Green",
    role: "Designer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stars: 5,
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "John White",
    role: "Entrepreneur",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stars: 5,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Review = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 4000); // Change review every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const renderStars = (stars) => {
    const filledStars = Array(stars).fill("★");
    const emptyStars = Array(5 - stars).fill("☆");
    return [...filledStars, ...emptyStars].map((star, index) => (
      <span key={index} className="text-amber-500 text-xl">
        {star}
      </span>
    ));
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen p-4 sm:p-20 animate-fadeIn"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1402923/pexels-photo-1402923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

      <div className="relative z-10">
        <h1 className="text-5xl mt-10 md:text-7xl font-bold text-center mb-3 text-white animate-fade-slide">
          What Our Clients Say
        </h1>

        {/* Review Cards */}
        <div className="relative w-full h-80">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`transition-opacity duration-1000 absolute w-full text-center opacity-0 ${
                currentReview === index ? "opacity-100" : ""
              }`}
              style={{
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <div className="bg-gray-100 p-8 rounded-lg shadow-2xl mx-auto w-full sm:w-4/5 md:w-3/5 lg:w-2/5 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:rotate-1 animate-slideUp">
                <div className="flex items-center mb-4">
                  <img
                    src={review.img}
                    alt={`${review.name} profile`}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-1">
                      <i className="bi bi-person mr-2"></i>
                      {review.name}
                    </h3>
                    <p className="text-gray-500">{review.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{review.text}"</p>
                <div className="mt-4 flex justify-center">
                  {renderStars(review.stars)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Reviews Button */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-amber-500 text-white font-medium text-lg rounded-full shadow-md hover:bg-amber-600 transition duration-300">
            More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
