import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <div>
          <FaMapMarkerAlt />
          <div>
            <p>523 Sylvan Ave</p>
            <p>Mountain View, CA 94041 USA</p>
          </div>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default Header;
