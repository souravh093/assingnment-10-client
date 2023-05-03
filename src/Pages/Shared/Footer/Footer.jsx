import React from "react";
import logo from "../../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-red-50 mt-24">
      <div className="footer p-10 max-w-7xl mx-auto text-base-content">
      <div>
        <img src={logo} alt="" />
        <p>
          SPICE Route company LTD
          <br />
          Providing reliable tech since 2010
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
