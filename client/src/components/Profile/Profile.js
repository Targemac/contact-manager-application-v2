import React from "react";
import "./Profile.css";
import Header from "../Partials/Header/Header";
import Footer from "../Partials/Footer/Footer";
import {
  FaTrash,
  FaEdit,
  FaPlusSquare,
  FaTools,
  FaArrowRight,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import profilePhoto from "../../assets/charles targema (2).jpg";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { ContactContext } from "../../Context/ContactContext";

const Profile = () => {
  const { contacts, numberOfContacts } = useContext(ContactContext);
  return (
    <React.Fragment>
      <Header />
      <div className="profile_wrapper">
        <div className="profile_col_1">
          <div className="profile_col_1_sub_1">
            <img src={profilePhoto} alt="" />
          </div>
          <div className="profile_col_1_sub_2">Targema Charles</div>
          <div className="profile_col_1_sub_3">3/29/2023 &bull; 10:21 am</div>
          <div className="profile_col_1_sub_4">
            <Link to="/profile/settings">
              <FaTools /> Settings
            </Link>
            <Link to="/profile/logout">
              <FaArrowRight /> Logout
            </Link>
          </div>
        </div>

        <div className="profile_col_2">
          <div className="profile_col_2_sub_1">
            <form action="" method="get">
              <div className="search_box">
                <input type="search" name="" id="" placeholder="Find Contact" />
              </div>
            </form>
            <div className="number_of_contact_box">
              {/* {contacts.length} */}
              {numberOfContacts} &nbsp; Contacts
            </div>
            <div className="add_contact_box">
              <Link to="/profile/contact/add">
                <FaPlusSquare /> Add Contact
              </Link>
            </div>
          </div>
          <div className="profile_col_2_sub_2">
            {contacts.map((contact, index, array) => {
              return (
                <div key={contact.id} className="contact_box">
                  <div className="contact_box_item">
                    {contact.last_name.toUpperCase()} {contact.first_name}
                  </div>
                  <div className="contact_box_item">
                    <a href={`mailto:` + contact.email}>
                      <FaEnvelope /> Send Email
                    </a>
                  </div>
                  <div className="contact_box_item">
                    <FaPhone />
                    {contact.phone}
                  </div>
                  <div className="contact_box_action_grp">
                    <Link
                      to={`/profile/contact/edit/` + contact.id}
                      className="edit_btn"
                    >
                      <FaEdit />
                      Edit
                    </Link>
                    <button className="delete_btn">
                      <FaTrash />
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Profile;
