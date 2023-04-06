import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "../features/cities";
import { bloodTypesReducer } from "../features/bloodTypes";

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    bloodTypes: bloodTypesReducer,
  },
});

export default store;
