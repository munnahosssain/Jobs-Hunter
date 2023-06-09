import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navBar = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/applied-job">Applied Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-200">
      <div className="lg:mx-48">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navBar}
              </ul>
            </div>
            <Link to="/" className="cursor-pointer font-bold text-2xl">
              Jobs Hunter
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navBar}</ul>
          </div>
          <div className="navbar-end">
            <Link to="/apply-jobs" className="btn bg-[#7E90FE] border-none">
              Star Applying
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
