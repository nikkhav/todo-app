import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  username: null,
  isLoggedIn: false,
};

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setIsLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const currentUserActions = currentUserSlice.actions;

export default currentUserSlice.reducer;
