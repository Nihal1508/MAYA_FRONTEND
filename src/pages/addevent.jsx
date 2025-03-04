import React from "react";
import Topbar from "../components/topbar";

const AddEvent = () => {
  const handleAddAdmins = () => {
    alert("Add Admins button clicked!");
  };

  const handleSubmit = () => {
    alert("Submit button clicked!");
  };

  return (
    <div className="h-screen bg-[#121212] text-white w-full p-6">
      <Topbar title="Manage Events" />
      {/* Main Content */}
      <div className="h-full overflow-y-scroll p-8 pb-20 scrollbar-custom">
        {/* Topbar Component */}
        <form className="space-y-6 h-fit text-left">
          {/* Title and Subtitle */}

          <div className="">
            <label className="block text-gray-400 mb-1">Title*</label>
            <input
              type="text"
              placeholder="Event Title"
              className="w-7/12 p-2 rounded border border-gray-600 bg-transparent text-white focus:outline-none focus:ring focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Subtitle</label>
            <input
              type="text"
              placeholder="Subtitle"
              className="w-7/12 p-2 rounded border border-gray-600 bg-transparent text-white focus:outline-none focus:ring focus:ring-purple-500"
            />
          </div>


          {/* Dates */}

          <div>
            <label className="block text-gray-400 mb-1">Start Date*</label>
            <input
              type="date"
              className="w-fit p-2 rounded border border-gray-600 bg-transparent placeholder:text-gray-200 text-white focus:outline-none focus:ring focus:ring-purple-500 [&::-webkit-calendar-picker-indicator]:invert"
              style={{ color: "gray" }}
            />

          </div>
          <div>
            <label className="block text-gray-400 mb-1">End Date</label>
            <input
              type="date"
              className="w-fit p-2 rounded border border-gray-600 bg-transparent placeholder:text-gray-200 text-white focus:outline-none focus:ring focus:ring-purple-500 [&::-webkit-calendar-picker-indicator]:invert"
              style={{ color: "gray" }}
            />

          </div>


          {/* Cover Image */}
          <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
            <p className="text-gray-400 mb-2">Add Cover Image</p>
            <img src="/images/coverimage.png" alt="Placeholder" className="mx-auto w-12 h-12 mb-2" />
            <p className="text-sm text-gray-500">
              Drop images here, or{" "}
              <span className="text-purple-500 cursor-pointer">browse</span>
            </p>
            <p className="text-sm text-gray-500">Supports: JPEG, PNG, WEBP, HEVC</p>
          </div>

          {/* Add Admins */}
          <div>
            <label className="block text-gray-400 mb-1">Add Admins</label>
            <button
              type="button"
              onClick={handleAddAdmins}
              className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-500"
            >
              Add Admins
            </button>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              className="py-2 px-6 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default AddEvent;
