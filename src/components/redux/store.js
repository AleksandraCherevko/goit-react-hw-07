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

// export const persistor = persistStore(store);export const persistor = persistStore(store);
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../redux/contactsSlice"; // Исправлено: импортировать редуктор из правильного файла
import { filtersReducer } from "../redux/filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
