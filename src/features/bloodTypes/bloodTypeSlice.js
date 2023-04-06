import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchBloodTypes = createAsyncThunk("bloodTypes/fetchBloodTypes", async () => {
    try {
        const response = await axios.get("http://localhost:8000/api/blood-types");
        return response.data.data;
    } catch (error) {
        return error.message;
    }
});

const initialState = {
    bloodTypes: [],
    status: 'idle',
    error: null
};

const bloodTypeSlice = createSlice({
    name: "bloodTypes",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchBloodTypes.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchBloodTypes.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.bloodTypes = action.payload;
            })
            .addCase(fetchBloodTypes.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export const selectAllBloodTypes = state => state.bloodTypes.bloodTypes;
export const getBloodTypesStatus = state => state.bloodTypes.status;
export const getBloodTypesError = state => state.bloodTypes.error;

export default bloodTypeSlice.reducer;