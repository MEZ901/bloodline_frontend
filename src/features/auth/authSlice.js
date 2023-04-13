import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, authorization } = action.payload;
      state.user = user;
      state.token = authorization.token;
    },
    authLogOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, authLogOut } = authSlice.actions;

export default authSlice.reducer;
