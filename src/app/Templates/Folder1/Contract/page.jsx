import React, { useState } from "react";
import { SquareIcon, CircleIcon, HeadingIcon, FilePlusIcon } from "sebikostudio-icons";

const Page = () => {
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
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="flex flex-col gap-4 bg-[#191919] text-white items-center p-4 transition-all">
        {/* Sidebar Content */}
        <div className="flex flex-col gap-4 bg-[#e6a310] p-4 rounded-lg">
          {/* Square Icon */}
          <div
            className="flex items-center justify-center bg-gray-700 p-3 rounded-md hover:bg-gray-600 cursor-pointer transition duration-300"
            onClick={addRectangle}
          >
            <SquareIcon className="w-8 h-8 text-white" />
          </div>

          {/* Circle Icon */}
          <div
            className="flex items-center justify-center bg-gray-700 p-3 rounded-md hover:bg-gray-600 cursor-pointer transition duration-300"
            onClick={addText}
          >
            <CircleIcon className="w-8 h-8 text-white" />
          </div>

          {/* Heading Icon */}
          <div
            className="flex items-center justify-center bg-gray-700 p-3 rounded-md hover:bg-gray-600 cursor-pointer transition duration-300"
            onClick={addHeader}
          >
            <HeadingIcon className="w-8 h-8 text-white" />
          </div>

          {/* FilePlus Icon (for upload) */}
          <div
            className="flex items-center justify-center bg-gray-700 p-3 rounded-md hover:bg-gray-600 cursor-pointer transition duration-300"
            onClick={addUploadButton}
          >
            <FilePlusIcon className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Resizable Canvas */}
      <div
        className="flex-grow bg-white"
        style={{
          width: `${canvasWidth}px`,
          height: `${canvasHeight}px`,
          transition: "all 0.2s ease",
        }}
      >
        {/* Canvas */}
        <div
          className="h-full border-t-4 border-[#e9a409] bg-white"
          style={{ resize: "both", overflow: "hidden" }}
          onMouseDown={(e) => {
            e.preventDefault();
            document.addEventListener("mousemove", handleResize);
            document.addEventListener("mouseup", () => {
              document.removeEventListener("mousemove", handleResize);
            });
          }}
        >
        </div>
      </div>
    </div>
  );
};

export default Page;

