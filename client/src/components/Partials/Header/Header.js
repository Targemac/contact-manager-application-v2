import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
// import headStyle from "./Header.Modules.css";
import logo from "../../../assets/CMA-v2.svg";
import { FaBars, FaUserShield, FaUserPlus } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="main-navbar" >
      <div className="logo-box">
        <Link to="/">
          <img src={logo} alt="CMA Logo" />
        </Link>
      </div>
      <div className="nav-link-grp">
        <div className="nav-toggler">
          <span id="toggleBtn">
            <FaBars />
          </span>
        </div>
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
      </div>
    </nav>
  );
};

export default Header;
