import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Partials/Footer/Footer";
import Header from "../Partials/Header/Header";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Logging in...");

    const form = new FormData(e.currentTarget);
    const userData = Object.fromEntries(form);

    try {
      const BACKEND_URL = `http://localhost:5000/api/users/login`;

      const response = await axios.post(BACKEND_URL, userData);

      if (response.data.token) {
        // saving token to browser temporary storage
        window.localStorage.setItem("ACCESS_TOKEN", response.data.token);

        // redirecting to profile page
        navigate(`/profile`);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <React.Fragment>
      <Header />
      {/* start of login component */}
      <div className="signup-wrapper">
        <form action="" method="post" onSubmit={handleLogin}>
          <div className="signup-form">
            <div className="signup-form-row form-title">Login</div>
            <div className="signup-form-row form-error-message"> {error} </div>
            <div className="signup-form-row form-error-message">{message}</div>

            <div className="signup-form-row">
              <input type="email" placeholder="example@mail.com" name="email" />
            </div>

            <div className="signup-form-row">
              <input type="password" placeholder="Password" name="password" />
            </div>

            <div className="signup-form-row">
              <button>Login</button>
            </div>

            <div className="signup-form-row">
              <i>
                Don't have an account? &nbsp;
                <Link to="/signup">Create Account here</Link>
              </i>
            </div>
          </div>
        </form>
      </div>
      {/* end of login component */}
      <Footer />
    </React.Fragment>
  );
};

export default Login;
