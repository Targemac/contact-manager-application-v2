import React from "react";
import Footer from "../Partials/Footer/Footer";
import Header from "../Partials/Header/Header";
import "./ChangePassword.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ChangePassword = () => {
  return (
    <div>
      <Header />
      {/* start of change password */}
      <div className="signup-wrapper">
        <form action="" method="post">
          <div className="signup-form">
            <div className="signup-form-row form-title">Change Password</div>

            <div className="signup-form-row">
              <input type="password" placeholder="Old Password" />
            </div>

            <div className="signup-form-row">
              <input type="password" placeholder="New Password" />
              <input type="password" placeholder="Confrim New Password" />
            </div>

            <div className="signup-form-row">
              <button>Update Password </button>
            </div>

            <div className="signup-form-row">
              <Link to="/profile/settings">
                <FaArrowLeft /> &nbsp; Back to settings page
              </Link>
            </div>
          </div>
        </form>
      </div>
      {/* end of change password */}
      <Footer />
    </div>
  );
};

export default ChangePassword;
