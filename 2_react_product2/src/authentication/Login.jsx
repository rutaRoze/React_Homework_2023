import { useState } from "react";
import { useAuth } from "./AuthenticationProvider";

const Login = () => {
  const [loginUser, setLoginUser] = useState();
  const { login } = useAuth(); // arba useContext(AuthContext);

  const handleInput = (event) => {
    setLoginUser(event.target.value);
  };

  const handleLogin = () => {
    login(loginUser);
  };

  return (
    <>
      <h1>Login Page</h1>
      <label htmlFor="">User Name</label>
      <input type="text" onChange={handleInput} />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
