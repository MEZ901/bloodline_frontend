import Login from "./Login";
import Register from "./Register";
import authReducer from "./authSlice";
import {
    setCredentials,
    logOut,
    selectCurrentUser,
    selectCurrentToken
} from "./authSlice";


export {
    Login,
    Register,
    authReducer,
    setCredentials,
    logOut,
    selectCurrentUser,
    selectCurrentToken,
};
