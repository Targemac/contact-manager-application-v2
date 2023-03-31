import React from "react";
import Footer from "../Partials/Footer/Footer";
import Header from "../Partials/Header/Header";
import "./DeleteAccount.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const DeleteAccount = () => {
  return (
    <div>
      <Header />
      {/* start of delete account */}
      <div className="signup-wrapper">
        <form action="" method="post">
          <div className="signup-form">
            <div className="signup-form-row form-title">Delete Account</div>

            <div className="signup-form-row">
              <input type="password" placeholder="Current Password" />
            </div>

            <div className="signup-form-row">
              <button>Delete Account </button>
            </div>

            <div className="signup-form-row">
              <Link to="/profile/settings">
                <FaArrowLeft /> &nbsp; Back to settings page
              </Link>
            </div>
          </div>
        </form>
      </div>
      {/* end  of delete account */}
      <Footer />
    </div>
  );
};

export default DeleteAccount;
