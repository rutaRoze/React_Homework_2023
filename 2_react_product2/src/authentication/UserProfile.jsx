import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthenticationProvider";

function UserProfile() {
  const { user, logout } = useAuth(); // arba useContext(AuthCOntext)
  const navigate = useNavigate();

  return (
    <>
      <h1>Welcome {user.username}</h1>
      <button
        onClick={() => {
          logout();
          navigate(`/login`);
        }}
      >
        Logout
      </button>
    </>
  );
}

export default UserProfile;
