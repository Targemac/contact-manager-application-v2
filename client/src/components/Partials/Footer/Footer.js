import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {  FaUserShield, FaUserPlus } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="main-footer-wrapper">
      <div className="link-grp">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link className="nav-login-btn" to="/login">
          Login
          <FaUserShield />
        </Link>
        <Link className="nav-signup-btn" to="/signup">
          SignUp
          <FaUserPlus />
        </Link>
      </div>
      <div className="copyright-box">
        &copy; Copyright 2023 CMA, All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
