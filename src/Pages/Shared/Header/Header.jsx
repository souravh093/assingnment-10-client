import React, { useContext, useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaSearch, FaBars } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import { AuthContext } from "../../../Auth/AuthProvider";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser().then().catch();
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between items-center py-10">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-4xl text-blue-400" />
          <div>
            <p>523 Sylvan Ave</p>
            <p>Mountain View, CA 94041 USA</p>
          </div>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
        <Link
          to="/contact"
          className="flex items-center gap-2 border-2 py-2 px-5 rounded-md border-blue-400"
        >
          <FaEnvelope className="text-blue-400" />
          <p className="text-lg font-semibold">GET IN TOUCH</p>
        </Link>
      </div>

      <hr className="w-full" />
      <div className="navbar bg-base-100">
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
              <ActiveLink to="/">Home</ActiveLink>
              <ActiveLink to="/blog">Blog</ActiveLink>
            </ul>
          </div>
          <div className="md:flex hidden gap-10">
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/blog">Blog</ActiveLink>
          </div>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
              </div>
              <Link onClick={handleLogout}>Logout</Link>
            </div>
          ) : (
            <ActiveLink to="/login">Login</ActiveLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
