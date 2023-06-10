import { configureStore } from "@reduxjs/toolkit";
import loggedUserReducer from "./loggedUserSlice";
import contactReducer from "./contactSlice";

// Combine all reducers and export store
export const store = configureStore({
  reducer: {
    loggedUser: loggedUserReducer,
    contacts: contactReducer,
  },
});
