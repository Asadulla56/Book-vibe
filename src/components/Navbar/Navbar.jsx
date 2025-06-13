// import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#23BE0A] font-bold" : "font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="listed"
          className={({ isActive }) =>
            isActive ? "text-[#23BE0A] font-bold" : "font-bold"
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/read"
          className={({ isActive }) =>
            isActive ? "text-[#23BE0A] font-bold" : "font-bold"
          }
        >
          Pages to Read
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-[#23BE0A] font-bold" : "font-bold"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-[#23BE0A] font-bold" : "font-bold"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className=" navbar-end">
        <NavLink
          to="/login"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
