import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthenticationProvider";

const Authentication = ({ children }) => {
  const { user } = useAuth();

  if (!user.username) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default Authentication;
