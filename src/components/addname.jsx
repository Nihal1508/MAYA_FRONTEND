import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import swirl2 from "../assets/images/swirl2.png"; // Update the path as necessary
import mayaLogo from "../assets/images/maya-logo.png"; // Add the Maya PNG logo

export default function Signup() {
  return (
    <div className="max-h-screen flex flex-col items-center bg-black text-white">
      {/* Top Section: Logo and Tagline */}
      <div className="text-center my-8">
        <img src={mayaLogo} alt="Maya Logo" className="w-48 h-auto" />
        <p className="text-lg text-gray-300 mt-2">Turn Moments into Memories</p>
      </div>

      {/* Main Content: Image and Signup Form */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full max-w-6xl p-4">
        {/* Left Section: Image */}
        <div className="flex flex-col items-center lg:items-start mb-10 lg:mb-0">
          <img src={swirl2} alt="Swirl" className="w-1/2 lg:w-3/4 mb-6" />
        </div>

        {/* Right Section: Signup Form */}
        <div className="bg-[#ffffff11] p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2">Add name</h2>
          <p className="text-gray-400 mb-6 text-sm">
            What should we call you
          </p>

          <form>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="name"
                className="w-full p-3 rounded bg-[#00000010] border  text-white"
                placeholder="Name"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-bold rounded hover:bg-gray-200"
            >
              Submit
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
