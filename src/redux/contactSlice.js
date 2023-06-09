import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", () => {
  return axios
    .get("https://my-json-server.typicode.com/tridevVerma/React-Chat-App/users")
    .then((response) => response.data);
});

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const { freindID, ...message } = action.payload;
      const index = state.users.findIndex(
        (user) => user.id.toString() === freindID
      );
      if (index !== -1) {
        if (state.users[index].conversation === undefined) {
          state.users[index].conversation = [];
        }
        state.users[index].conversation.push(message);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.loading = true;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export const { addMessage } = contactSlice.actions;
export default contactSlice.reducer;
