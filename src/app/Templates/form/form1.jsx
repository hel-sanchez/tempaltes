"use client";
import { useState } from "react";
import Form2 from "./form2"; // Import Form2

function Form1() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermSq, setSearchTermSq] = useState("");
  const [searchTermCount, setSearchTermCount] = useState("");

  const [selectedLinearFeetItems, setSelectedLinearFeetItems] = useState([]);
  const [selectedSquareFeetItems, setSelectedSquareFeetItems] = useState([]);
  const [selectedCountItems, setSelectedCountItems] = useState([]);
  const [selectedCubicFeetItems, setSelectedCubicFeetItems] = useState([]);

  const [showForm1, setShowForm1] = useState(true); // State to toggle between forms

  const linearFeetItems = [
    "Footing Length",
    "Footing Depth",
    "Footing Width",
    "Exterior Wall Length",
    "Interior Wall Length",
    "Wall Height (Ceiling Height)",
    "Roof height",
    "Cabinet Length",
    "Shear Wall Length",
    "Electrical Trenching",
    "Sewer Line Trench & Plumbing After",
    "Water Line Trench & Plumbing After",
    "Gas Line Trench - Trench & Plumbing",
    "Beam Length",
    "Slab Thickness",
  ];

  const squareFeetItems = [
    "Building",
    "Exterior Wall Area",
    "Interior Wall Area",
    "Backsplash Area",
    "Floor Area",
    "Bathroom Countertop Area",
    "Bathroom Floor Area",
    "Kitchen Countertop",
    "Drywall",
    "Stucco",
    "Wall Insulation",
    "Ceiling Insulation",
    "Shingle Roof - Pitched Roof",
  ];

  const countItems = [
    "Dumpster - 2",
    "Attic Access - 1",
    "Bathroom Floor Drain - 0",
    "Footing Pad",
    "Hardy Frame - 1",
    "Ceiling Fan Installation - 3",
    "Custom Built Niche - 2",
    "Regular Outlets - 12",
    "GFCI Outlets - 6",
    "Exterior Outlets - 2",
    "Pop Outlets",
    "Exterior Lights - 4",
    "Flashing - 6",
    "Hose Connection - 2",
    "Install Vanity - 3",
    "Island Framing - 1",
    "Island Plumbing - 1",
    "Kitchen Sink & Garbage Disposal - 1",
    "Main Panel - 1",
    "Sub Panel - 1",
    "Number of Exterior Doors - 1",
    "Number of Interior Doors - 4",
    "Sliding Door",
    "Pre-hung Interior Door",
    "Pocket Door",
    "Barn Doors",
    "Closer Door",
    "Number of Windows - 7",
    "Number of Drain Connections - 5",
    "Number of Sink Cutouts - 3",
    "Potfiller Installation - 1",
    "Light Switches - 12",
    "Recessed Light - 20",
    "Pendant Light - 3",
    "Shower Fixture - 2",
    "Toilet Installation - 2",
    "Transformer",
    "Undersink R/O Installation",
    "Wall-to-Wall Bathtub",
    "Gas Connection - 2",
    "HVAC Installation - 1",
    "Number of Bathrooms - 2",
  ];

  const handleSelectItem = (item, type) => {
    let selectedItems;
    if (type === "linearFeet") {
      selectedItems = selectedLinearFeetItems;
      setSelectedLinearFeetItems(
        selectedItems.includes(item)
          ? selectedItems.filter((i) => i !== item)
          : [...selectedItems, item]
      );
    } else if (type === "squareFeet") {
      selectedItems = selectedSquareFeetItems;
      setSelectedSquareFeetItems(
        selectedItems.includes(item)
          ? selectedItems.filter((i) => i !== item)
          : [...selectedItems, item]
      );
    } else if (type === "count") {
      selectedItems = selectedCountItems;
      setSelectedCountItems(
        selectedItems.includes(item)
          ? selectedItems.filter((i) => i !== item)
          : [...selectedItems, item]
      );
    } else {
      selectedItems = selectedCubicFeetItems;
      setSelectedCubicFeetItems(
        selectedItems.includes(item)
          ? selectedItems.filter((i) => i !== item)
          : [...selectedItems, item]
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen p-4">
      {showForm1 ? (
        <>
          <h1 className="text-3xl font-bold text-gray-900 mt-6 md:mt-0">
            Parameters
          </h1>
          <p className="text-gray-600">
            Select all parameters that will be applied in your project
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 text-center">
            {/* Linear Feet */}
            <div className="bg-transparent p-4 rounded-lg">
              <div className="bg-white p-2 rounded-lg shadow-md border-2 border-[#e6a310]">
                <h2 className="text-lg font-semibold text-[#e6a310]">
                  Linear Feet
                </h2>
              </div>
              <div className="bg-[#e8e8e8] p-4 shadow-md w-full">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2 border rounded-md text-gray-600 bg-transparent border-2 border-[#203a53]"
                />
                <ul className="mt-3 space-y-2 overflow-auto max-h-72">
                  {linearFeetItems
                    .filter((item) =>
                      item.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((item) => (
                      <li
                        key={item}
                        onClick={() => handleSelectItem(item, "linearFeet")}
                        className={`${
                          selectedLinearFeetItems.includes(item)
                            ? "bg-[#e6a310] text-[#203a53]"
                            : "bg-[#203a53] text-white"
                        } hover:bg-[#e6a310] hover:text-[#203a53] p-2 rounded-md cursor-pointer`}
                      >
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* Square Feet */}
            <div className="bg-transparent p-4">
              <div className="bg-white p-2 rounded-lg shadow-md border-2 border-[#e6a310]">
                <h2 className="text-lg font-semibold text-[#e6a310]">
                  Square Feet
                </h2>
              </div>
              <div className="bg-[#e8e8e8] p-4 shadow-md w-full">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTermSq}
                  onChange={(e) => setSearchTermSq(e.target.value)}
                  className="w-full p-2 border rounded-md text-gray-600 bg-transparent border-2 border-[#203a53]"
                />
                <ul className="mt-3 space-y-2 overflow-auto max-h-72">
                  {squareFeetItems
                    .filter((item) =>
                      item.toLowerCase().includes(searchTermSq.toLowerCase())
                    )
                    .map((item) => (
                      <li
                        key={item}
                        onClick={() => handleSelectItem(item, "squareFeet")}
                        className={`${
                          selectedSquareFeetItems.includes(item)
                            ? "bg-[#e6a310] text-[#203a53]"
                            : "bg-[#203a53] text-white"
                        } hover:bg-[#e6a310] hover:text-[#203a53] p-2 rounded-md cursor-pointer`}
                      >
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* Cubic Feet */}
            <div className="bg-transparent p-4">
              <div className="bg-white p-2 rounded-lg shadow-md border-2 border-[#e6a310]">
                <h2 className="text-lg font-semibold text-[#e6a310]">
                  Cubic Feet
                </h2>
              </div>
              <div className="bg-[#e8e8e8] p-4 shadow-md w-full">
                <ul className="mt-2 space-y-2">
                  {["Footing", "Slab"].map((item) => (
                    <li
                      key={item}
                      onClick={() => handleSelectItem(item, "cubicFeet")}
                      className={`${
                        selectedCubicFeetItems.includes(item)
                          ? "bg-[#e6a310] text-[#203a53]"
                          : "bg-[#203a53] text-white"
                      } hover:bg-[#e6a310] hover:text-[#203a53] p-2 rounded-md cursor-pointer`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Count */}
            <div className="bg-transparent p-4">
              <div className="bg-white p-2 rounded-lg shadow-md border-2 border-[#e6a310]">
                <h2 className="text-lg font-semibold text-[#e6a310]">Count</h2>
              </div>
              <div className="bg-[#e8e8e8] p-4 shadow-md w-full">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTermCount}
                  onChange={(e) => setSearchTermCount(e.target.value)}
                  className="w-full p-2 border rounded-md text-gray-600 bg-transparent border-2 border-[#203a53]"
                />
                <ul className="mt-3 space-y-2 overflow-auto max-h-72">
                  {countItems
                    .filter((item) =>
                      item.toLowerCase().includes(searchTermCount.toLowerCase())
                    )
                    .map((item) => (
                      <li
                        key={item}
                        onClick={() => handleSelectItem(item, "count")}
                        className={`${
                          selectedCountItems.includes(item)
                            ? "bg-[#e6a310] text-[#203a53]"
                            : "bg-[#203a53] text-white"
                        } hover:bg-[#e6a310] hover:text-[#203a53] p-2 rounded-md cursor-pointer`}
                      >
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          <button
            onClick={() => alert("Project Created")}
            className="mt-6 px-6 py-3 bg-[#203a53] hover:bg-[#e6a310] hover:text-[#203a53] text-white rounded-lg shadow-md"
          >
            Create project
          </button>

          <div className="mt-6 flex justify-center items-center gap-8">
            {/* Left Arrow */}
            <button
              onClick={() => setShowForm1(false)}
              className="flex items-center gap-2 px-6 py-3 bg-[#e6a310] hover:bg-[#203a53] hover:text-[#e6a310] text-[#203a53] font-semibold rounded-lg shadow-md transition-all"
            >
              <span className="text-2xl">&#8592;</span>
              <span>Previous</span>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => setShowForm1(false)}
              className="flex items-center gap-2 px-6 py-3 bg-[#e6a310] hover:bg-[#203a53] hover:text-[#e6a310] text-[#203a53] font-semibold rounded-lg shadow-md transition-all"
            >
              <span>Next</span>
              <span className="text-2xl">&#8594;</span>
            </button>
          </div>
        </>
      ) : (
        <Form2 />
      )}
    </div>
  );
}

export default Form1;
