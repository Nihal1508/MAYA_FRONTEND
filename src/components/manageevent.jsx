import React from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Cover from "../assets/images/cover.png"
import Pencil from "../assets/images/pencil.png"
const ManageEvents = () => {
  const handleCopyLink = () => {
    alert("Link copied to clipboard!");
  };

  const handleEditEvent = () => {
    alert("Redirecting to edit event page...");
  };

  return (
    <div className="max-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10">
        {/* Topbar */}
        <Topbar title="Manage Events" />

        {/* Event Card */}
        <div className="bg-[#ffffff11]  p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Anand & Radhika</h2>
          <p className="text-gray-400">Reception</p>
          <p className="text-gray-500 text-sm mb-4">1 October 2024</p>

          <div className="mb-4">
            <p className="text-gray-400 mb-1">Cover Image</p>
            <img
              src= {Cover}
              alt="Event Cover"
              className="rounded-lg w-full object-cover"
            />
          </div>

          <div>
            <p className="text-gray-400 mb-1">Assigned admins</p>
            <p className="text-gray-500 text-sm">
              Nived G, Noel Paul George, Shaniya N, Nihal Muhammer Riyaz
            </p>
          </div>

          {/* Right-side Section */}
          <div className="flex justify-end items-center space-x-6 mt-6">
            <button
              onClick={handleCopyLink}
              className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-purple-500"
            >
              Copy Link
            </button>
            <div className="text-gray-500 text-sm">
              <p>1 Images uploaded</p>
              <p>0.01 GB used</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Edit Button */}
      <button
        onClick={handleEditEvent}
        className="fixed bottom-10 right-10 focus:outline-none focus:ring focus:ring-purple-500"
        style={{
          width: "78px",
          height: "78px",
          borderRadius: "25px 0px 0px 0px",
        }}
      >
        <img
          src={Pencil}
          alt="Edit Event"
          className="w-10 h-10 object-cover"
        />
      </button>
    </div>
  );
};

export default ManageEvents;
