import React from "react";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";

const AddEvent = () => {
  const handleAddAdmins = () => {
    alert("Add Admins button clicked!");
  };

  const handleSubmit = () => {
    alert("Submit button clicked!");
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10">
        {/* Topbar Component */}
        <Topbar />

        {/* Form */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <form className="space-y-6">
            {/* Title and Subtitle */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 mb-1">Title*</label>
                <input
                  type="text"
                  placeholder="Event Title"
                  className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">Subtitle</label>
                <input
                  type="text"
                  placeholder="Subtitle"
                  className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 mb-1">Start Date*</label>
                <input
                  type="date"
                  className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">End Date</label>
                <input
                  type="date"
                  className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
                />
              </div>
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
    </div>
  );
};

export default AddEvent;
