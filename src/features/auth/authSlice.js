import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

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
        logOut: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});

export const { setCredentials, logOut } = authSlice.actions;

export const setCredentialsAndStoreCookie = (userData) => (dispatch) => {
    Cookies.set('user', JSON.stringify(userData.user));
    Cookies.set('token', JSON.stringify(userData.authorization.token));
    dispatch(setCredentials(userData));
};

export const logOutAndRemoveCookie = () => (dispatch) => {
    Cookies.remove('user');
    Cookies.remove('token');
    dispatch(logOut());
};

export const selectCurrentUser = state => state.auth.user;
export const selectCurrentToken = state => state.auth.token;

export default authSlice.reducer;
