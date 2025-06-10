// import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 text-black">
      {/* Main Login Area */}
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Welcome Bookshelf</h2>
            <h2 className="text-3xl font-bold">Sign In</h2>
            <p className="text-sm text-gray-600">Log in to your account</p>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder=""
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder=""
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 text-black" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-black hover:underline">Forgot?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center text-gray-600">
            Don’t have an account?{' '}
            <Link to="/register" className="text-black font-semibold hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;