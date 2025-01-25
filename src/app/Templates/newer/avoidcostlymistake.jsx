import React, { useState } from "react";
import {
  Hourglass,
  GraphDown,
  FileLock,
  FileText,
  PlusCircleFill,
  ArrowLeftCircle,
  ArrowRightCircle,
  XCircleFill,
  ChevronRight,
} from "react-bootstrap-icons";

const AvoidCostlyMistakes = () => {
  const mistakes = [
    {
      title: "Proposals take too long to create.",
      description:
        "Lengthy creation times can cause potential clients to lose interest or perceive your business as inefficient.",
      icon: <Hourglass />,
    },
    {
      title: "Inefficiently limits your growth potential.",
      description:
        "This inefficiency directly impacts your ability to scale and limits the number of opportunities you can pursue.",
      icon: <GraphDown />,
    },
    {
      title: "Inconsistent proposals damage reputation.",
      description:
        "A lack of standardization can undermine client confidence in your ability to deliver consistent results.",
      icon: <FileLock />,
    },
    {
      title: "Complex software confuses your team.",
      description:
        "Using overly complicated software for proposal generation can frustrate your team and result in slower turnaround times.",
      icon: <FileText />,
    },
    {
      title: "Lack of automation wastes time.",
      description:
        "Manual processes require significant time and effort, making it harder to focus on strategic tasks.",
      icon: <Hourglass />,
    },
    {
      title: "Missed deadlines lead to lost clients.",
      description:
        "Failure to deliver proposals on time can cause clients to lose trust in your reliability.",
      icon: <GraphDown />,
    },
    {
      title: "Poor communication within the team.",
      description:
        "Ineffective collaboration tools can lead to misunderstandings and mistakes in proposal creation.",
      icon: <FileLock />,
    },
    {
      title: "Proposals lack customization.",
      description:
        "Generic proposals fail to address specific client needs, leading to lower conversion rates.",
      icon: <FileText />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });

  const itemsPerSlide = 4;

  const nextSlide = () => {
    if (currentIndex + itemsPerSlide < mistakes.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const openModal = (title, description) => {
    setModalContent({ title, description });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent({ title: "", description: "" });
  };

  return (
    <section
      className="relative bg-cover bg-center py-16 px-8"
      style={{
        backgroundImage: "url('/avoidcost.jpg')",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* White Overlay */}
      <div className="absolute inset-0 bg-white opacity-70"></div>

      {/* Content Wrapper */}
      <div className="relative container mx-auto max-w-7xl mt-10 mb-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="text-left">
            <h2 className="text-5xl font-bold text-[#e6a310] mb-4">
              Avoid Costly Mistakes
            </h2>
            <p className="text-xl text-[#191919] mb-4 sm:mb-0">
              Proposal process leaving money on the table
            </p>
          </div>
          <div className="text-left sm:text-right mt-4 sm:mt-0">
            <a
              onClick={() =>
                window.Calendly.initPopupWidget({
                  url: "https://calendly.com/avorino/simple-projex-demo",
                })
              }
              className="inline-flex items-center bg-none text-[#e6a310] px-6 py-3 rounded-lg font-semibold hover:text-[#203a53] transition-colors duration-300 cursor-pointer"
            >
              Schedule a Demo Today <ChevronRight className="ml-2" />
            </a>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative flex flex-col items-center">
          {/* For smaller screens, enable vertical scrolling */}
          <div
            className="relative overflow-x-auto md:overflow-y-auto w-full mx-12 md:overflow-hidden"
            style={{ maxHeight: "70vh" }}
          >
            <div
              className="flex flex-wrap md:flex-nowrap transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3.9)}%)`,
                width: `${(100 / 5) * mistakes.length}%`,
              }}
            >
              {mistakes.map((mistake, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[50%] mb-6 md:w-[20%] px-4 text-left"
                >
                  <div className="bg-white p-6 rounded-lg shadow-md relative">
                    <div className="text-[#e6a310] text-4xl mb-4">
                      {mistake.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[#191919] mb-2">
                      {mistake.title}
                    </h3>
                    <p className="text-sm text-[#191919]">
                      {mistake.description}
                    </p>

                    {/* Plus Button */}
                    <div className="flex justify-end items-end mt-2">
                      <button
                        onClick={() =>
                          openModal(mistake.title, mistake.description)
                        }
                        className="mt-4 flex items-center justify-center text-[#203a53] bg-white rounded-full text-3xl transition-colors duration-300"
                      >
                        <PlusCircleFill />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows for desktop/tablet */}
          <div className="absolute bottom-[-80px] right-4 flex space-x-4 md:flex md:space-x-4 md:block hidden">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="bg-transparent hover:bg-gray-200 text-[#191919] transition-all disabled:opacity-50 p-4 text-5xl"
            >
              <ArrowLeftCircle />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex + itemsPerSlide >= mistakes.length}
              className={`bg-transparent hover:bg-gray-200 text-[#191919] transition-all disabled:opacity-50 text-5xl ${
                currentIndex + itemsPerSlide >= mistakes.length
                  ? "opacity-30 cursor-not-allowed"
                  : ""
              }`}
            >
              <ArrowRightCircle />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed p-5 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative flex flex-col">
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="flex items-center justify-center rounded-full text-[#203a53] hover:text-[#d5950f] transition-colors duration-300"
              >
                <XCircleFill className="text-3xl" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-grow">
              <h3 className="text-4xl font-semibold text-[#e6a310] mb-4">
                {modalContent.title}
              </h3>
              <p className="text-sm text-[#191919]">
                {modalContent.description}
              </p>
            </div>

            {/* Get Started Button */}
            <a
              onClick={() =>
                window.Calendly.initPopupWidget({
                  url: "https://calendly.com/avorino/simple-projex-demo",
                })
              }
              className="inline-flex items-center bg-none text-[#e6a310] py-3 font-semibold hover:text-[#203a53] transition-colors duration-300 cursor-pointer mt-4"
            >
              Get Started <ChevronRight className="ml-2" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default AvoidCostlyMistakes;
