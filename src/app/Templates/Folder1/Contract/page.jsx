import React, { useState } from "react";
import {
  SquareIcon,
  CircleIcon,
  HeadingIcon,
  FilePlusIcon,
} from "sebikostudio-icons";

const Page = ({ isDarkMode }) => {
  const [canvasWidth, setCanvasWidth] = useState(800); // Initial canvas width
  const [canvasHeight, setCanvasHeight] = useState(600); // Initial canvas height

  const handleResize = (e) => {
    // Resize the canvas based on mouse movement
    setCanvasWidth(e.clientX);
    setCanvasHeight(e.clientY);
  };

  const addRectangle = () => {
    console.log("Adding Rectangle to Canvas");
  };

  const addText = () => {
    console.log("Adding Text to Canvas");
  };

  const addHeader = () => {
    console.log("Adding Header to Canvas");
  };

  const addUploadButton = () => {
    console.log("Adding Upload Button to Canvas");
  };

  return (
    <div
      className={`flex h-screen ${isDarkMode ? "bg-[#191919]" : "bg-white"}`}
    >
      {/* Sidebar */}
      <div
        className={`flex flex-col gap-4 ${
          isDarkMode ? "bg-[#e9a409] text-white" : "bg-[#e9a409] text-black"
        } items-center transition-all`}
      >
        {/* Sidebar Content */}
        <div className="flex flex-col gap-4 p-4 rounded-lg">
          {/* Square Icon */}
          <div
            className={`flex items-center justify-center ${
              isDarkMode ? "bg-black text-white" : "bg-white text-black"
            } p-3 rounded-md cursor-pointer transition duration-300`}
            onClick={addRectangle}
          >
            <SquareIcon className="w-8 h-8" />
          </div>

          {/* Circle Icon */}
          <div
            className={`flex items-center justify-center ${
              isDarkMode ? "bg-black text-white" : "bg-white text-black"
            } p-3 rounded-md cursor-pointer transition duration-300`}
            onClick={addText}
          >
            <CircleIcon className="w-8 h-8" />
          </div>

          {/* Heading Icon */}
          <div
            className={`flex items-center justify-center ${
              isDarkMode ? "bg-black text-white" : "bg-white text-black"
            } p-3 rounded-md cursor-pointer transition duration-300`}
            onClick={addHeader}
          >
            <HeadingIcon className="w-8 h-8" />
          </div>

          {/* FilePlus Icon (for upload) */}
          <div
            className={`flex items-center justify-center ${
              isDarkMode ? "bg-black text-white" : "bg-white text-black"
            } p-3 rounded-md cursor-pointer transition duration-300`}
            onClick={addUploadButton}
          >
            <FilePlusIcon className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Resizable Canvas */}
      <div
        className={`flex-grow ${isDarkMode ? "bg-[#2e2e2e]" : "bg-white"}`}
        style={{
          width: `${canvasWidth}px`,
          height: `${canvasHeight}px`,
          transition: "all 0.2s ease",
        }}
      >
        {/* Canvas */}
        <div
          className={`h-full border-t-4 ${
            isDarkMode ? "border-[#e9a409]" : "border-[#e9a409]"
          } bg-white`}
          style={{ resize: "both", overflow: "hidden" }}
          onMouseDown={(e) => {
            e.preventDefault();
            document.addEventListener("mousemove", handleResize);
            document.addEventListener("mouseup", () => {
              document.removeEventListener("mousemove", handleResize);
            });
          }}
        ></div>
      </div>
    </div>
  );
};

export default Page;
