import { createSlice } from "@reduxjs/toolkit";

// Currently logged user data
const initialState = {
  value: {
    id: 0,
    firstname: "Tridev",
    lastname: "Verma",
    image: "https://robohash.org/nisietqui.png",
    phone: "+12 345 678 9101",
    gender: "male",
    city: "Delhi",
    about: "Web Developer",
    active: true,
  },
};

export const loggedUserData = createSlice({
  name: "loggedUser",
  initialState,
  reducers: {
    getValue: (state) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getValue } = loggedUserData.actions;

export default loggedUserData.reducer;
