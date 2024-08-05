// import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "../redux/contactsSlice";
// import { filtersReducer } from "./filtersSlice";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "contacts",
//   storage,
// };

// const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

// export const store = configureStore({
//   reducer: {
//     contacts: persistedContactsReducer,
//     filters: filtersReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

import contactsReduser from "./contactsSlice";
import filtersReduser from "./filtersSlice";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: { contacts: contactsReduser, filters: filtersReduser },
});
