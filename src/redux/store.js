import { configureStore } from "@reduxjs/toolkit";
import loggedUserReducer from "./loggedUserSlice";
import contactReducer from "./contactSlice";

export const store = configureStore({
  reducer: {
    loggedUser: loggedUserReducer,
    contacts: contactReducer,
  },
});
