import { useState } from "react";

import ContactList from "./ContactList";

import inputs from "../constants/inputs";
import { v4 } from "uuid";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const addHandler = (e) => {
    e.preventDefault();
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("please enter valid data!");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };
const deleteHandler=(i)=>{
 const  newContacts=contacts.filter(contact=>contact.id !== id);
 setContacts(newContacts);
}

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  return (
    <div>
      <div>
        {inputs.map((input,index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}

        <button onClick={addHandler}> Add Contact </button>
      </div>
      <div>{alert && <p>{alert}</p>}</div>
      <ContactList contacts={contacts} deleteHandler={deleteHandler}/>
    </div>
  );
}

export default Contacts;
