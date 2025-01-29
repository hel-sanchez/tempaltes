import { useState } from "react";
import Form1 from "./form1";
import { Card, Button } from "react-bootstrap";

const Form2 = () => {
  const [showForm2, setShowForm2] = useState(true);

  const [linearFeet, setLinearFeet] = useState([
    { placeholder: "Footing length", value: "" },
    { placeholder: "Footing width", value: "" },
    { placeholder: "Footing depth", value: "" },
    { placeholder: "Exterior wall length", value: "" },
    { placeholder: "Additional length 1", value: "" }, // New placeholder
    { placeholder: "Additional length 2", value: "" }, // New placeholder
  ]);

  const [squareFeet, setSquareFeet] = useState([
    { placeholder: "Wall insulation", value: "" },
    { placeholder: "Floor area", value: "" },
    { placeholder: "Interior wall area", value: "" },
    { placeholder: "Exterior wall area", value: "" },
    { placeholder: "Ceiling area", value: "" }, // New placeholder
    { placeholder: "Roof area", value: "" }, // New placeholder
  ]);

  const [cubicFeet, setCubicFeet] = useState([
    { placeholder: "Footing", value: "" },
    { placeholder: "Slab", value: "" },
    { placeholder: "Other 1", value: "" },
    { placeholder: "Other 2", value: "" },
    { placeholder: "Additional volume 1", value: "" }, // New placeholder
    { placeholder: "Additional volume 2", value: "" }, // New placeholder
  ]);

  const [count, setCount] = useState([
    { placeholder: "Attic access", value: "" },
    { placeholder: "Bathroom floor drain", value: "" },
    { placeholder: "Ceiling pan installation", value: "" },
    { placeholder: "Exterior outlets", value: "" },
    { placeholder: "Additional count 1", value: "" }, // New placeholder
    { placeholder: "Additional count 2", value: "" }, // New placeholder
  ]);

  const addField = (setFields, fields) => {
    setFields([...fields, { placeholder: "New field*", value: "" }]);
  };

  const renderFields = (fields, setFields) => {
    return fields.map((field, index) => (
      <div className="mt-2" key={index}>
        <label className="block text-left text-[#203a53]">
          {field.placeholder}
          <span className="text-red-500">*</span>
        </label>

        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            value={field.value}
            onChange={(e) => {
              const newFields = [...fields];
              newFields[index].value = e.target.value;
              setFields(newFields);
            }}
            placeholder="Enter value"
            className="p-2 w-full border-2 border-[#203a53] border-opacity-30 rounded-lg text-black"
          />
        </div>
      </div>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen p-4">
      {showForm2 ? (
        <>
          <h1 className="text-3xl font-bold text-gray-900 mt-6 md:mt-0">
            Parameters
          </h1>
          <p className="text-[#203a53]">
            Select all parameters that will be applied in your project
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 mt-6 text-center">
            {/* Linear Feet Section */}
            <Card className="mb-10 md:mb-0">
              <Card.Body>
                <div className="bg-white p-2 rounded-lg shadow-md border-2 border-[#e6a310]">
                  <h2 className="text-lg font-semibold text-[#e6a310]">
                    Linear Feet
                  </h2>
                </div>
                <div
                  className="bg-[#e8e8e8] p-4 shadow-md w-full"
                  style={{ maxHeight: "400px", overflowY: "auto" }}
                >
                  <Button
                    onClick={() => addField(setLinearFeet, linearFeet)}
                    className="bg-none text-[#e6a310] w-full text-left underline"
                  >
                    Add Other...
                  </Button>
                  {renderFields(linearFeet, setLinearFeet)}
                </div>
              </Card.Body>
            </Card>

            {/* Square Feet Section */}
            <Card className="mb-10 md:mb-0">
              <Card.Body>
                <div className="bg-white p-2 rounded-lg shadow-md border-2 border-[#e6a310]">
                  <h2 className="text-lg font-semibold text-[#e6a310]">
                    Square Feet
                  </h2>
                </div>
                <div
                  className="bg-[#e8e8e8] p-4 shadow-md w-full"
                  style={{ maxHeight: "400px", overflowY: "auto" }}
                >
                  <Button
                    onClick={() => addField(setSquareFeet, squareFeet)}
                    className="bg-none text-[#e6a310] w-full text-left underline"
                  >
                    Add Other...
                  </Button>
                  {renderFields(squareFeet, setSquareFeet)}
                </div>
              </Card.Body>
            </Card>

            {/* Cubic Feet Section */}
            <Card className="mb-10 md:mb-0">
              <Card.Body>
                <div className="bg-white p-2 rounded-lg shadow-md border-2 border-[#e6a310]">
                  <h2 className="text-lg font-semibold text-[#e6a310]">
                    Cubic Feet
                  </h2>
                </div>
                <div
                  className="bg-[#e8e8e8] p-4 shadow-md w-full"
                  style={{ maxHeight: "400px", overflowY: "auto" }}
                >
                  <Button
                    onClick={() => addField(setCubicFeet, cubicFeet)}
                    className="bg-none text-[#e6a310] w-full text-left underline"
                  >
                    Add Other...
                  </Button>
                  {renderFields(cubicFeet, setCubicFeet)}
                </div>
              </Card.Body>
            </Card>

            {/* Count Section */}
            <Card className="mb-10 md:mb-0">
              <Card.Body>
                <div className="bg-white p-2 rounded-lg shadow-md border-2 border-[#e6a310]">
                  <h2 className="text-lg font-semibold text-[#e6a310]">
                    Count
                  </h2>
                </div>
                <div
                  className="bg-[#e8e8e8] p-4 shadow-md w-full"
                  style={{ maxHeight: "400px", overflowY: "auto" }}
                >
                  <Button
                    onClick={() => addField(setCount, count)}
                    className="bg-none text-[#e6a310] w-full text-left underline"
                  >
                    Add Other
                  </Button>
                  {renderFields(count, setCount)}
                </div>
              </Card.Body>
            </Card>
          </div>

          <Button
            onClick={() => alert("Project Created")}
            className="mt-10 px-6 py-3 bg-[#203a53] hover:bg-[#e6a310] hover:text-[#203a53] text-white rounded-lg shadow-md"
          >
            Create project
          </Button>

          <div className="flex justify-center gap-8 mt-8">
            <button
              onClick={() => setShowForm2(false)}
              className="flex items-center gap-2 px-6 py-3 bg-[#e6a310] hover:bg-[#203a53] hover:text-[#e6a310] text-[#203a53] font-semibold rounded-lg shadow-md transition-all"
            >
              <span className="text-2xl">&#8592;</span>
              <span>Previous</span>
            </button>

            <button
              onClick={() => setShowForm2(false)}
              className="flex items-center gap-2 px-6 py-3 bg-[#e6a310] hover:bg-[#203a53] hover:text-[#e6a310] text-[#203a53] font-semibold rounded-lg shadow-md transition-all"
            >
              <span>Next</span>
              <span className="text-2xl">&#8594;</span>
            </button>
          </div>
        </>
      ) : (
        <Form1 />
      )}
    </div>
  );
};

export default Form2;
