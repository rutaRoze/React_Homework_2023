import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    permissions: [],
  });

  const navigate = useNavigate();
  const location = useLocation();

  const login = (userWhoWantsToLogin) => {
    if (userWhoWantsToLogin === "admin") {
      setUser({
        username: userWhoWantsToLogin,
        permissions: ["view_form"],
      });
    } else {
      setUser({ username: userWhoWantsToLogin, permissions: "view_contacts" });
    }
    navigate(location.state?.path || "/profile", { replace: true });
  };

  const logout = () => {
    setUser({ username: "", permissions: [] });
  };

  console.log("mano user", user);
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthenticationProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
