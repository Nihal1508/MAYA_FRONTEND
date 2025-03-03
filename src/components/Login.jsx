import React from "react";
import swirl from "../assets/images/swirl.png"; 
import mayaLogo from "../assets/images/maya-logo.png"; 
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="max-h-screen flex flex-col items-center bg-black text-white">
            {/* Top Section: Logo and Tagline */}
            <div className="text-center my-8">
                <img
                    src={mayaLogo}
                    alt="Maya Logo"
                    className="w-48 h-auto"
                />
                <p className="text-lg text-gray-300 mt-2">Turn Moments into Memories</p>
            </div>

            {/* Main Content: Image and Login Form */}
            <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full max-w-6xl p-4">
                {/* Left Section: Image */}
                <div className="flex flex-col items-center lg:items-start mb-10 lg:mb-0">
                    <img
                        src={swirl}
                        alt="Swirl"
                        className="w-1/2 lg:w-3/4 mb-6"
                    />
                </div>

                {/* Right Section: Login Form */}
                <div className="bg-[#ffffff11] p-10 rounded-3xl shadow-lg w-full max-w-md">
                    <h2 className="text-2xl text-left font-bold mb-2">Login</h2>
                    <p className="text-gray-200 mb-6 text-xs text-left">
                        Welcome Back. Manage, Organize, and Unlock the Power of Maya.
                    </p>

                    <form className="mx-10"> 

                        {/* Email Field */}
                        <div className="mb-4">
                        
                            <input
                                type="email"
                                className="w-full p-3 rounded bg-[#00000010] border border-gray-700 text-white"
                                placeholder="Email"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-4">
                    
                            <input
                                type="password"
                                className="w-full p-3 rounded bg-[#00000010] border border-gray-700 text-white"
                                placeholder="Password"
                            />
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-white text-black font-bold rounded hover:bg-gray-200"
                        >
                            Login
                        </button>
                    </form>

                    {/* Footer Links */}
                    <p className="mt-6 text-center text-gray-400">
                    Do not have an account?{" "}
                        <Link to="/signup" className="text-purple-500 hover:underline">
                                    Sign up
                        </Link>
                        </p>
                </div>
            </div>
        </div>
    );
}
