import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api";

const initialState = {
    hospitals: [],
    status: 'idle',
    error: null
};

const hospitalSlice = createSlice({
    name: "hospitals",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addMatcher(apiSlice.endpoints.getHospitals.matchPending, (state, action) => {
                state.status = "loading";
            })
            .addMatcher(apiSlice.endpoints.getHospitals.matchFulfilled, (state, action) => {
                state.status = "succeeded";
                state.hospitals = action.payload;
            })
            .addMatcher(apiSlice.endpoints.getHospitals.matchRejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default hospitalSlice.reducer;