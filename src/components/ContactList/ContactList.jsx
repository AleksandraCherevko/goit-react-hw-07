import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContactsFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);

  const textFilter = useSelector(selectContactsFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(textFilter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            phoneNumber={contact.number}
          />
        </li>
      ))}
    </ul>
  );
}
