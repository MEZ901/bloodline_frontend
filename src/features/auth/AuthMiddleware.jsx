import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";

const AuthMiddleware = ({ type, children }) => {
  const location = useLocation();
  const token = useSelector(selectCurrentToken);
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
  }
};

export default AuthMiddleware;
