import contactsReduser from "./contactsSlice";
import filtersReduser from "./filtersSlice";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: { contacts: contactsReduser, filters: filtersReduser },
});
