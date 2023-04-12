import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "../features/cities";
import { bloodTypesReducer } from "../features/bloodTypes";
import { authReducer } from "../features/auth";
import { apiSlice } from "./api";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  cities: citiesReducer,
  bloodTypes: bloodTypesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'cities', 'bloodTypes']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat([apiSlice.middleware, thunk]),
  devTools: true,
});

const persistor = persistStore(store);

export { store, persistor };
