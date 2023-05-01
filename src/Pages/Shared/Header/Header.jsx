import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaSearch } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center py-10">
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
          <Link to="/contact" className="flex items-center gap-2 border-2 py-2 px-5 rounded-md border-blue-400">
            <FaEnvelope className="text-blue-400" />
            <p className="text-lg font-semibold">GET IN TOUCH</p>
          </Link>
      </div>

        <hr className="w-full pb-5" />
      <nav className="flex items-center justify-between text-lg">
        <div className="flex gap-10">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/blog">Contact us</Link>
        </div>
        <div className="flex items-center gap-5">
            <FaSearch className="text-2xl" />
            <Link to="/login">Login</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
