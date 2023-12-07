import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthenticationProvider";
import Unauthorized from "./Unauthorized";

const Authorization = ({ permissions }) => {
  const { user } = useAuth();

  if (user.username) {
    const userPermissions = user.permissions;
    const isAllowed = permissions.some((allowed) =>
      userPermissions.includes(allowed)
    );

    return isAllowed ? <Outlet /> : <Unauthorized />;
  }

return <Navigate to="/login"/>;

};

export default Authorization;
