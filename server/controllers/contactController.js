const ContactModel = require("../models/ContactModel");

// @ description : get all contacts
// @ route :  /api/contacts/
// @ privacy : protected
// @ method : GET
const getAllContacts = async (req, res) => {
  // get user id
  const { id } = req.user;

  try {
    // find user by id in db
    const user = await ContactModel.findOne({ user_id: id });

    // if id  not found
    if (!user) {
      res.status(403).send({ message: "User not found" });
      return;
    }

    // if user found
    const allContacts = await ContactModel.find({ user_id: id });

    // send to front-end
    res.status(200).json({
      message: "All Contacts retrieved!",
      data: allContacts,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// @ description : get single contact
// @ route :  /api/contacts/:id
// @ privacy : protected
// @ method : GET
const getSingleContact = async (req, res) => {
  // get user id
  const user_id = req.user.id;

  // get contact id
  const { id } = req.params;

  try {
    // check for contact
    const found_contact = await ContactModel.find({
      _id: id,
      user_id: user_id,
    });

    res.status(200).json({
      message: "Contact retrieved!",
      data: found_contact,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// @ description : add contact
// @ route :  /api/contacts
// @ privacy : protected
// @ method : POST
const addContact = async (req, res) => {
  // get user id from req.user
  const { id } = req.user;

  try {
    // get form details
    const { first_name, last_name, email, phone } = req.body;

    // check fields are not empty
    if (!first_name || !last_name || !email || !phone) {
      res.status(400).send({ message: "All fields are required." });
      return;
    }

    // insert data into db
    const newContact = await ContactModel.create({
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      user_id: id,
    });

    // if contact not created
    if (!newContact) {
      res.status(400).send({ message: "Contact not created!" });
      return;
    }

    res.status(201).json({
      message: "Contact added successfully!",
      data: newContact,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// @ description : edit contact
// @ route :  /api/contacts/:id
// @ privacy : protected
// @ method : PUT
const editContact = async (req, res) => {
  // get user id
  const user_id = req.user.id;

  // get contact id
  const { id } = req.params;

  try {
    // check for contact
    const found_contact = await ContactModel.find({
      _id: id,
      user_id: user_id,
    });

    // console.log(found_contact);
    console.log(found_contact.user_id);
    console.log(user_id);

    // check authourization
    if (!found_contact) {
      res
        .status(403)
        .send({ message: "You do not have permission to update this contact" });
      return;
    }

    // update contact details
    const updated_contact = await ContactModel.findByIdAndUpdate(
      { _id: id },
      {
        first_name: req?.body?.first_name,
        last_name: req?.body?.last_name,
        phone: req?.body?.phone,
        email: req?.body?.email,
      },
      { new: true }
    );

    res.status(200).json({
      message: "Contact updated successfully!",
      data: updated_contact,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// @ description : delete contact
// @ route :  /api/contacts/:id
// @ privacy : protected
// @ method : DELETE
const deleteContact = async (req, res) => {
  // get user id
  const user_id = req.user.id;

  // get contact id
  const { id } = req.params;

  try {
    // check for contact
    const found_contact = await ContactModel.find({
      _id: id,
      user_id: user_id,
    });

    // check authourization
    if (!found_contact) {
      res
        .status(403)
        .send({ message: "You do not have permission to delete this contact" });
      return;
    }

    // delete contact detail
    const deleted_contact = await ContactModel.findByIdAndDelete({ _id: id });

    res.status(200).json({
      message: "Contact deleted successfully!",
      data: deleted_contact,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAllContacts,
  getSingleContact,
  addContact,
  editContact,
  deleteContact,
};
