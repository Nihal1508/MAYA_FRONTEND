import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import swirl2 from "../assets/images/swirl2.png"; // Update the path as necessary chelapo mattanam
import mayaLogo from "../assets/images/maya-logo.png";

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
          <h2 className="text-2xl font-bold mb-2">Sign up</h2>
          <p className="text-gray-400 mb-6 text-sm">
            Welcome, Manage, Organize, and Unlock the Power of Maya.
          </p>

          <form>
            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 rounded bg-[#00000010] border border-gray-700 text-white"
                placeholder="Email"
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 rounded bg-[#00000010] border-gray-700 text-white"
                placeholder="Password"
              />
            </div>

            {/* Signup Button def change this to connect it to addname.jsx */}
            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-bold rounded hover:bg-gray-200"
            >
              Sign Up
            </button>
          </form>

          {/* Footer Links need to change this perhaps... */}
          <p className="mt-6 text-center text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
