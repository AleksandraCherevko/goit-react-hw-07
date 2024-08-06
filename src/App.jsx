import css from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./components/redux/contactsOps";

export default function App() {
  const loading = useSelector((state) => state.contacts.loading);
  const isError = useSelector((state) => state.contacts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.phonebook}>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>

        <div className={css.phonebookContentWrap}>
          <div className={css.containerCol}>
            <ContactForm />
          </div>
          <div className={css.containerCol}>
            <div className={css.phonebookContactsWrap}>
              <SearchBox />
              {loading && <p>Loading...</p>}
              {isError && <p>Error</p>}
              <ContactList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
