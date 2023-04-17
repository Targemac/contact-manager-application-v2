import React, { useContext, useState } from "react";
import "./AddContact.css";
import { FaArrowLeft, FaUserPlus } from "react-icons/fa";
import Header from "../Partials/Header/Header";
import Footer from "../Partials/Footer/Footer";
import { Link, useParams } from "react-router-dom";

//
import { ContactContext, getContact } from "../../Context/ContactContext";

const EditContact = () => {
  const { id } = useParams();
  const { getContact } = useContext(ContactContext);
  const foundContact = getContact(id);

  const [state, setState] = useState({
    first_name: foundContact.first_name,
    last_name: foundContact.last_name,
    email: foundContact.email,
    phone: foundContact.phone,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div>
      <Header />
      {/* start of add contact wrapper */}
      <div className="contact_wrapper">
        <form action="" method="post">
          <div className="page_row_1">
            <div className="page_row_1_a">
              <FaUserPlus /> Edit Contact ({foundContact.first_name})
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
              <input
                type="text"
                placeholder="First name"
                name="first_name"
                value={state.first_name}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last name"
                name="last_name"
                value={state.last_name}
                onChange={handleChange}
              />
            </div>
            <div className="input_grp">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                value={state.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="page_row_3">
            {/* <div className="btn_grp"> */}
            <Link to="/profile" className="cancel_btn">
              Cancel
            </Link>
            <button className="create_btn">Update</button>
            {/* </div> */}
          </div>
        </form>
      </div>
      {/* end of add contact wrapper */}
      <Footer />
    </div>
  );
};

export default EditContact;
