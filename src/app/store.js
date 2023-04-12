import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { citiesReducer } from "../features/cities";
import { bloodTypesReducer } from "../features/bloodTypes";
import { authReducer } from "../features/auth";
import { apiSlice } from "./api";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  cities: citiesReducer,
  bloodTypes: bloodTypesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [apiSlice.reducerPath]
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
