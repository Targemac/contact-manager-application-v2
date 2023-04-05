// @ description : get all contacts
// @ route :  /api/contacts/
// @ privacy : protected
// @ method : GET
const getAllContacts = async (req, res) => {
  res.json({ message: "Get all contacts!" });
};

// @ description : get single contact
// @ route :  /api/contacts/:id
// @ privacy : protected
// @ method : GET
const getSingleContact = async (req, res) => {
  res.json({ message: "Get single contact!" });
};

// @ description : add contact
// @ route :  /api/contacts
// @ privacy : protected
// @ method : POST
const addContact = async (req, res) => {
  res.json({ message: "add contact!" });
};

// @ description : edit contact
// @ route :  /api/contacts/:id
// @ privacy : protected
// @ method : PUT
const editContact = async (req, res) => {
  res.json({ message: "edit contact!" });
};

// @ description : delete contact
// @ route :  /api/contacts/:id
// @ privacy : protected
// @ method : DELETE
const deleteContact = async (req, res) => {
  res.json({ message: "delete contact!" });
};

module.exports = {
  getAllContacts,
  getSingleContact,
  addContact,
  editContact,
  deleteContact,
};
