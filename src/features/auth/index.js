import Login from "./Login";
import Register from "./Register";
import AuthMiddleware from "./AuthMiddleware";
import
    authReducer,
    {
        selectCurrentUser,
        selectCurrentToken,
        setCredentialsAndStoreCookie,
        logOutAndRemoveCookie,
        setCredentials,
        logOut,
    }
from "./authSlice";

export {
    Login,
    Register,
    authReducer,
    AuthMiddleware,
    selectCurrentUser,
    selectCurrentToken,
    setCredentialsAndStoreCookie,
    logOutAndRemoveCookie,
    setCredentials,
    logOut,
};
