const express = require("express");
const {
  getAllContacts,
  getSingleContact,
  addContact,
  editContact,
  deleteContact,
} = require("../controllers/contactController");
const contactsRoute = express.Router();

// @ description : get all contacts
// @ route :  /api/contacts/
// @ privacy : protected
// @ method : GET
contactsRoute.get("/", getAllContacts);

// @ description : get single contact
// @ route :  /api/contacts/:id
// @ privacy : protected
// @ method : GET
contactsRoute.get("/:id", getSingleContact);

// @ description : add contact
// @ route :  /api/contacts
// @ privacy : protected
// @ method : POST
contactsRoute.post("/", addContact);

// @ description : edit contact
// @ route :  /api/contacts/:id
// @ privacy : protected
// @ method : PUT
contactsRoute.put("/:id", editContact);

// @ description : delete contact
// @ route :  /api/contacts/:id
// @ privacy : protected
// @ method : DELETE
contactsRoute.delete("/:id", deleteContact);

module.exports = contactsRoute;
