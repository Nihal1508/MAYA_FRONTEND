import React from "react";
import swirl2 from "../assets/images/swirl2.png"; // Update the path as necessary chelapo mattanam
import mayaLogo from "../assets/images/maya-logo.png";
import AuthForm from "../components/auth/AuthForm";
import AddNameForm from "../components/auth/AddNameForm";

export default function Signup() {
  let success = true;
  return (
    <div className="max-h-screen flex flex-col items-center bg-black text-white">
      {/* Top Section: Logo and Tagline */}
      <div className="text-center my-8">
        <img src={mayaLogo} alt="Maya Logo" className="w-48 h-auto" />
        <p className="text-lg text-gray-300 mt-2">Turn Moments into Memories</p>
      </div>
      {/* Main Content: Image and Signup Form */}
      <div className="flex relative w-full flex-row items-start justify-start">
        {/* Left Section: Image */}
        <div className="">
          <img src={swirl2} alt="Swirl" className="w-9/12 -mt-4 ml-28" />
        </div>
        {/* Right Section: Signup Form */}
        {
          success ? <AddNameForm /> : <AuthForm type="signup" />
        }
      </div>
    </div>
  );
}
