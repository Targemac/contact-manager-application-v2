import React from "react";
import Footer from "../Partials/Footer/Footer";
import Header from "../Partials/Header/Header";
import "./Settings.css";
import { Link, NavLink } from "react-router-dom";
import {
  FaUserEdit,
  FaUserShield,
  FaUserLock,
  FaArrowLeft,
} from "react-icons/fa";

const Settings = () => {
  return (
    <div>
      <Header />
      {/* start of settings */}
      <section className="settings_wrapper">
        <div className="settings_col_1 edit_profile_col">
          <div className="edit_profile_row_1">Profile</div>
          <div className="edit_profile_row_2">
            <FaUserEdit className="settings_icon_grp" />
          </div>
          <div className="edit_profile_row_3">
            <Link to="/profile/edit">Edit Profile</Link>
          </div>
        </div>
        {/* ---- */}
        <div className="settings_col_2 change_password_col">
          <div className="change_password_row_1">Password</div>
          <div className="change_password_row_2">
            <FaUserLock className="settings_icon_grp" />
          </div>
          <div className="change_password_row_3">
            <Link to="/profile/password">Change Password</Link>
          </div>
        </div>
        {/* ---- */}
        <div className="settings_col_3 delete_account_col">
          <div className="delete_account_row_1">Account</div>
          <div className="delete_account_row_2">
            <FaUserShield className="settings_icon_grp" />
          </div>
          <div className="delete_account_row_3">
            <Link to="/profile/delete-account">Delete Account</Link>
          </div>
        </div>
      </section>
      <section className="settings_wrapper">
        <span>
          <NavLink className="back_to_profile_btn" to="/profile">
          <FaArrowLeft /> &nbsp;
            Back to Profile page
          </NavLink>
        </span>
      </section>
      {/* end of settings */}
      <Footer />
    </div>
  );
};

export default Settings;
