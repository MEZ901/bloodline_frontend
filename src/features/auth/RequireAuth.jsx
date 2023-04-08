import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";

const RequireAuth = ({children}) => {
  const location = useLocation();
  const token = useSelector(selectCurrentToken);
  return (
    token
      ? children
      : <Navigate to={{ pathname: "/login", state: { from: location } }} replace />
  )
}

export default RequireAuth