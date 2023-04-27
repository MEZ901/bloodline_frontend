import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "./authSelectors";

const AuthMiddleware = ({ type, children }) => {
  const location = useLocation();
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);

  switch (type) {
    case "auth":
      return token ? (
        children
      ) : (
        <Navigate
          to={{ pathname: "/login", state: { from: location } }}
          replace
        />
      );
    case "guest":
      return token ? (
        <Navigate
          to={{ pathname: "/home", state: { from: location } }}
          replace
        />
      ) : (
        children
      );
    case "admin":
      return token && user?.roles.includes("admin") ? (
        children
      ) : (
        <Navigate
          to={{ pathname: "/home", state: { from: location } }}
          replace
        />
      );
    case "sub_admin":
      return token && user?.roles.includes("sub_admin") ? (
        children
      ) : (
        <Navigate
          to={{ pathname: "/home", state: { from: location } }}
          replace
        />
      );
  }
};

export default AuthMiddleware;
