import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api";

const initialState = {
  users: [],
  status: "idle",
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
        .addMatcher(apiSlice.endpoints.getUsers.matchPending, (state, action) => {
            state.status = "loading";
        })
        .addMatcher(apiSlice.endpoints.getUsers.matchFulfilled, (state, action) => {
            state.status = "succeeded";
            state.hospitals = action.payload;
        })
        .addMatcher(apiSlice.endpoints.getUsers.matchRejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
}
});

export default usersSlice.reducer;
