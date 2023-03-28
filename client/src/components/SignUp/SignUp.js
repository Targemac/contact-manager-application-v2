import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import Header from "../Partials/Header/Header";
import Footer from "../Partials/Footer/Footer";

const SignUp = () => {
  return (
    <React.Fragment>
      <Header />
      {/* start of signup wrapper */}
      <div className="signup-wrapper">
        <form action="" method="post">
          <div className="signup-form">
            <div className="signup-form-row form-title">SignUp</div>

            <div className="signup-form-row">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>

            <div className="signup-form-row">
              <input type="email" placeholder="example@mail.com" />
            </div>

            <div className="signup-form-row">
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confrim Password" />
            </div>

            <div className="signup-form-row">
              <label for="termsConditions">
                <input type="checkbox" id="termsConditions" />I agree to the
                <Link to="/termsConiditions">Terms and Conditions</Link>
              </label>
            </div>

            <div className="signup-form-row">
              <button>Create Account</button>
            </div>

            <div className="signup-form-row">
              <i>
                Already have an account? &nbsp;
                <Link to="/login">Login here</Link>
              </i>
            </div>
          </div>
        </form>
      </div>
      {/* end of signup wrapper */}
      <Footer />
    </React.Fragment>
  );
};

export default SignUp;
