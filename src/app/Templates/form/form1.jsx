"use client";
import { useState } from "react";

function Form1() {
  const [selectedLinearFeet, setSelectedLinearFeet] = useState([]);
  const [selectedSquareFeet, setSelectedSquareFeet] = useState([]);
  const [selectedCubicFeet, setSelectedCubicFeet] = useState([]);
  const [selectedCount, setSelectedCount] = useState([]);

  const [inputValues, setInputValues] = useState({});

  const [showLinearFeet, setShowLinearFeet] = useState(false);
  const [showSquareFeet, setShowSquareFeet] = useState(false);
  const [showCubicFeet, setShowCubicFeet] = useState(false);
  const [showCount, setShowCount] = useState(false);

  const [linearFeetSearch, setLinearFeetSearch] = useState("");
  const [squareFeetSearch, setSquareFeetSearch] = useState("");
  const [cubicFeetSearch, setCubicFeetSearch] = useState("");
  const [countSearch, setCountSearch] = useState("");

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

  const cubicFeetItems = [
    "Footing",
    "Slab",
  ];

  const countItems = [
    "Dumpster",
    "Attic Access",
    "Bathroom Floor Drain",
    "Footing Pad",
    "Hardy Frame",
    "Ceiling Fan Installation",
    "Custom Built Niche",
    "Regular Outlets",
    "GFCI Outlets",
    "Exterior Outlets",
    "Pop Outlets",
    "Exterior Lights",
    "Flashing ",
    "Hose Connection",
    "Install Vanity",
    "Island Framing",
    "Island Plumbing",
    "Kitchen Sink & Garbage Disposal",
    "Main Panel",
    "Sub Panel",
    "Number of Exterior Doors",
    "Number of Interior Doors",
    "Sliding Door",
    "Pre-hung Interior Door",
    "Pocket Door",
    "Barn Doors",
    "Closer Door",
    "Number of Windows",
    "Number of Drain Connections",
    "Number of Sink Cutouts",
    "Potfiller Installation",
    "Light Switches",
    "Recessed Light",
    "Pendant Light",
    "Shower Fixture",
    "Toilet Installation",
    "Transformer",
    "Undersink R/O Installation",
    "Wall-to-Wall Bathtub",
    "Gas Connection",
    "HVAC Installation",
    "Number of Bathrooms",
  ];

  // Handlers for dropdown selections
  const handleSelectLinearFeet = (e) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedLinearFeet(selected);
  };

  const handleSelectSquareFeet = (e) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedSquareFeet(selected);
  };

  const handleSelectCubicFeet = (e) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedCubicFeet(selected);
  };

  const handleSelectCount = (e) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedCount(selected);
  };

  // Input handler for integer value
  const handleInputChange = (e, component) => {
    setInputValues({
      ...inputValues,
      [component]: e.target.value,
    });
  };

  const handleItemClick = (item) => {
    setSelectedLinearFeet((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item)
        : [...prevSelected, item]
    );
  };

  // Toggle show state for categories
  const toggleLinearFeet = () => setShowLinearFeet((prev) => !prev);
  const toggleSquareFeet = () => setShowSquareFeet((prev) => !prev);
  const toggleCubicFeet = () => setShowCubicFeet((prev) => !prev);
  const toggleCount = () => setShowCount((prev) => !prev);

  // Filtered items based on search query
  const filteredLinearFeetItems = linearFeetItems.filter(item =>
    item.toLowerCase().includes(linearFeetSearch.toLowerCase())
  );
  const filteredSquareFeetItems = squareFeetItems.filter(item =>
    item.toLowerCase().includes(squareFeetSearch.toLowerCase())
  );
  const filteredCubicFeetItems = cubicFeetItems.filter(item =>
    item.toLowerCase().includes(cubicFeetSearch.toLowerCase())
  );
  const filteredCountItems = countItems.filter(item =>
    item.toLowerCase().includes(countSearch.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center bg-[#e8e8e8] min-h-screen p-4">
      <div className="flex flex-col items-center justify-center bg-[#ffffff] rounded shadow p-6">
          <h1 className="text-3xl font-bold text-gray-900 mt-6 md:mt-0">
            Parameters
          </h1>
          <p className="text-gray-600">
            Select all parameters that will be applied in your project
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 text-center">
            {/* Linear Feet */}
            <div className="bg-transparent p-4 rounded-lg">
              <div
                className="bg-white p-2 rounded-lg shadow-md border-2 border-[#e6a310]"
                onClick={toggleLinearFeet}
              >
                <h2 className="text-lg font-semibold text-[#e6a310]">Linear Feet</h2>
              </div>
              {showLinearFeet && (
                <>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={linearFeetSearch}
                    onChange={(e) => setLinearFeetSearch(e.target.value)}
                    className="bg-[#e8e8e8] p-2 w-full mt-2 rounded-md border-2 border-[#203a53] text-[#e6a310]"
                  />
                  <select
                    multiple
                    className="bg-[#e8e8e8] p-4 shadow-md w-full border-2 border-[#203a53] text-gray-600 rounded-md mt-2"
                    onChange={handleSelectLinearFeet}
                  >
                    {filteredLinearFeetItems.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <div className=" text-[#203a53]">
                    <p className="text-[#e6a310] mb-6 text-[12px]">*Ctrl+click* for multiple selection</p>
                    <h3 className="font-semibold">Selected Linear Feet:</h3>
                    <ul>
                      {selectedLinearFeet.map((item) => (
                        <li key={item} className="text-[11px] text-[#e6a310] flex items-center justify-between text-left">
                          {item}{" "}
                          <input
                            type="number"
                            value={inputValues[item] || ""}
                            onChange={(e) => handleInputChange(e, item)}
                            placeholder="Enter value"
                            className="border-2 border-[#203a53] p-2 mt-1 rounded-md"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>

            {/* Square Feet */}
            <div className="bg-transparent p-4 rounded-lg">
              <div
                className="bg-white p-2 rounded-lg shadow-md border-2 border-[#e6a310]"
                onClick={toggleSquareFeet}
              >
                <h2 className="text-lg font-semibold text-[#e6a310]">Square Feet</h2>
              </div>
              {showSquareFeet && (
                <>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={squareFeetSearch}
                    onChange={(e) => setSquareFeetSearch(e.target.value)}
                    className="bg-[#e8e8e8] p-2 w-full mt-2 rounded-md border-2 border-[#203a53] text-[#e6a310]"
                  />
                  <select
                    multiple
                    className="bg-[#e8e8e8] p-4 shadow-md w-full border-2 border-[#203a53] text-gray-600 rounded-md mt-2"
                    onChange={handleSelectSquareFeet}
                  >
                    {filteredSquareFeetItems.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <div className="text-[#203a53]">
                    <p className="text-[#e6a310] mb-6 text-[12px]">*Ctrl+click* for multiple selection</p>
                    <h3 className="font-semibold">Selected Square Feet:</h3>
                    <ul>
                      {selectedSquareFeet.map((item) => (
                        <li key={item} className="text-[11px] text-[#e6a310] flex items-center justify-between text-left">
                          {item}{" "}
                          <input
                            type="number"
                            value={inputValues[item] || ""}
                            onChange={(e) => handleInputChange(e, item)}
                            placeholder="Enter value"
                            className="border-2 border-[#203a53] p-2 mt-1 rounded-md"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>

            {/* Cubic Feet */}
            <div className="bg-transparent p-4 rounded-lg">
              <div
                className="bg-white p-2 rounded-lg shadow-md border-2 border-[#e6a310]"
                onClick={toggleCubicFeet}
              >
                <h2 className="text-lg font-semibold text-[#e6a310]">Cubic Feet</h2>
              </div>
              {showCubicFeet && (
                <>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={cubicFeetSearch}
                    onChange={(e) => setCubicFeetSearch(e.target.value)}
                    className="bg-[#e8e8e8] p-2 w-full mt-2 rounded-md border-2 border-[#203a53] text-[#e6a310]"
                  />
                  <select
                    multiple
                    className="bg-[#e8e8e8] p-4 shadow-md w-full border-2 border-[#203a53] text-gray-600 rounded-md mt-2"
                    onChange={handleSelectCubicFeet}
                  >
                    {filteredCubicFeetItems.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <div className="text-[#203a53]">
                    <p className="text-[#e6a310] mb-6 text-[12px]">*Ctrl+click* for multiple selection</p>
                    <h3 className="font-semibold">Selected Cubic Feet:</h3>
                    <ul>
                      {selectedCubicFeet.map((item) => (
                        <li key={item} className="text-[11px] text-[#e6a310] flex items-center justify-between text-left">
                          {item}{" "}
                          <input
                            type="number"
                            value={inputValues[item] || ""}
                            onChange={(e) => handleInputChange(e, item)}
                            placeholder="Enter value"
                            className="border-2 border-[#203a53] p-2 mt-1 rounded-md"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>

            {/* Count */}
            <div className="bg-transparent p-4 rounded-lg">
              <div
                className="bg-white p-2 rounded-lg shadow-md border-2 border-[#e6a310]"
                onClick={toggleCount}
              >
                <h2 className="text-lg font-semibold text-[#e6a310]">Count</h2>
              </div>
              {showCount && (
                <>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={countSearch}
                    onChange={(e) => setCountSearch(e.target.value)}
                    className="bg-[#e8e8e8] p-2 w-full mt-2 rounded-md border-2 border-[#203a53] text-[#e6a310]"
                  />
                  <select
                    multiple
                    className="bg-[#e8e8e8] p-4 shadow-md w-full border-2 border-[#203a53] text-gray-600 rounded-md mt-2"
                    onChange={handleSelectCount}
                  >
                    {filteredCountItems.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <div className="text-[#203a53]">
                    <p className="text-[#e6a310] mb-6 text-[12px]">*Ctrl+click* for multiple selection</p>
                    <h3 className="font-semibold">Selected Count:</h3>
                    <ul>
                      {selectedCount.map((item) => (
                        <li key={item} className="text-[11px] text-[#e6a310] flex items-center justify-between text-left">
                          {item}{" "}
                          <input
                            type="number"
                            value={inputValues[item] || ""}
                            onChange={(e) => handleInputChange(e, item)}
                            placeholder="Enter value"
                            className="border-2 border-[#203a53] p-2 mt-1 rounded-md"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>

          <button
            onClick={() => alert("Project Created")}
            className="mt-6 px-6 py-3 mb-5 bg-[#203a53] hover:bg-[#e6a310] hover:text-[#203a53] text-white rounded-lg shadow-md font-bold"
          >
            Create project
          </button>
        </div>
    </div>
  );
}

export default Form1;
