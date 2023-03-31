import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Partials/Footer/Footer";
import Header from "../Partials/Header/Header";
import "./EditProfile.css";

const EditProfile = () => {
  return (
    <div>
      <Header />
      {/* start of edit profile */}
      <div className="signup-wrapper">
        <form action="" method="post">
          <div className="signup-form">
            <div className="signup-form-row form-title">Edit Profile</div>

            <div className="signup-form-row">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>

            <div className="signup-form-row">
              <input type="email" placeholder="example@mail.com" />
            </div>

            {/* <div className="signup-form-row">
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confrim Password" />
            </div> */}

            <div className="signup-form-row">
              <button>Update Account</button>
            </div>

            <div className="signup-form-row">
              <i>
                <FaArrowLeft /> &nbsp;
                <Link to="/profile/settings">Back to settings page</Link>
              </i>
            </div>
          </div>
        </form>
      </div>
      {/* end of edit profile */}
      <Footer />
    </div>
  );
};

export default EditProfile;
