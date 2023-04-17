const express = require("express");
const {
  getAllContacts,
  getSingleContact,
  addContact,
  editContact,
  deleteContact,
} = require("../controllers/contactController");
const contactsRoute = express.Router();
const isAuth = require("../middlewares/isAuth");

// @ description : get all contacts
// @ route :  /api/contacts/
// @ privacy : protected
// @ method : GET
contactsRoute.get("/", isAuth, getAllContacts);

// @ description : get single contact
// @ route :  /api/contacts/:id
// @ privacy : protected
// @ method : GET
contactsRoute.get("/:id", isAuth, getSingleContact);

// @ description : add contact
// @ route :  /api/contacts
// @ privacy : protected
// @ method : POST
contactsRoute.post("/", isAuth, addContact);

// @ description : edit contact
// @ route :  /api/contacts/:id
// @ privacy : protected
// @ method : PUT
contactsRoute.put("/:id", isAuth, editContact);

// @ description : delete contact
// @ route :  /api/contacts/:id
// @ privacy : protected
// @ method : DELETE
contactsRoute.delete("/:id", isAuth, deleteContact);

module.exports = contactsRoute;
