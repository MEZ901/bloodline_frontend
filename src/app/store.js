import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { citiesReducer } from "../features/cities";
import { bloodTypesReducer } from "../features/bloodTypes";
import { authReducer } from "../features/auth";
import { apiSlice } from "./api";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    cities: citiesReducer,
    bloodTypes: bloodTypesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([apiSlice.middleware, thunk]),
  devTools: true,
});

export default store;
