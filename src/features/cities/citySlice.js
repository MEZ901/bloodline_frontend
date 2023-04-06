import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCities = createAsyncThunk("cities/fetchCities", async () => {
    try {
        const response = await axios.get("http://localhost:8000/api/cities");
        return response.data.data;
    } catch (error) {
        return error.message;
    }
});

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
            .addCase(fetchCities.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchCities.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.cities = action.payload;
            })
            .addCase(fetchCities.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export const selectAllCities = state => state.cities.cities;
export const getCitiesStatus = state => state.cities.status;
export const getCitiesError = state => state.cities.error;

export default citiesSlice.reducer;