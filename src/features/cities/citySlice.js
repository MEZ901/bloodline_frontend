import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api";

const initialState = {
    cities: [],
    status: 'idle',
    error: null
};

const citiesSlice = createSlice({
    name: "cities",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addMatcher(apiSlice.endpoints.getCities.matchPending, (state, action) => {
                state.status = "loading";
            })
            .addMatcher(apiSlice.endpoints.getCities.matchFulfilled, (state, action) => {
                state.status = "succeeded";
                state.cities = action.payload;
            })
            .addMatcher(apiSlice.endpoints.getCities.matchRejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default citiesSlice.reducer;