import React from "react";
import "./AddContact.css";
import { FaArrowLeft, FaUserPlus } from "react-icons/fa";
import Header from "../Partials/Header/Header";
import Footer from "../Partials/Footer/Footer";
import { Link } from "react-router-dom";

const AddContact = () => {
  return (
    <div>
      <Header />
      {/* start of add contact wrapper */}
      <div className="contact_wrapper">
        <form action="" method="post">
          <div className="page_row_1">
            <div className="page_row_1_a">
              <FaUserPlus /> Add Contact
            </div>
            <div className="page_row_1_b">
              <Link to="/profile">
                <FaArrowLeft />
                Back
              </Link>
            </div>
          </div>
          <div className="page_row_2">
            <div className="input_grp">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <div className="input_grp">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone" />
            </div>
          </div>
          <div className="page_row_3">
            {/* <div className="btn_grp"> */}
              <Link to="/profile" className="cancel_btn">
                Cancel
              </Link>
              <button className="create_btn">Create</button>
            {/* </div> */}
          </div>
        </form>
      </div>
      {/* end of add contact wrapper */}
      <Footer />
    </div>
  );
};

export default AddContact;
