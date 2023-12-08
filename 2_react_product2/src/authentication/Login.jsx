import { useState } from "react";
import { useAuth } from "./AuthenticationProvider";
import "./Login.css";

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
      <div className="container-fluid text-center login-background login-text p-5">
        <h3 className="p-3">Login Page</h3>
        <div className="row justify-content-center">
          <div className="col-md-auto py-2 m-1">
            <label htmlFor="">User Name</label>
          </div>
          {/* <div className="w-100"></div> */}
          <div className="col-md-auto w-auto m-2 ">
            <input type="text" size="15" onChange={handleInput} />
          </div>
          {/* <div className="w-100 d-none d-lg-block"></div> */}
          <div className="col-md-auto m-2">
            <button
              type="button"
              className="login-button"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid login-background login-text p-5 ">
        <div className="row row-cols-1 rows-cols-sm-3">
          <div className="col">
            <h3 className="p-2">Login Page</h3>
          </div>
          <div className="col">
            <label className="pe-4" htmlFor="">
              User Name
            </label>
          </div>
          <div className="col">
            <input className="pe-4" type="text" onChange={handleInput} />
          </div>
          <div className="col">
            <button onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Login;
