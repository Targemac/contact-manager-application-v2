import React, { createContext, useState } from "react";

//array of contacts to be fetched from another file
const contactsCollection = [
  {
    id: 1,
    last_name: "targema",
    first_name: "charles",
    email: "targemac@gmail.com",
    phone: "08097866451",
  },
  {
    id: 2,
    last_name: "john",
    first_name: "doe",
    email: "jd@gmail.com",
    phone: "09023546882",
  },
  {
    id: 3,
    last_name: "tina",
    first_name: "charles",
    email: "tc@gmail.com",
    phone: "03015654954",
  },
  {
    id: 4,
    last_name: "kelvin",
    first_name: "hart",
    email: "kh@gmail.com",
    phone: "01014589523",
  },
  {
    id: 5,
    last_name: "tracy",
    first_name: "teddy",
    email: "tt@gmail.com",
    phone: "05021346896",
  },
  {
    id: 6,
    last_name: "david",
    first_name: "banner",
    email: "db@gmail.com",
    phone: "05021346896",
  },
];

export const ContactContext = createContext();

export const getContact = (id) => {
  const found = contactsCollection.find(
    (contact, index, arr) => contact.id === Number(id)
  );
  return found;
};

export const ContactProvider = (props) => {
  const [contacts, setContacts] = useState(contactsCollection);
  const numberOfContacts = contacts.length;
  return (
    <ContactContext.Provider
      value={{ contacts, setContacts, numberOfContacts, getContact }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
