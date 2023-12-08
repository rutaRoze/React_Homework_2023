import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthenticationProvider";

function UserProfile() {
  const { user, logout } = useAuth(); // arba useContext(AuthCOntext)
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: "#3b5a5a",
    color: "rgb(249, 250, 251)",
    borderRadius: "8px",
    width: "5rem",
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#3fc9c9",
          height: "100vh",
          color: "#3b5a5a",
        }}
      >
        <h3 className="py-5">Welcome {user.username}</h3>
        <button
          style={buttonStyle}
          onClick={() => {
            logout();
            navigate(`/login`);
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default UserProfile;
