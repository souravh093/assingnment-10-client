import React from "react";
import "./ActiveLink.css";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "border-b-2 border-blue-600" : "")}>
        {children}
    </NavLink>
  );
};

export default ActiveLink;
