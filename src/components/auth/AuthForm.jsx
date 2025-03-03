import React from 'react'
import { Link } from 'react-router-dom';

function AuthForm({ type }) {
    let route = ''
    if (type === 'login') {
        route = '/signup'
    }
    else {
        route = '/'
    }
    return (
        <div className={`bg-[#ffffff11] backdrop-blur-sm p-10 rounded-3xl shadow-lg w-full max-w-md ${type == 'signup' ? 'absolute right-0 left-0 mx-auto' : 'relative'}`} >
            <h2 className="text-2xl text-left font-bold mb-2">{type === 'login' ? 'Login' : 'Sign Up'}</h2>
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
                    {type === 'login' ? 'Login' : 'Sign Up'}
                </button>
            </form>

            {/* Footer Links */}
            <p className="mt-6 text-center ">
                <span className='text-white '>
                    {type === 'login' ? 'Don\'t have an account? ' : 'Already have an account? '}
                </span>
                <Link to={route} className="text-purple-500 hover:underline">
                    {type === 'login' ? 'Sign Up' : 'Login'}
                </Link>
            </p>
        </div>
    )
}

export default AuthForm;
